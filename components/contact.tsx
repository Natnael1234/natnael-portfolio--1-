import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Contact</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-balance">
              Let's create something amazing together
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need video editing, digital marketing strategy, or creative content, I'm here to help bring
              your vision to life.
            </p>
          </div>

          <Card className="p-8 sm:p-12 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:natimeng1269@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    natimeng1269@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className="h-6 w-6 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="www.linkedin.com/in/natinaelzerga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    Connect with me
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="h-6 w-6 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="font-medium">Upwork</p>
                  <a
                    href="https://www.upwork.com/freelancers/~01c428cb3eeda2fa92?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    View my profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:natnael@example.com">Get In Touch</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
