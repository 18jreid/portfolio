"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, User } from "lucide-react";
import Image from "next/image";

const roles = [
  "AI Solutions Engineer",
  "Software Engineer",
  "Test Automation Engineer",
  "Full-Stack Developer",
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
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00e5ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7c3aed]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left — text */}
          <div className="flex-1">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e6edf3] leading-tight mb-4"
            >
              Justin Reid
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl md:text-2xl text-[#00e5ff] font-medium mb-6 h-9"
            >
              {displayed}
              <span className="cursor-blink text-[#00e5ff] ml-0.5">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8b949e] text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              Building intelligent software at the intersection of AI and engineering —
              from F-16 avionics systems to modern machine learning pipelines.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4"
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

            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4 text-xs text-[#8b949e]"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#39d353] inline-block" />
                Available for opportunities
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] inline-block" />
                Kaysville, UT
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] inline-block" />
                Active Security Clearance
              </span>
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00e5ff]/20 to-[#7c3aed]/20 blur-xl" />
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full border-2 border-[#1e2d3d] overflow-hidden bg-[#0d1117]">
                {/* Replace this block with <Image> once you have a photo */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <User size={64} className="text-[#1e2d3d]" strokeWidth={1.5} />
                  <span className="text-[#1e2d3d] text-xs">Add photo</span>
                </div>
              </div>
              {/* Decorative dot */}
              <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-[#39d353] border-2 border-[#080c14] shadow-[0_0_8px_#39d353]" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8b949e] hover:text-[#00e5ff] transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
