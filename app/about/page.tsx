"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Heart, Search, MessageSquare, Mic2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

const philosophy = [
  {
    icon: Search,
    title: "1. Listen First",
    description: "Before a single sound is made, we take the time to understand who you are as an artist — your influences, your vision, and where you want to go.",
  },
  {
    icon: Heart,
    title: "2. Create Together",
    description: "This isn't a service you purchase and wait on. Every session, every beat, every direction is a collaboration between two people who care about the outcome.",
  },
  {
    icon: MessageSquare,
    title: "3. Stay Honest",
    description: "If something isn't working, we'll tell you. Great partnerships are built on trust, and we'd rather have a real conversation than deliver something that doesn't feel right.",
  },
]

const locations = [
  { city: "London", region: "UK & Europe", icon: "🇬🇧" },
  { city: "LA / Vancouver", region: "North America", icon: "🇺🇸" },
  { city: "Sydney", region: "Australia & Oceania", icon: "🇦🇺" },
  { city: "Nairobi", region: "Africa", icon: "🇰🇪" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
              The Person Behind the Sound
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
              Connection <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                Before Creation.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              FRZN isn't a production house. It's a partnership built around you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              It started with GarageBand in high school — just a passion that outgrew the bedroom. 
              Over the years, Elijah grew into a multi-genre creative sound developer working across 
              Logic Pro X and FL Studio, exploring everything from Afrobeats to Amapiano to Trap.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But FRZN was never built to be just another name in the marketplace. It exists because 
              great music is personal — and the best results come from genuine creative partnership. 
              That's the only way we work here.
            </p>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 aspect-square flex flex-col justify-center text-center">
             <Mic2 className="w-12 h-12 text-primary mx-auto mb-4" />
             <p className="italic text-lg text-foreground/80">
              "Elijah never wanted to be a famous producer. The goal has always been to be a well-loved creative sound developer — someone artists trust, return to, and grow with."
             </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Three things guide everything we do.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-background border border-border">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Rooted in four markets. Open to the world.</h2>
          <p className="text-muted-foreground mb-12">FRZN works remotely with artists across the globe.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div key={loc.city} className="p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <span className="text-2xl mb-2 block">{loc.icon}</span>
                <h4 className="font-bold">{loc.city}</h4>
                <p className="text-xs text-muted-foreground">{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Sound?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If you're an independent or signed artist looking for a real creative partner — 
            not just a service — we'd love to hear from you.
          </p>
          <Link href="/booking">
            <Button size="lg" className="rounded-full px-8">Book Your Vision Call <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}