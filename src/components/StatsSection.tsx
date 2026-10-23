import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { STATS_ITEMS } from '../data/hvacData';

interface StatBlockProps {
  target: number;
  suffix: string;
  label: string;
  isFirst: boolean;
  isLast: boolean;
}

const StatBlock: React.FC<StatBlockProps> = ({ target, suffix, label, isFirst, isLast }) => {
  const { count, elementRef } = useCounter(target, 1600);

  return (
    <div
      ref={elementRef}
      className={`px-2 sm:px-6 lg:px-8 ${isFirst ? 'lg:pl-0' : ''} ${isLast ? 'lg:pr-0' : ''} flex flex-col items-center justify-center`}
    >
      <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-white">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="font-light text-[0.65rem] sm:text-xs tracking-[0.14em] uppercase text-white/75 mt-1.5 sm:mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary py-12 sm:py-16 px-4 sm:px-6 md:px-[72px] border-y border-blue-600/40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6 text-center text-white lg:divide-x lg:divide-white/20">
        {STATS_ITEMS.map((item, index) => (
          <StatBlock
            key={index}
            target={item.target}
            suffix={item.suffix}
            label={item.label}
            isFirst={index === 0}
            isLast={index === STATS_ITEMS.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
