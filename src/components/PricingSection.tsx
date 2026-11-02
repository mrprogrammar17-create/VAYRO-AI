import React from 'react';
import { Check, MessageCircle, ArrowRight, Zap, Clock, Crown, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const getWhatsappUrl = (pkgName: string, price: string) => {
    return `https://wa.me/13145757954?text=${encodeURIComponent(
      `Hi VAYRO, I'm interested in the ${pkgName} (${price}).`
    )}`;
  };

  const packages = [
    {
      id: 'basic',
      name: 'BASIC PACKAGE',
      price: '$49.99',
      priceMain: '$49',
      priceCents: '.99',
      period: 'USD / Single Video',
      badge: null,
      description: 'Ideal for creators and emerging brands needing a single high-impact commercial video.',
      highlight: false,
      exclusive: false,
      deliverables: [
        '1 professionally edited video',
        'Video duration: up to 1 minute',
        '1 custom video thumbnail',
        'Clean, professional presentation',
      ],
      rushDelivery: '+$10 fee',
      ctaText: 'GET STARTED',
      ctaUrl: getWhatsappUrl('Basic Package', '$49.99'),
    },
    {
      id: 'medium',
      name: 'MEDIUM PACKAGE',
      price: '$99.99',
      priceMain: '$99',
      priceCents: '.99',
      period: 'USD / 2 Videos',
      badge: null,
      description: 'Expanded video coverage with dynamic camera angles for established product promotions.',
      highlight: false,
      exclusive: false,
      deliverables: [
        '2 professionally edited videos',
        '2 custom thumbnails',
        '1 cinematic drone-style shot',
        'Video duration: at least 1 minute 30 seconds',
      ],
      rushDelivery: '+$10 fee',
      ctaText: 'GET STARTED',
      ctaUrl: getWhatsappUrl('Medium Package', '$99.99'),
    },
    {
      id: 'premium',
      name: 'PREMIUM PACKAGE',
      price: '$149.99',
      priceMain: '$149',
      priceCents: '.99',
      period: 'USD / 3 Videos',
      badge: 'BEST VALUE',
      description: 'The most popular multi-video commercial suite for high-converting brand campaigns.',
      highlight: true,
      exclusive: false,
      deliverables: [
        '3 professionally edited videos',
        '3 custom thumbnails',
        '3 cinematic drone-style shots',
        'Video duration: up to 2 minutes 30 seconds',
      ],
      rushDelivery: '+$10 fee',
      ctaText: 'CHOOSE PREMIUM',
      ctaUrl: getWhatsappUrl('Premium Package', '$149.99'),
    },
    {
      id: 'exclusive',
      name: 'EXCLUSIVE PACKAGE',
      price: '$249.99',
      priceMain: '$249',
      priceCents: '.99',
      period: 'USD / 4 Videos + Poster',
      badge: 'EXCLUSIVE EXPERIENCE',
      description: 'Our flagship commercial production tier with maximum creative scope and promotional assets.',
      highlight: false,
      exclusive: true,
      deliverables: [
        '4 professionally edited videos',
        '4 custom thumbnails',
        '4 cinematic drone-style shots',
        '1 high-quality promotional service poster',
      ],
      rushDelivery: '+$20 fee',
      ctaText: 'GET THE EXCLUSIVE PACKAGE',
      ctaUrl: getWhatsappUrl('Exclusive Package', '$249.99'),
    },
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Lighting Streak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#FF202B]/6 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] shadow-[0_0_8px_#FF202B]" />
            <span>PRODUCTION PACKAGES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 text-balance">
            CHOOSE YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
              PERFECT VIDEO PACKAGE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D9DDE2]/75 leading-relaxed font-normal max-w-2xl">
            From powerful single-video content to complete cinematic brand productions, we have the right package to bring your vision to life.
          </p>
        </div>

        {/* 4 Responsive Pricing Cards Grid */}
        {/* On tablet/small-desktop (sm to lg), 2x2 grid prevents cramped horizontal squishing. On xl (1280px+), 4 columns align evenly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-14">
          {packages.map((pkg, idx) => {
            const isPremium = pkg.highlight;
            const isExclusive = pkg.exclusive;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group overflow-hidden ${
                  isPremium
                    ? 'bg-[#151213] border-2 border-[#FF202B] shadow-[0_20px_50px_rgba(255,32,43,0.3)] xl:-translate-y-2'
                    : isExclusive
                    ? 'bg-gradient-to-b from-[#181414] via-[#121212] to-[#141212] border-2 border-white/20 hover:border-[#FF202B]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
                    : 'bg-[#121212] border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Subtle Top Red Accent Line for Premium */}
                {isPremium && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF202B] shadow-[0_0_14px_#FF202B]" />
                )}

                {/* Card Top Section: Badge + Header */}
                <div className="flex flex-col">
                  {/* Badge Row (Fixed height ensures all package titles align horizontally) */}
                  <div className="h-7 mb-3 flex items-center justify-between">
                    {pkg.badge ? (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border whitespace-nowrap ${
                          isPremium
                            ? 'bg-[#FF202B] text-white border-[#FF202B] shadow-[0_0_12px_rgba(255,32,43,0.6)]'
                            : 'bg-white/10 text-white border-white/20 shadow-sm'
                        }`}
                      >
                        {isPremium && <Star className="w-3 h-3 fill-current text-white" />}
                        {isExclusive && <Crown className="w-3 h-3 text-amber-400" />}
                        <span>{pkg.badge}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#D9DDE2]/40">
                        Tier 0{idx + 1}
                      </span>
                    )}

                    {isExclusive && !pkg.badge && (
                      <Crown className="w-4 h-4 text-amber-400/80" />
                    )}
                  </div>

                  {/* Package Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-tight mb-2">
                    {pkg.name}
                  </h3>

                  {/* Description with fixed minimum height for consistent vertical rhythm */}
                  <p className="text-xs text-[#D9DDE2]/65 leading-relaxed min-h-[42px] mb-5">
                    {pkg.description}
                  </p>

                  {/* Price Box with no-overflow typography */}
                  <div className="pb-5 mb-5 border-b border-white/10">
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                        {pkg.priceMain}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-white/90 leading-none">
                        {pkg.priceCents}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#D9DDE2]/50 font-mono uppercase tracking-wider block mt-1.5 truncate">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Deliverables List (Flex Grow pushes footer to consistent bottom) */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9DDE2]/40 block mb-1">
                      Included Deliverables:
                    </span>

                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#D9DDE2]/90">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isPremium ? 'text-[#FF202B]' : isExclusive ? 'text-white' : 'text-[#FF202B]'
                          }`}
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: CTA Button & Rush Delivery */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-auto">
                  <a
                    href={pkg.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98] text-center whitespace-nowrap ${
                      isPremium
                        ? 'bg-[#FF202B] hover:bg-[#ff3b44] text-white shadow-[0_0_20px_rgba(255,32,43,0.45)] hover:shadow-[0_0_32px_rgba(255,32,43,0.7)]'
                        : isExclusive
                        ? 'bg-white text-black hover:bg-[#D9DDE2] shadow-[0_0_18px_rgba(255,255,255,0.2)] font-bold'
                        : 'bg-white/10 hover:bg-[#FF202B] text-white hover:shadow-[0_0_18px_rgba(255,32,43,0.35)]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                    <span className="truncate">{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  {/* Rush delivery badge box */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D9DDE2]/60 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                    <span className="flex items-center gap-1.5 text-[#D9DDE2]/50">
                      <Clock className="w-3 h-3 text-[#FF202B] shrink-0" />
                      <span>Rush Delivery</span>
                    </span>
                    <span className="text-white font-medium">{pkg.rushDelivery}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rush Delivery Additional Charges Box */}
        <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#121212] via-[#161213] to-[#121212] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF202B]/10 border border-[#FF202B]/30 flex items-center justify-center text-[#FF202B] shrink-0 shadow-[0_0_20px_rgba(255,32,43,0.25)]">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#FF202B] font-mono font-semibold mb-0.5">
                <span>RUSH DELIVERY — ADDITIONAL CHARGES</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                Need your videos faster? We offer priority delivery for an additional fee.
              </h3>
              <p className="text-xs text-[#D9DDE2]/75 leading-relaxed">
                Rush delivery fees are additional and are not included in the package prices.
              </p>
            </div>
          </div>

          {/* Rush Pricing Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex flex-col justify-between">
              <span className="text-xs font-semibold text-white">Basic Package</span>
              <div className="mt-2 text-[11px] leading-tight">
                <span className="text-[#D9DDE2]/50 block">Standard delivery</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">Rush: +$10 fee</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex flex-col justify-between">
              <span className="text-xs font-semibold text-white">Medium Package</span>
              <div className="mt-2 text-[11px] leading-tight">
                <span className="text-[#D9DDE2]/50 block">Standard delivery</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">Rush: +$10 fee</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex flex-col justify-between">
              <span className="text-xs font-semibold text-white">Premium Package</span>
              <div className="mt-2 text-[11px] leading-tight">
                <span className="text-[#D9DDE2]/50 block">Standard delivery</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block">Rush: +$10 fee</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-[#FF202B]/20 flex flex-col justify-between">
              <span className="text-xs font-semibold text-white">Exclusive Package</span>
              <div className="mt-2 text-[11px] leading-tight">
                <span className="text-[#D9DDE2]/50 block">Standard delivery</span>
                <span className="text-xs font-bold text-[#FF202B] font-mono mt-0.5 block">Rush: +$20 fee</span>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-[11px] text-[#D9DDE2]/45 font-mono text-center mt-5">
            All rush delivery requests can be specified directly when messaging us on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
