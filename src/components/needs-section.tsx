"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Rocket, Wrench } from "lucide-react"
import { motion, useInView } from "framer-motion"

const needsCards = [
  {
    title: "Ya Tengo Sitio Web",
    icon: Wrench,
    badges: ["Más común"],
    problemTitle: "Tu problema:",
    problemText:
      "Tu sitio existe pero no funciona bien: carga lento, no aparece en Google, no genera ventas o está desactualizado.",
    solutionTitle: "Necesitas OPTIMIZACIÓN",
    bullets: [
      "Auditoría técnica SEO",
      "Mejora de velocidad (Core Web Vitals)",
      "Corrección de errores técnicos",
      "Optimización de conversión",
      "SEO on-page y contenido",
    ],
    price: "Desde $111.000 CLP",
    ctaLabel: "Conocer auditoría SEO",
    ctaHref: "/servicios/auditoria-seo-tecnico",
    chips: [
      "WordPress lento",
      "E-commerce que no vende",
      "Sitio invisible en Google",
      "Rediseño con problemas",
      "Alta tasa de rebote",
    ],
    featured: true,
    cardTone: "from-success/15 via-primary/10 to-card",
    iconTone: "bg-success/20 text-success",
    ctaTone: "bg-primary text-primary-foreground hover:bg-primary/90",
    seoDetail:
      "Ideal para sitios publicados que no convierten o no posicionan. El diagnóstico inicial ordena prioridades y te muestra dónde invertir primero para mejorar resultados.",
    seoLinks: [
      { label: "Ir al diagnóstico inicial", href: "/metodologia" },
      { label: "Errores comunes en pymes", href: "/blog/errores-paginas-web-pymes-chile" },
    ],
  },
  {
    title: "No Tengo Sitio Web",
    icon: Rocket,
    badges: [],
    problemTitle: "Tu situación:",
    problemText:
      "Estás empezando o necesitas un sitio completamente nuevo. Quieres hacerlo bien desde el inicio.",
    solutionTitle: "Necesitas DESARROLLO",
    bullets: [
      "Diseño profesional",
      "Optimizado desde día 1",
      "SEO técnico integrado",
      "Velocidad garantizada",
      "Arquitectura web escalable",
    ],
    price: "Desde $180.000 CLP",
    ctaLabel: "Ver precios",
    ctaHref: "/servicios/desarrollo-web",
    secondaryCtaLabel: "Ver landing page",
    secondaryCtaHref: "/landing-page",
    chips: ["Sitio nuevo", "E-commerce", "Landing page", "Venta por WhatsApp", "Negocio en crecimiento"],
    featured: false,
    cardTone: "from-info/15 via-primary/10 to-card",
    iconTone: "bg-info/20 text-info",
    ctaTone: "bg-info text-white hover:bg-info/90",
    priceOffset: "mt-9",
    seoDetail:
      "Si estás comenzando, una base técnica correcta desde el inicio evita retrabajos, mejora la velocidad de lanzamiento y facilita escalar SEO, contenidos y campañas.",
    seoLinks: [
      { label: "Ver landing pages", href: "/landing-page" },
      { label: "Conocer precios", href: "/servicios/desarrollo-web" },
    ],
  },
]

function CountUpMetric({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (!isInView) return

    const start = 0
    const duration = 900
    const startedAt = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startedAt
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = Math.round(start + (value - start) * eased)
      setCount(next)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <p ref={ref} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
      {prefix}
      {count}
      {suffix}
    </p>
  )
}

export function NeedsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">¿Qué Necesitas?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Identifica tu situación y descubre qué servicio se ajusta mejor a tus necesidades
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {needsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card
                className={`group relative h-full overflow-visible border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  card.featured
                    ? "border-success/70 shadow-lg shadow-success/10 hover:shadow-success/20"
                    : "border-border/60 shadow-md shadow-primary/5 hover:shadow-info/20"
                }`}
              >
                {card.badges?.length ? (
                  <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {card.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex rounded-full border-2 border-background bg-primary px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-md shadow-primary/25"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${card.cardTone} opacity-80`} />
                <div className={`relative h-full p-5 sm:p-6 ${card.badges?.length ? "pt-8 sm:pt-9" : ""}`}>

                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2.5 ${card.iconTone}`}>
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-card-foreground">{card.title}</h3>
                  </div>

                  <div className="mt-4 rounded-xl border border-accent/40 bg-accent/15 p-4 text-sm leading-relaxed text-foreground/90 backdrop-blur-sm">
                    <strong>{card.problemTitle}</strong> {card.problemText}
                  </div>

                  <div className="mt-4 rounded-xl border border-border/60 bg-card/90 p-4 shadow-sm sm:p-5">
                    <p className="text-base font-semibold text-success">→ {card.solutionTitle}</p>
                    <ul className="mt-3 space-y-2">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/90 sm:text-base">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <details className="mt-4 sm:mt-3 rounded-lg border border-border/60 bg-card/70 p-3">
                      <summary className="cursor-pointer text-sm font-semibold text-foreground/85">
                        Ver contexto SEO y negocio
                      </summary>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-muted-foreground">{card.seoDetail}</p>
                        <div className="flex flex-wrap gap-2">
                          {card.seoLinks.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="inline-flex rounded-full border border-info/25 bg-info/10 px-3 py-1 text-xs text-info hover:bg-info/15"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </details>

                    <div className={`${card.priceOffset ?? "mt-5"} rounded-lg border border-primary/20 bg-primary/10 p-3`}>
                      <p className="text-2xl font-bold text-primary">{card.price}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={card.ctaHref}
                        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 group-hover:translate-x-0.5 ${card.ctaTone}`}
                      >
                        <span>{card.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                      {card.secondaryCtaLabel && card.secondaryCtaHref ? (
                        <a
                          href={card.secondaryCtaHref}
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-info/40 bg-info/10 px-5 py-3 text-sm font-semibold text-info transition-colors hover:bg-info/15"
                        >
                          <span>{card.secondaryCtaLabel}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-muted-foreground">Ideal si tienes:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.chips.map((chip) => (
                        <span key={chip} className="rounded-md border border-info/20 bg-info/10 px-3 py-1 text-xs text-info">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
            ¿Por Qué Tu Sitio Web No Está Vendiendo?
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex h-full flex-col items-center"
            >
              <CountUpMetric value={32} prefix="+" suffix="%" />
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                rebote si tu sitio tarda 3 segundos vs 1 segundo en cargar
              </p>
              <p className="mt-6 self-center rounded-full bg-info/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-info/80 md:mt-auto">
                Fuente: Google
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="flex h-full flex-col items-center"
            >
              <CountUpMetric value={90} prefix="+" suffix="%" />
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                rebote si el tiempo de carga llega a 5 segundos
              </p>
              <p className="mt-6 self-center rounded-full bg-info/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-info/80 md:mt-auto">
                Fuente: Google
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="flex h-full flex-col items-center"
            >
              <CountUpMetric value={53} suffix="%" />
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                de usuarios móviles abandona sitios que tardan más de 3 segundos
              </p>
              <p className="mt-6 self-center rounded-full bg-info/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-info/80 md:mt-auto">
                Fuente: Google Mobile Study
              </p>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
