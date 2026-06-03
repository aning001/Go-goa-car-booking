import React from 'react';
import { MapPin, Calendar, Car as CarIcon, ChevronRight, SlidersHorizontal, ShieldCheck, FileText, CheckCircle, ExternalLink, X } from 'lucide-react';
import { CARS, LOCATIONS } from '../data';
import { Car, BookingRequest } from '../types';

interface BookingFormProps {
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
  estimatedDays: number;
  estimatedCost: number;
  selectedCar: Car;
  setIsBookingModalOpen: (open: boolean) => void;
  activeEnquiries: BookingRequest[];
  setActiveEnquiries: React.Dispatch<React.SetStateAction<BookingRequest[]>>;
  handleWhatsAppRedirect: (booking: BookingRequest) => void;
  setActiveTab: (tab: any) => void;
}

export default function BookingForm({
  bookingFormData,
  handleInputChange,
  estimatedDays,
  estimatedCost,
  selectedCar,
  setIsBookingModalOpen,
  activeEnquiries,
  setActiveEnquiries,
  handleWhatsAppRedirect,
  setActiveTab
}: BookingFormProps) {
  
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div>
      {/* ACTIVE CAR ENQUIRIES SAVED FOR SESSION */}
      {activeEnquiries.length > 0 && (
        <section className="py-8 bg-slate-950 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-slate-900/60 rounded-3xl p-5 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-3 mb-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>Your Active Car Rental Enquiries ({activeEnquiries.length})</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">These enquiries are registered on the server. Please click &apos;Verify over WhatsApp&apos; to instantly lock your booking.</p>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold uppercase">
                  Active Session Storage
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeEnquiries.map((b) => {
                  const car = CARS.find(c => c.id === b.carId) || CARS[0];
                  return (
                    <div key={b.id} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between gap-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-mono bg-slate-800 text-slate-200 px-2.5 py-0.5 rounded font-bold border border-slate-700">{b.id}</span>
                          <h5 className="font-bold text-white mt-1.5 text-sm">{car.name}</h5>
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-orange-500" /> {b.pickupLocation}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-extrabold text-orange-400 inline-block bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-xl">Total: ₹{b.estimatedTotal}</span>
                          <div className="text-[9px] text-slate-500 mt-1">Excl. Refundable Deposit</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 bg-slate-900/40 p-2.5 rounded-xl text-[10px] font-medium text-slate-300 border border-slate-800/40">
                        <div>
                          <span className="text-slate-500 block uppercase tracking-wider text-[8px] font-mono">Pickup Date</span>
                          {formatDate(b.pickupDate)} @ {b.pickupTime}
                        </div>
                        <div>
                          <span className="text-slate-500 block uppercase tracking-wider text-[8px] font-mono">Drop-off Date</span>
                          {formatDate(b.dropDate)} @ {b.dropTime}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleWhatsAppRedirect(b)}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer btn-bounce"
                        >
                          <span>Verify on WhatsApp</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => {
                            const filtered = activeEnquiries.filter(x => x.id !== b.id);
                            setActiveEnquiries(filtered);
                            localStorage.setItem('gg_car_bookings', JSON.stringify(filtered));
                          }}
                          className="text-slate-400 hover:text-red-500 p-2 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors cursor-pointer"
                          title="Remove enquiry"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DEDICATED BOOKING CALCULATOR & QUOTE SECTION */}
      <section className="py-16 bg-slate-950/40 border-t border-slate-900 text-left" id="booking-quote-engine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column of Booking Section: High-converting trust blocks */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1">Guaranteed Best Rates</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight font-display">
                  Calculate Your Goa Ride Cost Instantly
                </h2>
                <p className="text-xs md:text-sm text-slate-400 mt-2 leading-relaxed">
                  Select your preferred self-drive dates, delivery hotspots, and explore vehicles. Our dynamic engine calculates precise pricing without hidden surcharges or surprise commissions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 text-left">
                  <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">100% Refundable Security Deposit</h4>
                    <p className="text-[11px] text-slate-400">Processed instantly at checkout without unnecessary delays or deductions.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 text-left">
                  <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 font-display">Complimentary Mopa Airport Gate Drops</h4>
                    <p className="text-[11px] text-slate-400 font-sans">Our representative greets you right outside terminal arrivals for immediate handovers 24/7.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">No Complex Verification Needed</h4>
                    <p className="text-[11px] text-slate-400">Original Indian Driving License (Laminated DL) & Aadhaar checks processed in under 5 minutes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: interactive Quote Form Card */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl max-w-2xl mx-auto w-full text-slate-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 text-left">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <SlidersHorizontal className="w-4.5 h-4.5 text-orange-400" />
                  <span>Arrange Your Ride</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full font-extrabold font-mono">
                  Plan In 60s
                </span>
              </div>

              <div className="space-y-4 text-left">
                
                {/* Locations select elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-1">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">Pickup Location</label>
                    <div className="relative font-sans text-left">
                      <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-orange-500" />
                      <select 
                        value={bookingFormData.pickupLocation} 
                        onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                        className="w-full text-xs font-medium pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-slate-950">{loc}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">Drop Location</label>
                    <div className="relative font-sans text-left">
                      <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-emerald-500" />
                      <select 
                        value={bookingFormData.dropLocation} 
                        onChange={(e) => handleInputChange('dropLocation', e.target.value)}
                        className="w-full text-xs font-medium pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-slate-950">{loc}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date pickup / drop inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-1">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">Pickup Date & Time</label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <input 
                        type="date" 
                        value={bookingFormData.pickupDate} 
                        onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                        className="w-full text-xs py-2 px-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <input 
                        type="time" 
                        value={bookingFormData.pickupTime} 
                        onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                        className="w-full text-xs py-2 px-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">Drop Date & Time</label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <input 
                        type="date" 
                        value={bookingFormData.dropDate} 
                        onChange={(e) => handleInputChange('dropDate', e.target.value)}
                        className="w-full text-xs py-2 px-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      />
                      <input 
                        type="time" 
                        value={bookingFormData.dropTime} 
                        onChange={(e) => handleInputChange('dropTime', e.target.value)}
                        className="w-full text-xs py-2 px-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Car select options */}
                <div className="mb-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">Select Car Model</label>
                  <div className="relative">
                    <CarIcon className="absolute left-3 top-2.5 w-4 h-4 text-orange-500" />
                    <select 
                      value={bookingFormData.carId} 
                      onChange={(e) => handleInputChange('carId', e.target.value)}
                      className="w-full text-xs font-semibold pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      {CARS.map(c => (
                        <option key={c.id} value={c.id} className="bg-slate-950">
                          {c.name} ({c.transmission}) — ₹{c.pricePerDay}/day
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Instant dynamic estimate indicator */}
                <div className="bg-orange-500/10 border border-orange-500/20 p-3.5 rounded-2xl flex items-center justify-between text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-orange-600 text-white px-2.5 py-1.5 rounded-lg border border-orange-500/20 font-mono font-bold text-sm leading-none flex items-center justify-center">
                      {estimatedDays}d
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-orange-400 font-bold uppercase tracking-widest font-mono">Dynamic Estimate</div>
                      <div className="text-xs font-semibold text-slate-200">{selectedCar.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-white font-sans">₹{estimatedCost}</div>
                    <div className="text-[9px] text-slate-400 font-medium">Refundable Dep: ₹{selectedCar.securityDeposit}</div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 cursor-pointer flex items-center justify-center gap-2 btn-bounce"
                >
                  <span>Proceed to Contact Verification</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO GET RIDE STEPS TIMELINE */}
      <section className="py-16 bg-slate-950/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">Extremely Straightforward</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            How To Rent Your Goa Self-Drive Ride
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto mt-2 leading-relaxed">
            Avoid local transport unions and airport taxi queues. Follow these simple 3 steps to lock in your car.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative text-center">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                1
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-display">Select &amp; Book</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Choose from our well-maintained Hatchbacks, luxury SUVs, or open-top Mahindra Thar. Input your date details to get the exact cost.
              </p>
              <button 
                onClick={() => { setActiveTab('fleet'); window.scrollTo({ top: 0, behavior: 'instant' as any }); }}
                className="text-xs font-bold text-orange-400 hover:text-orange-300 mt-4 flex items-center gap-0.5 cursor-pointer"
              >
                <span>Explore Fleet</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                2
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-display">Doorstep Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Our delivery desk is staffed 24/7. Get your car delivered directly to Mopa Airport parking block, Dabolim terminal arrivals, or your Calangute resort.
              </p>
              <button 
                onClick={() => { setActiveTab('locations'); window.scrollTo({ top: 0, behavior: 'instant' as any }); }}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 mt-4 flex items-center gap-0.5 cursor-pointer"
              >
                <span>View Delivery Hubs</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                3
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-display">Enjoy Your Drive</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Go wherever you want with absolute freedom on wheels! Keep original laminated license with you, stay within speed limits, and have a beautiful vacation.
              </p>
              <button 
                onClick={() => {
                  setActiveTab('booking');
                  window.scrollTo({ top: 0, behavior: 'instant' as any });
                }}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-4 flex items-center gap-0.5 cursor-pointer"
              >
                <span>Calculate Quote Now</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
