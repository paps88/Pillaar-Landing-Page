"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
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
          className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-sans"
        >
          <span className="mr-2">Notify Me</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
