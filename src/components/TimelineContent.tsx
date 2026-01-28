"use client"

import { motion, useInView } from "framer-motion"
import type { HTMLMotionProps, Variants } from "framer-motion"
import type React from "react"

type TimelineContentProps = {
  children?: React.ReactNode
  animationNum: number
  className?: string
  timelineRef: React.RefObject<HTMLElement | null>
  as?: keyof HTMLElementTagNameMap
  customVariants?: Variants
  once?: boolean
} & HTMLMotionProps<"div">

export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = false,
  ...props
}: TimelineContentProps) => {
  const defaultSequenceVariants: Variants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  }

  const sequenceVariants = customVariants || defaultSequenceVariants

  const isInView = useInView(timelineRef, { once })

  const MotionComponent = motion[as || "div"] as React.ComponentType<HTMLMotionProps<"div">>

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
