import { NextResponse } from 'next/server';

const {
  ZOHO_CLIENT_ID,
  ZOHO_CLIENT_SECRET,
  ZOHO_REFRESH_TOKEN,
  ZOHO_LIST_KEY,
} = process.env;

const getAccessToken = async () => {
  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN!,
    client_id: ZOHO_CLIENT_ID!,
    client_secret: ZOHO_CLIENT_SECRET!,
    grant_type: 'refresh_token',
  });

  const res = await fetch(
    `https://accounts.zoho.com/oauth/v2/token?${params.toString()}`,
    {
      method: 'POST',
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error('Error refreshing Zoho token:', data);
    throw new Error(data.error || 'Failed to refresh access token');
  }

  return data.access_token;
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const response = await fetch(
      'https://campaigns.zoho.com/api/v1.1/json/listsubscribe',
      {
        method: 'POST',
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          listkey: ZOHO_LIST_KEY!,
          contactinfo: JSON.stringify([{ email }]),
        }),
      }
    );

    const data = await response.json();

    if (data.code !== 0) {
      console.error('Zoho API error:', data);
      return NextResponse.json(
        { error: data.message || 'Zoho error' },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
