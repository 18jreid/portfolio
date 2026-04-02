"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Code2, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    label: "AI Engineering",
    desc: "LLMs, ML pipelines, agentic systems",
    color: "#7c3aed",
  },
  {
    icon: Shield,
    label: "Defense Background",
    desc: "F-16 avionics at Hill AFB + active clearance",
    color: "#00e5ff",
  },
  {
    icon: Code2,
    label: "Full-Stack Dev",
    desc: "Next.js, React, Django, Docker, CI/CD",
    color: "#39d353",
  },
  {
    icon: Cpu,
    label: "Systems Depth",
    desc: "C++, OpenGL, graphics engines, VR",
    color: "#f59e0b",
  },
];

export default function About() {
  return (
    <section id="about" className="py-8 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {highlights.map(({ icon: Icon, label, desc, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="p-4 border border-[#1e2d3d] bg-[#0d1117] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/[0.02] transition-all duration-300 group"
          >
            <div
              className="w-8 h-8 flex items-center justify-center mb-3 border transition-all duration-300"
              style={{
                borderColor: color + "40",
                backgroundColor: color + "12",
              }}
            >
              <Icon size={15} style={{ color }} />
            </div>
            <div className="text-xs font-semibold text-[#e6edf3] mb-1">{label}</div>
            <div className="text-xs text-[#8b949e] leading-relaxed">{desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
