"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold">⚔ Code Kingdom</h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Kingdoms</a>
          <a href="#projects">Battles</a>
          <a href="#contact">Raven</a>
        </div>
      </div>
    </nav>
  );
}