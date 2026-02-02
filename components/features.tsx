import { Boxes, Palette, Eye, FileText, Globe, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Boxes,
      title: "Real Time 3D Memorial Visualisation",
      description:
        "Design custom gravestones, headstones, and tombstones with photorealistic rendering. Families see exactly what the finished memorial will look like.",
    },
    {
      icon: Palette,
      title: "Extensive Memorial Customisation",
      description:
        "Choose from hundreds of granite materials, shapes, sizes, and finishes. Add custom engravings, emblems, and inscriptions in real time.",
    },
    {
      icon: Eye,
      title: "Interactive Family Experience",
      description:
        "Families can rotate, zoom, and explore their memorial design from every angle. Share designs instantly for family approval.",
    },
    {
      icon: FileText,
      title: "Digital Catalogue Management",
      description:
        "Replace outdated paper catalogues with a searchable digital library. Update pricing and inventory in real time across all locations.",
    },
    {
      icon: Globe,
      title: "Remote Design Sessions",
      description:
        "Conduct memorial design consultations from anywhere. Perfect for families who can't visit in person or need time to decide.",
    },
    {
      icon: Zap,
      title: "Instant Quotes & Orders",
      description:
        "Generate accurate pricing instantly based on materials, size, and customisation. Export production-ready specifications to manufacturers.",
    },
  ]

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-foreground text-balance sm:text-6xl font-serif">
            Features
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Professional tools built specifically for funeral directors, monument companies, and memorial retailers
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="space-y-4">
                <Icon className="h-12 w-12 text-foreground" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-foreground text-balance">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
