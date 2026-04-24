import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

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

    // Email notification via Resend
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Pillaar <onboarding@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New waitlist signup — ${signupType}`,
          html: `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:2rem;background:#f9f9f9;border-radius:12px;">
              <h2 style="color:#1F3D3C;margin-top:0;">New Waitlist Signup</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#888;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;font-weight:500;">${email}</td></tr>
                <tr><td style="padding:8px 0;color:#888;font-size:14px;">Type</td><td style="padding:8px 0;font-size:14px;font-weight:500;text-transform:capitalize;">${signupType}</td></tr>
                <tr><td style="padding:8px 0;color:#888;font-size:14px;">Time</td><td style="padding:8px 0;font-size:14px;">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td></tr>
              </table>
              <p style="margin-top:1.5rem;font-size:12px;color:#aaa;">Pillaar · waitlist_signups</p>
            </div>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Pillaar] Waitlist API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
