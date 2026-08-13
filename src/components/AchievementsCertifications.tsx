"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { 
  Trophy, 
  Award, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Atom,
  Server,
  Cpu,
  Cloud
} from "lucide-react";

export const AchievementsCertifications: React.FC = () => {

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Atom": return Atom;
      case "Server": return Server;
      case "Cpu": return Cpu;
      case "Cloud": return Cloud;
      default: return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-950/80 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        
        {/* Section 1: Honors & Awards */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 mb-3">
                <Trophy className="w-3.5 h-3.5" />
                Recognition & Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Honors & <span className="gradient-text-gold">Awards</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-1">
                Acknowledged for top engineering performance, technical leadership, and teamwork.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {RESUME_DATA.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="glass-card p-6 relative overflow-hidden group hover:border-amber-500/40 transition-all"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300">
                    {ach.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{ach.organization}</p>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  {ach.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Excellence Recognition</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Certifications & Training */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              Verified Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Enterprise <span className="gradient-text-cyan">Certifications & Training</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESUME_DATA.certifications.map((cert, idx) => {
              const CertIcon = getCertIcon(cert.icon);

              return (
                <div key={idx} className="glass-card p-5 hover:border-sky-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                      <CertIcon className="w-5 h-5" />
                    </div>

                    <h3 className="font-bold text-slate-100 text-sm leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">{cert.issuer}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.topics.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Qualification</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
