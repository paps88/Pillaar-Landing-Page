// Test script to send a test notification email directly via Resend API

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFICATION_EMAIL = "mikepappoe@gmail.com"

async function testEmailNotification() {
  console.log("Testing email notification via Resend...")
  console.log("")

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Please add it to your environment variables.")
    return
  }

  if (!NOTIFICATION_EMAIL) {
    console.error("NOTIFICATION_EMAIL is not set. Please add it to your environment variables.")
    return
  }

  console.log(`Sending test notification to: ${NOTIFICATION_EMAIL}`)
  console.log("")

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Pillaar Waitlist <onboarding@resend.dev>",
        to: NOTIFICATION_EMAIL,
        subject: "Test: New Waitlist Signup - Family",
        html: `
          <h2>New Waitlist Signup (TEST)</h2>
          <p><strong>Email:</strong> test-user@example.com</p>
          <p><strong>Type:</strong> Family</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <hr/>
          <p><em>This is a test email to verify your Pillaar waitlist notification setup is working correctly.</em></p>
        `,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      console.log("Test email sent successfully!")
      console.log("Response:", JSON.stringify(data, null, 2))
      console.log("")
      console.log(`Check your inbox at: ${NOTIFICATION_EMAIL}`)
      console.log("Note: If using Resend free tier, emails can only be sent to the email associated with your Resend account.")
    } else {
      console.error("Failed to send email. Status:", response.status)
      console.error("Error:", JSON.stringify(data, null, 2))
    }
  } catch (error) {
    console.error("Request failed:", error.message)
  }
}

testEmailNotification()
