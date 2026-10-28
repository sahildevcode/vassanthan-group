import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export const NavigationOverlay = ({ isOpen, onClose, onBookTour }) => {
  // Sync body scroll lock
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

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 180);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#04060B]/98 backdrop-blur-3xl p-4 sm:p-8 lg:p-12 text-white select-none transition-all duration-500 ease-out overflow-y-auto ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible scale-100'
          : 'opacity-0 pointer-events-none invisible scale-[0.99]'
      }`}
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Bar */}
      <div
        className={`relative z-10 flex items-center justify-between max-w-7xl mx-auto w-full pb-4 sm:pb-6 border-b border-white/10 transition-all duration-500 ease-out delay-75 shrink-0 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-md">
            <img
              src="./assets/soni-logo.png"
              alt="Soni Financial Services"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-lg font-bold tracking-[0.12em] sm:tracking-[0.18em] uppercase">Soni</span>
            <span className="text-[7.5px] sm:text-[9px] font-sans tracking-[0.2em] sm:tracking-[0.28em] text-gray-300 uppercase font-medium">Financial Services</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 hover:bg-gold hover:text-black hover:border-gold hover:rotate-90 flex items-center justify-center text-white transition-all duration-300 shadow-lg cursor-pointer"
          title="Close Navigation"
          aria-label="Close Navigation"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
        </button>
      </div>

      {/* Main Navigation Links (All 5 site sections accessible on mobile & desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Links Column */}
        <div className="lg:col-span-8 space-y-3 sm:space-y-5">
          {[
            { label: 'Signature Residences', href: '#properties', num: '01', delay: 'delay-100' },
            { label: 'Architecture Story', href: '#story', num: '02', delay: 'delay-150' },
            { label: 'Construction Progression', href: '#construction', num: '03', delay: 'delay-200' },
            { label: 'Project Showcase', href: '#showcase', num: '04', delay: 'delay-250' },
            { label: 'Private Consultation', href: '#contact', num: '05', delay: 'delay-300' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`overflow-hidden transition-all duration-500 ease-out ${item.delay} ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex items-baseline gap-3 sm:gap-6 py-1 cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-mono text-gold-light/60 group-hover:text-gold transition-colors duration-300">
                  {item.num}
                </span>
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white group-hover:text-gold group-hover:translate-x-3 transition-all duration-300 tracking-tight flex items-center gap-3">
                  {item.label}
                  <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-gold transition-all duration-300 hidden sm:inline-block" />
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Right Info Card */}
        <div
          className={`lg:col-span-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-4 sm:space-y-6 transition-all duration-500 ease-out delay-300 ${
            isOpen ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-6 scale-95'
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block">
            Exclusive Advisory Desk
          </span>

          <div>
            <div className="text-xs text-gray-400 font-light">Direct Private Line:</div>
            <a href="tel:+971564321798" className="text-lg sm:text-xl font-serif text-white hover:text-gold block mt-1 transition-colors">
              +971-564-321-798
            </a>
            <div className="text-xs text-gray-400 mt-1">WhatsApp: +971-564-321-798</div>
          </div>

          <div>
            <div className="text-xs text-gray-400 font-light">Advisory Hubs:</div>
            <div className="text-xs sm:text-sm font-serif text-white mt-1">
              Palm Jumeirah & Emirates Hills, Dubai
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                onBookTour();
              }, 180);
            }}
            className="w-full py-2.5 sm:py-3 rounded-full bg-gold text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-md cursor-pointer"
          >
            Schedule Confidential Tour
          </button>
        </div>

      </div>

      {/* Bottom Frame */}
      <div
        className={`relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400 font-light transition-all duration-500 ease-out delay-300 shrink-0 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span>© 2026 Soni Financial Services</span>
        <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className="hover:text-white transition-colors"
          >
            Residences
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
          <a href="tel:+971564321798" className="text-gold hover:underline">
            +971-564-321-798
          </a>
        </div>
      </div>

    </div>
  );
};
