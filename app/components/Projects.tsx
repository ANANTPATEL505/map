"use client"

import { motion } from "framer-motion";

const projects = [
  {
    name:"Restaurant Management System",
    tech:"Next.js, Prisma, PostgreSQL"
  },
  {
    name:"Crypto Exchange Dashboard",
    tech:"React, Node.js"
  },
  {
    name:"Blockchain Smart Contract App",
    tech:"Solidity, Web3"
  }
]

export default function Projects(){
  return(
    <section id="projects" className="section">

      <div className="max-w-5xl">

        <h2 className="text-4xl text-center mb-12">
          Battle Archives
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale:1.08 }}
              className="border border-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.tech}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}