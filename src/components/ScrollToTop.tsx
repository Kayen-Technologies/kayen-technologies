"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  /** Scroll position in pixels before button becomes visible */
  threshold?: number;
  /** Whether to show circular scroll progress indicator */
  showProgress?: boolean;
  /** Additional custom class names */
  className?: string;
}

export default function ScrollToTop({
  threshold = 300,
  showProgress = true,
  className = "",
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max((currentScrollY / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (currentScrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculations (for 48x48 px container with 20px radius)
  const size = 48;
  const strokeWidth = 2;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed bottom-8 right-8 md:bottom-10 md:right-13 z-40 flex items-center gap-3 print:hidden ${className}`}
        >
          {/* Tooltip on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="hidden sm:flex items-center gap-2 bg-[#181C23] border border-[#363636] text-[#A0A6B1] text-xs font-ubuntu-mono px-3 py-1.5 rounded-[4px] shadow-xl pointer-events-none select-none backdrop-blur-sm"
              >
                <span>TOP</span>
                <span className="text-[#2D6AFF] font-bold">{Math.round(scrollProgress)}%</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll back to top of page"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#181C23]/90 backdrop-blur-md text-white border border-[#363636] hover:border-[#2D6AFF] shadow-lg hover:shadow-[0_0_24px_rgba(45,106,255,0.4)] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6AFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101317]"
          >
            {/* Circular Progress Bar */}
            {showProgress && (
              <svg
                width={size}
                height={size}
                className="absolute inset-0 -rotate-90 pointer-events-none"
                aria-hidden="true"
              >
                {/* Track */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Progress */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#2D6AFF"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-[stroke-dashoffset] duration-150 ease-out"
                />
              </svg>
            )}

            {/* Upward Arrow Icon */}
            <ArrowUp
              className="w-5 h-5 text-white/90 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
              strokeWidth={2.2}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
