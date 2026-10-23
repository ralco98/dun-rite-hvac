import React from 'react';
import { COMPANY_INFO } from '../data/hvacData';

export const EmergencyStrip: React.FC = () => {
  return (
    <div className="bg-[#FFF7ED] border-b border-[#FED7AA] py-2 sm:py-2.5 px-3 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center gap-1.5 sm:gap-2 text-center flex-wrap">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <p className="font-medium text-[0.7rem] sm:text-xs text-[#C2410C] tracking-wide leading-tight">
          <span className="font-bold">⚡ 24/7 Emergency HVAC</span>
          <span className="hidden sm:inline"> — No extra charge for nights or weekends · </span>
          <span className="sm:hidden"> · </span>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="font-extrabold underline hover:text-[#9A3412] transition-colors whitespace-nowrap ml-1"
          >
            {COMPANY_INFO.phone}
          </a>
        </p>
      </div>
    </div>
  );
};
