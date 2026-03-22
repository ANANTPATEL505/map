"use client";
import Bubbles from "./bubble";
import Typewriter from "./type";
import { motion } from "framer-motion";
import { useState } from "react";
export const runtime = 'edge';

export default function HomeComponent() {
  const projects = [
    {
      title: "Project 1",
      src: "ex2.png",
      description: "Decentralized exchange with smart contracts",
      stack: ["Next.js", "Solidity", "Ethers"],
      link: "#",
    },
    {
      title: "Project 2",
      src: "ex2.png",
      description: "Real-time crypto price tracker",
      stack: ["React", "Node", "WebSocket"],
      link: "#",
    },
    {
      title: "Project 3",
      src: "ex2.png",
      description: "Secure authentication system",
      stack: ["Go", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Project 4",
      src: "ex2.png",
      description: "Blockchain explorer",
      stack: ["Rust", "Substrate"],
      link: "#",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen gap-5 md:px-10 w-full relative overflow-hidden">
      {/* Universal Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen"></div>
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-green-500/10 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>

      <div className="h-[76px] w-full"></div>
      {/* Hero Section with Video Background */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[40vh] lg:h-[73vh] rounded-3xl border- border-blue-700 dark:border-gray-800 shadow-2xl dark:rounded-3xl overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/LayerZero+-+Header+Animation+-+V02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay / Shadow from all sides for better text readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent hm "></div>

        {/* Centered Text */}
        <div className="absolute bottom-10 left-6 md:bottom-12 md:left-16 flex flex-col font-[Roboto,sans] text-white gap-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-48 md:w-[400px] text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            Build
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-48 md:w-[400px] h-16 sm:h-20 flex items-center text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            <Typewriter
              texts={[
                { text: "Finance", color: "#22c55e" }, // Green
                { text: "Governance", color: "#3b82f6" }, // Blue
                { text: "APPs", color: "#eab308" }, // Yellow
                { text: "Internet", color: "#a855f7" }, // Purple
                { text: "Anything", color: "#ef4444" }, // Red
              ]}
              speed={80}
              delay={1500}
            />
          </motion.div>

          {/* OmniChain */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-48 md:w-[600px] text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            Decentralized
          </motion.div>
        </div>
      </motion.section>

      {/* Next Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] lg:h-[90vh] overflow-hidden rounded-3xl mt-10 bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-xl"
      >
        <hr className="border-t border-gray-300 dark:border-gray-700 opacity-20" />

        <div className="relative flex items-center justify-center h-full">
          <Bubbles />
        </div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.a 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-600 font-extrabold font-[Roboto] bg-clip-text text-transparent drop-shadow-md"
          >
            My Tech Stack
          </motion.a>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 opacity-20" />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex-col flex justify-center gap-5 items-center h-[50vh] my-10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800 opacity-20 -z-10 h-[1px] top-1/2 transform -translate-y-1/2 w-3/4 mx-auto"></div>
        <motion.div 
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-between hover-box w-3/4 md:w-1/2 lg:w-1/4 h-16 px-6 items-center group cursor-pointer dark:border-[1px] border-black overflow-hidden border-2 dark:border-white/50 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400"
        >
          <div className="flex gap-3 items-center">
            <img
              src="/logo/github.png"
              className="w-8 h-8 filter invert transition duration-300 group-hover:invert-0 z-10 group-hover:drop-shadow-lg"
            />
            <span className="text-lg transition duration-300 filter dark:invert-0 group-hover:invert text-black dark:text-white font-bold tracking-wide">
              Explore GitHub
            </span>
          </div>

          <motion.img
            src="/logo/arrow.png"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 filter invert-0 dark:invert transition duration-300 -rotate-45 group-hover:rotate-0 group-hover:invert dark:group-hover:invert-0 z-10 "
          />
        </motion.div>
      </motion.section>

      <section className="w-full flex-col flex min-h-screen my-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pl-6 md:pl-16 mb-12 flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-16 w-full h-auto">
          {projects.map((project, i) => {
            const isHovered = hovered === i;
            // No longer relying strictly on index for complex height masonry to prevent jumping, 
            // instead using consistent card sizing with internal animated content
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative flex flex-col items-center group h-[450px]"
              >
                <motion.div
                  layout
                  className={`
                    w-full h-full border  dark:border-white/20 border-black/10 rounded-3xl
                    flex flex-col bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-lg
                    relative overflow-hidden
                    hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20
                    transition-colors duration-300
                  `}
                >
                  <div className="h-full w-full flex flex-col p-6 gap-6 z-10">
                    
                    {/* Image Container */}
                    <motion.div 
                      layout
                      className="relative w-full h-48 rounded-2xl overflow-hidden"
                    >
                      <motion.img
                        layout="position"
                        src={project.src}
                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay to dark bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>

                    {/* Content Container */}
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <motion.h3 layout="position" className="text-2xl font-bold mb-2">
                          {project.title}
                        </motion.h3>

                        <motion.p layout="position" className="text-sm md:text-base opacity-70 leading-relaxed">
                          {project.description}
                        </motion.p>
                      </div>

                      <motion.div layout="position" className="flex flex-col gap-4 mt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={project.link}
                          className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group/link"
                        >
                          View Project 
                          <motion.span 
                            className="ml-1 inline-block"
                            animate={isHovered ? { x: 5 } : { x: 0 }}
                          >
                            →
                          </motion.span>
                        </a>
                      </motion.div>
                    </div>

                  </div>
                  
                  {/* Decorative corner glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </section>

    </div>

  )
}

