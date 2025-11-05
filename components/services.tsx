import { Card } from "@/components/ui/card"
import { Video, Palette, TrendingUp, Camera } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional editing with Premiere Pro and After Effects. VSLs, UGC ads, and e-commerce content.",
      skills: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
    },
    {
      icon: Camera,
      title: "Videography",
      description: "Full-service production from concept to delivery. Expert storytelling and sound engineering.",
      skills: ["Production", "Sound Engineering", "Lighting", "Cinematography"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic social media management and content that drives engagement and growth.",
      skills: ["Social Media Strategy", "YouTube Management", "Content Planning", "Analytics"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual design for brands and campaigns using industry-standard tools.",
      skills: ["Canva", "Photoshop", "Brand Identity", "Visual Content"],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                Services
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium">
              <span className="gradient-text">What I Do</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index}>
                  <Card className="p-6 sm:p-8 space-y-4 hover:shadow-2xl transition-all duration-500 hover-lift border-2 hover:border-primary/20 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
