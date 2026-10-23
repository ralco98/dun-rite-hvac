import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/hvacData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-primary uppercase text-[0.68rem] tracking-[0.2em] font-semibold mb-2 sm:mb-3">
            CUSTOMER REVIEWS
          </p>
          <h2 className="font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] tracking-[-0.025em] text-foreground">
            Don&apos;t take our word for it.
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 bg-primary-light px-3.5 sm:px-4 py-1.5 rounded-full flex-wrap justify-center">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-xs sm:text-sm text-primary">
              4.9 from 1,800+ verified reviews
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-muted rounded-2xl p-5 sm:p-8 border border-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[0.7rem] text-success font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{item.source}</span>
                  </div>
                </div>

                <p className="font-normal text-base text-foreground leading-[1.7] italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-border/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    {item.name}
                  </h4>
                  <p className="font-light text-xs text-muted-foreground mt-0.5">
                    {item.role} · {item.location}
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
