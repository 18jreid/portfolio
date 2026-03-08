"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Code2, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    label: "AI Engineering",
    desc: "Building intelligent solutions and machine learning pipelines at MasterControl",
  },
  {
    icon: Shield,
    label: "Defense Tech",
    desc: "3+ years enhancing F-16 avionics test systems at Hill Air Force Base",
  },
  {
    icon: Code2,
    label: "Full-Stack Dev",
    desc: "From VR applications to automation frameworks across multiple platforms",
  },
  {
    icon: Cpu,
    label: "Systems Thinking",
    desc: "Agile and DevOps mindset for delivering reliable software at scale",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">01</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5 text-[#8b949e] leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate from Utah State University with a background
              spanning aerospace defense, virtual reality, and now artificial intelligence.
            </p>
            <p>
              Currently, I work as an{" "}
              <span className="text-[#e6edf3] font-medium">AI Solutions Engineer Intern at MasterControl</span>,
              where I apply machine learning and AI tooling to solve real-world enterprise challenges.
            </p>
            <p>
              Before that, I spent three years as a{" "}
              <span className="text-[#e6edf3] font-medium">System Test Automation Engineer</span>{" "}
              for the F-16 program at Hill Air Force Base — an environment that sharpened my instincts
              for precision, reliability, and building systems that simply can&apos;t fail.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="p-4 border border-[#1e2d3d] bg-[#0d1117] hover:border-[#00e5ff]/30 transition-all duration-300 group"
              >
                <Icon
                  size={20}
                  className="text-[#00e5ff] mb-3 group-hover:scale-110 transition-transform duration-200"
                />
                <div className="text-xs text-[#e6edf3] font-semibold mb-1">{label}</div>
                <div className="text-xs text-[#8b949e] leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
