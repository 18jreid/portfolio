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
              I&apos;m a Computer Science graduate from Utah State University with a strong foundation
              in full-stack development, test engineering, and artificial intelligence.
            </p>
            <p>
              Currently interning at{" "}
              <span className="text-[#e6edf3] font-medium">MasterControl</span> as an AI Solutions
              Engineer, applying machine learning and AI tooling to solve real-world enterprise challenges.
            </p>
            <p>
              Previously, I spent nearly three years as a{" "}
              <span className="text-[#e6edf3] font-medium">System Test Engineer</span> with the{" "}
              <span className="text-[#e6edf3] font-medium">309th Software Engineering Group</span> at
              Hill AFB — an environment that sharpened my instincts for precision and building software
              that simply can&apos;t fail.
            </p>
            <p>
              Earlier in my career I collaborated with the{" "}
              <span className="text-[#e6edf3] font-medium">US Department of Veterans Affairs</span> to
              build a VR therapy application, and shipped a mobile game to the App Store as head developer
              of a startup.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
