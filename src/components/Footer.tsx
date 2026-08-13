"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { RESUME_DATA } from "@/data/resumeData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
            RK
          </div>
          <div>
            <div className="font-bold text-slate-200 text-sm">Rakesh Kumar</div>
            <p className="text-slate-500">Full Stack Developer • Parramatta, NSW, Australia</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5 font-medium"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors flex items-center gap-1.5 font-medium"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>GitHub</span>
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all flex items-center gap-1.5 font-medium"
        >
          <ArrowUp className="w-4 h-4 text-sky-400" />
          <span>Back to Top</span>
        </button>

      </div>
    </footer>
  );
};
