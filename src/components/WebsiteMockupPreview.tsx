import React, { useMemo } from 'react';
import { 
  Laptop, Smartphone, Tablet, Star, CheckCircle, 
  HelpCircle, CreditCard, ShoppingCart, MessageSquare, 
  Phone, Calendar, Layout, Award, MapPin, Search
} from 'lucide-react';
import { motion } from 'motion/react';

interface MockupProps {
  formData: {
    fullName: string;
    businessName: string;
    websiteType: string;
    features: string[];
    designStyle: string;
    colorScheme: string;
    budget: string;
    expectedDelivery: string;
  };
}

export default function WebsiteMockupPreview({ formData }: MockupProps) {
  const [previewDevice, setPreviewDevice] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Convert Color Scheme to actual color options
  const themeColors = useMemo(() => {
    const raw = formData.colorScheme.toLowerCase();
    if (raw.includes('gold') || raw.includes('yellow')) {
      return { primary: 'from-brand-gold via-brand-gold-light to-brand-gold-dark', text: 'text-brand-gold', border: 'border-brand-gold/30', bg: 'bg-brand-gold/10', hex: '#D4AF37' };
    }
    if (raw.includes('green') || raw.includes('saudi') || raw.includes('emerald')) {
      return { primary: 'from-emerald-400 to-teal-600', text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', hex: '#10b981' };
    }
    if (raw.includes('red') || raw.includes('crimson') || raw.includes('rose')) {
      return { primary: 'from-rose-500 to-red-600', text: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10', hex: '#f43f5e' };
    }
    if (raw.includes('purple') || raw.includes('violet') || raw.includes('lavender')) {
      return { primary: 'from-violet-500 to-purple-600', text: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/10', hex: '#8b5cf6' };
    }
    if (raw.includes('orange') || raw.includes('amber')) {
      return { primary: 'from-orange-500 to-amber-600', text: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10', hex: '#f97316' };
    }
    if (raw.includes('pink') || raw.includes('magenta')) {
      return { primary: 'from-pink-500 to-rose-500', text: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-500/10', hex: '#ec4899' };
    }
    // Default gold prestige
    return { primary: 'from-brand-gold via-brand-gold-light to-brand-gold-dark', text: 'text-brand-gold', border: 'border-brand-gold/30', bg: 'bg-brand-gold/10', hex: '#D4AF37' };
  }, [formData.colorScheme]);

  // Determine pricing estimation metrics based on features and complexity
  const pricingData = useMemo(() => {
    let basePrice = 800; // standard SAR
    
    // Website type multiplier
    if (formData.websiteType.includes('E-commerce')) basePrice = 2500;
    else if (formData.websiteType.includes('Booking') || formData.websiteType.includes('Medical')) basePrice = 1800;
    else if (formData.websiteType.includes('Real Estate')) basePrice = 2200;
    else if (formData.websiteType.includes('Custom')) basePrice = 3000;
    else if (formData.websiteType.includes('Portfolio') || formData.websiteType.includes('Landing')) basePrice = 900;

    // Feature addon computation
    const featureAddons = formData.features.map(f => {
      let cost = 150;
      if (['Online Payments', 'Admin Dashboard', 'User Login'].includes(f)) cost = 400;
      else if (['Online Booking', 'Appointment System', 'Multi-language'].includes(f)) cost = 300;
      else if (['SEO Optimization', 'Analytics', 'WhatsApp Chat'].includes(f)) cost = 100;
      return { name: f, cost };
    });

    const featuresTotal = featureAddons.reduce((sum, item) => sum + item.cost, 0);
    const totalEst = basePrice + featuresTotal;

    // Align estimation with Saudi market values and user choice
    return {
      base: basePrice,
      features: featureAddons,
      total: totalEst
    };
  }, [formData.websiteType, formData.features]);

  // Content rendering based on Website Type
  const contentMock = useMemo(() => {
    const bizName = formData.businessName || "Your Brand Name";
    const type = formData.websiteType || "Business Website";

    if (type.includes('E-commerce')) {
      return {
        title: `Shop Premium Collections at ${bizName}`,
        tagline: "High-end shopping experience, delivered seamlessly.",
        cta: "Explore Store",
        sectionTitle: "Trending Products",
        items: ["Premium Product 01", "Luxury Leather Goods", "Smart Accessories"],
        prices: ["150 SAR", "499 SAR", "250 SAR"],
        rating: "4.9 (240+ reviews)"
      };
    }
    if (type.includes('Restaurant') || type.includes('Cafe') || type.includes('Bakery')) {
      return {
        title: `Exquisite Flavors of ${bizName}`,
        tagline: "Indulge in an extraordinary culinary journey with us.",
        cta: "Book Table / Order Online",
        sectionTitle: "Signature Dishes",
        items: ["Chef's Special Grill", "Artisanal Crafted Pastry", "Premium Specialty Coffee"],
        prices: ["85 SAR", "35 SAR", "22 SAR"],
        rating: "4.8 (1,150+ reviews)"
      };
    }
    if (type.includes('Real Estate')) {
      return {
        title: `Find Your Dream Residence with ${bizName}`,
        tagline: "Exclusive luxury villas and apartments in premium Saudi neighborhoods.",
        cta: "View Listings",
        sectionTitle: "Featured Properties",
        items: ["Luxury Villa Riyadh Al-Hada", "Modern Penthouse Jeddah Marina", "Elite Compound Retreat"],
        prices: ["4,500,000 SAR", "2,200,000 SAR", "6,000,000 SAR"],
        rating: "5.0 (98 ratings)"
      };
    }
    if (type.includes('Medical')) {
      return {
        title: `Elite Healthcare & Diagnostics at ${bizName}`,
        tagline: "Experienced medical practitioners, state-of-the-art medical technology.",
        cta: "Schedule Appointment",
        sectionTitle: "Medical Specialties",
        items: ["Premium Dental Care", "Aesthetic Dermatology", "Advanced Family Medicine"],
        prices: ["Consultation 150 SAR", "Consultation 200 SAR", "Consultation 100 SAR"],
        rating: "4.9 (4,800+ patients served)"
      };
    }
    if (type.includes('Portfolio')) {
      return {
        title: `Hi, I am the Creative Vision behind ${bizName}`,
        tagline: "Delivering world-class digital interfaces and visual brand identities.",
        cta: "View Portfolio",
        sectionTitle: "Featured Case Studies",
        items: ["Fintech Mobile Platform", "Luxury Hospitality Rebrand", "Creative Agency Concept"],
        prices: ["Award Winning", "Featured in Design", "Visual Concept"],
        rating: "5.0 rating on Clutch"
      };
    }
    // Default corporate / custom
    return {
      title: `Innovating Digital Solutions with ${bizName}`,
      tagline: "Tailored software development and high-converting websites designed to scale.",
      cta: "Work With Us",
      sectionTitle: "Our Core Services",
      items: ["Enterprise Custom Software", "Web & Mobile Development", "Strategic Search Engine Optimization"],
      prices: ["High Conversion", "Fully Responsive", "Optimized Speed"],
      rating: "4.9/5 from 80+ Saudi Enterprises"
    };
  }, [formData.businessName, formData.websiteType]);

  // Handle CSS typography font choices based on Design Style
  const typographyClass = useMemo(() => {
    switch (formData.designStyle) {
      case 'Luxury':
        return { title: 'font-serif tracking-tight font-extrabold', body: 'font-sans text-sm tracking-wide text-gray-400' };
      case 'Minimal':
        return { title: 'font-sans font-light tracking-widest uppercase', body: 'font-mono text-xs text-gray-400' };
      case 'Creative':
        return { title: 'font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r', body: 'font-sans text-xs text-gray-300' };
      case 'Corporate':
        return { title: 'font-sans font-bold tracking-tight', body: 'font-sans text-sm text-gray-400' };
      default: // Modern, Dark Theme, Elegant
        return { title: 'font-sans tracking-tight font-extrabold', body: 'font-sans text-sm text-gray-400' };
    }
  }, [formData.designStyle]);

  return (
    <div className="flex flex-col h-full bg-gray-950/80 rounded-3xl border border-gray-800/80 overflow-hidden shadow-2xl relative" id="website-mockup-preview-container">
      {/* Dynamic light effects matching user color */}
      <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-r ${themeColors.primary} blur-[120px] opacity-20 pointer-events-none`}></div>
      
      {/* Preview Header & Controls */}
      <div className="p-4 bg-gray-900/60 border-b border-gray-800/60 flex items-center justify-between flex-wrap gap-2 z-10">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
          <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-xs text-gray-400 font-mono ml-2 truncate max-w-[120px] md:max-w-xs">
            {formData.businessName ? `${formData.businessName.toLowerCase().replace(/\s+/g, '-')}.com` : 'yourproject.com'}
          </span>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center bg-gray-950 p-1 rounded-xl border border-gray-800/80 text-gray-400">
          <button 
            onClick={() => setPreviewDevice('desktop')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${previewDevice === 'desktop' ? 'bg-gray-800 text-white' : 'hover:text-gray-300'}`}
            title="Desktop view"
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setPreviewDevice('tablet')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${previewDevice === 'tablet' ? 'bg-gray-800 text-white' : 'hover:text-gray-300'}`}
            title="Tablet view"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setPreviewDevice('mobile')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${previewDevice === 'mobile' ? 'bg-gray-800 text-white' : 'hover:text-gray-300'}`}
            title="Mobile view"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Container splits into Visual Mockup & Itemized Quotation Estimates */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 scrollbar">
        
        {/* Visual Mockup Stage */}
        <div className="flex justify-center items-start flex-1 min-h-[340px]">
          <motion.div 
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`bg-[#07090e] border border-gray-800/80 rounded-2xl shadow-xl overflow-hidden relative transition-all duration-300 ${
              previewDevice === 'desktop' ? 'w-full' :
              previewDevice === 'tablet' ? 'w-[75%]' : 'w-[45%] min-w-[260px]'
            }`}
          >
            {/* Mock Navigation Bar */}
            <div className="border-b border-gray-800/80 px-3 py-2 bg-gray-950 flex items-center justify-between text-xs">
              <span className="font-bold text-[11px] uppercase tracking-wider text-white font-display">
                {formData.businessName ? formData.businessName.substring(0, 15) : "Studio Brand"}
              </span>
              {previewDevice === 'desktop' && (
                <div className="flex gap-2 text-gray-400 scale-90">
                  <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Services</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Portfolio</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
                </div>
              )}
              <span className={`px-2 py-0.5 rounded text-[9px] font-bold bg-gradient-to-r ${themeColors.primary} text-white`}>
                {formData.designStyle || 'Modern'}
              </span>
            </div>

            {/* Mock Landing Screen Hero */}
            <div className="p-4 md:p-6 text-center relative overflow-hidden bg-gray-950/40">
              <div className="absolute top-0 inset-x-0 h-40 bg-radial-gradient from-indigo-500/10 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 space-y-2 mt-2">
                {/* Micro Brand Badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-gray-400">
                  <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  <span>Officially Configured Style</span>
                </div>

                {/* Hero Title */}
                <h1 className={`text-sm md:text-base text-white ${typographyClass.title} ${
                  formData.designStyle === 'Creative' ? `${themeColors.text}` : ''
                }`}>
                  {contentMock.title}
                </h1>

                {/* Tagline */}
                <p className={`text-[11px] max-w-sm mx-auto ${typographyClass.body} line-clamp-2`}>
                  {contentMock.tagline}
                </p>

                {/* Dynamic CTA button based on user's color selection */}
                <div className="pt-2 flex flex-wrap gap-1.5 justify-center">
                  <span className={`px-3 py-1 rounded-lg text-[9px] font-bold text-white bg-gradient-to-r ${themeColors.primary} hover:opacity-90 shadow-md transition-all cursor-pointer`}>
                    {contentMock.cta}
                  </span>
                  {previewDevice === 'desktop' && (
                    <span className="px-3 py-1 rounded-lg text-[9px] font-bold text-gray-300 bg-white/5 hover:bg-white/10 transition-all border border-white/10 cursor-pointer">
                      Learn More
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Mock Secondary Section / Grid Elements */}
            <div className="bg-gray-950/60 p-4 border-t border-gray-900">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[11px] font-bold text-white font-display uppercase tracking-wider">
                  {contentMock.sectionTitle}
                </h3>
                <span className="text-[9px] font-mono text-gray-500">{contentMock.rating}</span>
              </div>

              <div className={`grid gap-2 ${previewDevice === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                {contentMock.items.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-800/80 text-left space-y-1">
                    <div className="w-full h-12 rounded-lg bg-gray-950/80 border border-gray-800/40 flex items-center justify-center relative overflow-hidden group">
                      <Layout className="w-4 h-4 text-gray-600 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-200 truncate">{item}</p>
                    <p className={`text-[9px] font-mono font-medium ${themeColors.text}`}>
                      {contentMock.prices[idx]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Footer with Configured Features */}
            <div className="p-3 bg-gray-950 border-t border-gray-900 text-[10px] text-gray-500 flex flex-wrap justify-between items-center gap-2">
              <span>© {new Date().getFullYear()} {formData.businessName || "Your Agency App"}</span>
              <div className="flex gap-2 flex-wrap max-w-[60%]">
                {formData.features.slice(0, 3).map((f, i) => (
                  <span key={i} className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                    {f}
                  </span>
                ))}
                {formData.features.length > 3 && (
                  <span className="text-[8px] text-gray-600">+{formData.features.length - 3} more</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Premium Calculator & Scope Analysis */}
        <div className="p-4 rounded-2xl bg-[#0F0F12]/80 border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-300 font-mono">
              Live Quotation Estimator
            </h4>
            <span className="px-2 py-0.5 rounded text-[10px] bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-mono">
              Estimated In Saudi Riyal (SAR)
            </span>
          </div>

          <div className="divide-y divide-zinc-800/60 text-xs">
            <div className="py-2 flex justify-between items-center text-gray-400">
              <span>Base Build ({formData.websiteType || "Standard Site"})</span>
              <span className="font-mono font-semibold text-white">{pricingData.base} SAR</span>
            </div>

            {pricingData.features.length > 0 && (
              <div className="py-2 space-y-1.5">
                <span className="text-gray-500 text-[11px] block">Selected Addons & Integrations:</span>
                <div className="max-h-24 overflow-y-auto space-y-1 pr-1 scrollbar">
                  {pricingData.features.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-gray-400 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle className={`w-3.5 h-3.5 ${themeColors.text}`} />
                        {item.name}
                      </span>
                      <span className="font-mono text-gray-300">+{item.cost} SAR</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 pb-1 flex justify-between items-center text-sm font-bold">
              <span className="text-white font-display">Total Estimated Cost</span>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark text-base">
                {pricingData.total} SAR
              </span>
            </div>
          </div>

          {/* Budget alignment alert to build confidence */}
          <div className="p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800 text-[11px] flex gap-2 text-gray-400 items-start">
            <Award className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-200 font-medium">Agency Note: </span>
              Our senior engineers align your preferred budget (<span className="text-brand-gold font-semibold">{formData.budget || 'Under 500 SAR'}</span>) with optimization strategies. Submit the request to lock in this special quotation rate!
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
