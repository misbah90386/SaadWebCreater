import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, Play, Sparkles, Star, Users, CheckCircle } from 'lucide-react';
import logoUrl from '../assets/images/saad_logo_1783062133118.jpg';

export default function HeroSection() {
  const scrollToRequestForm = () => {
    const el = document.getElementById('dream-website-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-us-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 md:px-8 overflow-hidden" id="hero-section">
      {/* Immersive background neon light blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-900/5 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient from-brand-gold/5 to-transparent blur-[120px] pointer-events-none"></div>

      {/* Subtle fine lines representing grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Premium Text & Conversion CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Micro trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[11px] font-mono font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-brand-gold animate-pulse fill-brand-gold/10" />
            <span>Award Winning Riyadh Web Studio</span>
          </div>

          {/* Eye-catching Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
            We Craft <span className="serif accent-text">Digital Masterpieces</span> For Saudi Brands
          </h1>

          {/* Descriptive Subtext */}
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed">
            Saad WebCreator engineers premium, modern, and high-converting bespoke websites tailored to your unique business goals, aesthetic preferences, and budget constraints.
          </p>

          {/* Trust points */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
              <span>100% Bespoke Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Saudi Local Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Optimized For SEO</span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={scrollToRequestForm}
              className="px-8 py-4 rounded-2xl bg-brand-gold hover:bg-brand-gold-light text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-900/20 flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <span>🚀 Start Custom Website Form</span>
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white hover:text-brand-gold hover:border-brand-gold/30 font-extrabold text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-white/20 cursor-pointer flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
            </button>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-zinc-900 border-2 border-zinc-950 flex items-center justify-center font-bold text-[10px] text-zinc-400">
                  {i === 4 ? '+50' : `U${i}`}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-0.5 text-brand-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
                <span className="text-xs font-bold text-white ml-1.5 font-mono">4.9 / 5.0</span>
              </div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Trusted by 80+ companies across Saudi Arabia</p>
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Abstract Artwork Simulating Floating Modules */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
          
          {/* Main Visual Frame representing a glassmorphic dashboard container */}
          <div className="w-[320px] md:w-[380px] h-[360px] md:h-[420px] rounded-3xl bg-gradient-to-br from-brand-gold/10 to-yellow-950/5 border border-white/5 relative shadow-2xl flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none"></div>

            {/* Simulated Floating App Card 1: E-commerce Product */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -left-8 w-44 rounded-2xl bg-zinc-950/90 border border-brand-gold/20 p-3.5 shadow-xl space-y-2.5 z-20"
            >
              <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-brand-gold-dark via-brand-gold to-brand-gold-light flex items-center justify-center">
                <span className="text-black font-mono font-bold text-xs uppercase tracking-widest">Store Item</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white">Saudi Oud Blend</p>
                <p className="text-[9px] font-mono text-brand-gold">450 SAR</p>
              </div>
              <div className="h-4.5 rounded-lg bg-brand-gold hover:bg-brand-gold-light flex items-center justify-center text-[8px] text-black font-black uppercase">
                Add To Cart
              </div>
            </motion.div>

            {/* Simulated Floating App Card 2: Analytic Chart widget */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 -right-8 w-48 rounded-2xl bg-zinc-950/90 border border-brand-gold/20 p-4 shadow-xl space-y-3 z-20"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-zinc-500 uppercase font-mono">Conversion Boost</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-gold/10 text-brand-gold font-bold">+184%</span>
              </div>
              <div className="flex items-end gap-1.5 h-12 pt-2">
                {[20, 45, 30, 60, 85, 50, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-gold rounded-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <p className="text-[9px] text-zinc-400 text-center font-mono leading-none">Real-time Visitor Metrics</p>
            </motion.div>

            {/* Simulated Floating App Card 3: Brand Badge */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-36 h-36 rounded-full bg-gradient-to-tr from-brand-gold-dark via-brand-gold to-brand-gold-light p-[2px] shadow-2xl z-10 flex items-center justify-center overflow-hidden"
            >
              <div className="w-full h-full bg-zinc-950 rounded-full flex flex-col items-center justify-center text-center p-0.5 overflow-hidden">
                <img src={logoUrl} alt="Saad WebCreator Logo" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Decorative arrow pointing down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex" onClick={scrollToRequestForm}>
        <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Configure Style</span>
        <ArrowDown className="w-4 h-4 text-brand-gold animate-bounce" />
      </div>
    </section>
  );
}
