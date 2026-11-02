import React from 'react';

interface VayroLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  showTagline?: boolean;
  emblemOnly?: boolean;
}

export const VayroLogo: React.FC<VayroLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  showTagline = false,
  emblemOnly = false,
}) => {
  // Dimensions based on size prop
  const sizeMap = {
    sm: { emblem: 28, text: 'text-base', subText: 'text-[9px]' },
    md: { emblem: 36, text: 'text-xl', subText: 'text-[10px]' },
    lg: { emblem: 52, text: 'text-3xl', subText: 'text-xs' },
    hero: { emblem: 84, text: 'text-5xl', subText: 'text-sm' },
  };

  const { emblem, text, subText } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3D-inspired Vector Emblem matching official VAYRO branding */}
      <div 
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: emblem, height: emblem }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(255,32,43,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Silver Left Wing */}
            <linearGradient id="silverWingGrad" x1="20" y1="20" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#D9DDE2" />
              <stop offset="70%" stopColor="#8A929B" />
              <stop offset="100%" stopColor="#4A525B" />
            </linearGradient>

            <linearGradient id="silverBevel" x1="25" y1="20" x2="35" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#CBD0D6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#30353B" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing Crimson Ribbon Right Wing */}
            <linearGradient id="crimsonWingGrad" x1="75" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4A54" />
              <stop offset="25%" stopColor="#FF202B" />
              <stop offset="70%" stopColor="#C40812" />
              <stop offset="100%" stopColor="#5E0006" />
            </linearGradient>

            <linearGradient id="crimsonFoldHighlight" x1="55" y1="35" x2="80" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFAAB0" />
              <stop offset="60%" stopColor="#FF202B" />
              <stop offset="100%" stopColor="#9E0A12" />
            </linearGradient>

            {/* Ambient Shadow & Glow */}
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FF202B" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Left Wing - Angular Beveled Metallic Silver */}
          <path
            d="M 24 24 L 40 24 L 50 82 L 42 82 Z"
            fill="url(#silverWingGrad)"
          />
          <path
            d="M 24 24 L 34 24 L 50 82 L 46 82 Z"
            fill="url(#silverBevel)"
          />
          {/* Inner metallic reflection edge */}
          <path
            d="M 40 24 L 50 82 L 48 82 L 38 24 Z"
            fill="#FFFFFF"
            fillOpacity="0.3"
          />

          {/* Right Wing - Flowing Folded Ribbon Wing (Crimson) */}
          <path
            d="M 50 82 L 78 24 C 74 24 64 26 58 35 C 52 44 54 58 50 82 Z"
            fill="url(#crimsonWingGrad)"
            filter="url(#logoGlow)"
          />
          {/* Ribbon Fold Highlight Accent */}
          <path
            d="M 78 24 L 62 25 C 56 31 54 42 52 58 C 55 45 61 32 78 24 Z"
            fill="url(#crimsonFoldHighlight)"
          />
          {/* Apex join specular spark */}
          <circle cx="50" cy="81" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="78" cy="24" r="1.5" fill="#FFAAB0" />
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      {!emblemOnly && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-[0.22em] font-extrabold leading-none">
            <span className={`font-display text-white ${text}`}>VAY</span>
            {/* Custom stylized R with crimson diagonal slash accent */}
            <span className={`font-display text-white relative ${text}`}>
              R
              <span className="absolute bottom-[2px] right-0 w-[45%] h-[2.5px] bg-[#FF202B] rounded-sm transform translate-y-[-1px] shadow-[0_0_8px_#FF202B]" />
            </span>
            <span className={`font-display text-white ${text}`}>O</span>
          </div>

          {showSubtitle && (
            <span className={`tracking-[0.28em] uppercase text-[#D9DDE2]/70 font-medium mt-1 font-sans ${subText}`}>
              AI Commercial Production Studio
            </span>
          )}

          {showTagline && (
            <div className="flex items-center gap-2 mt-2">
              <span className="h-[1px] w-6 bg-[#FF202B]/60" />
              <span className="text-[10px] tracking-[0.25em] text-[#FF202B] uppercase font-semibold">
                Built to Make an Impact.
              </span>
              <span className="h-[1px] w-6 bg-[#FF202B]/60" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
