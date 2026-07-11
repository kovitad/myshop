// Transactional email via Resend's HTTP API (no SDK needed — global fetch).
// When RESEND_API_KEY is absent, emails are logged to the console so local dev still works.

const apiKey = process.env.RESEND_API_KEY || '';
const fromAddress = process.env.EMAIL_FROM || 'KOVITAD.shop <hello@kovitad.shop>';

export const emailEnabled = Boolean(apiKey);

async function send({ to, subject, html }) {
  if (!emailEnabled) {
    console.log(`[email:dev] to=${to} subject="${subject}"`);
    return { ok: true, dev: true };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: fromAddress, to, subject, html }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error(`[email] send failed ${res.status}: ${detail}`);
    return { ok: false };
  }
  return { ok: true };
}

// Order receipt + download link for an ebook purchase.
export async function sendReceiptEmail({ to, product, downloadUrl }) {
  const title = product.title.en;
  const subject = `Your KOVITAD.shop guide: ${title}`;
  const html = `
    <div style="font-family:Figtree,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;color:#20302b">
      <p style="letter-spacing:0.14em;text-transform:uppercase;font-size:12px;color:#7a8a80">KOVITAD.shop</p>
      <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:26px;line-height:1.2">Thank you for your purchase</h1>
      <p style="line-height:1.7">Your guide <strong>${title}</strong> is ready. You can download it using the button below.</p>
      <p style="margin:28px 0">
        <a href="${downloadUrl}" style="background:#1f3d33;color:#f3efe4;padding:12px 22px;border-radius:999px;text-decoration:none;white-space:nowrap">Download your guide</a>
      </p>
      <p style="line-height:1.7;font-size:13px;color:#7a8a80">This link is personal to you and will expire. Keep this email to re-download.</p>
      <hr style="border:none;border-top:1px solid #eef1f3;margin:24px 0" />
      <p style="line-height:1.7;font-size:12px;color:#7a8a80">KOVITAD shares general education and personal experience, not medical advice. Talk to your clinician before changing your health routine.</p>
    </div>`;
  return send({ to, subject, html });
}
