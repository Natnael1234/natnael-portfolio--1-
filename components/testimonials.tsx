import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jawad Ahmed",
      role: "Upwork Client",
      company: "United Kingdom",
      content:
        "Natnael did an outstanding job fulfilling our job requirements. He responded promptly and made any necessary changes. Additionally, he created excellent videos for my channel. I recommend him.",
      rating: 5,
      
    },
    {
      name: "Productsrus",
      role: "YouTube Creator",
      company: "United States",
      content:
        "Nati did an excellent job on our job requirements, responded quickly, made changes if any were needed, and great job creating videos for our niche.",
      rating: 5,
      
    },
    {
      name: "Dimetros Jemere",
      role: "Brand Manager",
      company: "Canada",
      content:
        "Natnael did an amazing job. I would hire again.",
      rating: 5,
      image: '',
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-widest text-primary font-semibold bg-primary/10 px-6 py-2 rounded-full">
                Testimonials
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-balance">
              What Clients Say About My Work
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take my word for it - hear from some of the clients I've had the pleasure of working with
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 space-y-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 relative overflow-hidden group"
              >
                {/* Quote icon decoration */}
                <div className="absolute -top-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="h-32 w-32 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-base leading-relaxed text-muted-foreground relative z-10">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t relative z-10">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-4">Ready to work together?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              Let's create something amazing
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
