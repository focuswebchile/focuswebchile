"use client"

import Image from "next/image"
import Link from "next/link"

export function HomeSocialProofSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-3xl border border-border/60 bg-card/90 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-info/25 bg-info/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-info">
                Prueba social
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Datos reales de tráfico orgánico desde Google
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                Este caso muestra el comportamiento de usuarios que llegaron desde búsquedas en Google y cómo
                interactúan con el sitio después de entrar.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-success/25 bg-success/10 px-4 py-3">
                  <span className="inline-flex rounded-full bg-success px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    GA4
                  </span>
                  <p className="mt-2 text-2xl font-bold text-foreground">+99</p>
                  <p className="mt-1 text-sm text-foreground/85">
                    personas llegaron desde búsquedas orgánicas
                  </p>
                </div>
                <div className="rounded-xl border border-info/25 bg-info/10 px-4 py-3">
                  <span className="inline-flex rounded-full bg-info px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    GA4
                  </span>
                  <p className="mt-2 text-2xl font-bold text-foreground">6 min</p>
                  <p className="mt-1 text-sm text-foreground/85">
                    promedio de lectura e interacción
                  </p>
                </div>
                <div className="rounded-xl border border-amber-300/40 bg-amber-100/50 px-4 py-3">
                  <span className="inline-flex rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    GA4
                  </span>
                  <p className="mt-2 text-2xl font-bold text-foreground">2.9</p>
                  <p className="mt-1 text-sm text-foreground/85">
                    páginas visitadas por usuario
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Datos de interacción orgánica que reflejan búsqueda activa, lectura profunda y evaluación antes de
                tomar una decisión.
              </p>
              <div className="mt-3 inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-primary">
                  Período medido: 1 nov 2025 - 18 feb 2026
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Auditar mi sitio
                </Link>
                <Link
                  href="/servicios/optimizacion-velocidad-web"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Ver servicio completo
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted/40">
                <Image
                  src="/datos-Ga4.webp"
                  alt="Captura de métricas GA4 del caso real"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Total de usuarios por primer grupo de canales (Grupo de canales predeterminado).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
