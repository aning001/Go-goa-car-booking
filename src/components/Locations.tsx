import React, { useState } from 'react';
import { MapPin, Info, Compass, Sparkles, Phone, Clock, ShieldCheck } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

// Define the delivery desk coordinates and embed codes
interface DeliveryDesk {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  address: string;
  details: string;
  hours: string;
  phone: string;
  // This is the direct Google Maps iframe source URL.
  // The user can easily swap this out with their copied embed src later.
  iframeSrc: string;
}

const DELIVERY_DESKS: DeliveryDesk[] = [
  {
    id: 'mopa',
    name: 'New Goa Mopa Airport Terminal (VXD)',
    tagline: '⭐️ Main Operational Hub (24/7)',
    subtitle: 'North Goa Premium Desk',
    address: OFFICE_CONTACT.mainAddress,
    details: 'Our representative greets you right at Arrival Gate lobby, coordinates the digital paperwork check, and handovers keys inside the airport private car park within 5 minutes.',
    hours: 'Open 24/7 (All Flights Assisted)',
    phone: OFFICE_CONTACT.phone1,
    // Manohar International Airport, Mopa, Goa
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3838.225585640286!2d73.86470387516246!3d15.73919428489417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbdedbbf777e4cb%3A0xc6cbfa526a6e2b5e!2sManohar+International+Airport%2C+Mopa!5e0!3m2!1sen!2sin!4v1718970000000!5m2!1sen!2sin'
  },
  {
    id: 'calangute',
    name: 'Calangute North Goa Office',
    tagline: '🌴 Coastal Branch Hub',
    subtitle: 'Coastal Tourist Delivery Center',
    address: OFFICE_CONTACT.calanguteAddress,
    details: 'Serving Baga, Calangute, Candolim, Sinquerim, Anjuna, Vagator, Arpora, and Nerul. Includes free hotel doorstep drop-offs for rental periods exceeding 3 days.',
    hours: '8:00 AM - 10:00 PM Daily',
    phone: OFFICE_CONTACT.phone1,
    // Calangute, Goa
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1s0x3bbfebfbfd53bf57%3A0x95995cf58f8ab0a4!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1718971000000!5m2!1sen!2sin'
  },
  {
    id: 'dabolim',
    name: 'Goa Dabolim Airport Terminal (GOI)',
    tagline: '✈️ South Airport Desk',
    subtitle: 'South Goa Airport Handover',
    address: OFFICE_CONTACT.dabolimAddress,
    details: 'Serving Vasco da Gama region, Panaji, and South Goa beaches like Colva, Cavelossim, and Margao Railway Station. 24 hours open slots available.',
    hours: '24 Hours Flight Support',
    phone: OFFICE_CONTACT.phone2 || OFFICE_CONTACT.phone1,
    // Dabolim Airport, Goa
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1s0x3bbfba1062f2085d%3A0x3ea70973a215e9a4!2sGoa+International+Airport!5e0!3m2!1sen!2sin!4v1718972000000!5m2!1sen!2sin'
  }
];

export default function Locations() {
  const [selectedDeskId, setSelectedDeskId] = useState<string>('mopa');
  const activeDesk = DELIVERY_DESKS.find(d => d.id === selectedDeskId) || DELIVERY_DESKS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Header section */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider font-mono mb-3">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Interactive Location Hubs</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Our Goa Delivery Desk Map</h1>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
          We operate direct counters and 24/7 key exchange setups at both Goa airports (Mopa Airport VXD &amp; Dabolim Airport GOI) alongside our central Calangute beach office. Selecting a delivery desk updates the live preview below.
        </p>
      </div>

      {/* Main Map + Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        
        {/* Left Interactive Sidebar */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">
              📍 SELECT HANDOVER OFFICE
            </h3>
            
            <div className="space-y-3">
              {DELIVERY_DESKS.map((desk) => {
                const isSelected = desk.id === selectedDeskId;
                return (
                  <button
                    key={desk.id}
                    onClick={() => setSelectedDeskId(desk.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative group flex gap-3.5 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/60 shadow-lg' 
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    {/* Glowing side accent */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-orange-500 rounded-r-full" />
                    )}
                    
                    <div className={`p-2.5 rounded-xl shrink-0 h-fit ${
                      isSelected ? 'bg-orange-500 text-white' : 'bg-slate-950 text-slate-400 group-hover:text-slate-300'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-extrabold text-white font-display group-hover:text-orange-400 transition-colors">
                          {desk.name}
                        </span>
                        {isSelected && (
                          <span className="text-[8px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded font-mono font-bold leading-none">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-orange-400/90 font-mono font-bold uppercase tracking-wider">{desk.tagline}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug font-sans">{desk.address}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl mt-4 space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Desk Status</span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ALL HUBS LIVE
              </span>
            </div>
            
            <div className="space-y-2.5 text-xs font-sans">
              <div className="flex justify-between items-center text-slate-400">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-500" /> Working Hours:</span>
                <strong className="text-slate-200 font-mono text-[11px]">{activeDesk.hours}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-500" /> Direct Hotline:</span>
                <a href={`tel:${activeDesk.phone.replace(/\s+/g, '')}`} className="text-orange-400 font-mono hover:underline font-bold">
                  {activeDesk.phone}
                </a>
              </div>
              <div className="flex justify-between items-start text-slate-400 pt-1.5 border-t border-slate-800">
                <span className="flex items-center gap-1.5 shrink-0 mt-0.5"><ShieldCheck className="w-3.5 h-3.5 text-slate-500" /> Handover Flow:</span>
                <p className="text-[11px] text-slate-300 text-right max-w-xs pl-4 leading-snug">
                  {activeDesk.details}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Canvas: iFrame Embed of selected branch */}
        <div className="lg:col-span-7 h-[450px] lg:h-auto min-h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-900 group">
          
          <iframe
            src={activeDesk.iframeSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          ></iframe>

          {/* Quick Info Box to easily swap inside index/code */}
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3 text-left">
            <div className="space-y-0.5">
              <span className="text-[8px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full font-bold font-mono uppercase tracking-wider">
                Embed Custom Code
              </span>
              <p className="text-[10px] text-slate-400 leading-normal font-sans">
                You can easily copy and paste your custom Google Maps iframe embed src right in <code className="text-slate-200 bg-slate-900 px-1 py-0.2 rounded font-mono text-[9px]">src/components/Locations.tsx</code> anytime.
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
          </div>

        </div>
      </div>

      {/* General location policies list */}
      <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 mt-10">
        <h3 className="font-black text-white text-base mb-6 flex items-center gap-2 font-display">
          <Info className="w-5 h-5 text-orange-500" />
          <span>Goa Regional Delivery Policies</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 leading-relaxed font-sans">
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Mopa &amp; Calangute Areas</h4>
            <p>Absolutely zero delivery surcharges! Drop off and pickups are complimentary within these zones 24/7.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Far North &amp; Deep South Goa</h4>
            <p>For remote areas such as Arambol, Morjim, Mandrem, Palolem, Agonda, or Patnem beaches, a nominal out-of-bounds conveyance fee of ₹500 is charged.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-200 mb-1">Train Stations delivery</h4>
            <p>Free custom drop-off at Thivim Railway Station (North) or Madgaon Railway Station (South) for active rental durations of 5 days or longer.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
