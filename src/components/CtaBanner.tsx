import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface CtaBannerProps {
  onOpenEstimateModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative min-h-[340px] md:h-[340px] overflow-hidden flex items-center py-12 md:py-0">
      {/* Background Fleet Photo */}
      <div className="absolute inset-0">
        <img
          src="/images/fleet_crew.jpg"
          alt="Dun-Rite HVAC service truck fleet in Texas"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Deep Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.68) 55%, rgba(13,17,23,0.35) 100%)'
        }}
      />

      {/* Content Container (Global centered layout rule) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[72px] w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
        
        {/* Left Copy */}
        <div className="max-w-xl">
          <span className="inline-block bg-primary text-white text-[0.68rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3">
            TEXAS GO-TO HOME SERVICES
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] tracking-[-0.025em] text-white leading-tight">
            Ready to get it fixed?
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg text-white/85 mt-2">
            Same-day service. Flat-rate pricing. 100% satisfaction guaranteed.
          </p>
        </div>

        {/* Right CTA Pills */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white hover:bg-slate-100 text-primary font-bold text-sm h-12 px-9 transition-all duration-200 shadow-xl hover:scale-[1.02]"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white/10 hover:bg-white/20 border border-white/50 text-white font-semibold text-sm h-12 px-8 backdrop-blur-sm transition-all duration-200 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
