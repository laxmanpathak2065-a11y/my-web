import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillMatrix } from './components/SkillMatrix';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
      {/* 3-Zone Top Navigation */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Split Screen Hero with 4-column KPI strip below */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Selected Works Bento Grid with interactive filter & modal triggers */}
        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skill Matrix & Core Engineering Tenets */}
        <SkillMatrix />

        {/* Attributable Testimonials */}
        <Testimonials />

        {/* Interactive Contact & Message Section */}
        <ContactSection />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />

      {/* Case Study Fullscreen Lightbox */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume / Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
