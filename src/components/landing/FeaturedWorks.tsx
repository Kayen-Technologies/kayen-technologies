"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PixelTransition from "../PixelTransition";

const WORKS = [
  {
    type: "Website",
    category: "Marketing Agency",
    year: "2026",
    title: "Thryveco Agency",
    image: "/images/landing/works/thryve.png"
  },
  {
    type: "Website",
    category: "Cleaning Service",
    year: "2026",
    title: "Neat Nest",
    image: "/images/landing/works/neat nest.png"
  },
  {
    type: "Website",
    category: "Recreational Village",
    year: "2026",
    title: "Visit Danyame",
    image: "/images/landing/works/danyame.png"
  },
  {
    type: "Website",
    category: "Ride Company",
    year: "2026",
    title: "Ride Out",
    image: "/images/landing/works/ride out.png"
  },
];

export default function FeaturedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

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

      setActiveIndex((current) => {
        if (current !== newIndex) {
          setPrevIndex(current);
        }
        return newIndex;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F4F5F2] h-[200vh] md:h-[400vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col px-8 md:px-13 py-16 md:py-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-24 shrink-0">
          <h2 className="font-ubuntu-mono text-[#12161C] text-3xl md:text-5xl font-bold uppercase tracking-wide">
            FEATURED WORKS
          </h2>
          <p className="font-avenir text-[#12161C] text-sm md:text-base max-w-sm mt-4 md:mt-0 leading-relaxed">
            Software and digital products we've built to solve real
            problems, improve operations, and create better experiences.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row flex-1 gap-12 md:gap-8 min-h-0 pb-8 md:pb-0">
          
          {/* Left: List of Works */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-12 md:gap-14">
            {WORKS.map((work, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={idx} className="flex gap-6 md:gap-16 items-start">
                  <div className="hidden md:flex flex-col gap-1 font-avenir text-[15px] text-[#959AA3] w-32 shrink-0">
                    <span>{work.type}</span>
                    <span>{work.category}</span>
                    <span>{work.year}</span>
                  </div>
                  <h3 
                    className={`font-ubuntu-mono text-5xl md:text-[42px] leading-[1.1] md:leading-none transition-colors duration-300 ${
                      isActive ? "text-[#222937]" : "text-[#22293766]"
                    }`}
                  >
                    {work.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center md:justify-end h-full mt-10 md:mt-0">
            <div className="relative w-full max-w-lg h-[40vh] md:h-full max-h-[600px]">
              <PixelTransition
                key={activeIndex}
                firstContent={
                  <Image
                    src={WORKS[prevIndex].image}
                    alt={WORKS[prevIndex].title}
                    fill
                    className="object-cover object-center"
                  />
                }
                secondContent={
                  <Image
                    src={WORKS[activeIndex].image}
                    alt={WORKS[activeIndex].title}
                    fill
                    className="object-cover object-center"
                  />
                }
                gridSize={12}
                pixelColor="#2A60E3"
                animationStepDuration={0.4}
                animateOnMount={activeIndex !== prevIndex}
                className="w-full h-full bg-gray-200"
                aspectRatio="auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
