"use client"

import { useEffect, useState } from "react"
import { Typewriter } from "@/components/ui/typewriter-text"
import { Button } from "@/components/ui/button"

const bridgeLines = ["Tienes una idea en mente", "Esta es tu señal", "Bienvenido a FocusWeb"]

export function BridgeTyping() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(max-width: 768px)")
    const update = () => setIsCompact(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  const shouldAnimate = !reducedMotion && !isCompact


  return (
    <section className="py-24 md:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <div className="block text-center font-semibold tracking-tight leading-[1.15] text-2xl sm:text-5xl md:text-6xl lg:text-[64px] max-w-none sm:max-w-[46ch] mx-auto min-h-[1.4em] text-foreground">
          {!shouldAnimate ? (
            <>
              <span className="text-foreground">Estás pensando en una </span>
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">web</span>
            </>
          ) : (
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              <Typewriter
                text={bridgeLines}
                speed={130}
                deleteSpeed={65}
                delay={2000}
                loop
                cursor="▍"
              />
            </span>
          )}
        </div>

        <p className="mt-10 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground text-pretty font-light px-4">
          <span className="block">Compártenos tu idea o el proyecto que tienes en mente</span>
          <span className="block">Te ayudamos a ordenar las piezas y darle forma</span>
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:text-lg font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            Ahora sí, veamos cómo podría ayudarte ↓
          </a>
        </div>
      </div>
    </section>
  )
}
