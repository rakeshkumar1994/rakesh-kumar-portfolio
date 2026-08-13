"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillMatrix } from "@/components/SkillMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AchievementsCertifications } from "@/components/AchievementsCertifications";
import { Education } from "@/components/Education";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Hero Header & Bio */}
      <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Interactive Core Technical Skill Portfolio */}
      <SkillMatrix />

      {/* Experience & Career Timeline */}
      <ExperienceTimeline />

      {/* Featured Production Projects */}
      <FeaturedProjects />

      {/* Honors, Awards & Certifications */}
      <AchievementsCertifications />

      {/* Academic Education */}
      <Education />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
