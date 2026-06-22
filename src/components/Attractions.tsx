import React from 'react';
import { ArrowRight, MessageSquare, Compass, Shield, MapPin, Sparkles } from 'lucide-react';

interface AttractionsProps {
  setActiveTab: (tab: 'home' | 'fleet' | 'locations' | 'attractions' | 'faq' | 'contact') => void;
}

export default function Attractions({ setActiveTab }: AttractionsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-left space-y-8 animate-fade-in text-slate-350">
      
      {/* Header Info - Highly Compact */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 md:p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-slate-800">
        <div className="z-10 text-left max-w-xl space-y-1.5">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Goa Tourist Destination Index</span>
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight font-display">Must-Visit Goa Attractions</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
            A quick curated checklist for your self-drive path. Click any location guide to match perfect rental wheels.
          </p>
        </div>
        <div className="z-10 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 max-w-xs shrink-0 text-left">
          <span className="text-orange-500 font-extrabold font-mono text-[9px] uppercase tracking-wider block mb-0.5">🔥 Airport Key Pickup</span>
          <p className="text-[11px] text-slate-400 leading-normal">
            Keys handed over instantly at <strong className="text-white font-semibold">Counter 15, Manohar Mopa Airport (VXD)</strong> or Dabolim 24/7.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/5 to-transparent pointer-events-none" />
      </div>

      {/* Articles Grid - Beautifully Compact Horizontal/Vertical Hybrid Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Article 1: Mopa Airport & North Goa Gateway */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800/60 text-left flex flex-col justify-between overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
          <div>
            {/* Extremely compact Aspect-Video Banner */}
            <div className="relative h-32 md:h-36 w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600" 
                alt="Scenic Pernem Road" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-2.5 left-3 bg-orange-500/90 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                North Goa Belt
              </span>
            </div>

            <div className="p-4 md:p-5 space-y-2.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-orange-400 font-bold uppercase tracking-wider font-mono bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/15">
                  Mopa &amp; Pernem
                </span>
                <span className="text-slate-500 font-mono">3 Mins</span>
              </div>
              
              <h3 className="text-sm md:text-base font-extrabold text-white font-display leading-tight">
                Manohar International Airport &amp; Pernem Routes
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                High-tech entryway perfect for northern shores like Arambol, Mandrem, and Morjim. Experience scenic local roads, pristine villages, and smooth, empty highways.
              </p>

              {/* Minimalist Tip Banner */}
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] leading-normal text-slate-400 flex gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p>
                  Avoid costly Mopa taxis. Pre-book a <button onClick={() => { setActiveTab('home'); }} className="text-orange-405 font-bold hover:underline cursor-pointer">car rental in mopa airport</button> to pick up keys immediately inside arrival's lobby.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-5 pb-4 pt-1.5 border-t border-slate-800/40 flex items-center justify-between text-[11px] gap-2 mt-2">
            <span className="text-slate-500 font-mono text-[10px] truncate max-w-[180px]">Mopa Airport Desk</span>
            <button onClick={() => { setActiveTab('home'); }} className="text-orange-400 font-bold hover:text-orange-350 flex items-center gap-1 shrink-0 cursor-pointer">
              <span>Book Mopa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 2: Baga, Calangute & Candolim Coastline */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800/60 text-left flex flex-col justify-between overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
          <div>
            {/* Extremely compact Aspect-Video Banner */}
            <div className="relative h-32 md:h-36 w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600" 
                alt="Goa Sandy Beach Coastline" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-2.5 left-3 bg-orange-500/90 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                Baga Beach Belt
              </span>
            </div>

            <div className="p-4 md:p-5 space-y-2.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-orange-400 font-bold uppercase tracking-wider font-mono bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/15">
                  Coastal Hub
                </span>
                <span className="text-slate-500 font-mono">3 Mins</span>
              </div>
              
              <h3 className="text-sm md:text-base font-extrabold text-white font-display leading-tight">
                Baga, Calangute &amp; Candolim Coastlines
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                The thriving tourism capital of Goa. Golden beaches, local water-sports, local markets, and nightlife hotspots like Tito's lane are easily accessible.
              </p>

              {/* Minimalist Tip Banner */}
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] leading-normal text-slate-400 flex gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p>
                  Traffic gets busy here. Reserve a compact <button onClick={() => { setActiveTab('fleet'); }} className="text-orange-405 font-bold hover:underline cursor-pointer">self drive car rental in goa</button> from our fleet to easily park near premium shacks.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-5 pb-4 pt-1.5 border-t border-slate-800/40 flex items-center justify-between text-[11px] gap-2 mt-2">
            <span className="text-slate-500 font-mono text-[10px] truncate max-w-[180px]">Calangute Beach Desk</span>
            <button onClick={() => { setActiveTab('fleet'); }} className="text-orange-400 font-bold hover:text-orange-350 flex items-center gap-1 shrink-0 cursor-pointer">
              <span>View Cars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 3: Heritage Tour of Panaji and Old Goa churches */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800/60 text-left flex flex-col justify-between overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
          <div>
            {/* Extremely compact Aspect-Video Banner */}
            <div className="relative h-32 md:h-36 w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&q=80&w=600" 
                alt="Latin Quarter Fontainhas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-2.5 left-3 bg-orange-500/90 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                Heritage Route
              </span>
            </div>

            <div className="p-4 md:p-5 space-y-2.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-orange-400 font-bold uppercase tracking-wider font-mono bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/15">
                  Panaji Culture
                </span>
                <span className="text-slate-500 font-mono">4 Mins</span>
              </div>
              
              <h3 className="text-sm md:text-base font-extrabold text-white font-display leading-tight">
                Latin Quarter &amp; UNESCO Churches
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Explore colorful traditional Portuguese streets in Fontainhas neighborhood and spectacular historical landmarks like Se Cathedral and Bom Jesus churches.
              </p>

              {/* Minimalist Tip Banner */}
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] leading-normal text-slate-400 flex gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p>
                  Have bags or traveling with family? A budget-friendly <button onClick={() => { setActiveTab('locations'); }} className="text-orange-450 font-bold hover:underline cursor-pointer">car rental in goa</button> avoids long waits for public transit.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-5 pb-4 pt-1.5 border-t border-slate-800/40 flex items-center justify-between text-[11px] gap-2 mt-2">
            <span className="text-slate-500 font-mono text-[10px] truncate max-w-[180px]">Panaji Location Map</span>
            <button onClick={() => { setActiveTab('locations'); }} className="text-orange-400 font-bold hover:text-orange-350 flex items-center gap-1 shrink-0 cursor-pointer">
              <span>View Offices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 4: South Goa Pristine Escapes */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800/60 text-left flex flex-col justify-between overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
          <div>
            {/* Extremely compact Aspect-Video Banner */}
            <div className="relative h-32 md:h-36 w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=600" 
                alt="Palolem Peaceful Bay" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-2.5 left-3 bg-orange-500/90 text-white text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-wider font-mono">
                South Goa Coast
              </span>
            </div>

            <div className="p-4 md:p-5 space-y-2.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-orange-400 font-bold uppercase tracking-wider font-mono bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/15">
                  Quiet Escapes
                </span>
                <span className="text-slate-500 font-mono">3 Mins</span>
              </div>
              
              <h3 className="text-sm md:text-base font-extrabold text-white font-display leading-tight">
                South Goa Havens: Palolem &amp; Cabo de Rama
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Experience stunning cliff walks, clear blue water bays, soft sands, and dolphins in Palolem, Colva, Agonda, or the cliffs of Cabo de Rama fortress.
              </p>

              {/* Minimalist Tip Banner */}
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] leading-normal text-slate-400 flex gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p>
                  These beaches are far down south. Save money on daily cabs with an unlimited mileage <button onClick={() => { setActiveTab('faq'); }} className="text-orange-405 font-bold hover:underline cursor-pointer">self drive car rental in goa</button>.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-5 pb-4 pt-1.5 border-t border-slate-800/40 flex items-center justify-between text-[11px] gap-2 mt-2">
            <span className="text-slate-500 font-mono text-[10px] truncate max-w-[180px]">South Goa Support Desk</span>
            <button onClick={() => { setActiveTab('faq'); }} className="text-orange-400 font-bold hover:text-orange-350 flex items-center gap-1 shrink-0 cursor-pointer">
              <span>Read FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Contact CTA - More compact footprint */}
      <div className="bg-slate-900 border border-slate-850 rounded-2xl p-4 md:p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left space-y-0.5">
          <h4 className="font-extrabold text-white text-xs md:text-sm font-display">Need Custom Travel Recommendations?</h4>
          <p className="text-[11px] text-slate-400">Our local travel experts are available 24/7. Shoot us a message on WhatsApp for customized route guidance.</p>
        </div>
        <div className="flex items-center shrink-0">
          <a 
            href="https://wa.me/916287168644?text=Hi,%20I'm%20planning%20to%20visit%2520tourist%2520places%2520in%2520Goa%20and%20want%2520travel%252520advice." 
            target="_blank" rel="noreferrer" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 btn-bounce cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp Travel Advice</span>
          </a>
        </div>
      </div>

    </div>
  );
}
