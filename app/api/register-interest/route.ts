import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { contactName, businessName, email, providerType } = await req.json()

    // Validate fields
    if (!contactName || !businessName || !email || !providerType) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from("provider_registrations")
      .insert({
        contact_name: contactName,
        business_name: businessName,
        email,
        provider_type: providerType,
      })

    if (dbError) {
      console.error("[v0] Supabase insert error:", dbError)
      return NextResponse.json({ error: "Failed to save registration." }, { status: 500 })
    }

    // Send email notification
    const providerLabel =
      providerType === "stonemason"
        ? "Stonemason"
        : providerType === "funeral-director"
        ? "Funeral Director"
        : "Stonemason & Funeral Director"

    await resend.emails.send({
      from: "Pillaar <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Provider Registration — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #2C2826;">
          <div style="background: #1F3D3C; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #D1D668; margin: 0; font-size: 1.1rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;">New Provider Registration</h2>
          </div>
          <div style="background: #F9F7F4; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E8E4DC; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC; color: #888; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; width: 40%;">Contact Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC; font-weight: 500;">${contactName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC; color: #888; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Business</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC; font-weight: 500;">${businessName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC; color: #888; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8E4DC;"><a href="mailto:${email}" style="color: #C95D3B;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Provider Type</td>
                <td style="padding: 10px 0; font-weight: 500;">${providerLabel}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; font-size: 0.8rem; color: #aaa;">Submitted via Pillaar Providers page · ${new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short" })}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[v0] Register interest error:", err)
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 })
  }
}
