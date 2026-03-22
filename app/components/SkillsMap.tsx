"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const kingdoms = [
  { id: 1, name: "React Kingdom", skill: "Frontend Mastery", top: "20%", left: "30%" },
  { id: 2, name: "Solidity Keep", skill: "Blockchain / Web3", top: "50%", left: "60%" },
  { id: 3, name: "Security Citadel", skill: "Cybersecurity", top: "70%", left: "20%" },
  { id: 4, name: "Node Fortress", skill: "Backend Architecture", top: "35%", left: "75%" },
];

export default function SkillsMap() {
  const [activeKingdom, setActiveKingdom] = useState<string | null>(null);

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] flex flex-col items-center py-10">
      <h2 className="text-4xl text-orange-400 mb-10 z-10 drop-shadow-lg">The Seven Kingdoms</h2>
      
      <div 
        className="relative w-full max-w-5xl aspect-video border-4 border-amber-900 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(180,83,9,0.2)]"
        // Use your map image here
        style={{ backgroundImage: "url('/fantasy-map.jpg')", backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-700" />
        
        {kingdoms.map((k) => (
          <div 
            key={k.id}
            className="absolute group cursor-pointer"
            style={{ top: k.top, left: k.left }}
            onMouseEnter={() => setActiveKingdom(k.name)}
            onMouseLeave={() => setActiveKingdom(null)}
          >
            {/* The Map Marker / Castle Point */}
            <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-yellow-400 animate-pulse shadow-[0_0_15px_red]" />
            
            {/* Hover Info */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: activeKingdom === k.name ? 1 : 0, y: activeKingdom === k.name ? 0 : 10 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/80 border border-amber-700 text-amber-200 px-4 py-2 rounded whitespace-nowrap pointer-events-none"
            >
              <h3 className="font-bold">{k.name}</h3>
              <p className="text-sm text-gray-400">{k.skill}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}