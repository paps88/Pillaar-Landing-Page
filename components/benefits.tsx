import { TrendingUp, Clock, Repeat, Heart } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      stat: "Higher",
      label: "Conversions",
      description: "Families commit with confidence when they can visualise the finished memorial before ordering",
    },
    {
      icon: Clock,
      stat: "Fewer",
      label: "Revisions",
      description: "Clear 3D previews eliminate misunderstandings and reduce costly design change requests",
    },
    {
      icon: Repeat,
      stat: "Faster",
      label: "Turnaround",
      description: "Streamlined approval process means less back-and-forth and quicker production starts",
    },
    {
      icon: Heart,
      stat: "Stronger",
      label: "Client Trust",
      description: "Transparent pricing and realistic previews build lasting relationships with grieving families",
    },
  ]

  return (
    <section id="benefits" className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-accent-foreground text-balance sm:text-6xl font-serif">
            Partner Benefits
          </h2>
          <p className="text-xl text-accent-foreground/90">
            Empower your business with a customer-facing 3D memorial design platform
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
