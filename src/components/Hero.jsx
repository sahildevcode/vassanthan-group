import React, { useEffect, useRef } from 'react';
import { PhoneCall, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export const Hero = ({
  onExplore,
  onBookTour,
  villaPresets,
  activePreset,
  setActivePreset,
}) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(
        '.hero-heading-line',
        {
          y: 40,
          opacity: 0,
          duration: 1.1,
          stagger: 0.14,
          delay: 0.1,
        }
      )
        .from(
          '.hero-subtext',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          '.hero-action-pill',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          '-=0.4'
        )
        .from(
          '.hero-preset-box',
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-14 px-4 sm:px-8 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Headline & Narrative (Calibrated for 100% zoom without overflowing) */}
          <div className="lg:col-span-8 xl:col-span-8 text-center lg:text-left">
            
            <div ref={headlineRef} className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[74px] font-normal tracking-tight text-white leading-[1.05] drop-shadow-2xl">
                <span className="hero-heading-line block">Luxury Homes</span>
                <span className="hero-heading-line block font-serif italic text-gold-light">
                  That Redefine
                </span>
                <span className="hero-heading-line block">Living</span>
              </h1>
            </div>

            <p className="hero-subtext font-sans text-xs sm:text-sm text-gray-200 font-light max-w-lg mt-4 sm:mt-5 leading-relaxed text-center lg:text-left drop-shadow-lg">
              Bespoke monolithic residences crafted with travertine stone, continuous floor-to-ceiling glass, and reflective waters. Designed for the world's most discerning collectors.
            </p>

            {/* Action Buttons (Refined luxury proportions) */}
            <div className="hero-action-pill flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 sm:mt-8">
              <button
                onClick={onExplore}
                className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-gold hover:text-black font-medium text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-black/50 hover:scale-105 active:scale-95 flex items-center gap-1.5 group cursor-pointer"
              >
                <span>Explore Residences</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onBookTour}
                className="px-4 sm:px-5 py-2.5 rounded-full border border-white/25 bg-black/60 hover:bg-white/15 backdrop-blur-md text-white font-medium text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 hover:border-gold hover:text-gold flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold" />
                <span>Private Line: +971-564-321-798</span>
              </button>
            </div>

          </div>

          {/* VILLA PRESET SELECTOR (Compact & clean) */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col items-end justify-center">
            <div className="hero-preset-box p-3.5 rounded-3xl bg-black/75 backdrop-blur-2xl border border-white/15 text-xs text-white w-full max-w-[260px] space-y-2 shadow-2xl">
              <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-gold font-bold px-1">
                <span>4K Architectural Views</span>
                <Sparkles className="w-3 h-3 text-gold" />
              </div>

              {villaPresets.map((preset, idx) => (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(idx)}
                  className={`w-full text-left p-2.5 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    activePreset === idx
                      ? 'bg-gold/20 border-gold text-white font-medium shadow-lg'
                      : 'bg-white/[0.04] border-white/5 hover:border-white/20 text-gray-300'
                  }`}
                >
                  <div>
                    <span className="block font-serif text-sm">{preset.title}</span>
                    <span className="text-[10px] text-gray-400 block">{preset.location}</span>
                  </div>
                  <span className={`text-[10px] font-mono ${activePreset === idx ? 'text-gold' : 'text-gray-500'}`}>
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
