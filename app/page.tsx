import { Hero } from "@/components/hero"
import { PortfolioCards } from "@/components/property-cards"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioCards />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
