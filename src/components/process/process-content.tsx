"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GlowCard } from "@/components/ui/glow-card"
import { CheckCircle, Users, Target, Sparkles, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Reviso tu situación real: SEO técnico, velocidad, estructura y objetivo de negocio. Sin supuestos ni recetas genéricas.",
    bullets: [
      "Revisión técnica inicial del sitio",
      "Contexto comercial y objetivo principal",
      "Lista de fricciones detectadas",
    ],
    cta: { label: "Partir con diagnóstico", href: "/metodologia" },
  },
  {
    number: "02",
    title: "Qué hacer primero",
    description:
      "Ordeno las acciones por impacto real: qué corrige más rápido tu SEO, tu velocidad y tu conversión.",
    bullets: ["Lista de prioridades por impacto y esfuerzo", "Mejoras rápidas de alto impacto", "Plan claro por etapas"],
    cta: { label: "Ver servicios", href: "/servicios" },
  },
  {
    number: "03",
    title: "Manos a la obra",
    description:
      "Hago lo que acordamos: optimizo tu sitio existente o lo construyo desde cero cuando realmente conviene.",
    bullets: ["SEO técnico y estructura", "Mejoras de rendimiento", "Desarrollo web si aplica"],
    cta: { label: "Conocer desarrollo", href: "/servicios/desarrollo-web" },
  },
  {
    number: "04",
    title: "Medir lo que importa",
    description: "Reviso los resultados y ajusto lo necesario para mantener las mejoras en el tiempo.",
    bullets: ["Antes vs después", "Siguiente iteración sugerida", "Acompañamiento en decisiones"],
    cta: { label: "Hablar por WhatsApp", href: "https://wa.me/56922261321" },
  },
]

export default function ProcessContent() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    if (!lineRef.current) return
    const el = lineRef.current
    const updateHeight = () => setLineHeight(el.getBoundingClientRect().height)
    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(el)
    window.addEventListener("resize", updateHeight)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 10%", "end 60%"],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, lineHeight])

  return (
    <>
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px] py-24 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-[80dvh] flex flex-col justify-center gap-6"
          >
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium w-fit">
              Nuestro proceso
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance text-primary">
              Así convierto una idea en resultados
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              No importa si necesitas una web nueva, mejorar la que ya tienes o resolver un problema
              específico. Primero entiendo tu negocio para recomendarte la mejor solución para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/56922261321" target="_blank" rel="noreferrer">
                  Evaluar idea
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/60" asChild>
                <a href="/servicios/desarrollo-web">Ver precios</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px] pb-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Transparencia total",
                description:
                  "Sin tecnicismos ni costos ocultos. Te explico todo claro desde el inicio, con acuerdos y tiempos definidos.",
                icon: Target,
                label: "Claridad",
                tint: "bg-primary/5",
              },
              {
                title: "Enfoque técnico y de negocio",
                description: "Cada decisión que tomo busca mejorar tu visibilidad en Google, tu experiencia y tu conversión.",
                icon: Sparkles,
                label: "Foco",
                tint: "bg-accent/5",
              },
              {
                title: "Acompañamiento real",
                description: "Te acompaño en cada etapa. No te dejo solo después del lanzamiento.",
                icon: Users,
                label: "Guía",
                tint: "bg-primary/5",
              },
              {
                title: "Calidad y detalle",
                description: "Reviso que el SEO técnico, el rendimiento y la experiencia móvil queden alineados en una sola entrega.",
                icon: ShieldCheck,
                label: "Precisión",
                tint: "bg-accent/5",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <Card className="group relative overflow-hidden border-border/40 bg-card/80 px-6 py-7 sm:px-8 sm:py-9 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15">
                  <div className={`absolute inset-0 ${item.tint}`} />
                  <div className="absolute -right-16 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 text-primary">
                      <item.icon className="h-6 w-6" />
                      <span className="text-xs font-semibold uppercase tracking-wide">{item.label}</span>
                    </div>
                    <h3 className="font-display mt-3 text-2xl sm:text-3xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px] py-24 sm:py-28" ref={timelineRef}>
          <div className="relative overflow-hidden pl-8 pt-8 sm:pl-10 sm:pt-0">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/40" ref={lineRef} />
            <motion.div style={{ height: lineProgress }} className="absolute left-4 top-0 w-[2px] bg-primary" />
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative pl-14 sm:pl-20 mb-28 sm:mb-36 min-h-[65dvh] flex flex-col justify-center"
              >
                <span className="absolute left-0 top-0 text-5xl sm:text-6xl font-bold text-primary -translate-y-6 sm:translate-y-0">
                  {step.number}
                </span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 mt-16 sm:mt-0 text-primary">
                    {step.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="mt-7 space-y-4 text-base sm:text-lg text-muted-foreground max-w-3xl">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span className="transition-colors hover:text-primary">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button size="lg" className="shadow-md shadow-primary/20" asChild>
                      <a href={step.cta.href}>{step.cta.label}</a>
                    </Button>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 pb-24 sm:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold text-foreground">
              Lo que puedes esperar<br />
              <span className="text-primary">del proceso</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Beneficios claros que se sienten en cada etapa del proceso.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Tiempo claro",
                lead: "Desde el día uno sabes qué se entrega.",
                bullets: ["Plazos definidos desde el inicio", "Avances claros siempre", "Sin letra chica"],
                label: "Planificación",
                glow: "indigo",
              },
              {
                title: "Proceso simple",
                lead: "Todo se entiende rápido, sin fricción.",
                bullets: ["Comunicación directa", "Decisiones guiadas", "Más claridad"],
                label: "Ejecución",
                glow: "gold",
              },
              {
                title: "Resultado sólido",
                lead: "Un sitio listo para vender y crecer.",
                bullets: ["SEO y rendimiento optimizado", "Diseño móvil impecable", "Resultados sostenibles"],
                label: "Resultado",
                glow: "indigo",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <GlowCard
                  glowColor={item.glow as "indigo" | "gold"}
                  customSize
                  className="h-full w-full min-h-[460px] rounded-3xl border-border/50 bg-white p-0 shadow-2xl shadow-primary/10"
                >
                  <div className="relative z-10 flex flex-col gap-5 p-7 sm:p-9">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                        <span className="h-2 w-2 rounded-full bg-primary/50" />
                        {item.label}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl pt-2">
                        {item.lead}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <div className="mt-2 h-2 w-2 rounded-full bg-muted-foreground/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-primary">
              ¿Vemos si este proceso<br />
              es para tu proyecto?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conversemos, revisamos tu idea y te decimos con honestidad si podemos ayudarte.
            </p>
            <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
              <a href="https://wa.me/56922261321" target="_blank" rel="noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
