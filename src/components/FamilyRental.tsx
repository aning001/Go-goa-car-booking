import React from 'react';
import { Users, Briefcase, Check, HelpingHand, MapPin, PhoneCall } from 'lucide-react';
import { CARS } from '../data';
import { Car } from '../types';

interface FamilyRentalProps {
  triggerCarBooking: (car: Car) => void;
  setActiveTab: (tab: any) => void;
  setActiveCarId: (id: string) => void;
}

export default function FamilyRental({ triggerCarBooking, setActiveTab, setActiveCarId }: FamilyRentalProps) {
  // Extract 7-seater/SUV models
  const familyCars = CARS.filter(c => c.seats >= 5 && (c.category === 'SUV' || c.id.includes('ertiga') || c.id.includes('innova')));

  const handleBookNow = (car: Car) => {
    triggerCarBooking(car);
  };

  const handleViewSpecs = (id: string) => {
    setActiveCarId(id);
    setActiveTab('car-detail');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-teal-600/10 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2 font-mono">👨‍👩‍👧‍👦 Multi-Passenger &amp; SUV Rentals</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-display mb-4">
            Family 7-Seater &amp; SUV Cars In Goa
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans mb-6">
            Make family bonding vacation memories without split travel. Our pristine multi-seater SUVs and MPVs like the Maruti Ertiga and luxury Toyota Innova Crysta easily absorb large domestic groups and bulk luggage trunks comfortably.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Comfort Seating for 7 Adults</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Extra Roof Carrier Luggage Slots</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Excellent AC Blowers in All Rows</span>
          </div>
        </div>
      </div>

      {/* Grid: Family SUVs / 7-Seaters */}
      <h2 className="text-xl md:text-2xl font-black text-white mb-6 font-display">Select Spacious Multi-Seater SUV or MPV</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {familyCars.map((car) => (
          <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="h-48 relative overflow-hidden bg-slate-950">
                <img 
                  src={car.imageUrl} 
                  alt={car.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-teal-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  💺 {car.seats} Seater Space
                </span>
                <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-orange-400 border border-slate-800 text-xs font-bold font-mono px-3 py-1.5 rounded-xl">
                  ₹{car.pricePerDay}/Day
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-white font-display mb-2">{car.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-sans">
                  The ultimate choice for larger families or friends groups seeking dynamic legroom and heavy engine capabilities. Performs seamlessly on Goan local roads.
                </p>

                {/* Specific features checklists */}
                <div className="grid grid-cols-3 gap-2 py-2 bg-slate-950/40 rounded-xl text-center mb-4 text-[10px] font-semibold border border-slate-850/60">
                  <div className="flex flex-col items-center justify-center">
                    <Users className="w-4.5 h-4.5 text-teal-400 mb-0.5" />
                    <span className="text-slate-200">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-x border-slate-850/80">
                    <Briefcase className="w-4.5 h-4.5 text-teal-400 mb-0.5" />
                    <span className="text-slate-200">{car.luggage} Bags</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-teal-400 font-bold block leading-none">{car.fuelType}</span>
                    <span className="text-[9px] text-slate-500 font-mono mt-1">Fuel Type</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-400">
                  {car.features.slice(0, 3).map(f => (
                    <div key={f} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 pt-0 border-t border-slate-950 flex gap-2 text-xs mt-4">
              <button 
                onClick={() => handleViewSpecs(car.id)}
                className="flex-1 bg-slate-950 hover:bg-slate-850 hover:text-white border border-slate-850 py-2.5 rounded-xl text-slate-400 font-bold transition-colors cursor-pointer"
              >
                Full Specs
              </button>
              <button 
                onClick={() => handleBookNow(car)}
                className="flex-1 bg-teal-600 hover:bg-teal-705 text-white font-black py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Reserve Space
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Helpful Tips Card for multi-passenger trips */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-12">
        <h3 className="text-base font-bold text-white mb-4 font-display flex items-center gap-2">
          <HelpingHand className="text-teal-400 w-5 h-5" />
          Pro Travel Tips For Family Road Trips In Goa
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-slate-400">
          <p className="leading-relaxed">
            <strong className="text-white block mb-1">Mopa &amp; Dabolim Airport Luggage Planning:</strong>
            When 7 adults travel with large suitcases, placing cargo inside the car trunk can compromise the third-row seating. Please let our operations team know in your bookings notes if you demand an external heavy-duty <strong className="text-teal-400">Roof Luggage Carrier</strong>. We offer pre-installed carriers on our Ertigas at nominal flat-rate addons.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white block mb-1">Clean Cabin Rules with Toddlers:</strong>
            We understand children enjoy snacks on the go. To keep prices low for everyone, please avoid spilling aerated soft drinks or oily foods inside the car panels. In case of unintended spillages, request a clean water mop immediately to protect seat leather materials.
          </p>
        </div>
      </div>

      {/* WhatsApp Help CTA */}
      <div className="bg-gradient-to-t from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-center max-w-2xl mx-auto">
        <h3 className="text-base font-bold text-white mb-1 font-display">Need Custom Seating Advice For Your Group?</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
          Reach our family holiday coordinator to find the perfect vehicle matchup.
        </p>
        <a 
          href="https://wa.me/916287168644?text=Hi%20Go%20Goa%252520Family%252520Desk!%20I%20want%2520to%20discuss%207-Seater%20car%20rental%20for%20my%20upcoming%20family%20trip."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-6 py-3 rounded-xl uppercase tracking-wider text-xs transition-transform hover:scale-[1.01] cursor-pointer"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Connect with Family Coordinator</span>
        </a>
      </div>

    </div>
  );
}
