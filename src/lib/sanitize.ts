/**
 * Sanitize a string for safe HTML output in emails
 * Escapes HTML special characters to prevent XSS
 */
export function escapeHtml(str: string): string {
  if (!str) return '';
  
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  
  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
}

/**
 * Sanitize an object's string values for HTML output
 */
export function sanitizeForEmail<T extends Record<string, unknown>>(
  data: T
): T {
  const sanitized = { ...data };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      (sanitized as Record<string, unknown>)[key] = escapeHtml(sanitized[key] as string);
    }
  }
  
  return sanitized;
}
