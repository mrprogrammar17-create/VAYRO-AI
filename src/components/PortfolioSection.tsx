import React, { useState } from 'react';
import { Play, ArrowUpRight, Film, ExternalLink, Sparkles, X, Maximize2 } from 'lucide-react';
import automotiveImg from '../assets/images/automotive_campaign_1791496656353.jpg';
import perfumeImg from '../assets/images/perfume_campaign_1791496642698.jpg';
import fashionImg from '../assets/images/fashion_campaign_1791496751519.jpg';
import techImg from '../assets/images/tech_campaign_1791496690818.jpg';

interface CinematicProject {
  id: string;
  title: string;
  category: string;
  concept: string;
  thumbnail: string;
  driveUrl: string;
  duration: string;
  aspectRatio: string;
  description: string;
  highlights: string[];
}

export const PortfolioSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<CinematicProject | null>(null);

  const projects: CinematicProject[] = [
    {
      id: 'brand-commercial',
      title: 'Cinematic Brand Commercial',
      category: 'Commercial Film',
      concept: 'High-Impact Brand Campaign',
      thumbnail: automotiveImg,
      driveUrl: 'https://drive.google.com/file/d/1GfpxLMpkEJ25NbVU8pOkr-4U876sCqH5/view?usp=sharing',
      duration: '0:30s',
      aspectRatio: '16:9 4K Cinema',
      description:
        'A dynamic, broadcast-ready commercial combining photorealistic vehicle aerodynamics, liquid metallic light reflections, and precision camera tracking designed for international media broadcast.',
      highlights: ['Volumetric Smoke Dynamics', '4K Anamorphic Lens Flare', 'High-Octane Pace Ramping'],
    },
    {
      id: 'product-ad',
      title: 'Premium Product Advertisement',
      category: 'Product Advertising',
      concept: 'Luxury Product Showcase',
      thumbnail: perfumeImg,
      driveUrl: 'https://drive.google.com/file/d/1cZwjoOC5Lj8S5XNfIBEUyvbP5weH-AZI/view?usp=sharing',
      duration: '0:25s',
      aspectRatio: '16:9 Scope',
      description:
        'Sensual macro cinematography capturing crystal fluid caustics, micro-mist dispersion, and sculpted amber refraction engineered to position products in the top luxury tier.',
      highlights: ['Micro Fluid & Droplet Physics', 'Refractive Glass Caustics', 'Ultra-Fine Studio Lighting'],
    },
    {
      id: 'brand-film',
      title: 'AI-Powered Brand Film',
      category: 'Brand Film',
      concept: 'Narrative Storytelling',
      thumbnail: fashionImg,
      driveUrl: 'https://drive.google.com/file/d/1RuZSTC_E9-y8ggITlbSsB80UhRmmkVV7/view?usp=sharing',
      duration: '0:45s',
      aspectRatio: '2.39:1 Theatrical',
      description:
        'A poetic dialogue between brutalist monolithic architecture and sweeping crimson silk textures. Visual storytelling crafted to express brand ethos and command cultural retention.',
      highlights: ['Aerodynamic Silk Physics', 'Natural Twilight Color Science', '35mm Film Grain Emulation'],
    },
    {
      id: 'creative-showcase',
      title: 'Creative Advertising Showcase',
      category: 'Creative Campaign',
      concept: 'Next-Gen Technology Ads',
      thumbnail: techImg,
      driveUrl: 'https://drive.google.com/file/d/1nZFhTJW1Crvyd_8tf2cN2rmA9OPbmGvR/view?usp=sharing',
      duration: '0:35s',
      aspectRatio: '16:9 UHD',
      description:
        'A showcase of impossible visual concepts, weightless industrial design levitation, and neural visual synthesis made for disruptive digital campaigns and product keynotes.',
      highlights: ['Zero-Gravity Levitation', 'Anisotropic Titanium Shaders', 'Holographic UI Glow'],
    },
  ];

  return (
    <section id="work" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5">
      {/* Background Subtle Crimson Streak */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FF202B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] shadow-[0_0_8px_#FF202B]" />
              <span>SELECTED COMMERCIAL REELS</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              OUR WORK —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
                CINEMATIC PROJECTS
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#D9DDE2]/70 max-w-md font-normal leading-relaxed">
            Click any project card to watch the video reel. Each sample demonstrates our photorealistic AI commercial direction, cinematic motion, and broadcast finishing.
          </p>
        </div>

        {/* 4 Dedicated Video Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedVideo(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#121212] border-2 border-white/10 hover:border-[#FF202B]/70 transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_60px_rgba(255,32,43,0.22)] cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter contrast-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/30 to-black/20 group-hover:opacity-80 transition-opacity" />

                {/* Project Index Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/15 text-[#D9DDE2]">
                  <span className="text-[#FF202B] font-bold">0{index + 1}</span>
                  <span className="text-white/30">|</span>
                  <span>{project.aspectRatio}</span>
                </div>

                {/* Center Play Button with Hover Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF202B]/90 group-hover:bg-[#FF202B] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,32,43,0.55)] group-hover:shadow-[0_0_45px_rgba(255,32,43,0.85)] group-hover:scale-110 active:scale-95 transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Duration indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs font-mono bg-black/80 px-2.5 py-1 rounded border border-white/10 text-white">
                  <Film className="w-3.5 h-3.5 text-[#FF202B]" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#FF202B] font-semibold font-mono">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#D9DDE2]/50 font-mono">
                      Project Sample 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D9DDE2]/75 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Visual Technique Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-[#D9DDE2]/70 bg-white/[0.04] px-2.5 py-1 rounded border border-white/5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#FF202B] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video Sample</span>
                  </span>

                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-[#D9DDE2]/70 hover:text-white bg-white/[0.04] hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    <span>Google Drive</span>
                    <ExternalLink className="w-3 h-3 text-[#FF202B]" />
                  </a>
                </div>
              </div>

              {/* Bottom Crimson Accent line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#FF202B] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>

      {/* Embedded Video / Project Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col my-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808]/80">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF202B] animate-pulse" />
                <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
                  {selectedVideo.title}
                </span>
                <span className="text-xs text-[#D9DDE2]/50 font-mono hidden sm:inline">
                  {selectedVideo.aspectRatio}
                </span>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg text-[#D9DDE2] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Cinematic Letterbox Bars */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-black pointer-events-none" />

              {/* Center Interactive Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <a
                  href={selectedVideo.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-[#FF202B] hover:bg-[#ff3b44] text-white flex items-center justify-center shadow-[0_0_40px_rgba(255,32,43,0.7)] transition-all transform hover:scale-110 active:scale-95 mb-4"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </a>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {selectedVideo.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D9DDE2]/80 max-w-md mb-6">
                  Click below to open and watch this high-resolution master reel on Google Drive.
                </p>

                <a
                  href={selectedVideo.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-[#FF202B] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Open Video in Google Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#0e0e0e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#D9DDE2]/70">
                <span className="text-white font-medium">Production Spec:</span> 4K DCI Master · 24fps · Full Commercial Rights
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D9DDE2] transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedVideo.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-[#FF202B] hover:bg-[#ff3b44] text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center gap-2"
                >
                  <span>Watch on Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
