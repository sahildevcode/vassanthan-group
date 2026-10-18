import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const BackgroundParallax = () => {
  const bgRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Subtle breathing animation for the background building
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <>
      {/* FIXED BACKGROUND IMAGE: Completed modern architectural tower / skyscraper */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=85&w=2000&auto=format&fit=crop')`,
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      {/* LUXURY DARK OVERLAY: Semi-transparent so the completed building stays visible while foreground scrolls over */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#070A11]/90 via-[#070A11]/82 to-[#070A11]/92 backdrop-blur-[1px] pointer-events-none" />

      {/* AMBIENT GLOW LIGHTS */}
      <div
        ref={glowRef}
        className="fixed top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10"
      />
      <div className="fixed bottom-10 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
    </>
  );
};
