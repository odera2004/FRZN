"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Disc } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const tracks = [
  {
    id: 1,
    title: "Midnight Echoes",
    artist: "LUNA",
    duration: "3:42",
    category: "Full Production",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387526/WhatsApp_Video_2026-03-12_at_19.17.31_3_aep6ks.mp4", // Cloudinary handles audio from video files too!
    cover: "/Images/eli-1.jpeg"
  },
  {
    id: 2,
    title: "Rise Up",
    artist: "PHOENIX",
    duration: "2:58",
    category: "Songwriting",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387495/WhatsApp_Video_2026-03-12_at_19.17.30_1_o82fpl.mp4",
    cover: "/Images/eli-2.jpeg"
  },
  {
    id: 3,
    title: "Neon Dreams",
    artist: "CIPHER",
    duration: "3:15",
    category: "Mixing & Mastering",
    audioPath: "https://res.cloudinary.com/do0mtxjce/video/upload/f_auto,q_auto/v1773387357/WhatsApp_Video_2026-03-12_at_19.17.29_2_pjderd.mp4",
    cover: "/Images/eli-3.jpeg"
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

  const togglePlay = () => setIsPlaying(!isPlaying)

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-sm text-primary uppercase tracking-[0.3em] font-bold mb-4 text-center md:text-left">Discography</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center md:text-left">THE SOUNDBOARD</h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-center md:text-right text-sm leading-relaxed">
            A curated selection of sonic identities crafted for the global stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Playlist (Spotify Clone Style) */}
          <div className="lg:col-span-7 space-y-2">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                onClick={() => playTrack(index)}
                className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                  currentTrackIndex === index ? 'bg-primary/10 border border-primary/20' : 'hover:bg-card border border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img src={track.cover} className="w-full h-full object-cover rounded-md" alt="" />
                    {currentTrackIndex === index && isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
                        <div className="flex gap-1 items-end h-4">
                          <motion.div animate={{ height: [4, 16, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-primary" />
                          <motion.div animate={{ height: [10, 4, 10] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-primary" />
                          <motion.div animate={{ height: [6, 14, 6] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors ${currentTrackIndex === index ? 'text-primary' : 'text-foreground'}`}>
                      {track.title}
                    </h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{track.artist} — {track.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-muted-foreground hidden sm:block">{track.duration}</span>
                  <div className={`p-2 rounded-full border ${currentTrackIndex === index ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground'}`}>
                    {currentTrackIndex === index && isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Modern "Now Playing" Glass Card */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              key={currentTrackIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl p-8 flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-20 blur-3xl -z-10" style={{ backgroundColor: 'var(--primary)' }} />
              
              <div className="flex justify-between items-start">
                <div className="p-3 bg-background/50 backdrop-blur-lg rounded-2xl border border-white/10">
                  <Music className="text-primary" />
                </div>
                <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full bg-primary/20 border border-background flex items-center justify-center text-[10px] font-bold italic">HQ</div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <motion.div 
                  animate={isPlaying ? { rotate: 360 } : {}} 
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 mx-auto mb-8 relative"
                >
                  <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow" />
                  <img src={currentTrack.cover} className="w-full h-full object-cover rounded-full shadow-2xl p-2 border border-white/10" alt="" />
                </motion.div>
                <h3 className="text-3xl font-black tracking-tight">{currentTrack.title}</h3>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">{currentTrack.artist}</p>
              </div>

              {/* Player Controls */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                    <span>{audioRef.current ? Math.floor(audioRef.current.currentTime) : "0"}:00</span>
                    <span>{currentTrack.duration}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><SkipBack /></button>
                  <button 
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" className="ml-1" />}
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><SkipForward /></button>
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