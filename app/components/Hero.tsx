"use client";
import { motion } from "framer-motion";
import { kingdoms, cities } from "@/app/kingdoms";
import { useState } from "react";

type Kingdom = {
  id: string
  name: string
  ruler: string
  description: string
  path: string
}

export default function Hero() {

  const [active, setActive] = useState<Kingdom | null>(null)
type City = {
  name: string
  x: number
  y: number
}

const [city, setCity] = useState<City | null>(null)
  return (
    <section className="relative h-screen w-full flex bg-white items-center justify-center overflow-hidden">
      {/* Background Image - Use the Throne Room image here */}
      <svg viewBox="0 -80 1823 1255" className="w-full  h-screen">
        {kingdoms.map((k) => (
          <path
            d={k.path}
            onMouseEnter={() => setActive(k)}
            onMouseLeave={() => setActive(null)}
            className={`
    cursor-pointer transition-all duration-300
    ${active?.id === k.id
                ? "fill-purple-500 stroke-black stroke-2 drop-shadow-[0_0_12px_purple]"
                : "fill-white stroke-black stroke-1"}
  `}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}

        {cities.map((city) => (
  <g key={city.name}>
    <circle
      cx={city.x}
      cy={city.y}
      r="6"
      className={`stroke-white stroke-2 transition-all
      ${
        active?.id === city.kingdom
          ? "fill-red-500 scale-125"
          : "fill-gray-500"
      }`}
    />

    <text
      x={city.x + 10}
      y={city.y + 5}
      className="fill-amber-500 text-[14px] text-6xl"
    >
      {city.name}
    </text>
  </g>
))}

      </svg>
      {active && (
        <div className="absolute bottom-10 left-10 bg-black/70 text-white p-6 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold">{active.name}</h2>
          <p className="text-sm text-gray-300">{active.ruler}</p>
          <p className="mt-2">{active.description}</p>
        </div>
      )}




    </section>



  );
}