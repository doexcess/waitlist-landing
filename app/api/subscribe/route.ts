import { htmlContent } from '@/lib/utils';
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

    // First check if contact already exists
    const checkContactResponse = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'api-key': process.env.BREVO_API_KEY!,
        },
      }
    );

    // If contact exists (status 200), return without sending email
    if (checkContactResponse.status === 200) {
      const contactData = await checkContactResponse.json();
      if (contactData.listIds?.includes(3)) {
        // Your list ID
        return NextResponse.json(
          { message: 'You are already on our waitlist!' },
          { status: 200 }
        );
      }
    }

    // Create/update contact
    const brevoContactResponse = await fetch(
      'https://api.brevo.com/v3/contacts',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name || 'Waitlist',
            SIGNUP_SOURCE: 'Website Waitlist',
            SIGNUP_IP: req.headers.get('x-forwarded-for') || '',
            SIGNUP_DATE: new Date().toISOString(),
          },
          listIds: [3], // your Brevo list ID
          updateEnabled: true,
          emailBlacklisted: false,
          smtpBlacklistSender: [],
        }),
      }
    );

    // Handle existing contact update
    if (brevoContactResponse.status === 204) {
      await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
        {
          method: 'PUT',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
          },
          body: JSON.stringify({
            emailBlacklisted: false,
            listIds: [3], // Ensure they're added to your list
          }),
        }
      );
    }

    // Only send email if this is a new signup (status 201)
    if (brevoContactResponse.status === 201) {
      const transactionalEmailResponse = await fetch(
        'https://api.brevo.com/v3/smtp/email',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
          },
          body: JSON.stringify({
            sender: {
              name: 'Doexcess',
              email: 'info@doexcess.com',
            },
            to: [{ email, name: name || '' }],
            subject: 'Welcome to the Waitlist 🎉',
            htmlContent: htmlContent(name),
            tags: ['waitlist-signup'],
          }),
        }
      );

      if (!transactionalEmailResponse.ok) {
        const errorData = await transactionalEmailResponse.json();
        console.error('Brevo email error:', errorData);
        throw new Error('Failed to send confirmation email');
      }

      return NextResponse.json({
        message: 'Thanks for joining! A confirmation email has been sent.',
      });
    }

    return NextResponse.json({
      message: 'You have been added to our waitlist!',
    });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
