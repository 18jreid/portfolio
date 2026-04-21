"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">04</p>
        <h2 className="text-3xl md:text-4xl font-bold text-prose mb-12">Education & Credentials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-line bg-surface hover:border-accent/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 border border-line bg-surface2 shrink-0">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-bold text-prose">B.S. Computer Science</div>
                <div className="text-sm text-faint mt-0.5">Minor in Mathematics</div>
                <div className="text-sm text-accent mt-2">Utah State University</div>
                <div className="text-xs text-faint mt-1">Logan, UT — Graduated May 2023</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "Machine Learning", "Computer Graphics", "Database Systems", "Software Engineering"].map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 bg-surface2 border border-line text-faint rounded-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-accent2/30 bg-accent2/5 hover:border-accent2/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 border border-accent2/40 bg-accent2/10 shrink-0">
                <Shield size={20} className="text-[#a78bfa]" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-bold text-prose">Security Clearance</div>
                  <span className="text-xs px-2 py-0.5 border border-accent2/40 bg-accent2/10 text-[#a78bfa] rounded-sm">
                    Eligible for Reinstatement
                  </span>
                </div>
                <div className="text-sm text-faint mt-0.5">Previously Held — US Government Issued</div>
                <div className="text-sm text-[#a78bfa] mt-2">Department of Defense</div>
                <div className="text-xs text-faint mt-1">309th SWEG — Hill AFB</div>
                <p className="mt-4 text-xs text-faint leading-relaxed">
                  Held for 3+ years supporting classified avionics software on the F-16
                  fighter jet platform. Lapsed due to employment transition — eligible
                  for reinstatement by sponsoring employer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
