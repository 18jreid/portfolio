"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const jobs = [
  {
    title: "AI Solutions Engineer Intern",
    company: "MasterControl",
    location: "Salt Lake City, UT",
    period: "Jan 2026 — Present",
    current: true,
    tags: ["Python", "LLMs", "AWS", "GitHub Actions", "CI/CD", "DOMO"],
    bullets: [
      "Maintained and scaled the company's internal LLM gateway as it grew into the primary AI provider for the organization, managing model availability across multiple providers and environments.",
      "Built unit test suites to validate model health, endpoint reachability, fallback routing, and spend log accuracy — establishing a reliability baseline for a platform the entire company depended on.",
      "Automated deployment pipelines across dev and prod environments using GitHub Actions and AWS (CodeBuild, Lambda, S3, Secrets Manager), enabling zero-touch promotions between environments.",
      "Developed analytics dashboards in DOMO to surface model usage patterns, latency trends, and cost breakdowns across the organization.",
    ],
  },
  {
    title: "System Test Automation Engineer",
    company: "309th Software Engineering Group (SWEG) — Hill AFB",
    location: "Clearfield, UT",
    period: "Jan 2023 — Oct 2025",
    current: false,
    tags: ["Test Automation", "Python", "DISA STIGs", "Agile", "F-16"],
    bullets: [
      "Automated 150+ test cases for F-16 avionics systems in Python, cutting manual regression time by an estimated 40% and enabling faster software patch delivery cycles.",
      "Qualified OS upgrades and software patches under DoD compliance frameworks (DISA STIGs), achieving zero critical findings across all release audits.",
      "Decomposed system requirements for testability and authored test plans that became organizational standards for avionics software validation.",
      "Provided root-cause analysis and technical guidance during system-level anomalies, working directly with avionics software development teams.",
    ],
  },
  {
    title: "Computer Scientist Intern",
    company: "Hill AFB — United States Air Force",
    location: "Clearfield, UT",
    period: "Jun 2022 — Sep 2022",
    current: false,
    tags: ["C++", "Unreal Engine 4", "OpenGL", "Agile"],
    bullets: [
      "Built real-time 3D visualization tools in Unreal Engine 4 and C++ with custom OpenGL rendering for aerospace data analysis workflows.",
      "Completed all sprint deliverables on schedule within an Agile/Scrum team while iterating rapidly on feedback from subject-matter experts.",
    ],
  },
  {
    title: "Data Programmer / VR Developer",
    company: "Utah State University — VIVID Lab",
    location: "Logan, UT",
    period: "Jan 2022 — May 2022",
    current: false,
    tags: ["Unity", "C#", "VR", "Python", "Django REST"],
    bullets: [
      "Built a VR equine therapy application in Unity (C#) for disabled veterans in a DoD-partnered research program — delivered full prototype used in live therapy sessions.",
      "Engineered Python + Django REST data-pipeline tools to process and visualize eye-tracking telemetry from VR headsets, enabling clinical outcome research.",
      "Designed command-line utilities to organize and export multi-session VR datasets for downstream statistical analysis.",
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
                          <span className="text-xs px-2 py-0.5 bg-[#39d353]/10 border border-[#39d353]/30 text-[#39d353] rounded-sm">
                            Current
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
