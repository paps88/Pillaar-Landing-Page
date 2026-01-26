"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SplashPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex justify-end">
          <Link href="/partner">
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent text-sm uppercase tracking-wider font-sans"
            >
              Become a Partner
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-16">
            <Image
              src="/pillaar-logo.png"
              alt="Pillaar"
              width={680}
              height={170}
              className="h-40 sm:h-56 lg:h-72 w-auto"
              priority
            />
          </div>

          {/* Strapline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight text-balance">
            Dignity, Quality, Clarity
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl mb-16">
            The future of memorial design. Photorealistic 3D gravestone and headstone visualisation for funeral homes and monument companies that brings lasting tributes to life.
          </p>

          {/* Waitlist Signup */}
          {!isSubmitted ? (
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
          ) : (
            <div className="w-full max-w-md">
              <div className="bg-card border border-border p-6">
                <p className="text-foreground font-serif text-xl mb-2">Thank you</p>
                <p className="text-muted-foreground font-sans">
                  We'll be in touch when Pillaar launches.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 sm:px-8 lg:px-12 py-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            © 2026 Pillaar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
