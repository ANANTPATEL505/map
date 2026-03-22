'use client'

import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import ScrambleTextHover from "./comps/text";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="fixed top-0 left-0 bg-white dark:bg-transparent dark:backdrop-blur-xs  w-full px-10 z-50">
            <div className="max-w-7xl h-19 mx-auto py-3 flex items-center justify-between ">

                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                        Anant<span className="text-amber-500">.dev</span>
                    </span>
                </div>

                {/* Center - Navigation Links */}
                <ul className="hidden md:flex gap-14 justify-center items-center dark:font-normal font-medium text-[12px]">
                    <li className="an text-center w-27">
                        <Link href="#home">
                            <ScrambleTextHover text="</A> DEVELOPER" />
                        </Link>
                    </li>

                    <li className="an text-center w-19">
                        <Link href="#about">
                            <ScrambleTextHover text="</A> ABOUT" />
                        </Link>
                    </li>

                    <li className="an text-center w-21">
                        <Link href="#skills">
                            <ScrambleTextHover text="</A> SKILLS" />
                        </Link>
                    </li>

                    <li className="an text-center w-25">
                        <Link href="#projects">
                            <ScrambleTextHover text="</A> PROJECTS" />
                        </Link>
                    </li>

                    <li className="an text-center w-23">
                        <Link href="#contact">
                            <ScrambleTextHover text="</A> CONTACT" />
                        </Link>
                    </li>
                </ul>

                {/* Right - Theme toggle & menu icon */}


                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-gray-800 dark:text-gray-100"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 dark:text-gray-300">
                        <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
                        <li><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
                        <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
                        <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
