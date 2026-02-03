import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/waitlist-form"
import { Eye, BadgePoundSterling, Users, ShieldCheck, Clock, Heart, ArrowUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Pillaar | Design Gravestones & Headstones in 3D | Memorial Design Platform",
  description:
    "Design your gravestone or headstone memorial in beautiful 3D. Compare quotes from verified UK stonemasons and funeral directors. Transparent pricing for tombstones, memorials, and monuments.",
  keywords: [
    "gravestone",
    "headstone",
    "memorial",
    "tombstone",
    "gravestone design",
    "headstone design",
    "memorial design",
    "3D gravestone",
    "3D headstone",
    "stonemason",
    "funeral director",
    "monument",
    "memorial stone",
    "gravestone prices",
    "headstone prices UK",
    "custom gravestone",
    "personalised headstone",
  ],
  openGraph: {
    title: "Pillaar | Design Gravestones & Headstones in 3D",
    description:
      "Design your memorial in beautiful 3D. Compare quotes from verified stonemasons. Transparent pricing for gravestones, headstones, and monuments.",
    type: "website",
    siteName: "Pillaar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillaar | 3D Gravestone & Headstone Design",
    description:
      "Design your memorial in 3D. Compare quotes from verified stonemasons with transparent pricing.",
  },
  alternates: {
    canonical: "https://pillaar.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SplashPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pillaar",
    description:
      "Design gravestones, headstones, and memorials in 3D. Compare quotes from verified stonemasons and funeral directors.",
    url: "https://pillaar.com",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description: "Free memorial design tool with transparent stonemason quotes",
    },
    provider: {
      "@type": "Organization",
      name: "Pillaar",
      description:
        "Memorial design platform connecting families with verified stonemasons and funeral directors for gravestone, headstone, and tombstone design.",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="w-full px-6 sm:px-8 lg:px-12 py-6">
          <nav className="flex justify-end" aria-label="Main navigation">
            <Link href="/partner">
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent text-sm uppercase tracking-wider font-sans"
              >
                Memorial Design Platform
              </Button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <article className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 pb-24">
          <div className="max-w-3xl w-full flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-16">
              <Image
                src="/pillaar-logo.png"
                alt="Pillaar - 3D Gravestone and Headstone Memorial Design Platform"
                width={816}
                height={204}
                className="h-48 sm:h-[268px] lg:h-[346px] w-auto"
                priority
              />
            </div>

            {/* SEO H1 - visually styled as tagline */}
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-foreground mb-6 leading-tight">
              <span className="block">Empowering Families with Transparent Choices and Peace of Mind</span>
              <span className="sr-only">
                - 3D Gravestone, Headstone and Memorial Design Platform
              </span>
            </h1>

            {/* Subheading with keywords */}
            <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed max-w-3xl mb-16">
              Design your memorial in beautiful 3D, compare quotes from verified local stonemasons
              and funeral directors, and choose with confidence transparent pricing, craftsmanship,
              and delivery timelines.
            </p>

            {/* Waitlist Signup */}
            <div id="waitlist-form">
              <WaitlistForm />
            </div>
          </div>
        </article>

        {/* How It Works Section */}
        <section className="w-full px-6 sm:px-8 lg:px-12 py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-12 text-center">
              How It Works
            </h2>
            
            {/* User Story */}
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Design Your Memorial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sarah lost her father last month. Using Pillaar, she creates a beautiful 3D design for his headstone from the comfort of her home choosing the stone type, inscription, and decorative elements that honour his memory.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Compare Quotes Transparently</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once her design is complete, Sarah receives quotes from verified local stonemasons each showing clear pricing, craftsmanship details, and delivery timelines. No hidden fees, no pressure.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Share with Family</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sarah shares the 3D preview with her siblings across the country. Together, they review the design, suggest small changes, and reach a decision everyone feels good about.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Choose with Confidence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With full clarity on what the memorial will look like and cost, Sarah selects a trusted stonemason. Her father's tribute is crafted exactly as designed a lasting legacy created with peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-16 text-center">
              Key Benefits
            </h2>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border border-border bg-card">
                <Eye className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">See Before You Commit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visualise your memorial in photorealistic 3D before placing an order. No surprises, no regrets just confidence in your decision.
                </p>
              </div>
              
              <div className="p-6 border border-border bg-card">
                <BadgePoundSterling className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">Transparent Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compare clear, upfront quotes from verified stonemasons. Understand exactly what you're paying for with no hidden fees.
                </p>
              </div>
              
              <div className="p-6 border border-border bg-card">
                <Users className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">Collaborate with Family</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share designs with loved ones anywhere in the world. Make decisions together during a difficult time.
                </p>
              </div>
              
              <div className="p-6 border border-border bg-card">
                <ShieldCheck className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">Verified Craftsmen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with trusted, vetted stonemasons and funeral directors who meet our quality standards.
                </p>
              </div>
              
              <div className="p-6 border border-border bg-card">
                <Clock className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">Design at Your Pace</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create your memorial from home, in your own time. No pressure, no rushed decisions during grief.
                </p>
              </div>
              
              <div className="p-6 border border-border bg-card">
                <Heart className="h-8 w-8 text-foreground mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-3">Lasting Tribute</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Honour your loved one with a personalised memorial that reflects their life and legacy exactly as you envision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 sm:px-8 lg:px-12 py-24 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
              Be the First to Know
            </h2>
            <p className="text-lg text-background/80 mb-10 leading-relaxed">
              Whether you're a family looking to create a meaningful tribute or a stonemason wanting to connect with more clients join the Pillaar waitlist and be part of a better way to design memorials.
            </p>
            <a href="#waitlist-form">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 h-14 px-8 text-base uppercase tracking-wider font-semibold"
              >
                Join the Waitlist
                <ArrowUp className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Continue Main Content */}
        <article className="px-6 sm:px-8 lg:px-12 py-12">
          <div className="max-w-3xl w-full mx-auto">
            {/* SEO Content - visually hidden but crawlable */}
            <section className="sr-only" aria-label="About our memorial design services">
              <h2>About Pillaar Memorial Design</h2>
              <p>
                Pillaar is the UK's leading platform for designing gravestones, headstones, and
                memorials online. Our 3D visualisation technology allows you to design custom
                tombstones and memorial stones before commissioning, ensuring you get exactly what
                you envision for your loved one's lasting tribute.
              </p>
              <h3>Our Services</h3>
              <ul>
                <li>3D gravestone design and visualisation</li>
                <li>Custom headstone design with real time preview</li>
                <li>Memorial and monument design tools</li>
                <li>Tombstone customisation with engravings and inscriptions</li>
                <li>Compare quotes from verified UK stonemasons</li>
                <li>Connect with trusted funeral directors</li>
                <li>Transparent gravestone and headstone pricing</li>
                <li>Personalised memorial stone design</li>
              </ul>
              <h3>Why Choose Pillaar for Your Memorial Design</h3>
              <p>
                When searching for gravestone prices, headstone costs, or memorial design services,
                Pillaar provides a dignified, transparent experience. Our platform connects you with
                verified stonemasons across the UK, offering competitive quotes for gravestones,
                headstones, tombstones, and monuments. Design with confidence knowing exactly what
                your memorial will look like before you commit.
              </p>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="w-full px-6 sm:px-8 lg:px-12 py-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-sans">
              © 2026 Pillaar. All rights reserved.
            </p>
            <nav className="flex gap-6" aria-label="Footer navigation">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  )
}
