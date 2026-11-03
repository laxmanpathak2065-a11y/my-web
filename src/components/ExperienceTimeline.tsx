import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
            02. Career Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Engineering Track Record & Leadership
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-2xl">
            A track record of designing, delivering, and scaling distributed web applications and high-throughput microservices.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                    <span>{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                    {exp.isCurrent && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          Current Role
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-zinc-400 font-normal">at</span>
                    <span className="text-zinc-800 dark:text-zinc-200">{exp.company}</span>
                  </h3>
                </div>

                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white whitespace-nowrap"
                  >
                    <span>Visit Company</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Concrete Key Achievements */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Key Deliverables & System Impact
                </div>
                <ul className="space-y-2">
                  {exp.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="text-zinc-400 dark:text-zinc-600 font-mono mt-0.5">•</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-zinc-400 font-mono mr-1">Stack:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
