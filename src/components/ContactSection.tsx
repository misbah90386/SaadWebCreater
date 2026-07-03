import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Building, Layout, HelpCircle, Check, MapPin, Share2, Sparkles, Send, CheckSquare } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactSectionProps {
  onAddInquiry: (inquiry: ContactInquiry) => void;
}

export default function ContactSection({ onAddInquiry }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    websiteType: 'Business Website',
    budget: '1,000–2,000 SAR',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const websiteTypes = [
    "Business Website",
    "Restaurant Website",
    "Cafe Website",
    "Bakery Website",
    "Medical Website",
    "Real Estate Website",
    "School Website",
    "Gym Website",
    "E-commerce Store",
    "Portfolio Website",
    "Landing Page",
    "Booking Website",
    "Custom Website",
    "Other"
  ];

  const budgetOptions = [
    "Under 500 SAR",
    "500–1,000 SAR",
    "1,000–2,000 SAR",
    "2,000–5,000 SAR",
    "5,000+ SAR"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9+\s-]{9,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number (e.g., 0534182945)";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Please include a short message (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newInquiry: ContactInquiry = {
      ...formData,
      id: `INQ-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleString()
    };

    onAddInquiry(newInquiry);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      businessName: '',
      websiteType: 'Business Website',
      budget: '1,000–2,000 SAR',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden" id="contact-us-section">
      {/* Dynamic Background Accents */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

      {/* Main Glassmorphic Container */}
      <div className="bg-[#0A0A0C] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-zinc-800/80">
        
        {/* Subtle decorative grid background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Visual copy & CTA details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Let's Partner Today
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark">Dream Website</span> Today
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Connect directly with our Riyadh-based design studio. No complex email signups. All our client follow-ups are conducted seamlessly over premium phone consults or WhatsApp channels.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-brand-gold/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider font-mono">Saudi Direct Phone</span>
                  <a href="tel:0534182945" className="text-base font-extrabold text-white hover:text-brand-gold transition-colors font-mono">
                    053 418 2945
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-brand-gold/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-all shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider font-mono">Headquarters Location</span>
                  <p className="text-sm font-bold text-white">
                    Olaya Street, Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            {/* Micro FAQ Trust Factor */}
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-900 text-xs text-gray-400 space-y-2">
              <p className="font-semibold text-gray-300">Why no email?</p>
              <p className="leading-normal">We value high-integrity speed. Reaching clients directly via phone call or WhatsApp ensures instant project clarity, rapid asset delivery, and real-time custom revisions.</p>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7 bg-[#0E0E11]/90 border border-zinc-800/60 rounded-3xl p-6 md:p-8 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-brand-gold/5 to-transparent pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="direct-contact-form">
                  <h3 className="text-lg font-bold text-white font-display">
                    Contact Us / Project Inquiry
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact_fullName" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Full Name *</label>
                      <input 
                        type="text"
                        id="contact_fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Sultan bin Khalid"
                        className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white"
                        required
                      />
                      {errors.fullName && <p className="text-red-400 text-xs font-mono">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="contact_phoneNumber" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Phone Number *</label>
                      <input 
                        type="tel"
                        id="contact_phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. 053 418 2945"
                        className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-mono"
                        required
                      />
                      {errors.phoneNumber && <p className="text-red-400 text-xs font-mono">{errors.phoneNumber}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Business Name */}
                    <div className="md:col-span-1 space-y-2">
                      <label htmlFor="contact_businessName" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Business Name *</label>
                      <input 
                        type="text"
                        id="contact_businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. Riyadh Café"
                        className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white"
                        required
                      />
                      {errors.businessName && <p className="text-red-400 text-xs font-mono">{errors.businessName}</p>}
                    </div>

                    {/* Website Type Dropdown */}
                    <div className="md:col-span-1 space-y-2">
                      <label htmlFor="contact_websiteType" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Website Type</label>
                      <select 
                        id="contact_websiteType"
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white bg-gray-950"
                      >
                        {websiteTypes.map((type, idx) => (
                           <option key={idx} value={type} className="bg-gray-950">{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="md:col-span-1 space-y-2">
                      <label htmlFor="contact_budget" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Budget Range</label>
                      <select 
                        id="contact_budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white bg-gray-950"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-gray-950">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label htmlFor="contact_message" className="block text-xs uppercase tracking-wider font-bold text-gray-400">Project Details / Message *</label>
                    <textarea
                      id="contact_message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline the pages you require, your business vision, custom features desired, examples of websites you like, etc."
                      className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white resize-none scrollbar"
                      required
                    />
                    {errors.message && <p className="text-red-400 text-xs font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Call-To-Action (Large Animated) */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-yellow-950/10 flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer"
                    id="get-free-consultation-btn"
                  >
                    <span className="absolute -inset-y-0 w-12 bg-white/20 skew-x-12 translate-x-[-150px] group-hover:translate-x-[450px] transition-transform duration-1000 ease-out"></span>
                    <Send className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Get Free Consultation</span>
                  </motion.button>
                </form>
              ) : (
                // Form Success Screen
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center h-full"
                  id="contact-form-success"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white font-display">Inquiry Transmitted Successfully</h3>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed mx-auto">
                      Thank you! Your information has been securely received by Saad WebCreator. We will reach out to <span className="text-brand-gold font-bold font-mono">{formData.phoneNumber}</span> via WhatsApp or phone call shortly.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 text-xs text-gray-400 hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
