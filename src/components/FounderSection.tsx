import React, { useState } from 'react';
import { Sparkles, Quote, Award, Target, Flame } from 'lucide-react';
import founderImg from '../assets/images/Bilal Syed CEO Promotional Portrait.png';

export const FounderSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(founderImg);

  const principles = [
    {
      title: 'Creativity First',
      desc: 'AI is a camera and a canvas, not a replacement for audacious ideas, emotional resonance, and bold taste.',
      icon: Flame,
    },
    {
      title: 'Technology With Purpose',
      desc: 'We leverage generative intelligence solely where it unlocks cinematic scale, impossible visuals, and commercial velocity.',
      icon: Target,
    },
    {
      title: 'Built for Impact',
      desc: 'Every commercial frame is engineered with intention: to seize attention, hold it, and convert viewers into loyal brand advocates.',
      icon: Award,
    },
  ];

  return (
    <section id="founder" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Cinematic Lighting Atmosphere */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF202B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF202B] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B]" />
            <span>Leadership & Philosophy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5">
            THE VISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">BEHIND VAYRO.</span>
          </h2>
        </div>

        {/* Editorial Layout: Portrait on one side, Narrative on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Luxury Frame */}
            <div className="relative w-full max-w-md rounded-2xl p-2.5 bg-gradient-to-b from-white/10 via-white/5 to-[#FF202B]/20 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              
              {/* Inner Picture Container with Aspect 2:3 */}
              <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-[#121212]">
                <img
                  src={imgSrc}
                  alt=" Bilal Syed — CEO & Founder, VAYRO"
                  className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-700 hover:scale-102"
                  onError={() => {
                    if (imgSrc !== '/vayro_branding.png') {
                      setImgSrc('/vayro_branding.png');
                    }
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Founder Identity Card Tag over portrait */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                  <span className="font-display text-xl font-bold text-white block">
                  Bilal Syed
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#FF202B] font-semibold tracking-wider uppercase mt-0.5">
                    <span>CEO & Founder</span>
                    <span className="text-white/40">·</span>
                    <span className="text-[#D9DDE2]/70 font-normal lowercase tracking-normal">VAYRO Commercial Studio</span>
                  </div>
                </div>
              </div>

              {/* Crimson Studio Corner Light Accent */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#FF202B] rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#FF202B] rounded-bl-lg" />
            </div>

          </div>

          {/* Vision Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Title Lockup */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold font-mono">
                Executive Manifesto
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
                 Bilal Syed
              </h3>
              <p className="text-sm text-[#D9DDE2]/60 font-medium">
                CEO & Founder, VAYRO
              </p>
            </div>

            {/* Founder Quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FF202B] mb-10">
              <p className="text-base sm:text-lg text-[#D9DDE2] leading-relaxed italic font-light">
                “At VAYRO, our vision is to combine creative storytelling with emerging AI technology to help brands communicate more powerfully. We believe great advertising is more than a beautiful image — it is an experience that captures attention, communicates value, and stays with people.”
              </p>
            </div>

            {/* 3 Core Principles */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#D9DDE2]/50 font-semibold font-mono block">
                Founding Principles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {principles.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#121212] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#FF202B]" />
                        <h4 className="font-display text-sm font-bold text-white">
                          {p.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#D9DDE2]/70 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Global Perspective Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#D9DDE2]/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF202B]" />
                <span>Operating internationally across USA, UK, UAE & Global Markets</span>
              </div>
              <span className="font-mono text-[#D9DDE2]/40">EST. 2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
