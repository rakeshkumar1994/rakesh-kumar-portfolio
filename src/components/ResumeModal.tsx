"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";
import {
  X,
  Download,
  Copy,
  Check,
  FileText,
  Printer,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"formatted" | "plain">("formatted");

  if (!isOpen) return null;

  const rawResumeText = `
RAKESH KUMAR
Full Stack Developer
Parramatta, NSW, Australia | +61 493332955 | rakeshkumarsyd@gmail.com

PROFESSIONAL SUMMARY
Full Stack Developer with 9+ years of commercial software development experience, including 5+ years building customer-facing applications with React, Redux and Node.js/Express for enterprise SaaS and financial-services platforms. Strong background designing and consuming RESTful APIs, contributing to architectural and technical design discussions, and delivering within Agile/Scrum teams. Hands-on experience with AWS (EC2) deployments, CI/CD pipelines (Bamboo, CircleCI) and code review practices, with a collaborative, quality-first approach to engineering.

CORE TECHNICAL SKILLS
Frontend: React.js, Redux, Redux Saga/Thunk, Next.js, Vue.js, Angular/AngularJS, JavaScript (ES6+), HTML5, CSS3/Sass/Less, Bootstrap, jQuery
Backend & APIs: Node.js, Express.js, RESTful API design & integration, AI Consumer & LLM Integration (Google Gemini, OpenAI), GraphQL, Swagger
Cloud & DevOps: AWS (EC2), Apache Tomcat, CI/CD pipelines (Bamboo, CircleCI, CARA), Agile/Scrum delivery
Data & Tools: GitHub Copilot, Amazon Q / Kiro, MySQL, MongoDB, Git/Stash, Jira, Confluence, Trello, Asana, Figma, Miro
Methodologies: Agile, Scrum, Waterfall, AI-Assisted Engineering Workflows

PROFESSIONAL EXPERIENCE
Technology Lead | Infosys Limited, Sydney, Australia (Oct 2022 – Present)
• Work across the full stack on customer-facing applications and backend services using React, Redux and Node.js/Express, delivering new features and enhancing existing functionality for a banking platform.
• Design, build and maintain RESTful APIs and integrations, collaborating closely with Product Managers, Designers and cross-functional engineering teams.
• Participate in technical design discussions and contribute to architectural decisions, including technology stack, coding standards, performance, scalability and security.
• Conduct code reviews and lead scrum ceremonies, promoting engineering best practices and mentoring team members within a 5–20 person delivery team.
• Support cloud-based deployments and environment setup for System Integration Testing, and assist with CI/CD pipeline execution.
• Perform impact analysis and story-point estimation within an Agile product environment, supporting SIT/UAT test cycles through to production release.

Technology Lead | Infosys Limited, India (Jul 2022 – Oct 2022)
• Continued delivery of React/Node.js features for the Westpac Digital Finance Application prior to relocating to the Sydney client engagement.

Technology Analyst | Infosys Limited, India (May 2021 – Jun 2022)
• Developed and enhanced React, Redux and Node.js/Express modules for enterprise credit-assessment and digital-lending web applications, replacing legacy Excel-based workflows.
• Built and consumed REST web services, collaborated with QA on system test plans, and resolved defects identified during SIT/UAT cycles.

Software Developer | Logiciel Solutions, India (Jul 2019 – May 2021)
• Built UI features in React.js and Next.js and integrated with PHP/Laravel backend services for a real estate marketing and lead-management SaaS platform (Keller Williams Command).
• Delivered code through a CI/CD pipeline to QA environments, and supported enhancements, bug fixes and production issue resolution.

Software Engineer | Evolvan Info Solutions Pvt. Ltd., India (Apr 2017 – Jun 2019)
• Developed React.js and WordPress REST API-driven front ends, deploying applications to AWS EC2 instances.
• Built responsive HTML/CSS/PHP web applications and integrated Google Analytics for user activity tracking.

EDUCATION
B.Tech, Information Technology — I.K. Punjab Technical University
Ludhiana College of Engineering and Technology, Punjab | 2012 – 2016

CERTIFICATIONS & TRAINING
Infosys: React.js • Node.js • Microservices • Cloud & AI

ACHIEVEMENTS
• Westpac Glory Award for best performance (2021 – 2024)
• Infosys Insta / Rookie / Best Performer awards (2021 – 2024)
• Best Team Player Award, Evolvan Info Solutions
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] flex flex-col border-slate-700 bg-slate-950/95 shadow-2xl animate-in fade-in zoom-in-95 duration-200">

        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg sm:text-xl">Rakesh_Kumar_Resume.pdf</h3>
              <p className="text-xs text-slate-400">Official Curriculum Vitae • Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 mr-2">
              <button
                onClick={() => setActiveTab("formatted")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${activeTab === "formatted" ? "bg-sky-500 text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                Formatted View
              </button>
              <button
                onClick={() => setActiveTab("plain")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${activeTab === "plain" ? "bg-sky-500 text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                Raw Text
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Copy Resume Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-sky-400" />}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-md shadow-sky-500/20"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-slate-200">

          {activeTab === "plain" ? (
            <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap bg-slate-900 p-6 rounded-xl border border-slate-800 leading-relaxed">
              {rawResumeText}
            </pre>
          ) : (
            <div className="space-y-8 max-w-3xl mx-auto bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80">

              {/* Header */}
              <div className="text-center border-b border-slate-800 pb-6">
                <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">RAKESH KUMAR</h1>
                <p className="text-sky-400 font-semibold text-lg mt-1">Full Stack Developer</p>

                <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> Parramatta, NSW, Australia</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sky-400" /> +61 493332955</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> rakeshkumarsyd@gmail.com</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400 mb-2">Professional Summary</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {RESUME_DATA.personal.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400 mb-3">Core Technical Skills</h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-200">Frontend: </span>
                    <span className="text-slate-300">React.js, Redux, Redux Saga/Thunk, Next.js, Vue.js, Angular/AngularJS, JavaScript (ES6+), HTML5, CSS3/Sass/Less, Bootstrap, jQuery</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Backend & APIs: </span>
                    <span className="text-slate-300">Node.js, Express.js, RESTful API design & integration, GraphQL, Swagger, Meteor.js</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Cloud & DevOps: </span>
                    <span className="text-slate-300">AWS (EC2), Apache Tomcat, CI/CD pipelines (Bamboo, CircleCI, CARA), Agile/Scrum delivery</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Data & Tools: </span>
                    <span className="text-slate-300">MySQL, MongoDB, Git/Stash, Jira, Confluence, Trello, Asana, Figma, Miro</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400 mb-4">Professional Experience</h2>

                <div className="space-y-6">
                  {RESUME_DATA.experiences.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-100">
                        <span>{exp.role} | <span className="text-sky-300">{exp.company}</span>, {exp.location}</span>
                        <span className="text-slate-400 font-mono font-normal">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Achievements */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400 mb-2">Education</h2>
                  <p className="text-xs font-bold text-slate-200">{RESUME_DATA.education.degree}, {RESUME_DATA.education.field}</p>
                  <p className="text-xs text-slate-400">{RESUME_DATA.education.institution}</p>
                  <p className="text-xs text-slate-400 font-mono">{RESUME_DATA.education.period}</p>
                </div>

                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-sky-400 mb-2">Key Achievements</h2>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {RESUME_DATA.achievements.map((ach, i) => (
                      <li key={i}><span className="font-semibold text-slate-200">{ach.title}:</span> {ach.organization}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
