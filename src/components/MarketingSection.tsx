import React from 'react';
import { ArrowRight, MessageCircle, Mail, TrendingUp, Target, Megaphone, Share2, ShieldAlert } from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const whatsappMarketingUrl =
    'https://wa.me/13145757954?text=Hi%20VAYRO%2C%20I%27m%20interested%20in%20discussing%20marketing%20and%20promotional%20services%20for%20my%20brand.';

  const marketingPillars = [
    {
      title: 'Targeted Paid Social Advertising',
      description:
        'Strategic campaign setup, testing, and scaling across Meta (Instagram Reels), TikTok, and YouTube Shorts to place your commercial directly before ideal buyers.',
      icon: Target,
    },
    {
      title: 'Audience & Demographic Segmentation',
      description:
        'Data-backed audience modeling tailored for USA, UK, UAE, and international customer segments, ensuring maximum relevance and minimum ad waste.',
      icon: Megaphone,
    },
    {
      title: 'Conversion Funnel & Hook Optimization',
      description:
        'Pairing high-retention video hooks with dedicated landing experiences and call-to-action paths designed to turn passive video viewers into qualified leads.',
      icon: TrendingUp,
    },
    {
      title: 'Omnichannel Promotional Strategy',
      description:
        'Holistic content distribution planning, retargeting sequences, and promotional calendar alignment crafted specifically around your commercial launch.',
      icon: Share2,
    },
  ];

  return (
    <section id="marketing" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#FF202B]/8 via-[#FF202B]/4 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-[#FF202B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          
          {/* Heading */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] shadow-[0_0_8px_#FF202B]" />
            <span>TAKE YOUR BRAND FURTHER</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] text-balance">
            “A great video captures attention.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
              The right marketing turns that attention into opportunity.”
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#D9DDE2]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Want to reach more people and grow your brand? We can help you take your content beyond creation with marketing and promotional services tailored to your business goals.
          </p>
        </div>

        {/* Marketing Services Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF202B]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(255,32,43,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-[#FF202B]/10 group-hover:border-[#FF202B]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#FF202B]" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D9DDE2]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D9DDE2]/40">
                  <span>CAPABILITY // 0{idx + 1}</span>
                  <span className="text-[#FF202B] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency Notice Callout */}
        <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#121212] via-[#161213] to-[#121212] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#FF202B]/10 border border-[#FF202B]/30 flex items-center justify-center text-[#FF202B] shrink-0 shadow-[0_0_20px_rgba(255,32,43,0.2)]">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <div className="space-y-1.5 flex-1">
              <h4 className="font-display text-base sm:text-lg font-bold text-white">
                Marketing & Promotion Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#D9DDE2]/85 leading-relaxed">
                Marketing and promotional services are available at additional charges and are not included in our video production packages. Contact us for a separate quotation based on your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Section Climax & Closing Line */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Closing Line */}
          <div className="relative mb-8 px-4">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#FF202B]/60 inline-block align-middle mr-3" />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white inline align-middle leading-snug">
              “Let’s create content that makes an impact and marketing that takes your brand further.”
            </p>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#FF202B]/60 inline-block align-middle ml-3" />
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappMarketingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#FF202B] hover:bg-[#ff3b44] transition-all duration-200 shadow-[0_0_28px_rgba(255,32,43,0.45)] hover:shadow-[0_0_40px_rgba(255,32,43,0.7)] flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss Marketing on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:vayroaistudio@gmail.com?subject=Marketing%20and%20Promotion%20Inquiry"
              className="px-7 py-4 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D9DDE2] hover:text-white bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#FF202B]/40 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FF202B]" />
              <span>Email About Marketing</span>
            </a>
          </div>

          <p className="text-[11px] text-[#D9DDE2]/50 font-mono mt-4 uppercase tracking-wider">
            Tailored Quotation · Custom Scope & Strategy
          </p>
        </div>

      </div>
    </section>
  );
};
