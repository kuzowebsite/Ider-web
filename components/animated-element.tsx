"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type AnimationDirection = "left" | "right" | "up" | "down" | "none"

interface AnimatedElementProps {
  children: ReactNode
  direction?: AnimationDirection
  delay?: number
  className?: string
  once?: boolean
  duration?: number
}

export default function AnimatedElement({
  children,
  direction = "none",
  delay = 0,
  className = "",
  once = true,
  duration = 0.6,
}: AnimatedElementProps) {
  // Set initial animation properties based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 }
      case "right":
        return { x: 100, opacity: 0 }
      case "up":
        return { y: -50, opacity: 0 }
      case "down":
        return { y: 50, opacity: 0 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialProps()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
