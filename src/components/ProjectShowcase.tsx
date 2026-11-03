import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, BookOpen } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterOptions: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full Stack' },
    { id: 'cloud-infra', label: 'Cloud & Infra' },
    { id: 'systems-data', label: 'Systems & Data' },
    { id: 'creative-tools', label: 'Creative Dev' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
              01. Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Production Systems & Digital Products
            </h2>
          </div>

          {/* Interactive filter control: functional segmented tabs */}
          <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-x-auto max-w-full">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === opt.id
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 || index === 1;
            const colSpanClass = isFeatured ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs hover:shadow-md ${colSpanClass}`}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle top indicator */}
                  <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 border border-zinc-800">
                    <span className="font-semibold text-emerald-400">{project.keyMetric.value}</span>
                    <span className="text-zinc-400 text-[10px]">{project.keyMetric.label}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Unboxed Metadata (NO pills) */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2.5 font-mono">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                    </h3>

                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300 mt-1 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer tags and action */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    {/* Tech stack as clean unboxed text list */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {tIdx < Math.min(project.tags.length, 3) - 1 && (
                            <span aria-hidden="true">/</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-zinc-400 dark:text-zinc-600">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </span>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
