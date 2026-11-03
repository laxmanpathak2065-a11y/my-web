import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Award, Code2, Globe2, Sparkles, Terminal, CheckCircle2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'philosophy' | 'focus' | 'education'>('bio');
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kathmandu',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch (e) {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="introduction" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
            Introduction & Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Meet Laxman Pathak
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
            Passionate software craftsman from Kathmandu, Nepal, building high-concurrency cloud systems and delightful web interfaces for high-growth tech teams worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Identity & Status Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Profile Overview Card */}
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xs">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shrink-0">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-xs">
                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Location</span>
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">
                    Kathmandu, Nepal
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Kathmandu Time</span>
                  </span>
                  <span className="font-mono font-medium text-zinc-900 dark:text-zinc-200 tabular-nums">
                    {localTime || 'GMT+5:45'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Work Modality</span>
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    Remote / Hybrid
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Specialization</span>
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">
                    Full Stack Systems
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Quick Fast Facts Box */}
            <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xs space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="font-mono font-semibold text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                At a Glance
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>5+ years designing distributed TypeScript, Node.js & Go services</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Deep expertise in React 19, Next.js, and modern browser ergonomics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Committed to sub-100ms API responses and 99.98% service uptime</span>
              </div>
            </div>

          </div>

          {/* Interactive Tabbed Story Card */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6 overflow-x-auto">
              {[
                { id: 'bio', label: 'Biography' },
                { id: 'philosophy', label: 'My Philosophy' },
                { id: 'focus', label: 'Current Focus' },
                { id: 'education', label: 'Education & Roots' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'bio' && (
              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed animate-in fade-in">
                <p>
                  I am <strong className="text-zinc-900 dark:text-zinc-100">Laxman Pathak</strong>, a software engineer with a deep passion for the intersection between rock-solid distributed backend architecture and refined, human-centric frontend interfaces.
                </p>
                <p>
                  Over the past five years, I have architected systems ranging from high-concurrency e-commerce backends handling 18,000 requests per second during flash sales, to real-time telemetry pipelines and distraction-free publishing environments.
                </p>
                <p>
                  Whether working alongside product founders to take a 0-to-1 prototype into market reality, or refactoring mission-critical legacy services to achieve 90%+ latency improvements, I treat code as a long-term asset: structured, documented, and reliably performant.
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
                  <span>Languages: TypeScript, Go, JavaScript, Python, SQL</span>
                  <span aria-hidden="true">·</span>
                  <span>Contact: laxmanpathak2065@gmail.com</span>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed animate-in fade-in">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  "Simplicity and speed are features, not compromises."
                </p>
                <p>
                  I believe that the best software feels invisible to the user: pages load instantly, interactions feel tactile and predictable, and background pipelines recover automatically from node failures without waking the on-call engineer at 3 AM.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 mb-1">
                      Architectural Discipline
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Decoupled boundaries, strict type contracts, and defensive caching patterns keep codebases maintainable across years of team growth.
                    </p>
                  </div>
                  <div className="p-3.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 mb-1">
                      User Ergonomics
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Zero layout shift, keyboard accessibility, and sub-100ms feedback cycles transform a functional tool into an enjoyable product.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'focus' && (
              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed animate-in fade-in">
                <p>
                  Currently, I am exploring edge computing paradigms, WebAssembly client-side processing, and server-driven UI architectures to push response times closer to the physical limits of network transport.
                </p>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-zinc-400">•</span>
                    <span><strong>Event-Driven Microservices:</strong> Building resilient worker pools using Go and Kafka for decoupled data pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-zinc-400">•</span>
                    <span><strong>Edge CDN Acceleration:</strong> Leveraging Cloudflare Workers and Fastly compute for millisecond static caching.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-zinc-400">•</span>
                    <span><strong>Real-time Observability:</strong> Integrating OpenTelemetry traces and distributed metrics without high cloud fees.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed animate-in fade-in">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                      B.Sc. in Computer Science & Information Technology
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Tribhuvan University · Institute of Science & Technology
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                      Rigorous foundation in algorithms, relational database theory, operating systems, compiler design, and distributed network protocols. Graduated with top-percentile distinction.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
                    Certifications & Continuous Learning
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-800 dark:text-zinc-200 font-medium">AWS Certified Solutions Architect – Associate</span>
                      <span className="font-mono text-zinc-400">AWS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-800 dark:text-zinc-200 font-medium">Distributed Systems Engineering Specialization</span>
                      <span className="font-mono text-zinc-400">Advanced Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
