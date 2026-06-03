import React from 'react';
import { Compass, ShieldAlert, Check, Calendar, HelpCircle, PhoneCall, Heart, Users } from 'lucide-react';
import { CARS } from '../data';
import { Car } from '../types';

interface TharRentalProps {
  triggerCarBooking: (car: Car) => void;
  setActiveTab: (tab: any) => void;
  setActiveCarId: (id: string) => void;
}

export default function TharRental({ triggerCarBooking, setActiveTab, setActiveCarId }: TharRentalProps) {
  // Extract and showcase the Thar models
  const tharCars = CARS.filter(c => c.id.includes('thar'));

  const handleBookNow = (car: Car) => {
    triggerCarBooking(car);
  };

  const handleViewSpecs = (id: string) => {
    setActiveCarId(id);
    setActiveTab('car-detail');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Premium Adventure Hero / Header Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-red-600/10 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2 font-mono">🚙 Premium Adventure Rental Goa</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none font-display mb-4">
            Mahindra Thar 4x4 Self-Drive Rental In Goa
          </h1>
          <p className="text-sm md:text-base text-slate-350 leading-relaxed font-sans mb-6">
            Experience Goa with absolute authority. Feel the coastal breeze with our open convertible soft-top or cruise comfortably in our premium diesel hard-tops. Perfect for exploring Cola Beach, Dudhsagar trails, and rustic Goan hinterlands.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Real 4x4 Transfer Case</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Convertible &amp; Hardtop Available</span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-slate-300">✓ Verified Yellow Commercial Plates</span>
          </div>
        </div>
      </div>

      {/* Grid: Thar Options */}
      <h2 className="text-xl md:text-2xl font-black text-white mb-6 font-display">Select Your Thar Rental Variant</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {tharCars.map((car) => (
          <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="h-56 relative overflow-hidden bg-slate-950">
                <img 
                  src={car.imageUrl} 
                  alt={car.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-605 bg-red-600 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                  {car.transmission} Transmission
                </span>
                <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-orange-400 border border-slate-800 text-xs font-bold font-mono px-3 py-1.5 rounded-xl">
                  ₹{car.pricePerDay}/Day
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-black text-white font-display mb-2">{car.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-sans">
                  The ultimate off-road icon. Built to dominate any terrain while ensuring absolute creature comfort on highway cruises. Runs on highly powerful {car.fuelType} fuel.
                </p>

                {/* Spec Indicators */}
                <div className="grid grid-cols-3 gap-2 py-3 bg-slate-950/50 p-2.5 rounded-2xl border border-slate-850 text-center mb-4 text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-mono">Transmission</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.transmission}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-mono">Fuel Class</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.fuelType}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-mono">Passengers</span>
                    <strong className="text-slate-200 mt-0.5 block">{car.seats} Adults</strong>
                  </div>
                </div>

                {/* Specific features checklist */}
                <div className="space-y-2 mt-4 text-[11px] text-slate-350">
                  {car.features.slice(0, 4).map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="bg-red-500/10 p-0.5 rounded border border-red-500/15 shrink-0">
                        <Check className="w-3 text-red-400" />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 pt-0 border-t border-slate-950 flex gap-3 text-xs mt-4">
              <button 
                onClick={() => handleViewSpecs(car.id)}
                className="flex-1 bg-slate-950 hover:bg-slate-850 hover:text-white border border-slate-800 py-3 rounded-xl font-bold cursor-pointer text-center text-slate-300"
              >
                Full Tech Specs
              </button>
              <button 
                onClick={() => handleBookNow(car)}
                className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black py-3 rounded-xl uppercase tracking-wider cursor-pointer text-center"
              >
                Instant Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Adventure Content: Why Rent a Thar in Goa */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-12">
        <h3 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
          <Compass className="w-5 h-5 text-red-500" />
          The Ultimate Thar Roadtrip Checklist in Goa
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
          Going beyond Calangute beach? The Mahindra Thar 4x4 allows you to uncover hidden elements of Goa that normal budget hatchbacks cannot reach due to rugged mountain tracks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
          <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">Cola Beach Freshwater Lagoon</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Cola Beach requires driving down a steep, unpaved off-road path with highly uneven rocky terrain. The Thar's 226mm massive ground clearance guards you completely against underbody damages.
            </p>
          </div>
          <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">Netravali &amp; Dudhsagar Margins</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Tackling the Western Ghat border crossings or mud-tracks in wildlife sanctuaries requires heavy-duty torque. Our diesel turbo Thar 4x4 generates incredible traction on steep climbs with ease.
            </p>
          </div>
          <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl">
            <h4 className="font-bold text-white mb-1.5">Manohar Mopa Terminal Transit</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Cruising down from the Mopa NH-66 highway stretch to the beach belts takes massive pride inside a black Thar. All our vehicles pass full RTO verification so you have zero tourist challan stresses.
            </p>
          </div>
        </div>
      </div>

      {/* Safety Warning Panel */}
      <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center">
        <ShieldAlert className="w-12 h-12 text-red-400 shrink-0" />
        <div>
          <h4 className="text-base font-bold text-white mb-1 font-display">Goa Police Crucial Warning: Sand Beds are Strictly Illegal</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Under Goa RTO and High Court directives, driving any motorized vehicle directly onto beach sand beds is class-action illegal. It can get your hired Thar impounded instantly by beach police patrols and results in a dynamic 20,000 INR fine. Please use our Thar to reach cliff boundaries and official village parking bays, but keep the tires off the actual beach sands. Let's protect Goa's fragile coastlines!
          </p>
        </div>
      </div>

    </div>
  );
}
