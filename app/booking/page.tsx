"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Calendar, Music, MapPin, Target, Sparkles, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import emailjs from "@emailjs/browser"

type FormData = {
  genres: string[] // Changed to array
  location: string
  goals: string[]
  name: string
  email: string
}

const genres = ["Hip-Hop / Rap", "R&B / Soul", "Pop", "Afrobeats", "Electronic / EDM", "Alternative / Indie", "Other"]
const locations = [
  { code: "UK", label: "United Kingdom", flag: "🇬🇧" },
  { code: "USA", label: "United States", flag: "🇺🇸" },
  { code: "AUS", label: "Australia", flag: "🇦🇺" },
  { code: "KENYA", label: "Kenya", flag: "🇰🇪" },
  { code: "OTHER", label: "Other", flag: "🌍" },
]
const goals = ["Release a hit single", "Full album production", "Complete brand rebrand", "Build a visual identity", "Distribution deal", "Label shopping"]

const steps = [
  { id: 1, title: "Genre", icon: Music },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Details", icon: User }, // Added Identity Step
  { id: 4, title: "Schedule", icon: Calendar },
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    genres: [],
    location: "",
    goals: [],
    name: "",
    email: "",
  })

  const handleNext = () => currentStep < 4 && setCurrentStep(currentStep + 1)
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1)

  const toggleGenre = (genre: string) => {
    const newGenres = formData.genres.includes(genre)
      ? formData.genres.filter((g) => g !== genre)
      : [...formData.genres, genre]
    setFormData({ ...formData, genres: newGenres })
  }

  const toggleGoal = (goal: string) => {
    const newGoals = formData.goals.includes(goal)
      ? formData.goals.filter((g) => g !== goal)
      : [...formData.goals, goal]
    setFormData({ ...formData, goals: newGoals })
  }

  const sendBooking = async () => {
    setIsSubmitting(true)
    
    const SERVICE_ID = "YOUR_SERVICE_ID"
    const ADMIN_TEMPLATE_ID = "YOUR_ADMIN_TEMPLATE_ID" // Sent to you
    const ARTIST_TEMPLATE_ID = "YOUR_ARTIST_CONFIRM_TEMPLATE_ID" // Sent to them
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"

    const templateParams = {
      name: formData.name,
      email: formData.email,
      genre: formData.genres.join(", "),
      location: formData.location,
      goals: formData.goals.join(", "),
    }

    try {
      // 1. Send to Client/Admin
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      // 2. Send Confirmation to Artist
      await emailjs.send(SERVICE_ID, ARTIST_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      
      setIsDone(true)
    } catch (error) {
      alert("Submission failed. Please check your EmailJS setup.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    if (currentStep === 1) return formData.genres.length > 0
    if (currentStep === 2) return formData.location !== ""
    if (currentStep === 3) return formData.name !== "" && formData.email.includes("@")
    return true
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>

          {!isDone ? (
            <>
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-black tracking-tighter uppercase italic italic">THE VISION CALL</h1>
                <p className="text-muted-foreground text-sm">Step {currentStep} of 4: {steps[currentStep-1].title}</p>
              </div>

              {/* Progress Bar (Mobile Optimized) */}
              <div className="flex justify-between mb-12 bg-card/50 p-2 rounded-2xl border border-border">
                {steps.map((s) => (
                  <div key={s.id} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentStep >= s.id ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
                    {currentStep > s.id ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h2 className="text-2xl font-black tracking-tight italic uppercase">Select Your Sound</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {genres.map((g) => (
                          <button key={g} onClick={() => toggleGenre(g)} className={`p-4 rounded-xl border text-left flex items-center justify-between ${formData.genres.includes(g) ? 'bg-primary/20 border-primary text-primary' : 'bg-card border-border hover:border-primary/50'}`}>
                            <span className="font-bold text-sm">{g}</span>
                            {formData.genres.includes(g) && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h2 className="text-2xl font-black tracking-tight italic uppercase">Location</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {locations.map((loc) => (
                          <button key={loc.code} onClick={() => setFormData({...formData, location: loc.code})} className={`p-6 rounded-xl border text-center ${formData.location === loc.code ? 'bg-primary border-primary text-white' : 'bg-card border-border'}`}>
                            <span className="text-2xl mb-2 block">{loc.flag}</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter">{loc.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h2 className="text-2xl font-black tracking-tight italic uppercase">Your Identity</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Stage Name / Full Name</label>
                          <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 bg-card border border-border rounded-xl focus:border-primary outline-none" placeholder="LUNA..." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 bg-card border border-border rounded-xl focus:border-primary outline-none" placeholder="artist@example.com" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
                      <h2 className="text-2xl font-black tracking-tight italic uppercase">The Mission Summary</h2>
                      <div className="bg-card border border-border rounded-2xl p-6 text-left space-y-3">
                         <p className="text-xs uppercase font-bold text-primary">Genre: <span className="text-foreground">{formData.genres.join(", ")}</span></p>
                         <p className="text-xs uppercase font-bold text-primary">Location: <span className="text-foreground">{formData.location}</span></p>
                         <p className="text-xs uppercase font-bold text-primary">Artist: <span className="text-foreground">{formData.name}</span></p>
                      </div>
                      <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-8">
                         <Calendar className="mx-auto mb-4 text-primary" />
                         <p className="text-sm font-bold uppercase italic">Awaiting Calendly Link</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
                <button onClick={handleBack} disabled={currentStep === 1} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-20 underline">Back</button>
                <Button onClick={currentStep === 4 ? sendBooking : handleNext} disabled={!canProceed() || isSubmitting} className="rounded-full px-10 h-12 bg-primary text-white font-bold uppercase text-xs">
                  {isSubmitting ? "Syncing..." : currentStep === 4 ? "Initialize Booking" : "Next Step"}
                </Button>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 bg-card border border-border rounded-[3rem]">
              <Check className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">You're in.</h2>
              <p className="text-muted-foreground max-w-sm mx-auto mb-8">We've sent a confirmation to {formData.email}. Our team is preparing for the call.</p>
              <Link href="/"><Button variant="outline" className="rounded-full px-10">Return Home</Button></Link>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}