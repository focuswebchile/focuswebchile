"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function SobreMiHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-[#22c55eab] to-sky-50 px-6 md:h-[85vh] md:px-10">
      <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-stretch gap-12 pt-14 md:grid-cols-[1.35fr_0.65fr] md:gap-0 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-6 flex flex-col items-center justify-center space-y-6 pb-6 text-center md:mt-12 md:items-start md:pb-0 md:pr-12 md:-ml-6 md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl"
          >
            Hola, soy <span className="font-semibold">Felipe</span>
            <br />
            y esto es <span className="font-semibold">Focus Web</span>
          </motion.h1>
          <div className="w-full max-w-sm text-base text-foreground/80 md:text-lg">
            <p className="font-medium text-foreground">Trabajo con pymes y emprendedores</p>
            <p className="mt-1">Si tienes una idea en mente, conversemos</p>
          </div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="relative h-[60vh] sm:h-[65vh] md:h-full md:translate-x-14"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="
               absolute
               left-1/2
               md:left-[48%]
               top-1/2
               h-[52vh]
               w-[52vh]
               md:h-[60vh]
               md:w-[60vh]
               -translate-x-1/2
             -translate-y-1/2
             rounded-full
             bg-[#52a9ff]
            "
            aria-hidden="true"
          />

          <Image
            src="/Imagen-hero.webp"
            alt="Felipe Ibar"
            fill
            priority
            className="origin-bottom scale-[1.3] object-contain [object-position:center_bottom] md:origin-[64%_100%] md:scale-[1.6] md:[object-position:right_bottom]"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
