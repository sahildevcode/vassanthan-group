import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Eye } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    id: 'sc-1',
    title: 'The Cliffside Cantilever',
    type: 'Coastal Villa',
    location: 'Palm Jumeirah Crown',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=85&w=1200&auto=format&fit=crop',
    specs: '15,600 sq.ft • Private Marine Slipway',
  },
  {
    id: 'sc-2',
    title: 'The Mirrored Lagoon Villa',
    type: 'Island Sanctuary',
    location: 'Jumeirah Bay Island',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200&auto=format&fit=crop',
    specs: '18,200 sq.ft • 360° Infinity Lagoon',
  },
  {
    id: 'sc-3',
    title: 'The Dunes Monolith',
    type: 'Desert Modernist Estate',
    location: 'Emirates Hills Enclave',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop',
    specs: '12,400 sq.ft • Subterranean Spa & Gallery',
  },
  {
    id: 'sc-4',
    title: 'Marina Horizon Penthouse',
    type: 'Sky Residence',
    location: 'Dubai Marina Waterfront',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=85&w=1200&auto=format&fit=crop',
    specs: '9,800 sq.ft • Triple-Height Glass Atrium',
  },
  {
    id: 'sc-5',
    title: 'The Travertine Courtyard',
    type: 'Biophilic Residence',
    location: 'Al Barari Oasis',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=85&w=1200&auto=format&fit=crop',
    specs: '13,500 sq.ft • Internal Rain Garden',
  },
];

export const ProjectShowcase = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="py-28 sm:py-36 bg-[#070A13] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-gold uppercase mb-3">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>Architectural Series</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
              Selected <span className="italic text-gold-light">Developments</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-6 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
              title="Scroll Left"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
              title="Scroll Right"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {SHOWCASE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[310px] sm:w-[380px] lg:w-[420px] snap-start group relative rounded-3xl overflow-hidden bg-[#0D1322] border border-white/10 hover:border-gold/40 transition-all duration-500 shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[400px] sm:h-[460px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] tracking-widest uppercase text-white border border-white/20">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-sans text-gold-light font-medium">{item.year}</span>
                </div>

                {/* Bottom Content Inset */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light mt-1">
                    {item.specs}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-300 bg-[#0D1322]">
                <span className="text-[11px] uppercase tracking-wider text-gray-400">Architectural Dossier</span>
                <a
                  href={`https://wa.me/971564321798?text=${encodeURIComponent(
                    `Inquiry for project showcase: ${item.title} (${item.location})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold hover:text-white font-semibold transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
