import React from 'react';
import { ArrowUp, Globe, Phone, Mail, Share2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030508] border-t border-white/10 text-gray-400 text-xs py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center">
                <span className="font-serif italic font-bold text-lg text-white">V</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold tracking-[0.2em] text-white uppercase block">
                  Vassanthan
                </span>
                <span className="text-[9px] font-sans tracking-[0.35em] text-gray-400 uppercase">
                  Atelier & Estates
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed mt-4">
              Pioneering private architectural monuments, cantilevered villas, and blue-hour reflective sanctuaries across the United Arab Emirates.
            </p>

            <div className="pt-2 flex items-center gap-4 text-white">
              <a
                href="https://www.instagram.com/vassanthan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                title="Instagram @vassanthan"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="tel:0564321798"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                title="Call 0564321798"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971564321798"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp Concierge"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-white mb-4">Portfolios</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#properties" className="hover:text-gold transition-colors">Coastal Cantilevers</a></li>
              <li><a href="#properties" className="hover:text-gold transition-colors">Island Sanctuaries</a></li>
              <li><a href="#properties" className="hover:text-gold transition-colors">Desert Monoliths</a></li>
              <li><a href="#properties" className="hover:text-gold transition-colors">Marina Sky Penthouses</a></li>
              <li><a href="#properties" className="hover:text-gold transition-colors">Custom Commissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-white mb-4">Atelier</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#story" className="hover:text-gold transition-colors">Design Story</a></li>
              <li><a href="#showcase" className="hover:text-gold transition-colors">Architectural Series</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Confidential Escrow</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Private Commissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-white mb-4">Locations</h4>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              <strong>Palm Jumeirah Atelier</strong><br />
              Crescent Road, Dubai, UAE<br />
              <span className="text-gold mt-2 block">Direct: +971-564-321-798</span>
              <span className="text-gray-400 block">WhatsApp: +971-564-321-798</span>
            </p>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 font-light">
          <p>© 2026 Vassanthan Atelier & Estates. Inspired by Architectural Purity. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-gold transition-colors">Privacy & NDA</a>
            <span>•</span>
            <a href="#contact" className="hover:text-gold transition-colors">Terms of Atelier</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-gold transition-colors"
            >
              <span>Back to Zenith</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
