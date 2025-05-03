import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Brevo API call
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name || 'Waitlist',
          SIGNUP_SOURCE: 'Website Waitlist',
          SIGNUP_IP: req.headers.get('x-forwarded-for') || '',
          SIGNUP_DATE: new Date().toISOString(),
        },
        listIds: [3], // Replace with your Brevo list ID
        updateEnabled: true,
        emailBlacklisted: false,
        smtpBlacklistSender: ['hello@doexcess.com'], // Prevent accidental spam
      }),
    });

    if (brevoResponse.status === 204) {
      throw new Error('This email address already exists in the list.');
    }

    const data = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({
      message: 'Thanks for joining the waitlist!',
      data,
    });
  } catch (error: any) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
