"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { GraduationCap, Building, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  const edu = RESUME_DATA.education;

  return (
    <section id="education" className="py-16 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Background
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
              Education & <span className="gradient-text-cyan">Academic Qualification</span>
            </h2>
          </div>

          <div className="glass-card p-8 hover:border-indigo-500/40 transition-all relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {edu.degree}, {edu.field}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 mt-1 flex items-center gap-1.5">
                    <Building className="w-4 h-4" />
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{edu.college}</p>
                </div>
              </div>

              <div className="sm:text-right shrink-0 space-y-1.5">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300 inline-flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {edu.period}
                </div>
                <div className="text-xs text-slate-400 flex items-center sm:justify-end gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Four-Year Engineering Degree
              </span>
              <span>•</span>
              <span>Focus on Software Systems, Algorithms & Information Technology</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
