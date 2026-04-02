"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "jsreid27@gmail.com",
    href: "mailto:jsreid27@gmail.com",
    color: "#00e5ff",
  },
  {
    icon: Phone,
    label: "801-927-7910",
    href: "tel:8019277910",
    color: "#39d353",
  },
  {
    icon: MapPin,
    label: "Kaysville, UT",
    href: "#",
    color: "#7c3aed",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">06</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-4">Get in Touch</h2>
        <p className="text-[#8b949e] text-sm mb-12 max-w-lg">
          Open to full-time roles in AI engineering, software development, and systems automation.
          I&apos;d love to hear about your project or opportunity.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact links */}
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-4 border border-[#1e2d3d] bg-[#0d1117] hover:border-[#1e2d3d]/80 group transition-all duration-200"
              >
                <Icon size={16} style={{ color }} className="shrink-0" />
                <span className="text-sm text-[#8b949e] group-hover:text-[#e6edf3] transition-colors">
                  {label}
                </span>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/18jreid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs px-4 py-2 border border-[#1e2d3d] text-[#8b949e] hover:border-[#00e5ff]/30 hover:text-[#e6edf3] transition-all duration-200"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/justin-reid-0a7322133/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs px-4 py-2 border border-[#1e2d3d] text-[#8b949e] hover:border-[#00e5ff]/30 hover:text-[#e6edf3] transition-all duration-200"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Availability card */}
          <div className="p-8 border border-[#1e2d3d] bg-[#0d1117]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#39d353] shadow-[0_0_8px_#39d353]" />
              <span className="text-[#e6edf3] font-semibold">Available for opportunities</span>
            </div>
            <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
              Actively seeking full-time roles in AI engineering and software development — internship wrapping up May 2026. Best response time is under 24 hours.
            </p>
            <a
              href="mailto:jsreid27@gmail.com"
              className="inline-block px-5 py-2.5 bg-[#00e5ff] text-[#080c14] text-sm font-semibold hover:bg-[#00c8e0] transition-colors duration-200"
            >
              Send a Message
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-[#1e2d3d] text-xs text-[#8b949e] flex flex-wrap justify-between gap-4">
        <span>© 2026 Justin Reid</span>
        <span>Built with Next.js + Tailwind CSS</span>
      </div>
    </section>
  );
}
