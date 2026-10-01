"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { playSweep } from "@/utils/sounds";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 sm:mb-20"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-cyan-500/35 text-[10px] tracking-[0.3em]">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Experience</h2>
        <p className="font-mono text-slate-500 text-[11px] sm:text-xs mt-2 tracking-wide">
          15+ years of creative & production expertise
        </p>
      </motion.div>

      {/* CSS grid timeline: [dot-col] [card-col] */}
      <div className="grid grid-cols-[18px_1fr] sm:grid-cols-[22px_1fr] gap-x-4 sm:gap-x-8">
        {experiences.map((exp, i) => (
          <Fragment key={exp.id}>
            {/* Dot + connecting line */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                onViewportEnter={() => playSweep()}
                className="w-3 h-3 rounded-full border-2 shrink-0 bg-[#050a14] z-10 mt-[5px]"
                style={{
                  borderColor: exp.accentColor,
                  boxShadow: `0 0 10px ${exp.accentColor}55`,
                }}
              />
              {i < experiences.length - 1 && (
                <div
                  className="w-px flex-1 mt-2 min-h-6"
                  style={{
                    background: `linear-gradient(to bottom, ${exp.accentColor}35, ${exp.accentColor}05)`,
                  }}
                />
              )}
            </div>

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
              className="pb-7 sm:pb-10"
            >
              <div
                className="rounded-xl p-4 sm:p-6 border"
                style={{
                  backgroundColor: `${exp.accentColor}05`,
                  borderColor: `${exp.accentColor}1e`,
                }}
              >
                {/* Company row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-50 leading-snug">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-slate-500 text-[10px] sm:text-xs mt-0.5">
                      {exp.location}
                    </p>
                  </div>
                  <span
                    className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md border shrink-0"
                    style={{
                      color: exp.accentColor,
                      borderColor: `${exp.accentColor}25`,
                      backgroundColor: `${exp.accentColor}0a`,
                    }}
                  >
                    {exp.totalDuration}
                  </span>
                </div>

                {/* Roles */}
                <div className="space-y-4">
                  {exp.roles.map((role, ri) => (
                    <div
                      key={ri}
                      className={ri > 0 ? "pt-4 border-t border-slate-800/70" : ""}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-1 mb-2">
                        <span className="text-slate-200 text-xs sm:text-sm font-medium">
                          {role.title}
                        </span>
                        <span className="font-mono text-slate-500 text-[10px] sm:text-xs shrink-0">
                          {role.startDate} – {role.endDate}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] sm:text-xs px-2 py-0.5 rounded font-mono"
                            style={{
                              color: `${exp.accentColor}b0`,
                              backgroundColor: `${exp.accentColor}0d`,
                              border: `1px solid ${exp.accentColor}18`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
