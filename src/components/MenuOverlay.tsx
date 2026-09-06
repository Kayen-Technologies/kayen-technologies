"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "#" },
    { label: "WORKS", href: "/works" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT US", href: "/contact" }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#101317] text-white h-screen overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff33 0.3px, transparent 0.5px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="relative h-full w-full px-8 md:px-13 flex flex-col">
        {/* Grid Lines */}
        <div className="absolute top-0 bottom-0 left-8 right-8 md:left-13 md:right-13 border-l border-r border-[#FFFFFF33] pointer-events-none z-0">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <div className="border-r border-[#FFFFFF33]"></div>
            <div className="border-[#FFFFFF33] md:border-r"></div>
            <div className="hidden md:block border-r border-[#FFFFFF33]"></div>
            <div className="hidden md:block border-[#FFFFFF33] lg:border-r"></div>
            <div className="hidden lg:block border-r border-[#FFFFFF33]"></div>
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Header / Close button area */}
        <div className="relative z-20 w-full pt-5 flex justify-end">
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full border border-[#FFFFFF66] flex items-center justify-center text-[#F4F5F2] hover:bg-white/10 transition-colors mt-2"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 flex-1 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pt-16 md:pt-24 lg:pt-15 pb-10">
          {/* Col 1 */}
          <div className="hidden lg:block"></div>
          
          {/* Col 2 */}
          <div className="hidden lg:block pl-3">
            <span className="font-ubuntu-mono text-[20px] tracking-[0.2em] text-[#F4F5F2] uppercase">MENU</span>
          </div>
          
          {/* Col 3-6 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-6 lg:gap-4 pl-0 lg:pl-20">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={onClose}
                className={`font-ubuntu-mono text-5xl md:text-7xl lg:text-[110px] leading-[1.1] font-bold uppercase transition-colors hover:text-white ${pathname === item.href ? 'text-white' : 'text-[#FFFFFF4D]'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
