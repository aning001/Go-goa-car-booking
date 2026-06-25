import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, X, User, CheckCircle, Sparkles } from 'lucide-react';
import { CARS, LOCATIONS, OFFICE_CONTACT } from './data';
import { Car, BookingRequest, ChatMessage } from './types';

// Import modular sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Fleet from './components/Fleet';
import Locations from './components/Locations';
import Attractions from './components/Attractions';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import MyReservations from './components/MyReservations';
import About from './components/About';
import Services from './components/Services';
import Blogs from './components/Blogs';
import CarDetails from './components/CarDetails';
import TharRental from './components/TharRental';
import LuxuryRental from './components/LuxuryRental';
import FamilyRental from './components/FamilyRental';

// Simple format date Helper
const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'thar-rental' | 'luxury-rental' | 'family-rental' | 'fleet' | 'services' | 'blogs' | 'locations' | 'reservations' | 'attractions' | 'faq' | 'contact' | 'car-detail' | 'booking'>('home');
  const [activeCarId, setActiveCarId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Selector & Booking State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('All');
  const [searchCarQuery, setSearchCarQuery] = useState('');
  
  // Dynamic Quote & Booking state
  const [bookingFormData, setBookingFormData] = useState({
    pickupLocation: LOCATIONS[0],
    dropLocation: LOCATIONS[0],
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '10:00',
    dropDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days default
    dropTime: '10:00',
    carId: CARS[0].id,
    userName: '',
    userPhone: '',
    userEmail: '',
    specialRequests: ''
  });

  const [estimatedDays, setEstimatedDays] = useState(3);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [selectedCar, setSelectedCar] = useState<Car>(CARS[0]);

  // Modals & Success Cards
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingRequest | null>(null);
  const [activeEnquiries, setActiveEnquiries] = useState<BookingRequest[]>([]);

  // AI Chat Assistant Widget States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "👋 Susegado! I'm your Go Goa AI Assistant! Planning a Goa trip? Ask me details about standard itineraries, the best beaches, speed limits, or which of our self-drive cars fits your group size. I can also help calculate quotes!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatGenerating, setIsChatGenerating] = useState(false);

  // Hook scroll helper - modified to redirect to the booking page instead of scrolling down
  const scrollToBookingSection = () => {
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  // Recalculate duration & price
  useEffect(() => {
    const start = new Date(`${bookingFormData.pickupDate}T${bookingFormData.pickupTime}`);
    const end = new Date(`${bookingFormData.dropDate}T${bookingFormData.dropTime}`);
    
    let days = 1;
    if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
      const diffTime = Math.abs(end.getTime() - start.getTime());
      days = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }
    setEstimatedDays(days);

    const car = CARS.find(c => c.id === bookingFormData.carId) || CARS[0];
    setSelectedCar(car);
    setEstimatedCost(days * car.pricePerDay);
  }, [bookingFormData.pickupDate, bookingFormData.pickupTime, bookingFormData.dropDate, bookingFormData.dropTime, bookingFormData.carId]);

  // Load any bookings saved locally on mount
  useEffect(() => {
    const local = localStorage.getItem('gg_car_bookings');
    if (local) {
      try {
        setActiveEnquiries(JSON.parse(local));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Lock background scroll when overlays/modals are active
  useEffect(() => {
    if (isBookingModalOpen || bookingResult) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBookingModalOpen, bookingResult]);

  // Scroll to top automatically when active tab or active car changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activeTab, activeCarId]);

  // Hash Routing Logic for true Multi-Page Dynamic Experience
  useEffect(() => {
    const handleHashRouter = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validTabs = ['home', 'about', 'thar-rental', 'luxury-rental', 'family-rental', 'fleet', 'services', 'blogs', 'locations', 'reservations', 'attractions', 'faq', 'contact', 'car-detail', 'booking'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash as any);
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (!hash) {
        setActiveTab('home');
      }
    };

    // Initialize
    handleHashRouter();

    window.addEventListener('hashchange', handleHashRouter);
    return () => window.removeEventListener('hashchange', handleHashRouter);
  }, []);

  // Synchronize document titles based on active tab/page
  useEffect(() => {
    window.location.hash = `#/${activeTab}`;
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    
    const titlesMap: Record<string, string> = {
      home: 'Go Goa Car Booking | Self-Drive Car Rental in Goa',
      about: 'About Us | Homegrown Goa Car Rental Legacy',
      'thar-rental': 'Mahindra Thar 4x4 Self-Drive Rental Goa | Go Goa',
      'luxury-rental': 'Luxury Self-Drive Car Rental Goa | Best Rates | Go Goa',
      'family-rental': 'Family 7-Seater Ertiga & SUVs Goa | Go Goa',
      fleet: 'Compare Self-Drive Fleets | Go Goa Car Rental',
      services: 'Premium Rental Services | Airport Handover & Unlimited KMs',
      blogs: 'Goa Travel Columns & Travel Guides | Go Goa',
      locations: 'Mopa & Dabolim Airport Handover | Go Goa',
      reservations: 'My Bookings Desk | Go Goa Car Rental Records',
      attractions: 'Goa Tourism & Beach Guideline | Go Goa',
      faq: 'Traffic Police Speed Limits & FAQ | Go Goa',
      contact: 'Support Hotline & Contact - Go Goa',
      booking: 'Direct Car Booking Desk | Go Goa Car Rental',
      'car-detail': `Compare Fleet Specifications | Go Goa Car Rental`
    };
    
    if (titlesMap[activeTab]) {
      document.title = titlesMap[activeTab];
    }
  }, [activeTab]);

  // Update specified field in booking form
  const handleInputChange = (field: string, value: string) => {
    setBookingFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Launch Book Modal with pre-selected car
  const triggerCarBooking = (car: Car) => {
    setBookingFormData(prev => ({ ...prev, carId: car.id }));
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  // Submit enquiry to express server
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingFormData.userName || !bookingFormData.userPhone) {
      alert('Please fill out your Name and Mobile Number to submit the enquiry!');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingFormData,
          estimatedTotal: estimatedCost
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setBookingResult(data.booking);
        const updatedList = [data.booking, ...activeEnquiries];
        setActiveEnquiries(updatedList);
        localStorage.setItem('gg_car_bookings', JSON.stringify(updatedList));
        setIsBookingModalOpen(false);
      } else {
        alert(data.error || 'Server error submission. Please try again.');
      }
    } catch (err) {
      console.error(err);
      // Fallback offline mode if something goes wrong
      const offlineBooking: BookingRequest = {
        id: 'GGCB-OFF-' + Math.floor(100000 + Math.random() * 900000),
        pickupLocation: bookingFormData.pickupLocation,
        dropLocation: bookingFormData.dropLocation,
        pickupDate: bookingFormData.pickupDate,
        pickupTime: bookingFormData.pickupTime,
        dropDate: bookingFormData.dropDate,
        dropTime: bookingFormData.dropTime,
        carId: bookingFormData.carId,
        userName: bookingFormData.userName,
        userPhone: bookingFormData.userPhone,
        userEmail: bookingFormData.userEmail,
        specialRequests: bookingFormData.specialRequests,
        estimatedTotal: estimatedCost,
        status: 'Pending',
        createdAt: new Date().toISOString()
      };
      setBookingResult(offlineBooking);
      const updatedList = [offlineBooking, ...activeEnquiries];
      setActiveEnquiries(updatedList);
      localStorage.setItem('gg_car_bookings', JSON.stringify(updatedList));
      setIsBookingModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp prefilled layout
  const handleWhatsAppRedirect = (booking: BookingRequest) => {
    const carDetails = CARS.find(c => c.id === booking.carId) || CARS[0];
    const messageText = 
      `*Go Goa Car Booking Enquiry*\n` +
      `--------------------------------\n` +
      `*Ref ID:* _${booking.id}_\n` +
      `*Name:* ${booking.userName}\n` +
      `*Phone:* ${booking.userPhone}\n` +
      `*Email:* ${booking.userEmail || 'N/A'}\n\n` +
      `*Car Preferred:* ${carDetails.name} (${carDetails.transmission})\n` +
      `*Pickup:* ${booking.pickupLocation}\n` +
      `*Date/Time:* ${formatDate(booking.pickupDate)} @ ${booking.pickupTime}\n\n` +
      `*Drop-off:* ${booking.dropLocation}\n` +
      `*Date/Time:* ${formatDate(booking.dropDate)} @ ${booking.dropTime}\n` +
      `*Duration:* ${estimatedDays} Days\n` +
      `*Estimated Cost:* ₹${booking.estimatedTotal} + ₹${carDetails.securityDeposit} (Refundable Deposit)\n` +
      `--------------------------------\n` +
      `*Notes:* ${booking.specialRequests || 'None'}\n\n` +
      `Hi Go Goa Car Booking team, I would like to lock in this booking description. Please confirm availability!`;

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=${encoded}`, '_blank');
  };

  // Submit live chat queries to Gemini API
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: chatInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMsgs = [...chatMessages, userMsg];
    setChatMessages(updatedMsgs);
    setChatInput('');
    setIsChatGenerating(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMsgs })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setChatMessages(prev => [
          ...prev,
          {
            id: 'model-' + Date.now(),
            role: 'model',
            text: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error(data.error || 'Invalid API structure');
      }
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [
        ...prev,
        {
          id: 'error-' + Date.now(),
          role: 'model',
          text: "I experienced a network slowdown looking up Goa routes or vehicles. Don't worry! Please call us directly at "+OFFICE_CONTACT.phone1+" or drop a line of request on WhatsApp for immediate support.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsChatGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white relative selection:bg-red-600 selection:text-white">
      {/* High-priority override styles for the marquee running smoothly on all screens and pages */}
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
      
      {/* 1. BRAND HEADER & NAVIGATION DESK */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* 1.5 DYNAMIC CONTACT HOTLINE MARQUEE */}
      <div className="w-full bg-gradient-to-r from-orange-950 via-orange-900 to-orange-950 border-y border-orange-850/30 overflow-hidden py-2 text-[11px] text-orange-200 font-mono relative z-20 flex items-center select-none active:bg-orange-900 transition-colors">
        <div className="animate-marquee-text flex gap-12 shrink-0 whitespace-nowrap">
          <div className="flex gap-12 items-center">
            <span className="text-orange-400 font-bold">🔥 SPECIALLY PRICED: GET 10% OFF ON ADVANCE ROAD BOOKINGS!</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              📞 <strong>HOTLINE CALL:</strong> 
              <a 
                href={`tel:${OFFICE_CONTACT.phone1.replace(/\s+/g, '')}`} 
                className="underline font-black text-white hover:text-orange-400 bg-orange-850 px-2 py-0.5 rounded border border-orange-700/20 transition-all duration-150"
              >
                {OFFICE_CONTACT.phone1}
              </a>
            </span>
            <span>•</span>
            <span>🌴 Airport Deliveries (Mopa &amp; Dabolim)</span>
            <span>•</span>
            <span>🚗 Hatchbacks, SUVs, Luxury Sedans &amp; Mahindra Thar 4x4 starting @ ₹1000/Day</span>
            <span>•</span>
            <span>💼 Unlimited Kilometers Policy &amp; 100% Refundable Security Deposit</span>
          </div>
          <div className="flex gap-12 items-center">
            <span className="text-orange-400 font-bold">🔥 SPECIALLY PRICED: GET 10% OFF ON ADVANCE ROAD BOOKINGS!</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              📞 <strong>HOTLINE CALL:</strong> 
              <a 
                href={`tel:${OFFICE_CONTACT.phone1.replace(/\s+/g, '')}`} 
                className="underline font-black text-white hover:text-orange-400 bg-orange-850 px-2 py-0.5 rounded border border-orange-700/20 transition-all duration-150"
              >
                {OFFICE_CONTACT.phone1}
              </a>
            </span>
            <span>•</span>
            <span>🌴 Airport Deliveries (Mopa &amp; Dabolim)</span>
            <span>•</span>
            <span>🚗 Hatchbacks, SUVs, Luxury Sedans &amp; Mahindra Thar 4x4 starting @ ₹1000/Day</span>
            <span>•</span>
            <span>💼 Unlimited Kilometers Policy &amp; 100% Refundable Security Deposit</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN WORKSPACE / TAB AREA */}
      <main className="flex-1 pb-16">

        {/* BACK TO HOME BUTTON FOR ALL OTHER PAGES */}
        {activeTab !== 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 -mb-2 text-left relative z-10">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'instant' as any });
              }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-orange-500/40 text-slate-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg group"
            >
              <svg className="w-4 h-4 text-red-500 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </button>
          </div>
        )}
        
        {/* VIEW 1: HOME PORTAL */}
        {activeTab === 'home' && (
          <div className="space-y-6">
            <Hero 
              scrollToBookingSection={scrollToBookingSection} 
              triggerCarBooking={triggerCarBooking}
            />
            <Testimonials />
          </div>
        )}

        {/* VIEW 15: DEDICATED CAR BOOKING PAGE */}
        {activeTab === 'booking' && (
          <div className="py-8 animate-fade-in text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 mt-2">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2 font-mono">Live Booking Counter</span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none font-display">
                Goa Car Booking &amp; Quote Engine
              </h1>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl font-sans">
                Set travel dates, select delivery locations (Mopa/Dabolim Airports available), and instantly estimate rent costs. Fast verification over WhatsApp!
              </p>
            </div>
            
            <BookingForm 
              bookingFormData={bookingFormData}
              handleInputChange={handleInputChange}
              estimatedDays={estimatedDays}
              estimatedCost={estimatedCost}
              selectedCar={selectedCar}
              setIsBookingModalOpen={setIsBookingModalOpen}
              activeEnquiries={activeEnquiries}
              setActiveEnquiries={setActiveEnquiries}
              handleWhatsAppRedirect={handleWhatsAppRedirect}
              setActiveTab={setActiveTab}
            />
          </div>
        )}

        {/* VIEW 2: DYNAMIC FLEET LIST */}
        {activeTab === 'fleet' && (
          <Fleet 
            searchCarQuery={searchCarQuery}
            setSearchCarQuery={setSearchCarQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTransmission={selectedTransmission}
            setSelectedTransmission={setSelectedTransmission}
            triggerCarBooking={triggerCarBooking}
            onSelectCar={(id) => {
              setActiveCarId(id);
              setActiveTab('car-detail');
            }}
          />
        )}

        {/* VIEW 8: ABOUT US PAGE */}
        {activeTab === 'about' && <About />}

        {/* VIEW 9: OUR SERVICES PAGE */}
        {activeTab === 'services' && <Services />}

        {/* VIEW 10: TRAVEL COUMNS & BLOGS PAGE */}
        {activeTab === 'blogs' && <Blogs />}

        {/* VIEW 11: SPECIFIC LANDING PAGES */}
        {activeTab === 'thar-rental' && (
          <TharRental 
            triggerCarBooking={triggerCarBooking}
            setActiveTab={setActiveTab}
            setActiveCarId={setActiveCarId}
          />
        )}

        {/* VIEW 12: LUXURY RENTAL PAGE */}
        {activeTab === 'luxury-rental' && (
          <LuxuryRental 
            triggerCarBooking={triggerCarBooking}
            setActiveTab={setActiveTab}
            setActiveCarId={setActiveCarId}
          />
        )}

        {/* VIEW 13: FAMILY RENTAL PAGE */}
        {activeTab === 'family-rental' && (
          <FamilyRental 
            triggerCarBooking={triggerCarBooking}
            setActiveTab={setActiveTab}
            setActiveCarId={setActiveCarId}
          />
        )}

        {/* VIEW 14: CAR SPECIFICATION DETAILS PAGE */}
        {activeTab === 'car-detail' && activeCarId && (
          <CarDetails 
            carId={activeCarId} 
            onBack={() => {
              setActiveCarId(null);
              setActiveTab('fleet');
            }} 
            triggerCarBooking={triggerCarBooking}
          />
        )}

        {/* VIEW 3: AIRPORT DELIVERY LOCATIONS MAP */}
        {activeTab === 'locations' && <Locations />}

        {/* VIEW 4: TOURIST ARTICLES & LOCAL LINKS */}
        {activeTab === 'attractions' && <Attractions setActiveTab={setActiveTab} />}

        {/* VIEW 5: SECURITY GUIDELINES & TRAFFIC LIMITS */}
        {activeTab === 'faq' && <FAQ />}

        {/* VIEW 6: DIRECT ENQUIRY AGENTS WORKSPACE */}
        {activeTab === 'contact' && (
          <Contact 
            bookingFormData={bookingFormData}
            handleInputChange={handleInputChange}
            isSubmitting={isSubmitting}
            handleFormSubmit={handleFormSubmit}
          />
        )}

        {/* VIEW 7: DYNAMIC RESERVATIONS DESK */}
        {activeTab === 'reservations' && <MyReservations />}

      </main>

      {/* 3. CORNER FLOATING HOTLINE BUTTONS */}
      <div className="fixed left-4 bottom-auto top-[30%] md:top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5">
        <a
          href={`tel:${OFFICE_CONTACT.phone1.replace(/\s+/g, '')}`}
          className="group flex items-center justify-center bg-slate-950 border border-slate-800 hover:bg-slate-900 text-white w-11 h-11 md:w-12 md:h-12 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 animate-bounce-call"
          title="Direct Call Support"
        >
          <Phone className="w-5 h-5 text-red-500 shrink-0" />
        </a>

        <a
          href={`https://wa.me/${OFFICE_CONTACT.whatsapp}?text=Hi,%20I%20want%20to%20rent%20a%20self-drive%2520car%2520for%2520my%2520Goa%2520trip.`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white w-11 h-11 md:w-12 md:h-12 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border border-emerald-500/20 animate-bounce-whatsapp"
          title="Instant WhatsApp Chat"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0 text-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <button
          onClick={() => setIsChatOpen(prev => !prev)}
          className="group flex items-center justify-center bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-white w-11 h-11 md:w-12 md:h-12 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 animate-bounce-ai cursor-pointer"
          title="Open AI Planner"
        >
          <Sparkles className="w-5 h-5 text-orange-450 shrink-0 animate-pulse" />
        </button>
      </div>

      {/* 4. CHAT ADVISOR OVERLAY */}
      <AIChat 
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        isChatGenerating={isChatGenerating}
        handleChatSubmit={handleChatSubmit}
      />

      {/* 5. SECURE RESERVATION MODAL OVERLAY */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center items-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 rounded-3xl shadow-2xl max-w-xl w-full p-6 text-slate-205 border border-slate-800 overflow-hidden overflow-y-auto max-h-[90vh] text-left"
            >
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                <div>
                  <h3 className="font-extrabold text-white text-base font-display">Verify Rental Details</h3>
                  <p className="text-[10px] text-orange-400 mt-0.5 font-bold uppercase tracking-wider font-mono">Selected Car: {selectedCar.name}</p>
                </div>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Visual Summary Block */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Pickup Info</span>
                    <strong className="text-white leading-none block mt-1">{bookingFormData.pickupLocation}</strong>
                    <span className="text-[10px] text-slate-400 mt-1 block">{formatDate(bookingFormData.pickupDate)} @ {bookingFormData.pickupTime}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Drop-off Info</span>
                    <strong className="text-white leading-none block mt-1">{bookingFormData.dropLocation}</strong>
                    <span className="text-[10px] text-slate-400 mt-1 block">{formatDate(bookingFormData.dropDate)} @ {bookingFormData.dropTime}</span>
                  </div>

                  <div className="col-span-2 pt-2 border-t border-slate-800 flex justify-between items-center">
                    <div className="font-medium text-slate-400">
                      Calculated Duration: <strong className="text-white font-bold">{estimatedDays} Days</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-bold">Estimated charge</span>
                      <strong className="text-base font-extrabold text-orange-400">₹{estimatedCost}</strong>
                      <span className="text-[8.5px] text-slate-500 block font-light">Refundable Deposit: ₹{selectedCar.securityDeposit}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Verify Your Contact Number</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Please enter your name"
                        value={bookingFormData.userName}
                        onChange={(e) => handleInputChange('userName', e.target.value)}
                        className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mobile / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={bookingFormData.userPhone}
                        onChange={(e) => handleInputChange('userPhone', e.target.value)}
                        className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white focus:border-orange-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="johndoe@example.com"
                      value={bookingFormData.userEmail}
                      onChange={(e) => handleInputChange('userEmail', e.target.value)}
                      className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white focus:border-orange-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Any Special requests / Flight numbers</label>
                    <textarea 
                      rows={2}
                      placeholder="Add any specific delivery requirements..."
                      value={bookingFormData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="w-full text-xs p-3 bg-slate-950 border border-slate-800 rounded-xl outline-none text-white focus:border-orange-500 font-sans"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 flex gap-2 justify-end">
                  <button 
                    type="button"
                    onClick={() => setIsBookingModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 text-xs rounded-xl shadow transition-colors cursor-pointer btn-bounce"
                  >
                    {isSubmitting ? 'Registering Booking...' : 'Proceed to Book'}
                  </button>
                </div>

              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. RECENT BOOKING ENQUIRY SUCCESS RESULT OVERLAY MODAL */}
      <AnimatePresence>
        {bookingResult && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center items-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full p-6 text-slate-350 border border-slate-805 text-center text-left"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-450 flex items-center justify-center mb-4 border border-emerald-500/20 shadow-sm">
                <span className="text-xl">✓</span>
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest bg-orange-600 text-white px-2.5 py-1 rounded font-mono block w-fit mx-auto leading-none">
                Enquiry Received!
              </span>

              <h3 className="font-extrabold text-white text-lg tracking-tight mt-3 mb-1 font-display">
                Your Goa Ride reference is registered
              </h3>
              
              <div className="my-2 bg-slate-950 p-2 rounded text-xs font-semibold font-mono text-slate-300 uppercase">
                Enquiry ID: {bookingResult.id}
              </div>

              <p className="text-xs text-slate-450 mt-2 leading-relaxed font-sans">
                Thank you, {bookingResult.userName}! Your self-drive request has been registered in our database under status <strong className="text-orange-400 font-bold">&ldquo;Pending Review&rdquo;</strong>.
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 my-4 text-xs font-medium space-y-1 text-left text-slate-300">
                <div className="flex justify-between border-b border-slate-850 pb-1 mb-1 text-[11px]">
                  <span>Vehicle Choice:</span>
                  <strong className="text-white font-bold uppercase">
                    {(CARS.find(c => c.id === bookingResult.carId) || CARS[0]).name}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>Pickup Location:</span>
                  <span className="text-slate-400 truncate max-w-xs">{bookingResult.pickupLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pickup Slot Date/Time:</span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {formatDate(bookingResult.pickupDate)} @ {bookingResult.pickupTime}
                  </span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-850 mt-1">
                  <span>Estimated total Daily charge:</span>
                  <strong className="text-orange-400 text-xs font-bold">₹{bookingResult.estimatedTotal}</strong>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20 text-[11px] text-amber-200 text-left mb-5 leading-normal">
                💡 <strong>Next Crucial Step:</strong> Goa self drive rentals are locked over manual calendar checks. Please click below to instantly forward your quote breakdown directly to our booking agent on WhatsApp.
              </div>

              <div className="space-y-2">
                <button 
                  onClick={() => handleWhatsAppRedirect(bookingResult)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 btn-bounce"
                >
                  <Phone className="w-4.5 h-4.5 text-white" />
                  <span>Verify Availability on WhatsApp</span>
                </button>
                <button 
                  onClick={() => setBookingResult(null)}
                  className="w-full text-slate-400 hover:text-white py-1.5 text-xs font-medium cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. COLLABORATIVE SECTORS FOOTER */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
