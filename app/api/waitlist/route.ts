import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

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

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    )
  }
}
