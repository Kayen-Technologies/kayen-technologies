"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyOverlay from "./CaseStudyOverlay";

const WORKS = [
  {
    number: "01/04",
    type: "Website",
    category: "Marketing Agency",
    year: "2026",
    title: "Thryveco Agency",
    image: "/images/landing/works/thryve.png"
  },
  {
    number: "02/04",
    type: "Website",
    category: "Cleaning Service",
    year: "2026",
    title: "Neat Nest",
    image: "/images/landing/works/thryve.png"
  },
  {
    number: "03/04",
    type: "Website",
    category: "Recreational Village",
    year: "2026",
    title: "Visit Danyame",
    image: "/images/landing/works/thryve.png"
  },
  {
    number: "04/04",
    type: "Website",
    category: "Ride Company",
    year: "2026",
    title: "Ride Out",
    image: "/images/landing/works/thryve.png"
  },
];

export default function WorksScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom cursor state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 when top is at top of screen, 1 when bottom is at bottom of screen)
      if (top > 0) {
        setActiveIndex(0);
        return;
      }
      
      const scrollableDistance = height - windowHeight;
      if (scrollableDistance <= 0) return;

      const scrollProgress = -top / scrollableDistance;
      
      let newIndex = Math.floor(scrollProgress * WORKS.length);
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= WORKS.length) newIndex = WORKS.length - 1;

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move listener for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  const activeWork = WORKS[activeIndex];
  const [selectedWork, setSelectedWork] = useState<any>(null);

  return (
    <>
      <section ref={containerRef} className="bg-[#F4F5F2] h-[400vh] relative cursor-none">
        <div 
          className="sticky top-0 h-screen w-full flex items-center px-8 md:px-13 overflow-hidden cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Custom Cursor */}
          <AnimatePresence>
            {isHovering && !selectedWork && (
              <motion.div 
                className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center bg-[#2D6AFF] text-white font-avenir text-sm rounded-full px-5 py-2.5 whitespace-nowrap shadow-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: mousePos.x + 20, 
                  y: mousePos.y + 20 
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                View Case Study
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid Lines */}
          <div className="absolute inset-0 px-8 md:px-13 pointer-events-none z-0">
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-r border-[#36363666]">
              <div className="border-[#36363666] md:border-r"></div>
              <div className="border-[#36363666] md:border-r"></div>
              <div className="hidden md:block border-r border-[#36363666]"></div>
              <div className="hidden md:block border-[#36363666] lg:border-r"></div>
              <div className="hidden lg:block border-r border-[#36363666]"></div>
              <div className="hidden lg:block"></div>
            </div>
          </div>

          {/* Content Layout */}
          <div 
            className="w-full flex flex-col md:flex-row h-full items-center justify-between z-10 gap-12 md:gap-8 pt-20 pb-12 md:py-0 cursor-none"
            onClick={() => setSelectedWork(activeWork)}
          >
            
            {/* Left: Text Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex gap-6 md:gap-16 items-center"
                >
                  {/* Subtext */}
                  <div className="hidden md:flex flex-col gap-1 font-avenir text-[15px] text-[#959AA3] w-32 shrink-0">
                    <span>{activeWork.type}</span>
                    <span>{activeWork.category}</span>
                    <span>{activeWork.year}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="font-ubuntu-mono text-5xl md:text-6xl lg:text-[80px] leading-[1.1] md:leading-none text-[#222937] font-bold tracking-tight">
                    {activeWork.title}
                  </h2>
                </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end h-[50vh] md:h-full md:py-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-[600px] h-full max-h-[700px] overflow-hidden bg-gray-200"
              >
                <Image
                  src={activeWork.image}
                  alt={activeWork.title}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>

      <AnimatePresence>
        {selectedWork && (
          <CaseStudyOverlay 
            work={selectedWork} 
            onClose={() => setSelectedWork(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
