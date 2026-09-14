import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Building, Mail, Phone, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_LIST, EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintDownload = () => {
    const printContent = document.getElementById('resume-content');
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - ${PERSONAL_INFO.name}</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; color: #1e293b; padding: 40px; }
            h1 { font-size: 26px; margin-bottom: 2px; color: #0f172a; }
            h2 { font-size: 15px; border-bottom: 2px solid #0284c7; padding-bottom: 4px; margin-top: 20px; color: #0284c7; text-transform: uppercase; }
            .subtitle { color: #475569; font-size: 14px; font-weight: bold; }
            .meta { color: #64748b; font-size: 12px; margin-bottom: 12px; }
            ul { padding-left: 20px; margin-top: 4px; }
            li { font-size: 12px; margin-bottom: 4px; }
            .cert-item { font-size: 11px; margin-bottom: 4px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-200"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name} — Curriculum Vitae</h3>
                <p className="text-xs text-slate-400">{PERSONAL_INFO.title} • {PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintDownload}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-cyan-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Body */}
          <div id="resume-content" className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
            {/* Header section */}
            <div className="border-b border-slate-800 pb-5">
              <h1 className="text-2xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h1>
              <p className="text-cyan-400 font-semibold text-sm mb-2">{PERSONAL_INFO.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mb-3">
                {PERSONAL_INFO.heroIntro}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.contactEmail}</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.phoneNumbers.join(' / ')}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.experienceYears} Experience</span>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Award className="w-4 h-4" /> Core Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <span className="text-white font-semibold block mb-1">Full Stack & Backend:</span>
                  <p className="text-slate-400 text-xs">Java (Spring Boot), Python (FastAPI, Django), React (TypeScript), REST APIs, Microservices</p>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-1">QA & Integration:</span>
                  <p className="text-slate-400 text-xs">SIT Governance, Functional/Non-Functional Testing, Postman Automation, JMeter Load Testing, Defect Triage</p>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-1">DevOps & Cloud:</span>
                  <p className="text-slate-400 text-xs">Kubernetes, Docker, Helm, Jenkins, GitLab CI/CD, ArgoCD, Linux Administration</p>
                </div>
                <div>
                  <span className="text-white font-semibold block mb-1">Databases & Middleware:</span>
                  <p className="text-slate-400 text-xs">PostgreSQL, Oracle Database, MySQL, TIBCO BusinessWorks Migration</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Briefcase className="w-4 h-4" /> Professional Work Experience
              </h2>
              <div className="space-y-5">
                {EXPERIENCE_LIST.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline justify-between">
                      <h3 className="font-bold text-white text-sm">{exp.role}</h3>
                      <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-500" /> {exp.company} {exp.location ? `| ${exp.location}` : ''}
                    </p>
                    <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1 pt-1">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-3">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                      {edu.gpa && <span className="text-xs font-mono text-emerald-400 font-bold">GPA: {edu.gpa}</span>}
                    </div>
                    <p className="text-xs text-slate-400">{edu.institution} {edu.period ? `(${edu.period})` : ''}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Award className="w-4 h-4" /> Certifications & Continuous Learning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {CERTIFICATIONS_LIST.map((cert, idx) => (
                  <div key={idx} className="cert-item text-slate-300">
                    <span className="text-white font-semibold">{cert.title}</span> — <span className="text-slate-400">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              Close Resume
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
