import React from 'react';
import { CheckCircle, ArrowRight, ShieldAlert, Star } from 'lucide-react';
import { COMPANY_INFO, TRUST_CHIPS, AVATAR_STACK } from '../data/hvacData';

interface HeroProps {
  onOpenEstimateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* 1. Full Image Behind Complete Hero Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero_tech.jpg"
          alt="Dun-Rite certified HVAC technician servicing residential AC system"
          className="w-full h-full object-cover object-[78%_center] sm:object-[74%_center] lg:object-[82%_center]"
          loading="eager"
        />

        {/* Desktop Gradient: Pure-white backdrop for left text, crystal clear technician on right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 34%, rgba(255,255,255,0.92) 46%, rgba(255,255,255,0.3) 64%, transparent 82%)',
          }}
        />

        {/* Mobile / Tablet Gradient: Ensures text readability without washing out */}
        <div
          className="absolute inset-0 block lg:hidden"
          style={{
            background:
              'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.96) 58%, rgba(255,255,255,0.65) 85%, #FFFFFF 100%)',
          }}
        />

        {/* Soft bottom blend into the Trust Bar below */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* 2. Centered Main Content Container in Front of Banner Image */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          
          {/* Social Proof Row */}
          <div className="flex items-center flex-wrap gap-2 mb-5 sm:mb-7">
            <div className="flex items-center">
              {AVATAR_STACK.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt={`Dun-Rite Client ${idx + 1}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover -ml-2 first:ml-0 shadow-sm"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </span>
              <span className="font-semibold text-xs sm:text-sm text-foreground">4.9</span>
            </div>
            <span className="font-light text-xs sm:text-sm text-muted-foreground">
              from 1,800+ Google reviews
            </span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="font-extrabold text-[clamp(2.4rem,6.2vw,5.2rem)] tracking-[-0.04em] leading-[0.98] text-foreground">
            Heating &amp;<br />
            Cooling<br />
            <span className="text-primary">Done Right.</span>
          </h1>

          {/* Subline */}
          <p className="font-light text-sm sm:text-base text-muted-foreground leading-[1.75] mt-5 sm:mt-6 max-w-[440px]">
            {COMPANY_INFO.subline}
          </p>

          {/* Trust Chips Row */}
          <div className="flex flex-wrap gap-2 mt-6 sm:mt-7">
            {TRUST_CHIPS.slice(0, 3).map((chip) => (
              <div
                key={chip}
                className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-success shrink-0" />
                <span className="font-medium text-[0.7rem] sm:text-[0.72rem] text-foreground tracking-tight">
                  {chip}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-7 sm:mt-9">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-12 px-9 transition-all duration-200 shadow-md shadow-blue-600/20 hover:scale-[1.02]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white hover:bg-slate-50 border border-border text-foreground font-semibold text-sm h-12 px-8 transition-all duration-200 text-center shadow-xs"
            >
              View Services
            </a>
          </div>

          {/* Slogan pill */}
          <div className="mt-6 sm:mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
            <span>&ldquo;Don&apos;t just get it done, get it Dun-Rite!&rdquo; · DFW &amp; ATX, TX</span>
          </div>
        </div>

        {/* RIGHT COLUMN (Clean, unobstructed view of the technician & background) */}
        <div className="hidden lg:block min-h-[440px] xl:min-h-[520px] pointer-events-none order-1 lg:order-2" aria-hidden="true" />

      </div>
    </section>
  );
};
