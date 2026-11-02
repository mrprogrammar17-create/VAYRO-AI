import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, ArrowUpRight, Copy, Check, Sparkles, Globe, MapPin } from 'lucide-react';

export const InquirySection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneNumber = '+1 (314) 575-7954';
  const emailAddress = 'vayroaistudio@gmail.com';
  const whatsappUrl = 'https://wa.me/13145757954';
  const emailUrl = 'mailto:vayroaistudio@gmail.com';

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF202B]/6 rounded-full blur-[190px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FF202B] font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] shadow-[0_0_8px_#FF202B]" />
            <span>CONNECT WITH VAYRO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 text-balance">
            LET’S START YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9DDE2] to-[#FF202B]">
              NEXT PROJECT.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D9DDE2]/75 leading-relaxed font-normal max-w-2xl">
            Reach out directly to discuss your commercial video ideas, schedule production, or explore tailored brand campaigns.
          </p>
        </div>

        {/* Premium Direct Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: WhatsApp Direct Channel */}
          <div className="group rounded-2xl p-8 sm:p-10 bg-[#121212] border-2 border-white/10 hover:border-[#25D366]/60 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_70px_rgba(37,211,102,0.18)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.25)]">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20 font-semibold">
                  Fastest Response
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                WhatsApp Direct
              </h3>

              <p className="text-xs sm:text-sm text-[#D9DDE2]/70 leading-relaxed mb-6">
                Message our creative leadership directly for instant quotes, project discussions, and expedited production kickoff.
              </p>

              {/* Explicit Visible Phone Number */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9DDE2]/40 block mb-0.5">
                    WhatsApp Number
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white font-mono tracking-tight select-all">
                    {phoneNumber}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard('+13145757954', 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#D9DDE2] hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Action Button: CHAT ON WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-200 shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:shadow-[0_0_36px_rgba(37,211,102,0.65)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Official Email Channel */}
          <div className="group rounded-2xl p-8 sm:p-10 bg-[#121212] border-2 border-white/10 hover:border-[#FF202B]/60 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_70px_rgba(255,32,43,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF202B]/10 border border-[#FF202B]/30 flex items-center justify-center text-[#FF202B] shadow-[0_0_24px_rgba(255,32,43,0.25)]">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF202B] bg-[#FF202B]/10 px-3 py-1 rounded-full border border-[#FF202B]/20 font-semibold">
                  Official Inquiries
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Email Studio
              </h3>

              <p className="text-xs sm:text-sm text-[#D9DDE2]/70 leading-relaxed mb-6">
                Send briefs, campaign decks, brand guidelines, or partnership inquiries directly to our production inbox.
              </p>

              {/* Explicit Visible Email Address */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-8 flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9DDE2]/40 block mb-0.5">
                    Studio Email Address
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight select-all truncate block">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard('vayroaistudio@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#D9DDE2] hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#FF202B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Action Button: EMAIL US */}
            <a
              href={emailUrl}
              className="w-full py-4 px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#FF202B] hover:bg-[#ff3b44] transition-all duration-200 shadow-[0_0_24px_rgba(255,32,43,0.4)] hover:shadow-[0_0_36px_rgba(255,32,43,0.65)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL US</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Global Production Presence Bar */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9DDE2]/60">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#FF202B]" />
            <span>Serving Brands in USA · UK · UAE · International Markets</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[#D9DDE2]/40">
            <span>24/7 International Turnaround</span>
          </div>
        </div>

      </div>
    </section>
  );
};
