import React from 'react';
import { X, CheckCircle, ArrowRight, Shield, Clock } from 'lucide-react';
import { ServiceItem } from '../data/hvacData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden z-10 my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Hero Image in Dialog */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-100 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
            <span className="inline-block bg-primary text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-1.5 sm:mb-2">
              {service.chip}
            </span>
            <h3 className="font-extrabold text-xl sm:text-3xl text-white tracking-tight leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="font-light text-base text-muted-foreground leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-3">
              What&apos;s Included in Every Service:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-muted/60 p-3 rounded-xl border border-border/60">
                  <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dun-Rite Standards */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-primary shrink-0" />
              <span>10-Year Workmanship Warranty on installs</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Average 90-minute rapid response</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-12 shadow-sm transition-all"
            >
              <span>Book This Service &amp; Get Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-white hover:bg-muted border border-border text-foreground font-semibold text-sm h-12 px-6 transition-all"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
