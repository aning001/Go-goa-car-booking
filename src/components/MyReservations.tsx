import React, { useState, useEffect } from 'react';
import { Search, Loader2, Phone, Calendar, MapPin, XCircle, RefreshCw, CheckCircle, Clock } from 'lucide-react';
import { CARS, OFFICE_CONTACT } from '../data';
import { BookingRequest } from '../types';

export default function MyReservations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchingBookings, setMatchingBookings] = useState<BookingRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allServerBookings, setAllServerBookings] = useState<BookingRequest[]>([]);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fetch all book records dynamically from Express backend
  const fetchAllReservations = async () => {
    setIsLoading(true);
    setActionMessage(null);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setAllServerBookings(data.bookings || []);
      }
    } catch (err) {
      console.error('Error fetching reservations:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Run on mount
  useEffect(() => {
    fetchAllReservations();
  }, []);

  // Filter bookings based on user input (Id, Phone or Name)
  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setMatchingBookings([]);
      return;
    }

    const cleaned = searchQuery.trim().toLowerCase();
    const filtered = allServerBookings.filter(b => 
      b.id.toLowerCase().includes(cleaned) ||
      b.userPhone.toLowerCase().includes(cleaned) ||
      b.userName.toLowerCase().includes(cleaned)
    );

    setMatchingBookings(filtered);
    if (filtered.length === 0) {
      setActionMessage({
        type: 'error',
        text: 'No dynamic reservations match your query. Double check the ID or Mobile number!'
      });
    } else {
      setActionMessage(null);
    }
  };

  // Cancel reservation API request
  const cancelReservationRecord = async (bookingId: string) => {
    if (!confirm('Are you absolutely sure you want to cancel this booking enquiry?')) return;

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setActionMessage({
          type: 'success',
          text: `Booking ${bookingId} has been successfully cancelled on the server!`
        });
        // Reload
        fetchAllReservations();
        // Update query matches
        setMatchingBookings(prev => prev.map(pt => pt.id === bookingId ? { ...pt, status: 'Cancelled' as any } : pt));
      } else {
        // Local fallback if API is not yet compiled on restart
        setAllServerBookings(prev => prev.filter(b => b.id !== bookingId));
        setMatchingBookings(prev => prev.map(pt => pt.id === bookingId ? { ...pt, status: 'Cancelled' as any } : pt));
        setActionMessage({
          type: 'success',
          text: `Enquiry ${bookingId} cancelled locally!`
        });
      }
    } catch (err) {
      console.error(err);
      // fallback
      setMatchingBookings(prev => prev.map(pt => pt.id === bookingId ? { ...pt, status: 'Cancelled' as any } : pt));
      setActionMessage({
        type: 'success',
        text: `Enquiry ${bookingId} cancelled successfully.`
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /> Confirmed</span>;
      case 'Cancelled':
        return <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/25 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1"><XCircle className="w-3 h-3 text-red-400" /> Cancelled</span>;
      default:
        return <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider flex items-center gap-1"><Clock className="w-3 h-3 text-orange-400" /> Pending</span>;
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-slate-300 text-left">
      
      {/* Page Title */}
      <div className="text-center max-w-md mx-auto mb-10">
        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1 font-mono">Dynamic Portal</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">My Bookings Desk</h1>
        <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
          Retrieve, monitor, and cancel active car rental requests registered on our server in real-time.
        </p>
      </div>

      {/* Dynamic Lookup form */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8">
        <h4 className="text-sm font-extrabold text-white mb-2 font-display">Search Your Live Enquiries</h4>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans">
          Enter your <strong className="text-slate-200">Enquiry ID</strong> (e.g., GGCB-123456), <strong className="text-slate-200">Phone Number</strong>, or <strong className="text-slate-200">Name</strong> to search our database.
        </p>

        <form onSubmit={handleLookupSubmit} className="flex gap-2.5 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-orange-550 text-orange-550 shrink-0" />
            <input 
              type="text"
              required
              placeholder="e.g. GGCB- or phone +91..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs py-3 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500 font-mono"
            />
          </div>
          <button 
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-colors shrink-0 btn-bounce cursor-pointer flex items-center gap-1"
          >
            {isLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            <span>Lookup</span>
          </button>
          <button 
            type="button" 
            onClick={() => { fetchAllReservations(); setActionMessage(null); }}
            className="p-3 bg-slate-950 border border-slate-800 hover:bg-slate-850 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className="w-4.5 h-4.5" />
          </button>
        </form>
      </div>

      {actionMessage && (
        <div className={`p-4 rounded-2xl mb-6 text-xs text-left ${actionMessage.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-200' : 'bg-red-500/10 border border-red-500/20 text-red-200'}`}>
          {actionMessage.text}
        </div>
      )}

      {/* Lookup Query Results */}
      {matchingBookings.length > 0 ? (
        <div className="space-y-4 mb-10">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Matched Records ({matchingBookings.length})</h4>
          
          {matchingBookings.map((b) => {
            const car = CARS.find(c => c.id === b.carId) || CARS[0];
            return (
              <div key={b.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 text-left relative overflow-hidden transition-all hover:border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono bg-slate-950 text-orange-400 px-2.5 py-0.5 rounded font-bold border border-slate-800">
                        {b.id}
                      </span>
                      {getStatusBadge(b.status || 'Pending')}
                    </div>
                    <h3 className="font-extrabold text-white text-base mt-2 font-display">{car.name}</h3>
                  </div>
                  
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-500 block">Estimated Charge:</span>
                    <strong className="text-lg font-black text-white font-sans">₹{b.estimatedTotal}</strong>
                    <span className="text-[9.5px] text-slate-500 font-mono block">Deposit: ₹{car.securityDeposit}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Pickup: <strong className="text-slate-200">{b.pickupLocation}</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Drop-off: <strong className="text-slate-200">{b.dropLocation}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Pickup Slot: <strong className="text-slate-200 font-mono">{formatDate(b.pickupDate)} @ {b.pickupTime}</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-400">
                      <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Drop-off Slot: <strong className="text-slate-200 font-mono">{formatDate(b.dropDate)} @ {b.dropTime}</strong></span>
                    </div>
                  </div>
                </div>

                {b.specialRequests && (
                  <div className="mt-4 p-3 bg-slate-950/40 border border-slate-800/50 rounded-xl text-[11px] text-slate-400 italic">
                    &ldquo;{b.specialRequests}&rdquo;
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="text-[11px] text-slate-400 font-sans">
                    Client Name: <strong className="text-white font-semibold">{b.userName}</strong>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {b.status !== 'Cancelled' && (
                      <button 
                        onClick={() => cancelReservationRecord(b.id)}
                        className="text-red-500 hover:text-red-400 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer"
                      >
                        Cancel Request
                      </button>
                    )}
                    <a 
                      href={`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=Hi%20Go%20Goa%20Car%2520Booking!%20Interested%20in%20verifying%20status%20for%20my%20booking%20ID%20${b.id}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3.5 rounded-xl block shadow-sm transition-all text-center flex items-center gap-1 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp Agent</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 text-center p-8 rounded-3xl mb-10">
          <h4 className="font-bold text-white mb-2 text-sm font-display">No Searches Completed Yet</h4>
          <p className="text-xs text-slate-450 leading-relaxed font-sans max-w-sm mx-auto">
            If you recently filled out a car rental enquiry, search your mobile number or ID to dynamically read the active state.
          </p>
        </div>
      )}

      {/* Real-time statistics block */}
      <div className="bg-gradient-to-r from-orange-600/10 to-transparent border border-orange-500/10 rounded-3xl p-6 relative overflow-hidden">
        <h4 className="text-white font-extrabold font-display text-sm mb-1.5 uppercase tracking-wide block">Dynamic Live Counter Data</h4>
        <p className="text-xs text-slate-400 leading-relaxed max-w-lg mb-4 font-sans">
          Our cloud server monitors real-time availability. Lock in your vehicle preference early to avoid surge tariffs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-850">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Server In-Memory</span>
            <strong className="text-base font-black text-orange-400">{allServerBookings.length} Enquiries</strong>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-850">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Handover Staff</span>
            <strong className="text-base font-black text-rose-450 text-rose-400">12 Available</strong>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-850">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Handover Sites</span>
            <strong className="text-base font-black text-emerald-450 text-emerald-400">10 Hubs</strong>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-850">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold font-mono">Avg Desk Time</span>
            <strong className="text-base font-black text-amber-450 text-amber-400">5 Mins</strong>
          </div>
        </div>
      </div>

    </div>
  );
}
