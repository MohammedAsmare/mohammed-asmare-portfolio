import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Layers, ArrowRight, ShieldCheck, Cpu, GitBranch, AlertCircle } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { Badge } from '../components/ui/Badge';
import { CaseStudyModal } from '../components/CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getArchitectureIcon = (type: string) => {
    switch (type) {
      case 'Microservice':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Modernization':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'CI/CD':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      case 'QA Framework':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-dots-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Engineering Case Studies"
          title="Enterprise Projects & Architecture"
          subtitle="Real-world case studies showcasing microservice engineering, legacy modernization, automated deployment pipelines, and multi-vendor SIT governance."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_LIST.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xl group"
            >
              {/* Card Top Accent Header */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {getArchitectureIcon(project.architectureType)}
                    </div>
                    <Badge variant="cyan" size="sm">
                      {project.architectureType}
                    </Badge>
                  </div>
                </div>

                {/* Name & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved Teaser */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <span className="font-mono text-rose-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Problem Solved:
                  </span>
                  <p className="text-slate-400 line-clamp-2">{project.problemSolved}</p>
                </div>

                {/* Impact Metrics strip */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-200/80 dark:border-slate-800/80 text-center">
                  {project.impactMetrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="block text-sm font-bold text-emerald-400">{m.value}</span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <Badge key={tIdx} variant="indigo" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="slate" size="sm">
                      +{project.technologies.length - 5} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-slate-100/80 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Architecture Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[10px] font-mono text-slate-400">Enterprise Verified</span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
