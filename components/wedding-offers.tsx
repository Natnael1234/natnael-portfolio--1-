import { Card } from "@/components/ui/card"
import { Check, Heart } from "lucide-react"

export function WeddingOffers() {
  const packages = [
    {
      name: "Basic",
      price: "33,216",
      currency: "birr",
      features: [
        "Thank you card",
        "Sign board",
        "Long form video",
        "Meadow photography",
        "Wedding photography and videography",
        "100 Images"
      ],
      popular: false,
    },
    {
      name: "Intermediate",
      price: "53,215",
      currency: "birr",
      features: [
        "Thank you card",
        "Sign board",
        "Short recap video",
        "Long form video",
        "Promotional video",
        "Meadow Photography",
        '"Shemegelena" photography and videography',
        "Wedding photography and videography",
        "200 Images"
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "86,341",
      currency: "birr",
      features: [
        "Thank you card",
        "Sign board",
        "MDF image",
        "Short recap video",
        "Long form video",
        "Promotional video",
        "Meadow Photography and short promotional video",
        '"Shemegelena" photography and videography',
        "Wedding photography and videography",
        "200 Images"
      ],
      popular: false,
    },
  ]

  return (
    <section id="wedding-offers" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block mx-auto">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Special Wedding Offer
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium">
              <span className="gradient-text">Wedding Photography & Videography Packages</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your special day. Each package includes comprehensive coverage of your wedding celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 sm:p-8 space-y-6 hover:shadow-2xl transition-all duration-500 hover-lift border-2 relative ${
                  pkg.popular
                    ? "border-primary/40 bg-primary/5 hover:border-primary/60 scale-105"
                    : "hover:border-primary/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground">
                        {pkg.price}
                      </span>
                      <span className="text-lg font-semibold text-foreground">{pkg.currency}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1 rounded-full ${
                          pkg.popular ? "bg-primary/20" : "bg-primary/10"
                        }`}>
                          <Check className={`h-4 w-4 ${
                            pkg.popular ? "text-primary" : "text-primary/70"
                          }`} />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

