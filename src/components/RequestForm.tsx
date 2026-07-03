import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, ArrowLeft, Send, Sparkles, Building, 
  Phone, Globe, Check, Briefcase, Palette, CheckSquare, 
  HelpCircle, CheckCircle2, Award, Terminal, HeartHandshake, RefreshCw
} from 'lucide-react';
import FormProgress from './FormProgress';
import WebsiteMockupPreview from './WebsiteMockupPreview';
import { WebsiteRequest } from '../types';

// Step definition labels
const STEP_LABELS = [
  "Identity",
  "Category",
  "Features",
  "Aesthetics",
  "Finance & Delivery",
  "Briefing"
];

const WEBSITE_TYPES = [
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

const FEATURES_LIST = [
  "WhatsApp Chat",
  "Online Booking",
  "Appointment System",
  "Online Payments",
  "Shopping Cart",
  "Contact Form",
  "Google Maps",
  "Blog",
  "Image Gallery",
  "Customer Reviews",
  "Admin Dashboard",
  "Multi-language",
  "Live Chat",
  "User Login",
  "Newsletter",
  "Search Function",
  "Analytics",
  "SEO Optimization"
];

const DESIGN_STYLES = [
  "Modern",
  "Luxury",
  "Minimal",
  "Corporate",
  "Dark Theme",
  "Creative",
  "Elegant"
];

const BUDGET_OPTIONS = [
  "Under 500 SAR",
  "500–1,000 SAR",
  "1,000–2,000 SAR",
  "2,000–5,000 SAR",
  "5,000+ SAR"
];

const DELIVERY_TIMES = [
  "Urgent",
  "Within 1 Week",
  "Within 2 Weeks",
  "Within 1 Month",
  "Flexible"
];

const COLOR_PRESETS = [
  { name: 'Gold Prestige', value: 'Gold & Obsidian Black', preview: 'bg-[#D4AF37]' },
  { name: 'Emerald Oasis', value: 'Emerald green & rich gold', preview: 'bg-emerald-500' },
  { name: 'Classic Royal', value: 'Deep royal blue & white', preview: 'bg-blue-600' },
  { name: 'Sunset Glow', value: 'Warm orange & golden sand', preview: 'bg-amber-500' },
  { name: 'Monochrome Luxe', value: 'Sleek black, silver, and slate', preview: 'bg-[#8A95A5]' }
];

interface RequestFormProps {
  onAddSubmission: (submission: WebsiteRequest) => void;
}

export default function RequestForm({ onAddSubmission }: RequestFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Initialize Form State
  const [formData, setFormData] = useState<Omit<WebsiteRequest, 'id' | 'submittedAt'>>({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    businessCategory: '',
    country: 'Saudi Arabia',
    websiteType: 'Business Website',
    hasLogo: 'no',
    hasDomain: 'no',
    hasHosting: 'no',
    features: [],
    designStyle: 'Luxury',
    colorScheme: 'Gold & Obsidian Black',
    budget: '1,000–2,000 SAR',
    expectedDelivery: 'Within 2 Weeks',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDirectSelect = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleFeature = (feature: string) => {
    setFormData(prev => {
      const isSelected = prev.features.includes(feature);
      const updated = isSelected 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: updated };
    });
  };

  // Basic step validations
  const validateStep = (step: number) => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!/^[0-9+\s-]{9,15}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number (e.g., 0534182945)";
      }
    }
    if (step === 2) {
      if (!formData.businessCategory.trim()) newErrors.businessCategory = "Business category is required";
    }
    if (step === 6) {
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
        newErrors.projectDescription = "Please describe your project in at least 15 characters to help us understand.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEP_LABELS.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    // Build complete submission record
    const completeSubmission: WebsiteRequest = {
      ...formData,
      id: `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleString()
    };

    // Save to State (and trigger parents)
    onAddSubmission(completeSubmission);
    
    // Trigger success interface
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessName: '',
      phoneNumber: '',
      businessCategory: '',
      country: 'Saudi Arabia',
      websiteType: 'Business Website',
      hasLogo: 'no',
      hasDomain: 'no',
      hasHosting: 'no',
      features: [],
      designStyle: 'Luxury',
      colorScheme: 'Gold & Obsidian Black',
      budget: '1,000–2,000 SAR',
      expectedDelivery: 'Within 2 Weeks',
      projectDescription: ''
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative" id="dream-website-form-section">
      {/* Visual background decor */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-gold/5 via-brand-gold-dark/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      {/* Title & Subtitle */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-mono font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Saudi Arabia's Premiere Craft Agency
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-display">
          Tell Us About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark serif italic">Dream Website</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Fill out the form below, and we'll create a custom website tailored to your business goals and budget.
        </p>
      </div>

      {/* Main Grid: Form on Left, Real-time Visualizer Mockup on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Form Column */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl bg-[#0A0A0C]/80 border border-zinc-800/55">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark"></div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col justify-between h-full" id="multistep-website-request-form">
                
                {/* Stepper Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-mono uppercase tracking-wider font-semibold text-brand-gold">Step {currentStep} of {STEP_LABELS.length}</span>
                    <span className="font-medium text-gray-400">{STEP_LABELS[currentStep - 1]} Category Focus</span>
                  </div>
                  <FormProgress 
                    currentStep={currentStep} 
                    totalSteps={STEP_LABELS.length} 
                    stepLabels={STEP_LABELS} 
                  />
                </div>

                {/* Step Sub-Forms with slide animations */}
                <div className="flex-1 py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* STEP 1: Full Name, Business Name, Phone, Country */}
                      {currentStep === 1 && (
                        <div className="space-y-5">
                          <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex gap-3 text-xs md:text-sm text-gray-300">
                            <Terminal className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                            <p>All follow-ups are conducted via phone calls or custom WhatsApp proposals. <span className="text-brand-gold font-semibold">No emails required.</span></p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Full Name *</label>
                              <input 
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="e.g., Mohammed Al-Sudais"
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans"
                                required
                              />
                              {errors.fullName && <p className="text-red-400 text-xs font-mono">{errors.fullName}</p>}
                            </div>

                            {/* Business Name */}
                            <div className="space-y-2">
                              <label htmlFor="businessName" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Business Name *</label>
                              <input 
                                type="text"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                placeholder="e.g., Saad Web Trading"
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans"
                                required
                              />
                              {errors.businessName && <p className="text-red-400 text-xs font-mono">{errors.businessName}</p>}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Phone Number */}
                            <div className="space-y-2">
                              <label htmlFor="phoneNumber" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Phone Number *</label>
                              <div className="relative">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input 
                                  type="tel"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleInputChange}
                                  placeholder="e.g., 0534182945"
                                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl glass-input text-white font-sans font-mono"
                                  required
                                />
                              </div>
                              {errors.phoneNumber && <p className="text-red-400 text-xs font-mono">{errors.phoneNumber}</p>}
                            </div>

                            {/* Country (Default Saudi Arabia) */}
                            <div className="space-y-2">
                              <label htmlFor="country" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Country Location</label>
                              <div className="relative">
                                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input 
                                  type="text"
                                  id="country"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl glass-input text-white font-sans"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: Website Type & Business Category & Assets checklist */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Business Category */}
                            <div className="space-y-2">
                              <label htmlFor="businessCategory" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Business Category / Industry *</label>
                              <input 
                                type="text"
                                id="businessCategory"
                                name="businessCategory"
                                value={formData.businessCategory}
                                onChange={handleInputChange}
                                placeholder="e.g., Food & Beverage, Real Estate"
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans"
                                required
                              />
                              {errors.businessCategory && <p className="text-red-400 text-xs font-mono">{errors.businessCategory}</p>}
                            </div>

                            {/* Website Type Dropdown */}
                            <div className="space-y-2">
                              <label htmlFor="websiteType" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Type Of Website *</label>
                              <select 
                                id="websiteType"
                                name="websiteType"
                                value={formData.websiteType}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans bg-gray-950"
                              >
                                {WEBSITE_TYPES.map((type, i) => (
                                  <option key={i} value={type} className="bg-gray-950">{type}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Setup Toggles: Do you already have Logo, Domain, Hosting? */}
                          <div className="space-y-3">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-300 block mb-1">Do You Already Have?</h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {/* Logo */}
                              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-850/80 flex items-center justify-between">
                                <span className="text-xs font-semibold text-gray-300">Logo Design</span>
                                <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800/60 scale-90">
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasLogo', 'yes')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasLogo === 'yes' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasLogo', 'no')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasLogo === 'no' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>

                              {/* Domain */}
                              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-850/80 flex items-center justify-between">
                                <span className="text-xs font-semibold text-gray-300">Domain Name</span>
                                <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800/60 scale-90">
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasDomain', 'yes')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasDomain === 'yes' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasDomain', 'no')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasDomain === 'no' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>

                              {/* Hosting */}
                              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-850/80 flex items-center justify-between">
                                <span className="text-xs font-semibold text-gray-300">Web Hosting</span>
                                <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800/60 scale-90">
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasHosting', 'yes')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasHosting === 'yes' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDirectSelect('hasHosting', 'no')}
                                    className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${formData.hasHosting === 'no' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500'}`}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Multi-Select Features */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center flex-wrap gap-2">
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-300">
                              Select Required Features & Integrations
                            </label>
                            <span className="text-[10px] font-mono text-gray-500">{formData.features.length} selected</span>
                          </div>

                          {/* Multi-Select Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[280px] overflow-y-auto pr-1 scrollbar">
                            {FEATURES_LIST.map((feature, i) => {
                              const isSelected = formData.features.includes(feature);
                              return (
                                <button
                                  type="button"
                                  key={i}
                                  onClick={() => handleToggleFeature(feature)}
                                  className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between group cursor-pointer ${
                                    isSelected 
                                      ? 'bg-brand-gold/10 border-brand-gold/50 text-brand-gold shadow-md'
                                      : 'bg-zinc-950 border-zinc-800/80 text-gray-400 hover:text-gray-200 hover:border-zinc-700'
                                  }`}
                                >
                                  <span className="truncate pr-1 font-medium">{feature}</span>
                                  <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center border transition-all ${
                                    isSelected 
                                      ? 'bg-brand-gold border-brand-gold text-black' 
                                      : 'border-zinc-800 bg-zinc-900 group-hover:border-zinc-700'
                                  }`}>
                                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* STEP 4: Preferred Design Style & Color Scheme */}
                      {currentStep === 4 && (
                        <div className="space-y-5">
                          {/* Preferred Design Style Grid */}
                          <div className="space-y-2">
                            <label className="block text-xs uppercase tracking-wider font-bold text-gray-300">Preferred Design Style</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {DESIGN_STYLES.map((style, i) => {
                                const isSelected = formData.designStyle === style;
                                return (
                                  <button
                                    type="button"
                                    key={i}
                                    onClick={() => handleDirectSelect('designStyle', style)}
                                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                                      isSelected 
                                        ? 'bg-brand-gold text-black border-brand-gold-light shadow-lg shadow-yellow-900/10 font-bold'
                                        : 'bg-zinc-950 border-zinc-800/80 text-gray-400 hover:text-gray-200 hover:border-zinc-700'
                                    }`}
                                  >
                                    {style}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Preferred Color Scheme text and selector */}
                          <div className="space-y-3 pt-2">
                            <label htmlFor="colorScheme" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Preferred Color Scheme</label>
                            
                            {/* Fast Presets Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                              {COLOR_PRESETS.map((preset, i) => {
                                const isSelected = formData.colorScheme.toLowerCase().includes(preset.name.toLowerCase()) || formData.colorScheme === preset.value;
                                return (
                                  <button
                                    type="button"
                                    key={i}
                                    onClick={() => handleDirectSelect('colorScheme', preset.value)}
                                    className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                                      isSelected
                                        ? 'bg-zinc-900 border-brand-gold text-white font-semibold'
                                        : 'bg-zinc-950 border-zinc-800/80 text-gray-400 hover:border-zinc-750'
                                    }`}
                                  >
                                    <span className={`w-3.5 h-3.5 rounded-full ${preset.preview} shrink-0`}></span>
                                    <span className="text-[10px] truncate font-medium">{preset.name}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Freeform input */}
                            <div className="relative">
                              <Palette className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input 
                                type="text"
                                id="colorScheme"
                                name="colorScheme"
                                value={formData.colorScheme}
                                onChange={handleInputChange}
                                placeholder="e.g. Elegant Gold and Obsidian Black or pick custom hex"
                                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl glass-input text-white font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 5: Budget Dropdown & Delivery Time */}
                      {currentStep === 5 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Budget Dropdown */}
                            <div className="space-y-2">
                              <label htmlFor="budget" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Preferred Budget Limit *</label>
                              <select 
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans bg-gray-950"
                              >
                                {BUDGET_OPTIONS.map((opt, i) => (
                                  <option key={i} value={opt} className="bg-gray-950">{opt}</option>
                                ))}
                              </select>
                              <p className="text-[10px] text-gray-500 leading-normal">
                                Select under 500 SAR for light landing pages or up to 5000+ SAR for fully loaded e-commerce stores with booking engines.
                              </p>
                            </div>

                            {/* Delivery Timeline Dropdown */}
                            <div className="space-y-2">
                              <label htmlFor="expectedDelivery" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Expected Delivery Time *</label>
                              <select 
                                id="expectedDelivery"
                                name="expectedDelivery"
                                value={formData.expectedDelivery}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans bg-gray-950"
                              >
                                {DELIVERY_TIMES.map((time, i) => (
                                  <option key={i} value={time} className="bg-gray-950">{time}</option>
                                ))}
                              </select>
                              <p className="text-[10px] text-gray-500 leading-normal">
                                Standard turnaround is within 2 weeks. Urgent timelines receive absolute coding priority.
                              </p>
                            </div>
                          </div>

                          {/* Quick Trust Badge */}
                          <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex gap-3 text-xs text-gray-400">
                            <Award className="w-5 h-5 text-brand-gold shrink-0" />
                            <p>
                              <span className="text-gray-200 font-semibold">Flexible Budget Matching:</span> Regardless of your option, Saad WebCreator offers custom modular designs that scale up with your business step-by-step.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* STEP 6: Describe Project (Large Area) */}
                      {currentStep === 6 && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="projectDescription" className="block text-xs uppercase tracking-wider font-bold text-gray-300">Describe Your Project *</label>
                            <textarea
                              id="projectDescription"
                              name="projectDescription"
                              rows={6}
                              value={formData.projectDescription}
                              onChange={handleInputChange}
                              placeholder="Tell us about your business, the pages you need, the features you want, preferred colors, examples of websites you like, and any additional requirements..."
                              className="w-full px-4 py-3 text-sm rounded-xl glass-input text-white font-sans resize-none scrollbar"
                              required
                            />
                            {errors.projectDescription && <p className="text-red-400 text-xs font-mono">{errors.projectDescription}</p>}
                          </div>

                          <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex gap-3 text-xs text-gray-400">
                            <HeartHandshake className="w-5 h-5 text-brand-gold shrink-0" />
                            <div>
                              <span className="text-gray-200 font-semibold">Almost there!</span> Submitting this form compiles your exact design settings into our portal, generating a priority call-back from our web experts.
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Form Buttons Footer */}
                <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                  {/* Prev Button */}
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-gray-400 hover:text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-zinc-950/40"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {/* Next / Submit Button */}
                  {currentStep < STEP_LABELS.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black text-xs font-extrabold shadow-lg shadow-yellow-900/10 flex items-center gap-2 cursor-pointer ml-auto active:scale-95 transition-all"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark hover:opacity-95 text-black text-xs font-black shadow-lg shadow-yellow-950/20 flex items-center gap-2 cursor-pointer ml-auto active:scale-95 transition-all"
                      id="submit-website-request-btn"
                    >
                      🚀 Submit My Website Request
                    </button>
                  )}
                </div>
              </form>
            ) : (
              // Success Message (Strict Requirement Match)
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4 space-y-6 flex flex-col items-center justify-center h-full"
                id="form-success-message"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-brand-gold animate-bounce" />
                  </div>
                  <span className="absolute inset-0 rounded-full bg-brand-gold/10 animate-ping"></span>
                </div>

                <div className="space-y-3 max-w-lg">
                  <h3 className="text-xl md:text-2xl font-black text-white font-display">
                    ✅ Thank you! Your request has been received successfully.
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our team will contact you shortly via phone or WhatsApp to discuss your project and provide a personalized quotation.
                  </p>
                </div>

                {/* Simulated action details */}
                <div className="w-full bg-zinc-950 rounded-2xl p-4 border border-zinc-900 text-left space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Submitted Configurations</span>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-zinc-500 block">Lead Name</span>
                      <span className="text-zinc-300 font-medium">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Business</span>
                      <span className="text-zinc-300 font-medium">{formData.businessName}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Website Type</span>
                      <span className="text-zinc-300 font-medium">{formData.websiteType}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Budget Range</span>
                      <span className="text-brand-gold font-semibold font-mono">{formData.budget}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 w-full justify-center">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-750 text-gray-400 hover:text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-zinc-900/40"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Submit Another Request
                  </button>
                  <a
                    href="https://wa.me/966534182945"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-yellow-950/20"
                  >
                    Contact on WhatsApp Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Visualizer Column (Static Desk + Dynamic interactive display) */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between">
          <div className="sticky top-24 space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">Real-time Rendering Engine</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-mono font-semibold animate-pulse">
                ● Ready
              </span>
            </div>
            
            <WebsiteMockupPreview formData={formData} />
          </div>
        </div>

      </div>
    </section>
  );
}
