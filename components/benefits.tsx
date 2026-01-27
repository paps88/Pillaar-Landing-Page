import { TrendingUp, Clock, Sparkles, Users } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      stat: "30%",
      label: "Sales Increase",
      description: "Monument companies report higher conversion rates with interactive 3D visualisation",
    },
    {
      icon: Clock,
      stat: "75%",
      label: "Fewer Revisions",
      description: "Families make confident decisions the first time with photorealistic previews",
    },
    {
      icon: Sparkles,
      stat: "2 Hours",
      label: "Time Saved",
      description: "Per memorial design with automated engraving and material selection tools",
    },
    {
      icon: Users,
      stat: "500+",
      label: "Funeral Homes",
      description: "Trust our platform for their memorial design and customisation needs",
    },
  ]

  return (
    <section id="benefits" className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-accent-foreground text-balance sm:text-6xl font-serif">
            Proven Results
          </h2>
          <p className="text-xl text-accent-foreground/90">
            Leading funeral homes and monument companies are transforming their memorial design process
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
