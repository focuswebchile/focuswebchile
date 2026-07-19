"use client"

import { Card } from "@/components/ui/card"
import { SearchCheck, Gauge, Code2, Check, ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

const cards = [
  {
    title: "Diagnóstico SEO Técnico",
    description:
      "Si no sabes por qué tu sitio no aparece en Google, empezamos por ahí. Antes de proponerte nada, reviso qué te está frenando y te lo explico en simple.",
    icon: SearchCheck,
    tone: "from-primary/20 to-primary/5",
    iconTone: "bg-primary/15 text-primary",
    bullets: [
      "H1 y H2 duplicados o mal estructurados",
      "Meta descripción y alt text",
      "Datos estructurados (JSON-LD)",
    ],
    seoDetail:
      "Reviso la estructura semántica de tu página, la consistencia de los headings y el marcado estructurado, buscando lo que le está costando visibilidad y clientes a tu sitio.",
    highlight: {
      label: "Diagnóstico inicial",
      value: "GRATIS",
      subtext: "",
      valueClass: "mt-3",
    },
    cta: {
      label: "Pedir mi diagnóstico gratis",
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
      "Si tu sitio carga lento, estás perdiendo clientes antes de que lean una palabra. Reviso imágenes, código y caché, y empiezo por lo que más te está costando.",
    icon: Gauge,
    tone: "from-muted to-muted/30",
    iconTone: "bg-foreground/8 text-foreground/70",
    bullets: [
      "Análisis PageSpeed Insights",
      "Optimización de imágenes a WebP",
      "Meta: PageSpeed 90+ en móvil",
    ],
    seoDetail:
      "Priorizo por impacto real: primero lo que bloquea la carga, después los recursos pesados, y al final los ajustes finos para que se sienta bien en el celular.",
    highlight: {
      label: "Mejora típica",
      value: "20%–60%",
      subtext: "menos tiempo de carga según el estado inicial",
    },
    cta: {
      label: "Ver cómo lo soluciono",
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
      "Si no tienes sitio, o el que tienes no te representa, lo construyo pensando en tu negocio real, no en una plantilla. Diseño, velocidad y SEO vienen incluidos desde el día uno, no como extras.",
    icon: Code2,
    tone: "from-accent/25 to-accent/5",
    iconTone: "bg-accent/20 text-accent",
    bullets: [
      "Diseño profesional a medida",
      "PageSpeed 90+ desde día 1",
      "SEO técnico integrado",
    ],
    seoDetail:
      "Cuando construyo un sitio desde cero, dejo la base técnica lista para crecer: estructura limpia, buen rendimiento desde el primer día y una arquitectura que no vas a tener que rehacer en un año.",
    highlight: {
      label: "Desde",
      value: "$180.000",
      subtext: "CLP pago único",
    },
    cta: {
      label: "Ver cómo construyo tu sitio",
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

  const toggleCardDetail = (index: number) => {
    setOpenCardIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Por dónde empezar
          </p>
          <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            ¿Qué te está pasando<br />
            <span className="text-primary">con tu sitio?</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Elige la situación que más se parece a la tuya. Si no estás seguro, conversamos y lo decidimos juntos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.07} className="h-full">
              <Card className="group flex h-full flex-col border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40">
                <div className={`bg-gradient-to-br ${card.tone} p-6 sm:p-8 lg:p-7 flex h-full flex-col gap-6 lg:gap-5 transition-transform duration-300`}>
                  <div className="flex items-start gap-3.5">
                    <div className={`rounded-xl p-3 ${card.iconTone}`}>
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl sm:text-[2rem] font-bold leading-tight tracking-tight">{card.title}</h3>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{card.description}</p>

                  <ul className="space-y-3">
                    {card.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <Check className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/80" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleCardDetail(index)}
                      aria-expanded={openCardIndex === index}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
                    >
                      Ver detalle técnico
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${openCardIndex === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openCardIndex === index ? (
                      <div className="mt-3 space-y-2 rounded-lg border border-border/60 bg-card/70 p-3">
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
                    <div className="min-h-[132px] rounded-xl border border-white/40 bg-white/30 px-5 pb-5 pt-7 text-center transition-colors duration-300 group-hover:bg-white/40">
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
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-white/90"
                    >
                      <span>{card.cta.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Recién empezando?{" "}
            <a href="/crear-pagina-web-chile" className="font-medium text-primary hover:underline">
              ¿Cómo crear una página web en Chile?
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
