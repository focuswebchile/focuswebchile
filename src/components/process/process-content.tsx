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
      "Leemos tu situación real: SEO técnico, velocidad, estructura y objetivo de negocio. Sin supuestos ni recetas genéricas.",
    bullets: [
      "Revisión técnica inicial del sitio",
      "Contexto comercial y objetivo principal",
      "Lista de fricciones detectadas",
    ],
    cta: { label: "Partir con diagnóstico", href: "/metodologia" },
  },
  {
    number: "02",
    title: "Priorización",
    description:
      "Ordenamos acciones por impacto real: qué corrige más rápido el SEO, la velocidad y la conversión.",
    bullets: ["Backlog por impacto/esfuerzo", "Quick wins técnicos", "Plan claro por etapas"],
    cta: { label: "Ver servicios", href: "/servicios" },
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Implementamos lo acordado: optimización sobre sitio existente o desarrollo desde cero cuando realmente conviene.",
    bullets: ["SEO técnico y estructura", "Mejoras de rendimiento", "Desarrollo web si aplica"],
    cta: { label: "Conocer desarrollo", href: "/servicios/desarrollo-web" },
  },
  {
    number: "04",
    title: "Medición",
    description: "Validamos resultados y ajustamos lo necesario para mantener mejoras sostenibles en tiempo.",
    bullets: ["Antes vs después", "Siguiente iteración sugerida", "Acompañamiento en decisiones"],
    cta: { label: "Hablar por WhatsApp", href: "https://wa.me/420733796959" },
  },
]

export default function ProcessContent() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    if (!lineRef.current) return
    setLineHeight(lineRef.current.getBoundingClientRect().height)
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
            className="min-h-[80vh] flex flex-col justify-center gap-6"
          >
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium w-fit">
              Nuestro proceso
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance">
              <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                Proceso claro para mejorar SEO, velocidad y resultados
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              No se trata solo de desarrollo web. Partimos por diagnóstico, priorizamos con criterio técnico y
              ejecutamos lo que realmente mueve la aguja.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/420733796959" target="_blank" rel="noreferrer">
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
          <div className="space-y-6">
            {[
              {
                title: "Transparencia total",
                description:
                  "Sin tecnicismos ni costos ocultos. Todo claro desde el inicio, con acuerdos y tiempos definidos.",
                icon: Target,
                label: "Claridad",
                accent: "from-primary/15 via-transparent to-info/15",
              },
              {
                title: "Enfoque técnico y de negocio",
                description: "Cada decisión busca mejorar visibilidad en Google, experiencia y conversión.",
                icon: Sparkles,
                label: "Foco",
                accent: "from-accent/15 via-transparent to-primary/10",
              },
              {
                title: "Acompañamiento real",
                description: "Te guiamos en cada etapa. No quedas solo después del lanzamiento.",
                icon: Users,
                label: "Guía",
                accent: "from-info/15 via-transparent to-primary/10",
              },
              {
                title: "Calidad y detalle",
                description: "SEO técnico, rendimiento y experiencia móvil alineados en una sola ejecución.",
                icon: ShieldCheck,
                label: "Precisión",
                accent: "from-primary/10 via-transparent to-accent/15",
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
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-70`} />
                  <div className="absolute -right-16 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-info/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 text-primary">
                        <item.icon className="h-6 w-6" />
                        <span className="text-xs font-semibold uppercase tracking-wide">{item.label}</span>
                      </div>
                      <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      FocusWeb · {item.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-[1200px] py-24 sm:py-28" ref={timelineRef}>
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/40" ref={lineRef} />
            <motion.div style={{ height: lineProgress }} className="absolute left-4 top-0 w-[2px] bg-primary" />
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative pl-14 sm:pl-20 mb-28 sm:mb-36 min-h-[65vh] flex flex-col justify-center"
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
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 mt-16 sm:mt-0">
                    <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                      {step.title}
                    </span>
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-foreground">
              Lo que puedes esperar{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                del proceso
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Beneficios claros que se sienten en cada etapa, sin repetir el timeline.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Tiempo claro",
                lead: "Desde el día uno sabes qué se entrega.",
                bullets: ["Plazos definidos desde el inicio", "Avances claros siempre", "Sin letra chica"],
                label: "Planificación",
                glow: "green",
                color: "from-primary to-emerald-400",
              },
              {
                title: "Proceso simple",
                lead: "Todo se entiende rápido, sin fricción.",
                bullets: ["Comunicación directa", "Decisiones guiadas", "Más claridad"],
                label: "Ejecución",
                glow: "blue",
                color: "from-info to-primary",
              },
              {
                title: "Resultado sólido",
                lead: "Un sitio listo para vender y crecer.",
                bullets: ["SEO y rendimiento optimizado", "Diseño móvil impecable", "Resultados sostenibles"],
                label: "Resultado",
                glow: "green",
                color: "from-primary to-info",
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
                  glowColor={item.glow as "green" | "blue"}
                  customSize
                  className="h-full w-full min-h-[460px] rounded-3xl border-border/50 bg-white p-0 shadow-2xl shadow-primary/10"
                >
                  <div className="relative z-10 flex flex-col gap-5 p-7 sm:p-9">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]/40">
                        <span className="h-2 w-2 rounded-full bg-[#22c55e]/30" />
                        {item.label}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#52a9ff]">
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
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
              <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                ¿Vemos si este proceso es para tu proyecto?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conversemos, revisamos tu idea y te decimos con honestidad si podemos ayudarte.
            </p>
            <Button size="lg" className="shadow-lg shadow-primary/25" asChild>
              <a href="https://wa.me/420733796959" target="_blank" rel="noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
