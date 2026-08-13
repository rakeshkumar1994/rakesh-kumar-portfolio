"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Cards & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                Let's Connect
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Get in <span className="gradient-text-cyan">Touch</span>
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Currently based in Parramatta, Sydney, Australia. Open for Senior Full Stack Developer, Technology Lead, or Architectural consulting engagements.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Address</div>
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="font-bold text-slate-100 text-sm hover:text-sky-300 transition-colors"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all text-xs font-semibold flex items-center gap-1"
                title="Copy email address"
              >
                {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedField === "email" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">LinkedIn Network</div>
                  <a
                    href={RESUME_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-100 text-sm hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    Rakesh Kumar <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all text-xs font-semibold flex items-center gap-1"
              >
                <span>Connect</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">GitHub Repositories</div>
                  <a
                    href={RESUME_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-100 text-sm hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    rakeshkumar1994 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all text-xs font-semibold flex items-center gap-1"
              >
                <span>Visit Profile</span>
              </a>
            </div>
            <div className="glass-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="font-bold text-slate-100 text-sm hover:text-emerald-300 transition-colors"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs font-semibold flex items-center gap-1"
                title="Copy phone number"
              >
                {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedField === "phone" ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="font-bold text-slate-100 text-sm">{RESUME_DATA.personal.location}</div>
              </div>
            </div>

            {/* Notice Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Prompt response guaranteed within 24 hours.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">Have a project or opportunity in mind? Drop a quick note below.</p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! Rakesh will review your message and reply back to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-slate-100 text-xs focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-slate-100 text-xs focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="Opportunity / Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-slate-100 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Rakesh, I would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-slate-100 text-xs focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
