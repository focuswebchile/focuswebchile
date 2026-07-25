"use client"

import Image from "next/image"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

/**
 * Hero — dos capas independientes, sin contenedor centrado compartido.
 */
export function SobreMiHero() {
  const imageSrc = "/felipe_webiste_mihistoria.png"

  return (
    <section className="relative w-full overflow-hidden bg-background pt-[120px] md:h-[100svh] md:pt-[68px]">
      {/* Breadcrumb */}
      <div className="absolute left-6 top-[80px] z-20 md:left-10 md:top-[130px]">
        <SiteBreadcrumb
          items={[{ label: "Inicio", href: "/" }, { label: "Mi historia" }]}
        />
      </div>

      {/* CAPA 1 — foto */}
      <div className="relative z-0 h-[51vh] w-full overflow-hidden md:absolute md:left-1/2 md:top-[76px] md:bottom-0 md:h-auto md:w-[calc(100svh-76px)] md:-translate-x-1/2">
        <Image
          src={imageSrc}
          alt="Felipe Ibar"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="select-none object-cover object-top"
        />

        {/* Degradado inferior — ahora activo en mobile y desktop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 block h-[35%] bg-[linear-gradient(to_top,var(--background)_0%,var(--background)_20%,color-mix(in_srgb,var(--background)_60%,transparent)_55%,transparent_100%)] md:h-[45%]"
        />
      </div>

      {/* CAPA 2 — texto */}
      <div className="relative z-10 mt-6 px-6 md:absolute md:inset-0 md:mt-0 md:px-0">
        {/* Párrafo */}
        <div className="md:absolute md:left-[calc(50%+(100svh-76px)/2+7px)] md:top-[48%] md:max-w-[50ch]">
          <p className="text-base md:text-lg leading-relaxed text-foreground/75 md:text-left">
            Mi camino comenzó estudiando marketing en Canadá, pero fue
            ayudando a emprendedores donde encontré lo que realmente quería
            hacer. Hoy diseño sitios web claros, rápidos y pensados para que
            las personas entiendan el valor de un negocio desde el primer
            momento.
          </p>
        </div>

        {/* Titular */}
        <div className="mt-8 md:absolute md:bottom-36 md:left-10 md:mt-0">
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Mi historia
          </p>
          <h1 className="font-display text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-foreground [text-wrap:pretty] md:text-[3.50rem] md:leading-[1.10] md:[text-wrap:normal]">
              Cada negocio tiene una historia.
              <br className="hidden md:inline" />
              {" "}Yo la convierto en una web
              <br className="hidden md:inline" />
              {" "}que inspira confianza.
               </h1>
        </div>
      </div>
    </section>
  )
}
