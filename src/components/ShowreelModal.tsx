import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';
import showreelImg from '../assets/images/showreel_cinema_1791496765668.jpg';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'Intro · Studio Identity', time: '00:00' },
    { title: 'Scent of Obsession · Luxury Perfume', time: '00:15' },
    { title: 'Power in Motion · Electric Hypercar', time: '00:32' },
    { title: 'The Art of Radiance · Skincare', time: '00:48' },
    { title: 'Designed for Tomorrow · Spatial Tech', time: '01:05' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Simulate progress when playing
  useEffect(() => {
    let timer: any;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808]/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF202B] animate-pulse" />
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
              VAYRO — Commercial Showreel 2026
            </span>
            <span className="text-xs text-[#D9DDE2]/50 font-mono">4K DCI · 24fps</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#D9DDE2] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF202B]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Screen Viewport */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <img
            src={showreelImg}
            alt="VAYRO 2026 Showreel Preview"
            className="w-full h-full object-cover transition-transform duration-700 filter contrast-105"
            referrerPolicy="no-referrer"
          />

          {/* Cinematic Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-black pointer-events-none" />

          {/* Atmospheric Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#FF202B]/90 hover:bg-[#FF202B] text-white flex items-center justify-center shadow-[0_0_40px_rgba(255,32,43,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>
          </div>

          {/* Anamorphic Flare Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF202B]/30 to-transparent pointer-events-none" />

          {/* Live Reel Watermark & Chapter Marker */}
          <div className="absolute bottom-10 left-6 flex items-center gap-3 text-xs bg-[#080808]/75 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10">
            <Film className="w-3.5 h-3.5 text-[#FF202B]" />
            <span className="font-mono text-white">00:24 / 01:45</span>
            <span className="text-[#D9DDE2]/40">·</span>
            <span className="text-[#D9DDE2]/80">Commercial Reel Compilation</span>
          </div>

          {/* Sound Toggle Overlay */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-10 right-6 p-2 rounded-lg bg-[#080808]/80 text-[#D9DDE2] hover:text-white border border-white/10 transition-colors"
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#FF202B]" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        <div className="p-4 bg-[#0d0d0d] border-t border-white/10 flex flex-col gap-3">
          {/* Progress Bar */}
          <div
            className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer relative group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newPct = (clickX / rect.width) * 100;
              setProgress(Math.max(0, Math.min(100, newPct)));
            }}
          >
            <div
              className="h-full bg-[#FF202B] rounded-full transition-all duration-200 relative shadow-[0_0_10px_#FF202B]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Chapter Quick Jump Selector */}
          <div className="flex items-center justify-between text-xs text-[#D9DDE2]/70 pt-1">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-medium">Reel Chapters:</span>
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveChapter(idx);
                    setProgress(idx * 25);
                  }}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeChapter === idx ? 'text-[#FF202B] font-semibold' : 'text-[#D9DDE2]/60'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#D9DDE2]/40">
              <span>PROD_REEL_v2.4</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
