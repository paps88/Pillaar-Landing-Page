"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Mail, Phone, User } from "lucide-react"

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md border-2 border-foreground shadow-xl">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-accent">
            <svg
              className="h-10 w-10 text-accent-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight text-foreground">Thank You</h3>
          <p className="text-base text-foreground leading-relaxed">
            Our team will contact you within 24 hours to schedule your personalized demo.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md border-2 border-foreground shadow-xl">
      <CardHeader className="space-y-3 pb-8">
        <CardTitle className="text-3xl font-bold uppercase tracking-tight text-foreground">Start Free Trial</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Join leading funeral homes using 3D memorial design
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input id="name" name="name" placeholder="John Smith" required className="h-12 pl-10 text-base" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Funeral Home / Company
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="company"
                name="company"
                placeholder="Smith Family Funeral Home"
                required
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Business Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@funeralhome.com"
                required
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+44 20 7123 4567"
                required
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base uppercase tracking-wider font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Request Free Demo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
