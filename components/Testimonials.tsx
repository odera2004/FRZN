"use client"

import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  videoPath: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Glen",
    role: "Executive Producer",
    company: "Epic Records",
    videoPath: "/videos/testimonials.mp4",
    quote: "The transformation in our workflow has been extraordinary. What once took weeks now happens in days.",
    image: "/Images/eli-2.jpeg"
  },
  {
    id: "2",
    name: "Seyi max",
    role: "Music Director",
    company: "Universal Music Group",
    videoPath: "/videos/testimonials-1.mp4",
    quote: "We've never seen production quality like this. The level of detail and creativity is unmatched.",
    image: "/Images/eli-1.jpeg"
  },
  {
    id: "3",
    name: "Sypher",
    role: "Sound Engineer",
    company: "Sony Music",
    videoPath: "/videos/testimonials-2.mp4",
    quote: "This has completely redefined how we approach audio production. The results speak for themselves.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
 
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

function VideoTestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
   
      className="group relative"
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-background border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm">
        {/* Video Container - Premium Portrait Format (9:16) */}
        <div className="relative mx-auto aspect-[9/16] bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={testimonial.videoPath}
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Premium Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayPause}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg shadow-2xl"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 ml-0.5 fill-black" />
            ) : (
              <Play className="w-7 h-7 ml-1 fill-black" />
            )}
          </motion.button>

          {/* Premium Video Controls */}
          <div className="absolute bottom-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMute}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg transition-all shadow-lg"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Premium Badge */}
          <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center">
            <span className="text-xs font-semibold text-white tracking-widest">TESTIMONIAL {index + 1}</span>
          </div>
        </div>

        {/* Premium Testimonial Content */}
        <div className="p-6 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
          {/* Quote */}
          <blockquote className="text-base font-medium text-foreground mb-6 leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-5 border-t border-border/40">
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
              />
            )}
            <div className="flex-1">
              <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs text-primary/80 font-medium tracking-wide">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-primary uppercase tracking-widest mb-4">Success Stories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Hear From Our Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry leaders share their transformative experiences and remarkable results.
          </p>
        </motion.div>

        {/* Video Testimonials Grid - Premium Portrait Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <VideoTestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Active Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">1B+</p>
            <p className="text-muted-foreground">Total Streams</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to join our community?
          </h3>
          <Button size="lg" className="rounded-full">
            Start Your Journey Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
