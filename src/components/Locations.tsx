import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

export default function Locations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">Goa Delivery Map</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Our Delivery Desks &amp; Hubs</h1>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          We operate across Goa. We can drop your self-drive vehicle off right as you arrive at airport gates or railway terminals, and pickup from any major hotel lobby or guest house.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card - Mopa Airport */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800/80 space-y-4">
          <div className="bg-slate-950 text-orange-500 p-3.5 rounded-xl border border-slate-850 inline-block">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-base font-display">New Goa Mopa Airport Terminal (VXD)</h3>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider font-mono mt-1">⭐️ Main Operational Hub (24/7)</p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              {OFFICE_CONTACT.mainAddress}
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 text-[11px] text-slate-400">
            ⚡ <strong className="text-slate-200">Arrivals Pickups:</strong> Our representative greets you right at Arrival Gate lobby, coordinates the digital paperwork check, and handovers keys inside the airport private car park within 5 minutes.
          </div>
        </div>

        {/* Card - Calangute Beach Desk */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800/80 space-y-4">
          <div className="bg-slate-950 text-orange-500 p-3.5 rounded-xl border border-slate-850 inline-block">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-base font-display">Calangute North Goa Office</h3>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider font-mono mt-1">🌴 Coastal Branch Hub</p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              {OFFICE_CONTACT.calanguteAddress}
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 text-[11px] text-slate-400">
            ⚡ <strong className="text-slate-200">Shoreline Deliveries:</strong> Serving Baga, Calangute, Candolim, Sinquerim, Anjuna, Vagator, Arpora, and Nerul. Includes free hotel doorstep drop-offs for rental periods exceeding 3 days.
          </div>
        </div>

        {/* Card - Dabolim Hub */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800/80 space-y-4">
          <div className="bg-slate-950 text-orange-500 p-3.5 rounded-xl border border-slate-850 inline-block">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-base font-display">Goa Dabolim Airport Terminal (GOI)</h3>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider font-mono mt-1">✈️ South Airport Desk</p>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              {OFFICE_CONTACT.dabolimAddress}
            </p>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 text-[11px] text-slate-400">
            ⚡ <strong className="text-slate-200">Reliable Handover Desk:</strong> Serving Vasco da Gama region, Panaji, and South Goa beaches like Colva, Cavelossim, and Margao Railway Station. 24 hours open slots available.
          </div>
        </div>

      </div>

      {/* General location policies timeline list */}
      <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 mt-10">
        <h3 className="font-black text-white text-base mb-6 flex items-center gap-2 font-display">
          <Info className="w-5 h-5 text-orange-500" />
          <span>Goa Regional Delivery Policies</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 leading-relaxed font-sans">
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Mopa &amp; Calangute Areas</h4>
            <p>Absolutely zero delivery surcharges! Drop off and pickups are complimentary within these zones 24/7.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Far North &amp; Deep South Goa</h4>
            <p>For remote areas such as Arambol, Morjim, Mandrem, Palolem, Agonda, or Patnem beaches, a nominal out-of-bounds conveyance fee of ₹500 is charged.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Train Stations delivery</h4>
            <p>Free custom drop-off at Thivim Railway Station (North) or Madgaon Railway Station (South) for active rental durations of 5 days or longer.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
