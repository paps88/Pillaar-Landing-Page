import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { fullName, companyName, email, phone } = await request.json()

    // Validate required fields
    if (!fullName || !companyName || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if email already exists
    const { data: existing } = await supabase
      .from("demo_requests")
      .select("email")
      .eq("email", email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: "This email has already requested a demo" },
        { status: 409 }
      )
    }

    // Insert new demo request
    const { error } = await supabase.from("demo_requests").insert({
      full_name: fullName,
      company_name: companyName,
      email: email.toLowerCase(),
      phone: phone,
    })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to submit demo request" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Demo request submitted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
