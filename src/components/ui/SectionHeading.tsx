import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {centered && (
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-6 opacity-80" />
      )}
    </motion.div>
  );
};
