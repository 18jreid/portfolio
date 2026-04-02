"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest uppercase mb-2">04</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-12">Education & Credentials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Degree */}
          <div className="p-6 border border-[#1e2d3d] bg-[#0d1117] hover:border-[#00e5ff]/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 border border-[#1e2d3d] bg-[#161b22] shrink-0">
                <GraduationCap size={20} className="text-[#00e5ff]" />
              </div>
              <div>
                <div className="font-bold text-[#e6edf3]">B.S. Computer Science</div>
                <div className="text-sm text-[#8b949e] mt-0.5">Minor in Mathematics</div>
                <div className="text-sm text-[#00e5ff] mt-2">Utah State University</div>
                <div className="text-xs text-[#8b949e] mt-1">Logan, UT — Graduated May 2023</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "Machine Learning", "Computer Graphics", "Database Systems", "Software Engineering"].map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-0.5 bg-[#161b22] border border-[#1e2d3d] text-[#8b949e] rounded-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Clearance credential */}
          <div className="p-6 border border-[#7c3aed]/30 bg-[#7c3aed]/5 hover:border-[#7c3aed]/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 border border-[#7c3aed]/40 bg-[#7c3aed]/10 shrink-0">
                <Shield size={20} className="text-[#a78bfa]" />
              </div>
              <div>
                <div className="font-bold text-[#e6edf3]">Active Security Clearance</div>
                <div className="text-sm text-[#8b949e] mt-0.5">US Government Issued</div>
                <div className="text-sm text-[#a78bfa] mt-2">Department of Defense</div>
                <div className="text-xs text-[#8b949e] mt-1">Issued via 309th SWEG — Hill AFB</div>
                <p className="mt-4 text-xs text-[#8b949e] leading-relaxed">
                  Maintained throughout 3+ years supporting classified avionics software
                  on the F-16 fighter jet platform. Available for roles requiring clearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
