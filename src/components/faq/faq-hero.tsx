"use client"

import { DotScreenShader } from "@/components/ui/dot-shader-background"

export default function FaqHero() {
  return (
    <section className="relative h-[640px] overflow-hidden pt-16 sm:h-[835px] sm:pt-28">
      <div className="absolute inset-0 z-0 faq-hero-bg faq-hero-bg-animate" aria-hidden="true" />
      <div className="absolute inset-0 z-10 hidden md:block pointer-events-none">
        <DotScreenShader />
      </div>
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1904px] flex-col items-center justify-start px-4 pt-10 text-center pointer-events-none sm:px-6 sm:pt-12 md:justify-center md:pt-0">
        <p className="fade-in-up text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full inline-flex">
          Preguntas frecuentes
        </p>
        <h1 className="fade-in-up mt-2 text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-balance text-foreground">
          <span className="bg-[linear-gradient(90deg,#3B82F6_0%,#22C55E_100%)] bg-clip-text text-transparent">
            Respuestas claras para avanzar más rápido
          </span>
        </h1>
        <p className="fade-in-up text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra respuestas sobre tiempos, procesos y soporte. Si necesitas algo más específico, estamos listos para ayudarte.
        </p>
      </div>
    </section>
  )
}
