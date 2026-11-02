import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { VayroLogo } from './VayroLogo.tsx';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Our Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing Packages', href: '#pricing' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'Creative Process', href: '#process' },
    { name: 'About & Vision', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Vimeo Pro', href: 'https://vimeo.com' },
    { name: 'YouTube', href: 'https://youtube.com' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top crimson gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF202B]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <VayroLogo size="md" showSubtitle={true} showTagline={true} />
            
            <p className="text-xs sm:text-sm text-[#D9DDE2]/60 max-w-sm leading-relaxed pt-2">
              International AI Commercial Production Studio crafting cinematic brand films, luxury product advertisements, and scroll-stopping visual campaigns for global markets.
            </p>

            <div className="text-xs text-[#D9DDE2]/40 pt-2 font-mono">
              <span>Operating in USA · UK · UAE · Worldwide</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF202B] font-semibold block mb-2">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#D9DDE2]/70 hover:text-white transition-colors py-1 flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#FF202B] transition-colors" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF202B] font-semibold block mb-2">
              Studio Direct
            </span>

            <div className="space-y-3 text-xs text-[#D9DDE2]/70">
              <div>
                <span className="block text-[11px] text-[#D9DDE2]/40 font-mono">Official Email</span>
                <a
                  href="mailto:vayroaistudio@gmail.com"
                  className="text-white hover:text-[#FF202B] transition-colors font-medium break-all"
                >
                  vayroaistudio@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-[#D9DDE2]/40 font-mono">WhatsApp Support</span>
                <a
                  href="https://wa.me/13145757954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-mono font-medium"
                >
                  +1 (314) 575-7954
                </a>
              </div>

              <div className="pt-1">
                <span className="block text-[11px] text-[#D9DDE2]/40 font-mono mb-2">Social Profiles</span>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-[#FF202B] text-white transition-colors text-[11px] font-medium flex items-center gap-1"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9DDE2]/40">
          <div className="flex items-center gap-3">
            <span>© {currentYear} VAYRO Studio. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#D9DDE2]/60">Built to Make an Impact.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#D9DDE2]/70 hover:text-white transition-colors cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF202B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
