import React from 'react';
import { Sparkles, Shield, Key, Eye, HelpCircle, PhoneCall, Check } from 'lucide-react';
import { CARS } from '../data';
import { Car } from '../types';

interface LuxuryRentalProps {
  triggerCarBooking: (car: Car) => void;
  setActiveTab: (tab: any) => void;
  setActiveCarId: (id: string) => void;
}

export default function LuxuryRental({ triggerCarBooking, setActiveTab, setActiveCarId }: LuxuryRentalProps) {
  // Extract premium luxury cars (like Creta, Baleno Alpha, any other higher-rate vehicles)
  const luxuryCars = CARS.filter(c => c.pricePerDay >= 1700 && !c.id.includes('thar'));

  const handleBookNow = (car: Car) => {
    triggerCarBooking(car);
  };

  const handleViewSpecs = (id: string) => {
    setActiveCarId(id);
    setActiveTab('car-detail');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Luxury Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2 font-mono">👑 Executive &amp; Luxury Class Rentals</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-display mb-4">
            Luxury &amp; Premium Self-Drive Cars In Goa
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans mb-6">
            Make an entrance at Goa's premium casinos, high-end coastal resorts, and gourmet culinary estates. Our curated luxury line offers elite visual styling, executive cabins, fully loaded automatics, and smart connectivity.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Spotless Leather Interiors</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Tech-Ready Automatic Trims</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Premium Sound &amp; Sunroofs</span>
          </div>
        </div>
      </div>

      {/* Luxury Vehicles Grid */}
      <h2 className="text-xl md:text-2xl font-black text-white mb-6 font-display">Select Premium SUV or Executive Hatchback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {luxuryCars.map((car) => (
          <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="h-48 relative overflow-hidden bg-slate-950">
                <img 
                  src={car.imageUrl} 
                  alt={car.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  {car.category} • Premium
                </span>
                <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-orange-400 border border-slate-800 text-xs font-bold font-mono px-3 py-1.5 rounded-xl">
                  ₹{car.pricePerDay}/Day
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-white font-display mb-2">{car.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-sans">
                  Impeccable visual presence and superior highway aerodynamics. Perfect for traveling in elegance with a strong {car.fuelType} motor.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-2 bg-slate-950/40 rounded-xl text-center mb-4 text-[10px] font-semibold border border-slate-850/60">
                  <div>
                    <span className="text-slate-500 block uppercase font-mono">Transmission</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.transmission}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono">Fuel</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.fuelType}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono">Capacity</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.seats} Seats</strong>
                  </div>
                </div>

                {/* Features Checkbox */}
                <div className="space-y-1.5 text-[11px] text-slate-400">
                  {car.features.slice(0, 3).map(f => (
                    <div key={f} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
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
                Specifications
              </button>
              <button 
                onClick={() => handleBookNow(car)}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Book Premium
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury Features & Standard Services */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-12">
        <h3 className="text-base font-extrabold text-white mb-6 font-display flex items-center gap-2">
          <Sparkles className="text-amber-500 w-5 h-5" />
          The White-Glove Handover Services Included in All Luxury Bookings
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
          <div className="flex gap-4">
            <div className="bg-amber-500/10 w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/20 shrink-0">
              <Key className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">VIP Airport Handovers Counter Side</h4>
              <p className="text-slate-400 leading-relaxed">
                Skip the lines. Our VIP service executive delivers the car adjacent to arrival terminal pickup lanes in Manohar Airport Mopa and Dabolim with active GPS tracking and documents organized in less than 4 minutes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-amber-500/10 w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/20 shrink-0">
              <Shield className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">100% Spotless Sterilized Cabin</h4>
              <p className="text-slate-400 leading-relaxed">
                Prior to your key handover, our luxury sedans and SUVs undergo deep wet-vacuum leather cleansing and digital air fragrance sterilization. Every cabin feels, looks, and smells pristine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Help Desk */}
      <div className="bg-gradient-to-t from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-center max-w-2xl mx-auto">
        <h3 className="text-base font-bold text-white mb-1 font-display">Planning a VIP Event or Wedding Fleet in Goa?</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
          Reach our dedicated operations desk on WhatsApp for custom group booking quotations or long-term multi-vehicle pricing.
        </p>
        <a 
          href="https://wa.me/916287168644?text=Hi%20Go%20Goa%20Premium%20Desk!%20I%20want%20to%20discuss%20a%20consolidated%20luxury%20car%20booking%20or%20wedding%20SUV%20package."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl uppercase tracking-wider text-xs transition-transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Connect with Premium Desk</span>
        </a>
      </div>

    </div>
  );
}
