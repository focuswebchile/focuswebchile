"use client"

import { createElement, useMemo, type ElementType, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  amount?: number
}

export function Reveal({ children, className, delay = 0, as = "div", amount = 0.2 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = useMemo(() => motion.create(as), [as])

  if (shouldReduceMotion) {
    return createElement(as, { className }, children)
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, transform: "translateY(24px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.45, ease: EASE_OUT, delay }}
    >
      {children}
    </MotionComponent>
  )
}
