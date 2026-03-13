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
    videoPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773385921/WhatsApp_Video_2026-03-11_at_20.02.47_1_nujgbe.mp4",
    quote: "The transformation in our workflow has been extraordinary. What once took weeks now happens in days.",
    image: "/Images/eli-2.jpeg"
  },
  {
    id: "2",
    name: "Seyi max",
    role: "Music Director",
    company: "Universal Music Group",
    videoPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773385903/WhatsApp_Video_2026-03-11_at_20.02.45_3_nxacuh.mp4",
    quote: "We've never seen production quality like this. The level of detail and creativity is unmatched.",
    image: "/Images/eli-1.jpeg"
  },
  {
    id: "3",
    name: "Sypher",
    role: "Sound Engineer",
    company: "Sony Music",
    videoPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773385933/WhatsApp_Video_2026-03-12_at_17.54.14_xqqkik.mp4",
    quote: "This has completely redefined how we approach audio production. The results speak for themselves.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
        videoRef.current.play().catch(e => console.error("Playback failed", e))
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
    <motion.div className="group relative">
      <div className="relative h-full rounded-3xl overflow-hidden bg-background border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm">
        <div className="relative mx-auto aspect-[9/16] bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={testimonial.videoPath}
            preload="metadata" // Optimized: Loads tiny info but doesn't clog the network
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayPause}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg shadow-2xl z-20"
          >
            {isPlaying ? <Pause className="w-7 h-7 fill-black" /> : <Play className="w-7 h-7 ml-1 fill-black" />}
          </motion.button>

          <div className="absolute bottom-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMute}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg transition-all shadow-lg"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>
          </div>

          <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center">
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Testimonial {index + 1}</span>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
          <blockquote className="text-base font-medium text-foreground mb-6 leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>

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
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-primary uppercase tracking-widest mb-4">Success Stories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Hear From Our Clients</h2>
          <p className="text-lg text-muted-foreground">Industry leaders share their transformative experiences.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-border pt-20">
          <div><p className="text-4xl font-bold text-primary">500+</p><p className="text-muted-foreground text-sm uppercase tracking-tighter">Active Clients</p></div>
          <div><p className="text-4xl font-bold text-primary">98%</p><p className="text-muted-foreground text-sm uppercase tracking-tighter">Satisfaction</p></div>
          <div><p className="text-4xl font-bold text-primary">1B+</p><p className="text-muted-foreground text-sm uppercase tracking-tighter">Total Streams</p></div>
        </div>

        <div className="mt-20">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform">Start Your Journey Today</Button>
        </div>
      </div>
    </section>
  )
}