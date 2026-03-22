"use client";

import { motion } from "framer-motion";

const TEXT = "SCROLLING SNAKE ANIMATION • ";

export default function TextSnake() {
  const letters = TEXT.repeat(20).split("");

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 pointer-events-none z-50">
      <div className="flex flex-col items-center">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: -100 }}
            animate={{
  y: ["-10%", "110vh"],
  x: [
    0,
    60,
    -60,
    30,
    -30,
    10,
    0
  ],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  delay: i * 0.04,
  ease: "easeInOut",
}}
            className="text-green-400 font-bold text-sm md:text-base tracking-wider"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}