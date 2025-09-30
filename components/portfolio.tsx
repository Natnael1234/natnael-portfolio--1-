import { Card } from "@/components/ui/card"
import { ExternalLink, Youtube } from "lucide-react"
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
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Selected Work</h2>
            <h3 className="text-3xl sm:text-4xl font-medium">Portfolio</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold">{project.title}</h4>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{project.type}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild className="group/btn bg-transparent">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
