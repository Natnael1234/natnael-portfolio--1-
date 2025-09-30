"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-block">
              <p className="text-sm sm:text-base text-muted-foreground bg-secondary px-4 py-2 rounded-full shadow-sm">
                Hello there 👋
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
              <Button size="lg" asChild className="group relative overflow-hidden">
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="hover:shadow-md transition">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Image + Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />

              {/* Profile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border shadow-xl"
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Natnael Mengistu Zerga"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative glowing orbs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />

              {/* Floating Bubbles */}
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    delay: index * 0.6, 
                    ease: "easeInOut" 
                  }}
                  className={`absolute px-4 py-2 text-sm rounded-full bg-background/70 backdrop-blur-md border border-border shadow-sm`}
                  style={{
                    top: `${20 + index * 12}%`,
                    left: index % 2 === 0 ? "-25%" : "100%",
                  }}
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
