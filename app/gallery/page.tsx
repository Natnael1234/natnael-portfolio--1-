"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ExternalLink } from "lucide-react"

type WorkCategory = "all" | "video-editing" | "videography" | "social-media" | "graphics"

interface WorkItem {
  id: number
  title: string
  category: WorkCategory
  thumbnail: string
  link?: string
  description: string
}

const works: WorkItem[] = [
  // Video Editing
  {
    id: 1,
    title: "E-commerce Video Editor ",
    category: "video-editing",
    thumbnail: "/hsplus.png",
    link: "https://drive.google.com/file/d/1dVKjfNHyeaLCYq3OhbpkIqGjDhj58x3P/view?usp=sharing",
    description: "High-energy commercial edit",
  },
  {
    id: 2,
    title: "Gosple Music Clip",
    category: "videography",
    thumbnail: "/tekeblonal.jpg",
    link: "https://www.youtube.com/watch?v=eb6IVQSbr9I",
    description: "Music Clip Video Editing",
  },
  {
    id: 3,
    title: "Youtube Short",
    category: "video-editing",
    thumbnail: "/short.png",
    link: "https://www.youtube.com/shorts/Gr7SD29G0ak?feature=share",
    description: "Engaging short-form content",
  },
  // Videography
  // {
  //   id: 4,
  //   title: "Corporate Event Coverage",
  //   category: "videography",
  //   thumbnail: "/corporate-event-videography.jpg",
  //   link: "https://youtube.com",
  //   description: "Professional event filming",
  // },
  // {
  //   id: 5,
  //   title: "Product Showcase",
  //   category: "videography",
  //   thumbnail: "/product-videography-showcase.jpg",
  //   link: "https://youtube.com",
  //   description: "High-quality product shots",
  // },
  // {
  //   id: 6,
  //   title: "Interview Series",
  //   category: "videography",
  //   thumbnail: "/interview-videography-setup.jpg",
  //   link: "https://youtube.com",
  //   description: "Multi-camera interview setup",
  // },
  // // Social Media Management
  // {
  //   id: 7,
  //   title: "Instagram Campaign",
  //   category: "social-media",
  //   thumbnail: "/instagram-social-media-campaign.jpg",
  //   link: "https://instagram.com",
  //   description: "Viral content strategy",
  // },
  // {
  //   id: 8,
  //   title: "YouTube Channel Growth",
  //   category: "social-media",
  //   thumbnail: "/youtube-channel-management.jpg",
  //   link: "https://youtube.com",
  //   description: "Channel optimization & growth",
  // },
  // {
  //   id: 9,
  //   title: "TikTok Content Series",
  //   category: "social-media",
  //   thumbnail: "/tiktok-content-creation.jpg",
  //   link: "https://tiktok.com",
  //   description: "Trending short-form content",
  // },
  // // Graphics
  // {
  //   id: 10,
  //   title: "Brand Identity Design",
  //   category: "graphics",
  //   thumbnail: "/brand-identity-logo-design.jpg",
  //   description: "Complete brand package",
  // },
  {
    id: 11,
    title: "Graphics for International Aids Day",
    category: "graphics",
    thumbnail: "/2.png",
    link: "https://drive.google.com/file/d/1v6mp2yyg8xpwh1k6TyDYi55zRHQun8dT/view?usp=sharing",
    description: "Banner for NGO",
  },
  {
    id: 12,
    title: "Motion Graphics",
    category: "graphics",
    thumbnail: "/logo-[H].png",
    link: "https://drive.google.com/file/d/1VpDZaiNA0Z_OCO_-mPO6NhS7Ev4r4C7P/view?usp=sharing",
    description: "Animated brand elements",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all")

  const categories = [
    { id: "all" as WorkCategory, label: "All Work" },
    { id: "video-editing" as WorkCategory, label: "Video Editing" },
    { id: "videography" as WorkCategory, label: "Videography" },
    { id: "social-media" as WorkCategory, label: "Social Media" },
    { id: "graphics" as WorkCategory, label: "Graphics" },
  ]

  const filteredWorks = activeCategory === "all" ? works : works.filter((work) => work.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              My Work Gallery
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              A collection of my creative projects across video editing, videography, social media, and graphic design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <Card
                key={work.id}
                className="group overflow-hidden border-border hover:border-foreground/20 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={work.thumbnail || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                      >
                        {work.category === "video-editing" || work.category === "videography" ? (
                          <>
                            <Play className="w-4 h-4" />
                            Watch
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            View
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No works found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
