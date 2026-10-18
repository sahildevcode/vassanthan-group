import React, { useState } from 'react';
import { Building2, MapPin, Bed, Bath, Maximize2, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';

const PROPERTIES_DATA = [
  {
    id: 1,
    title: 'Modern 1-BHK Balcony Apartment',
    category: '1-BHK',
    location: 'Jumeirah Village Circle (JVC), Dubai',
    price: 'AED 680,000',
    beds: 1,
    baths: 2,
    area: '720 sqft',
    badge: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    roi: '8.2% ROI',
  },
  {
    id: 2,
    title: 'Executive 2-BHK Canal View Flat',
    category: '2-BHK',
    location: 'Business Bay, Dubai',
    price: 'AED 1,250,000',
    beds: 2,
    baths: 3,
    area: '1,150 sqft',
    badge: 'High Rental Yield',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    roi: '8.9% ROI',
  },
  {
    id: 3,
    title: 'Affordable Prime Studio Flat',
    category: 'Studio',
    location: 'Al Nahda, Sharjah (Near Dubai Border)',
    price: 'AED 390,000',
    beds: 'Studio',
    baths: 1,
    area: '490 sqft',
    badge: 'Best For Budget',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    roi: '9.4% ROI',
  },
  {
    id: 4,
    title: 'Marina Horizon Luxury 2-BHK',
    category: '2-BHK',
    location: 'Dubai Marina',
    price: 'AED 1,480,000',
    beds: 2,
    baths: 2,
    area: '1,280 sqft',
    badge: 'Waterfront Living',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop',
    roi: '8.0% ROI',
  },
  {
    id: 5,
    title: 'Downtown Skyline View 1-BHK',
    category: '1-BHK',
    location: 'Downtown Dubai',
    price: 'AED 990,000',
    beds: 1,
    baths: 2,
    area: '810 sqft',
    badge: 'Prime Location',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop',
    roi: '7.8% ROI',
  },
  {
    id: 6,
    title: 'Modern Off-Plan Studio with Payment Plan',
    category: 'Studio',
    location: 'Dubai South',
    price: 'AED 430,000',
    beds: 'Studio',
    baths: 1,
    area: '450 sqft',
    badge: '1% Monthly Plan',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
    roi: '10.2% ROI',
  },
];

export const FlatsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' 
    ? PROPERTIES_DATA 
    : PROPERTIES_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="flats" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>DIVISION 01: REAL ESTATE PROPERTIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Flats & Apartments <span className="gold-gradient-text">For Sale</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              Buy ready and high-yield residential flats in Dubai and Sharjah. Clear titles, payment options, and direct consultation with Kumara.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {['All', '1-BHK', '2-BHK', 'Studio'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {filter} Flats
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="glass-panel glass-panel-hover rounded-3xl overflow-hidden group">
              
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-[11px] font-bold text-black shadow-md">
                    {item.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-amber-500/30">
                    {item.roi}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5 font-medium truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {item.location}
                  </span>
                  <span className="font-extrabold text-amber-400 shrink-0">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-800 text-xs text-gray-300 text-center mb-6">
                  <div>
                    <span className="block font-bold text-white">{item.beds}</span>
                    <span className="text-[10px] text-gray-400">Bedrooms</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white">{item.baths}</span>
                    <span className="text-[10px] text-gray-400">Bathrooms</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white">{item.area}</span>
                    <span className="text-[10px] text-gray-400">Total Area</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/971564321798?text=${encodeURIComponent(
                      `Hello Kumara, I am interested in ${item.title} (${item.price}) in ${item.location}. Please share floorplan and visit details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <a
                    href="tel:0564321798"
                    className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    title="Call directly: 0564321798"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Your Flat Direct Callout */}
        <div className="mt-14 glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Got a Flat to Sell?</span>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              List Your Flat or Villa in Dubai / Sharjah With Us
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
              We have ready investors and direct buyers actively looking for residential units. No delay, fast closing and professional handling.
            </p>
          </div>

          <a
            href="https://wa.me/971564321798?text=Hello%20Kumara,%20I%20have%20a%20property%20to%20sell%20in%20UAE.%20Let's%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm whitespace-nowrap shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
          >
            List Property With Kumara
          </a>
        </div>

      </div>
    </section>
  );
};
