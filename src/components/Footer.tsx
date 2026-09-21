import React from 'react';
import { Terminal, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold text-base block">{PERSONAL_INFO.name}</span>
              <span className="text-slate-400 font-mono text-[11px]">{PERSONAL_INFO.title} • Addis Ababa</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">Education & Certs</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.contactEmail}`} className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px] gap-2 text-center sm:text-left">
          <p>© {currentYear} {PERSONAL_INFO.name}. Engineered with React, TypeScript, Vite & Tailwind CSS.</p>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SIT Verified & Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
