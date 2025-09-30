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
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Services</h2>
            <h3 className="text-3xl sm:text-4xl font-medium">What I Do</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <Icon className="h-8 w-8 text-primary" />
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
