import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Credentials"
          title="Education & Qualifications"
          subtitle="Combining strong Computer Science fundamentals with advanced post-graduate study in Enterprise Project Management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xl space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 border border-cyan-500/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.period && (
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      {edu.period}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <span>{edu.institution}</span>
                  </p>
                  {edu.location && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </p>
                  )}
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Academic Degree</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
