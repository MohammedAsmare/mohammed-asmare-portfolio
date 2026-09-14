import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SDLC_STEPS } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';

export const SdlcSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to Development step

  return (
    <section id="sdlc" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Methodology"
          title="How I Build Software"
          subtitle="Integrating Quality Assurance, Test Automation, and Continuous Delivery into every single phase of the Software Development Life Cycle."
        />

        {/* SDLC Horizontal/Grid Flow Pipeline */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {SDLC_STEPS.map((item) => {
              const isActive = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(item.step)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 relative ${
                    isActive
                      ? 'bg-slate-900 text-white border-cyan-400 shadow-lg shadow-cyan-950/40 ring-2 ring-cyan-500/30'
                      : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      {item.step}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </div>

                  <span className="text-xs font-bold leading-tight block">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Step Interactive Card */}
        {(() => {
          const stepData = SDLC_STEPS.find(s => s.step === activeStep) || SDLC_STEPS[0];
          return (
            <motion.div
              key={stepData.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 font-bold font-mono text-base flex items-center justify-center border border-cyan-500/30">
                    0{stepData.step}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Phase {stepData.step}: {stepData.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                      SDLC Pipeline Stage
                    </p>
                  </div>
                </div>

                {/* Step controls */}
                <div className="flex items-center gap-2">
                  <button
                    disabled={stepData.step === 1}
                    onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 disabled:opacity-40"
                  >
                    ← Prev Phase
                  </button>
                  <button
                    disabled={stepData.step === SDLC_STEPS.length}
                    onClick={() => setActiveStep(prev => Math.min(SDLC_STEPS.length, prev + 1))}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold disabled:opacity-40"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>

              {/* Step Grid details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Core Engineering Objective:
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {stepData.description}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                      Tools & Frameworks Executed:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stepData.tools.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-300 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QA Integration Highlight */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Embedded Quality Assurance Strategy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {stepData.qaIntegration}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })()}

      </div>
    </section>
  );
};
