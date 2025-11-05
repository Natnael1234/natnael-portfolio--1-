import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WeddingOffers } from "@/components/wedding-offers"
import { Portfolio } from "@/components/portfolio"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WeddingOffers />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
