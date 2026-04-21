"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map((l) => l.href.replace("#", ""));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-prose font-bold text-lg tracking-tight hover:text-accent transition-colors">
          Justin Reid
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 relative ${
                    isActive ? "text-accent" : "text-faint hover:text-prose"
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60" />}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 border border-line text-faint hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Resume
            </a>
          </li>
          <li><ThemeToggle /></li>
        </ul>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-faint hover:text-prose p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-line px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm transition-colors ${isActive ? "text-accent" : "text-faint hover:text-prose"}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
