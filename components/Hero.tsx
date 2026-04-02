"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, MapPin } from "lucide-react";
import Image from "next/image";

const roles = [
  "AI Solutions Engineer",
  "Software Engineer",
  "Test Automation Engineer",
  "Full-Stack Developer",
];

const stats = [
  { value: "3+", label: "yrs defense" },
  { value: "F-16", label: "avionics" },
  { value: "8", label: "projects" },
  { value: "AI", label: "current focus" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00e5ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7c3aed]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl w-full mx-auto flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-4"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#e6edf3] leading-tight mb-8"
        >
          Justin Reid
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00e5ff]/20 to-[#7c3aed]/20 blur-xl" />
            <div className="relative w-full h-full rounded-full border-2 border-[#1e2d3d] overflow-hidden bg-[#0d1117]">
              <Image src="/profile.jpg" alt="Justin Reid" fill className="object-cover" />
            </div>
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#39d353] border-2 border-[#080c14] shadow-[0_0_8px_#39d353]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl text-[#00e5ff] font-medium mb-5 h-9"
        >
          {displayed}
          <span className="cursor-blink text-[#00e5ff] ml-0.5">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#8b949e] text-base md:text-lg max-w-xl leading-relaxed mb-8"
        >
          CS engineer with a defense background and active security clearance —
          building AI and full-stack solutions, seeking full-time roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="#experience"
            className="px-6 py-3 bg-[#00e5ff] text-[#080c14] font-semibold text-sm hover:bg-[#00c8e0] transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2d3d] text-[#8b949e] font-medium text-sm hover:border-[#00e5ff]/50 hover:text-[#e6edf3] transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Status badges — clearance is the key differentiator, give it visual weight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 border border-[#39d353]/40 bg-[#39d353]/10 text-[#39d353] text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d353] shadow-[0_0_6px_#39d353]" />
            Open to Full-Time
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-[#7c3aed]/50 bg-[#7c3aed]/10 text-[#a78bfa] text-xs font-semibold">
            <Shield size={11} />
            Active Security Clearance
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-[#1e2d3d] text-[#8b949e] text-xs">
            <MapPin size={11} />
            Kaysville, UT
          </span>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="grid grid-cols-4 divide-x divide-[#1e2d3d] border border-[#1e2d3d] w-full max-w-sm"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-3 text-center">
              <div className="text-base font-bold text-[#e6edf3]">{stat.value}</div>
              <div className="text-xs text-[#8b949e] leading-tight mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8b949e] hover:text-[#00e5ff] transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
