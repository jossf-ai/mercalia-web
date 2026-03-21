import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, commodity, message, email } = body;

    if (!name || !company || !commodity || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'SendGrid API key not configured' }, { status: 500 });
    }

    const emailContent = `
New inquiry from Mercalia Contact Form

Name: ${name}
Company: ${company}
Commodity of Interest: ${commodity}
${email ? `Email: ${email}` : ''}

Message:
${message}
    `.trim();

    const htmlContent = `
<h2>New Inquiry from Mercalia Contact Form</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr>
    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
    <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
  </tr>
  <tr>
    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company</td>
    <td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td>
  </tr>
  <tr>
    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Commodity of Interest</td>
    <td style="padding: 8px; border-bottom: 1px solid #eee;">${commodity}</td>
  </tr>
  ${email ? `<tr>
    <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
    <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
  </tr>` : ''}
  <tr>
    <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td>
    <td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td>
  </tr>
</table>
    `.trim();

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'contact@mercaliacg.com', name: 'Mercalia Contact' }],
            subject: `New Inquiry from ${name} - ${company}`,
          },
        ],
        from: { email: 'contact@mercaliacg.com', name: 'Mercalia Contact Form' },
        reply_to: email ? { email, name } : { email: 'contact@mercaliacg.com', name: 'Mercalia' },
        content: [
          { type: 'text/plain', value: emailContent },
          { type: 'text/html', value: htmlContent },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('SendGrid error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
