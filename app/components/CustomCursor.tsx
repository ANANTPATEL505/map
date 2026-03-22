"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-screen blur-[2px]"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      style={{ boxShadow: "0 0 20px 5px rgba(255, 165, 0, 0.8)" }}
    />
  );
}