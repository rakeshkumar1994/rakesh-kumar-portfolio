"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Globe, 
  CheckCircle2,
  Code2
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950/70 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              Featured Applications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Production <span className="gradient-text-cyan">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Live web applications showcasing AI / LLM integrations and enterprise React & Next.js headless CMS architectures.
            </p>
          </div>

          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-sky-500/50 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-md group"
          >
            <GithubIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>github.com/rakeshkumar1994</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {RESUME_DATA.projects.map((project, idx) => {
            const isAI = project.category.includes("AI");

            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between hover:border-sky-500/40 transition-all"
              >
                {/* Glow Element */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl transition-all ${
                  isAI ? "bg-sky-500/15 group-hover:bg-sky-500/25" : "bg-indigo-500/15 group-hover:bg-indigo-500/25"
                }`} />

                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${
                      isAI
                        ? "bg-sky-500/10 text-sky-300 border-sky-500/30"
                        : "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                    }`}>
                      {isAI ? <Bot className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                      {project.category}
                    </span>

                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live App
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-xs font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Verified Deployment
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-semibold transition-all flex items-center gap-1.5"
                        title="View Source Code on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 group/btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Banner Banner */}
        <div className="glass-card p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-950/90 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-100">Explore Open Source & Code Repositories</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Check out Rakesh's GitHub profile (<span className="text-sky-300 font-mono">@rakeshkumar1994</span>) for code samples, repositories, and technical contributions.
              </p>
            </div>
          </div>

          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white font-semibold text-xs border border-sky-500/30 hover:border-sky-400 transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            Visit GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};
