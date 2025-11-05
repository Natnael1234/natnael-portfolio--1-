import { Card } from "@/components/ui/card"
import { MapPin, Award, Users, Briefcase, TrendingUp, Star } from "lucide-react"

export function About() {
  const stats = [
    { icon: Briefcase, label: "4+ Years", description: "Experience", color: "text-blue-600" },
    { icon: Users, label: "15+ Projects", description: "On Upwork", color: "text-green-600" },
    { icon: Award, label: "100%", description: "Job Success", color: "text-amber-600" },
    { icon: TrendingUp, label: "5+ Platforms ", description: "Social Media Management", color: "text-purple-600" },
    { icon: Star, label: "5.0", description: "Rating", color: "text-orange-600" },
    { icon: MapPin, label: "Addis Ababa", description: "Ethiopia", color: "text-teal-600" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-widest text-primary font-semibold bg-primary/10 px-6 py-2 rounded-full">
                About Me
              </h2>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-balance">
              Driving digital growth through creative storytelling
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Specializing in high-converting ads, VSLs, and engaging content for YouTube channels and brands worldwide.
            </p>
          </div>

          {/* Enhanced stats with animations */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index}>
                  <Card className="p-6 sm:p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover-lift border-2 group">
                    <div className="flex items-center justify-between">
                      <Icon className={`h-8 w-8 ${stat.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl sm:text-3xl font-bold">{stat.label}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{stat.description}</p>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className="bg-card border-2 border-border rounded-3xl p-8 sm:p-12 space-y-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="gradient-text">Core Expertise</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Video Editing", desc: "Premiere Pro, DaVinci", icon: "🎬" },
                { title: "Digital Marketing", desc: "Social & Content Strategy", icon: "📈" },
                { title: "Graphic Design", desc: "Photoshop, Illustrator", icon: "🎨" },
                { title: "Videography", desc: "Production & Post", icon: "📷" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border rounded-2xl text-center space-y-4 hover:shadow-xl hover-lift transition-all duration-300 group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-3xl p-8 sm:p-12 space-y-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center">
              <span className="gradient-text">Gears I Use</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Camera", desc: "Canon Mark IV & Canon R3", icon: "📷" },
                { title: "Lighting", desc: "Amran & Spotlight", icon: "💡" },
                { title: "Editing Tools", desc: "Premiere Pro, DaVinci", icon: "🎬" },
              ].map((gear, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border rounded-2xl text-center space-y-4 hover:shadow-xl hover-lift transition-all duration-300 group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{gear.icon}</div>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{gear.title}</h4>
                  <p className="text-sm text-muted-foreground">{gear.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
