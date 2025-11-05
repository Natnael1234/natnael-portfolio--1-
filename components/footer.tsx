import { Youtube, Linkedin, Instagram, Heart, Sparkles } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/natinaelzerga", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/nati_mendee/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@aastuecsf3055", label: "YouTube" },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Natnael Mengistu Zerga. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> in Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            Crafting digital experiences with passion and precision
            <Sparkles className="h-3 w-3 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
