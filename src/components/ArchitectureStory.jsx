import React, { useRef } from 'react';
import gsap from 'gsap';
import { Compass, ArrowUpRight } from 'lucide-react';

export const ArchitectureStory = () => {
  const containerRef = useRef(null);
  const floatingImgRef = useRef(null);

  // Smooth mouse follow interaction
  const handleMouseMove = (e) => {
    if (!containerRef.current || !floatingImgRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Dimensions of small floating image
    const imgW = 180;
    const imgH = 210;

    // Natural CSS position: -top-6 -right-6 relative to container
    const naturalX = rect.width - 24;
    const naturalY = -24;

    // Calculate displacement so center of small image glides with cursor
    const targetX = mouseX - naturalX - imgW / 2;
    const targetY = mouseY - naturalY - imgH / 2;

    // Subtle dynamic tilt based on horizontal position (-3deg to +3deg)
    const tilt = ((mouseX - rect.width / 2) / (rect.width / 2)) * 4;

    gsap.to(floatingImgRef.current, {
      x: targetX,
      y: targetY,
      rotation: tilt,
      scale: 1.04,
      boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.3)',
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  // Smooth reset to natural position when cursor leaves
  const handleMouseLeave = () => {
    if (!floatingImgRef.current) return;

    gsap.to(floatingImgRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.6)',
      duration: 0.75,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  return (
    <section
      id="story"
      className="py-14 sm:py-20 lg:py-22 bg-[#060912]/90 backdrop-blur-xl border-t border-white/10 relative overflow-hidden select-none"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[380px] h-[380px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Image Container with Cursor-Following Thumbnail */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative cursor-crosshair group"
          >
            {/* Main Big Architectural Interior Image (Calibrated compact height) */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1400&auto=format&fit=crop"
                alt="Architectural Interior Detail"
                className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover object-center filter brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060912] via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Spec Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-xs text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-serif text-sm text-gold-light italic">Materiality & Form</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400">Atelier Archives</span>
                </div>
                <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                  Navona travertine, acoustic triple-glazed glass, thermal carbon steel, and indoor-outdoor reflection basins.
                </p>
              </div>
            </div>

            {/* Inset Detail Image that smoothly tracks the mouse cursor and resets on leave */}
            <div
              ref={floatingImgRef}
              className="hidden sm:block absolute -top-6 -right-6 w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 pointer-events-none transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=85&w=800&auto=format&fit=crop"
                alt="Travertine and water reflection"
                className="w-full h-full object-cover filter brightness-105"
              />
              {/* Badge on small image */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[9px] text-gold tracking-widest uppercase font-mono">
                Perspective
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-gold uppercase">
                <Compass className="w-3.5 h-3.5 text-gold" />
                <span>The Architecture Manifesto</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.12]">
                Where Brutalist Boldness Meets <span className="italic text-gold-light">Reflective Serenity</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              We do not construct buildings to occupy landscapes; we choreograph light, wind, and water into permanent sanctuaries. Each residence is conceived as an architectural sculpture that evolves with the sun's trajectory across the Arabian Gulf.
            </p>

            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Floor-to-ceiling glass expanses dissolve the threshold between interior salons and cantilevered reflection pools, ensuring privacy without sacrificing horizon vistas. Every block of travertine is hand-quarried in Tivoli, Italy.
            </p>

            {/* 2 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10">
              <div>
                <span className="font-serif text-lg sm:text-xl text-white block font-medium">01. Monolithic Purity</span>
                <p className="text-[11px] text-gray-400 font-light mt-1">
                  Structural columns eliminated through post-tensioned engineering for uninterrupted 180° glass spans.
                </p>
              </div>

              <div>
                <span className="font-serif text-lg sm:text-xl text-white block font-medium">02. Reflective Planes</span>
                <p className="text-[11px] text-gray-400 font-light mt-1">
                  Custom infinity waterways act as natural thermal cooling mirrors while accentuating the building silhouette at dusk.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white font-semibold hover:text-gold transition-colors group"
              >
                <span>Read the Complete Atelier Monograph</span>
                <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
