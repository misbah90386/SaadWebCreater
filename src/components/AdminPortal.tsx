import React, { useState } from 'react';
import { WebsiteRequest, ContactInquiry } from '../types';
import { 
  Briefcase, FolderCheck, Cpu, Star, Award, 
  Trash2, FileText, CheckCircle, Clock, Copy, ArrowUpRight, Check, Printer
} from 'lucide-react';
import { motion } from 'motion/react';

interface AdminPortalProps {
  submissions: WebsiteRequest[];
  inquiries: ContactInquiry[];
  onClearSubmissions: () => void;
}

export default function AdminPortal({ submissions, inquiries, onClearSubmissions }: AdminPortalProps) {
  const [activeTab, setActiveTab] = useState<'requests' | 'inquiries'>('requests');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = (elementId: string) => {
    const printContent = document.getElementById(elementId);
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // reload to restore React state cleanly
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-900" id="admin-portal-section">
      <div className="bg-[#0A0A0C] rounded-3xl p-6 md:p-8 space-y-8 relative overflow-hidden border border-zinc-850">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-white font-display uppercase tracking-tight flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-gold" />
              Client Inquiry Portal
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Simulated admin console displaying local website briefs and direct contact requests in real-time.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center gap-2 bg-zinc-950 p-1 rounded-xl border border-zinc-900 self-start md:self-center">
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'requests' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Website Request Forms ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inquiries' ? 'bg-brand-gold text-black shadow-md' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Direct Messages ({inquiries.length})
            </button>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="min-h-[280px]">
          {activeTab === 'requests' ? (
            submissions.length === 0 ? (
              /* Request Empty State */
              <div className="py-16 text-center space-y-4 max-w-sm mx-auto">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-gray-500 mx-auto">
                  <FolderCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">No Website Requests Yet</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Scroll up to the "Tell Us About Your Dream Website" section and complete the multi-step form to compile a live digital quotation brief!
                  </p>
                </div>
              </div>
            ) : (
              /* Request Submissions list */
              <div className="space-y-6">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Local Submissions Data</span>
                  <button 
                    onClick={onClearSubmissions}
                    className="text-[10px] font-mono font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset Data Cache
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {submissions.map((sub) => (
                    <div 
                      key={sub.id} 
                      className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 space-y-4 relative shadow-md group"
                      id={`printable-receipt-${sub.id}`}
                    >
                      {/* Header metrics */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-2.5 py-0.5 rounded-full font-bold">
                            {sub.id}
                          </span>
                          <h4 className="text-sm font-bold text-white">{sub.businessName}</h4>
                          <p className="text-[10px] text-gray-500 font-mono">Submitted: {sub.submittedAt}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-lg border border-zinc-800 scale-90">
                          <button
                            onClick={() => handleCopyId(sub.id)}
                            className="p-1.5 rounded text-gray-400 hover:text-white transition-colors"
                            title="Copy Brief ID"
                          >
                            {copiedId === sub.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handlePrint(`printable-receipt-${sub.id}`)}
                            className="p-1.5 rounded text-gray-400 hover:text-white transition-colors"
                            title="Print PDF Quotation"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Technical specifications details */}
                      <div className="grid grid-cols-2 gap-3 text-xs border-y border-zinc-900 py-3 text-gray-400">
                        <div>
                          <span className="text-[10px] text-gray-600 uppercase font-mono">Contact Lead</span>
                          <span className="text-gray-300 block font-medium">{sub.fullName}</span>
                          <span className="text-brand-gold block font-mono font-bold">{sub.phoneNumber}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-600 uppercase font-mono">Website Type</span>
                          <span className="text-gray-300 block font-medium">{sub.websiteType}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-600 uppercase font-mono">Preferred Aesthetics</span>
                          <span className="text-gray-300 block font-medium">{sub.designStyle} Style</span>
                          <span className="text-[11px] text-gray-500 block truncate">{sub.colorScheme}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-600 uppercase font-mono">Quotation & Timeline</span>
                          <span className="text-brand-gold block font-bold font-mono">{sub.budget}</span>
                          <span className="text-gray-400 block font-mono text-[11px]">{sub.expectedDelivery}</span>
                        </div>
                      </div>

                      {/* Configured features list */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-gray-600 uppercase font-mono block">Required Integrations ({sub.features.length})</span>
                        <div className="flex flex-wrap gap-1">
                          {sub.features.map((feat, idx) => (
                            <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-gray-400">
                              {feat}
                            </span>
                          ))}
                          {sub.features.length === 0 && (
                            <span className="text-xs text-gray-600 italic">None selected</span>
                          )}
                        </div>
                      </div>

                      {/* Project Briefing Textbox */}
                      <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-900 text-xs text-gray-300 space-y-1">
                        <span className="text-[10px] text-gray-600 uppercase font-mono block">Project Brief Description</span>
                        <p className="leading-normal font-sans italic">"{sub.projectDescription}"</p>
                      </div>

                      {/* Simulated Agency Review Process */}
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-2 text-[11px] text-gray-400">
                        <Cpu className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="text-brand-gold font-semibold uppercase font-mono block">Simulated Technical Evaluation</span>
                          Based on requested integrations, we suggest a modular serverless pipeline utilizing high-performance client states to ensure lightning fast loading speeds under {sub.budget}. Call-back scheduled for lead phone line.
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            /* Inquiry submissions list */
            inquiries.length === 0 ? (
              /* Inquiry Empty State */
              <div className="py-16 text-center space-y-4 max-w-sm mx-auto">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-gray-500 mx-auto">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">No Direct Messages Yet</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Complete the general inquiry form in the "Contact Us" section to simulatedly log a priority consultation callback.
                  </p>
                </div>
              </div>
            ) : (
              /* Inquiry List */
              <div className="space-y-6">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Logged Contact Messages</span>
                  <button 
                    onClick={onClearSubmissions}
                    className="text-[10px] font-mono font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset Data Cache
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 relative shadow-md space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded-full font-bold">
                            {inq.id}
                          </span>
                          <span className="text-[10px] text-gray-600 font-mono">{inq.submittedAt}</span>
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-xs text-gray-500 font-mono uppercase">Sender</h4>
                          <p className="text-sm font-bold text-white">{inq.fullName}</p>
                          <p className="text-xs text-brand-gold font-mono font-bold">{inq.phoneNumber}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400 border-t border-zinc-900 pt-2">
                          <div>
                            <span className="text-[9px] text-gray-600 uppercase font-mono block">Company</span>
                            <span className="text-gray-300 truncate font-semibold block">{inq.businessName}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-600 uppercase font-mono block">Target Build</span>
                            <span className="text-gray-300 truncate block">{inq.websiteType}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[9px] text-gray-600 uppercase font-mono block">Budget Bound</span>
                          <span className="text-xs text-brand-gold font-bold font-mono">{inq.budget}</span>
                        </div>

                        <div className="p-3 rounded-xl bg-zinc-900 text-[11px] text-gray-300 leading-relaxed font-sans italic border border-zinc-900">
                          "{inq.message}"
                        </div>
                      </div>

                      <div className="pt-3 border-t border-zinc-900 text-[10px] text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Awaiting callback on Saudi Line</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
