import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Phone } from 'lucide-react';
import { OFFICE_CONTACT } from '../data';
import { ChatMessage } from '../types';

interface AIChatProps {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  chatMessages: ChatMessage[];
  chatInput: string;
  setChatInput: (input: string) => void;
  isChatGenerating: boolean;
  handleChatSubmit: (e: React.FormEvent) => void;
}

export default function AIChat({
  isChatOpen,
  setIsChatOpen,
  chatMessages,
  chatInput,
  setChatInput,
  isChatGenerating,
  handleChatSubmit
}: AIChatProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end selection:bg-orange-500 selection:text-white">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-slate-900 rounded-3xl shadow-2xl w-[320px] sm:w-[360px] h-[450px] border border-slate-800 overflow-hidden mb-3 flex flex-col text-slate-300"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 text-white flex justify-between items-center select-none border-b border-slate-850">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 p-2 rounded-xl">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left font-display">
                  <div className="text-xs font-black tracking-tight">Goa AI Local Planner</div>
                  <div className="text-[9px] text-orange-400 font-extrabold uppercase tracking-wider font-mono">Gemini AI Host</div>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 cursor-pointer transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/40 select-text text-xs">
              {chatMessages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[8px] text-slate-500 font-bold uppercase mb-0.5 tracking-wider px-1 font-mono">
                    {msg.role === 'user' ? 'You' : 'Go Goa Host'}
                  </span>
                  <div 
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-orange-600 text-white rounded-tr-none shadow-md shadow-orange-600/10 border border-orange-500/10' 
                        : 'bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800/60'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[8px] text-slate-500 font-mono mt-0.5 px-1 font-medium">{msg.timestamp}</span>
                </div>
              ))}
              
              {isChatGenerating && (
                <div className="flex items-start gap-1">
                  <div className="bg-orange-500/10 border border-orange-500/15 text-orange-400 px-3 py-2 rounded-xl text-[11px] font-semibold flex items-center gap-2 animate-pulse font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                    <span>AI Host planning your roads...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-3 bg-slate-950 border-t border-slate-850 flex gap-1.5 items-center">
              <input 
                type="text" 
                placeholder="Ask driving limits, routes, vehicle tips..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 text-xs px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl outline-none text-white placeholder-slate-500 focus:border-orange-500"
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-xl block transition-all cursor-pointer btn-bounce"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-slate-950 border border-slate-800 hover:bg-slate-900 text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 cursor-pointer transition-all hover:-translate-y-0.5 select-none font-mono font-bold font-display uppercase text-xs btn-bounce"
      >
        <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
        <span>Consult AI Planner</span>
      </button>
    </div>
  );
}
