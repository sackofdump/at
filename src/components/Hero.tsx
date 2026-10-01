"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { initAudio, playTick } from "@/utils/sounds";

const ROLE = "Senior Multimedia Designer";
const NAME_CHARS = "ADAM TIRAN".split("");

function Typewriter({ text, startDelay = 900 }: { text: string; startDelay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const id = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(id);
            return c;
          }
          playTick();
          return c + 1;
        });
      }, 55);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, startDelay]);

  return (
    <span>
      {text.slice(0, count)}
      <span className="inline-block w-0.5 h-[1.1em] bg-cyan-400 ml-0.5 align-middle cursor-blink" />
    </span>
  );
}

export default function Hero() {
  /* Unlock Web Audio on first user gesture */
  useEffect(() => {
    const unlock = () => initAudio();
    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });
    document.addEventListener("scroll", unlock, { once: true });
    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
      document.removeEventListener("scroll", unlock);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-5 sm:px-8">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-[480px] h-[480px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-cyan-900/8 blur-3xl" />
        </div>
      </div>

      {/* Corner brackets */}
      <div className="pointer-events-none absolute inset-6 sm:inset-10 lg:inset-14">
        <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-l-[1.5px] border-t-[1.5px] border-cyan-500/30" />
        <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-r-[1.5px] border-t-[1.5px] border-cyan-500/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-l-[1.5px] border-b-[1.5px] border-cyan-500/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-r-[1.5px] border-b-[1.5px] border-cyan-500/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
        >
          <div className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <span className="font-mono text-cyan-500/70 text-[10px] sm:text-xs tracking-[0.35em] uppercase">
            Portfolio
          </span>
          <div className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </motion.div>

        {/* Name — letter-by-letter reveal */}
        <div
          className="flex flex-wrap justify-center mb-5 sm:mb-6"
          aria-label="Adam Tiran"
        >
          {NAME_CHARS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2 + i * 0.042,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[13vw] sm:text-8xl md:text-9xl font-bold leading-[0.9] tracking-tight text-slate-50 select-none"
              style={{
                textShadow: "0 0 80px rgba(6,182,212,0.12)",
                display: "inline-block",
                width: char === " " ? "0.3em" : undefined,
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </div>

        {/* Glowing divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.7, ease: "easeOut" }}
          className="w-40 sm:w-64 mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-5 sm:mb-6"
        />

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.3 }}
          className="flex items-center justify-center h-7 sm:h-8 mb-5"
        >
          <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-[0.18em]">
            <Typewriter text={ROLE} startDelay={950} />
          </span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="font-mono text-slate-600 text-[10px] sm:text-xs tracking-[0.25em]"
        >
          Madison, Wisconsin · United States
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-slate-700 text-[9px] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
