import React, { useState } from 'react';
import { Layers, Server, Database, ShieldCheck, Check } from 'lucide-react';
import { SKILL_MATRIX } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Frontend & Architecture',
    'Backend & Cloud Systems',
    'Databases & Storage',
    'DevOps & Observability',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILL_MATRIX
    : SKILL_MATRIX.filter((s) => s.category === selectedCategory);

  const philosophies = [
    {
      title: 'Performance as an Invariant',
      desc: 'Sub-100ms interactions, zero layout shifts, and predictable p99 API latencies are non-negotiable standards, not afterthoughts.',
    },
    {
      title: 'End-to-End Type Safety',
      desc: 'Strict TypeScript contracts and schema validation from the database layer to the user input boundary eliminate runtime ambiguity.',
    },
    {
      title: 'Defensive Failure Modes',
      desc: 'Distributed systems must anticipate partitions: circuit breakers, idempotency keys, and graceful fallbacks prevent cascading crashes.',
    },
    {
      title: 'High-Ergonomic Craft',
      desc: 'Clean interfaces, thoughtful whitespace, and accessible interactions ensure products feel effortless for end users.',
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
              03. Technical Arsenal
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Skills, Frameworks & Architectural Disciplines
            </h2>
          </div>

          {/* Category Filter */}
          <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    {skill.years} yrs
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>{skill.category}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles / Philosophies */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3 font-mono">
            Core Engineering Tenets
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-2">
                  0{idx + 1}.
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
