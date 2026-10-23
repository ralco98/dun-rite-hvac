import React from 'react';
import { Phone, ArrowRight, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface FinalCtaSectionProps {
  onOpenEstimateModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="bg-primary py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px] text-white text-center relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

      {/* Global Rule: Narrower content uses max-w-3xl mx-auto */}
      <div className="relative z-10 max-w-3xl mx-auto">
        
        <span className="inline-block bg-white/15 text-white text-[0.65rem] sm:text-xs font-semibold tracking-[0.2em] uppercase px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 backdrop-blur-sm">
          DON&apos;T WAIT FOR THE HEATWAVE OR FREEZE
        </span>

        <h2 className="font-extrabold text-[clamp(1.9rem,4vw,3.8rem)] tracking-[-0.03em] text-white leading-tight">
          Get your home<br />
          comfortable again.
        </h2>

        <p className="font-light text-base sm:text-lg text-white/80 mt-5 max-w-lg mx-auto leading-relaxed">
          Request a free quote in under 2 minutes. Same-day appointments available throughout DFW &amp; Austin. No commitment required.
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 sm:mt-12">
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white hover:bg-slate-50 text-primary font-bold text-sm h-12 px-10 transition-all duration-200 shadow-xl hover:scale-[1.02]"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-transparent hover:bg-white/10 border border-white/40 text-white font-semibold text-sm h-12 px-9 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Trust Guarantee Line */}
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap mt-10 pt-8 border-t border-white/15 text-sm font-light text-white/75">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-300" />
            <span>Flat-rate upfront pricing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-300" />
            <span>Same-day availability</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-300" />
            <span>10-year warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
};
