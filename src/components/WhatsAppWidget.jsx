import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Shield } from 'lucide-react';
import gsap from 'gsap';

export const WhatsAppWidget = () => {
  const widgetRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = '971564321798';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hello Vassanthan Atelier, I am interested in private architectural viewing and acquisition for your signature residences.'
  )}`;

  useEffect(() => {
    if (widgetRef.current) {
      gsap.fromTo(
        widgetRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1 }
      );

      gsap.to(widgetRef.current.querySelector('.whatsapp-btn'), {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <aside
      ref={widgetRef}
      aria-label="Concierge WhatsApp"
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 flex flex-col items-start gap-2 select-none"
    >
      {/* Editorial Concierge Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-[#090D18]/95 border border-gold/40 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[260px] flex items-center justify-between gap-3 animate-fade-in">
          <div>
            <div className="flex items-center gap-1.5 text-gold text-[10px] uppercase tracking-widest font-bold">
              <Shield className="w-3 h-3 text-gold" />
              <span>VIP Atelier Concierge</span>
            </div>
            <p className="text-xs text-white font-serif mt-0.5">Kumara (Direct Desk)</p>
            <p className="text-[11px] text-gray-400 font-mono">0564321798</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-1 transition-colors"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Speech Bubble Arrow */}
          <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#090D18] border-r border-b border-gold/40 rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#0D1527] to-[#16223D] border border-gold/60 text-gold hover:text-black hover:bg-gold shadow-2xl shadow-black/80 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Direct WhatsApp with Kumara (+971 56 432 1798)"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-6 transition-transform" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#090D18] rounded-full" />
      </a>
    </aside>
  );
};
