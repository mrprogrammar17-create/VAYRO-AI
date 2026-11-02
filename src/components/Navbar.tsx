import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { VayroLogo } from './VayroLogo.tsx';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['hero', 'showreel', 'work', 'services', 'process', 'pricing', 'marketing', 'founder', 'why-vayro', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Marketing', href: '#marketing', id: 'marketing' },
    { name: 'About', href: '#founder', id: 'founder' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-gradient-to-b from-[#080808]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="VAYRO Homepage"
          >
            <VayroLogo size="sm" showSubtitle={false} />
          </a>

          {/* Zone 2: Navigation Links (Clean unboxed typography) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#D9DDE2]/75 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF202B] rounded-full shadow-[0_0_8px_#FF202B]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-[#FF202B] hover:bg-[#ff3b44] transition-all duration-200 shadow-[0_0_20px_rgba(255,32,43,0.35)] hover:shadow-[0_0_28px_rgba(255,32,43,0.6)] cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider uppercase text-white bg-[#FF202B] whitespace-nowrap"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D9DDE2] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF202B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF202B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6">
            <div className="pb-4 border-b border-white/10">
              <VayroLogo size="md" showSubtitle={true} showTagline={true} />
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-display text-[#D9DDE2] hover:text-white hover:translate-x-2 transition-all flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-[#FF202B] text-sm">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 px-4 rounded-lg bg-[#FF202B] text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,32,43,0.4)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#D9DDE2]/50 tracking-wider">
              International AI Commercial Production Studio
            </p>
          </div>
        </div>
      )}
    </>
  );
};
