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
      from: "Pillaar Waitlist <notifications@pillaar.com>",
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

    // Send notification email (non-blocking)
    sendNotificationEmail({
      email,
      userType: userType || "family",
      companyName: companyName || null,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    )
  }
}
