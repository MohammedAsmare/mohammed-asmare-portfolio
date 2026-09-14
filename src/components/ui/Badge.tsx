import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'indigo' | 'slate' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 dark:border-indigo-500/30',
    slate: 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300/60 dark:border-slate-700',
    amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 dark:border-amber-500/30',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-mono',
    md: 'px-3 py-1 text-xs font-medium',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
