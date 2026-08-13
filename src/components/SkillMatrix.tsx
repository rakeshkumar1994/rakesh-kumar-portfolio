"use client";

import React, { useState, useMemo } from "react";
import { RESUME_DATA, Skill } from "@/data/resumeData";
import { 
  Code2, 
  Search, 
  Sparkles, 
  Layers, 
  Server, 
  Cloud, 
  Database, 
  Users, 
  Filter, 
  CheckCircle2, 
  Info,
  ChevronRight,
  X
} from "lucide-react";

export const SkillMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = ["All", "Frontend", "Backend & APIs", "Cloud & DevOps", "Data & Tools", "Methodologies"];

  const filteredSkills = useMemo(() => {
    return RESUME_DATA.skills.filter((skill) => {
      const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return Layers;
      case "Backend & APIs": return Server;
      case "Cloud & DevOps": return Cloud;
      case "Data & Tools": return Database;
      case "Methodologies": return Users;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/60 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Interactive <span className="gradient-text-cyan">Skill Matrix</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Explore 9+ years of accumulated full-stack expertise across modern frontend frameworks, scalable backends, cloud DevOps, and Agile leadership.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-slate-100 text-xs focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat);
            const count = cat === "All" 
              ? RESUME_DATA.skills.length 
              : RESUME_DATA.skills.filter(s => s.category === cat).length;
            
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-md shadow-sky-500/10"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sky-400" : "text-slate-500"}`} />
                <span>{cat}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? "bg-sky-400/20 text-sky-200" : "bg-slate-800 text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="glass-card p-12 text-center text-slate-400">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p>No skills found matching "{searchQuery}". Try searching for another keyword.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const CategoryIcon = getCategoryIcon(skill.category);

              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className="glass-card p-5 cursor-pointer relative group hover:scale-[1.01] transition-all"
                >
                  {skill.isLearning ? (
                    <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Actively Learning
                    </span>
                  ) : skill.featured ? (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-400" /> Featured
                    </span>
                  ) : null}

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-colors">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">{skill.category}</span>
                    </div>
                  </div>

                  {skill.description && (
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                  )}

                  {/* Level Progress Indicator */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="font-mono text-sky-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="glass-card max-w-lg w-full p-6 relative border-slate-700 animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 p-1.5 rounded-lg bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{selectedSkill.name}</h3>
                  <span className="text-xs text-sky-400 font-medium">{selectedSkill.category}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1 text-sm">Overview</h4>
                  <p className="leading-relaxed text-slate-300">{selectedSkill.description || "Core engineering competency utilized across enterprise projects."}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400">Mastery Level</span>
                    <span className="font-mono text-sky-400 font-bold">{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                      style={{ width: `${selectedSkill.level}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-200 text-sm">Applied In Enterprise Contexts</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Westpac Banking Platform</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Infosys Engineering</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Keller Williams SaaS</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs"
                >
                  Close Detail
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
