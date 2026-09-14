import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Building, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Track Record"
          title="Professional Experience"
          subtitle="Proven trajectory delivering enterprise middleware, financial system integrations, and continuous delivery operations in top telecommunications environments."
        />

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-emerald-500 opacity-40" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCE_LIST.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 items-center justify-center shadow-lg shadow-cyan-950/50">
                    <Building className="w-5 h-5" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xl">
                      
                      {/* Company & Role Header */}
                      <div className="space-y-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          {exp.isCurrent && (
                            <Badge variant="emerald" size="sm">
                              Current Role
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 italic">
                        "{exp.tagline}"
                      </p>

                      {/* Key Metric Highlights if present */}
                      {exp.metrics && (
                        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                          {exp.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <span className="block text-sm font-bold text-emerald-400">{m.value}</span>
                              <span className="text-[10px] text-slate-400 font-mono uppercase">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">Key Contributions:</span>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <Badge key={tIdx} variant="indigo" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
