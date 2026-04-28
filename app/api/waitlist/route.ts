import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = 'Pillaar <info@pillaar.com>'
const NOTIFY = process.env.NOTIFICATION_EMAIL || 'info@pillaar.com'

export async function POST(req: Request) {
  try {
    const { email, signupType } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
    }
    if (!['family', 'provider'].includes(signupType)) {
      return NextResponse.json({ error: 'Invalid signup type.' }, { status: 400 })
    }

    const { error: dbError } = await supabase
      .from('waitlist_signups')
      .insert({ email: email.trim().toLowerCase(), signup_type: signupType })

    if (dbError) {
      console.error('[Pillaar] Supabase insert error:', dbError.message)
      return NextResponse.json({ error: 'Failed to save registration.' }, { status: 500 })
    }

    const typeLabel = signupType === 'family' ? 'family' : 'provider'

    // Notify info@pillaar.com
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      subject: `New waitlist signup — ${typeLabel}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:480px;margin:0 auto;padding:2rem;background:#f2f0ec;border-radius:12px;">
          <h2 style="color:#1F3D3C;margin-top:0;font-weight:400;">New Waitlist Signup</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b6860;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;font-weight:500;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6860;font-size:14px;">Type</td><td style="padding:8px 0;font-size:14px;font-weight:500;text-transform:capitalize;">${typeLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6860;font-size:14px;">Time</td><td style="padding:8px 0;font-size:14px;">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td></tr>
          </table>
        </div>
      `,
    })

    // Confirmation to the signee
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: `You're on the Pillaar waitlist`,
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;background:#e4e1dc;padding:32px 16px;">
          <div style="background:#161616;padding:28px 32px;text-align:center;border-radius:12px 12px 0 0;">
            <span style="font-family:Georgia,serif;font-size:22px;color:#fff;letter-spacing:0.12em;text-transform:uppercase;">Pillaar</span>
          </div>
          <div style="background:#f2f0ec;padding:40px 36px;border-radius:0 0 12px 12px;">
            <h2 style="font-family:Georgia,serif;font-weight:400;font-size:26px;color:#161616;margin:0 0 20px;">You're on the list</h2>
            <p style="font-size:15px;line-height:1.7;color:#161616;margin:0 0 16px;">
              Thank you for joining the Pillaar waitlist. We'll be in touch as soon as we're ready to welcome ${typeLabel === 'family' ? 'families' : 'providers'} onto the platform.
            </p>
            <p style="font-size:13px;color:#6b6860;margin:0;">
              In the meantime, if you have any questions feel free to reply to this email or reach us at
              <a href="mailto:info@pillaar.com" style="color:#1F3D3C;">info@pillaar.com</a>.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Pillaar] Waitlist API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
