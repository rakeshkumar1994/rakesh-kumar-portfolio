"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Download, 
  Code2, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden bg-mesh bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Location & Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-medium backdrop-blur-md mb-6 animate-pulse-glow shadow-lg shadow-sky-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>{RESUME_DATA.personal.location}</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Senior / Lead Full Stack Developer
          </span>
        </div>

        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-50 tracking-tight leading-none">
                Hi, I'm <span className="gradient-text-cyan">{RESUME_DATA.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 pt-2">
                <Zap className="w-6 h-6 text-sky-400" />
                <span>{RESUME_DATA.personal.title}</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
                  {RESUME_DATA.personal.experienceYears} Years Exp
                </span>
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Commercial software engineer with <span className="text-sky-300 font-semibold">9+ years of experience</span> (5+ years focused on React, Redux & Node.js/Express) engineering high-volume banking platforms (<span className="text-slate-100 font-medium">Westpac</span>), enterprise SaaS, credit lending web apps, and AWS microservices.
            </p>

            {/* Core Strengths Checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
              {RESUME_DATA.personal.coreStrengths.slice(0, 4).map((strength, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                View & Download Resume PDF
              </button>

              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-medium text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-sky-400" />
                Featured Projects
              </a>

              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-blue-300 hover:text-white font-medium text-sm border border-slate-700 hover:border-blue-500/40 transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>

              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-medium text-sm border border-slate-700 hover:border-sky-500/40 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                GitHub
              </a>
            </div>

            {/* Contact Quick Info Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a 
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {RESUME_DATA.personal.email}
              </a>
              <span>•</span>
              <a 
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                {RESUME_DATA.personal.phone}
              </a>
              <span>•</span>
              <a 
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                LinkedIn Profile
              </a>
              <span>•</span>
              <a 
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                GitHub
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Card Showcase & Key Metrics */}
          <div className="lg:col-span-5 space-y-4">
            {/* Tech Stack Spotlight Card */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <h3 className="font-semibold text-slate-100 text-sm uppercase tracking-wider">Primary Technical Stack</h3>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">Verified</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["React.js", "Redux Saga/Thunk", "Node.js", "Express.js", "Next.js", "REST APIs", "AWS EC2", "GraphQL", "CI/CD", "Scrum"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs font-mono font-medium text-slate-200 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actively Learning Spotlight */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Actively Learning:
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-300">
                    Python
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-300">
                    FastAPI
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  Banking & Enterprise SaaS
                </span>
                <span className="text-sky-400 font-medium">Infosys • Westpac</span>
              </div>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 gap-3">
              {RESUME_DATA.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-4 hover:border-sky-500/40 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 gradient-text-cyan">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">{metric.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{metric.detail}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
