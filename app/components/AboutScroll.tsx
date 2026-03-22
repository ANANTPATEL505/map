"use client";
import { motion } from "framer-motion";

export default function AboutScroll() {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center bg-[#050505]">
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative w-11/12 md:w-2/3 lg:w-1/2 p-10 md:p-20 origin-top shadow-2xl"
        // Use your scroll image as the background
        style={{ 
          backgroundImage: "url('/scroll-bg.jpg')", 
          backgroundSize: '100% 100%',
          filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.8))'
        }}
      >
        <div className="text-amber-950 text-center space-y-6 font-semibold">
          <h2 className="text-4xl border-b-2 border-amber-900/30 pb-4 inline-block">The Origin Story</h2>
          <p className="text-lg leading-relaxed">
            Born in the land of Gujarat, Anant Patel began mastering the ancient arts of code. 
            Forging applications with the spells of React, the unbreakable chains of Web3, 
            and the defensive runes of Cybersecurity.
          </p>
        </div>
      </motion.div>
    </section>
  );
}