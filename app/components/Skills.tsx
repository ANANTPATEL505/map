"use client"

import { motion } from "framer-motion";

const skills = [
  "React Kingdom",
  "Node Fortress",
  "Blockchain Citadel",
  "Cyber Security Order",
  "Database Realm"
];

export default function Skills() {
  return (
    <section id="skills" className="section">

      <div className="max-w-5xl">
        <h2 className="text-4xl text-center mb-12">
          The Seven Kingdoms
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale:1.1 }}
              className="p-6 border border-gray-700 rounded-lg text-center"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}