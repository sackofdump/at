"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { playHover } from "@/utils/sounds";

const categories = [
  { key: "design" as const, label: "Design", color: "#06b6d4" },
  { key: "production" as const, label: "Production", color: "#8b5cf6" },
  { key: "leadership" as const, label: "Leadership", color: "#f59e0b" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
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
          <span className="font-mono text-violet-500/35 text-[10px] tracking-[0.3em]">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Skills</h2>
        <p className="font-mono text-slate-500 text-[11px] sm:text-xs mt-2 tracking-wide">
          Core competencies across design, production & leadership
        </p>
      </motion.div>

      <div className="space-y-10 sm:space-y-14">
        {categories.map(({ key, label, color }) => {
          const catSkills = skills.filter((s) => s.category === key);
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Category label + line */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.3em]"
                  style={{ color }}
                >
                  {label}
                </span>
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(to right, ${color}28, transparent)`,
                  }}
                />
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {catSkills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="cursor-default text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-mono transition-all duration-200"
                    style={{
                      color: `${color}cc`,
                      backgroundColor: `${color}0a`,
                      border: `1px solid ${color}1e`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = `0 0 18px ${color}22`;
                      el.style.borderColor = `${color}44`;
                      playHover();
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "none";
                      el.style.borderColor = `${color}1e`;
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
