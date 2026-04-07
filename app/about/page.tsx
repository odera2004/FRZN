"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart, Search, MessageSquare, Mic2, Globe, Code2 } from "lucide-react"
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
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
              The People Behind the Sound & Code
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
              Connection <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                Before Creation.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              FRZN isn't just a service. It's a creative partnership built to amplify your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE STORY SECTION --- */}
      <section className="py-20 border-t border-border/50 bg-white/50 dark:bg-black/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold italic tracking-tight text-primary">The Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              It started with GarageBand in high school — just a passion that outgrew the bedroom. 
              Over the years, the vision evolved into a multi-genre creative hub where sound development 
              and software engineering meet to create modern digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              FRZN exists because both music and software are deeply personal. 
              The best results don't come from a factory; they come from genuine creative partnership. 
            </p>
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <Mic2 className="w-10 h-10 text-primary mb-4" />
              <p className="italic text-lg text-foreground/80 leading-relaxed font-medium">
                "The goal has always been to be a well-loved creative partner — someone people trust, return to, and grow with."
              </p>
            </div>
          </div>

          {/* Featured Visual (Main Boss Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl aspect-[4/5]">
              <img 
                src="/Images/boss 2.jpeg" 
                alt="Lead Creative Vision" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-xl rotate-3">
              Lead Creative
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE COLLECTIVE SECTION (Grayscale Effect Integrated) --- */}
      <section className="py-32 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter italic">
              Meet the Collective
            </h2>
            <p className="text-muted-foreground text-lg">Strategic leads in creative sound and scalable code.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            
            {/* EUGINE ODERA CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/5] bg-neutral-200 shadow-2xl">
                <img 
                  src="/Images/yujo.jpeg" 
                  alt="Eugine Odera"
                  className="object-cover w-full h-full group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay with Bio & Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <p className="text-white/90 text-sm italic font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 mb-6">
                    Eugine bridges the gap between sonic art and digital precision, leading the creative vision for every FRZN project.
                  </p>
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-black text-foreground mb-1 italic">Eugine Odera</h4>
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-black">Lead Creative, UI Engineer & Frontend Developer</p>
              </div>
            </motion.div>

            {/* SUCDI ABDISAALAN CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/5] bg-neutral-200 shadow-2xl">
                <img 
                  src="/Images/sudi.jpeg" 
                  alt="Sucdi Abdisaalan"
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <p className="text-white/90 text-sm italic font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 mb-6">
                    Architecting the invisible layers. Focused on building robust, scalable logic that powers the FRZN digital experience.
                  </p>
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-black text-foreground mb-1 italic">Sucdi Abdisaalan</h4>
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-black">Backend Systems Lead</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Three things guide everything we do.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLOBAL REACH --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Rooted in four markets. Open to the world.</h2>
          <p className="text-muted-foreground mb-12">FRZN works remotely with partners across the globe.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div key={loc.city} className="p-6 rounded-xl border border-border hover:border-primary/50 transition-all bg-white dark:bg-zinc-900 shadow-sm">
                <span className="text-2xl mb-2 block">{loc.icon}</span>
                <h4 className="font-bold">{loc.city}</h4>
                <p className="text-xs text-muted-foreground">{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 border-t border-border bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Real?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If you're looking for a technical partner who cares about the vibe as much as the code — 
            we'd love to hear from you.
          </p>
          <Link href="/booking">
            <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all">
              Book Your Vision Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}