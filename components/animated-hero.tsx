"use client"

import { motion } from "framer-motion"

interface AnimatedHeroProps {
  title: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonHref?: string
  className?: string
}

export default function AnimatedHero({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  className = "",
}: AnimatedHeroProps) {
  return (
    <div className={`flex flex-col items-center justify-center px-4 text-center text-white ${className}`}>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-lg md:text-xl"
      >
        {description}
      </motion.p>
      {(primaryButtonText || secondaryButtonText) && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {primaryButtonText && (
            <a
              href={primaryButtonHref || "#"}
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90"
            >
              {primaryButtonText}
            </a>
          )}
          {secondaryButtonText && (
            <a
              href={secondaryButtonHref || "#"}
              className="inline-flex h-10 items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-primary"
            >
              {secondaryButtonText}
            </a>
          )}
        </motion.div>
      )}
    </div>
  )
}
