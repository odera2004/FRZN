"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Music, Mic2, Palette, Sparkles, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    id: "songwriting",
    icon: Mic2,
    title: "Songwriting",
    tagline: "Words That Resonate",
    description: "Craft lyrics and melodies that connect with your audience on a deeper level. Our team of seasoned songwriters collaborate with you to capture your unique voice and story.",
    features: [
      "Custom topline and melody creation",
      "Lyric writing and concept development",
      "Hook and chorus optimization",
      "Collaborative writing sessions",
      "Genre-specific expertise",
      "Unlimited revisions until perfection",
    ],
    process: [
      { step: 1, title: "Discovery", desc: "Deep dive into your vision and influences" },
      { step: 2, title: "Concept", desc: "Develop themes and lyrical direction" },
      { step: 3, title: "Creation", desc: "Write and refine the song together" },
      { step: 4, title: "Polish", desc: "Final revisions and delivery" },
    ],
    pricing: "Starting at $2,500",
    popular: false,
  },
  {
    id: "production",
    icon: Music,
    title: "Music Production",
    tagline: "Sound That Moves",
    description: "From concept to master, we handle every aspect of your production. Our state-of-the-art studios and world-class engineers ensure your music sounds radio-ready.",
    features: [
      "Full instrumental production",
      "Mixing and mastering",
      "Live instrumentation",
      "Vocal production and tuning",
      "Sound design and synthesis",
      "Stems and project files included",
    ],
    process: [
      { step: 1, title: "Pre-Production", desc: "Reference tracks and sonic direction" },
      { step: 2, title: "Production", desc: "Beat creation and arrangement" },
      { step: 3, title: "Recording", desc: "Vocal sessions and tracking" },
      { step: 4, title: "Post", desc: "Mix, master, and deliver" },
    ],
    pricing: "Starting at $5,000",
    popular: true,
  },
  {
    id: "branding",
    icon: Palette,
    title: "Full Branding",
    tagline: "Identity That Stands Out",
    description: "Build a visual identity that matches your sonic vision. From logos to social presence, we create cohesive brand systems that elevate your entire artistic persona.",
    features: [
      "Logo and visual identity design",
      "Album artwork and single covers",
      "Social media brand kit",
      "Press photos art direction",
      "Merchandise design",
      "Brand guidelines document",
    ],
    process: [
      { step: 1, title: "Research", desc: "Competitor and market analysis" },
      { step: 2, title: "Strategy", desc: "Brand positioning and mood boards" },
      { step: 3, title: "Design", desc: "Visual identity creation" },
      { step: 4, title: "Launch", desc: "Implementation and rollout" },
    ],
    pricing: "Starting at $7,500",
    popular: false,
  },
]

const addons = [
  { name: "Distribution Strategy", price: "$500" },
  { name: "Music Video Creative Direction", price: "$2,000" },
  { name: "EPK Development", price: "$1,000" },
  { name: "Playlist Pitching", price: "$750" },
]

export default function ServicesPage() {
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">The Logic Behind the Art</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Services Built for
              <span className="text-primary"> Elite Artists</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Every service we offer is designed with one goal: to position you at the 
              top of your craft. No shortcuts. No compromises. Just excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      {service.popular && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          <Star className="w-3 h-3" />
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{service.title}</h2>
                    <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link href="/booking">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <span className="text-lg font-bold text-foreground">{service.pricing}</span>
                    </div>
                  </div>

                  {/* Process Card */}
                  <div className={`bg-card border border-border rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Our Process</h3>
                    <div className="space-y-6">
                      {service.process.map((item, i) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                              {item.step}
                            </div>
                            {i < service.process.length - 1 && (
                              <div className="w-px h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="pb-6">
                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enhance Your Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Add these premium services to any package for a complete artist development solution.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">{addon.name}</h3>
                <p className="text-primary font-semibold">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why FRZN Digital?
              </h2>
              <p className="text-lg text-muted-foreground">
                We do things differently. Here is what sets us apart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-sm">✕</span>
                  Other Agencies
                </h3>
                <ul className="space-y-4">
                  {[
                    "Cookie-cutter templates",
                    "Outsourced production",
                    "Limited revisions",
                    "Slow turnaround",
                    "Generic strategies",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                  FRZN Digital
                </h3>
                <ul className="space-y-4">
                  {[
                    "100% custom, tailored work",
                    "In-house elite team",
                    "Unlimited revisions",
                    "Fast, reliable delivery",
                    "Data-driven strategies",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
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
            <Play className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Elevate Your Sound?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a vision call and let us show you what is possible when strategy meets creativity.
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
