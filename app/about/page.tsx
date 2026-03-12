"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Zap, Target, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40M+", label: "Streams Generated" },
  { value: "4", label: "Global Markets" },
  { value: "98%", label: "Client Retention" },
]

const methodology = [
  {
    icon: Target,
    title: "Innovation",
    description: "We push boundaries with cutting-edge production techniques and forward-thinking brand strategies that position artists ahead of trends.",
  },
  {
    icon: Zap,
    title: "Precision",
    description: "Every beat, every visual, every word is crafted with meticulous attention to detail. We deliver excellence, not approximations.",
  },
  {
    icon: TrendingUp,
    title: "Execution",
    description: "Strategy without execution is just theory. We move with purpose and deliver results that impact charts and culture.",
  },
]

const locations = [
  {
    code: "UK",
    city: "London",
    flag: "🇬🇧",
    description: "European headquarters serving the UK grime, drill, and alternative scenes.",
    timezone: "GMT",
  },
  {
    code: "USA",
    city: "Los Angeles",
    flag: "🇺🇸",
    description: "West Coast operations hub for hip-hop, R&B, and pop production.",
    timezone: "PST",
  },
  {
    code: "AUS",
    city: "Sydney",
    flag: "🇦🇺",
    description: "Asia-Pacific base connecting artists to emerging markets.",
    timezone: "AEST",
  },
  {
    code: "KENYA",
    city: "Nairobi",
    flag: "🇰🇪",
    description: "African creative hub for Afrobeats, Gengetone, and fusion projects.",
    timezone: "EAT",
  },
]

const team = [
  { name: "Creative Director", role: "Vision & Strategy" },
  { name: "Head of Production", role: "Sound Design" },
  { name: "Brand Strategist", role: "Visual Identity" },
  { name: "A&R Lead", role: "Talent Development" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Authority in Music Production</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              We Build Artists Who
              <span className="text-primary"> Move Culture</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              FRZN Digital is not just a production house. We are strategic partners dedicated to 
              elevating elite artists through innovation, precision, and uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Innovation & Precision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our methodology is built on three pillars that define everything we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Reach Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">International Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Presence, Local Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With dedicated teams in four key markets, we understand the nuances of 
              regional sounds while maintaining a global perspective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{location.flag}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{location.city}</h3>
                    <p className="text-xs text-muted-foreground">{location.timezone}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built By Industry Veterans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in music production, 
              brand development, and artist management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-secondary border border-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground font-bold">
                    {member.name.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work With the Best?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the roster of elite artists who trust FRZN Digital to shape their sound and brand.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Book Your Vision Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
