"use client"

import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"
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
    videoPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773385903/WhatsApp_Video_2026-03-11_at_20.02.45_3_nxacuh.mp4",
    quote: "The transformation in our workflow has been extraordinary. What once took weeks now happens in days.",
    image: "/Images/eli-2.jpeg"
  },
  {
    id: "2",
    name: "Seyi max",
    role: "Music Director",
    company: "Universal Music Group",
    videoPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773385921/WhatsApp_Video_2026-03-11_at_20.02.47_1_nujgbe.mp4",
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
    image: "/Images/eli-5.jpeg"
  },
]

function VideoTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
      setProgress(0)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div 
      className="group relative"
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onTouchStart={handlePlay}
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-background border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm">
        <div className="relative mx-auto aspect-[9/16] bg-black overflow-hidden">
          
          {/* Progress Bar Container (Instagram Style) */}
          <div className="absolute top-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden z-30">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          <video
            ref={videoRef}
            src={testimonial.videoPath}
            preload="metadata"
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
            onEnded={() => {
              setIsPlaying(false)
              setProgress(0)
            }}
          />

          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-40' : 'opacity-80'}`} />

          {/* Mute Button */}
          <div className="absolute bottom-5 right-5 flex gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg transition-all shadow-lg border border-white/10"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Pulse Live Indicator (No Text) */}
          <div className="absolute top-8 left-5 z-20">
            {isPlaying && (
              <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-primary/20 backdrop-blur-sm border border-primary/30">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                 <span className="text-[9px] font-black text-primary uppercase tracking-widest">Live</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm relative z-10">
          <blockquote className="text-base font-medium text-foreground mb-6 leading-relaxed italic border-l-2 border-primary/30 pl-4">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex items-center gap-3 pt-5 border-t border-border/40">
            {testimonial.image && (
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            )}
            <div className="flex-1 text-left">
              <p className="font-bold text-foreground text-sm tracking-tight">{testimonial.name}</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
              <p className="text-[11px] text-primary font-bold tracking-widest uppercase">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-primary uppercase tracking-widest mb-4 font-bold">Success Stories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tighter">Hear From Our Clients</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Industry leaders share their transformative experiences.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-y border-border/50 py-16">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-extrabold text-primary mb-2">500+</p>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-medium">Active Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-extrabold text-primary mb-2">98%</p>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-medium">Satisfaction</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-extrabold text-primary mb-2">1B+</p>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-medium">Total Streams</p>
          </div>
        </div>

        <div className="mt-20">
          <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}