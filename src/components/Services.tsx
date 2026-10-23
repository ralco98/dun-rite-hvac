import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/hvacData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenEstimateModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenEstimateModal }) => {
  return (
    <section id="services" className="bg-muted py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 lg:mb-14 gap-5">
          <div>
            <p className="text-primary uppercase text-[0.68rem] tracking-[0.2em] font-semibold mb-2 sm:mb-3">
              OUR SERVICES
            </p>
            <h2 className="font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] tracking-[-0.025em] leading-[1.15] text-foreground">
              Heating, cooling, and<br />
              everything in between.
            </h2>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white hover:bg-slate-50 border border-border text-foreground font-semibold text-sm h-11 px-6 transition-all duration-200 shadow-sm"
          >
            <span>All services →</span>
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="service-card-hover group bg-white rounded-2xl overflow-hidden border border-border cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Area with soft gradient */}
                <div className={`h-[160px] relative overflow-hidden bg-gradient-to-br ${service.gradientBg}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  
                  {service.popular && (
                    <span className="absolute top-3 right-3 bg-primary text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Price Chip */}
                  <div className="inline-flex items-center gap-1.5 bg-primary-light text-primary text-[0.68rem] font-semibold tracking-[0.08em] px-3 py-1 rounded-full mb-3">
                    <span>{service.chip}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-light text-sm text-muted-foreground leading-[1.65]">
                    {service.shortDesc}
                  </p>

                  {/* Quick Feature Pills */}
                  <div className="mt-4 pt-4 border-t border-border/60 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-success shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0">
                <span className="font-semibold text-sm text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
