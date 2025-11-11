import { Button } from "@/components/ui/button"
import { ArrowRight, Cable as Cube } from "lucide-react"
import { SignUpForm } from "@/components/sign-up-form"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Cube className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              <span className="font-serif text-2xl font-light tracking-tight text-foreground">MEMORIALVISION</span>
            </div>
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
              <div className="mb-8 inline-block bg-accent px-6 py-3">
                <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">
                  Now Available
                </span>
              </div>

              <h1 className="mb-8 font-serif text-5xl font-normal leading-[1.1] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
                3D Memorial Design Platform
              </h1>

              <p className="text-xl text-foreground leading-relaxed max-w-xl">
                Photorealistic gravestone and headstone visualization for funeral homes and monument companies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-4 border-l-4 border-accent pl-6">
                <span className="font-serif text-5xl font-bold text-foreground">75%</span>
                <span className="text-lg text-foreground">Fewer design revisions</span>
              </div>
              <div className="flex items-baseline gap-4 border-l-4 border-foreground pl-6">
                <span className="font-serif text-5xl font-bold text-foreground">30%</span>
                <span className="text-lg text-foreground">Increase in monument sales</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 px-8 py-6 text-base uppercase tracking-wider">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base uppercase tracking-wider bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="flex items-center justify-center lg:justify-end">
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
