import React from 'react';

const STATS = [
  {
    value: '$1.8B+',
    label: 'Portfolio Value Delivered',
    subtext: 'Across Dubai, Sharjah & Abu Dhabi',
  },
  {
    value: '48+',
    label: 'Private Villas Completed',
    subtext: 'One-of-one architectural commissions',
  },
  {
    value: '16',
    label: 'Years of Master Atelier',
    subtext: 'Engineering & real estate excellence',
  },
  {
    value: '99.4%',
    label: 'Collector Satisfaction',
    subtext: 'Confidential client relationships',
  },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-[#05070D] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left relative">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                <span className="gold-gradient-text">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 font-light mt-1">
                {stat.subtext}
              </div>
              
              {/* Divider for desktop */}
              {idx < STATS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
