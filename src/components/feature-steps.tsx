"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image?: string
  imageScale?: number
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  ctaText?: string
  ctaHref?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className,
  title = "Así trabajamos",
  ctaText = "Conoce nuestro proceso →",
  ctaHref = "/nuestro-proceso",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const titleParts = title.trim().split(/\s+/)
  const titleTail = titleParts.length > 0 ? titleParts.pop() : ""
  const titleHead = titleParts.join(" ")

  const isReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const isSmallScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  const shouldAutoPlay = !isReducedMotion && !isSmallScreen

  useEffect(() => {
    if (!shouldAutoPlay) {
      return
    }

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, shouldAutoPlay])

  return (
    <section className={cn("py-12 sm:py-16 lg:py-20 px-4 sm:px-6", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">
            {titleHead && <span className="text-foreground">{titleHead} </span>}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              {titleTail}
            </span>
          </h2>
          <a href={ctaHref} className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
            {ctaText}
          </a>
        </div>

        <div className="mt-10 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">{feature.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative h-[240px] md:h-[360px] lg:h-[480px] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {feature.image && feature.image !== "placeholder" ? (
                        <div className="flex h-full w-full items-center justify-center">
                          <Image
                            src={feature.image}
                            alt={feature.step}
                            className="h-full w-full object-contain"
                            width={1000}
                            height={500}
                            style={{ transform: `scale(${feature.imageScale ?? 1})` }}
                          />
                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">
                          Imagen {feature.step}
                        </div>
                      )}
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
