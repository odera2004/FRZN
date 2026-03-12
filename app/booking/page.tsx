"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Calendar, Music, MapPin, Target, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

type FormData = {
  genre: string
  location: string
  goals: string[]
  name: string
  email: string
}

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
  { code: "UK", label: "United Kingdom", flag: "🇬🇧" },
  { code: "USA", label: "United States", flag: "🇺🇸" },
  { code: "AUS", label: "Australia", flag: "🇦🇺" },
  { code: "KENYA", label: "Kenya", flag: "🇰🇪" },
  { code: "OTHER", label: "Other", flag: "🌍" },
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
  const [formData, setFormData] = useState<FormData>({
    genre: "",
    location: "",
    goals: [],
    name: "",
    email: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenreSelect = (genre: string) => {
    setFormData({ ...formData, genre })
  }

  const handleLocationSelect = (location: string) => {
    setFormData({ ...formData, location })
  }

  const handleGoalToggle = (goal: string) => {
    const newGoals = formData.goals.includes(goal)
      ? formData.goals.filter((g) => g !== goal)
      : [...formData.goals, goal]
    setFormData({ ...formData, goals: newGoals })
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.genre !== ""
      case 2:
        return formData.location !== ""
      case 3:
        return formData.goals.length > 0
      default:
        return true
    }
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Elite Artist Qualifier</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Book Your Vision Call
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your artistic vision so we can prepare a tailored strategy for our call.
            </p>
          </motion.div>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                      currentStep > step.id
                        ? "bg-primary border-primary"
                        : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 md:w-24 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Genre */}
            {currentStep === 1 && (
              <motion.div
                key="genre"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">{"What's"} your primary genre?</h2>
                <p className="text-muted-foreground mb-8">
                  This helps us match you with the right producers and writers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => handleGenreSelect(genre)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.genre === genre
                          ? "bg-primary/10 border-primary text-foreground"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <span className="font-medium">{genre}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <motion.div
                key="location"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">{"Where are you based?"}</h2>
                <p className="text-muted-foreground mb-8">
                  We serve artists globally with dedicated teams in key markets.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {locations.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => handleLocationSelect(loc.code)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.location === loc.code
                          ? "bg-primary/10 border-primary text-foreground"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{loc.flag}</span>
                      <span className="font-medium">{loc.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">What are your main goals?</h2>
                <p className="text-muted-foreground mb-8">
                  Select all that apply. This shapes the focus of our vision call.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => handleGoalToggle(goal)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        formData.goals.includes(goal)
                          ? "bg-primary/10 border-primary text-foreground"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          formData.goals.includes(goal)
                            ? "bg-primary border-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {formData.goals.includes(goal) && (
                          <Check className="w-3 h-3 text-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium">{goal}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Calendly */}
            {currentStep === 4 && (
              <motion.div
                key="calendly"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Your Vision Call</h2>
                <p className="text-muted-foreground mb-8">
                  Choose a time that works best for you. Calls are 30 minutes.
                </p>
                
                {/* Summary */}
                <div className="bg-background border border-border rounded-xl p-6 mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Your Submission</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Genre</span>
                      <span className="text-sm font-medium text-foreground">{formData.genre}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <span className="text-sm font-medium text-foreground">
                        {locations.find((l) => l.code === formData.location)?.label}
                      </span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-muted-foreground">Goals</span>
                      <div className="text-right">
                        {formData.goals.map((goal) => (
                          <span key={goal} className="block text-sm font-medium text-foreground">
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Calendly Placeholder */}
                <div className="bg-background border-2 border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center text-center">
                  <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Calendly Embed</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your Calendly scheduling widget will appear here.
                  </p>
                  <code className="text-xs text-primary bg-primary/10 px-3 py-1 rounded">
                    calendly.com/frzn-digital/vision-call
                  </code>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Check className="w-4 h-4" />
                Complete Booking
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
