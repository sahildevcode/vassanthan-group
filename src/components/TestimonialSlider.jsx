import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, HardHat, Sparkles } from 'lucide-react';

const CONSTRUCTION_SLIDES = [
  {
    src: './assets/construction/stage-1.jpg',
    phase: 'Phase 01',
    title: 'Subterranean Foundation & Deep Piles',
    location: 'Palm Jumeirah Sanctuary',
    specs: '32-meter reinforced bedrock pilings with seismic dampening',
  },
  {
    src: './assets/construction/stage-2.jpg',
    phase: 'Phase 02',
    title: 'Post-Tensioned Cantilever Steel Rigging',
    location: 'Jumeirah Bay Monolith',
    specs: 'Custom high-tensile carbon steel cantilevers spanning 18 meters unsupported',
  },
  {
    src: './assets/construction/stage-3.jpg',
    phase: 'Phase 03',
    title: 'Monolithic Architectural Concrete Pouring',
    location: 'Emirates Hills Enclave',
    specs: 'Self-compacting fair-faced brutalist concrete with continuous 72-hour curing',
  },
  {
    src: './assets/construction/stage-4.jpg',
    phase: 'Phase 04',
    title: 'Navona Travertine & Precision Stonework',
    location: 'Al Barari Oasis Villa',
    specs: 'Hand-selected travertine blocks quarried in Tivoli, Italy and book-matched on site',
  },
  {
    src: './assets/construction/stage-5.jpg',
    phase: 'Phase 05',
    title: 'Acoustic Low-Iron Glass Wall Installation',
    location: 'Business Bay Sky Villa',
    specs: 'Triple-laminated acoustic solar glass panels with silent motorized track glide',
  },
  {
    src: './assets/construction/stage-6.jpg',
    phase: 'Phase 06',
    title: 'Cantilevered Reflection Basin & Infinity Pool',
    location: 'Palm Jumeirah Sanctuary',
    specs: 'Volcanic basalt pool basin with zero-edge water mirror perimeter',
  },
  {
    src: './assets/construction/stage-7.jpg',
    phase: 'Phase 07',
    title: 'Blue-Hour Architectural Lighting Integration',
    location: 'Emirates Hills Enclave',
    specs: 'Concealed 2400K warm LED light channels highlighting brutalist overhangs',
  },
  {
    src: './assets/construction/stage-8.jpg',
    phase: 'Phase 08',
    title: 'Turnkey Handover & Patron Commission Complete',
    location: 'Private Client Commission',
    specs: 'Confidential escrow title handover and bespoke architectural monograph delivery',
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Exact 1.5s interval with rock-solid timing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((curr) => {
        setPrevIndex(curr);
        return (curr + 1) % CONSTRUCTION_SLIDES.length;
      });
    }, 1500); // 1.5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((curr) => {
      setPrevIndex(curr);
      return (curr + 1) % CONSTRUCTION_SLIDES.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((curr) => {
      setPrevIndex(curr);
      return (curr - 1 + CONSTRUCTION_SLIDES.length) % CONSTRUCTION_SLIDES.length;
    });
  };

  const currentSlide = CONSTRUCTION_SLIDES[currentIndex];

  return (
    <section id="construction" className="py-14 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Full-Width 100% Box with Zero-Black-Screen Cross-Fade */}
        <div
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#090D18] group select-none"
        >
          {/* 
            ZERO BLACK SCREEN ARCHITECTURE:
            - The previous image stays at opacity-100 (z-[1]) directly underneath.
            - The new active image fades in smoothly on top (z-10) with a 450ms fade-in.
            - All images are local in public/assets/construction/ so loading latency is 0ms.
          */}
          {CONSTRUCTION_SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            const isPrev = idx === prevIndex;

            return (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-[450ms] ease-out ${
                  isCurrent
                    ? 'opacity-100 z-10'
                    : isPrev
                    ? 'opacity-100 z-[1]'
                    : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.06]"
                  loading="eager"
                />
              </div>
            );
          })}

          {/* Contrast and Vignette Overlays */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#04060B]/90 via-black/25 to-black/50 pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/55 via-transparent to-black/35 pointer-events-none" />

          {/* Top Bar Overlay */}
          <div className="absolute top-5 sm:top-7 left-5 sm:left-8 right-5 sm:right-8 z-30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] tracking-widest uppercase font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Atelier Construction Progression</span>
                <span className="sm:hidden">Progression</span>
              </div>

              <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-[10px] tracking-wider uppercase font-mono">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>1.5s Auto Reel</span>
              </div>
            </div>

            {/* Counter + Play/Pause */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-gold text-xs font-mono">
                0{currentIndex + 1} / 0{CONSTRUCTION_SLIDES.length}
              </span>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-black/75 hover:bg-gold hover:text-black backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                title={isPlaying ? 'Pause 1.5s Reel' : 'Resume 1.5s Reel'}
                aria-label="Toggle auto play"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            </div>
          </div>

          {/* Bottom Content Overlay */}
          <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-8 right-5 sm:right-8 z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase font-mono">
                <HardHat className="w-3.5 h-3.5" />
                <span>{currentSlide.phase} • {currentSlide.location}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-tight leading-tight">
                {currentSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl">
                {currentSlide.specs}
              </p>
            </div>

            {/* Prev / Next Manual Navigation */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/25 bg-black/60 hover:bg-gold hover:text-black hover:border-gold backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-xl"
                title="Previous Construction Phase"
                aria-label="Previous Phase"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/25 bg-black/60 hover:bg-gold hover:text-black hover:border-gold backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-xl"
                title="Next Construction Phase"
                aria-label="Next Phase"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Multi-Segment Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex gap-1 px-4 sm:px-8 pb-3">
            {CONSTRUCTION_SLIDES.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setPrevIndex(currentIndex);
                  setCurrentIndex(idx);
                }}
                className="h-1 flex-1 bg-white/15 rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:bg-white/30"
                title={`Go to Phase 0${idx + 1}`}
              >
                <div
                  className={`h-full bg-gold transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-full shadow-[0_0_10px_rgba(212,175,55,1)]'
                      : idx < currentIndex
                      ? 'w-full opacity-40'
                      : 'w-0'
                  }`}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
