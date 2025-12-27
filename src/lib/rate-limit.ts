/**
 * Production Rate Limiting with Redis
 * 
 * This module provides Redis-based rate limiting for production environments.
 * Falls back to in-memory rate limiting for development.
 * 
 * To use Redis in production:
 * 1. Install ioredis: npm install ioredis
 * 2. Set REDIS_URL in your environment variables
 * 3. Import and use rateLimit() function in your API routes
 */

// Type definitions
interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

interface RateLimitOptions {
  maxRequests?: number;
  windowMs?: number;
}

// In-memory fallback for development
const inMemoryStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries periodically
let lastCleanup = Date.now();
function cleanupInMemoryStore() {
  const now = Date.now();
  if (now - lastCleanup < 60000) return; // Only clean every minute
  
  lastCleanup = now;
  for (const [key, value] of inMemoryStore.entries()) {
    if (now > value.resetTime) {
      inMemoryStore.delete(key);
    }
  }
}

/**
 * In-memory rate limiter (development/fallback)
 */
async function inMemoryRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): Promise<RateLimitResult> {
  cleanupInMemoryStore();
  
  const now = Date.now();
  const record = inMemoryStore.get(key);
  
  if (!record || now > record.resetTime) {
    inMemoryStore.set(key, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: maxRequests - 1, reset: now + windowMs };
  }
  
  if (record.count >= maxRequests) {
    return { success: false, remaining: 0, reset: record.resetTime };
  }
  
  record.count++;
  return { success: true, remaining: maxRequests - record.count, reset: record.resetTime };
}

/**
 * Redis rate limiter (production)
 * Uses sliding window algorithm for accurate rate limiting
 */
async function redisRateLimit(
  redisClient: unknown,
  key: string,
  maxRequests: number,
  windowMs: number
): Promise<RateLimitResult> {
  // Type assertion for Redis client
  const redis = redisClient as {
    multi: () => {
      zremrangebyscore: (key: string, min: number, max: number) => unknown;
      zadd: (key: string, score: number, member: string) => unknown;
      zcard: (key: string) => unknown;
      expire: (key: string, seconds: number) => unknown;
      exec: () => Promise<unknown[][]>;
    };
  };

  const now = Date.now();
  const windowStart = now - windowMs;
  const uniqueId = `${now}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Use Redis transaction for atomic operations
  const pipeline = redis.multi();
  
  // Remove old entries outside the window
  pipeline.zremrangebyscore(key, 0, windowStart);
  // Add current request
  pipeline.zadd(key, now, uniqueId);
  // Count requests in window
  pipeline.zcard(key);
  // Set expiry on the key
  pipeline.expire(key, Math.ceil(windowMs / 1000));
  
  const results = await pipeline.exec();
  const requestCount = (results[2]?.[1] as number) || 0;
  
  if (requestCount > maxRequests) {
    return {
      success: false,
      remaining: 0,
      reset: now + windowMs,
    };
  }
  
  return {
    success: true,
    remaining: maxRequests - requestCount,
    reset: now + windowMs,
  };
}

// Redis client singleton (lazy loaded)
let redisClient: unknown = null;
let redisConnectionAttempted = false;

async function getRedisClient() {
  if (redisConnectionAttempted) return redisClient;
  redisConnectionAttempted = true;
  
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    console.log('[RateLimit] REDIS_URL not set, using in-memory rate limiting');
    return null;
  }
  
  try {
    // Dynamic import to avoid issues if ioredis is not installed
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Redis = require('ioredis');
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times: number) => {
        if (times > 3) return null;
        return Math.min(times * 100, 3000);
      },
    });
    
    (redisClient as { on: (event: string, callback: () => void) => void }).on('error', () => {
      console.error('[RateLimit] Redis connection error, falling back to in-memory');
      redisClient = null;
    });
    
    console.log('[RateLimit] Connected to Redis for rate limiting');
    return redisClient;
  } catch (error) {
    console.log('[RateLimit] Redis not available, using in-memory rate limiting:', error);
    return null;
  }
}

/**
 * Main rate limiting function
 * 
 * @param identifier - Unique identifier (usually IP address or user ID)
 * @param options - Rate limit configuration
 * @returns RateLimitResult with success status and remaining requests
 * 
 * @example
 * ```typescript
 * const result = await rateLimit(ip, { maxRequests: 10, windowMs: 60000 });
 * if (!result.success) {
 *   return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
 * }
 * ```
 */
export async function rateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): Promise<RateLimitResult> {
  const { maxRequests = 10, windowMs = 60000 } = options;
  const key = `ratelimit:${identifier}`;
  
  try {
    const redis = await getRedisClient();
    
    if (redis) {
      return await redisRateLimit(redis, key, maxRequests, windowMs);
    }
    
    // Fallback to in-memory
    return await inMemoryRateLimit(key, maxRequests, windowMs);
  } catch (error) {
    console.error('[RateLimit] Error:', error);
    // On error, allow the request (fail open)
    return { success: true, remaining: maxRequests, reset: Date.now() + windowMs };
  }
}

/**
 * Rate limiting presets for common use cases
 */
export const rateLimitPresets = {
  // Strict limit for authentication endpoints
  auth: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 5 per 15 minutes
  
  // Standard API limit
  api: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 per minute
  
  // Relaxed limit for general endpoints
  general: { maxRequests: 200, windowMs: 60 * 1000 }, // 200 per minute
  
  // Very strict for sensitive operations
  sensitive: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 3 per hour
};

/**
 * Helper to get client IP from Next.js request
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  return 'unknown';
}

export default rateLimit;
