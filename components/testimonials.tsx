import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we help families design memorials. The 3D visualization removes all uncertainty, and we've seen a dramatic reduction in design changes.",
      author: "Margaret Chen",
      title: "Director, Heritage Funeral Home",
      rating: 5,
    },
    {
      quote:
        "Our monument sales have increased by 35% since implementing MemorialVision. Families love being able to see their custom gravestone designs in photorealistic detail before ordering.",
      author: "Robert Martinez",
      title: "Owner, Eternal Monuments Inc.",
      rating: 5,
    },
    {
      quote:
        "The remote design feature has been invaluable. We can now serve families across multiple states and provide the same high-quality design experience regardless of location.",
      author: "Sarah Johnson",
      title: "Memorial Consultant, Peaceful Rest",
      rating: 5,
    },
  ]

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-5xl font-normal uppercase tracking-tight text-foreground text-balance sm:text-6xl font-serif">
            Testimonials
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Hear from funeral directors and monument companies using our platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-foreground bg-background">
              <CardContent className="pt-8 pb-8 space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                  ))}
                </div>
                <blockquote className="text-base text-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="border-t-2 border-foreground pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
