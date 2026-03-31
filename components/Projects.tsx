"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Psyko Skrubs",
    description:
      "A production CS2 gaming group site tracking player stats, K/D leaderboards, and Allstar.gg highlight clips. Features Steam OpenID authentication, a game-request voting system, and a fully automated Docker deployment pipeline to a self-hosted TrueNAS server via GitHub Actions + Cloudflare Tunnel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Steam OAuth", "Docker", "CI/CD"],
    github: "https://github.com/18jreid/psyko-skrubs-web",
    live: "https://cs.psykostats.com",
    highlight: true,
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a personal software engineer portfolio built with Next.js 16 and Tailwind CSS v4. Automatically built and deployed to a self-hosted TrueNAS server on every push via a GitHub Actions self-hosted runner.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions"],
    github: "https://github.com/18jreid/portfolio",
    live: "https://portfolio.reidfamilies.com",
    highlight: false,
  },
  {
    name: "Math Trainer",
    description:
      "A quick mental math trainer designed for rapid inventory calculations at work. A focused TypeScript utility app for building calculation speed and accuracy.",
    tags: ["TypeScript", "Next.js"],
    github: "https://github.com/18jreid/math-trainer",
    live: null,
    highlight: false,
  },
  {
    name: "Task Tracker",
    description:
      "A full-stack task management application built with NestJS, React, and PostgreSQL. Features JWT authentication, role-based access control, RESTful API design, and relational data modeling.",
    tags: ["TypeScript", "NestJS", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/18jreid/TaskTracker",
    live: null,
    highlight: false,
  },
  {
    name: "VR Maze Game",
    description:
      "A virtual reality maze game developed in Unity as part of a graduate-level VR course. Players navigate a procedurally designed maze in a fully immersive first-person VR environment.",
    tags: ["Unity", "C#", "VR", "Game Development"],
    github: "https://github.com/18jreid/CS5950",
    live: null,
    highlight: false,
  },
  {
    name: "Putt Putt Scorekeeper",
    description:
      "A group mini-golf scoring and management web app built with Django for a software engineering course. Supports multiple user roles (Player, Sponsor, Manager, DrinkMeister), score entry, account balances, and an admin panel.",
    tags: ["Python", "Django", "HTML/CSS", "SQLite", "Role-Based Auth"],
    github: "https://github.com/18jreid/CS3450_PuttPutt_Group6",
    live: null,
    highlight: false,
  },
  {
    name: "Galaga",
    description:
      "A browser-based recreation of the classic Galaga arcade game served via a Node.js backend. Features wave-based enemy patterns, player movement, and collision detection built with vanilla JavaScript.",
    tags: ["JavaScript", "Node.js", "HTML5 Canvas", "Game Development"],
    github: "https://github.com/18jreid/Galaga",
    live: null,
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">03</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col p-6 border transition-all duration-300 hover:border-[#00e5ff]/30 ${
                project.highlight
                  ? "border-[#00e5ff]/30 bg-[#00e5ff]/5"
                  : "border-[#1e2d3d] bg-[#0d1117]"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-semibold text-[#e6edf3] text-base leading-snug">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-[#00e5ff] transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b949e] hover:text-[#00e5ff] transition-colors"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-[#161b22] border border-[#1e2d3d] text-[#8b949e] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
