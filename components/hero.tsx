"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now accepting new clients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
              Innovation{" "}
              <span className="text-primary">&</span>{" "}
              Precision
              <br />
              <span className="text-muted-foreground">in Music.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We craft chart-topping records and world-class brand identities for elite 
              artists ready to dominate the global stage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 gap-2 group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50 font-medium px-8">
                View Portfolio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border mt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50M+</p>
                <p className="text-sm text-muted-foreground">Streams Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - VSL Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
              {/* Video placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-card" />
              
              {/* Subtle texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                  <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>
              
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Video Sales Letter</span>
                <span className="text-xs text-muted-foreground">2:34</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-lg"
            >
              <span className="text-sm font-medium text-foreground">🎵 Grammy-Nominated</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-lg"
            >
              <span className="text-sm font-medium text-foreground">✨ Premium Quality</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
