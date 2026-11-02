import React, { useState } from 'react';
import { Search, Lightbulb, Video, Send, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types.ts';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Discover',
      headline: 'Brand & Strategic Immersion',
      description:
        'We begin by analyzing your brand identity, product strengths, target audience, competitive landscape, and campaign conversion goals across USA, UK, UAE, or international markets.',
      outputs: ['Brand Alignment Audit', 'Audience Hook Strategy', 'Campaign Objectives & KPIs'],
    },
    {
      step: '02',
      title: 'Concept',
      headline: 'Creative Direction & Storyboarding',
      description:
        'Our creative team architects the narrative hook, visual treatments, scene-by-scene storyboards, and script variations designed specifically to grab attention in the first 3 seconds.',
      outputs: ['Bespoke Storyboards', 'Script & Voiceover Options', 'Cinematography Style Guide'],
    },
    {
      step: '03',
      title: 'Produce',
      headline: 'AI Synthesis & Elite Post-Production',
      description:
        'Using advanced generative AI cinematography, 3D simulation, neural upscaling, and professional editorial finishing (color grade, sound design, caustics, and VFX), we create pristine commercials.',
      outputs: ['Generative Scene Renders', 'Professional Color Grading', 'Custom Sound Design & Audio Mix'],
    },
    {
      step: '04',
      title: 'Deliver',
      headline: 'Platform-Ready Deployment',
      description:
        'We export mastered commercial assets optimized for television, cinema, web, and paid vertical formats (9:16 Reels, TikTok, Shorts), ready for immediate campaign deployment.',
      outputs: ['4K DCI Cinema Masters', 'Omnichannel Aspect Ratios', 'Performance Testing Iterations'],
    },
  ];

  return (
    <section id="process" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF202B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF202B] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B]" />
            <span>How We Work</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5">
            OUR CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">PROCESS.</span>
          </h2>

          <p className="text-base text-[#D9DDE2]/75 leading-relaxed font-normal">
            A battle-tested 4-stage pipeline that takes your vision from initial brief to broadcast-quality commercial execution.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-white/10 via-[#FF202B]/40 to-white/10 -z-0" />

          {steps.map((item, index) => {
            const isCurrent = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-2xl p-7 bg-[#121212] border transition-all duration-300 cursor-pointer flex flex-col justify-between z-10 ${
                  isCurrent
                    ? 'border-[#FF202B] shadow-[0_10px_35px_rgba(255,32,43,0.25)] bg-[#141414]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-base font-bold transition-colors ${
                      isCurrent
                        ? 'bg-[#FF202B] text-white shadow-[0_0_20px_rgba(255,32,43,0.6)]'
                        : 'bg-white/[0.04] text-[#D9DDE2] border border-white/10'
                    }`}>
                      {item.step}
                    </span>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D9DDE2]/40">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#FF202B] font-medium tracking-wide mb-4">
                    {item.headline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D9DDE2]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Outputs List */}
                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9DDE2]/40 block mb-2">
                    Key Deliverables
                  </span>
                  {item.outputs.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 text-[11px] text-[#D9DDE2]/85">
                      <span className="w-1 h-1 rounded-full bg-[#FF202B]" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Active Glow Accent */}
                {isCurrent && (
                  <div className="absolute -bottom-[1px] left-8 right-8 h-[2px] bg-[#FF202B] shadow-[0_0_12px_#FF202B]" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
