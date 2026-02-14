// Test script to trigger a waitlist signup and verify email notification

const BASE_URL = "http://localhost:3000"
const TEST_EMAIL = `test-${Date.now()}@example.com`

async function testSignupNotification() {
  console.log("Testing waitlist signup notification...")
  console.log(`Using test email: ${TEST_EMAIL}`)
  console.log(`Posting to: ${BASE_URL}/api/waitlist`)
  console.log("")

  try {
    const response = await fetch(`${BASE_URL}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: TEST_EMAIL,
        userType: "family",
        companyName: null,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      console.log("Signup successful!")
      console.log("Response:", JSON.stringify(data, null, 2))
      console.log("")
      console.log("Check your NOTIFICATION_EMAIL inbox for the notification.")
      console.log("(If using Resend free tier with onboarding@resend.dev, the email will be sent to the Resend dashboard)")
    } else {
      console.error("Signup failed with status:", response.status)
      console.error("Error:", JSON.stringify(data, null, 2))
    }
  } catch (error) {
    console.error("Request failed:", error.message)
    console.error("Make sure the dev server is running on http://localhost:3000")
  }
}

testSignupNotification()
