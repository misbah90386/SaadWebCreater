import React from 'react';
import { 
  Smartphone, ShieldCheck, Zap, Code, BarChart3, 
  Search, Users, MessageSquareCode, Award, Shield, 
  Cpu, AppWindow, Globe2, Sparkles, Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function FeaturesShowcase() {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-brand-gold" />,
      title: "100% Bespoke Code",
      description: "We write clean, lightweight, hand-crafted code without bloated template builders. Enjoy lightning fast loading speeds.",
      badge: "Performance First"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-gold-light" />,
      title: "Responsive Adaptability",
      description: "Your dream website looks spectacular on standard desktops, tablets, and mobile devices automatically.",
      badge: "Pixel Perfect"
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-gold" />,
      title: "Ultra High Conversion",
      description: "Optimized user flows and strategic Call-To-Action buttons designed to convert visitor traffic into paying clients.",
      badge: "ROI Driven"
    },
    {
      icon: <Search className="w-6 h-6 text-brand-gold-light" />,
      title: "Elite SEO Optimization",
      description: "Deep metadata structure, semantic headers, and Sitemap submissions that propel your brand to the top of Google.",
      badge: "SEO Engineered"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: "Fortified Security",
      description: "SSL setup, SQL injection prevention, and regular security updates that keep your business data private and secure.",
      badge: "Enterprise Safe"
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-brand-gold-light" />,
      title: "Saudi Local Integration",
      description: "Native Saudi Arabian payment systems, local shipping APIs, and direct Arabic translation options available.",
      badge: "KSA Optimized"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Request Briefing",
      desc: "Complete our modern multi-step request form, specifying your design style, features, and budget bounds."
    },
    {
      num: "02",
      title: "Interactive Consult",
      desc: "Our senior design lead reaches out directly via phone or WhatsApp to detail the exact wireframe schema."
    },
    {
      num: "03",
      title: "Bespoke Engineering",
      desc: "We build your digital masterwork using robust, modern technology, conducting exhaustive testing."
    },
    {
      num: "04",
      title: "Priority Launch",
      desc: "We handle sitemap integration, launch your responsive website, and support you with dedicated Riyadh engineers."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950/40 border-y border-zinc-900 relative" id="features-showcase-section">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Designed For Growth
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            The Elite Standard In <span className="serif accent-text">Web Engineering</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Every website we engineer is structured around robust visual mechanics, pristine security, and absolute pixel perfection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/20 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 shadow-xl flex flex-col justify-between min-h-[220px]"
            >
              {/* Decorative hover bg shine */}
              <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 transition-all shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-brand-gold transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center text-[10px] font-mono font-semibold text-zinc-500">
                <span>NUKHBAH CODE</span>
                <span className="text-brand-gold">{feat.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps Title & Section */}
        <div className="pt-16 border-t border-zinc-900/60 space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display">
              Our Streamlined <span className="serif accent-text">Build Journey</span>
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm">Four clear, rapid steps from initial request brief to official live deployment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900 relative space-y-4 shadow-md group">
                <span className="absolute top-4 right-4 text-3xl font-black font-display text-zinc-900/40 group-hover:text-brand-gold/20 transition-colors">
                  {step.num}
                </span>
                
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-normal">
                    {step.desc}
                  </p>
                </div>
                
                {/* Visual connectors for desktop grid */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-gold/20 to-transparent z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
