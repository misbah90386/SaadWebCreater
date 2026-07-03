import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Shield, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../assets/images/saad_logo_1783062133118.jpg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-gray-950/75 backdrop-blur-md border-b border-gray-900" id="global-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Identity (Premium Typographic & SVG Visual Emblem) */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-gold/40 flex items-center justify-center bg-black shadow-lg shadow-yellow-950/10 shrink-0">
              <img 
                src={logoUrl} 
                alt="Saad Web Creator Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white font-display uppercase flex items-center gap-1">
                Saad <span className="text-brand-gold font-normal">WebCreator</span>
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
                Modern Web Design Studio
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('dream-website-form-section')} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-brand-gold transition-colors cursor-pointer">
              Build Dream Website
            </button>
            <button onClick={() => scrollToSection('features-showcase-section')} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-brand-gold transition-colors cursor-pointer">
              Our Expertise
            </button>
            <button onClick={() => scrollToSection('faq-section')} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-brand-gold transition-colors cursor-pointer">
              Client FAQ
            </button>
            <button onClick={() => scrollToSection('contact-us-section')} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-brand-gold transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('dream-website-form-section')}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-extrabold text-white transition-all border border-white/10 hover:border-brand-gold/30 cursor-pointer"
            >
              Start Custom Form
            </button>
            <button
              onClick={() => scrollToSection('contact-us-section')}
              className="px-4.5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black text-xs font-extrabold shadow-lg shadow-brand-gold/20 flex items-center gap-1 cursor-pointer group"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/95 border-b border-gray-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              <button
                onClick={() => scrollToSection('dream-website-form-section')}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                Build Dream Website
              </button>
              <button
                onClick={() => scrollToSection('features-showcase-section')}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                Our Expertise
              </button>
              <button
                onClick={() => scrollToSection('faq-section')}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                Client FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact-us-section')}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                Contact Us
              </button>

              <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2 px-4">
                <button
                  onClick={() => scrollToSection('dream-website-form-section')}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/30 text-center text-xs font-bold text-white transition-all cursor-pointer"
                >
                  Start Custom Form
                </button>
                <button
                  onClick={() => scrollToSection('contact-us-section')}
                  className="w-full py-3 rounded-xl bg-brand-gold text-center text-xs font-extrabold text-black hover:bg-brand-gold-light transition-colors shadow-lg shadow-brand-gold/10 cursor-pointer"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
