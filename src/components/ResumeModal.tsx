import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_MATRIX } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>{PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="overflow-y-auto p-8 sm:p-10 space-y-8 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 print:p-0 print:text-black">
          
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-500 dark:text-zinc-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kathmandu, Nepal</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Remote Ready</span>
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 font-mono">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-mono">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">Frontend Engineering</span>
                <span className="text-zinc-600 dark:text-zinc-400">TypeScript, React 19, Next.js, Tailwind CSS, Web Workers, Web Performance</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">Backend & Systems</span>
                <span className="text-zinc-600 dark:text-zinc-400">Node.js, Go (Golang), Express, REST, GraphQL, gRPC, Microservices</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">Databases & Storage</span>
                <span className="text-zinc-600 dark:text-zinc-400">PostgreSQL, Redis (Redlock, Caching), TimescaleDB, MongoDB</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">DevOps & Cloud</span>
                <span className="text-zinc-600 dark:text-zinc-400">Docker, AWS (ECS, S3, CloudFront), Cloudflare Workers, CI/CD, OpenTelemetry</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 font-mono">
              Professional Work History
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role} <span className="font-normal text-zinc-500">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.impacts.map((imp, idx) => (
                      <li key={idx} className="leading-relaxed">{imp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-mono">
              Education & Credentials
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Bachelor of Science in Computer Science</span>
                  <p className="text-zinc-500">Tribhuvan University · Institute of Science and Technology</p>
                </div>
                <span className="font-mono text-zinc-400">Graduated with Distinction</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">AWS Certified Solutions Architect – Associate</span>
                  <p className="text-zinc-500">Amazon Web Services</p>
                </div>
                <span className="font-mono text-zinc-400">Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between print:hidden">
          <span className="text-xs text-zinc-500 font-mono">
            Direct Contact: {PERSONAL_INFO.email}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
