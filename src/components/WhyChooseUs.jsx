import React from 'react';
import { ShieldCheck, Gem, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    title: 'Pritzker-Caliber Architectural Direction',
    subtitle: 'Vision Without Compromise',
    desc: 'Collaborations with world-renowned architectural icons. Every residence is engineered with bold structural cantilevers, double-height voids, and sightlines aligned with the celestial solstice.',
    icon: Sparkles,
  },
  {
    num: '02',
    title: 'Monolithic Craft & Rare Natural Stone',
    subtitle: 'Materials Selected at Source',
    desc: 'Uncompromising material selection: hand-cut Roman travertine, Fior di Bosco marble, aircraft-grade matte titanium, and thermowood cedar harvested from sustainably managed Nordic reserves.',
    icon: Gem,
  },
  {
    num: '03',
    title: 'Autonomous Smart Living & Acoustics',
    subtitle: 'Invisible Technology Integration',
    desc: 'Bespoke Lutron Palladiom automation, hospital-grade HEPA air purification, subterranean acoustic dampening, and automated glass panels that glide silently at the touch of a sensor.',
    icon: Sliders,
  },
  {
    num: '04',
    title: 'Discreet Off-Market Acquisition',
    subtitle: 'Absolute Privacy & Confidentiality',
    desc: 'Private viewings arranged under strict non-disclosure. Direct title deed transfer coordination with Dubai Land Department and bespoke escrow security for global family offices.',
    icon: ShieldCheck,
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-28 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gold text-xs font-sans tracking-[0.25em] uppercase mb-4">
            <span>The Atelier Standards</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
            Built Upon <span className="italic text-gold-light">Uncompromising</span> Rigor
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Four guiding tenets that separate typical developer housing from rare architectural commissions that appreciate across generations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-12 rounded-3xl bg-[#090D18]/70 border border-white/10 hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Number Watermark */}
                <span className="absolute top-6 right-8 font-serif text-5xl sm:text-6xl font-light text-white/[0.04] group-hover:text-gold/10 transition-colors pointer-events-none">
                  {item.num}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold font-semibold block mb-2">
                  {item.subtitle}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400">
                  <span className="text-[10px] tracking-wider uppercase text-gray-400">Verified Quality Guarantee</span>
                  <CheckCircle2 className="w-4 h-4 text-gold/80" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
