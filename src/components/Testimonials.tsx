import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
            04. Recommendations & Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Endorsements from Engineering Leadership
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-2xl">
            Perspectives from engineering leads, product directors, and founders who have collaborated with Laxman.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col justify-between shadow-xs"
            >
              <div>
                <Quote className="w-5 h-5 text-zinc-300 dark:text-zinc-600 mb-4" />
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  {test.author}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {test.role} · {test.company}
                </div>
                <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">
                  {test.context}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
