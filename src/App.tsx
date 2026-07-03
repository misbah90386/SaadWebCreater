import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesShowcase from './components/FeaturesShowcase';
import RequestForm from './components/RequestForm';
import ClientFAQ from './components/ClientFAQ';
import ContactSection from './components/ContactSection';
import AdminPortal from './components/AdminPortal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { WebsiteRequest, ContactInquiry } from './types';
import { Sparkles, ArrowUpRight, Award, ShieldCheck, HelpCircle } from 'lucide-react';
import logoUrl from './assets/images/saad_logo_1783062133118.jpg';

export default function App() {
  const [submissions, setSubmissions] = useState<WebsiteRequest[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedSubs = localStorage.getItem('saad_requests');
      const storedInqs = localStorage.getItem('saad_inquiries');
      if (storedSubs) setSubmissions(JSON.parse(storedSubs));
      if (storedInqs) setInquiries(JSON.parse(storedInqs));
    } catch (e) {
      console.error("Error loading localStorage data:", e);
    }
  }, []);

  // Save changes to localStorage
  const addSubmission = (newSub: WebsiteRequest) => {
    const updated = [newSub, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('saad_requests', JSON.stringify(updated));
  };

  const addInquiry = (newInq: ContactInquiry) => {
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('saad_inquiries', JSON.stringify(updated));
  };

  const clearData = () => {
    setSubmissions([]);
    setInquiries([]);
    localStorage.removeItem('saad_requests');
    localStorage.removeItem('saad_inquiries');
  };

  return (
    <div className="min-h-screen bg-[#030304] text-gray-200 relative font-sans selection:bg-brand-gold/30 selection:text-white" id="root-app-viewport">
      {/* Decorative vector background meshes */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-radial-gradient from-brand-gold-dark/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Landing Hero Section */}
      <HeroSection />

      {/* Trust & Capabilities Bento Grid */}
      <FeaturesShowcase />

      {/* The Core Website Request Multi-Step Form (Most Important Section) */}
      <RequestForm onAddSubmission={addSubmission} />

      {/* Client Informational FAQ */}
      <ClientFAQ />

      {/* Premium Glassmorphic Contact Section */}
      <ContactSection onAddInquiry={addInquiry} />

      {/* Submissions Admin Portal Console */}
      <AdminPortal 
        submissions={submissions} 
        inquiries={inquiries} 
        onClearSubmissions={clearData} 
      />

      {/* Continuous Floating WhatsApp Bubble */}
      <FloatingWhatsApp />

      {/* Premium Studio Footer */}
      <footer className="bg-[#050507] py-12 px-4 md:px-8 border-t border-zinc-900 text-xs text-gray-500 text-center relative z-10" id="global-footer">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-8">
            <div className="text-left space-y-1">
              <span className="text-sm font-black text-white uppercase tracking-tight font-display flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-brand-gold/30 flex items-center justify-center bg-black shrink-0">
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                Saad <span className="text-brand-gold font-normal">WebCreator</span>
              </span>
              <p className="text-[11px] text-gray-400">Crafting luxurious, custom Web applications and E-commerce stores in Riyadh, Saudi Arabia.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-gray-400 text-[11px] font-mono">
              <a href="#dream-website-form-section" className="hover:text-brand-gold transition-colors">START BRIEF</a>
              <a href="#features-showcase-section" className="hover:text-brand-gold transition-colors">CAPABILITIES</a>
              <a href="#faq-section" className="hover:text-brand-gold transition-colors">CLIENT FAQ</a>
              <a href="#contact-us-section" className="hover:text-brand-gold transition-colors">CONTACT STUDIO</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-gray-500">
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>© {new Date().getFullYear()} Saad WebCreator LLC. Riyadh, Saudi Arabia. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Direct Consultations • No Email Mandate Enabled</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
