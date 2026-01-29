"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

type UserType = "family" | "provider"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState<UserType>("family")
  const [companyName, setCompanyName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          userType,
          companyName: userType === "provider" ? companyName : null,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSubmitted(true)
      setEmail("")
      setCompanyName("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-card border border-border p-6">
          <p className="text-foreground font-serif text-xl mb-2">Thank you</p>
          <p className="text-muted-foreground font-sans">
            We'll be in touch when Pillaar launches.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-sans">
        Join the Waitlist
      </p>
      
      {/* User Type Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setUserType("family")}
          className={`flex-1 py-2 px-4 text-sm font-sans border transition-colors ${
            userType === "family"
              ? "bg-foreground text-background border-foreground"
              : "bg-card text-foreground border-border hover:border-foreground/50"
          }`}
        >
          I'm a Family
        </button>
        <button
          type="button"
          onClick={() => setUserType("provider")}
          className={`flex-1 py-2 px-4 text-sm font-sans border transition-colors ${
            userType === "provider"
              ? "bg-foreground text-background border-foreground"
              : "bg-card text-foreground border-border hover:border-foreground/50"
          }`}
        >
          I'm a Provider
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {/* Company Name - Only shown for providers */}
        {userType === "provider" && (
          <Input
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground font-sans"
            aria-label="Company name"
          />
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground font-sans"
            aria-label="Email address for waitlist"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-sans disabled:opacity-50"
          >
            <span className="mr-2">{isSubmitting ? "Joining..." : "Notify Me"}</span>
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
        
        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}
      </div>
    </form>
  )
}
