import React from 'react';
import { 
  Clapperboard, 
  Package, 
  Smartphone, 
  Film, 
  UserCheck, 
  Compass, 
  ArrowRight,
  Check
} from 'lucide-react';
import { Service } from '../types.ts';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services: Service[] = [
    {
      id: 'ai-commercial',
      title: 'AI Commercial Production',
      shortDesc: 'Cinematic, AI-powered video advertisements for brands and products.',
      fullDesc:
        'End-to-end commercial filmmaking utilizing cutting-edge generative video pipelines, high-fidelity synthesis, and professional post-production color grading.',
      deliverables: ['DCI 4K Broadcast Master', 'TV & Web Commercial Rights', 'Multiple Cutdowns (60s/30s/15s)'],
      idealFor: 'Brand Launches, Theatrical Advertising, High-Impact Media Buys',
      iconName: 'Clapperboard',
    },
    {
      id: 'product-ads',
      title: 'Product Advertising',
      shortDesc: 'High-end product visuals, hero shots, and cinematic product campaigns.',
      fullDesc:
        'Photorealistic macro cinematography, impossible camera angles, and physical fluid/light simulations that elevate physical and digital products into luxury icons.',
      deliverables: ['Exploded 3D Visuals', 'Micro Fluid & Lighting Physics', 'E-Commerce Hero Assets'],
      idealFor: 'Perfume, Electronics, Automotive, Cosmetics, Jewelry',
      iconName: 'Package',
    },
    {
      id: 'social-ads',
      title: 'Social Media Ad Creatives',
      shortDesc: 'Vertical 9:16 ads for Instagram Reels, TikTok, YouTube Shorts, and paid social campaigns.',
      fullDesc:
        'Scroll-stopping vertical video creatives engineered with psychologically calibrated retention hooks, dynamic pace ramping, and high-converting CTA endings.',
      deliverables: ['Native 9:16 Vertical Video', 'High-Retention Hook Variations', 'Performance Testing Packs'],
      idealFor: 'Meta Ads, TikTok Ads, YouTube Shorts, Paid Acquisition',
      iconName: 'Smartphone',
    },
    {
      id: 'brand-films',
      title: 'Brand Films',
      shortDesc: 'Cinematic storytelling that communicates a brand’s identity and value.',
      fullDesc:
        'Narrative-driven films that forge deep emotional connections. We combine cinematic pacing, atmospheric lighting, and compelling scripts to express your brand ethos.',
      deliverables: ['Hero Brand Manifesto Film', 'Keynote & Investor Cut', 'Atmospheric Motion Posters'],
      idealFor: 'Rebrands, Corporate Identity, Funding Announcements, Flagship Campaigns',
      iconName: 'Film',
    },
    {
      id: 'ugc-production',
      title: 'UGC-Style Ad Production',
      shortDesc: 'Creator-style advertising concepts and natural-looking promotional videos.',
      fullDesc:
        'Authentic, organic creator-aesthetic videos powered by AI avatars and realistic conversational scenarios, achieving high trust without conventional production bloat.',
      deliverables: ['Native Smartphone Aesthetics', 'Organic UGC Hooks & Unboxings', 'Direct-to-Camera Testimonials'],
      idealFor: 'DTC Brands, Mobile Apps, SaaS Platforms, Conversion Funnels',
      iconName: 'UserCheck',
    },
    {
      id: 'creative-direction',
      title: 'Creative Direction & Ad Concepts',
      shortDesc: 'Campaign ideas, hooks, scripts, storyboards, and visual direction.',
      fullDesc:
        'Strategic creative consultation from initial brainstorm to final frame. We architect the narrative arc, visual language, mood boards, and conversion hooks for your campaigns.',
      deliverables: ['Detailed Storyboards & Moodboards', 'Scriptwriting & Hook Architecture', 'Creative Treatment Deck'],
      idealFor: 'In-House Marketing Teams, Creative Agencies, Enterprise Brands',
      iconName: 'Compass',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-[#FF202B]" />;
      case 'Package':
        return <Package className="w-6 h-6 text-[#FF202B]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#FF202B]" />;
      case 'Film':
        return <Film className="w-6 h-6 text-[#FF202B]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#FF202B]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#FF202B]" />;
      default:
        return <Clapperboard className="w-6 h-6 text-[#FF202B]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5">
      {/* Background Lighting Streak */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF202B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF202B] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B]" />
            <span>Capabilities & Solutions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5">
            PRODUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">REDEFINED.</span>
          </h2>

          <p className="text-base text-[#D9DDE2]/75 leading-relaxed font-normal">
            We merge cinematic vision with state-of-the-art AI video synthesis to produce high-end commercial content at international advertising standards.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-7 bg-[#121212] border border-white/10 hover:border-[#FF202B]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(255,32,43,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon and Editorial Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#FF202B]/10 group-hover:border-[#FF202B]/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#D9DDE2]/40">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Short & Full Description */}
                <p className="text-sm text-[#D9DDE2]/80 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D9DDE2]/50 block">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#D9DDE2]/90">
                      <Check className="w-3.5 h-3.5 text-[#FF202B] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-lg bg-white/[0.04] hover:bg-[#FF202B] border border-white/10 hover:border-[#FF202B] text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2 group-hover:shadow-[0_0_18px_rgba(255,32,43,0.4)]"
              >
                <span>Inquire Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Subtle top red border highlight on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-[#FF202B] transition-colors rounded-t-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
