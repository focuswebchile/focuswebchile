"use client"

import { Card } from "@/components/ui/card"
import { SearchCheck, Gauge, Code2, Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const cards = [
  {
    title: "Diagnóstico SEO Técnico",
    description:
      "Revisión inicial para detectar frenos técnicos en SEO, velocidad y estructura. Recibes prioridades claras para decidir el siguiente paso.",
    icon: SearchCheck,
    tone: "from-primary/20 to-primary/5",
    iconTone: "bg-primary/15 text-primary",
    bullets: [
      "H1",
      "H2",
      "Meta descripción",
      "Alt text",
      "JSON-LD",
    ],
    seoDetail:
      "En esta etapa revisamos la estructura semántica de la página, consistencia de headings, señales on-page y marcado estructurado para detectar fricciones que afectan visibilidad y conversión.",
    highlight: {
      label: "Diagnóstico inicial",
      value: "GRATIS",
      subtext: "",
      valueClass: "mt-3",
    },
    cta: {
      label: "Conocer auditoría SEO",
      href: "/servicios/auditoria-seo-tecnico",
      external: false,
    },
    relatedLinks: [
      { label: "Ver metodología completa", href: "/metodologia" },
      { label: "Preguntas frecuentes SEO", href: "/faq" },
    ],
  },
  {
    title: "Optimización de Velocidad",
    description:
      "Mejoramos Core Web Vitals para reducir tiempos de carga en móvil y desktop. Optimizamos imágenes, lazy loading, caché, CDN y código para rendimiento sostenido.",
    icon: Gauge,
    tone: "from-info/20 to-info/5",
    iconTone: "bg-info/15 text-info",
    bullets: [
      "Análisis PageSpeed Insights",
      "Optimización de imágenes WebP",
      "Implementación de caché y CDN",
      "Meta: PageSpeed 90+ en móvil",
    ],
    seoDetail:
      "La optimización se prioriza por impacto real: primero los bloqueadores de carga, luego recursos pesados y finalmente mejoras finas para estabilidad y experiencia móvil.",
    highlight: {
      label: "Mejora típica",
      value: "20%–60%",
      subtext: "menos tiempo de carga según el estado inicial",
    },
    cta: {
      label: "Ver optimización",
      href: "/servicios/optimizacion-velocidad-web",
      external: false,
    },
    relatedLinks: [
      { label: "Guía de optimización web", href: "/blog/errores-paginas-web-pymes-chile" },
      { label: "Ver todos los artículos", href: "/blog" },
    ],
  },
  {
    title: "Desarrollo Web",
    description:
      "Creamos o renovamos tu sitio con base técnica sólida desde el inicio: diseño profesional, velocidad, SEO técnico y arquitectura escalable para crecer.",
    icon: Code2,
    tone: "from-amber-200/40 to-amber-50/20",
    iconTone: "bg-amber-200/40 text-amber-700",
    bullets: [
      "Diseño profesional a medida",
      "PageSpeed 90+ desde día 1",
      "SEO técnico integrado",
      "Landing, corporativo o e-commerce",
    ],
    seoDetail:
      "Cuando desarrollamos desde cero dejamos base técnica preparada para posicionamiento: estructura limpia, performance inicial sólida y arquitectura escalable para crecer sin rehacer todo.",
    highlight: {
      label: "Desde",
      value: "$180.000",
      subtext: "CLP pago único",
    },
    cta: {
      label: "Conocer desarrollo web",
      href: "/servicios/desarrollo-web",
      external: false,
    },
    relatedLinks: [
      { label: "Explorar landing pages", href: "/landing-page" },
      { label: "Ver paquetes y precios", href: "/servicios/desarrollo-web" },
    ],
  },
]

export function MainServicesSection() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null)
  const [lightMotion, setLightMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)")
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncMotion = () => {
      setLightMotion(mobileQuery.matches || reducedMotionQuery.matches)
    }

    syncMotion()

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", syncMotion)
      reducedMotionQuery.addEventListener("change", syncMotion)
      return () => {
        mobileQuery.removeEventListener("change", syncMotion)
        reducedMotionQuery.removeEventListener("change", syncMotion)
      }
    }

    mobileQuery.addListener(syncMotion)
    reducedMotionQuery.addListener(syncMotion)
    return () => {
      mobileQuery.removeListener(syncMotion)
      reducedMotionQuery.removeListener(syncMotion)
    }
  }, [])

  const toggleCardDetail = (index: number) => {
    setOpenCardIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {lightMotion ? (
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-light px-4">
              Especializados en optimización técnica para que tu sitio web genere resultados reales
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty font-light px-4">
              Especializados en optimización técnica para que tu sitio web genere resultados reales
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <div key={card.title}>
              <Card className="group h-full border-border/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40">
                <div className={`bg-gradient-to-br ${card.tone} p-6 sm:p-8 lg:p-7 flex h-full flex-col gap-6 lg:gap-5 transition-transform duration-300`}>
                  <div className="flex items-start gap-3.5">
                    <div className={`rounded-xl p-3 ${card.iconTone}`}>
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl sm:text-[2rem] font-bold leading-tight tracking-tight">{card.title}</h3>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{card.description}</p>

                  <ul className={`space-y-3 ${index === 2 ? "lg:space-y-4 lg:pt-1" : ""}`}>
                    {card.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <Check className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/80" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 2 ? <div className="hidden lg:block h-4" /> : null}

                  <div className="rounded-lg border border-border/60 bg-card/70 p-3">
                    <button
                      type="button"
                      onClick={() => toggleCardDetail(index)}
                      aria-expanded={openCardIndex === index}
                      className="w-full cursor-pointer text-left text-sm font-semibold text-foreground/85"
                    >
                      Ver detalle técnico
                    </button>
                    {openCardIndex === index ? (
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-muted-foreground">{card.seoDetail}</p>
                        <div className="flex flex-wrap gap-2">
                          {card.relatedLinks.map((link) => (
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
                    ) : null}
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="min-h-[132px] rounded-2xl border border-white/40 bg-white/30 px-5 pb-5 pt-7 text-center transition-colors duration-300 group-hover:bg-white/40">
                      <p className="text-sm text-foreground/75">{card.highlight.label}</p>
                      <p className={`${card.highlight.valueClass ?? "mt-1"} text-4xl font-extrabold leading-none tracking-tight`}>
                        {card.highlight.value}
                      </p>
                      <p className={`mt-2 text-sm text-foreground/70 ${card.highlight.subtext ? "" : "invisible"}`}>
                        {card.highlight.subtext || "placeholder"}
                      </p>
                    </div>

                    <a
                      href={card.cta.href}
                      {...(card.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/90"
                    >
                      <span>{card.cta.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
