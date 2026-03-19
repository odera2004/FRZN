"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Share2, MessageSquare, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    title: "Music Production",
    tagline: "Unmistakably Yours",
    description: "We build your sound from the ground up — crafting beats, arrangements, and sonic textures that feel like an extension of your identity. No templates. Just intention.",
    steps: [
      { label: "Pre-Production", detail: "We listen first — your influences, your goals, your sound." },
      { label: "Production", detail: "Building the foundation together, piece by piece." },
      { label: "Recording", detail: "Creating the perfect space for your performance." },
      { label: "Post", detail: "Polishing until the vision is crystal clear." },
    ]
  },
  {
    title: "Mixing & Mastering",
    tagline: "Radio-Ready Precision",
    description: "Your music deserves to hit right on every speaker — from high-end systems to mobile earbuds. We mix with surgical detail and emotional care.",
    steps: [
      { label: "Listen", detail: "Studying the record's DNA before touching a single dial." },
      { label: "Balance", detail: "Ensuring every element finds its home in the stereo field." },
      { label: "Master", detail: "Optimizing for every platform, everywhere." },
      { label: "Deliver", detail: "Final files ready for the global stage." },
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Tailored Workflow</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              SERVICES BUILT <br />
              <span className="text-muted-foreground/30 italic">AROUND YOU.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              High-tier sound development for artists who value 
              creative partnership over digital transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-12">
        <div className="container mx-auto px-6 space-y-32">
          {services.map((s, idx) => (
            <div key={s.title} className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">0{idx + 1} // Core Service</span>
                <h2 className="text-4xl font-bold mb-4 tracking-tight">{s.title}</h2>
                <p className="text-primary/80 font-medium mb-6">{s.tagline}</p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{s.description}</p>
              </div>
              
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {s.steps.map((step, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-secondary/20 border border-border/40 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest mb-4 text-muted-foreground group-hover:text-primary transition-colors">Phase 0{i + 1}</h4>
                    <h5 className="font-bold text-lg mb-2">{step.label}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy & Consult Section */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <Share2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Social Media Strategy</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Your sound needs to be seen. We help you build a presence that 
                  authentically represents your artistry and connects you with the right audience.
                </p>
              </div>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Understand your story</li>
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Content Direction</li>
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Brand Refinement</li>
              </ul>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-card border border-border flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <MessageSquare className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Consultations & Revisions</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Honest direction from start to finish. Revisions aren't an extra charge — 
                  they are part of the commitment to getting your record right.
                </p>
              </div>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Goal Setting</li>
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Transparent Feedback</li>
                <li className="flex items-center gap-2"><Plus className="w-3 h-3 text-primary"/> Unlimited Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Centered CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">
              READY TO FIND <br />
              <span className="text-primary italic">YOUR SOUND?</span>
            </h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                  Book Your Vision Call
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
                Limited Availability for 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}