import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, PhoneCall, MessageCircle, ArrowRight, Building, HardHat, Briefcase } from 'lucide-react';
import gsap from 'gsap';

export const WelcomePopup = ({ onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    // Popup appears 2.2 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && modalRef.current && backdropRef.current) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.75, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && backdropRef.current) {
      gsap.to(modalRef.current, { scale: 0.85, opacity: 0, y: 20, duration: 0.3 });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#0E1526]/95 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>UAE Exclusive Direct Consultation</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
          Looking for <span className="gold-gradient-text">Flats</span>, <span className="blue-gradient-text">Construction</span>, or <span className="text-emerald-400">Jobs</span>?
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
          Welcome to <strong>Vassanthan Group (Kumara)</strong>. We are actively helping clients across Dubai & Sharjah with property sales, civil building works, and UAE workforce hiring.
        </p>

        {/* 3 Quick Action Links */}
        <div className="grid grid-cols-3 gap-2.5 mb-6 text-center text-xs">
          <button
            onClick={() => {
              handleClose();
              const el = document.getElementById('flats');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-all"
          >
            <Building className="w-5 h-5 mx-auto mb-1 text-amber-400" />
            <span className="font-bold block">Buy Flat</span>
            <span className="text-[10px] text-gray-400">Best ROI</span>
          </button>

          <button
            onClick={() => {
              handleClose();
              const el = document.getElementById('construction');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 transition-all"
          >
            <HardHat className="w-5 h-5 mx-auto mb-1 text-blue-400" />
            <span className="font-bold block">Build Project</span>
            <span className="text-[10px] text-gray-400">Turnkey</span>
          </button>

          <button
            onClick={() => {
              handleClose();
              const el = document.getElementById('jobs');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-all"
          >
            <Briefcase className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
            <span className="font-bold block">Jobs / Apply</span>
            <span className="text-[10px] text-gray-400">Urgent</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:0564321798"
            className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call: 0564321798</span>
          </a>
          <a
            href="https://wa.me/971564321798?text=Hello%20Kumara,%20I%20am%20inquiring%20from%20your%20website%20popup."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
