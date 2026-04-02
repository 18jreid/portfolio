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
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a personal software engineer portfolio built with Next.js and Tailwind CSS v4. Automatically built and deployed to a self-hosted TrueNAS server on every push via a GitHub Actions self-hosted runner and Cloudflare Tunnel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions"],
    github: "https://github.com/18jreid/portfolio",
    live: "https://portfolio.reidfamilies.com",
  },
  {
    name: "3D Graphics Engine",
    description:
      "A software-rendered 3D graphics engine built from scratch in Python. Implements custom Vec3d, Mat4x4, and Triangle math structures, a full projection pipeline, and loads .obj mesh files for real-time rendering — no graphics library shortcuts.",
    tags: ["Python", "Pygame", "Linear Algebra", "3D Graphics", "OBJ Rendering"],
    github: "https://github.com/18jreid/MyProjects/tree/main/3D%20Graphics%20Engine",
    live: null,
  },
  {
    name: "OpenGL Renderer",
    description:
      "A C++ 3D rendering engine using OpenGL. Implements a full graphics pipeline including camera systems, mesh loading, texture mapping, VAO/VBO/EBO buffer management, and custom GLSL vertex and fragment shaders.",
    tags: ["C++", "OpenGL", "GLSL", "3D Graphics", "Linear Algebra"],
    github: "https://github.com/18jreid/MyProjects/tree/main/OpenGL",
    live: null,
  },
  {
    name: "AlgoTrader",
    description:
      "A Django web application for algorithmic trading with user authentication, a personal dashboard, and a RESTful backend. Built with Python and Django's ORM for data modeling and SQLite persistence.",
    tags: ["Python", "Django", "SQLite", "REST", "Authentication"],
    github: "https://github.com/18jreid/MyProjects/tree/main/AlgoTrader",
    live: null,
  },
  {
    name: "Task Tracker",
    description:
      "A full-stack task management application built with NestJS, React, and PostgreSQL. Features JWT authentication, role-based access control, RESTful API design, and relational data modeling.",
    tags: ["TypeScript", "NestJS", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/18jreid/TaskTracker",
    live: null,
  },
  {
    name: "VR Maze Game",
    description:
      "A virtual reality maze game developed in Unity as part of a graduate-level VR course. Players navigate a procedurally designed maze in a fully immersive first-person VR environment.",
    tags: ["Unity", "C#", "VR", "Game Development"],
    github: "https://github.com/18jreid/CS5950",
    live: null,
  },
  {
    name: "Galaga",
    description:
      "A browser-based recreation of the classic Galaga arcade game served via a Node.js backend. Features wave-based enemy patterns, player movement, and collision detection built with vanilla JavaScript.",
    tags: ["JavaScript", "Node.js", "HTML5 Canvas", "Game Development"],
    github: "https://github.com/18jreid/Galaga",
    live: null,
  },
];

const liveProducts = projects.filter((p) => p.live !== null);
const otherProjects = projects.filter((p) => p.live === null);

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">02</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-3">Projects</h2>
        <p className="text-sm text-[#8b949e] mb-12 max-w-lg">
          Two live products in production, plus six more across graphics, AI, games, and full-stack.
        </p>

        {/* Live Products — featured tier */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-[#39d353] tracking-widest uppercase">Live Products</span>
            <div className="flex-1 h-px bg-[#1e2d3d]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {liveProducts.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col p-6 border border-[#1e2d3d] border-l-2 border-l-[#39d353] bg-[#0d1117] transition-all duration-300 hover:border-[#00e5ff]/60 hover:bg-[#00e5ff]/5"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#e6edf3] text-base">{project.name}</h3>
                      <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-[#39d353]/10 border border-[#39d353]/30 text-[#39d353] rounded-sm">
                        <span className="w-1 h-1 rounded-full bg-[#39d353]" />
                        Live
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.live!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-[#00e5ff] transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
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

                <p className="text-xs text-[#8b949e] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-[#161b22] border border-[#1e2d3d] text-[#8b949e] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-[#00e5ff] hover:text-[#00c8e0] transition-colors self-start"
                >
                  <ExternalLink size={12} />
                  View Live Site
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Remaining Projects */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-[#8b949e] tracking-widest uppercase">More Projects</span>
            <div className="flex-1 h-px bg-[#1e2d3d]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col p-5 border border-[#1e2d3d] bg-[#0d1117] transition-all duration-300 hover:border-[#00e5ff]/60 hover:bg-[#00e5ff]/5"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-[#e6edf3] text-sm leading-snug">{project.name}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8b949e] hover:text-[#00e5ff] transition-colors shrink-0"
                  >
                    <Github size={14} />
                  </a>
                </div>

                <p className="text-xs text-[#8b949e] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
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
        </div>
      </motion.div>
    </section>
  );
}
