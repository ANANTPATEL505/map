"use client";
import { useState, useEffect, useRef } from "react";

type TextItem = {
  text: string;
  color: string;
};

type TypewriterProps = {
  texts: TextItem[];
  speed: number;
  delay: number;
};
export default function Typewriter({ texts, speed, delay}:TypewriterProps) {
  const [displayText, setDisplayText]   = useState("");
  const [colorIndex, setColorIndex]     = useState(0);

  // All mutable loop state lives in refs — never triggers re-renders
  const charRef      = useRef(0);
  const textIdxRef   = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const entry       = texts[textIdxRef.current];
      const fullText    = entry.text;
      const deleting    = isDeletingRef.current;

      if (!deleting) {
        charRef.current++;
        setDisplayText(fullText.slice(0, charRef.current));

        if (charRef.current === fullText.length) {
          // Finished typing → pause, then start deleting
          timerRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            timerRef.current = setTimeout(tick, speed / 2);
          }, delay);
          return;
        }
      } else {
        charRef.current--;
        setDisplayText(fullText.slice(0, charRef.current));

        if (charRef.current === 0) {
          // Finished deleting → advance to next word
          isDeletingRef.current = false;
          textIdxRef.current = (textIdxRef.current + 1) % texts.length;
          setColorIndex(textIdxRef.current);
          timerRef.current = setTimeout(tick, speed);
          return;
        }
      }

      timerRef.current = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    timerRef.current = setTimeout(tick, speed);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []); // ← runs once, loop is self-sustaining via chained setTimeout

  return (
    <h1
      className="typewriter typing text-4xl sm:text-5xl md:text-7xl font-bold"
      style={{ color: texts[colorIndex].color, "--caret": texts[colorIndex].color } as React.CSSProperties}
    >
      {displayText}
    </h1>
  );
}