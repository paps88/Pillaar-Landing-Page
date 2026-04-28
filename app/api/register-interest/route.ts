import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"
import { NextResponse } from "next/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = "Pillaar <info@pillaar.com>"
const NOTIFY = process.env.NOTIFICATION_EMAIL || "info@pillaar.com"

export async function POST(req: Request) {
  try {
    const { contactName, businessName, email, providerType } = await req.json()

    if (!contactName || !businessName || !email || !providerType) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    const { error: dbError } = await supabase
      .from("provider_registrations")
      .insert({
        contact_name: contactName,
        business_name: businessName,
        email,
        provider_type: providerType,
      })

    if (dbError) {
      console.error("[Pillaar] Supabase insert error:", dbError)
      return NextResponse.json({ error: "Failed to save registration." }, { status: 500 })
    }

    const providerLabel =
      providerType === "stonemason"
        ? "Stonemason"
        : providerType === "funeral-director"
        ? "Funeral Director"
        : "Stonemason & Funeral Director"

    // Notify info@pillaar.com
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      subject: `New Provider Registration — ${businessName}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;color:#161616;">
          <div style="background:#1F3D3C;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:1.1rem;font-weight:400;letter-spacing:0.06em;text-transform:uppercase;">New Provider Registration</h2>
          </div>
          <div style="background:#f2f0ec;padding:32px;border-radius:0 0 12px 12px;border:1px solid #d5d0c8;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;color:#6b6860;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;width:40%;">Contact</td><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;font-weight:500;">${contactName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;color:#6b6860;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Business</td><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;font-weight:500;">${businessName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;color:#6b6860;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="padding:10px 0;border-bottom:1px solid #d5d0c8;"><a href="mailto:${email}" style="color:#1F3D3C;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;color:#6b6860;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Type</td><td style="padding:10px 0;font-weight:500;">${providerLabel}</td></tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#aaa;">Submitted via Pillaar Providers page · ${new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short" })}</p>
          </div>
        </div>
      `,
    })

    // Confirmation to the provider
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: `Thanks for registering with Pillaar, ${contactName}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;background:#e4e1dc;padding:32px 16px;">
          <div style="background:#161616;padding:28px 32px;text-align:center;border-radius:12px 12px 0 0;">
            <span style="font-family:Georgia,serif;font-size:22px;color:#fff;letter-spacing:0.12em;text-transform:uppercase;">Pillaar</span>
          </div>
          <div style="background:#f2f0ec;padding:40px 36px;border-radius:0 0 12px 12px;">
            <h2 style="font-family:Georgia,serif;font-weight:400;font-size:26px;color:#161616;margin:0 0 20px;">Thank you, ${contactName}</h2>
            <p style="font-size:15px;line-height:1.7;color:#161616;margin:0 0 16px;">
              We've received your registration for <strong>${businessName}</strong> as a ${providerLabel.toLowerCase()}. We're reviewing applications and will be in touch shortly with next steps.
            </p>
            <p style="font-size:13px;color:#6b6860;margin:0;">
              Questions? Reply to this email or reach us at
              <a href="mailto:info@pillaar.com" style="color:#1F3D3C;">info@pillaar.com</a>.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[Pillaar] Register interest error:", err)
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 })
  }
}
