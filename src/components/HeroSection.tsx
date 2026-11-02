import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas.tsx';
import posterImg from '../assets/images/vayro_cinematic_poster_1791750666256.jpg';

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenShowreel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onStartProject,
  onOpenShowreel,
}) => {
  const [heroVisual, setHeroVisual] = React.useState<'poster' | '3d'>('poster');
  const [posterSrc, setPosterSrc] = React.useState<string>(posterImg);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Cinematic Studio Lighting Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#FF202B]/10 via-[#FF202B]/3 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#FF202B]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#D9DDE2]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Hairline Texture (Subtle cinematic depth) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Tagline kicker - Clean unboxed text with typographic dot */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF202B] shadow-[0_0_8px_#FF202B]" />
              <span>Built to Make an Impact</span>
              <span aria-hidden="true" className="text-[#D9DDE2]/40">·</span>
              <span className="text-[#D9DDE2]/70 font-normal">AI Commercial Production Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 text-balance">
              WE MAKE BRANDS <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
                IMPOSSIBLE
              </span>{' '}
              TO <span className="text-[#FF202B] text-glow-crimson">IGNORE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#D9DDE2]/80 leading-relaxed font-normal max-w-2xl mb-8">
              Cinematic AI-powered commercials crafted to capture attention, elevate brands,
              and turn bold ideas into unforgettable visual experiences for global markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-white bg-[#FF202B] hover:bg-[#ff3b44] transition-all duration-200 shadow-[0_0_24px_rgba(255,32,43,0.4)] hover:shadow-[0_0_36px_rgba(255,32,43,0.65)] flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#D9DDE2] hover:text-white bg-[#121212] hover:bg-[#1c1c1c] border border-white/10 hover:border-[#FF202B]/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Start a Project</span>
              </button>

              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D9DDE2]/80 hover:text-white transition-colors py-2 px-3 group"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#FF202B] flex items-center justify-center text-white transition-colors duration-200">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span className="underline-offset-4 group-hover:underline">Watch 2026 Reel</span>
              </button>
            </div>

            {/* Market & Production Standards - Clean unboxed metadata */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#D9DDE2]/60">
              <div className="flex items-center gap-2">
                <span className="text-[#FF202B] font-medium">Markets:</span>
                <span>USA · UK · UAE · International</span>
              </div>
              <span aria-hidden="true" className="text-white/20">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D9DDE2]/90 font-medium">Standard:</span>
                <span>4K DCI · Photorealistic AI · High-End CGI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Brand Showcase & Interactive 3D Viewport */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-black/60 border border-white/10 mb-4 z-20 backdrop-blur-md">
              <button
                onClick={() => setHeroVisual('poster')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  heroVisual === 'poster'
                    ? 'bg-[#FF202B] text-white shadow-[0_0_14px_rgba(255,32,43,0.5)]'
                    : 'text-[#D9DDE2]/70 hover:text-white'
                }`}
              >
                Studio Poster
              </button>
              <button
                onClick={() => setHeroVisual('3d')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  heroVisual === '3d'
                    ? 'bg-[#FF202B] text-white shadow-[0_0_14px_rgba(255,32,43,0.5)]'
                    : 'text-[#D9DDE2]/70 hover:text-white'
                }`}
              >
                Interactive 3D
              </button>
            </div>

            <div className="w-full relative flex items-center justify-center">
              {heroVisual === 'poster' ? (
                <div className="relative w-full max-w-md rounded-2xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-[#FF202B]/25 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
                  <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-black">
                    <img
                      src={posterSrc}
                      alt="VAYRO Cinematic AI Studio Poster — Ideas into Cinematic Reality"
                      className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-700 group-hover:scale-102"
                      onError={() => {
                        if (posterSrc !== '/vayro_poster.png') {
                          setPosterSrc('/vayro_poster.png');
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Rim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Badge at Bottom of Poster */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-display font-bold text-sm text-white block">
                          Ideas Into Cinematic Reality.
                        </span>
                        <span className="text-[10px] font-mono text-[#FF202B] uppercase tracking-wider">
                          Official Studio Poster
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#FF202B] animate-pulse" />
                    </div>
                  </div>
                </div>
              ) : (
                <Hero3DCanvas />
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
