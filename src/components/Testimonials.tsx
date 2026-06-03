import React from 'react';
import { Star, ShieldCheck, Tag, MapPin, HelpCircle } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Testimonials() {
  return (
    <div className="animate-fade-in space-y-16">
      
      {/* WHY BOOK WITH US */}
      <section className="py-12 bg-slate-950/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1 font-mono">Our Goa Edge</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-display">Why Book With Us?</h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Local registered operators with years of hospitality experience. We prioritize security and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl mb-4 border border-orange-500/15">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-extrabold text-base text-white mb-2 font-display">100% Refundable Deposit</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Absolutely zero delay in processing. Rest easy, the security deposit is handed back instantly at checkout.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl mb-4 border border-orange-500/15">
                <Tag className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-extrabold text-base text-white mb-2 font-display">Honest Pricing guarantee</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                What you calculate on our quote generator is what you pay. Zero booking commissions or surprise regional taxes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl mb-4 border border-orange-500/15">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-extrabold text-base text-white mb-2 font-display">Mopa Doorstep Deliveries</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Complimentary drop off right inside New Goa Mopa Airport Parking and Terminal Arrivals. Handover in 5 mins!
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl mb-4 border border-orange-500/15">
                <HelpCircle className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-extrabold text-base text-white mb-2 font-display">24/7 Tech &amp; Drive Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Stuck on a route, need a flat tire swap, or have road problems? Call our emergency line anytime for support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TRAVELERS TESTIMONIAL REVIEWS */}
      <section className="py-12 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-md mx-auto mb-12">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">Our Travelers Say</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Goa Travel Testimonials</h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Trusted by holidaymakers, friend circles, family trips, corporate teams, and long-term digital nomads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-slate-900 p-5 rounded-3xl border border-slate-850 flex flex-col justify-between gap-4 text-left">
                <div className="space-y-2">
                  {/* Rating stars */}
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 px-0.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-800/85 pt-3 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-white font-display">{rev.name}</div>
                    <div className="text-[9px] text-slate-500 font-medium font-sans">{rev.location}</div>
                  </div>
                  <span className="text-[9.5px] uppercase tracking-wide bg-slate-950 text-orange-400 px-3 py-1 rounded-lg border border-slate-850 font-bold font-mono">
                    {rev.carRented.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
