"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const tracks = [
  {
    id: 1,
    title: "Midnight Echoes",
    artist: "LUNA",
    duration: "3:42",
    category: "Full Production",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387526/WhatsApp_Video_2026-03-12_at_19.17.31_3_aep6ks.mp4",
    cover: "/Images/eli-1.jpeg" // Your original image
  },
  {
    id: 2,
    title: "Rise Up",
    artist: "PHOENIX",
    duration: "2:58",
    category: "Songwriting",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387495/WhatsApp_Video_2026-03-12_at_19.17.30_1_o82fpl.mp4",
    cover: "/Images/eli-2.jpeg" // Your original image
  },
  {
    id: 3,
    title: "Neon Dreams",
    artist: "CIPHER",
    duration: "3:15",
    category: "Mixing & Mastering",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387357/WhatsApp_Video_2026-03-12_at_19.17.29_2_pjderd.mp4",
    cover: "/Images/eli-3.jpeg" // Your original image
  },
]

export function PortfolioPlaylist() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTrack = tracks[currentTrackIndex]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrackIndex])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(p)
    }
  }

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  return (
    <section id="portfolio" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-primary uppercase tracking-[0.4em] font-bold mb-3">Discography</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">THE SOUNDBOARD</h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed hidden md:block text-right">
            Sonic innovation meets visual storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Playlist List */}
          <div className="lg:col-span-7 space-y-2 order-2 lg:order-1">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                onClick={() => playTrack(index)}
                className={`group flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                  currentTrackIndex === index ? 'bg-primary/10 border border-primary/20' : 'hover:bg-card border border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <img src={track.cover} className="w-12 h-12 object-cover rounded-lg" alt={track.title} />
                  <div>
                    <h4 className={`text-sm font-bold ${currentTrackIndex === index ? 'text-primary' : 'text-foreground'}`}>
                      {track.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{track.artist}</p>
                  </div>
                </div>
                <div className={`p-2 rounded-full border ${currentTrackIndex === index ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground'}`}>
                  {currentTrackIndex === index && isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Player Card - Mobile Fixed */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div 
              key={currentTrackIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-[2rem] border border-border bg-card shadow-2xl p-6 flex flex-col items-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 blur-3xl -z-10 bg-primary" />
              
              <div className="w-full flex justify-between items-center mb-6">
                 <div className="p-2 bg-background/50 rounded-lg border border-white/5 text-primary">
                    <Music size={18} />
                 </div>
                 <span className="text-[10px] font-bold text-primary tracking-widest bg-primary/10 px-2 py-1 rounded-full uppercase">Studio High-Fidelity</span>
              </div>

              {/* Cover Image Container */}
              <motion.div 
                animate={isPlaying ? { rotate: 360 } : {}} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 md:w-64 md:h-64 mb-6 relative"
              >
                <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full" />
                <img 
                  src={currentTrack.cover} 
                  className="w-full h-full object-cover rounded-full p-1.5 shadow-2xl border border-white/10" 
                  alt="" 
                />
              </motion.div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black tracking-tight">{currentTrack.title}</h3>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mt-1">{currentTrack.artist}</p>
              </div>

              {/* Progress & Controls */}
              <div className="w-full space-y-6">
                <div className="space-y-2">
                  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div className="h-full bg-primary" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase">
                    <span>{audioRef.current ? Math.floor(audioRef.current.currentTime / 60) : "0"}:{String(Math.floor(audioRef.current?.currentTime || 0) % 60).padStart(2, '0')}</span>
                    <span>{currentTrack.duration}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                  <button onClick={(e) => { e.stopPropagation(); setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)}} className="text-muted-foreground hover:text-foreground transition-colors"><SkipBack size={20} /></button>
                  <button 
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl"
                  >
                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)}} className="text-muted-foreground hover:text-foreground transition-colors"><SkipForward size={20} /></button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={currentTrack.audioPath} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </section>
  )
}