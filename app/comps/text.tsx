import React, { useState, useRef } from "react";

interface Type {
  text: string;
  speed?: number;
}

const ScrambleTextHover = ({ text, speed = 1000 }: Type) => {
  const letters = "ABCDEFG@HIJKLMNOPQ#RSTUVWXYZ01/23456789";

  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);
  const iteration = useRef(0);

  const handleHover = () => {
    if (frameRef.current) return;

    iteration.current = 0;

    const animate = () => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration.current) {
              return letter;
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration.current += 0.15;

      if (iteration.current < text.length) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    animate();
  };

  return (
    <span
      onMouseEnter={handleHover}
      className="cursor-pointer transition-colors"
    >
      {display}
    </span>
  );
};

export default ScrambleTextHover;