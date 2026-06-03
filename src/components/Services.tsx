import React from 'react';
import { Plane, Infinity as InfIcon, Calendar, MessageSquare, Wrench, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

export default function Services() {
  const serviceList = [
    {
      icon: <Plane className="w-6 h-6 text-orange-400" />,
      title: 'Airport Handover 24/7 Desk',
      desc: 'Free car pickup and drop-off directly inside Mopa (New Goa IDX) and Dabolim Airport parking decks. Landing late? Our driver waits with the keys right as you walk out.',
      usp: 'Zero terminal platform waiting | Instant handovers'
    },
    {
      icon: <InfIcon className="w-6 h-6 text-orange-400" />,
      title: 'Unrestricted Kilometers',
      desc: 'No restrictions on where you want to travel within the territory of Goa. Drive from Arambol beach in extreme North to Palolem beach in deep South with absolute zero per-km penalty.',
      usp: 'No limit | Total freedom to explore'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
      title: 'Instant WhatsApp Extensions',
      desc: 'Plans changed? Our automated booking system lets you submit trip duration extensions on Whatsapp in under 2 minutes, using secure digital payments.',
      usp: 'No office visits | Dynamic renewals'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-400" />,
      title: 'Long-Term Rental Packages',
      desc: 'Staying in Goa for work, spiritual yoga retreats, or digital nomad projects? Get highly optimized subscription discounts on weekly (15% off) and monthly (35% off) bookings.',
      usp: 'Free roadside maintenance | Replacement backup'
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      title: 'Zero-Cost Support Maintenance',
      desc: 'In case of tire punctures, battery discharge, or engine warning indicators, our roadside helpline sends mobile mechanic specialists directly to your location anywhere inside Goa.',
      usp: '24/7 hotline helpline | Maximum backup security'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      title: 'Corporate & Wedding Events',
      desc: 'Need a premium white-labeled SUV fleet like Toyota Innova Crystas or Scorpio Ns for wedding guests, business conventions, or group retreats? Let us handle all logistics with special tariff files.',
      usp: 'Uniformly sterilized luxury cars'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-fade-in text-slate-350 text-left">
      
      {/* Header and Summary */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2 font-mono">Premium Conveniences</span>
        <h1 className="text-3xl md:text-5.5xl font-black text-white tracking-tight leading-tight font-display">
          Our VIP Rental Fleet Services
        </h1>
        <p className="text-sm text-slate-400 mt-3 font-sans leading-relaxed">
          At Go Goa, we redefine self-drive by bundling premium conveniences at standard rates. No hidden checklists, no surprise mileage calculations.
        </p>
      </div>

      {/* Showcase Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {serviceList.map((srv, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-slate-700 transition-all group flex flex-col justify-between">
            <div>
              <div className="bg-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {srv.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-display">{srv.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                {srv.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-950 text-[10.5px] text-orange-400 font-mono font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              {srv.usp}
            </div>
          </div>
        ))}
      </div>

      {/* Beautiful comparison block: Why We Are Different */}
      <div className="bg-gradient-to-t from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-10">
        <h3 className="text-xl font-bold text-white text-center mb-2 font-display">How We Outperform Traditional Local Aggregators</h3>
        <p className="text-xs text-slate-400 text-center mb-10 max-w-md mx-auto font-sans">
          Avoid local taxi scams and complex contracts. Read how our dynamic desk simplifies self-drive:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-900">
            <h4 className="text-xs font-black text-rose-400 uppercase tracking-widest font-mono mb-4">⚠️ Local Aggregators / Roadside Rentals</h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 mt-0.5 font-bold">✕</span>
                <span>Surge pricing directly proportional to foreign look/accents.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 mt-0.5 font-bold">✕</span>
                <span>Worn-out tires, high mileage, and poorly maintained suspension systems.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 mt-0.5 font-bold">✕</span>
                <span>Unexplained delays in refunding security deposits—withholding fees for normal wear and tear.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 mt-0.5 font-bold">✕</span>
                <span>Zero mechanical back-ups if you break down in remote forest spots like Dudhsagar.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-orange-500/10 shadow-lg shadow-orange-500/2">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest font-mono mb-4">⭐ GO GOA CAR BOOKING DESK</h4>
            <ul className="space-y-3.5 text-xs text-slate-350">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Upfront Flat Rates</strong> specified online. Every calculation is transparent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Clean, Sterilized Cars</strong> that undergo multi-point safety testing before keys are handed over.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Instant Refunds</strong> processed to UPI or banks right during car drop-off.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Full Breakdown Cover</strong> with mobile mechanics dispatched to help you.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
