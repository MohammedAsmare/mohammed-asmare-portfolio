import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Search, Code2, Layout, Server, Database, ShieldCheck, GitBranch, Layers, Activity, Star, Sparkles } from 'lucide-react';
import { SKILL_ITEMS } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllInAllView, setShowAllInAllView] = useState(false);

  const categories: (SkillCategory | 'All')[] = [
    'All',
    'Programming',
    'Frontend',
    'Backend',
    'Database',
    'QA & Testing',
    'DevOps',
    'Enterprise Integration',
    'Monitoring',
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'All': <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
    'Programming': <Code2 className="w-3.5 h-3.5 text-cyan-400" />,
    'Frontend': <Layout className="w-3.5 h-3.5 text-indigo-400" />,
    'Backend': <Server className="w-3.5 h-3.5 text-cyan-400" />,
    'Database': <Database className="w-3.5 h-3.5 text-violet-400" />,
    'QA & Testing': <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
    'DevOps': <GitBranch className="w-3.5 h-3.5 text-amber-400" />,
    'Enterprise Integration': <Layers className="w-3.5 h-3.5 text-sky-400" />,
    'Monitoring': <Activity className="w-3.5 h-3.5 text-rose-400" />,
  };

  const filteredSkills = SKILL_ITEMS.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (selectedCategory === 'All') {
      // When searching, query across all skills
      if (searchQuery.trim() !== '') return true;
      // In default All view, show the 20 optimized/featured skills unless user toggles all
      return showAllInAllView ? true : !!skill.featured;
    }

    // When a specific category is clicked, display all skills for that category
    return skill.category === selectedCategory;
  });

  const getCategoryCount = (cat: SkillCategory | 'All') => {
    if (cat === 'All') {
      return showAllInAllView ? SKILL_ITEMS.length : SKILL_ITEMS.filter(s => s.featured).length;
    }
    return SKILL_ITEMS.filter(s => s.category === cat).length;
  };

  const getCategoryLabel = (cat: SkillCategory | 'All') => {
    if (cat === 'All') return 'Core Stack';
    return cat;
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-dots-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills & Core Competencies"
          subtitle="Top 20 core technologies highlighted in the Core Stack, with full specialized skillsets accessible under each category."
        />

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies (e.g. Java, Postman, Kubernetes, Spring)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 border border-cyan-400'
                      : 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700'
                  }`}
                >
                  {categoryIcons[cat]}
                  <span>{getCategoryLabel(cat)}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-300/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Context Info */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 max-w-5xl mx-auto px-2">
            <span>
              {selectedCategory === 'All' ? (
                showAllInAllView
                  ? `Showing all ${filteredSkills.length} technologies across all domains`
                  : `Showing 20 core stack technologies • Select any category to view full skillsets`
              ) : (
                `Showing all ${filteredSkills.length} ${selectedCategory} skills`
              )}
            </span>
            {selectedCategory === 'All' && !searchQuery && (
              <button
                onClick={() => setShowAllInAllView(!showAllInAllView)}
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold ml-4"
              >
                {showAllInAllView ? 'Show Core Stack (20)' : `View Full Arsenal (${SKILL_ITEMS.length})`}
              </button>
            )}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${skill.category}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl glass-card-hover flex flex-col justify-between space-y-3 relative overflow-hidden group"
              >
                {skill.highlight && (
                  <span className="absolute top-2 right-2 p-1 text-amber-400" title="Core Specialty">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </span>
                )}

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">
                      {skill.category}
                    </span>
                    {skill.proficiency && (
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>

                {/* Proficiency Meter */}
                {skill.proficiency && (
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 font-mono text-sm">
            No technologies match "{searchQuery}" in category "{getCategoryLabel(selectedCategory)}".
          </div>
        )}
      </div>
    </section>
  );
};
