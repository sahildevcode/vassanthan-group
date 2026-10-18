import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      'Vassanthan Atelier engineered our Palm Jumeirah villa with an extraordinary standard of brutalist beauty. The seamless cantilever over the reflective infinity pool is unlike anything else on the fronds.',
    author: 'Tariq Al-Mansoor',
    role: 'Principal, Sovereign Family Office',
    location: 'Palm Jumeirah Residence',
  },
  {
    quote:
      'From the quarry selection of the Navona travertine to the acoustic isolation of the subterranean gallery, Kumara and his team operated with precision, discretion, and timeless taste.',
    author: 'Elena Rostova',
    role: 'Art Collector & Private Investor',
    location: 'Emirates Hills Villa',
  },
  {
    quote:
      'Their understanding of blue-hour lighting, cantilevered structural engineering, and private dock integration sets a new global benchmark for bespoke architectural residences.',
    author: 'Marcus Vance',
    role: 'Architectural Critic & Homeowner',
    location: 'Business Bay Sky Villa',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-sans tracking-[0.25em] uppercase mb-4">
            <span>Private Patronage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
            Reflections of <span className="italic text-gold-light">Sanctuary</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light mt-4">
            Thoughts shared by homeowners and patrons who entrusted their bespoke architectural visions to our atelier.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-gold/30 transition-all duration-300 relative group"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/10 mb-4 group-hover:text-gold/20 transition-colors" />

                <p className="font-serif text-lg sm:text-xl text-gray-200 italic leading-relaxed mb-8">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="font-serif text-lg font-medium text-white">{review.author}</div>
                <div className="text-xs text-gold-light font-light">{review.role}</div>
                <div className="text-[11px] text-gray-400 tracking-wider uppercase mt-1">
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
