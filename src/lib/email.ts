import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface LeadEmailData {
  name: string;
  email: string;
  phone: string;
  visaType: string;
  targetCountry: string;
  message?: string;
}

export async function sendLeadConfirmationEmail(data: LeadEmailData) {
  if (!resend) {
    console.log('Resend not configured, skipping email');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    // Email to the lead (confirmation)
    await resend.emails.send({
      from: 'ShoImmigration <noreply@shoimmigration.com>',
      to: data.email,
      subject: 'Thank You for Your Visa Inquiry - ShoImmigration',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0f172a; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; color: #f59e0b; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
            .button { display: inline-block; background: #f59e0b; color: #0f172a; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ShoImmigration</h1>
              <p>Your Gateway to Global Opportunities</p>
            </div>
            <div class="content">
              <h2>Thank You, ${data.name}!</h2>
              <p>We have received your visa inquiry for <strong>${data.targetCountry}</strong>. Our expert migration agents will review your details and contact you within <strong>24 hours</strong>.</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0;">Your Inquiry Details:</h3>
                <p><strong>Destination:</strong> ${data.targetCountry}</p>
                <p><strong>Visa Type:</strong> ${data.visaType}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
              </div>

              <p>In the meantime, you can:</p>
              <ul>
                <li>Prepare your documents (passport, educational certificates)</li>
                <li>Take an English language test (IELTS/PTE)</li>
                <li>Research about ${data.targetCountry} immigration pathways</li>
              </ul>

              <p style="text-align: center; margin-top: 30px;">
                <a href="https://shoimmigration.com" class="button">Visit Our Website</a>
              </p>
            </div>
            <div class="footer">
              <p>ShoImmigration - MARA Registered Migration Agents</p>
              <p>📞 +91 95885 84208 | ✉️ info@shoimmigration.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Notification email to admin
    await resend.emails.send({
      from: 'ShoImmigration <noreply@shoimmigration.com>',
      to: process.env.ADMIN_EMAIL || 'admin@shoimmigration.com',
      subject: `New Lead: ${data.name} - ${data.targetCountry}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Country:</strong> ${data.targetCountry}</p>
        <p><strong>Visa Type:</strong> ${data.visaType}</p>
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
        <p><a href="${process.env.NEXTAUTH_URL}/admin/dashboard">View in Dashboard</a></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
