import { Card } from "@/components/ui/card"
import { ExternalLink, Youtube, Star, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "AASTU ECSF",
      description: "YouTube channel management, sound engineering, and social media strategy for educational content.",
      type: "YouTube Channel",
      link: "https://www.youtube.com/@aastuecsf3055",
      image: "/aastuecsf.png",
    },
    {
      title: "Lucy Tips",
      description: "Video editing for lifestyle and informative content with creative transitions and sound design.",
      type: "YouTube Channel",
      link: "https://www.youtube.com/@LucyTip",
      image: "/lucytips.png",
    },
    {
      title: "Upwork",
      description: "Complete YouTube management and video editing optimized for algorithm performance.",
      type: "Upwork",
      link: "https://www.upwork.com/freelancers/~01c428cb3eeda2fa92?mp_source=share",
      image: "/upwork.png",
    },
    {
      title: "KOKI SPA",
      description:
        "Creative strategy and content development for Instagram brand storytelling and promotional campaigns.",
      type: "Brand Strategy",
      link: "https://www.instagram.com/koki_spa/reel/DNEXzrySphP/",
      image: "/spa-wellness-luxury-brand.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                Selected Work
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium">
              <span className="gradient-text">Portfolio</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift border-2 hover:border-primary/20">
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Hover icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 border border-border/50">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h4>
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="group/btn bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.type === "YouTube Channel" ? (
                          <>
                            <Youtube className="mr-2 h-4 w-4" />
                            View Channel
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
