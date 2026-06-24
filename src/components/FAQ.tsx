import React, { useState } from 'react';
import { HelpCircle, AlertTriangle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [activeFAQCategory, setActiveFAQCategory] = useState<'all' | 'booking' | 'driving' | 'documents' | 'payments'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqSubcategories = [
    { id: 'all', title: 'Show All' },
    { id: 'booking', title: 'Booking FAQ' },
    { id: 'driving', title: 'Goa Speed limits & Driving' },
    { id: 'documents', title: 'Documents Needed' },
    { id: 'payments', title: 'Security Deposit & Payments' }
  ];

  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fade-in text-left text-slate-300">
      
      {/* Title block */}
      <div className="text-center max-w-md mx-auto mb-10">
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1 font-mono">FAQ Desk</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Goa Driving FAQs</h1>
        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
          Read all essential rules of Goa Traffic Police, refundable security deposits, and laminated licence paperwork before renting self-drive cars.
        </p>
      </div>

      {/* Mini subcategory filter tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-8">
        {faqSubcategories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveFAQCategory(c.id as any);
              setExpandedId(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeFAQCategory === c.id 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/15' 
                : 'bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.filter(f => activeFAQCategory === 'all' || f.category === activeFAQCategory).map((faq) => {
          const isExpanded = expandedId === faq.id;
          return (
            <div key={faq.id} className="bg-slate-900 rounded-3xl border border-slate-800/80 overflow-hidden transition-colors duration-200">
              <button 
                onClick={() => handleToggle(faq.id)}
                className="w-full text-left p-5 font-extrabold text-white text-sm select-none flex items-center justify-between gap-3 font-display focus:outline-none cursor-pointer hover:bg-slate-850/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 hover:text-white shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-orange-400" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="p-5 bg-slate-950/40 text-xs text-slate-400 leading-relaxed font-sans border-t border-slate-850/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Notice block */}
      <div className="bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-3xl p-5 mt-10">
        <h4 className="font-extrabold text-slate-100 text-xs uppercase tracking-wider mb-2 flex items-center gap-2 font-display">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <span>Urgent Goa Traffic Police Guideline</span>
        </h4>
        <p className="text-[11px] leading-relaxed font-sans text-slate-355 text-slate-300">
          Goa Traffic Police strictly enforces speed limits using optical speed guns near Zuari Bridge, Mandovi high-speed bypass, and Airport Expressways. The maximum permitted speed limit is <strong className="text-white font-bold leading-none">70 km/h</strong> on highway stretches, and <strong className="text-white font-bold leading-none">40 km/h</strong> inside cities and bridges. Heavy challans (fines) ranging from ₹1,000 to ₹5,000 are directly reported. Any traffic fine issued during the active rental block is the sole responsibility of the customer.
        </p>
      </div>

    </div>
  );
}
