"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Disc, Sparkles, Headphones, Music, ExternalLink, Play } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const tracks = [
  { id: 1, title: "Max of Mary", artist: "Seyi Max", category: "Full Production", spotifyId: "https://open.spotify.com/track/6K4dAuYl1wBLOPkPc78biI?si=ccc4157d4e614ae5", cover: "/Images/eli-1.jpeg" },
  { id: 2, title: "Road Raves", artist: "Seyi Max", category: "Full Production", spotifyId: "https://open.spotify.com/track/6dcKq81gYDRmOS9Llgn7sR?si=5a8afaa5921f4c2b", cover: "/Images/eli-1.jpeg" },
  { id: 3, title: "Too Real In Living Life 2", artist: "Trill Tega", category: "Mixing & Mastering", spotifyId: "https://open.spotify.com/track/3RXTDa4qRnGAW7kM953AIt?si=a241a3e9ce3040cc", cover: "/Images/eli-6.jpeg" },
  { id: 4, title: "Trip and Fall", artist: "Seyi Max", category: "Production", spotifyId: "https://open.spotify.com/track/697KIt6CfAgGjYlzN5zKUi?si=49e991fa62a74993", cover: "/Images/eli-1.jpeg" },
  { id: 5, title: "Freemybandz", artist: "Treasure Donavann", category: "Mixing", spotifyId: "https://open.spotify.com/track/4x34WlJMxMtUUt7dcP0ck9?si=ec354d318c854fe0", cover: "/Images/eli-3.jpeg" },
  { id: 6, title: "IN A FILTER", artist: "Glen Felix", category: "Full Production", spotifyId: "https://open.spotify.com/track/3IduUE1rRAHwrc2AV0293c?si=b1dce45b1404441d", cover: "/Images/eli-2.jpeg" },
  { id: 7, title: "Pretty Gal", artist: "Glen Felix", category: "Vocal Engineering", spotifyId: "https://open.spotify.com/track/3DLkysqC70YXQ36K4wkc1Y?si=2acc4f0084554e26", cover: "/Images/eli-2.jpeg" }
]

export function PortfolioPlaylist() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const current = tracks[currentTrackIndex]
  const spotifyLink = `${current.spotifyId}`

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f605,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Studio Discography</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
              THE <span className="text-muted-foreground/20 italic">SOUND</span><br />BOARD
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <Headphones className="w-8 h-8 text-primary/20 ml-auto mb-2" />
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Select a record</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Track List (Left) */}
          <div className="lg:col-span-5 space-y-2 order-2 lg:order-1 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => setCurrentTrackIndex(index)}
                className={`w-full group relative flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 border ${
                  currentTrackIndex === index 
                  ? 'bg-primary/5 border-primary/30 shadow-lg' 
                  : 'bg-transparent border-transparent hover:bg-secondary/40'
                }`}
              >
                <span className={`text-xs font-black ${currentTrackIndex === index ? 'text-primary' : 'text-muted-foreground/30'}`}>
                  0{index + 1}
                </span>
                <div className="text-left flex-1">
                  <h4 className={`text-sm font-bold leading-none mb-1 ${currentTrackIndex === index ? 'text-foreground' : 'text-muted-foreground/60'}`}>
                    {track.title}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">{track.artist}</p>
                </div>
                {currentTrackIndex === index && (
                   <div className="flex gap-1 h-3 items-end">
                      {[1, 2, 3].map(i => (
                        <motion.div key={i} animate={{ height: [2, 12, 4, 10, 2] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} className="w-0.5 bg-primary rounded-full" />
                      ))}
                   </div>
                )}
              </button>
            ))}
          </div>

          {/* Fully Responsive "Studio Monitor" Player (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTrackIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                // FIX: Removed aspect-video. Added min-h and vertical padding (py-12 md:py-16)
                // This allows the container to stretch vertically to fit the disc on mobile.
                className="relative min-h-[400px] md:min-h-[500px] w-full rounded-[2.5rem] border border-white/10 bg-zinc-950 overflow-hidden flex items-center justify-center py-12 px-6 md:py-16 md:px-10 shadow-2xl group/player"
              >
                {/* Visual Background Artwork */}
                <div className="absolute inset-0 z-0">
                  <img src={current.cover} className="w-full h-full object-cover opacity-40 blur-3xl scale-125" alt="" />
                  <div className="absolute inset-0 bg-black/70 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                </div>

                <div className="relative z-10 w-full max-w-md text-center flex flex-col items-center justify-center gap-y-8 md:gap-y-10">
                  {/* The Rotating Disc Container */}
                  <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 p-2 shadow-2xl shadow-black/50"
                    >
                      <img src={current.cover} className="w-full h-full object-cover rounded-full" alt="" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full pointer-events-none" />
                    {/* The Center Hole (Authenticity razzle dazzle) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-zinc-950 rounded-full border border-white/10 shadow-inner z-10" />
                  </div>

                  {/* Text Details */}
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3 break-words">
                      {current.title}
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                      <span className="h-[1px] w-6 md:w-8 bg-primary/40 shrink-0" />
                      <p className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] whitespace-nowrap">
                        {current.artist}
                      </p>
                      <span className="h-[1px] w-6 md:w-8 bg-primary/40 shrink-0" />
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="w-full pt-2">
                    <a 
                      href={spotifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#1DB954]/30 group"
                    >
                      <Play size={16} fill="black" className="group-hover:translate-x-0.5 transition-transform" />
                      Listen on Spotify
                      <ExternalLink size={14} className="opacity-50" />
                    </a>
                    <p className="text-[9px] text-white/30 uppercase mt-4 tracking-widest font-bold font-mono">
                      HQ Stream // 24-bit studio audio
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}