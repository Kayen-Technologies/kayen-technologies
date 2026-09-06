"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
export default function DiffOrgSection() {
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls = [controls0, controls1, controls2];

  useEffect(() => {
    let isMounted = true;
    
    const runSequence = async () => {
      // Small initial wait so it doesn't run immediately on load before user scrolls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      while (isMounted) {
        // Wait 5 seconds while they are all there
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!isMounted) break;

        // 1. Leave sequence (from right to left: index 2, then 1, then 0)
        for (let i = 2; i >= 0; i--) {
          if (!isMounted) break;
          // Vibrate
          await controls[i].start({
            x: [0, -8, 8, -8, 8, 0],
            transition: { duration: 0.3 }
          });
          
          if (!isMounted) break;
          // Shoot right
          controls[i].start({
            x: typeof window !== 'undefined' ? window.innerWidth / 2 + 300 : 1000, 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeIn" }
          });
          
          if (i > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }

        if (!isMounted) break;
        // Wait for the last arrow to finish flying
        await new Promise(resolve => setTimeout(resolve, 500));
        if (!isMounted) break;

        // Reset positions to left
        for (let i = 0; i <= 2; i++) {
          controls[i].set({ 
            x: typeof window !== 'undefined' ? -(window.innerWidth / 2 + 300) : -1000, 
            opacity: 0 
          });
        }

        // Small pause before they start coming back
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!isMounted) break;

        // 2. Enter sequence (from left to right: index 0, then 1, then 2)
        for (let i = 0; i <= 2; i++) {
          if (!isMounted) break;
          controls[i].start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut", type: "spring", damping: 15 }
          });
          
          if (i < 2) {
            await new Promise(resolve => setTimeout(resolve, 150));
          }
        }
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left Side */}
      <div className="bg-[#F4F5F2] lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center gap-16 md:gap-24 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] leading-[1.2] font-bold text-[#101317] uppercase tracking-wide">
          DIFFERENT<br />
          ORGANISATIONS. THE<br />
          SAME DESIRE TO MAKE<br />
          PROGRESS.
        </h2>
        <p className="font-avenir text-sm md:text-[15px] text-[#101317] leading-relaxed max-w-lg">
          We work with founders bringing new ideas to life, businesses improving how they serve customers, and organisations using technology to create stronger experiences and better systems.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-[#2A60E3] lg:w-1/2 p-4 md:p-16 lg:p-24 flex items-center justify-center overflow-hidden min-h-[400px]">
        <div className="flex justify-center items-center w-full max-w-4xl md:gap-8 lg:gap-12 px-4 lg:px-0">
          {[0, 1, 2].map((i) => (
            <motion.div 
              key={i} 
              animate={controls[i]}
              className="relative flex-1 aspect-[2/3] max-w-[300px]"
            >
              <Image 
                src="/images/about us/diff org/3 arrows.png" 
                alt="Arrow right" 
                fill 
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
