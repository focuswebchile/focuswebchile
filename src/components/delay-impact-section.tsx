"use client"

import { useEffect, useRef, useState } from "react"

const impactRows = [
  {
    second: "1 segundo",
    label: "Base",
    width: "max(10%, 52px)",
    right: "0%",
    barClass: "bg-success",
    rightClass: "text-success",
    note: "Sitio rápido = experiencia óptima",
  },
  {
    second: "3 segundos",
    label: "+32% rebote",
    width: "32%",
    right: "+32%",
    barClass: "bg-accent",
    rightClass: "text-accent",
    note: "1 de cada 3 visitantes adicionales se va",
  },
  {
    second: "5 segundos",
    label: "+90% rebote",
    width: "90%",
    right: "+90%",
    barClass: "bg-orange-500",
    rightClass: "text-orange-600",
    note: "Casi el doble de usuarios abandonan",
  },
  {
    second: "10 segundos",
    label: "+123% rebote",
    width: "100%",
    right: "+123%",
    barClass: "bg-foreground",
    rightClass: "text-foreground",
    note: "Catastrófico: más del doble se van",
  },
]

export function DelayImpactSection() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const [barsReady, setBarsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setBarsReady(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl rounded-3xl border border-border/50 bg-gradient-to-br from-primary/15 via-info/10 to-foreground/10 px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
            ¿Cuántos Clientes Pierdes por Cada Segundo de Retraso?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Datos de Google revelan que la velocidad de carga tiene impacto directo en tus ventas. No es opinión, es
            matemática.
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-info/25 bg-info/10 px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-sm text-foreground/85 sm:text-base">
              Si hoy piensas <strong>&quot;mi página web tarda mucho en cargar&quot;</strong>, aquí puedes ver qué impacto
              tiene y qué conviene priorizar primero.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-5 shadow-xl sm:p-8 lg:p-10" ref={barRef}>
          <h3 className="text-center text-2xl font-semibold text-card-foreground sm:text-3xl">
            Probabilidad de Rebote según Tiempo de Carga
          </h3>

          <div className="mt-8 space-y-7">
            {impactRows.map((row, index) => (
              <div
                key={row.second}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr_72px] sm:items-center sm:gap-4"
              >
                <p className="text-sm font-semibold text-foreground/90">{row.second}</p>

                <div>
                  <div className="h-9 w-full overflow-hidden rounded-md bg-muted">
                    <div
                      className={`flex h-full items-center justify-center text-xs font-bold text-white ${row.barClass}`}
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
                  <p className="mt-2 text-xs text-muted-foreground">{row.note}</p>
                </div>

                <p className={`text-sm font-bold sm:text-right ${row.rightClass}`}>{row.right}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-xl border-l-4 border-accent bg-accent/15 p-4 sm:p-5">
            <p className="text-sm text-foreground sm:text-base">
              <strong>En móviles es peor:</strong> el 53% de usuarios móviles abandona sitios que tardan más de 3
              segundos. En Chile, el 70% del tráfico web es móvil.
            </p>
          </div>

          <details className="mt-6 rounded-xl border border-border/60 bg-card/70 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-foreground/85">
              Ver explicación ampliada
            </summary>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>
                No todos los sitios parten en el mismo estado. Por eso trabajamos con prioridades: primero los
                bloqueadores críticos de carga, luego optimizaciones de recursos y finalmente ajustes de estabilidad.
              </p>
              <p>
                El objetivo no es solo subir métricas, sino mejorar experiencia real de usuario y capacidad de
                conversión en móviles y desktop.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="/metodologia"
                  className="inline-flex rounded-full border border-info/25 bg-info/10 px-3 py-1 text-xs text-info hover:bg-info/15"
                >
                  Ver metodología
                </a>
                <a
                  href="/blog"
                  className="inline-flex rounded-full border border-info/25 bg-info/10 px-3 py-1 text-xs text-info hover:bg-info/15"
                >
                  Leer artículos de optimización
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
