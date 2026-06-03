import React from 'react';
import { Shield, Sparkles, MapPin, Users, Heart, ClipboardCheck } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in text-slate-350 text-left">
      
      {/* Hero Banner Section for About Page */}
      <div className="relative rounded-3xl overflow-hidden mb-16 bg-gradient-to-r from-orange-600/20 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2 font-mono">Our Goa Legacy</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4">
            Reliable Self-Drive Car Rentals In Goa Since Since 2018
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans mb-6">
            Go Goa Car Rental is Goa's premier homegrown booking desk dedicated to making your travel seamless. From Mopa airport terminal parking to standard Calangute hotels, we offer spotless vehicles at unbeatable Rates.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-bold font-mono text-slate-300">
              ✓ No Hidden Charges
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-bold font-mono text-slate-300">
              ✓ Spotless Vehicles
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg font-bold font-mono text-slate-300">
              ✓ 24/7 Roadside Help
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-slate-705 transition-all">
          <div className="bg-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-orange-500/20">
            <Shield className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-display">100% Transparency</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            We list precise rental durations and security deposits. Refund processing is done instantly on drop-off. No surprise taxes or tourist markups.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-slate-705 transition-all">
          <div className="bg-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-orange-500/20">
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-display">Spotless Car Cleanliness</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Every car inside the Go Goa fleet passes dynamic vacuum sterilization and thorough suspension audits before handover, ensuring mechanical trust.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-slate-705 transition-all">
          <div className="bg-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-orange-500/20">
            <Users className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-display">Friendly Local Crew</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Our multi-lingual ground staff of drivers speak Hindi, English, Konkani and Marathi, supporting you with local tourist guidance for your trip.
          </p>
        </div>
      </div>

      {/* Two Columns Section: Our Story & Ground Fleet Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 font-mono block mb-2">Our Mission</span>
          <h2 className="text-2xl md:text-3.5xl font-black text-white leading-tight font-display mb-4">
            Simplifying Goan Holidays One Happy Mileage at a Time
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
            Renting cars in Goa has historical hassles with localized transport cartels. We founded Go Goa to provide tourists an upfront, professional platform with dynamic pricing and live availability of pristine models like the Mahindra Thar 4x4, Toyota Innova Crysta, and Swift manuals/AMTs.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Whether arriving through the scenic Western Ghats railway hubs or flights into the state-of-the-art Manohar Mopa Airport, our ground staff greets you outside terminal gates to hand over the key with minimal paperwork in less than 5 minutes.
          </p>
          
          <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-850 flex gap-4">
            <div className="text-center bg-slate-950 px-4 py-2 border border-slate-800 rounded-xl flex-1">
              <span className="text-xl font-black text-white font-mono block">15,000+</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Trips Served</span>
            </div>
            <div className="text-center bg-slate-950 px-4 py-2 border border-slate-800 rounded-xl flex-1">
              <span className="text-xl font-black text-orange-400 font-mono block">4.9★</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Google Rating</span>
            </div>
            <div className="text-center bg-slate-950 px-4 py-2 border border-slate-800 rounded-xl flex-1">
              <span className="text-xl font-black text-white font-mono block">100%</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Eco Verified</span>
            </div>
          </div>
        </div>

        {/* Story Illustration Grid */}
        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 flex flex-col justify-end bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to top, rgba(2, 6, 23, 0.95), rgba(2, 6, 23, 0.4)), url("https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format" )' }}>
          <div className="relative z-15 text-left">
            <Heart className="w-8 h-8 text-orange-500 mb-3" />
            <h4 className="text-lg font-extrabold text-white font-display mb-1">Born & Raised in Goa</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              We own 100% of our fleet vehicle certificates (yellow commercial plates), protecting you from local transport checks and licensing fines.
            </p>
          </div>
        </div>
      </div>

      {/* Location Directory Desk */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
        <h3 className="text-base font-extrabold text-white mb-2 font-display">Core Delivery Hubs</h3>
        <p className="text-xs text-slate-400 mb-6 font-sans">
          You can request pick up or drops at any of our official offices below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-850">
            <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest font-mono">Main Airport Counter</span>
            <h4 className="text-xs font-black text-white mt-1 mb-2 font-display">Mopa International Terminal</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">{OFFICE_CONTACT.mainAddress}</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-850">
            <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest font-mono">North Goa Office Hub</span>
            <h4 className="text-xs font-black text-white mt-1 mb-2 font-display">Calangute Beach Center</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">{OFFICE_CONTACT.calanguteAddress}</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-850">
            <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest font-mono">South Goa Counter</span>
            <h4 className="text-xs font-black text-white mt-1 mb-2 font-display">Dabolim Arrivals Desk</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">{OFFICE_CONTACT.dabolimAddress}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
