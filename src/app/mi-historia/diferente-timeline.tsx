"use client"

import { useRef } from "react"
import { TimelineContent } from "@/components/TimelineContent"

export function DiferenteTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: i * 0.25 },
    }),
  }

  return (
    <section ref={sectionRef} className="relative w-full pt-16 md:pt-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <TimelineContent
          timelineRef={sectionRef}
          animationNum={0}
          once
          customVariants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-4xl font-semibold sm:text-5xl md:text-7xl text-center mb-18 md:mb-35">
            <span className="text-foreground">Qué me</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              hace diferente
            </span>
          </h2>
        </TimelineContent>

        <div className="mx-auto w-full max-w-4xl">
          <div className="relative pl-28 sm:pl-32 md:pl-36">
            <span className="absolute left-[2.5rem] top-2 h-full w-px bg-primary/30 sm:left-[2.75rem] md:left-[3rem]" />

            <div className="relative pb-10 md:pb-14">
            <span className="absolute -left-[3.5rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground sm:-left-[3.75rem] sm:h-9 sm:w-9 sm:text-sm md:-left-[4rem] md:h-10 md:w-10">
              01
            </span>
              <TimelineContent
                timelineRef={sectionRef}
                animationNum={1}
                once
                customVariants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
                  },
                }}
              >
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl text-left">
                  Partimos por entender el problema real
                </h3>
              </TimelineContent>

              <TimelineContent
                timelineRef={sectionRef}
                animationNum={2}
                once
                customVariants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                  },
                }}
                className="mt-6 text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl text-left"
              >
                <p>
                  Primero{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={4}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-accent/50 px-2 text-accent"
                  >
                    diagnosticamos
                  </TimelineContent>{" "}
                  qué está frenando tu sitio: SEO técnico, velocidad, estructura o experiencia de uso. Mi trabajo es
                  convertir esa información en un plan{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={3}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-primary/50 px-2 text-primary"
                  >
                    claro
                  </TimelineContent>
                  y accionable para que avances con foco, no con suposiciones.
                </p>
              </TimelineContent>
            </div>

            <div className="relative pb-10 md:pb-14">
            <span className="absolute -left-[3.5rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground sm:-left-[3.75rem] sm:h-9 sm:w-9 sm:text-sm md:-left-[4rem] md:h-10 md:w-10">
              02
            </span>
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl text-left">
                  Te ahorro prueba y error
                </h3>
                <p className="text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
                  Uso mi{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={6}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-primary/50 px-2 text-primary"
                  >
                    experiencia
                  </TimelineContent>{" "}
                  para priorizar lo que sí mueve la aguja: rendimiento, indexación, arquitectura y mensajes clave.
                  Evitamos{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={7}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-accent/50 px-2 text-accent"
                  >
                    cambios cosméticos
                  </TimelineContent>{" "}
                  y ejecutamos lo que realmente{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={8}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-primary/50 px-2 text-primary"
                  >
                    funciona
                  </TimelineContent>
                  .
                </p>
              </div>
            </div>

            <div className="relative">
            <span className="absolute -left-[3.5rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground sm:-left-[3.75rem] sm:h-9 sm:w-9 sm:text-sm md:-left-[4rem] md:h-10 md:w-10">
              03
            </span>
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl text-left">
                  Estrategia y ejecución en una misma línea
                </h3>
                <p className="text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
                  Si el camino es optimizar, optimizamos. Si el camino es rehacer, desarrollamos desde cero.
                  Siempre con base técnica sólida para que tu web se entienda mejor en Google y convierta mejor.
                  Te entrego una solución con lo{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={9}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-primary/50 px-2 text-primary"
                  >
                    realmente
                  </TimelineContent>
                  {" "}necesario. Tendrás control total para gestionarla a tu manera, con{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={10}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-primary/50 px-2 text-primary"
                  >
                    herramientas
                  </TimelineContent>{" "}
                  que se{" "}
                  <TimelineContent
                    as="span"
                    timelineRef={sectionRef}
                    animationNum={11}
                    customVariants={textVariants}
                    className="inline-flex items-center rounded-md border-2 border-dotted border-accent/50 px-2 text-accent"
                  >
                    adaptan
                  </TimelineContent>{" "}
                  y crecen a tu ritmo, sin depender de terceros ni quedar amarrado a nadie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/12 to-transparent" />
      <div className="h-12 md:h-20" />
    </section>
  )
}
