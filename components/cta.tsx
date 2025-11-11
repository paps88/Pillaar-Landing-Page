import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-8 text-5xl font-normal uppercase tracking-tight text-accent-foreground text-balance sm:text-6xl leading-[1.1] font-serif">
          Ready to Transform Your Memorial Design Process?
        </h2>
        <p className="mb-12 text-xl text-accent-foreground leading-relaxed">
          Join hundreds of funeral homes and monument companies providing families with a modern, dignified design
          experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 h-14 px-8 text-base uppercase tracking-wider font-semibold"
          >
            Start Free Trial
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base uppercase tracking-wider font-semibold border-2 border-accent-foreground bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="mt-8 text-sm text-accent-foreground/90 uppercase tracking-wider">
          No credit card required • Setup in 24 hours
        </p>
      </div>
    </section>
  )
}
