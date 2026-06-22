import React from 'react';
import { Filter, Star, CheckCircle, Phone, AlertTriangle, X } from 'lucide-react';
import { CARS, OFFICE_CONTACT } from '../data';
import { Car } from '../types';

interface FleetProps {
  searchCarQuery: string;
  setSearchCarQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedTransmission: string;
  setSelectedTransmission: (trans: string) => void;
  triggerCarBooking: (car: Car) => void;
  onSelectCar?: (carId: string) => void;
}

export default function Fleet({
  searchCarQuery,
  setSearchCarQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTransmission,
  setSelectedTransmission,
  triggerCarBooking,
  onSelectCar
}: FleetProps) {

  const [sortBy, setSortBy] = React.useState<'featured' | 'rate-asc' | 'rate-desc' | 'seats-desc'>('featured');

  // Fleet configuration filters
  const filteredCars = CARS.filter(car => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesTransmission = selectedTransmission === 'All' || car.transmission === selectedTransmission;
    const matchesKeyword = car.name.toLowerCase().includes(searchCarQuery.toLowerCase()) || 
                           car.features.some(f => f.toLowerCase().includes(searchCarQuery.toLowerCase()));
    return matchesCategory && matchesTransmission && matchesKeyword;
  });

  const sortedCars = React.useMemo(() => {
    const carsList = [...filteredCars];
    if (sortBy === 'rate-asc') {
      return carsList.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }
    if (sortBy === 'rate-desc') {
      return carsList.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }
    if (sortBy === 'seats-desc') {
      return carsList.sort((a, b) => b.seats - a.seats);
    }
    // Default / featured: popular first
    return carsList.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
  }, [filteredCars, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-slate-300">
      
      {/* Header filters */}
      <div className="border-b border-slate-800 pb-6 mb-8 text-left">
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">Goa Holiday Fleets</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Our Premium Fleets</h1>
        <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
          Filter and select well-maintained Hatchbacks, high-clearance SUVs, adventure-ready open Mahindra Thars, or premium luxury cars. All rentals include our 24/7 emergency care network.
        </p>

        {/* Advanced search bar filter visual */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-6 items-center">
          <div className="md:col-span-5 relative">
            <input 
              type="text" 
              placeholder="Search brand, features (e.g. automatic, sunroof)..." 
              value={searchCarQuery}
              onChange={(e) => setSearchCarQuery(e.target.value)}
              className="w-full text-xs py-3 pl-4 pr-10 bg-slate-900 border border-slate-800 rounded-xl outline-none text-slate-200 placeholder-slate-500 focus:border-orange-500"
            />
            {searchCarQuery && (
              <button 
                onClick={() => setSearchCarQuery('')} 
                className="absolute right-3 top-3 text-slate-400 hover:text-red-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category selectors */}
          <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center gap-2.5 w-full">
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 inline-flex items-center gap-1 font-mono">
                <Filter className="w-3.5 h-3.5 text-orange-500" /> CATEGORY:
              </span>
            </div>
            
            {/* Horizontal scrollable categories for mobile */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 w-full sm:w-auto">
              {['All', 'Hatchback', 'SUV', 'Thar', 'Luxury'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat 
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/15' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat === 'All' ? 'All Classes' : cat + 's'}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => { setSelectedCategory('All'); setSelectedTransmission('All'); setSearchCarQuery(''); setSortBy('featured'); }}
              className="text-xs font-bold text-slate-400 hover:text-white underline cursor-pointer sm:ml-auto font-mono whitespace-nowrap shrink-0 mt-1 sm:mt-0"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Dynamic Transmission & Sorting controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-800/60 bg-slate-900/30 p-3.5 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono shrink-0">Transmission:</span>
            <div className="flex gap-2 items-center overflow-x-auto scrollbar-none pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {['All', 'Manual', 'Automatic'].map((trans) => (
                <button
                  key={trans}
                  onClick={() => setSelectedTransmission(trans)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedTransmission === trans
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {trans === 'All' ? 'Any Transmission' : trans}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-slate-200 outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="rate-asc">Price: Low to High</option>
              <option value="rate-desc">Price: High to Low</option>
              <option value="seats-desc">Seating Capacity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main grid fleet selection */}
      {sortedCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCars.map((car) => (
            <div key={car.id} className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800/60 flex flex-col justify-between">
              
              {/* Image block */}
              <div 
                onClick={() => onSelectCar?.(car.id)}
                className="relative h-48 w-full overflow-hidden bg-slate-950 cursor-pointer group-hover:opacity-90 transition-opacity"
              >
                <img 
                  src={car.imageUrl} 
                  alt={car.name}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider font-extrabold bg-slate-950/80 backdrop-blur-md text-orange-400 border border-slate-800 px-2.5 py-1 rounded-lg">
                  {car.category}
                </span>
                {car.isPopular && (
                  <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider font-bold bg-orange-500 text-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white text-white" /> Popular
                  </span>
                )}
                
                <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-slate-200 border border-slate-800">
                  Refundable Dep: ₹{car.securityDeposit}
                </div>
              </div>

              {/* Specifications */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left">
                <div>
                  <div className="flex justify-between items-start gap-1">
                    <div className="cursor-pointer" onClick={() => onSelectCar?.(car.id)}>
                      <h3 className="text-base font-black text-white hover:text-orange-400 transition-colors tracking-tight leading-none font-display mb-1">{car.name}</h3>
                      <span className="text-[10px] font-bold text-orange-400 hover:underline">View Specs &amp; Rules →</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono bg-orange-500/10 text-orange-400 border border-orange-500/15">
                      {car.transmission}
                    </span>
                  </div>

                  {/* Badges block */}
                  <div className="grid grid-cols-3 gap-1.5 my-4 text-[10px] font-mono font-medium text-slate-300 text-center">
                    <div className="bg-slate-950/50 py-1.5 px-2 rounded-lg border border-slate-800/60">
                      👤 {car.seats} Seats
                    </div>
                    <div className="bg-slate-950/50 py-1.5 px-2 rounded-lg border border-slate-800/60">
                      ⛽ {car.fuelType}
                    </div>
                    <div className="bg-slate-950/50 py-1.5 px-2 rounded-lg border border-slate-800/60">
                      💼 {car.luggage} Bags
                    </div>
                  </div>

                  {/* Bulleted checklist */}
                  <div className="space-y-1.5 text-slate-300 text-left">
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-mono">Included Accessories & Specs</span>
                    {car.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-[10.5px]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight text-slate-400">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing action info */}
                <div className="border-t border-slate-800/80 pt-4 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-mono">Rent Per Day</div>
                      <div className="text-lg font-black text-white font-display">
                        ₹{car.pricePerDay}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-2 py-0.5 rounded-lg font-mono block">Unlimited kms</span>
                      <span className="text-[8px] text-slate-500 font-medium font-sans">Excl. tolls &amp; parking</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => triggerCarBooking(car)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer text-center btn-bounce"
                    >
                      Rent This Car
                    </button>
                    
                    <a 
                      href={`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=Hi%20Go%20Goa%20Car%20Booking!%20Interested%20in%20model%20${encodeURIComponent(car.name)}%20(${car.transmission}),%20please%20send%20quote.`}
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 btn-bounce"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md mx-auto">
          <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="font-bold text-white text-lg font-display">No fleets matched your criteria</h3>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            We currently do not offer this filter configuration. Clear filters or browse all our popular hatchbacks and SUVs.
          </p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSelectedTransmission('All'); setSearchCarQuery(''); }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs mt-4 btn-bounce cursor-pointer font-mono"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
