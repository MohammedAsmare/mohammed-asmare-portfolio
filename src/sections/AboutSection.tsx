import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ShieldCheck, Server, GitBranch, Layers, Activity, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Full Stack & Backend',
      desc: 'Java, Spring Boot, REST APIs, Microservice Architecture & React/TypeScript web apps.',
      icon: <Server className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'QA & SIT Leadership',
      desc: 'Master test planning, API validation, SIT governance, Postman automation & regression.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'DevOps & CI/CD',
      desc: 'Docker containerization, Kubernetes orchestration, Jenkins/GitLab CI/CD & Argo CD.',
      icon: <GitBranch className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Enterprise Integration',
      desc: '20+ Commercial Bank integrations, TIBCO-to-Spring Boot modernization, M-Pesa ecosystem.',
      icon: <Layers className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Database & Security',
      desc: 'PostgreSQL optimization, complex SQL query tuning, schema design & payload encryption.',
      icon: <Database className="w-5 h-5 text-violet-400" />
    },
    {
      title: 'Production Support',
      desc: 'Prometheus & Grafana monitoring, 24/7 incident triage, environment migrations & release validation.',
      icon: <Activity className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Professional Background"
          title="Bridging Development, QA & Operations"
          subtitle="Combining full-stack software development with rigorous system integration testing and modern DevOps practices."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Engineering High-Integrity Telecom & Fintech Systems
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.aboutDetailed}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Unlike traditional silos where developers write code and hand it off to QA or DevOps teams, I embed testing strategies, API contract verification, and containerized deployment paths into the development process from day one.
              </p>

              {/* Highlight Callout Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-indigo-500/10 border border-cyan-500/30 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                  The Triple Advantage: Development + QA + DevOps
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                  {PERSONAL_INFO.valueProposition}
                </p>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 block">5+</span>
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Years Experience</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block">20+</span>
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Bank Integrations</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 block">99.9%</span>
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Target SLA</span>
              </div>
            </div>
          </motion.div>

          {/* Core Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl glass-card-hover flex items-start gap-4 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
