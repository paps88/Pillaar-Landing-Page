import { Upload, MousePointer, Share2, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Import Your Catalogue",
      description:
        "Upload your existing gravestone inventory, materials, and pricing. We'll help migrate your entire memorial catalogue to our platform.",
    },
    {
      icon: MousePointer,
      title: "Design with Families",
      description:
        "Guide families through the design process with intuitive 3D tools. Customise headstones, tombstones, and monuments in real-time.",
    },
    {
      icon: Share2,
      title: "Share & Collaborate",
      description:
        "Send designs to family members for review and approval. Make revisions instantly based on feedback from anywhere.",
    },
    {
      icon: CheckCircle,
      title: "Export & Fulfill",
      description:
        "Generate production specifications automatically. Send orders directly to your preferred monument manufacturers.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-foreground text-balance sm:text-6xl font-serif">
            How It Works
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Get started designing custom memorials in four easy steps
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center bg-foreground text-background text-2xl font-bold">
                    {index + 1}
                  </div>
                  <Icon className="h-12 w-12 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground text-balance">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
