"use client";

import { useEffect, useRef } from "react";

function getSection(el: Element): string {
  const section = el.closest("section");
  if (!section) return "Unknown";
  const id = section.id;
  if (id) return id.charAt(0).toUpperCase() + id.slice(1);
  const heading = section.querySelector("h2, h1");
  return heading?.textContent?.trim() || "Unknown";
}

export default function ClickTracker() {
  const sessionStart = useRef(Date.now());

  // Fire once on page load
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventType: "page_view",
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        screenRes: `${screen.width}x${screen.height}`,
        language: navigator.language,
        referrer: document.referrer,
        pageTitle: document.title,
        sessionStart: sessionStart.current,
      }),
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button");
      if (!target) return;

      const linkHref = (target as HTMLAnchorElement).href || "";
      const linkText = target.textContent?.trim().slice(0, 100) || "";

      // Skip purely internal scroll anchors with no real destination
      if (linkHref.startsWith("javascript:")) return;

      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          linkText,
          linkHref,
          section: getSection(target),
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          screenRes: `${screen.width}x${screen.height}`,
          language: navigator.language,
          referrer: document.referrer,
          pageTitle: document.title,
          sessionStart: sessionStart.current,
        }),
      }).catch(() => {});
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
