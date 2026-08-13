"use client";

import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Code2, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail, 
  Menu, 
  X, 
  Terminal,
  Sparkles,
  FolderGit2
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { RESUME_DATA } from "@/data/resumeData";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setScrolled(currentScroll > 20);
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero", icon: Terminal },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Achievements", href: "#achievements", icon: Award },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg shadow-black/30" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              RK
            </div>
            <div>
              <div className="font-bold text-slate-100 tracking-tight flex items-center gap-2 text-base sm:text-lg">
                Rakesh Kumar
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Lead Dev
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Full Stack Engineer • 9+ Yrs</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-blue-400 hover:text-white border border-slate-700/80 transition-all flex items-center gap-1.5"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-all flex items-center gap-1.5"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-sky-400" />
              <span className="hidden xl:inline">GitHub</span>
            </a>
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 hover:border-sky-400 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              View Resume
            </button>
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md shadow-sky-500/25 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 glass-card border border-slate-800 flex flex-col gap-2 rounded-2xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/90 flex items-center gap-3"
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-sky-300 border border-sky-500/30 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View PDF Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
