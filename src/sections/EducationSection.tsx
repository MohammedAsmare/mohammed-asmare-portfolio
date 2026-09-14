import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Education Part */}
        <div>
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

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Verified Degree
                  </span>
                  {edu.gpa && (
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-bold">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Part */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold uppercase">
              <Award className="w-3.5 h-3.5" /> Professional Certifications & Training
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Continuous Learning & Specialized Training
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 sm:p-5 rounded-2xl glass-card-hover border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="indigo" size="sm">
                      {cert.category || 'DevOps'}
                    </Badge>
                    {cert.period && (
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {cert.period}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3 h-3" /> Certified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
