import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { Badge } from './ui/Badge';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-200"
        >
          {/* Top Bar */}
          <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="cyan" size="sm">
                Case Study • {project.architectureType}
              </Badge>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
              <p className="text-cyan-400 text-sm font-medium">{project.tagline}</p>
            </div>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <span className="block text-lg sm:text-xl font-bold text-emerald-400">{metric.value}</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Problem Solved */}
            <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl space-y-2">
              <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> The Challenge / Problem Solved
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Solution & Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Solution Architecture & Implementation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Engineering Responsibilities
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.keyResponsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="indigo" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">Enterprise Case Study (Proprietary Telecom IP)</span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
