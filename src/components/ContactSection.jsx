import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Calendar, Clock, ShieldCheck, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    residence: 'The Obsidian Pavilion (Palm Jumeirah)',
    date: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    const text = `VIP ARCHITECTURAL VIEWING REQUEST
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Selected Residence: ${form.residence}
Preferred Date: ${form.date || 'Earliest available slot'}
Confidential Notes: ${form.message || 'Please arrange a discreet private showing.'}`;

    const url = `https://wa.me/971564321798?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setSent(false);
    }, 700);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#070A13] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Atelier Invitation */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-gold uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Private Consultation</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.08]">
                Arrange a Private <span className="italic text-gold-light">Viewing</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Residences in our signature portfolio are revealed exclusively through scheduled private walkthroughs. We coordinate confidential site viewings, yacht arrivals, and direct architect sessions for prospective patrons.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Direct Telephone */}
              <a
                href="tel:+971564321798"
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 group hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                    Direct Atelier Line
                  </span>
                  <div className="text-xl font-serif font-medium text-white group-hover:text-gold transition-colors">
                    +971-564-321-798
                  </div>
                  <span className="text-[11px] text-gray-400 font-sans">Helpline: +971-564-321-798</span>
                </div>
              </a>

              {/* Direct WhatsApp */}
              <a
                href="https://wa.me/971564321798"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                    Confidential WhatsApp Concierge
                  </span>
                  <div className="text-xl font-serif font-medium text-white group-hover:text-emerald-400 transition-colors">
                    +971 56 432 1798
                  </div>
                  <span className="text-[11px] text-emerald-400 font-sans">Priority Response Within 15 Minutes</span>
                </div>
              </a>

              {/* Atelier Locations */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                    Private Ateliers
                  </span>
                  <div className="text-sm font-serif text-white">
                    Palm Jumeirah & Marina Plaza, Dubai, UAE
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Full NDA & Privacy Protected Engagement</span>
            </div>
          </div>

          {/* Right: VIP Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Schedule Private Dossier & Tour
                </h3>
                <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30">
                  VIP Access
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alistair Sterling"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. principal@familyoffice.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                      Preferred Viewing Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                    Residence of Interest
                  </label>
                  <select
                    value={form.residence}
                    onChange={(e) => setForm({ ...form, residence: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="The Obsidian Pavilion (Palm Jumeirah)">The Obsidian Pavilion (Palm Jumeirah - $24.5M)</option>
                    <option value="The Glass Monolith (Emirates Hills)">The Glass Monolith (Emirates Hills - $18.2M)</option>
                    <option value="Canal Horizon Sky Villa (Business Bay)">Canal Horizon Sky Villa (Business Bay - $12.8M)</option>
                    <option value="Aura Biophilic Sanctuary (Al Barari)">Aura Biophilic Sanctuary (Al Barari - $15.4M)</option>
                    <option value="Custom Architectural Commission">Custom Architectural Commission (Bespoke Land)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-2 font-sans">
                    Confidential Requirements / Acquisition Notes
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Specify special requirements (yacht docking, subterranean gallery, escrow details)..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white text-black hover:bg-gold font-medium text-xs tracking-widest uppercase shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Private Tour Request</span>
                </button>
              </form>

              {sent && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-bold">
                  Transmitting to Kumara on VIP WhatsApp (+971 56 432 1798)...
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
