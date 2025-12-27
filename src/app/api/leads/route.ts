import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations';
import { sendLeadConfirmationEmail } from '@/lib/email';
import { rateLimit, getClientIp, rateLimitPresets } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (uses Redis in production, in-memory in development)
    const ip = getClientIp(request);
    const rateLimitResult = await rateLimit(ip, rateLimitPresets.auth);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.reset - Date.now()) / 1000)),
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
          },
        }
      );
    }

    const body = await request.json();
    
    // Validate with Zod
    const validationResult = leadSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map(e => e.message).join(', ');
      return NextResponse.json(
        { error: errors },
        { status: 400 }
      );
    }

    const { name, email, phone, visaType, targetCountry, message } = validationResult.data;

    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        visaType,
        targetCountry,
        message: message?.trim() || null,
        status: 'PENDING',
      },
    });

    // Send email notifications (non-blocking)
    sendLeadConfirmationEmail({
      name,
      email,
      phone,
      visaType,
      targetCountry,
      message: message || undefined,
    }).catch(err => console.error('Email send error:', err));

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been received. We will contact you within 24 hours.',
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

// GET all leads (admin use)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (session.user?.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Access denied. Admin privileges required.' },
        { status: 403 }
      );
    }

    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
