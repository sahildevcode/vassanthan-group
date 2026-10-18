import React from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ onOpenMenu, onOpenSearch, onBookTour }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070D]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-24 flex items-center justify-between">
        
        {/* Minimalist Monogram Logo (Responsive sizing for mobile screens) */}
        <a href="#" className="flex items-center gap-2 sm:gap-3.5 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:border-gold transition-colors shrink-0">
            <span className="font-serif italic font-bold text-base sm:text-lg text-white group-hover:text-gold transition-colors">
              V
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-xl font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase leading-none">
              Vassanthan
            </span>
            <span className="text-[7.5px] sm:text-[9px] font-sans tracking-[0.25em] sm:tracking-[0.35em] text-gray-400 uppercase mt-0.5 sm:mt-1">
              Atelier & Estates
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-medium tracking-[0.2em] uppercase text-gray-300">
          <a href="#properties" className="hover:text-gold transition-colors">
            Residences
          </a>
          <a href="#story" className="hover:text-gold transition-colors">
            Architecture
          </a>
          <a href="#construction" className="hover:text-gold transition-colors">
            Progression
          </a>
          <a href="#showcase" className="hover:text-gold transition-colors">
            Showcase
          </a>
          <a href="#contact" className="hover:text-gold transition-colors">
            Contact
          </a>
        </div>

        {/* Right Action Icons (Properly sized so Menu button is ALWAYS visible on mobile) */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Subtle Private Tour CTA (Desktop only) */}
          <button
            onClick={onBookTour}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-gold hover:text-black hover:border-gold backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-white transition-all duration-300"
          >
            <span>Private Viewing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Minimalist Circle Search Icon */}
          <button
            onClick={onOpenSearch}
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
            title="Search Residences"
            aria-label="Search Residences"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
          </button>

          {/* Minimalist Circular Menu Button with 3 offset bars (Always fits cleanly on phone) */}
          <button
            onClick={onOpenMenu}
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/15 hover:bg-white/25 backdrop-blur-lg flex flex-col items-center justify-center gap-1 sm:gap-1.5 text-white transition-all duration-300 shadow-lg shadow-black/40 group cursor-pointer"
            title="Open Menu"
            aria-label="Open Menu"
          >
            <span className="w-3.5 sm:w-4 h-[1.5px] bg-white group-hover:bg-gold transition-colors rounded-full" />
            <span className="w-3 sm:w-3.5 h-[1.5px] bg-white group-hover:bg-gold transition-colors rounded-full ml-0.5" />
            <span className="w-2 sm:w-2.5 h-[1.5px] bg-white group-hover:bg-gold transition-colors rounded-full ml-1" />
          </button>

        </div>

      </nav>
    </header>
  );
};
