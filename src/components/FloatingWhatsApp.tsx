import React, { useState } from 'react';
import { MessageSquare, Send, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../assets/images/saad_logo_1783062133118.jpg';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '+966534182945'; // 053 418 2945 in Saudi format

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedText}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const handleQuickChat = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden glass-card border border-emerald-500/20 z-50"
            id="whatsapp-chat-box"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-black overflow-hidden border border-white/20 flex items-center justify-center shrink-0">
                    <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Saad WebCreator Support</h4>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Online • Typically replies in 5m
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                aria-label="Close support chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-gray-950/95 space-y-3 max-h-60 overflow-y-auto text-sm">
              <div className="bg-gray-900 rounded-2xl rounded-tl-none p-3 border border-gray-800 text-gray-300 max-w-[85%]">
                <p className="text-xs text-emerald-400 font-medium mb-1">Saad Assistant</p>
                Hello there! 👋 We build custom high-performance websites. How can we help you scale your business today?
              </div>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono px-1">Quick Inquiries</p>
                <button
                  onClick={() => handleQuickChat("Hello, I would like to get a free quotation for a custom website.")}
                  className="w-full text-left bg-gray-900 hover:bg-emerald-950/40 hover:border-emerald-500/30 border border-gray-800/80 p-2.5 rounded-xl text-gray-300 hover:text-white transition-all text-xs flex items-center justify-between group"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </button>
                <button
                  onClick={() => handleQuickChat("Hi, I want to discuss a new e-commerce project on WhatsApp.")}
                  className="w-full text-left bg-gray-900 hover:bg-emerald-950/40 hover:border-emerald-500/30 border border-gray-800/80 p-2.5 rounded-xl text-gray-300 hover:text-white transition-all text-xs flex items-center justify-between group"
                >
                  <span>Discuss E-commerce Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </button>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-gray-950 border border-gray-800 focus:outline-none focus:border-emerald-500 text-white"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition-all flex items-center justify-center shadow-md shadow-emerald-900/20 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/20 flex items-center gap-2 group cursor-pointer border border-emerald-400/20"
        id="floating-whatsapp-btn"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-0 transition-opacity"></span>
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-white/10" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-emerald-500 animate-bounce"></span>
        </div>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-semibold pr-1">
          Chat on WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
