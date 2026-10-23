import React from 'react';
import { CheckCircle, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenEstimateModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimateModal }) => {
  const highlights = [
    {
      title: "Flat-Rate Pricing",
      desc: "You see the price before we start. It never changes, no matter how long the job takes."
    },
    {
      title: "NATE-Certified Technicians",
      desc: "Our 14-person expert team holds the highest credential in heating & air conditioning."
    },
    {
      title: "All Major Brands",
      desc: "Carrier, Trane, Lennox, Goodman, Rheem, York, Mitsubishi, and Ruud."
    },
    {
      title: "10-Year Workmanship Warranty",
      desc: "Complete peace of mind on parts and labor for every single new installation."
    },
    {
      title: "0% Interest Financing Available",
      desc: "Flexible, budget-friendly options on qualifying energy-saving systems."
    }
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
        
        {/* LEFT COLUMN — Prominent, Clean, Unobstructed Team Photo */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[460px] lg:min-h-[580px] xl:min-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/70 group">
            <img
              src="/images/team_about.jpg"
              alt="Dun-Rite Heat and AC Services technicians with service van in Texas"
              className="w-full h-full object-cover object-[48%_center] group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT COLUMN — Story & Features */}
        <div className="lg:col-span-6 flex flex-col justify-center py-1 sm:py-2">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3 sm:mb-4">
            ABOUT DUN-RITE
          </p>
          
          <h2 className="font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] tracking-[-0.025em] leading-[1.15] text-foreground">
            A family business.<br />
            Not a call center.
          </h2>

          <p className="font-light text-sm sm:text-base text-muted-foreground mt-4 sm:mt-5 leading-[1.8]">
            Dun-Rite Heat &amp; AC Services has been serving Dallas-Fort Worth, McKinney, and Austin communities since 2001. We started with a firm commitment to integrity and have grown to a dedicated team with a fleet of seven fully-stocked repair trucks ready for any job. Every technician is in-house, background-checked, and trained by us. We don&apos;t outsource, we don&apos;t cut corners, and we stand behind every job with our iron-clad 100% satisfaction guarantee.
          </p>

          {/* Feature List */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">{item.title}</span>{' '}
                  <span className="text-muted-foreground font-light">— {item.desc}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-11 px-7 transition-all duration-200 shadow-sm"
            >
              <span>Schedule Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap rounded-full bg-white hover:bg-muted border border-border text-foreground font-semibold text-sm h-11 px-6 transition-all duration-200 text-center"
            >
              Explore Service Areas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
