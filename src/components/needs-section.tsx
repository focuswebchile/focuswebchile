"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useInView } from "framer-motion"

function CountUpMetric({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (!isInView) return
    const duration = 900
    const startedAt = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startedAt
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <p ref={ref} className="text-4xl font-black tracking-tight text-primary sm:text-5xl">
      {prefix}{count}{suffix}
    </p>
  )
}

export function NeedsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            ¿Cuál es tu situación?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Identifica tu punto de partida y toma el camino correcto desde el primer paso.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">

          {/* ── TARJETA OSCURA: Ya Tengo Sitio (dominante) ─────── */}
          <div className="relative overflow-hidden rounded-xl bg-foreground p-6 sm:p-8">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-lg border border-primary/40 bg-primary/20 px-3 py-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Más común</span>
            </div>

            <h3 className="text-3xl font-black leading-tight tracking-tight text-background sm:text-4xl">
              Ya tengo sitio<br />que no convierte
            </h3>

            <p className="mt-3 text-base text-background/60">
              Carga lento, no aparece en Google o no genera ventas. El problema suele ser técnico.
            </p>

            <div className="mt-6 border-t border-background/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                → Necesitas Optimización
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Auditoría técnica SEO con prioridades claras",
                  "Corrección de Core Web Vitals y velocidad",
                  "Errores técnicos que frenan el posicionamiento",
                  "SEO on-page y estructura de contenidos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-background/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-background/10 pt-6">
              <p className="text-3xl font-black text-primary">Desde $111.000 CLP</p>
              <a
                href="/servicios/auditoria-seo-tecnico"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
              >
                Conocer auditoría SEO
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ── TARJETA CLARA: No Tengo Sitio (secundaria) ──────── */}
          <div className="rounded-xl border-2 border-border bg-card p-6 sm:p-8">

            <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              No tengo sitio<br />y quiero empezar
            </h3>

            <p className="mt-3 text-base text-muted-foreground">
              Quieres una base técnica sólida desde el día uno: velocidad, SEO y diseño profesional.
            </p>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-foreground/60">
                → Necesitas Desarrollo
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Diseño profesional adaptado a tu negocio",
                  "PageSpeed 90+ garantizado desde día 1",
                  "SEO técnico integrado en la arquitectura",
                  "Entrega en 2 semanas, soporte incluido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-3xl font-black text-foreground">Desde $180.000 CLP</p>
              <a
                href="/servicios/desarrollo-web"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-foreground/20 bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Ver precios y proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats block */}
        <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10">
          <h3 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
            Por qué la velocidad destruye (o construye) tu negocio
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <article className="flex h-full flex-col items-center">
              <CountUpMetric value={32} prefix="+" suffix="%" />
              <p className="mx-auto mt-3 max-w-[200px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                más rebote si tu sitio tarda 3 s en vez de 1 s
              </p>
              <span className="mt-6 rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground md:mt-auto">
                Fuente: Google
              </span>
            </article>
            <article className="flex h-full flex-col items-center">
              <CountUpMetric value={90} prefix="+" suffix="%" />
              <p className="mx-auto mt-3 max-w-[200px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                más rebote si el tiempo de carga llega a 5 segundos
              </p>
              <span className="mt-6 rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground md:mt-auto">
                Fuente: Google
              </span>
            </article>
            <article className="flex h-full flex-col items-center">
              <CountUpMetric value={53} suffix="%" />
              <p className="mx-auto mt-3 max-w-[200px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                de usuarios móviles abandona sitios que tardan más de 3 s
              </p>
              <span className="mt-6 rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground md:mt-auto">
                Fuente: Google Mobile Study
              </span>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}
