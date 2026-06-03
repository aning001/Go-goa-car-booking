import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface AttractionsProps {
  setActiveTab: (tab: 'home' | 'fleet' | 'locations' | 'attractions' | 'faq' | 'contact') => void;
}

export default function Attractions({ setActiveTab }: AttractionsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-left space-y-12 animate-fade-in text-slate-350">
      
      {/* Header Info */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="z-10 text-left max-w-2xl space-y-3">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono">Traveler's Guide & Tips</span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display">Explore Goa: Must-Visit Tourist Places</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Make the most of your vacation with our custom curated Goan destination guide. Read these handpicked travel articles to plan your itinerary. Use our seamless internal links to compare vehicle rates, reserve your favorite self-drive ride, and drive off to these magnificent locations.
          </p>
        </div>
        <div className="z-10 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 max-w-sm shrink-0 text-left">
          <span className="text-orange-500 font-extrabold font-mono text-[10px] uppercase block mb-1">🔥 Instant Booking Advantage</span>
          <p className="text-xs text-slate-350 leading-relaxed">
            Avoid local transport stress. Pick up your self-drive key directly at <strong className="text-white">Counter 15, Manohar international airport, Mopa, Kasarvarne, Goa 403512</strong> and start driving instantly.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-red-600/10 opacity-30 pointer-events-none" />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Article 1: Mopa Airport & North Goa Gateway */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between overflow-hidden group">
          <div>
            {/* Image Banner */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=700" 
                alt="Scenic Pernem Road" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-4 left-4 bg-orange-500/90 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider font-mono">Manohar Mopa Route</span>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-500/10 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono border border-orange-500/15">Northern Gateway</span>
                <span className="text-xs text-slate-500 font-mono">5 Min Read</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white font-display">Manohar International Airport (Mopa) & Scenic Pernem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                As the new high-tech entryway into North Goa, Manohar International Airport at Mopa is perfectly located close to northern beach presidencies like Arambol, Mandrem, Ashwem, and Morjim. Pernem is rich in raw natural beauty, ancient temples, and vast empty roads that provide an excellent driving experience.
              </p>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 my-2">
                <h4 className="text-xs font-bold text-slate-200 mb-1">Smart Route Guide & Insider Tip:</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Instead of paying extremely high local taxi charges at the arrivals gate, opting for an immediate, pre-booked <button onClick={() => { setActiveTab('home'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">car rental in mopa airport</button> is the smartest option for modern travelers. You can pick up your keys right at our desk at <strong className="text-slate-200 font-bold text-[10.5px]">Counter 15, Manohar international airport, Mopa, Kasarvarne, Goa 403512</strong> and embark on a hassle-free journey across Pernem right away.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs mt-4">
            <span className="text-slate-500 font-mono text-[11px]">Keywords: mopa airport, car rental in mopa airport</span>
            <button onClick={() => { setActiveTab('home'); }} className="text-orange-450 font-bold hover:text-orange-400 flex items-center gap-1 transition-colors cursor-pointer">
              <span>Book Mopa Delivery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 2: Baga, Calangute & Candolim Coastline */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between overflow-hidden group">
          <div>
            {/* Image Banner */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=700" 
                alt="Goa Sandy Beach Coastline" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-4 left-4 bg-orange-500/90 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider font-mono">Baga Beach Belt</span>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-500/10 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono border border-orange-500/15">Dynamic Coastline</span>
                <span className="text-xs text-slate-500 font-mono">4 Min Read</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white font-display">Baga, Calangute & Candolim: The Buzzing Beach Belt</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Known as the heart of Goa's tourism scene, this iconic coastline features golden sandy beaches, colorful shacks, buzzing night markets, and endless watersports activities. Driving through Calangute’s lanes gives you effortless access to legendary party capitals like Tito’s Lane, Club Cabana, and peaceful sunset points over Sinquerim Fort.
              </p>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 my-2">
                <h4 className="text-xs font-bold text-slate-200 mb-1">Smart Route Guide & Insider Tip:</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Traffic around beaches can become congested, which makes having complete command over your schedule a necessity. Availing a premium, certified <button onClick={() => { setActiveTab('fleet'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">self drive car rental in goa</button> allows you to explore these tourist hotspots effortlessly. Simply check our interactive, zero-bias <button onClick={() => { setActiveTab('fleet'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">fleet compare list</button>, reserve a compact hatchback or a commanding Mahindra Thar 4x4, and enjoy high-performance coastal cruising.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs mt-4">
            <span className="text-slate-500 font-mono text-[11px]">Keywords: car rental in goa, self drive car rental in goa</span>
            <button onClick={() => { setActiveTab('fleet'); }} className="text-orange-455 font-bold hover:text-orange-400 flex items-center gap-1 transition-colors cursor-pointer">
              <span>View Fleet Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 3: Heritage Tour of Panaji and Old Goa churches */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between overflow-hidden group">
          <div>
            {/* Image Banner */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&q=80&w=700" 
                alt="Latin Quarter Fontainhas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-4 left-4 bg-orange-500/90 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider font-mono">Fontainhas Latin Walkway</span>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-500/10 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono border border-orange-500/15">Culture & Heritage</span>
                <span className="text-xs text-slate-500 font-mono">6 Min Read</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white font-display">Panaji Latin Quarter & Historic Basilica of Old Goa</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step back in time by wandering across Fontainhas, the stunning Portuguese Latin Quarter of Panaji featuring pastel-hued traditional villas, boutique art galleries, and quaint cafes. Continue your heritage exploration to Old Goa to marvel at UNESCO World Heritage sites including the grand Basilica of Bom Jesus and Se Cathedral.
              </p>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 my-2">
                <h4 className="text-xs font-bold text-slate-200 mb-1">Smart Route Guide & Insider Tip:</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Families traveling on a culture tour need comfortable, spacious, air-conditioned transport. Renting a direct, cost-efficient <button onClick={() => { setActiveTab('locations'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">car rental in goa</button> ensures that you never have to stand around waiting for expensive cabs or public buses. Check out our physical delivery options near the capital in our <button onClick={() => { setActiveTab('locations'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">locations roadmap page</button> to arrange a prompt handover.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs mt-4">
            <span className="text-slate-500 font-mono text-[11px]">Keywords: car rental in goa</span>
            <button onClick={() => { setActiveTab('locations'); }} className="text-orange-450 font-bold hover:text-orange-400 flex items-center gap-1 transition-colors cursor-pointer">
              <span>View Pick-Up Locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article 4: South Goa Pristine Escapes */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between overflow-hidden group">
          <div>
            {/* Image Banner */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=700" 
                alt="Palolem Peaceful Bay" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"></div>
              <span className="absolute bottom-4 left-4 bg-orange-500/90 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider font-mono">Southern Quiet Bays</span>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-500/10 text-orange-400 text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono border border-orange-500/15">Tranquil Escapes</span>
                <span className="text-xs text-slate-500 font-mono">5 Min Read</span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white font-display">South Goa Peaceful Havens: Colva, Palolem & Cabo de Rama</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If quiet tranquility, pristine white sands, dolphin-spotting boat trips, and scenic cliff vistas appeal to you, South Goa is your paradise. Destinations like Palolem Beach, Agonda, the historical ruins of Cabo de Rama Fort, and the quiet beach of Colva present an exquisite, unhurried escape from daily chaotic city life.
              </p>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 my-2">
                <h4 className="text-xs font-bold text-slate-200 mb-1">Smart Route Guide & Insider Tip:</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  South Goa's breathtaking beaches are located at a significant distance from North Goa airports. To avoid paying exorbitant, repeating day-taxi rates, pick up a supreme <button onClick={() => { setActiveTab('home'); }} className="text-orange-400 font-bold hover:underline cursor-pointer">self drive car rental in goa</button> that offers unlimited driving kilometers. You can read how our fuel policy coordinates cleanly by visiting our comprehensive <span onClick={() => { setActiveTab('faq'); }} className="text-orange-405 font-extrabold cursor-pointer hover:underline text-orange-400 inline-block font-sans">Frequently Asked Questions (FAQ) desk</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs mt-4">
            <span className="text-slate-500 font-mono text-[11px]">Keywords: self drive car rental in goa</span>
            <button onClick={() => { setActiveTab('faq'); }} className="text-orange-450 font-bold hover:text-orange-400 flex items-center gap-1 transition-colors cursor-pointer">
              <span>Explore Traveling FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Contact CTA */}
      <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 text-center flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
        <div className="text-left space-y-1">
          <h4 className="font-extrabold text-white text-sm font-display">Need a Custom Itinerary Recommendation?</h4>
          <p className="text-xs text-slate-400">Our local travel experts are available 24/7. Drop us a short message on WhatsApp to check live tourist advisories.</p>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://wa.me/916287168644?text=Hi,%20I'm%20planning%20to%20visit%2520tourist%2520places%2520in%2520Goa%20and%20want%2520travel%252520advice." 
            target="_blank" rel="noreferrer" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5 btn-bounce cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>WhatsApp Travel Advice</span>
          </a>
        </div>
      </div>

    </div>
  );
}
