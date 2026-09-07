"use client";

import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-8 md:px-13 py-8 relative z-10">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Kayen Logo" 
            width={120} 
            height={32} 
            className="h-8 w-auto"
          />
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="bg-[#282D36] cursor-pointer border border-[#626262] text-white font-avenir px-3 py-2 rounded text-sm cursor-pointer flex items-center gap-20 hover:bg-[#2a2e35] transition-colors"
        >
          Menu <span>+</span>
        </button>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
