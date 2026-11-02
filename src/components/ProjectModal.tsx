import React, { useEffect } from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2, Film, Layers } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808]/80">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#FF202B] font-semibold">{project.category}</span>
            <span className="text-[#D9DDE2]/40">·</span>
            <span className="text-[#D9DDE2]/70 font-mono">{project.aspectRatio}</span>
            <span className="text-[#D9DDE2]/40">·</span>
            <span className="text-[#D9DDE2]/50 font-mono">{project.duration}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#D9DDE2] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF202B]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Big Media Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF202B] font-semibold mb-1 block">
              {project.concept}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Creative Hook & Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-white/5">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#D9DDE2]/50 font-semibold font-mono">
                Campaign Overview
              </h4>
              <p className="text-sm sm:text-base text-[#D9DDE2]/90 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#FF202B] font-semibold block mb-1">
                  Creative Hook
                </span>
                <p className="text-xs text-[#D9DDE2] italic leading-relaxed">
                  "{project.creativeHook}"
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 text-[11px] text-[#D9DDE2]/60">
                <span className="font-medium text-[#D9DDE2]">Target Spec:</span> {project.clientType}
              </div>
            </div>
          </div>

          {/* AI Cinematography Highlights & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#D9DDE2]/60 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF202B]" />
                <span>AI Cinematography Techniques</span>
              </h4>
              <ul className="space-y-2">
                {project.techHighlights.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D9DDE2]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] mt-1.5 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#D9DDE2]/60 font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#FF202B]" />
                <span>Campaign Deliverables</span>
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#D9DDE2]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF202B] shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#D9DDE2]/50">
              Need a similar campaign for your product or brand?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-xs font-semibold uppercase tracking-wider text-[#D9DDE2] hover:text-white transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#FF202B] hover:bg-[#ff3b44] text-xs font-semibold uppercase tracking-wider text-white transition-all shadow-[0_0_20px_rgba(255,32,43,0.4)] flex items-center justify-center gap-2"
              >
                <span>Inquire This Format</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
