"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, ExternalLink, Send, CheckCircle, AlertCircle, Sparkles, Star } from "lucide-react"
import { initEmailJS, sendEmail } from "@/lib/email"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again or contact me directly.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                Contact
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-balance">
              <span className="gradient-text">Let's create something amazing together</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need video editing, digital marketing strategy, or creative content, I'm here to help bring
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <Card className="p-8 space-y-6 hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Get in touch
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:translate-x-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:natimeng1269@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        natimeng1269@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:translate-x-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/natinaelzerga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Connect with me
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:translate-x-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Upwork</p>
                      <a
                        href="https://www.upwork.com/freelancers/~01c428cb3eeda2fa92?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        View my profile
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send me a message
                </h4>
                
                {isSubmitted ? (
                  <div className="flex items-center gap-3 text-green-600 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <p>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                ) : error ? (
                  <div className="flex items-center gap-3 text-red-600 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      />
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
