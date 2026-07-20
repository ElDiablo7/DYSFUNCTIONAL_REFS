'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// The user's specific Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = 'c8ff8750-040e-4257-803a-63a32315281a';

export async function submitEnquiry(data: any, type: 'BOOKING' | 'JOIN') {
  try {
    // 1. Save to Database
    const details = JSON.stringify(data);
    const name = data.fullName || data.name || 'Unknown';
    const email = data.email || 'No email provided';
    const telephone = data.telephone || null;

    await prisma.enquiry.create({
      data: {
        type,
        name,
        email,
        telephone,
        details,
      },
    });

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
      // We still return true because it saved to the database successfully
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit enquiry:', error);
    return { success: false, error: 'Failed to process enquiry. Please try again.' };
  }
}
