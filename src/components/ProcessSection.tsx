import React from 'react';
import { PROCESS_STEPS } from '../data/hvacData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="bg-muted py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-primary uppercase text-[0.68rem] tracking-[0.2em] font-semibold mb-2 sm:mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] tracking-[-0.025em] text-foreground">
            From first call to finished job.
          </h2>
          <p className="font-light text-sm sm:text-base text-muted-foreground mt-2 sm:mt-3 max-w-lg mx-auto">
            A straightforward, hassle-free process designed around your schedule and budget.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-40 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-sm text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-light text-sm text-muted-foreground mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
