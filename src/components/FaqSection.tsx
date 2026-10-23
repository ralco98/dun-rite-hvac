import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/hvacData';

export const FaqSection: React.FC = () => {
  // Start with the first FAQ open for immediate engagement
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[72px]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary uppercase text-[0.68rem] tracking-[0.2em] font-semibold mb-2 sm:mb-3">
            FAQ
          </p>
          <h2 className="font-extrabold text-[clamp(1.8rem,3.2vw,2.8rem)] tracking-[-0.025em] text-foreground">
            Straight answers.
          </h2>
          <p className="font-light text-sm sm:text-base text-muted-foreground mt-2">
            Everything you need to know about our pricing, guarantees, and service process.
          </p>
        </div>

        {/* 6 Accordion Items */}
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center cursor-pointer text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-primary-light text-primary rotate-180' : 'bg-muted text-muted-foreground group-hover:text-primary'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-6 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="font-light text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-muted rounded-2xl p-6 border border-border">
          <p className="text-sm font-semibold text-foreground">
            Have a different question or need immediate service?
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Our Texas support team is available 24/7/365. Call us directly at{' '}
            <a href="tel:8883661998" className="text-primary font-bold hover:underline">
              (888) 366-1998
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
