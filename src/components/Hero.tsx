import React, { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, FileText, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Split Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker with typographic separator (NO pills) */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400 mb-4">
              <span>Full Stack Software Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Systems & Web Performance</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-3 h-3 text-zinc-400" />
                Kathmandu, Nepal
              </span>
            </div>

            {/* Architectural Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Engineering resilient web systems and digital products with architectural clarity.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-xl">
              Hello, I am <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.bio}
            </p>

            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-mono text-xs">{PERSONAL_INFO.email} copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span className="font-mono text-xs">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

            {/* Availability status line (quiet unboxed text) */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Right Column: High-fidelity portrait container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900 group">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt={`Portrait of ${PERSONAL_INFO.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              
              {/* Subtle glass overlay footer */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent flex items-center justify-between text-white text-xs">
                <div>
                  <p className="font-semibold">{PERSONAL_INFO.name}</p>
                  <p className="text-zinc-300 text-[11px]">{PERSONAL_INFO.title}</p>
                </div>
                <a
                  href="#contact"
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width KPI strip below the split (§2.B rule) */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
                {stat.context}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
