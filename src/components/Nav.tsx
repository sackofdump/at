"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["experience", "skills", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050a14]/85 backdrop-blur-xl border-b border-cyan-500/10" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-sm tracking-[0.2em] text-cyan-400 select-none">
          AT<span className="text-cyan-500/35">_</span>
        </span>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="sm:hidden relative z-10 flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span
            className={`block h-px bg-cyan-400 transition-all duration-300 origin-center ${
              open ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
            }`}
          />
          <span
            className={`block h-px bg-cyan-400 transition-all duration-200 ${
              open ? "opacity-0 w-0" : "opacity-100 w-4"
            }`}
          />
          <span
            className={`block h-px bg-cyan-400 transition-all duration-300 origin-center ${
              open ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden overflow-hidden bg-[#050a14]/95 backdrop-blur-xl border-b border-cyan-500/10"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 py-2 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
