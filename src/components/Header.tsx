import React, { useState } from 'react';
import { Car as CarIcon, Phone, Menu, X, Compass, Sparkles, Users, FileText, Shield, MapPin, Mail } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'about' | 'thar-rental' | 'luxury-rental' | 'family-rental' | 'fleet' | 'services' | 'blogs' | 'locations' | 'reservations' | 'attractions' | 'faq' | 'contact' | 'car-detail' | 'booking';
  setActiveTab: (tab: any) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  
  // Clean, flat navigation structure requested by the user
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'fleet', label: 'Car Fleet' },
    { id: 'thar-rental', label: '🚙 Thar Rental' },
    { id: 'luxury-rental', label: '👑 Luxury Rental' },
    { id: 'family-rental', label: '👨‍👩‍👦 Family & SUV' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'terms-and-privacy', label: 'Terms & Privacy' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handlePageSelect = (tabId: any) => {
    if (tabId === 'terms-and-privacy') {
      window.location.href = 'terms-and-privacy.html';
      setIsMobileMenuOpen(false);
      return;
    }
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    // Instant snap to top to prevent dynamic overlay from scrolling
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handlePageSelect('home')}
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
          id="hdr-logo-btn"
        >
          <div className="bg-gradient-to-tr from-orange-600 to-orange-400 p-2 rounded-xl shadow-lg shadow-orange-500/10">
            <CarIcon className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="text-sm font-black tracking-tight text-white uppercase font-display block">Go Goa</span>
            <span className="text-[9px] font-bold text-orange-500 tracking-widest uppercase font-mono block -mt-1">Car Rental</span>
          </div>
        </button>

        {/* Desktop Navigation Menu (Flat direct list of requested pages) */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageSelect(item.id)}
              className={`px-3 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'hover:text-white hover:bg-slate-900 text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handlePageSelect('reservations')}
            className={`px-3 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'reservations' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            My Bookings
          </button>
        </nav>

        {/* Right side CTAs & Mobile toggler */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:+916287168644" 
            className="hidden sm:flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-850 px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-200 transition-all btn-bounce"
          >
            <Phone className="w-3 h-3 text-orange-500" />
            <span>Call Support</span>
          </a>
          <button 
            onClick={() => handlePageSelect('booking')}
            className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black px-3.5 py-1.5 rounded-xl text-[11px] uppercase tracking-wider transition-all shadow-md shadow-orange-500/15 cursor-pointer btn-bounce"
          >
            Book Car
          </button>
          
          {/* Mobile Menu Toggler */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95" 
            aria-label="Toggle Navigation Menu"
            id="mobile-nav-toggle-btn"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-orange-500" />
            ) : (
              <Menu className="w-5 h-5 text-orange-500" />
            )}
          </button>
        </div>

      </div>

      {/* MOBILE FULL PORTAL MENU DRAWER with Flat simple and explicit links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-slate-950/98 backdrop-blur-lg border-b border-slate-850 shadow-2xl z-40 max-h-[85vh] overflow-y-auto px-4 py-6 text-left flex flex-col gap-5 animate-fade-in select-none">
          
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold pl-2.5">Menu Navigation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={`py-3 px-3.5 rounded-xl border font-bold text-xs text-left transition-all flex items-center justify-between ${
                    activeTab === item.id 
                      ? 'bg-orange-600/15 border-orange-500 text-orange-400' 
                      : 'bg-slate-900 border-slate-850 text-slate-300 hover:bg-slate-850'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-slate-500 text-[10px]">&rarr;</span>
                </button>
              ))}
              
              <button
                onClick={() => handlePageSelect('reservations')}
                className={`py-3 px-3.5 rounded-xl border font-bold text-xs text-left transition-all flex items-center justify-between ${
                  activeTab === 'reservations' 
                    ? 'bg-orange-600/15 border-orange-500 text-orange-400' 
                    : 'bg-slate-900 border-slate-850 text-slate-300 hover:bg-slate-850'
                }`}
              >
                <span>🏷️ My Bookings</span>
                <span className="text-slate-500 text-[10px]">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Quick Helpline Support */}
          <div className="mt-2 text-center space-y-2">
            <a 
              href="tel:+916287168644" 
              className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-850 flex items-center justify-center gap-2 text-slate-200 transition-all text-xs font-bold font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>CALL DIRECT: +91 62871 68644</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
