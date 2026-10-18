import React, { useState, useEffect } from 'react';
import { Search, X, MapPin } from 'lucide-react';

const SEARCH_DATABASE = [
  {
    name: 'The Obsidian Pavilion',
    location: 'Palm Jumeirah, Dubai',
    price: '$24,500,000',
    type: 'Waterfront Villa',
    tag: 'Infinity Pool • Private Dock',
  },
  {
    name: 'The Glass Monolith',
    location: 'Emirates Hills, Dubai',
    price: '$18,200,000',
    type: 'Brutalist Villa',
    tag: 'Golf Vista • Wine Cellar',
  },
  {
    name: 'Canal Horizon Sky Villa',
    location: 'Business Bay, Dubai',
    price: '$12,800,000',
    type: 'Sky Penthouse',
    tag: 'Helipad Access • 360 Vista',
  },
  {
    name: 'Aura Biophilic Sanctuary',
    location: 'Al Barari Oasis, Dubai',
    price: '$15,400,000',
    type: 'Organic Travertine Villa',
    tag: 'Rain Courtyard • Forest Estate',
  },
];

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = SEARCH_DATABASE.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()) ||
      item.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-24 px-3 sm:px-6 bg-black/85 backdrop-blur-2xl select-none transition-all duration-300 ease-out ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl bg-[#080B14]/98 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 -translate-y-4 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 mr-2">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
            <input
              type="text"
              autoFocus={isOpen}
              placeholder="Search residence, location, feature..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none text-white placeholder-gray-400 text-xs sm:text-base focus:outline-none font-sans"
            />
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-gold hover:text-black flex items-center justify-center text-gray-400 hover:text-black transition-colors cursor-pointer shrink-0"
            title="Close Search"
            aria-label="Close Search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-2.5 sm:space-y-3 max-h-[50vh] sm:max-h-[380px] overflow-y-auto pr-1">
          {results.length > 0 ? (
            results.map((res, idx) => (
              <a
                key={idx}
                href="#properties"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  setTimeout(() => {
                    const el = document.getElementById('properties');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-gold/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block cursor-pointer"
              >
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-white group-hover:text-gold transition-colors">
                    {res.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold shrink-0" />
                      {res.location}
                    </span>
                    <span>•</span>
                    <span className="truncate max-w-[150px] sm:max-w-none">{res.tag}</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between sm:flex-col sm:items-end gap-1 pt-1 sm:pt-0 border-t border-white/5 sm:border-0">
                  <span className="font-serif text-sm sm:text-base text-gold font-medium block">
                    {res.price}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider">
                    {res.type}
                  </span>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-6 sm:py-8 text-xs text-gray-400 font-light">
              No private residences found matching "{query}". Call our atelier directly at +971-564-321-798.
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400">
          <span>Private Atelier Database</span>
          <a href="tel:+971564321798" className="text-gold hover:underline">
            Direct Line: +971-564-321-798
          </a>
        </div>
      </div>
    </div>
  );
};
