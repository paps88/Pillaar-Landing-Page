import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function PartnerPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
