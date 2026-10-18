import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureProperties } from './components/SignatureProperties';
import { ArchitectureStory } from './components/ArchitectureStory';
import { TestimonialSlider } from './components/TestimonialSlider';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Statistics } from './components/Statistics';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NavigationOverlay } from './components/NavigationOverlay';
import { SearchModal } from './components/SearchModal';
import { RightFloatingMenu } from './components/RightFloatingMenu';
import { ThreeHeroScene } from './components/ThreeHeroScene';

// Preset 1 is now the user's selected Monolithic Water Villa as requested
const VILLA_PRESETS = [
  {
    id: 1,
    title: 'Monolithic Water Villa',
    location: 'Emirates Hills Enclave',
    src: './assets/hero-villa-2.jpg',
  },
  {
    id: 2,
    title: 'Blue-Hour Glass Villa',
    location: 'Palm Jumeirah Sanctuary',
    src: './assets/hero-villa-1.jpg',
  },
  {
    id: 3,
    title: 'Coastal Cantilever',
    location: 'Jumeirah Bay Island',
    src: './assets/hero-villa-3.jpg',
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePreset, setActivePreset] = useState(0); // Default to Preset 0 (Monolithic Water Villa)
  const lenisRef = useRef(null);

  // 120 FPS Buttery-Smooth Lenis Inertia Scroll (Lag-Free & Fast-Scroll Responsive)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Responsive 120 FPS interpolation (no queue lag on fast flicks)
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation for all # links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor && anchor.getAttribute('href').length > 1) {
        const id = anchor.getAttribute('href').substring(1);
        const targetEl = document.getElementById(id);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -70, duration: 1.3 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Pause smooth scroll when overlays/modals are active
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isMenuOpen || isSearchOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isMenuOpen, isSearchOpen]);

  const currentVilla = VILLA_PRESETS[activePreset];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-gold selection:text-black">
      
      {/* 1. FIXED 4K ARCHITECTURAL BACKGROUND (Natural un-zoomed wide framing) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          key={currentVilla.src}
          src={currentVilla.src}
          alt={currentVilla.title}
          className="w-full h-full object-cover object-[center_42%] filter brightness-90 contrast-[1.05] transition-all duration-700 ease-out"
        />
        {/* Soft vignette gradients for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-black/20 to-[#05070D]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070D]/75 via-transparent to-[#05070D]/40 pointer-events-none" />
      </div>

      {/* 2. FIXED THREE.JS 3D REFLECTIVE LAYER */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <ThreeHeroScene />
      </div>

      {/* 3. NAVBAR (Sticks at z-50 with frosted glass backdrop) */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onBookTour={() => scrollToSection('contact')}
      />

      {/* FULLSCREEN NAVIGATION OVERLAY */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBookTour={() => scrollToSection('contact')}
      />

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* PERMANENT RIGHT-SIDE INSTAGRAM, WHATSAPP & CALL FLOATING MENU */}
      <RightFloatingMenu />

      {/* 4. FOREGROUND SCROLLABLE CONTENT (Scrolls smoothly UP over the fixed background) */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero
          onExplore={() => scrollToSection('properties')}
          onBookTour={() => scrollToSection('contact')}
          villaPresets={VILLA_PRESETS}
          activePreset={activePreset}
          setActivePreset={setActivePreset}
        />

        {/* SIGNATURE PROPERTIES */}
        <SignatureProperties />

        {/* ARCHITECTURE STORY */}
        <ArchitectureStory />

        {/* CURATED PATRON TESTIMONIAL (AUTO-CHANGING SLIDER) */}
        <TestimonialSlider />

        {/* PROJECT SHOWCASE */}
        <ProjectShowcase />

        {/* STATISTICS */}
        <Statistics />

        {/* CONTACT & PRIVATE CONSULTATION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
