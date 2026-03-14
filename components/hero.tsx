"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Mic2, Music, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background pt-28 pb-16">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              The Gold Standard of Production
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            SOUND THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
              DEFINES AN ERA.
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            We don't just record music; we engineer legacy. From chart-topping 
            sonics to iconic brand identities, we build the future of global sound.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Link href="/booking">
              <Button size="lg" className="h-14 px-10 rounded-full bg-primary text-white font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 group">
                Start Your Legacy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link >
           
          </motion.div>
         
          {/* Interactive Feature Grid (Replacing the Video) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
          >
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 transition-all duration-500 text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mic2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elite Vocals</h3>
              <p className="text-sm text-muted-foreground">Pristine clarity and character using world-class signal chains.</p>
            </div>

            {/* Feature 2 (The "Stylish" Center) */}
            <div className="group p-8 rounded-3xl bg-primary text-primary-foreground transition-all duration-500 text-left shadow-2xl shadow-primary/30 relative overflow-hidden">
               <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Music className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Platinum Mixing</h3>
                <p className="text-sm text-white/80">Radio-ready sonics that cut through any speaker in the world.</p>
               </div>
               {/* Abstract decorative circles */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-xl hover:border-primary/50 transition-all duration-500 text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Iconic Branding</h3>
              <p className="text-sm text-muted-foreground">Visual identities that make artists unforgettable on the global stage.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}