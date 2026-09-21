import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Linkedin, Github, MapPin, CheckCircle2, ShieldCheck, Code2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { TerminalPanel } from '../components/TerminalPanel';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-dots-glow">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Safaricom Ethiopia</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>


            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gradient-cyan">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 font-mono text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>20+ Bank Integrations</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Code2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Spring Boot & React</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>SIT & API QA Lead</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenResume}
                icon={<FileText className="w-4 h-4 text-cyan-400" />}
              >
                Download CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={<Mail className="w-4 h-4 text-indigo-400" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Secondary Links: Socials */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300/70 dark:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300/70 dark:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.contactEmail}`}
                  className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300/70 dark:border-slate-700 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Element: Terminal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TerminalPanel />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
