"use client"

import { useEffect, useState } from "react"

const impactRows = [
  {
    second: "1 segundo",
    label: "Base",
    width: "max(8%, 44px)",
    pct: "0%",
    barClass: "bg-primary",
    pctClass: "text-primary",
    note: "Experiencia óptima",
  },
  {
    second: "3 segundos",
    label: "+32%",
    width: "32%",
    pct: "+32%",
    barClass: "bg-accent",
    pctClass: "text-accent",
    note: "1 de cada 3 visitantes adicionales se va",
  },
  {
    second: "5 segundos",
    label: "+90%",
    width: "90%",
    pct: "+90%",
    barClass: "bg-orange-500",
    pctClass: "text-orange-600",
    note: "Casi el doble de usuarios abandona",
  },
  {
    second: "10 segundos",
    label: "+123%",
    width: "100%",
    pct: "+123%",
    barClass: "bg-foreground",
    pctClass: "text-foreground",
    note: "Catastrófico: más del doble se va",
  },
]

export function DelayImpactSection() {
  const [barsReady, setBarsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setBarsReady(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-20">

          {/* ── LEFT: editorial headline ─────────────────────────── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Impacto de velocidad
            </p>
            <h2 className="mt-4 text-5xl font-black leading-[0.88] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              Cada<br />
              segundo<br />
              cuesta<br />
              <span className="text-primary">clientes.</span>
            </h2>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-7xl font-black leading-none tracking-tighter text-foreground sm:text-8xl">
                53%
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
                de usuarios móviles abandona sitios que tardan más de 3&nbsp;segundos.
                En Chile, el&nbsp;70% del tráfico web es móvil.
              </p>
              <div className="mt-4 inline-flex items-center rounded-lg border border-border bg-muted px-3 py-1.5">
                <span className="text-xs font-semibold text-muted-foreground">Fuente: Google Mobile Study</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: bar chart ─────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Probabilidad de rebote según tiempo de carga
            </p>

            <div className="space-y-6">
              {impactRows.map((row, index) => (
                <div key={row.second}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-foreground/60 sm:text-sm">
                      {row.second}
                    </span>
                    <span className={`text-sm font-bold sm:text-base ${row.pctClass}`}>
                      {row.pct}
                    </span>
                  </div>
                  <div className="h-9 w-full overflow-hidden rounded-sm bg-muted">
                    <div
                      className={`flex h-full items-center px-3 text-xs font-bold text-white ${row.barClass}`}
                      style={{
                        width: barsReady ? row.width : "0%",
                        transitionProperty: "width",
                        transitionDuration: "700ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        transitionDelay: `${150 + index * 100}ms`,
                      }}
                    >
                      {row.label}
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{row.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border-l-4 border-accent bg-accent/10 p-4">
              <p className="text-sm text-foreground/85 sm:text-base">
                <strong>En móviles es peor:</strong> el 53% abandona sitios que tardan más de 3&nbsp;s.
                En Chile, el 70% del tráfico web es móvil.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
