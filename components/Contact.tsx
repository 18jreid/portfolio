"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail,   label: "jsreid27@gmail.com", href: "mailto:jsreid27@gmail.com", color: "#00e5ff" },
  { icon: Phone,  label: "801-927-7910",        href: "tel:8019277910",           color: "#39d353" },
  { icon: MapPin, label: "Kaysville, UT",        href: "#",                        color: "#7c3aed" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">05</p>
        <h2 className="text-3xl md:text-4xl font-bold text-prose mb-4">Get in Touch</h2>
        <p className="text-faint text-sm mb-12 max-w-lg">
          Open to full-time roles in AI engineering, software development, and systems automation.
          I&apos;d love to hear about your project or opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, href, color }) => (
              <a key={label} href={href} className="flex items-center gap-4 p-4 border border-line bg-surface hover:border-line/80 group transition-all duration-200">
                <Icon size={16} style={{ color }} className="shrink-0" />
                <span className="text-sm text-faint group-hover:text-prose transition-colors">{label}</span>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <a href="https://github.com/18jreid" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs px-4 py-3 border border-line text-faint hover:border-accent/30 hover:text-prose transition-all duration-200">
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/justin-reid-0a7322133/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs px-4 py-3 border border-line text-faint hover:border-accent/30 hover:text-prose transition-all duration-200">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="p-8 border border-line bg-surface">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green shadow-[0_0_8px_#39d353]" />
              <span className="text-prose font-semibold">Available for opportunities</span>
            </div>
            <p className="text-sm text-faint leading-relaxed mb-6">
              Actively seeking full-time roles in AI engineering and software development — internship wrapping up May 2026. Best response time is under 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:jsreid27@gmail.com"
                className="inline-block px-5 py-2.5 bg-accent text-[#080c14] text-sm font-semibold hover:bg-[#00c8e0] transition-colors duration-200">
                Send a Message
              </a>
              <a href="/api/resume" target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 border border-line text-faint text-sm font-medium hover:border-accent/50 hover:text-prose transition-all duration-200">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-24 pt-8 border-t border-line text-xs text-faint flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
        <span>© 2026 Justin Reid</span>
        <span>Built with Next.js + Tailwind CSS</span>
      </div>
    </section>
  );
}
