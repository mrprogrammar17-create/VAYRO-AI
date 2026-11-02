/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ShowreelSection } from './components/ShowreelSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { FounderSection } from './components/FounderSection.tsx';
import { WhyVayroSection } from './components/WhyVayroSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { MarketingSection } from './components/MarketingSection.tsx';
import { InquirySection } from './components/InquirySection.tsx';
import { Footer } from './components/Footer.tsx';
import { ShowreelModal } from './components/ShowreelModal.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [showreelOpen, setShowreelOpen] = useState<boolean>(false);

  const scrollToInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForInquiry(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#080808] text-[#D9DDE2] overflow-x-hidden selection:bg-[#FF202B] selection:text-white">
        {/* Sticky Navigation */}
        <Navbar onOpenInquiry={() => scrollToInquiry()} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section with 3D Metallic Emblem */}
          <HeroSection
            onExploreWork={scrollToWork}
            onStartProject={() => scrollToInquiry()}
            onOpenShowreel={() => setShowreelOpen(true)}
          />

          {/* 2. Showreel Section */}
          <ShowreelSection />

          {/* 3. Selected Work / Portfolio Gallery (4 Video Samples with Google Drive links) */}
          <PortfolioSection />

          {/* 4. Services Section */}
          <ServicesSection onSelectService={() => scrollToInquiry()} />

          {/* 5. Creative Process Section */}
          <ProcessSection />

          {/* 6. Pricing Section (Featuring Four Packages: Basic, Medium, Premium, Exclusive) */}
          <PricingSection />

          {/* 7. Marketing & Promotion Section (TAKE YOUR BRAND FURTHER - Placed directly below Pricing) */}
          <MarketingSection />

          {/* 8. CEO / Founder Section (Featuring Image 2: Vayro_ Cinematic AI Studio Branding) */}
          <FounderSection />

          {/* 9. Why VAYRO Section */}
          <WhyVayroSection />

          {/* 10. Direct Contact Section (WhatsApp +1 (314) 575-7954 & vayroaistudio@gmail.com) */}
          <InquirySection />
        </main>

        {/* Global Showreel Modal triggered from Hero button */}
        <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
