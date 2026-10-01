"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-20 sm:py-28 px-5 sm:px-8 max-w-4xl mx-auto"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/12 to-transparent mb-16 sm:mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-8 bg-violet-500/20" />
          <span className="font-mono text-violet-500/40 text-[10px] tracking-[0.3em] uppercase">
            Contact
          </span>
          <div className="h-px w-8 bg-violet-500/20" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-3">
          Let&apos;s Connect
        </h2>
        <p className="font-mono text-slate-500 text-[11px] sm:text-xs tracking-wide mb-10">
          Open to freelance &amp; full-time opportunities
        </p>

        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/adam-tiran-4b58931a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl border font-mono text-xs sm:text-sm text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View LinkedIn Profile
          </a>
        </div>

        <div className="mt-16 sm:mt-20 pt-6 border-t border-slate-800/50">
          <p className="font-mono text-slate-700 text-[10px] tracking-[0.2em]">
            © 2026 · Adam Tiran · Madison, Wisconsin
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
