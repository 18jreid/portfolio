"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Reid Family Hub",
    description:
      "A self-hosted family web portal with integrations for media browsing, photo management, AI chat, and home automation. Deployed on TrueNAS via Docker with a fully automated CI/CD pipeline through GitHub Actions.",
    tags: ["Python", "Flask", "Docker", "TrueNAS", "CI/CD", "REST APIs"],
    github: "https://github.com/18jreid/reid-family-hub",
    live: null,
    highlight: true,
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a personal software engineer portfolio built with Next.js and Tailwind CSS. Automatically built and deployed to a self-hosted TrueNAS server on every push via a GitHub Actions self-hosted runner.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions"],
    github: "https://github.com/18jreid/portfolio",
    live: "https://portfolio.reidfamilies.com",
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
    name: "Galaga",
    description:
      "A browser-based recreation of the classic Galaga arcade game, served via a Node.js backend. Features wave-based enemy patterns, player movement, and collision detection built with vanilla JavaScript.",
    tags: ["JavaScript", "Node.js", "HTML5 Canvas", "Game Development"],
    github: "https://github.com/18jreid/Galaga",
    live: null,
    highlight: false,
  },
  {
    name: "Task Tracker",
    description:
      "A full-stack task management application built with NestJS, React, and PostgreSQL. Features RESTful API design, relational data modeling, and a responsive frontend interface.",
    tags: ["TypeScript", "NestJS", "React", "PostgreSQL"],
    github: "https://github.com/18jreid/TaskTracker",
    live: null,
    highlight: false,
  },
  {
    name: "3D Graphics Engine",
    description:
      "A software-rendered 3D graphics engine built from scratch in Python. Implements custom matrix and vector math, projection pipelines, and loads .obj mesh files for real-time rendering using Pygame.",
    tags: ["Python", "Pygame", "Linear Algebra", "3D Graphics", "OBJ Rendering"],
    github: "https://github.com/18jreid/MyProjects/tree/main/3D%20Graphics%20Engine",
    live: null,
    highlight: false,
  },
  {
    name: "OpenGL Renderer",
    description:
      "A C++ 3D rendering engine using OpenGL. Implements a full graphics pipeline including camera systems, mesh loading, texture mapping, VAO/VBO/EBO buffer management, and custom GLSL shaders.",
    tags: ["C++", "OpenGL", "GLSL", "3D Graphics", "Linear Algebra"],
    github: "https://github.com/18jreid/MyProjects/tree/main/OpenGL",
    live: null,
    highlight: false,
  },
  {
    name: "AlgoTrader",
    description:
      "A Django web application for algorithmic trading with user authentication, a personal dashboard, and a RESTful backend. Built with Python and Django's ORM for data modeling.",
    tags: ["Python", "Django", "SQLite", "REST", "Authentication"],
    github: "https://github.com/18jreid/MyProjects/tree/main/AlgoTrader",
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
