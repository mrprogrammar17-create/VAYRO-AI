import React, { useState } from 'react';
import { Play, Sparkles, Film, Maximize2, Volume2 } from 'lucide-react';
import { ShowreelModal } from './ShowreelModal.tsx';
import showreelImg from '../assets/images/showreel_cinema_1791496765668.jpg';

export const ShowreelSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="showreel" className="relative py-20 lg:py-32 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Lighting Streak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-64 bg-[#FF202B]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF202B] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B]" />
            <span>2026 Commercial Showreel</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 text-balance">
            VISUALS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">STOP THE SCROLL.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D9DDE2]/75 leading-relaxed max-w-2xl">
            From product launches to cinematic brand campaigns, we turn ideas into visual experiences people remember.
          </p>
        </div>

        {/* Big Cinematic Showreel Frame */}
        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-[0_20px_70px_rgba(0,0,0,0.9)] group">
          
          {/* Main Thumbnail Media */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={showreelImg}
              alt="VAYRO 2026 Commercial Showreel Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105 brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 transition-opacity duration-300 group-hover:opacity-75" />

            {/* Red Atmospheric Rim Highlight */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF202B]/40 rounded-2xl transition-all duration-300 pointer-events-none" />

            {/* Floating Play Trigger */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF202B] text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,32,43,0.5)] group-hover:shadow-[0_0_55px_rgba(255,32,43,0.85)] group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer mb-5"
                aria-label="Play 2026 Commercial Showreel"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </button>

              <span className="font-display text-lg sm:text-2xl font-bold tracking-wider text-white uppercase drop-shadow-md">
                Experience The Showreel
              </span>

              <span className="text-xs sm:text-sm text-[#D9DDE2]/75 font-mono mt-1">
                4K Cinema · AI Direction · Sound Design [01:45]
              </span>
            </div>

            {/* Corner Indicators */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[#D9DDE2]/80">
              <span className="w-2 h-2 rounded-full bg-[#FF202B] animate-pulse" />
              <span>DCI 4K · 2.39:1 SCOPE</span>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-black/70 hover:bg-[#FF202B] backdrop-blur-md border border-white/10 hover:border-[#FF202B] text-xs font-semibold text-white tracking-wider uppercase transition-colors flex items-center gap-2"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Bottom Metabar */}
          <div className="p-4 sm:p-5 bg-[#0f0f0f] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D9DDE2]/70">
            <div className="flex items-center gap-2">
              <span className="text-[#FF202B] font-semibold">Campaign Showcase:</span>
              <span>Perfume · Automotive · Skincare · Tech · Fashion · Energy</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="text-white hover:text-[#FF202B] font-medium transition-colors cursor-pointer"
              >
                Launch Reel Viewer →
              </button>
            </div>
          </div>
        </div>

      </div>

      <ShowreelModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
