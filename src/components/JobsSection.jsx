import React from 'react';
import { Briefcase, Send, Users, ShieldCheck, MapPin, DollarSign, Clock, ArrowRight, Building } from 'lucide-react';

const JOBS_LIST = [
  {
    id: 1,
    title: 'Civil Site Foreman & Supervisor',
    location: 'Dubai & Sharjah',
    salary: 'AED 3,800 - 5,200 / month',
    type: 'Full Time',
    badge: 'Urgent Hiring',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    desc: '3+ years UAE construction experience. Supervising site crews, reading architectural drawings, and reporting daily progress.',
    benefits: 'Company Visa + Accommodation + Health Insurance',
  },
  {
    id: 2,
    title: 'Certified Electricians & Plumbers',
    location: 'Dubai, UAE',
    salary: 'AED 2,400 - 3,500 + Overtime',
    type: 'Immediate Joining',
    badge: '15 Vacancies',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    desc: 'MEP installation for residential buildings. Conduit laying, DB panel dressing, cable pulling, and sanitary pipe fitting.',
    benefits: 'Transport + Overtime Pay + Employment Visa',
  },
  {
    id: 3,
    title: 'Heavy Vehicle & Equipment Driver',
    location: 'Abu Dhabi / Dubai',
    salary: 'AED 3,000 - 4,200 / month',
    type: 'Full Time',
    badge: 'Valid UAE License',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    desc: 'Operating heavy trucks, tippers, or machinery transport between construction yards and project sites across the Emirates.',
    benefits: 'Direct Visa + Annual Leave + Air Ticket',
  },
  {
    id: 4,
    title: 'Real Estate Sales Consultant',
    location: 'Business Bay, Dubai',
    salary: 'AED 4,000 + Lucrative Commission',
    type: 'High Earning Potential',
    badge: 'Immediate',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    desc: 'Managing client leads for flat sales, organizing site viewings, client negotiation, and closing property sale transactions.',
    benefits: 'High Commission Structure + Mobile Allowance',
  },
  {
    id: 5,
    title: 'General Construction Helpers',
    location: 'Dubai & Sharjah',
    salary: 'AED 1,400 - 1,800 + Overtime',
    type: 'Bulk Recruitment',
    badge: 'Freshers Welcome',
    badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    desc: 'Material handling, assisting carpenters, masons, and general site cleanup. Direct recruitment with fast visa processing.',
    benefits: 'Accommodation + Transportation + Food Provided',
  },
  {
    id: 6,
    title: 'Tile Mason & Gypsum Carpenter',
    location: 'Dubai Sites',
    salary: 'AED 2,500 - 3,400 + Overtime',
    type: 'Full Time',
    badge: 'Skill Test Required',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    desc: 'Precision porcelain floor tiling, wall cladding, gypsum false ceiling frameworks, and decorative plaster moldings.',
    benefits: 'Visa + Safety Kit + Overtime Allowance',
  },
];

export const JobsSection = () => {
  return (
    <section id="jobs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>DIVISION 03: JOBS & MANPOWER SUPPLY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Verified <span className="text-emerald-400">UAE Job Vacancies</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
              "Jobs Jobs Jobs" — Direct employment opportunities in Dubai & Sharjah with company visa, fair salaries, and fast onboarding.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="https://wa.me/971564321798?text=Hello%20Kumara,%20I%20am%20applying%20for%20a%20job%20in%20UAE.%20Here%20is%20my%20experience%20and%20resume."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Send CV to Kumara on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {JOBS_LIST.map((job) => (
            <div
              key={job.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between border border-gray-800 hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${job.badgeColor}`}>
                    {job.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {job.location}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1.5">{job.title}</h3>
                
                <div className="flex items-center gap-1 text-amber-400 font-bold text-xs mb-3">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{job.salary}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">{job.desc}</p>
              </div>

              <div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-[11px] text-gray-300 mb-4">
                  <span className="font-bold text-white block mb-0.5">Package Includes:</span>
                  {job.benefits}
                </div>

                <a
                  href={`https://wa.me/971564321798?text=${encodeURIComponent(
                    `Hello Kumara, I want to apply for the position: "${job.title}". Please let me know the interview or document submission process.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 text-emerald-400 font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Manpower Supply For Companies Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-[#0C1425] via-[#101A30] to-[#0C1425] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Corporate Client Service</span>
              <h4 className="font-display text-2xl font-bold text-white mt-1">
                Need Manpower Supply for Your Projects in UAE?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl">
                We supply vetted, trade-tested skilled manpower (electricians, plumbers, masons, steel fixers, carpenters, and helpers) on flexible monthly or project-based agreements.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0564321798"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Call for Manpower: 0564321798
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
