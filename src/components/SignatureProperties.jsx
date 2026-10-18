import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, ArrowUpRight, Sparkles, MessageCircle, Phone } from 'lucide-react';

const PROPERTIES = [
  {
    id: 'residence-01',
    name: 'The Obsidian Pavilion',
    subtitle: 'Cantilevered Waterfront Masterpiece',
    location: 'Frond G, Palm Jumeirah, Dubai',
    price: '$24,500,000',
    aed: 'AED 89,900,000',
    area: '16,400 sq.ft',
    beds: '6 Suites',
    baths: '8 Baths',
    features: ['120ft Private Beach', 'Subterranean Spa', 'Infinity Reflection Pool'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=1600&auto=format&fit=crop',
    architect: 'Zaha Hadid Design Standards',
  },
  {
    id: 'residence-02',
    name: 'The Glass Monolith',
    subtitle: 'Brutalist Precision & Water Choreography',
    location: 'Sector E, Emirates Hills, Dubai',
    price: '$18,200,000',
    aed: 'AED 66,800,000',
    area: '13,800 sq.ft',
    beds: '5 Suites',
    baths: '7 Baths',
    features: ['Championship Golf View', 'Double-Height Gallery', 'Wine Vault'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop',
    architect: 'Kengo Kuma Inspired Atelier',
  },
  {
    id: 'residence-03',
    name: 'Canal Horizon Sky Villa',
    subtitle: 'Panoramic Penthouse Triplex',
    location: 'Marasi Marina, Business Bay, Dubai',
    price: '$12,800,000',
    aed: 'AED 47,000,000',
    area: '9,600 sq.ft',
    beds: '4 Suites',
    baths: '6 Baths',
    features: ['Private Helipad Access', 'Skylight Lap Pool', 'Direct Yacht Slip'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=85&w=1600&auto=format&fit=crop',
    architect: 'Foster + Partners Standards',
  },
  {
    id: 'residence-04',
    name: 'Aura Biophilic Sanctuary',
    subtitle: 'Organic Travertine Forest Estate',
    location: 'The Reserve, Al Barari, Dubai',
    price: '$15,400,000',
    aed: 'AED 56,500,000',
    area: '14,900 sq.ft',
    beds: '6 Suites',
    baths: '8 Baths',
    features: ['Indoor Rain Courtyard', 'Zen Reflection Stream', 'Solar Geothermal'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1600&auto=format&fit=crop',
    architect: 'Bespoke Atelier Collection',
  },
];

export const SignatureProperties = ({ onSelectProperty }) => {
  return (
    <section id="properties" className="py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-gold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Private Architectural Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
              Signature <span className="italic text-gold-light">Residences</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Every residence in our signature collection is a one-of-one architectural commission, positioned in the UAE's most secluded coastal and golf enclaves.
            </p>
          </div>
        </div>

        {/* Large Architectural Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          {PROPERTIES.map((prop, idx) => (
            <article
              key={prop.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#090D18]/80 border border-white/10 hover:border-gold/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-black/30 pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-sans text-[11px] tracking-widest uppercase">
                    Edition {`0${idx + 1}`}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-gold/90 text-black font-semibold text-[11px] tracking-wider uppercase shadow-lg">
                    {prop.price}
                  </span>
                </div>

                {/* Bottom Architectural Subtitle & AED */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5 font-light text-[11px] tracking-wider uppercase text-gold-light">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {prop.location}
                  </span>
                  <span className="text-white/60 text-[11px] font-sans font-mono">{prop.aed}</span>
                </div>
              </div>

              {/* Editorial Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white group-hover:text-gold transition-colors">
                    {prop.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mt-1.5 mb-6">
                    {prop.subtitle} • {prop.architect}
                  </p>

                  {/* Architectural Specs */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 text-xs text-gray-300 text-center mb-6">
                    <div>
                      <span className="block font-serif text-lg text-white font-medium">{prop.beds}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">Accommodations</span>
                    </div>
                    <div>
                      <span className="block font-serif text-lg text-white font-medium">{prop.baths}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">En-Suites</span>
                    </div>
                    <div>
                      <span className="block font-serif text-lg text-white font-medium">{prop.area}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">Living Space</span>
                    </div>
                  </div>

                  {/* Curated Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {prop.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] tracking-wider uppercase text-gray-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/971564321798?text=${encodeURIComponent(
                      `Hello Vassanthan Atelier, I am requesting a private architectural dossier and viewing for "${prop.name}" (${prop.price} / ${prop.location}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-full bg-white text-black hover:bg-gold font-semibold text-xs tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Request Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:+971564321798"
                    className="p-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white transition-colors"
                    title="Speak with Atelier: +971-564-321-798"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
