"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Midnight Echoes",
    artist: "LUNA",
    category: "Full Production",
    videoPath: "/videos/test-1.mp4",
    stats: "12M Streams",
  },
  {
    id: 3,
    title: "Rise Up",
    artist: "PHOENIX",
    category: "Songwriting",
    videoPath: "/videos/test-2.mp4",
    stats: "8M Streams",
  },
  {
    id: 4,
    title: "Neon Dreams",
    artist: "CIPHER",
    category: "Full Production",
    image: "/Images/eli-3.jpeg",
    stats: "25M Streams",
  },
  {
    id: 5,
    title: "Soundscape",
    artist: "AURORA",
    category: "Music & Branding",
    videoPath: "/videos/test-3.mp4",
    stats: "Label Deal",
  },
  {
    id: 6,
    title: "Evolve",
    artist: "NEXUS",
    category: "Full Rebrand",
    image: "/Images/eli-4.jpeg",
    stats: "30M Reach",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

function PortfolioItem({ item }: { item: typeof portfolioItems[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const handlePlay = () => {
    if (videoRef.current && item.videoPath) {
      videoRef.current.muted = isMuted
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => console.log("Interaction required"))
      }
    }
  }

  const handleStop = () => {
    if (videoRef.current && item.videoPath) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const togglePlayPause = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        handlePlay()
      }
    }
  }

  const toggleMute = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div 
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onTouchStart={handlePlay} 
      className="group relative"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl">
        
       <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
          {item.videoPath ? (
            <video
              ref={videoRef}
              src={item.videoPath}
              preload="none" // STOP AUTO-DOWNLOADING
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              playsInline 
              muted={isMuted}
              loop
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                item.image?.includes('eli-4') ? 'object-contain bg-[#0b0e11]' : 'object-cover'
              }`}
            />
          )}
        </div>

        <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-40' : 'opacity-80'}`} />
        
        {item.videoPath && (
          <>
            <motion.button
              onClick={togglePlayPause}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20"
            >
              {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
            </motion.button>

            <button
              onClick={toggleMute}
              className="absolute bottom-24 right-6 p-2.5 rounded-full bg-black/40 hover:bg-primary text-white backdrop-blur-md md:opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </>
        )}

        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
          <div className="flex items-start justify-between pointer-events-auto">
            <span className="px-3 py-1 bg-background/50 backdrop-blur-md border border-border rounded-full text-[10px] uppercase tracking-widest text-foreground font-bold flex items-center gap-2">
              {item.videoPath && isPlaying && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
              {item.category}
            </span>
          </div>

          <div className="pointer-events-auto text-foreground">
            <p className="text-sm text-muted-foreground mb-1 font-medium">{item.artist}</p>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <div className="flex items-center justify-between">
              <p className="text-xs text-primary font-bold tracking-widest uppercase">{item.stats}</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PortfolioCards() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-4 font-bold">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance tracking-tighter">
              Selected Works<br /><span className="text-muted-foreground">2024 — 2026</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            Sonic innovation meets visual storytelling.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}