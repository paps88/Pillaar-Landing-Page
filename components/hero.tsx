import { Button } from "@/components/ui/button"
import { SignUpForm } from "@/components/sign-up-form"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/pillaar-logo.png"
                alt="Pillaar"
                width={340}
                height={85}
                className="h-24 w-auto"
                priority
              />
            </Link>
            <nav className="hidden items-center gap-10 md:flex">
              <a
                href="#features"
                className="text-sm font-normal uppercase tracking-wider text-foreground transition-opacity hover:opacity-60"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-sm font-normal uppercase tracking-wider text-foreground transition-opacity hover:opacity-60"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-normal uppercase tracking-wider text-foreground transition-opacity hover:opacity-60"
              >
                How It Works
              </a>
              <Button variant="default" size="sm" className="uppercase tracking-wider">
                Request Demo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h1 className="mb-8 font-serif text-5xl font-normal leading-[1.1] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
                3D Memorial Design Platform
              </h1>

              <p className="text-xl text-foreground leading-relaxed max-w-xl">
                Empowering Families with Transparent Choices and Peace of Mind
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-4 border-l-4 border-accent pl-6">
                <span className="font-serif text-5xl font-bold text-foreground">75%</span>
                <span className="text-lg text-foreground">Fewer design revisions</span>
              </div>
              <div className="flex items-baseline gap-4 border-l-4 border-foreground pl-6">
                <span className="font-serif text-5xl font-bold text-foreground">90%</span>
                <span className="text-lg text-foreground">Client approval on first presentation</span>
              </div>
              <div className="flex items-baseline gap-4 border-l-4 border-muted-foreground pl-6">
                <span className="font-serif text-5xl font-bold text-foreground">5x</span>
                <span className="text-lg text-foreground">Faster design turnaround</span>
              </div>
            </div>

            
          </div>

          {/* Right Column - Sign Up Form */}
          <div id="signup-form" className="flex items-center justify-center lg:justify-end">
            <SignUpForm />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-0 top-[20%] h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>
    </section>
  )
}
