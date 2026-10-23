import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-border py-5 sm:py-7 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8">
        
        {/* Left Label */}
        <div className="shrink-0">
          <p className="font-semibold text-xs tracking-[0.2em] uppercase text-muted-foreground">
            RATED &amp; REVIEWED ON
          </p>
        </div>

        {/* Badges: 2x2 grid on mobile/tablet, single divide-x row on desktop */}
        <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center gap-3 sm:gap-4 lg:gap-0 lg:divide-x divide-border">
          
          {/* Google Reviews */}
          <div className="bg-muted/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none lg:px-7 first:pl-0 flex items-center gap-2 sm:gap-2.5">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-foreground">Google</span>
                <span className="text-[#F59E0B] text-[0.65rem] sm:text-xs">★★★★★</span>
              </div>
              <span className="font-bold text-[0.7rem] sm:text-xs text-foreground">4.9 / 5 <span className="hidden sm:inline font-normal text-muted-foreground text-[0.65rem]">(1,800+)</span></span>
            </div>
          </div>

          {/* Yelp */}
          <div className="bg-muted/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none lg:px-7 flex items-center gap-2 sm:gap-2.5">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[#D32323] flex items-center justify-center text-white font-black text-[0.65rem]">
              Y
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-foreground">Yelp</span>
                <span className="text-[#F59E0B] text-[0.65rem] sm:text-xs">★★★★★</span>
              </div>
              <span className="font-bold text-[0.7rem] sm:text-xs text-foreground">4.8 / 5 <span className="hidden sm:inline font-normal text-muted-foreground text-[0.65rem]">(DFW)</span></span>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="bg-muted/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none lg:px-7 flex items-center gap-2 sm:gap-2.5">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[#00B67A] flex items-center justify-center text-white font-bold text-[0.65rem]">
              ★
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-foreground">Trustpilot</span>
                <span className="text-[#00B67A] text-[0.65rem] sm:text-xs">★★★★★</span>
              </div>
              <span className="font-bold text-[0.7rem] sm:text-xs text-foreground">4.9 / 5 <span className="hidden sm:inline font-normal text-muted-foreground text-[0.65rem]">(Verified)</span></span>
            </div>
          </div>

          {/* BBB */}
          <div className="bg-muted/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none lg:px-7 last:pr-0 flex items-center gap-2 sm:gap-2.5">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#005A70] flex items-center justify-center text-white font-bold text-[0.55rem] sm:text-[0.65rem] tracking-tighter">
              BBB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs text-foreground">A+ Accredited</span>
              <span className="font-normal text-[0.65rem] sm:text-[0.7rem] text-muted-foreground">Dun-Rite</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
