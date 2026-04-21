"use client";

import { useEffect, useRef } from "react";

function beacon(data: object) {
  navigator.sendBeacon("/api/perf", new Blob([JSON.stringify(data)], { type: "application/json" }));
}

function getSection(el: Element): string {
  const section = el.closest("section");
  if (!section) return "Unknown";
  const id = section.id;
  if (id) return id.charAt(0).toUpperCase() + id.slice(1);
  return section.querySelector("h2, h1")?.textContent?.trim() || "Unknown";
}

export default function ClickTracker() {
  const sessionStart = useRef(Date.now());

  // Page view on mount
  useEffect(() => {
    beacon({
      eventType: "page_view",
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      screenRes: `${screen.width}x${screen.height}`,
      language: navigator.language,
      referrer: document.referrer,
      pageTitle: document.title,
      sessionStart: sessionStart.current,
    });
  }, []);

  // Scroll depth — report max depth reached when user leaves
  useEffect(() => {
    let maxDepth = 0;

    const onScroll = () => {
      const pct = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      if (pct > maxDepth) maxDepth = Math.min(pct, 100);
    };

    const onLeave = () => {
      if (maxDepth >= 25) {
        beacon({
          eventType: "scroll_depth",
          depth: maxDepth,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          screenRes: `${screen.width}x${screen.height}`,
          language: navigator.language,
          referrer: document.referrer,
          pageTitle: document.title,
          sessionStart: sessionStart.current,
        });
      }
    };

    const onVisibility = () => { if (document.hidden) onLeave(); };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Click tracking
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button");
      if (!target) return;
      const linkHref = (target as HTMLAnchorElement).href || "";
      if (linkHref.startsWith("javascript:")) return;
      const linkText = target.textContent?.trim().slice(0, 100) || "";
      beacon({
        linkText,
        linkHref,
        section: getSection(target),
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        screenRes: `${screen.width}x${screen.height}`,
        language: navigator.language,
        referrer: document.referrer,
        pageTitle: document.title,
        sessionStart: sessionStart.current,
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
