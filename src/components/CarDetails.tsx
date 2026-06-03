import React from 'react';
import { CARS } from '../data';
import { Car } from '../types';
import { ArrowLeft, Check, Compass, ShieldAlert, Award, Calendar, Users, Eye, HelpCircle, PhoneCall } from 'lucide-react';

interface CarDetailsProps {
  carId: string;
  onBack: () => void;
  triggerCarBooking: (car: Car) => void;
}

export default function CarDetails({ carId, onBack, triggerCarBooking }: CarDetailsProps) {
  const car = CARS.find(c => c.id === carId) || CARS[0];

  // Specific extended specs for matching vehicles dynamically to look very high-fidelity
  const getExtendedSpecs = (id: string) => {
    switch (id) {
      case 'thar-4x4-manual':
      case 'thar-4x4-auto':
      case 'thar-rwd-auto':
        return {
          engine: '2.2L mHawk Turbocharged Diesel / 2.0L mStallion TGDi Petrol',
          power: '130 - 150 BHP @ 3750 RPM',
          clearance: '226 mm (Unladen class-leading clearance)',
          waterWading: '650 mm (Exceptional for monsoon tides)',
          suitability: 'Perfect for exploring Goa\'s rustic interior forest roads, waterfalls, and cliff beaches of Cola / Cabo de Rama.',
          rules: 'No illegal drifting on sandy beach beds (heavy court penalty); return 4x4 low configuration levers to 2H normal position on empty tarmac.',
          classType: 'Adventure Offroad 4x4 Jeep'
        };
      case 'jimny-manual':
        return {
          engine: '1.5L K15B Four-Cylinder Naturally Aspirated Petrol',
          power: '103 BHP @ 6000 RPM',
          clearance: '210 mm (Superior high articulation chassis)',
          waterWading: '400 mm',
          suitability: 'Fantastic compact 4x4 offroader that squeezes easily through narrow Goan village roads and allows high-reach offroad trails.',
          rules: 'Lock hubs properly before getting into heavy muddy paths; do not exceed highway speed guidelines.',
          classType: 'Compact Articulated 4x4 SUV'
        };
      case 'innova-crysta':
        return {
          engine: '2.4L GD-Series Turbo Intercooled Diesel',
          power: '148 BHP @ 3400 RPM',
          clearance: '178 mm (Optimal for standard potholes)',
          waterWading: '300 mm',
          suitability: 'Absolute luxury comfort for premium multi-generation family groups, corporate dignitaries, or long airport luggage transfers.',
          rules: 'Treat captain lounge seats with extreme care; absolute zero pets/liquids on premium leather upholstery to avoid deposit deducts.',
          classType: 'VIP Executive Lounge MPV'
        };
      case 'audi-q3':
      case 'bmw-3':
        return {
          engine: '2.0L TFSI / TwinPower Turbo Four-Cylinder Sport Engine',
          power: '190 BHP - 250 BHP',
          clearance: '140 mm - 170 mm',
          waterWading: '200 mm',
          suitability: 'Elite business executives, luxury retreats, wedding arrivals, and high-status styling across coastal Goa highway roads.',
          rules: '95 Octane petrol highly recommended; strict caution required on deep concrete gutter slopes to protect front bumpers.',
          classType: 'Elite Super Luxury Premium Series'
        };
      case 'fortuner-suv':
        return {
          engine: '2.8L GD-Series Common Rail Turbocharged Diesel',
          power: '201 BHP @ 3400 RPM',
          clearance: '220 mm (Massive commanding ladder frame)',
          waterWading: '700 mm (Best-in-class deep flood wading)',
          suitability: 'The ultimate commanding VIP presence for extreme Goan off-grid terrain, long highways, and large heavy group travels.',
          rules: 'Maintain correct tire pressures; engage H4 modes only on slippery slippery roads.',
          classType: 'Heavyweight Premium SUV'
        };
      case 'seltos-auto':
      case 'scorpio-n':
      case 'scorpio-classic':
        return {
          engine: '1.5L CRDi Turbo Diesel / 2.0L mStallion TGDi engine options',
          power: '115 - 172 BHP',
          clearance: '180 mm - 209 mm',
          waterWading: '350 mm',
          suitability: 'Exceptional cruiser for long family travels, sightseeing, and high-view safe driving across the Western Ghat routes.',
          rules: 'Keep speed lock alerts under 70 km/h; park in designated legal layouts only.',
          classType: 'Mid-Size High Command SUV'
        };
      case 'nexon-ev':
        return {
          engine: 'Ziptron High-Voltage Permanent Magnet Synchronous Motor',
          power: '141 BHP Instant Torque',
          clearance: '205 mm (Optimal electric floor preservation)',
          waterWading: '300 mm',
          suitability: 'Futuristic, zero-pollution, whisper-silent coastal drive with zero engine noise. Perfect for eco-friendly holiday makers.',
          rules: 'Charge at verified fast chargers in Panjim or Calangute; maintain battery level above 15% range.',
          classType: 'Eco-Smart Electric SUV'
        };
      default:
        return {
          engine: '1.2L K-Series DualJet Dual VVT Petrol / Smart Hybrid',
          power: '88.5 BHP @ 6000 RPM',
          clearance: '163 mm - 170 mm',
          waterWading: '150 mm',
          suitability: 'Best compact hatch for navigating chaotic tourist corridors of Calangute-Baga and tight parking layouts of Anjuna beach.',
          rules: 'Speed limit strictly locked under 70 km/h; avoid prolonged clutch riding on steep slopes.',
          classType: 'Budget Family Hatchback'
        };
    }
  };

  const specs = getExtendedSpecs(car.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Return button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 mb-8 bg-slate-900 border border-slate-855 text-slate-400 hover:text-white hover:bg-slate-850 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-800"
      >
        <ArrowLeft className="w-4 h-4 text-orange-500" />
        <span>Back to Fleet Portal</span>
      </button>

      {/* Main Grid: Info columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left column: Image showcase & Spec sheets */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Hero Product Image */}
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-3 shadow-2xl">
            <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
              <img 
                src={car.imageUrl} 
                alt={car.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                {car.transmission} Handover
              </div>
              {car.isPopular && (
                <span className="absolute top-4 right-4 bg-amber-500/90 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  🔥 Best Seller
                </span>
              )}
            </div>
            
            {/* Quick spec indicators pills bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Transmission</span>
                <strong className="text-xs text-white">{car.transmission}</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Fuel Class</span>
                <strong className="text-xs text-white">{car.fuelType}</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Max Capacity</span>
                <strong className="text-xs text-white">{car.seats} Adults</strong>
              </div>
            </div>
          </div>

          {/* Detailed Engine Specifications Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">
            <h3 className="text-base font-extrabold text-white mb-4 font-display flex items-center gap-2">
              <Compass className="w-5 h-5 text-orange-500" />
              Technical Specification Sheet
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-3.5">
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Engine Displacement</span>
                  <strong className="text-slate-200 mt-0.5 block">{specs.engine}</strong>
                </div>
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Power Outflow</span>
                  <strong className="text-slate-200 mt-0.5 block">{specs.power}</strong>
                </div>
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Luggage space</span>
                  <strong className="text-slate-200 mt-0.5 block">{car.luggage} Suitcases</strong>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Ground clearance</span>
                  <strong className="text-slate-200 mt-0.5 block">{specs.clearance}</strong>
                </div>
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Wading Limit</span>
                  <strong className="text-slate-200 mt-0.5 block">{specs.waterWading}</strong>
                </div>
                <div className="border-b border-slate-850 pb-2.5">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold font-mono">Classification</span>
                  <strong className="text-orange-400 mt-0.5 block font-mono">{specs.classType}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-850">
              <span className="text-slate-400 font-bold block mb-1 text-xs">Ideal Holiday Suitability:</span>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{specs.suitability}</p>
            </div>
          </div>

        </div>

        {/* Right column: Sticky Checkout details booking form selector */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Quote Summary Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl pointer-events-none" />
            
            <span className="bg-slate-950 border border-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg text-slate-400 block w-max font-mono mb-4">
              Real-time Availability
            </span>

            <h2 className="text-3xl font-black text-white font-display tracking-tight">{car.name}</h2>
            <p className="text-[11px] text-slate-500 italic mt-1 pb-4 border-b border-slate-800">
              Category: {car.category} rental in Goa
            </p>

            <div className="my-5 flex justify-between items-center bg-slate-950/60 p-4 border border-slate-850 rounded-2xl">
              <div>
                <span className="text-slate-500 text-[10px] uppercase font-black block font-mono">Daily Rent Rate</span>
                <span className="text-3xl font-black text-white font-sans">₹{car.pricePerDay}</span>
                <span className="text-[10px] text-slate-400 block font-mono">No hidden taxes</span>
              </div>
              <div className="text-right border-l border-slate-800 pl-4">
                <span className="text-slate-500 text-[10px] uppercase font-black block font-mono">Security Refund</span>
                <span className="text-lg font-bold text-orange-400 font-sans">₹{car.securityDeposit}</span>
                <span className="text-[9.5px] text-slate-500 block">100% Refundable</span>
              </div>
            </div>

            {/* Included highlights bullet points list */}
            <div className="space-y-2.5 my-6 text-xs text-slate-300">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block mb-2">Features Included in Quote:</span>
              
              {car.features.map(f => (
                <div key={f} className="flex items-start gap-2 text-xs">
                  <span className="bg-emerald-500/10 p-0.5 rounded border border-emerald-500/15 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* CTAs booking launch */}
            <div className="space-y-3">
              <button
                onClick={() => triggerCarBooking(car)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3.5 rounded-xl uppercase tracking-wider text-xs transition-all shadow-md shadow-orange-500/10 cursor-pointer btn-bounce text-center"
              >
                Book This {car.name} Now
              </button>
              
              <div className="text-center">
                <span className="text-[10px] text-slate-500 font-mono">Or submit verification directly on WhatsApp:</span>
                <a 
                  href={`https://wa.me/916287168644?text=Hi!%20I%20want%20to%20reserve%20your%20${encodeURIComponent(car.name)}%20for%20self-drive%20in%20Goa.%20Please%20verify%20active%20dates.`}
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-2.5 w-full bg-emerald-600/10 hover:bg-emerald-650/20 text-emerald-400 hover:text-white border border-emerald-500/20 py-2.5 rounded-xl font-bold uppercase tracking-wider text-[11px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Connect with WhatsApp Desk</span>
                </a>
              </div>
            </div>

          </div>

          {/* Safety rules and security warning checklist block */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-xs font-black text-rose-400 uppercase tracking-widest font-mono mb-3.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              Renting Rules Checklist & Prohibitions
            </h3>
            
            <ul className="space-y-3.5 text-[11.5px] leading-relaxed text-slate-400">
              <li className="flex gap-2">
                <span className="text-orange-500 font-black">•</span>
                <span>
                  <strong className="text-slate-300">Clean Fuel swap Policy:</strong> We handover with fuel equal to drop-off. Keep level aligned to avoid refuel fee.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 font-black">•</span>
                <span>
                  <strong className="text-slate-300">Forbidden Beach Driving:</strong> Absolute warning: Sandy beach beds are illegal to drive on in Goa. Doing so will freeze security deposits.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500 font-black">•</span>
                <span>
                  <strong className="text-slate-300">Speed Limits lock:</strong> {specs.rules}
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
