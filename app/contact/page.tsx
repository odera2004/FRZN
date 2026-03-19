"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mail, MapPin, Clock, MessageSquare, CheckCircle, Zap, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import emailjs from "@emailjs/browser"

const contactInfo = [
  { icon: Mail, label: "Email", value: "Justelijvh@frznsociety.net", href: "mailto:justelijvh@frznsociety.net" },
  { icon: MapPin, label: "Global Offices", value: "UK • USA • AUS • KENYA", href: null },
  { icon: Clock, label: "Response", value: "Within 24 Hours", href: null },
]

const inquiryTypes = ["General Inquiry", "Partnership", "Press", "Careers", "Support"]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", inquiryType: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // REPLACE THESE WITH YOUR ACTUAL KEYS
    const SERVICE_ID = "service_xh9ctks" 
    const TEMPLATE_ID = "template_jhzp1sp"
    const PUBLIC_KEY = "meTyBSJ72ymU2CuHv"

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formState, PUBLIC_KEY)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Email Error:", error)
      alert("Failed to send. Check your EmailJS Keys!")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Zap className="w-3 h-3 text-primary fill-current" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Direct Access</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-4">
            LET'S <span className="text-primary">TALK</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md uppercase tracking-tight font-medium">
            Bridging the gap between your vision and the global charts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-card border border-border/50">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                <p className="text-lg font-black tracking-tighter">{item.value}</p>
              </div>
            ))}
            
            <div className="bg-primary p-8 rounded-[2rem] text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black italic mb-2 uppercase">Ready to Create?</h3>
                <Link href="/booking">
                  <Button variant="secondary" className="w-full mt-4 rounded-xl font-bold uppercase tracking-tighter py-6">
                    Book Vision Call
                  </Button>
                </Link>
              </div>
              <Music className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20" />
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-3xl font-black uppercase italic">Sent!</h3>
                    <p className="text-muted-foreground mt-2 mb-8 uppercase text-xs font-bold">Expect a response within 24 hours.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="rounded-full px-10">Send Another</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                        <input name="name" required value={formState.name} onChange={handleChange} className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:border-primary outline-none" placeholder="Who are we talking to?" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                        <input name="email" type="email" required value={formState.email} onChange={handleChange} className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:border-primary outline-none" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Subject</label>
                      <select name="inquiryType" required value={formState.inquiryType} onChange={handleChange} className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:border-primary outline-none appearance-none">
                        <option value="" disabled>What's the mission?</option>
                        {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                      <textarea name="message" required rows={4} value={formState.message} onChange={handleChange} className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:border-primary outline-none resize-none" placeholder="Details on your project..." />
                    </div>

                    <Button disabled={isSubmitting} className="w-full h-16 rounded-xl bg-primary text-white font-black uppercase text-xl italic tracking-tighter shadow-lg shadow-primary/20">
                      {isSubmitting ? "Sending..." : "Send Transmission"}
                      <Send className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}