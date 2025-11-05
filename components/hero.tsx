"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"

const roles = [
  "Video Editor",
  "Graphic Designer",
  "Social Media Manager",
  "Content Strategist",
  "Videographer",
  "Sound Engineer",
]

export function Hero() {
  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <p className="text-sm sm:text-base text-muted-foreground bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
                Hello there 👋
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Digital Marketer & Content Creator
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Multifaceted Creative Professional — blending expertise as a Video Editor, Social Media Manager, 
              Digital Marketer, Content Strategist, and Graphic Designer.  
              Crafting compelling visual narratives and driving digital growth.  
              <span className="font-medium text-foreground"> 4+ years</span> transforming ideas into engaging videos and campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="group relative overflow-hidden hover-lift">
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="hover:shadow-md transition-all duration-300 hover:scale-105">
                <a href="#contact" className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image + Bubbles */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Enhanced glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse-glow" />

              {/* Profile with enhanced styling */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border-2 border-border shadow-2xl hover:shadow-3xl transition-all duration-500 group animate-float">
                <img
                  src="/profile-photo.jpg"
                  alt="Natnael Mengistu Zerga"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced decorative glowing orbs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

              {/* Enhanced Floating Bubbles */}
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`absolute px-4 py-2 text-sm rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-float`}
                  style={{
                    top: `${20 + index * 12}%`,
                    left: index % 2 === 0 ? "-25%" : "100%",
                    animationDelay: `${index * 0.6}s`
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-primary" />
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
