"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const featuredCase = {
  badge: "Caso de Rescate SEO",
  name: "Equipo ABCIS",
  role: "Gestión y Operaciones · abcis.cl",
  project: "Recuperación SEO · Desindexación Masiva · Backend Seguro",
  content:
    "Nuestro sitio fue hackeado y millones de páginas de spam se indexaron en Google, destruyendo nuestra visibilidad y credibilidad por completo. FocusWeb diagnosticó la raíz del ataque, ejecutó una limpieza masiva de indexación, reorganizó toda la arquitectura y desarrolló un backend personalizado ultra seguro desde cero. Pasamos de catástrofe total a sitio limpio, rápido y blindado.",
  rating: 5,
  metrics: [
    { label: "Páginas spam desindexadas", value: "+1 M" },
    { label: "Backend construido desde cero", value: "100%" },
    { label: "Incidentes tras la entrega", value: "0" },
  ],
  initials: "AB",
}

const testimonials = [
  {
    name: "Álvaro Careño",
    role: "Fundador de Tiny Van · Chile",
    project: "Diseño Web · SEO · Campaña",
    content:
      "En solo 2 semanas tenía mi tienda online funcionando. El tráfico superó mis expectativas y el diseño quedó buenísimo. Feliz de seguir trabajando con Felipe.",
    rating: 5,
    avatar: "/alvaro.webp",
  },
  {
    name: "Verki Bambas",
    role: "Fundadora de Stay Loco · Rep. Checa",
    project: "Reestructuración Técnica · Hero · SEO Internacional",
    content:
      "Coordinamos todo desde Europa y fue impecable. Felipe reestructuró la arquitectura técnica, reordenó el SEO y rediseñó el hero. El resultado fue inmediato: mejor rendimiento, mejor posicionamiento y una base sólida para crecer internacionalmente.",
    rating: 5,
    avatar: "/verki.webp",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 space-y-3 text-center sm:mb-16"
        >
          <h2 className="text-3xl font-extrabold text-balance px-4 sm:text-4xl md:text-5xl">
            Resultados reales de{" "}
            <span className="text-primary">clientes reales</span>
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
            Desde emprendedores en Chile hasta empresas con ataques de seguridad críticos
          </p>
        </motion.div>

        {/* ── CASO PROTAGONISTA: ABCIS ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative overflow-hidden rounded-xl bg-foreground text-background">

            {/* Crisis badge */}
            <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/15 px-3 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-400">
                {featuredCase.badge}
              </span>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-start lg:p-12">

              {/* Left: quote + metrics */}
              <div className="space-y-6">
                <Stars count={featuredCase.rating} />

                <blockquote className="max-w-3xl text-lg font-medium leading-relaxed text-background/90 sm:text-xl lg:text-2xl lg:leading-snug">
                  &ldquo;{featuredCase.content}&rdquo;
                </blockquote>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-3 border-t border-background/15 pt-6 sm:gap-6">
                  {featuredCase.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-black text-primary sm:text-3xl lg:text-4xl">{m.value}</p>
                      <p className="mt-1 text-[11px] leading-tight text-background/50 sm:text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: author card */}
              <div className="flex items-center gap-4 lg:min-w-[200px] lg:flex-col lg:items-start lg:gap-4 lg:pt-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-xl font-black text-primary">
                  {featuredCase.initials}
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-background">{featuredCase.name}</p>
                  <p className="text-sm text-background/55">{featuredCase.role}</p>
                  <div className="mt-3 inline-flex rounded-md border border-primary/30 bg-primary/15 px-3 py-1">
                    <span className="text-xs font-semibold text-primary">{featuredCase.project}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── TESTIMONIOS SECUNDARIOS ────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full border-border bg-card p-5 transition-shadow duration-300 hover:shadow-lg sm:p-6">
                <div className="space-y-4">
                  <Stars count={t.rating} />

                  <p className="text-sm leading-relaxed text-foreground/85 text-pretty sm:text-base">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={88}
                          height={88}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center rounded-md border border-primary/20 bg-primary/10 px-3 py-1">
                      <span className="text-xs font-semibold text-primary">{t.project}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
