import React, { useState } from 'react';
import { MapPin, Search, Phone, CheckCircle2 } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/hvacData';

export const ServiceAreasSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = SERVICE_AREAS.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="areas" className="bg-muted py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div>
          <p className="text-primary uppercase font-semibold text-xs tracking-[0.2em] mb-2 sm:mb-3">
            SERVICE AREAS
          </p>
          <h2 className="font-extrabold text-[clamp(1.7rem,2.8vw,2.5rem)] tracking-[-0.02em] leading-tight text-foreground">
            We cover DFW, Austin, and surrounding Texas communities.
          </h2>
          <p className="font-light text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            Proudly serving residential homeowners and commercial facilities across North and Central Texas. Don&apos;t see your area listed? Call us — our dispatch radius extends beyond this list.
          </p>

          {/* Search Input for Quick Verification */}
          <div className="mt-6 relative max-w-md">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your city (e.g. McKinney, Plano, Austin)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
            />
            {searchTerm && (
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-primary">
                {filteredAreas.length} found
              </span>
            )}
          </div>

          {/* Tag Cloud */}
          <div className="mt-6 flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredAreas.length > 0 ? (
              filteredAreas.map((city) => (
                <span
                  key={city}
                  className="bg-white border border-border rounded-full px-4 py-1.5 font-normal text-sm text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary-light/50 transition-colors cursor-default shadow-xs"
                >
                  {city}, TX
                </span>
              ))
            ) : (
              <p className="text-sm text-muted-foreground py-2">
                City not found in the quick list? We likely still service your neighborhood!
              </p>
            )}
          </div>

          {/* Quick Call Row */}
          <div className="mt-8 flex items-center gap-3 text-sm text-foreground font-medium">
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary">
              <Phone className="w-4 h-4" />
            </div>
            <span>
              Need service today? Call{' '}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-primary font-bold hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN — Aerial Map Visual with Floating Overlay */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-border relative bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80"
              alt="Aerial view of Texas suburban neighborhood serviced by Dun-Rite"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            {/* Inset Badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    Metro DFW &amp; Austin
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Over 45+ cities &amp; zip codes served daily
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-success bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>90-min dispatch</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
