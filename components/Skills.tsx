"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "AI & Machine Learning",
    color: "#7c3aed",
    skills: ["LLMs / Prompt Engineering", "Machine Learning", "AI Pipeline Development", "Python"],
  },
  {
    name: "Software Development",
    color: "#00e5ff",
    skills: ["Python", "C++", "C#", "TypeScript", "JavaScript", "SQL", "Git"],
  },
  {
    name: "DevOps & Infrastructure",
    color: "#39d353",
    skills: ["DevOps", "Version Control", "Application Stack Management", "CI/CD", "Agile / Scrum"],
  },
  {
    name: "Frameworks & Tools",
    color: "#f59e0b",
    skills: ["Next.js", "React", "Django REST Framework", "Unity", "Unreal Engine 4", "Blender", "OpenGL"],
  },
  {
    name: "Specialty",
    color: "#ec4899",
    skills: ["Test Automation", "VR Development", "Game Development", "Eye Tracking", "Prev. Security Clearance"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">03</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 border border-[#1e2d3d] bg-[#0d1117] hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/3 transition-all duration-300"
              style={{ borderTopColor: cat.color + "50" }}
            >
              <div
                className="text-xs font-semibold mb-4 pb-2 border-b border-[#1e2d3d] tracking-wide"
                style={{ color: cat.color }}
              >
                {cat.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-[#161b22] text-[#8b949e] border border-[#1e2d3d] hover:text-[#e6edf3] transition-colors duration-200 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-[#8b949e] border-l-2 border-[#1e2d3d] pl-4"
        >
          Always learning — currently deepening expertise in LLM fine-tuning, retrieval-augmented generation (RAG), and agentic AI systems.
        </motion.p>
      </motion.div>
    </section>
  );
}
