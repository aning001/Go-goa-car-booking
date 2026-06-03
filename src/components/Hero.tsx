import React, { useState } from 'react';
import { Sparkles, Calendar, ChevronRight, Phone, CheckCircle, Star, AlertTriangle } from 'lucide-react';
import { CARS, OFFICE_CONTACT } from '../data';
import { Car } from '../types';

interface HeroProps {
  scrollToBookingSection: () => void;
  triggerCarBooking: (car: Car) => void;
}

export default function Hero({ scrollToBookingSection, triggerCarBooking }: HeroProps) {
  const [heroCarIndex, setHeroCarIndex] = useState(0);
  const popularCars = CARS.filter(c => c.isPopular);
  const activeHeroCar = popularCars[heroCarIndex] || popularCars[0];

  return (
    <div>
      {/* HERO BLOCK & QUOTE PANELS */}
      <section className="relative bg-slate-950 overflow-hidden text-white">
        {/* Self-contained high priority styles for the seamless news channels ticker animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-text {
            display: flex !important;
            animation: marqueeScroll 24s linear infinite !important;
          }
          .animate-marquee-text:hover {
            animation-play-state: paused !important;
          }
        `}} />

        {/* TV Headlines Scrolling Ticker at the head / top of the Hero Section */}
        <div className="w-full bg-[#0a0002] border-b border-red-950/40 relative z-20 flex items-center h-10 select-none overflow-hidden text-[11px] md:text-xs">
          {/* Standing TV Tag */}
          <div className="bg-red-600 text-white font-black px-3 py-2.5 flex items-center justify-center gap-1 shrink-0 h-full relative z-30 shadow-md transform skew-x-[-10deg] -ml-2">
            <span className="transform skew-x-[10deg] tracking-wider text-[10px] md:text-xs uppercase flex items-center gap-1.5 font-sans">
              <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
              EXCLUSIVE DEALS
            </span>
          </div>
          {/* Subtag/Ticker category */}
          <div className="bg-amber-500 text-slate-950 font-extrabold px-3 py-2.5 hidden sm:flex items-center justify-center h-full shrink-0 relative z-20 transform skew-x-[-10deg] -ml-1">
            <span className="transform skew-x-[10deg] uppercase tracking-wider text-[9px] md:text-[10px] font-sans">GOA DIRECT</span>
          </div>
          
          {/* Continuous scrolling headlines */}
          <div className="flex-1 overflow-hidden h-full flex items-center">
            <div className="animate-marquee-text flex gap-12 shrink-0 whitespace-nowrap pl-4">
              <div className="flex gap-12 items-center text-red-100 font-medium">
                <span>🔥 <span className="text-amber-400 font-extrabold">POPULAR OPTION:</span> Choose our trusted <a href="fleet.html" className="underline text-white hover:text-orange-400 font-semibold">Self Drive Car Rental Goa</a> service for seamless coastal voyages starting at ₹1000/day!</span>
                <span>•</span>
                <span>⚡ <span className="text-orange-400 font-extrabold">ADVENTURE JEEP:</span> Secure an iconic <a href="thar-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Mahindra Thar Rental Goa</a> 4x4 soft-top & automatic hard-top!</span>
                <span>•</span>
                <span>✨ <span className="text-amber-300 font-extrabold">GOLD STANDARD:</span> Experience elite VIP status when renting with premier <a href="luxury-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Luxury Car Hire Goa</a>!</span>
                <span>•</span>
                <span>👨‍👩‍👧‍👦 <span className="text-emerald-400 font-extrabold">SPACIOUS RUN:</span> Ride in supreme comfort with the 7-Seater <a href="family-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Goa Family Car Rental</a> fleet!</span>
                <span>•</span>
                <span>📞 <span className="text-white font-extrabold">AIRPORT SPECIAL:</span> Direct <a href="services.html" className="underline text-white hover:text-orange-400 font-semibold">Mopa Airport Car Handover</a> with counters-free arrivals pickup!</span>
              </div>
              <div className="flex gap-12 items-center text-red-100 font-medium">
                <span>🔥 <span className="text-amber-400 font-extrabold">POPULAR OPTION:</span> Choose our trusted <a href="fleet.html" className="underline text-white hover:text-orange-400 font-semibold">Self Drive Car Rental Goa</a> service for seamless coastal voyages starting at ₹1000/day!</span>
                <span>•</span>
                <span>⚡ <span className="text-orange-400 font-extrabold">ADVENTURE JEEP:</span> Secure an iconic <a href="thar-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Mahindra Thar Rental Goa</a> 4x4 soft-top & automatic hard-top!</span>
                <span>•</span>
                <span>✨ <span className="text-amber-300 font-extrabold">GOLD STANDARD:</span> Experience elite VIP status when renting with premier <a href="luxury-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Luxury Car Hire Goa</a>!</span>
                <span>•</span>
                <span>👨‍👩‍👧‍👦 <span className="text-emerald-400 font-extrabold">SPACIOUS RUN:</span> Ride in supreme comfort with the 7-Seater <a href="family-rental.html" className="underline text-white hover:text-orange-400 font-semibold">Goa Family Car Rental</a> fleet!</span>
                <span>•</span>
                <span>📞 <span className="text-white font-extrabold">AIRPORT SPECIAL:</span> Direct <a href="services.html" className="underline text-white hover:text-orange-400 font-semibold">Mopa Airport Car Handover</a> with counters-free arrivals pickup!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background glow accents */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#dc2626]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#ea580c]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
          
          {/* Descriptive banner */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-center lg:text-left">
            <div className="self-center lg:self-start bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> No. 1 Car Rental in Mopa Goa
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
              Your True Freedom On Wheels <span className="text-orange-500">In Goa</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore the sunny beaches, vibrant night clubs, historic churches, and local hidden cascades of Goa. Hand over the keys right at the Mopa Airport arrivals or your holiday resort doorstep!
            </p>

            {/* Primary CTA Buttons for Hero Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 max-w-xl mx-auto lg:mx-0 w-full text-left" id="hero-primary-ctas">
              <button
                onClick={scrollToBookingSection}
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 cursor-pointer flex items-center justify-center gap-2 border border-orange-400/10 active:scale-[0.98] btn-bounce"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Now</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
              </button>
              
              <a
                href={`tel:${OFFICE_CONTACT.phone1.replace(/\s+/g, '')}`}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2 active:scale-[0.98] shadow-md btn-bounce"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=Hi,%20I%20want%20to%20rent%20a%20self-drive%20car%20for%20my%20Goa%20trip.%20Please%20share%20rates.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] shadow-lg shadow-emerald-600/10 btn-bounce"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 text-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Zero Extra Fees</div>
                  <div className="text-[10px] text-slate-400">Honest daily pricing</div>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">24/7 Delivery</div>
                  <div className="text-[10px] text-slate-400">At Mopa & Dabolim</div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Well Maintained</div>
                  <div className="text-[10px] text-slate-400">Deep washed fleets</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">K</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">R</div>
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>4.9 / 5 Rated Travelers</span>
                </div>
                <div className="text-[10px] text-slate-400">Over 2,200 successful rentals in 2026</div>
              </div>
            </div>
          </div>

          {/* Spectacular interactive car fleet slider directly visible above the fold on first screen */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full text-slate-900 font-sans" id="hero-interactive-fleet">
            <div className="w-full bg-slate-950/80 backdrop-blur-lg rounded-3xl p-5 border border-slate-800/85 shadow-2xl space-y-4 select-none">
              
              {/* Tiny header showing it is interactive */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-[11px] font-extrabold text-slate-100 uppercase tracking-widest font-mono">Interactive Fleet Picker</span>
                </div>
                <div className="text-[9px] uppercase tracking-wider bg-orange-400/10 text-orange-400 px-2.5 py-1 rounded-full font-extrabold border border-orange-500/20 font-mono">
                  Above Fold
                </div>
              </div>

              {/* Quick Horizontal Text Tabs for all popular cars to select instantly */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
                {popularCars.map((car, index) => (
                  <button
                    key={car.id}
                    onClick={() => setHeroCarIndex(index)}
                    className={`shrink-0 px-3 py-1.5 rounded-lg font-bold text-[10px] transition-all cursor-pointer ${
                      heroCarIndex === index
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800/60'
                    }`}
                  >
                    {car.category === 'Thar' ? 'Thar 4x4' : car.name.replace('Maruti Suzuki ', '').replace('Maruti ', '').replace(' (7-Seater)', '')}
                  </button>
                ))}
              </div>

              {/* Main display card of the selected hero car */}
              {activeHeroCar && (
                <div className="space-y-4">
                  {/* Image box with arrows & price overlay */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 group">
                    <img
                      src={activeHeroCar.imageUrl}
                      alt={activeHeroCar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />

                    {/* Price tag */}
                    <div className="absolute top-3 right-3 bg-orange-500 text-white font-black text-xs px-3 py-1.5 rounded-xl shadow-md flex flex-col items-center leading-none border border-orange-400/20">
                      <span className="text-[8px] font-medium tracking-wide uppercase opacity-90 block mb-0.5">Rent Only</span>
                      <span className="font-extrabold text-white text-base">₹{activeHeroCar.pricePerDay}</span>
                      <span className="text-[8px] font-bold opacity-80 mt-0.5 whitespace-nowrap">Per Day</span>
                    </div>

                    {/* Dynamic Category badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-orange-400 text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-lg border border-slate-800 shadow">
                      {activeHeroCar.category} Collection
                    </div>

                    {/* Slider Navigation Arrows */}
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHeroCarIndex(prev => (prev === 0 ? popularCars.length - 1 : prev - 1));
                        }}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-950 backdrop-blur border border-slate-800 text-white flex items-center justify-center transition-all shadow cursor-pointer text-sm font-bold"
                      >
                        &larr;
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setHeroCarIndex(prev => (prev === popularCars.length - 1 ? 0 : prev + 1));
                        }}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-slate-950/70 hover:bg-slate-950 backdrop-blur border border-slate-800 text-white flex items-center justify-center transition-all shadow cursor-pointer text-sm font-bold"
                      >
                        &rarr;
                      </button>
                    </div>

                    {/* Car dynamic mini meta details bottom overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                      <div className="bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-300">
                        Refundable Dep: ₹{activeHeroCar.securityDeposit}
                      </div>
                      <div className="bg-emerald-500/10 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] uppercase font-bold text-emerald-400 border border-emerald-500/20">
                        Unlimited KMs
                      </div>
                    </div>
                  </div>

                  {/* Specifications block */}
                  <div className="text-left">
                    <h3 className="text-base font-black text-white tracking-tight flex items-center gap-2">
                      <span>{activeHeroCar.name}</span>
                      <span className="text-xs bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-orange-400 font-mono">
                        {activeHeroCar.transmission}
                      </span>
                    </h3>

                    {/* Features horizontal list */}
                    <div className="grid grid-cols-3 gap-2 mt-2 text-[10px] text-slate-300">
                      <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-800 text-center font-mono">
                        👤 {activeHeroCar.seats} Seats
                      </div>
                      <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-800 text-center font-mono">
                        ⛽ {activeHeroCar.fuelType}
                      </div>
                      <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-800 text-center font-mono font-sans">
                        💼 {activeHeroCar.luggage} Bags
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => triggerCarBooking(activeHeroCar)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/15 cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>Rent Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=Hi,%20I%20want%20to%20rent%20the%20${encodeURIComponent(activeHeroCar.name)}%20for%20my%20Goa%20trip.%20Please%20verify%20availability.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10 btn-bounce"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* LIVE TOURIST ACTIVITY ALERTS (Bookings made by other clients, represented as automated live alerts) */}
      <div className="bg-amber-500 text-slate-950 py-2 px-4 shadow-sm select-none border-y border-amber-400">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-hidden text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0 text-slate-900" />
          <span className="font-bold uppercase tracking-wide text-[10px] bg-slate-900 text-amber-400 px-2 py-0.5 rounded font-mono shrink-0">Live Goa Feed:</span>
          <span className="truncate font-medium">
            🔥 Aman S. just completed checkout of a Mahindra Thar Convertible from Mopa Airport (Refundable deposit processed instantly!). Average self-drive speed limit cameras are fully active near Mandovi bypass. Drive safe!
          </span>
        </div>
      </div>
    </div>
  );
}
