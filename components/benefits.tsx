import { TrendingUp, Clock, Sparkles, Eye } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Eye,
      stat: "See It",
      label: "Before You Commit",
      description: "Visualise your memorial in photorealistic 3D before making any decisions",
    },
    {
      icon: Clock,
      stat: "Save",
      label: "Time & Stress",
      description: "Reduce back-and-forth revisions with clear visual previews from the start",
    },
    {
      icon: TrendingUp,
      stat: "Compare",
      label: "With Confidence",
      description: "Transparent quotes from verified stonemasons so you can choose wisely",
    },
    {
      icon: Sparkles,
      stat: "Design",
      label: "With Dignity",
      description: "Create a lasting tribute that truly honours your loved one",
    },
  ]

  return (
    <section id="benefits" className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-accent-foreground text-balance sm:text-6xl font-serif">
            Why Pillaar
          </h2>
          <p className="text-xl text-accent-foreground/90">
            A better way to design and commission memorials for your loved ones
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="space-y-4">
                <Icon className="h-12 w-12 text-accent-foreground" strokeWidth={1.5} />
                <div className="text-6xl font-bold text-accent-foreground">{benefit.stat}</div>
                <div className="text-lg font-semibold uppercase tracking-wide text-accent-foreground">
                  {benefit.label}
                </div>
                <p className="text-base text-accent-foreground/80 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
