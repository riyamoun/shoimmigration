import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, visaType, targetCountry, message } = body;
    
    if (!name || !email || !phone || !visaType || !targetCountry) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

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

    // TODO: Send email notification here (integrate Resend)
    console.log(`New lead captured: ${lead.email}`);

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
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check here
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
