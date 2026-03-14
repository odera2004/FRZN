"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Calendar, Music, MapPin, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

// --- Constants (The missing definitions) ---
const genres = [
  "Hip-Hop / Rap",
  "R&B / Soul",
  "Pop",
  "Afrobeats",
  "Electronic / EDM",
  "Alternative / Indie",
  "Other",
]

const locations = [
  { code: "UK", label: "UK", flag: "🇬🇧" },
  { code: "USA", label: "USA", flag: "🇺🇸" },
  { code: "AUS", label: "AUS", flag: "🇦🇺" },
  { code: "KENYA", label: "KENYA", flag: "🇰🇪" },
  { code: "OTHER", label: "OTHER", flag: "🌍" },
]

const goals = [
  "Release a hit single",
  "Full album production",
  "Complete brand rebrand",
  "Build a visual identity",
  "Distribution deal",
  "Label shopping",
]

const steps = [
  { id: 1, title: "Genre", icon: Music },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Goals", icon: Target },
  { id: 4, title: "Schedule", icon: Calendar },
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    genre: "",
    location: "",
    goals: [] as string[],
  })

  const handleNext = () => currentStep < 4 && setCurrentStep(currentStep + 1)
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1)

  const canProceed = () => {
    if (currentStep === 1) return formData.genre !== ""
    if (currentStep === 2) return formData.location !== ""
    if (currentStep === 3) return formData.goals.length > 0
    return true
  }

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Visual Background Accent */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[radial-gradient(circle_at_50%_0%,#3b82f610,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Mobile-Optimized Header */}
          <div className="flex flex-col gap-6 mb-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-4">
                <ArrowLeft className="w-3 h-3" />
                Exit Application
              </Link>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                THE <span className="text-primary">VISION</span> CALL
              </h1>
            </motion.div>
            
            {/* Steps Tracker */}
            <div className="flex items-center justify-between bg-card/50 border border-border p-1.5 rounded-2xl backdrop-blur-md w-full">
              {steps.map((step) => (
                <div key={step.id} className="flex-1 flex items-center justify-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${currentStep >= step.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-secondary text-muted-foreground'}`}>
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{step.id}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold italic tracking-tight uppercase">01. Select Genre</h2>
                    <p className="text-sm text-muted-foreground">Match with the right production team.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {genres.map((g) => (
                      <button 
                        key={g} 
                        onClick={() => setFormData({...formData, genre: g})} 
                        className={`p-5 rounded-xl border text-left transition-all ${formData.genre === g ? 'bg-primary border-primary text-white' : 'bg-card/50 border-border'}`}
                      >
                        <span className="font-bold text-sm tracking-tight">{g}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold italic tracking-tight uppercase">02. Artist Location</h2>
                    <p className="text-sm text-muted-foreground">Where are you based?</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {locations.map((loc) => (
                      <button key={loc.code} onClick={() => setFormData({...formData, location: loc.code})} className={`p-6 rounded-xl border text-center transition-all ${formData.location === loc.code ? 'bg-primary border-primary text-white shadow-lg' : 'bg-card/50 border-border'}`}>
                        <span className="text-3xl mb-2 block">{loc.flag}</span>
                        <span className="font-bold text-[10px] uppercase tracking-tighter">{loc.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold italic tracking-tight uppercase">03. The Mission</h2>
                    <p className="text-sm text-muted-foreground">What are we building?</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {goals.map((goal) => (
                      <button key={goal} onClick={() => {
                        const newGoals = formData.goals.includes(goal) ? formData.goals.filter(g => g !== goal) : [...formData.goals, goal]
                        setFormData({...formData, goals: newGoals})
                      }} className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${formData.goals.includes(goal) ? 'bg-primary border-primary text-white' : 'bg-card/50 border-border'}`}>
                        <span className="font-bold text-sm">{goal}</span>
                        {formData.goals.includes(goal) && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
                  <h2 className="text-xl font-bold italic uppercase tracking-tight">04. Sync Studio Calendar</h2>
                  <div className="w-full bg-card rounded-2xl border-2 border-dashed border-border p-8 flex flex-col items-center justify-center">
                     <Calendar className="text-primary w-10 h-10 mb-4 opacity-50" />
                     <p className="text-sm font-bold mb-1 uppercase tracking-widest">Awaiting Integration</p>
                     <p className="text-[10px] text-muted-foreground uppercase">Calendly will scale automatically here.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-between gap-4 pt-6 border-t border-border/50">
            <button onClick={handleBack} disabled={currentStep === 1} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-20">
              [ Back ]
            </button>
            <Button 
              onClick={handleNext} 
              disabled={!canProceed() || currentStep === 4} 
              className="flex-1 sm:flex-none h-12 px-8 rounded-full font-bold text-sm shadow-lg shadow-primary/20"
            >
              {currentStep === 3 ? "Finalize" : "Continue"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}