import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ClientFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why do you not require or display any email addresses?",
      a: "Saudi businesses value rapid, relationship-driven collaboration. Emails often lead to delays, missed files, or spam. By handling all client inquiries directly over phone calls or WhatsApp, we can provide immediate design consulting, real-time custom proposals, and rapid asset coordination."
    },
    {
      q: "What technologies do you use to build custom websites?",
      a: "We develop 100% custom-coded applications using cutting-edge, secure frameworks like React, Vite, and tailwind. This avoids bulky site builders, resulting in blazing-fast load speeds, excellent security, and perfect Google Lighthouse scores."
    },
    {
      q: "Can you design custom logos or arrange domains and hosting?",
      a: "Yes! In the Multi-Step Request Form, you can specify if you already have a logo, domain, or hosting. If you select 'No', our creative studio handles full brand conceptualization, professional domain registration (e.g. .sa or .com.sa), and premium Cloud Run hosting setup."
    },
    {
      q: "How does the pricing estimation and budget limit match?",
      a: "We build premium websites tailored for various ranges—from compact landing pages (under 500 SAR) to robust, complex multi-language enterprise portals or fully-integrated E-commerce stores (5000+ SAR). We configure features modularly, so you get the absolute highest value for your specified budget."
    },
    {
      q: "Do you support Saudi local payment gateways and integrations?",
      a: "Absolutely! We routinely integrate WhatsApp automated support, Saudi Mada payment networks, Apple Pay gateway flows, Saudi Post shipping APIs, and Google Maps localized markers for physical store branches."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto relative" id="faq-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-brand-gold tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Clear Answers
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white font-display">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">Everything you need to know about partnering with Riyadh's elite web studio.</p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-zinc-900 bg-[#0A0A0C]/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 text-white hover:text-brand-gold transition-colors cursor-pointer"
                >
                  <span className="text-sm md:text-base font-extrabold font-display leading-tight">{faq.q}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#0F0F12] flex items-center justify-center shrink-0 border border-zinc-850">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-zinc-900/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Floating suggestion callout */}
        <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-brand-gold shrink-0" />
            <p className="text-gray-300">
              <span className="font-bold text-white">Have a highly custom project?</span> Reach out on WhatsApp or phone directly at <span className="text-brand-gold font-bold font-mono">053 418 2945</span> for instant consultation.
            </p>
          </div>
          <a
            href="https://wa.me/966534182945"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black font-extrabold transition-all text-center whitespace-nowrap"
          >
            Direct WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
