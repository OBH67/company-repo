import { NextResponse } from 'next/server';

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL;
    if (!to) {
      return NextResponse.json({ error: 'Recipient not configured (CONTACT_EMAIL)' }, { status: 500 });
    }

    // If SendGrid API key is provided, use SendGrid REST API
    if (process.env.SENDGRID_API_KEY) {
      const payload = {
        personalizations: [
          {
            to: [{ email: to }],
            subject: `Nuevo contacto desde web: ${name}`,
          },
        ],
        from: { email: process.env.FROM_EMAIL || 'no-reply@example.com', name: process.env.FROM_NAME || 'Website' },
        content: [
          {
            type: 'text/plain',
            value: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
          },
        ],
      };

      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Log SendGrid status for debugging
      try {
        if (!res.ok) {
          const text = await res.text();
          console.error('SendGrid error', res.status, text);
          return NextResponse.json({ error: 'SendGrid error', details: text }, { status: 500 });
        }

        // Successful request to SendGrid (usually 202 Accepted)
        console.log('SendGrid accepted mail, status:', res.status);

        // Try to capture useful identifiers from response headers to trace in SendGrid
        const sgMessageId = res.headers.get('x-message-id') || res.headers.get('x-ms-message-id') || null;
        const sgRequestId = res.headers.get('x-request-id') || res.headers.get('request-id') || null;
        if (sgMessageId) console.log('SendGrid message id:', sgMessageId);
        if (sgRequestId) console.log('SendGrid request id:', sgRequestId);

        // Return status and any header ids to help debugging locally (no secrets)
        return NextResponse.json({ ok: true, sendgridStatus: res.status, sendgridMessageId: sgMessageId, sendgridRequestId: sgRequestId });
      } catch (e) {
        console.error('SendGrid handler error', e);
        return NextResponse.json({ error: 'SendGrid handler error' }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'No email provider configured (set SENDGRID_API_KEY)' }, { status: 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
