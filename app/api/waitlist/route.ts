import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendNotificationEmail(signupData: {
  email: string
  userType: string
  companyName: string | null
}) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL
  
  if (!notificationEmail || !process.env.RESEND_API_KEY) {
    console.log("Email notification skipped: missing RESEND_API_KEY or NOTIFICATION_EMAIL")
    return
  }

  try {
    await resend.emails.send({
      from: "Pillaar Waitlist <info@pillaar.com>",
      to: notificationEmail,
      subject: `New Waitlist Signup: ${signupData.userType === "provider" ? "Provider" : "Family"}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${signupData.email}</p>
        <p><strong>Type:</strong> ${signupData.userType === "provider" ? "Provider" : "Family"}</p>
        ${signupData.companyName ? `<p><strong>Company:</strong> ${signupData.companyName}</p>` : ""}
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    })
    console.log("Notification email sent successfully")
  } catch (error) {
    console.error("Failed to send notification email:", error)
  }
}

async function sendConfirmationEmail(userEmail: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Confirmation email skipped: missing RESEND_API_KEY")
    return
  }

  try {
    await resend.emails.send({
      from: "Pillaar <info@pillaar.com>",
      to: userEmail,
      subject: "Welcome to the Pillaar Waitlist!",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; color: #1a1a1a; margin-bottom: 16px;">
            You're on the list!
          </h1>
          <p style="font-size: 16px; color: #444; line-height: 1.6; margin-bottom: 16px;">
            Thank you for joining the Pillaar waitlist. We're building a new way to design and visualise memorials in 3D, and we're excited to have you along for the journey.
          </p>
          <p style="font-size: 16px; color: #444; line-height: 1.6; margin-bottom: 16px;">
            We'll be in touch soon with updates on our progress and early access details. In the meantime, if you have any questions, feel free to reply to this email.
          </p>
          <p style="font-size: 16px; color: #444; line-height: 1.6; margin-bottom: 32px;">
            Warm regards,<br/>
            The Pillaar Team
          </p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 16px;" />
          <p style="font-size: 12px; color: #999; line-height: 1.5;">
            You're receiving this because you signed up for the Pillaar waitlist. If this wasn't you, you can safely ignore this email.
          </p>
        </div>
      `,
    })
    console.log("Confirmation email sent to", userEmail)
  } catch (error) {
    console.error("Failed to send confirmation email:", error)
  }
}

export async function POST(request: Request) {
  try {
    const { email, userType, companyName } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        email,
        user_type: userType || "family",
        company_name: companyName || null,
      })
      .select()
      .single()

    if (error) {
      // Check for duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        )
      }
      throw error
    }

    // Send notification email to admin (non-blocking)
    sendNotificationEmail({
      email,
      userType: userType || "family",
      companyName: companyName || null,
    })

    // Send confirmation email to user (non-blocking)
    sendConfirmationEmail(email)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    )
  }
}
