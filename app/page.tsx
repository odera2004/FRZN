import { Hero } from "@/components/hero"
import { PortfolioPlaylist } from "@/components/property-cards" 
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioPlaylist />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
