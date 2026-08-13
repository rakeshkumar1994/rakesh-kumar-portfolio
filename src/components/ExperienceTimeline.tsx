"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    "infosys-sydney": true,
    "infosys-analyst": true
  });

  const toggleExpand = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="py-20 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            9+ Years Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional <span className="gradient-text-cyan">Experience Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A history of technical leadership, enterprise React & Node.js development, and customer-facing banking platform innovation.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {RESUME_DATA.experiences.map((exp) => {
            const isExpanded = !!expandedRoles[exp.id];

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot Node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  exp.isCurrent
                    ? "bg-sky-500 border-sky-400 shadow-lg shadow-sky-500/50"
                    : "bg-slate-900 border-slate-700 group-hover:border-sky-400 group-hover:bg-slate-800"
                }`}>
                  {exp.isCurrent ? (
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-sky-400" />
                  )}
                </div>

                {/* Main Card */}
                <div className="glass-card p-6 sm:p-8 relative">
                  
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-medium">
                        <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-sky-400" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                        {exp.client && (
                          <>
                            <span>•</span>
                            <span className="text-indigo-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                              Client: {exp.client}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono font-medium text-slate-300 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {exp.period}
                      </div>

                      {exp.teamSize && (
                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
                          <Users className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.teamSize}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-3">
                    <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-400">Key Contributions & Impact</h4>
                    
                    <ul className="space-y-2.5">
                      {(isExpanded ? exp.highlights : exp.highlights.slice(0, 2)).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.highlights.length > 2 && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 pt-1"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            Show {exp.highlights.length - 2} More Highlights <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Tech Stack Pills Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase mr-1">Stack:</span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
