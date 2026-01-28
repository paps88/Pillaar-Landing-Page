import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "@/components/waitlist-form"

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
                width={680}
                height={170}
                className="h-40 sm:h-56 lg:h-72 w-auto"
                priority
              />
            </div>

            {/* SEO H1 - visually styled as tagline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground mb-6 leading-tight text-balance">
              <span className="block">Empowering Families with Transparent Choices and Peace of Mind</span>
              <span className="sr-only">
                - 3D Gravestone, Headstone and Memorial Design Platform
              </span>
            </h1>

            {/* Subheading with keywords */}
            <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed max-w-3xl mb-16">
              Design your memorial in beautiful 3D, compare quotes from verified local stonemasons
              and funeral directors, and choose with confidence—transparent pricing, craftsmanship,
              and delivery timelines.
            </p>

            {/* Waitlist Signup */}
            <WaitlistForm />

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
                <li>Custom headstone design with real-time preview</li>
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
