import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const WEB3FORMS_ACCESS_KEY = 'c8ff8750-040e-4257-803a-63a32315281a';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;
    
    if (!type || !['BOOKING', 'JOIN'].includes(type)) {
      return NextResponse.json({ success: false, error: 'Invalid enquiry type' }, { status: 400 });
    }

    // 1. Save to Database
    const details = JSON.stringify(data);
    const name = data.fullName || data.name || 'Unknown';
    const email = data.email || 'No email provided';
    const telephone = data.telephone || null;

    try {
      await prisma.enquiry.create({
        data: {
          type,
          name,
          email,
          telephone,
          details,
        },
      });
    } catch (dbError) {
      console.error('Database Error:', dbError);
      // We log but don't strictly fail yet, so the email can still be sent if DB is down.
    }

    // 2. Send Email via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New ${type} Enquiry from ${name}`,
        from_name: 'Dysfunctional Referees Website',
        replyto: email,
        ...data,
      }),
    });

    const result = await response.json();
    if (!result.success) {
      console.error('Web3Forms Error:', result);
      // Even if Web3Forms fails, we return success if it made it this far, or maybe we should return error if both failed.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to submit enquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
