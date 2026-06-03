import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CARS, LOCATIONS, OFFICE_CONTACT } from '../data';

interface ContactProps {
  bookingFormData: {
    pickupLocation: string;
    dropLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropDate: string;
    dropTime: string;
    carId: string;
    userName: string;
    userPhone: string;
    userEmail: string;
    specialRequests: string;
  };
  handleInputChange: (field: string, value: string) => void;
  isSubmitting: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export default function Contact({
  bookingFormData,
  handleInputChange,
  isSubmitting,
  handleFormSubmit
}: ContactProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-350">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">Contact Hubs</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Direct Support Desk</h1>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
          Connect directly with our local Goa booking experts for custom quotations, wedding/corporate group tie-ups, or vehicle delivery schedule updates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Info Desk */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 border border-slate-800">
            <h4 className="text-sm font-extrabold text-orange-400 font-display">Go Goa Operational Hubs</h4>
            
            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-[10px] uppercase font-mono tracking-wide">Main airport warehouse:</strong>
                  <p className="text-slate-400 mt-1">{OFFICE_CONTACT.mainAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-[10px] uppercase font-mono tracking-wide">North Goa branch coastal desk:</strong>
                  <p className="text-slate-400 mt-1">{OFFICE_CONTACT.calanguteAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-[10px] uppercase font-mono tracking-wide">South Dabolim Terminal:</strong>
                  <p className="text-slate-400 mt-1">{OFFICE_CONTACT.dabolimAddress}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800/80 space-y-4">
            <h4 className="font-extrabold text-white text-sm font-display">Direct Phone &amp; Email support</h4>
            
            <div className="space-y-3.5 text-xs text-slate-350">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono">{OFFICE_CONTACT.phone1} (Aman S.)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono">{OFFICE_CONTACT.phone2} (Backup Line)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono">{OFFICE_CONTACT.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono">{OFFICE_CONTACT.backupEmail} (Alternate Helpdesk)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a 
                href={`https://wa.me/${OFFICE_CONTACT.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-center text-xs transition-colors block shadow-sm btn-bounce cursor-pointer"
              >
                Instant WhatsApp Chat Online
              </a>
            </div>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 text-slate-300">
          <h3 className="font-extrabold text-white text-lg mb-2 font-display">Send Us An Enquiry</h3>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed font-sans">
            Have special requirements or looking for monthly rent quotations? Fill out the fields below and our representatives will reach out back to you over call/SMS within 15 minutes.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Your Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={bookingFormData.userName}
                  onChange={(e) => handleInputChange('userName', e.target.value)}
                  className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">WhatsApp / Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  value={bookingFormData.userPhone}
                  onChange={(e) => handleInputChange('userPhone', e.target.value)}
                  className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Email Address (Optional)</label>
              <input 
                type="email" 
                placeholder="johndoe@example.com"
                value={bookingFormData.userEmail}
                onChange={(e) => handleInputChange('userEmail', e.target.value)}
                className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Select Delivery Slot Pickup</label>
                <select 
                  value={bookingFormData.pickupLocation}
                  onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                  className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-slate-200"
                >
                  {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-slate-950">{loc}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Select Car Preferred</label>
                <select 
                  value={bookingFormData.carId}
                  onChange={(e) => handleInputChange('carId', e.target.value)}
                  className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-slate-200"
                >
                  {CARS.map(c => <option key={c.id} value={c.id} className="bg-slate-950">{c.name} — ₹{c.pricePerDay}/day</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Specify Special Requests / Flight Numbers</label>
              <textarea 
                rows={3}
                placeholder="Flight timings, preferred car color, multiple drivers list..."
                value={bookingFormData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all cursor-pointer btn-bounce"
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Contact Enquiry'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
