import React from 'react';
import { HardHat, Hammer, Wrench, ShieldCheck, CheckCircle2, PhoneCall, Ruler, Layers } from 'lucide-react';

const SERVICES_LIST = [
  {
    icon: Hammer,
    title: 'Civil & Structural Building',
    desc: 'RCC framework, foundation excavations, blockwork, plastering, and multi-story structural construction.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
  {
    icon: Ruler,
    title: 'Villa Construction & Extensions',
    desc: 'Turnkey residential villas from blueprint drawings to key handover with UAE municipality approval compliance.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
  },
  {
    icon: Layers,
    title: 'Turnkey Interior Fit-Outs',
    desc: 'Gypsum false ceilings, marble and porcelain tiling, glass partitions, and executive office fit-outs.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
  {
    icon: Wrench,
    title: 'MEP & Plumbing Installation',
    desc: 'Full electrical cabling, distribution boards, HVAC air conditioning ducting, and sanitary plumbing networks.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
];

export const ConstructionSection = () => {
  return (
    <section id="construction" className="py-24 bg-[#0A0F1D]/80 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-3">
              <HardHat className="w-3.5 h-3.5" />
              <span>DIVISION 02: CIVIL CONTRACTING & CONSTRUCTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Turnkey <span className="blue-gradient-text">Construction</span> Solutions
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              From foundational groundworks to completed architectural structures, we manage quality building and renovation projects in the UAE.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="tel:0564321798"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Free Project Quote: 0564321798</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_LIST.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-3xl">
                <div className={`w-12 h-12 rounded-2xl ${srv.bg} ${srv.border} border flex items-center justify-center ${srv.color} mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Completed Building Highlights */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-bold text-white">Completed Project Standards</h3>
            <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">UAE Municipality Compliant</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop"
                alt="Reinforced Concrete Structure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-blue-400 uppercase">Civil Engineering</span>
                <h4 className="font-display text-xl font-bold text-white mt-1">High-Precision Structural Framing</h4>
                <p className="text-xs text-gray-300 mt-1">Engineered concrete foundation and safety adherence.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                alt="Architectural Construction"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-amber-400 uppercase">Commercial & Villas</span>
                <h4 className="font-display text-xl font-bold text-white mt-1">Modern Architectural Finishing</h4>
                <p className="text-xs text-gray-300 mt-1">Premium exterior cladding and luxury facade execution.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                alt="On-Site Quality Control"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-emerald-400 uppercase">Site Supervision</span>
                <h4 className="font-display text-xl font-bold text-white mt-1">Certified Safety & On-Time Handover</h4>
                <p className="text-xs text-gray-300 mt-1">Professional site engineers tracking daily milestone progress.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
