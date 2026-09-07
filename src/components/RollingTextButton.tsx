"use client"

import { motion, useReducedMotion } from "motion/react"
import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959] as const,
}

interface RollingTextButtonProps {
  text?: string;
  className?: string;
  href?: string;
}

export default function RollingTextButton({ text = "Book a discovery call", className, href }: RollingTextButtonProps) {
  const router = useRouter()
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(false)
  const activeRef = useRef(false)
  const animating = useRef(false)
  const pendingRequest = useRef<boolean | null>(null)
  const hovered = useRef(false)
  const focused = useRef(false)

  const updateActive = (next: boolean) => {
    activeRef.current = next
    setActive(next)
  }

  const requestActive = (next: boolean) => {
    if (reduceMotion) return

    if (next === activeRef.current) {
      pendingRequest.current = null
      return
    }

    if (animating.current) {
      pendingRequest.current = next
      return
    }

    animating.current = true
    updateActive(next)
  }

  const completeAnimation = () => {
    if (!animating.current) return
    animating.current = false

    if (
      pendingRequest.current !== null &&
      pendingRequest.current !== activeRef.current
    ) {
      const next = pendingRequest.current
      pendingRequest.current = null
      animating.current = true
      updateActive(next)
    } else {
      pendingRequest.current = null
    }
  }

  const characters = text.split("");
  const staggerDelay = 0.015; // slightly faster stagger for characters

  return (
    <motion.button
      type="button"
      className={className || "bg-[#2D6AFF] text-white font-avenir px-5 py-3 rounded-[4px] text-base font-medium flex items-center gap-2 w-fit hover:bg-blue-600 transition-colors group"}
      aria-label={text}
      onClick={() => {
        if (href) {
          router.push(href)
        }
      }}
      onHoverStart={() => {
        hovered.current = true
        requestActive(true)
      }}
      onHoverEnd={() => {
        hovered.current = false
        requestActive(focused.current)
      }}
      onFocus={() => {
        focused.current = true
        requestActive(true)
      }}
      onBlur={() => {
        focused.current = false
        requestActive(hovered.current)
      }}
    >
      <span className="relative flex overflow-hidden whitespace-nowrap" aria-hidden="true">
        <span className="flex">
          {characters.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "0%" }}
              animate={{ y: active ? "-100%" : "0%" }}
              transition={{
                ...transition,
                delay: i * staggerDelay,
              }}
              onAnimationComplete={i === characters.length - 1 ? completeAnimation : undefined}
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0 flex">
          {characters.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: active ? "0%" : "100%" }}
              transition={{
                ...transition,
                delay: i * staggerDelay,
              }}
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </span>
      <Image 
        src="/images/landing/arrow-up.png" 
        alt="Arrow Up" 
        width={24} 
        height={24} 
        className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
    </motion.button>
  )
}
