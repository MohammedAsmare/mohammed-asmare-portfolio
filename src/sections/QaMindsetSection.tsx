import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Bug, Zap, RotateCw, ArrowLeftCircle, Server, Activity } from 'lucide-react';
import { QA_PILLARS } from '../data/portfolioData';

export const QaMindsetSection: React.FC = () => {
  const [activeDefectState, setActiveDefectState] = useState<number>(0);

  const defectLifecycle = [
    { state: '1. Detected in SIT', desc: 'Caught during API contract verification or automated Newman execution.', color: 'border-rose-500/50 bg-rose-500/10 text-rose-400' },
    { state: '2. Triaged & Logged', desc: 'Jira ticket created with exact API request payload, curl, stacktrace, & DB logs.', color: 'border-amber-500/50 bg-amber-500/10 text-amber-400' },
    { state: '3. Root Cause Fixed', desc: 'Developer patches backend code and updates unit/integration tests.', color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' },
    { state: '4. Re-Verified & Closed', desc: 'Automated regression suite confirms zero regression before production go-live.', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' }
  ];

  const qaCapabilities = [
    'Test Planning & Traceability Matrix Design',
    'API Validation (REST & SOAP Protocols)',
    'System Integration Testing (SIT Leadership)',
    'Regression Test Automation (Postman / Newman / Jenkins)',
    'Performance & Stress Load Testing (JMeter)',
    'Defect Lifecycle Governance (Jira)',
    'Pre-Release Gatekeeping & Go/No-Go Auditing',
    'Post-Deployment Production Verification'
  ];

  return (
    <section id="qa" className="py-20 md:py-28 bg-[#060a12] text-white relative overflow-hidden">
      {/* Background Neon Grid Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Core Header Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" />
            QA Philosophy & Engineering Rigor
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            "Quality is part of development, <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">not a final step."</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Software quality is engineered through meticulous test architecture, API validation, SIT governance, and automated regression suites—never left to chance at release time.
          </p>
        </div>

        {/* 4 QA Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QA_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-all shadow-xl space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {idx === 0 && <ArrowLeftCircle className="w-5 h-5" />}
                  {idx === 1 && <Server className="w-5 h-5" />}
                  {idx === 2 && <RotateCw className="w-5 h-5" />}
                  {idx === 3 && <Zap className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1.5">
                {pillar.details.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visually Distinct Interactive Defect Lifecycle & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Defect Lifecycle Triage Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <Bug className="w-4 h-4" /> Interactive Defect Lifecycle Triage
              </span>
              <h3 className="text-xl font-bold text-white">How Zero-Defect Production Releases Are Ensured</h3>
            </div>

            {/* Steps interactive switcher */}
            <div className="space-y-3">
              {defectLifecycle.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDefectState(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    activeDefectState === idx
                      ? item.color
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="font-bold text-sm block text-white">{item.state}</span>
                    <span className="text-xs opacity-90 leading-relaxed block mt-0.5">{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center justify-between">
              <span>SIT Gatekeeper Verdict:</span>
              <span className="font-bold text-emerald-400">100% Release Validated</span>
            </div>
          </div>

          {/* QA Capabilities Matrix */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-2">
                <Activity className="w-4 h-4" /> End-to-End QA Disciplines
              </span>
              <h3 className="text-xl font-bold text-white">Core Testing Capabilities</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {qaCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5 hover:border-cyan-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium leading-snug">{cap}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="text-white font-bold block">20+ Bank Integration SIT Governance Highlight:</span>
              <p className="leading-relaxed">
                Led System Integration Testing for Commercial and Private Bank payment channels with Safaricom Ethiopia, managing test scenario suites across POS, USSD, Web, and Mobile Banking APIs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
