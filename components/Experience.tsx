"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    title: "AI Solutions Engineer Intern",
    company: "MasterControl",
    location: "Remote / Utah",
    period: "Jan 2026 — May 2026",
    current: true,
    tags: ["AI / ML", "Python", "LLMs", "Enterprise Software"],
    bullets: [
      "Building LLM-powered tools that automate quality management workflows for enterprise compliance teams.",
      "Integrating large language models into engineering pipelines to eliminate manual review bottlenecks.",
      "Scoping and delivering high-impact automation opportunities across cross-functional stakeholder teams.",
    ],
  },
  {
    title: "System Test Engineer",
    company: "309th Software Engineering Group (SWEG) — Hill AFB",
    location: "Clearfield, UT",
    period: "Jan 2023 — Sep 2025",
    current: false,
    tags: ["Test Automation", "Python", "DevOps", "Agile", "F-16"],
    bullets: [
      "Automated 150+ test cases for F-16 avionics systems, accelerating regression coverage and cutting manual testing overhead.",
      "Evaluated and validated software requirements for testability across classified avionics programs under DoD quality standards.",
      "Diagnosed and resolved critical failures in network systems and application infrastructure supporting active flight software.",
      "Managed software patch cycles and OS upgrades across classified systems under strict DoD security and compliance protocols.",
    ],
  },
  {
    title: "Student Trainee (Computer Science)",
    company: "309th Software Engineering Group (SWEG) — Hill AFB",
    location: "Clearfield, UT",
    period: "May 2022 — Sep 2022",
    current: false,
    tags: ["C++", "Linear Algebra", "OpenGL", "Agile"],
    bullets: [
      "Built 3D visualization and simulation tools in Unreal Engine 4 and C++ supporting active defense programs.",
      "Delivered sprint goals within an Agile Scrum team on classified simulation systems.",
      "Diagnosed and maintained simulation infrastructure to keep defense development pipelines unblocked.",
    ],
  },
  {
    title: "VIVID Lab Programmer",
    company: "Utah State University — VIVID Lab",
    location: "Logan, UT",
    period: "Mar 2021 — May 2022",
    current: false,
    tags: ["Unity", "C#", "VR Development", "Python", "Django REST"],
    bullets: [
      "Partnered with the US Department of Veterans Affairs to design and ship a VR equine therapy app for disabled veterans — owned the full lifecycle from research through deployment.",
      "Built an immersive VR interface for viewing and interacting with 360° equine therapy sessions.",
      "Developed command-line tooling to parse, organize, and visualize VR eye-tracking data exported from Unity.",
    ],
  },
  {
    title: "Head Developer",
    company: "AppNut",
    location: "Logan, UT",
    period: "Jun 2019 — Sep 2019",
    current: false,
    tags: ["Unity", "C#", "Mobile Development", "Game Development"],
    bullets: [
      "Led development of Crashy Road!, a hyper-casual mobile game published on the Apple App Store.",
      "Sole engineer on a startup team — owned game mechanics, analytics integration, and App Store submission end-to-end.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">01</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/60 via-[#1e2d3d] to-transparent hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="md:pl-10 relative"
              >
                <div
                  className={`absolute left-0 top-5 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block ${
                    job.current
                      ? "bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"
                      : "bg-[#1e2d3d] border border-[#8b949e]"
                  }`}
                />

                <div
                  className={`p-6 border transition-all duration-300 hover:border-[#00e5ff]/60 hover:bg-[#00e5ff]/5 ${
                    job.current
                      ? "border-[#1e2d3d] border-l-2 border-l-[#00e5ff] bg-[#0d1117]"
                      : "border-[#1e2d3d] bg-[#0d1117]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-[#e6edf3] text-base md:text-lg">
                          {job.title}
                        </h3>
                        {job.current && (
                          <span className="text-xs px-2 py-0.5 bg-[#f0a500]/10 border border-[#f0a500]/30 text-[#f0a500] rounded-sm">
                            Ending May 2026
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-[#00e5ff] mt-1">{job.company}</div>
                    </div>
                    <div className="text-xs text-[#8b949e] sm:text-right space-y-1 shrink-0">
                      <div className="flex items-center gap-1 sm:justify-end">
                        <Calendar size={11} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1 sm:justify-end">
                        <MapPin size={11} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-xs text-[#8b949e] flex gap-2">
                        <span className="text-[#00e5ff]/60 shrink-0 mt-0.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-[#161b22] border border-[#1e2d3d] text-[#8b949e] rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
