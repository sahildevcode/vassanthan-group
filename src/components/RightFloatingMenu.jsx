import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const RightFloatingMenu = () => {
  const phoneNumber = '+971-564-321-798';
  const cleanPhone = '971564321798';
  const instagramUrl = 'https://www.instagram.com/vassanthan?dlrf=YjJlaDZzZnV0M2E4';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Hello, I am inquiring regarding your properties and architectural services.'
  )}`;

  return (
    <aside
      aria-label="Direct Contact & Socials"
      className="fixed bottom-4 right-3 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2 sm:gap-2.5 select-none"
    >
      {/* 1. Instagram Fixed Button (Compact on mobile so it doesn't block CTA buttons) */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-xl shadow-black/80 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Follow on Instagram (@vassanthan)"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* 2. WhatsApp Fixed Button (Compact & elegant on mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-300"
        title={`WhatsApp: ${phoneNumber}`}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-300 border border-[#090D18] rounded-full animate-pulse" />
      </a>

      {/* 3. Direct Telephone Call Button */}
      <a
        href={`tel:+${cleanPhone}`}
        className="group relative flex items-center justify-center w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-gold hover:bg-gold-light text-black shadow-xl shadow-black/80 hover:scale-110 active:scale-95 transition-all duration-300"
        title={`Call: ${phoneNumber}`}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </aside>
  );
};
