import React from 'react';
import { Camera, Sparkles, Layers, Cpu, CheckCircle, Users } from 'lucide-react';

export const WhyVayroSection: React.FC = () => {
  const advantages = [
    {
      title: 'Cinematic Visual Quality',
      description:
        'Every project is graded and crafted to match the standards of high-end commercial filmmaking. We deliver lighting, texture, and depth that feel tangible and prestigious.',
      icon: Camera,
    },
    {
      title: 'Original Creative Concepts',
      description:
        'We never rely on generic prompts or recycled tropes. Our team develops bespoke hooks, tailored art direction, and unique narrative arcs specific to your brand.',
      icon: Sparkles,
    },
    {
      title: 'Flexible Campaign Variations',
      description:
        'Rapidly test multiple creative angles, character archetypes, seasonal backgrounds, and language adaptations without multiplying standard production overhead.',
      icon: Layers,
    },
    {
      title: 'Modern AI-Assisted Production',
      description:
        'By integrating the newest generative video models with traditional post-production pipelines, we execute ambitious concepts at remarkable speed.',
      icon: Cpu,
    },
    {
      title: 'Platform-Ready Delivery',
      description:
        'Deliverables are custom-formatted for their target destinations: whether 2.39:1 theatrical scope, 16:9 broadcast television, or high-retention 9:16 vertical reels.',
      icon: CheckCircle,
    },
    {
      title: 'A Collaborative Production Process',
      description:
        'We treat every engagement as a creative partnership. Clear review milestones, transparent feedback rounds, and dedicated visual directors guide each phase.',
      icon: Users,
    },
  ];

  return (
    <section id="why-vayro" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF202B]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF202B] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B]" />
            <span>The VAYRO Edge</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 text-balance">
            NOT JUST CONTENT.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
              A CREATIVE ADVANTAGE.
            </span>
          </h2>

          <p className="text-base text-[#D9DDE2]/75 leading-relaxed font-normal max-w-2xl">
            We bridge the gap between emerging artificial intelligence and world-class commercial advertising, offering international brands an unfair visual advantage.
          </p>
        </div>

        {/* 6 Grid Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF202B]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(255,32,43,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF202B]/10 group-hover:border-[#FF202B]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#FF202B]" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-[#D9DDE2]/75 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#D9DDE2]/40 font-mono">
                  <span>ADVANTAGE // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FF202B] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
