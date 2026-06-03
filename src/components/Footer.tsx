import React from 'react';
import { Car as CarIcon, Phone, Mail } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';

interface FooterProps {
  setActiveTab: (tab: 'home' | 'about' | 'thar-rental' | 'luxury-rental' | 'family-rental' | 'fleet' | 'services' | 'blogs' | 'locations' | 'reservations' | 'attractions' | 'faq' | 'contact' | 'car-detail' | 'booking') => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleFootSelect = (tab: any) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-8 border-t border-slate-900 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        
        {/* Col 1: Brand details info */}
        <div className="col-span-1 md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-orange-600 to-orange-400 p-2 rounded-xl">
              <CarIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-base font-extrabold font-display uppercase tracking-tight leading-none">
              Go Goa Car Booking
            </span>
          </div>
          
          <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
            Your highly rated, reliable self-drive car helper network in Goa. We operate across all North &amp; South tourist spots, ensuring seamless terminal pickups at Mopa and Dabolim airports.
          </p>

          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block mb-1.5">Official Address:</span>
            <p className="text-slate-300 font-medium font-sans">
              {OFFICE_CONTACT.mainAddress}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block mb-1.5">Calangute Branch Details:</span>
            <p className="text-slate-300 font-medium font-sans">
              {OFFICE_CONTACT.calanguteAddress}
            </p>
          </div>
        </div>

        {/* Col 2: Sitemap */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <h4 className="text-white font-extrabold font-display uppercase tracking-wider text-xs">Rental Sitelinks</h4>
          
          <ul className="space-y-2">
            <li>
              <button onClick={() => { handleFootSelect('home'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Home Main Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('about'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                About Goa Legacy
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('thar-rental'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                🚙 Mahindra Thar 4x4 Rental
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('luxury-rental'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                👑 Luxury Car Rental Goa
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('family-rental'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                👨‍👩‍👦 Family &amp; SUV Rentals
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('fleet'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Compare Active Fleets
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('services'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Our Fleet Services
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('blogs'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Goa Travel Columns &amp; Blogs
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('locations'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Airport Pickups Map
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('reservations'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                My Bookings Desk
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('faq'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Goa Police Traffic Rules
              </button>
            </li>
            <li>
              <button onClick={() => { handleFootSelect('contact'); }} className="hover:text-amber-400 text-slate-400 transition-colors cursor-pointer text-left">
                Contact Technical Desk
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Desk Contacts */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h4 className="text-white font-extrabold font-display uppercase tracking-wider text-xs">Direct Support Contact</h4>
          
          <div className="space-y-3.5 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <span>+91 62871 68644 (Support Line)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <span>+91 62871 68644 (Direct Booking)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="break-all">{OFFICE_CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="break-all">{OFFICE_CONTACT.backupEmail}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900">
            <p className="text-[10px] text-slate-500 font-medium">
              © {new Date().getFullYear()} Go Goa Car Booking. All self-drive car reservations are subject to verification of valid original driving license. Deliveries managed directly by registered Goan operators.
            </p>
          </div>
        </div>

      </div>

      {/* Outer credit line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-slate-900 text-center text-[10px] text-slate-600 font-mono flex flex-col md:flex-row justify-between gap-4">
        <div>
          Registered Domain Identity: gogoacarbooking.in
        </div>
        <div>
          100% Laminated Driving License &amp; Aadhaar Card required at handover.
        </div>
      </div>
    </footer>
  );
}
