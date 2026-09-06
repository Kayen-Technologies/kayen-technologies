"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedWorksGraphic() {
  // Motion values for positions (percentages)
  const n1x = useMotionValue(50);
  const n1y = useMotionValue(30);
  const n1op = useMotionValue(1);
  const n1sc = useMotionValue(1);

  const n2x = useMotionValue(30);
  const n2y = useMotionValue(70);
  const n2op = useMotionValue(1);
  const n2sc = useMotionValue(1);

  const n3x = useMotionValue(70);
  const n3y = useMotionValue(70);
  const n3op = useMotionValue(1);
  const n3sc = useMotionValue(1);

  // Convert to string percentages for positioning
  const n1xPct = useTransform(n1x, v => `${v}%`);
  const n1yPct = useTransform(n1y, v => `${v}%`);
  const n2xPct = useTransform(n2x, v => `${v}%`);
  const n2yPct = useTransform(n2y, v => `${v}%`);
  const n3xPct = useTransform(n3x, v => `${v}%`);
  const n3yPct = useTransform(n3y, v => `${v}%`);

  // Line opacities (min of the two connected nodes)
  const l12op = useTransform([n1op, n2op], ([v1, v2]) => Math.min(v1 as number, v2 as number));
  const l23op = useTransform([n2op, n3op], ([v1, v2]) => Math.min(v1 as number, v2 as number));
  const l13op = useTransform([n1op, n3op], ([v1, v2]) => Math.min(v1 as number, v2 as number));

  // The wild animation loop!
  useEffect(() => {
    let active = true;

    // A helper to randomly orchestrate each node independently
    const runLoop = async (x: any, y: any, op: any, sc: any) => {
      while (active) {
        // Pick a random target within safe bounds
        const targetX = 15 + Math.random() * 70; // 15% to 85%
        const targetY = 15 + Math.random() * 70; // 15% to 85%
        const moveDuration = 0.8 + Math.random() * 2; // Fast, unpredictable speed
        
        // Start moving!
        animate(x, targetX, { duration: moveDuration, ease: "easeInOut" });
        animate(y, targetY, { duration: moveDuration, ease: "easeInOut" });
        
        // 40% chance this node glitches out and disappears during the move
        if (Math.random() > 0.6) {
          animate(op, 0, { duration: 0.2 });
          animate(sc, 0.5, { duration: 0.2 });
          await new Promise(r => setTimeout(r, (moveDuration / 2) * 1000));
          if (!active) break;
          // Pop back in!
          animate(op, 1, { duration: 0.3 });
          animate(sc, 1, { duration: 0.3, type: "spring", stiffness: 200 });
          await new Promise(r => setTimeout(r, (moveDuration / 2) * 1000));
        } else {
          // Just move normally
          await new Promise(r => setTimeout(r, moveDuration * 1000));
        }
      }
    };

    // Run the loops independently for true chaos
    runLoop(n1x, n1y, n1op, n1sc);
    runLoop(n2x, n2y, n2op, n2sc);
    runLoop(n3x, n3y, n3op, n3sc);

    return () => { active = false; };
  }, [n1x, n1y, n1op, n1sc, n2x, n2y, n2op, n2sc, n3x, n3y, n3op, n3sc]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-visible">
      
      {/* Dynamic SVG for connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" style={{ stroke: '#FFFFFF33', strokeWidth: 1 }}>
        <defs>
          <mask id="dot-mask">
            <rect width="100%" height="100%" fill="white" />
            <motion.circle cx={n1xPct} cy={n1yPct} r="8" fill="black" />
            <motion.circle cx={n2xPct} cy={n2yPct} r="8" fill="black" />
            <motion.circle cx={n3xPct} cy={n3yPct} r="8" fill="black" />
          </mask>
        </defs>
        <g mask="url(#dot-mask)">
          <motion.line x1={n1xPct} y1={n1yPct} x2={n2xPct} y2={n2yPct} style={{ opacity: l12op }} />
          <motion.line x1={n1xPct} y1={n1yPct} x2={n3xPct} y2={n3yPct} style={{ opacity: l13op }} />
          <motion.line x1={n2xPct} y1={n2yPct} x2={n3xPct} y2={n3yPct} style={{ opacity: l23op }} />
        </g>
      </svg>

      {/* Top Image */}
      <motion.div 
        className="absolute z-10"
        style={{ left: n1xPct, top: n1yPct, opacity: n1op, scale: n1sc, x: "-50%", y: "-50%" }}
      >
        <Image src="/images/works/work shaped/top.png" alt="Top Shape" width={320} height={320} className="w-40 md:w-56 lg:w-64 h-auto" />
      </motion.div>

      {/* Left Image */}
      <motion.div 
        className="absolute z-10"
        style={{ left: n2xPct, top: n2yPct, opacity: n2op, scale: n2sc, x: "-50%", y: "-50%" }}
      >
        <Image src="/images/works/work shaped/left.png" alt="Left Shape" width={320} height={320} className="w-32 md:w-48 lg:w-56 h-auto" />
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="absolute z-10"
        style={{ left: n3xPct, top: n3yPct, opacity: n3op, scale: n3sc, x: "-50%", y: "-50%" }}
      >
        <Image src="/images/works/work shaped/right.png" alt="Right Shape" width={320} height={320} className="w-32 md:w-48 lg:w-56 h-auto" />
      </motion.div>
    </div>
  );
}
