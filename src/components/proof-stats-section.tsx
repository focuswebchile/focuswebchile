"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"

const impactRows = [
  { second: "1 segundo", label: "Base", width: "max(8%, 44px)", pct: "0%", barClass: "bg-primary", pctClass: "text-primary", note: "Experiencia óptima" },
  { second: "3 segundos", label: "+32%", width: "32%", pct: "+32%", barClass: "bg-accent", pctClass: "text-accent", note: "1 de cada 3 visitantes adicionales se va" },
  { second: "5 segundos", label: "+90%", width: "90%", pct: "+90%", barClass: "bg-orange-500", pctClass: "text-orange-600", note: "Casi el doble de usuarios abandona" },
  { second: "10 segundos", label: "+123%", width: "100%", pct: "+123%", barClass: "bg-foreground", pctClass: "text-foreground", note: "Catastrófico: más del doble se va" },
]

export function ProofStatsSection() {
  const [barsReady, setBarsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setBarsReady(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-12 space-y-3 text-center sm:mb-16">
          <h2 className="font-display text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            No prometo resultados.<br />
            <span className="text-primary">Te muestro los datos.</span>
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
            Esto es lo que le pasó a un cliente real — no promesas genéricas.
          </p>
        </Reveal>

        {/* Lanzamiento y estructura */}
        <Reveal>
          <Card className="grid gap-8 border-border bg-card p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Caso real
              </p>
              <h3 className="font-display mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground">
                Así ayudé a Tiny Van a lanzar su tienda online
              </h3>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-5 sm:gap-6">
                <div>
                  <p className="text-lg font-bold text-foreground/80 sm:text-xl lg:text-2xl">2 semanas</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">De la primera reunión a su tienda publicada.</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground/80 sm:text-xl lg:text-2xl">Diseño propio</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">Cada sección pensada para sus productos, sin plantillas genéricas.</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground/80 sm:text-xl lg:text-2xl">Proceso claro</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">Avances ordenados y decisiones claras en cada etapa.</p>
                </div>
              </div>

              <a
                href="https://tinyvan.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                Ver página
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted/40">
                <Image
                  src="/tinyvan-home.webp"
                  alt="Home de Tiny Van en producción"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Impacto de velocidad */}
        <Reveal delay={0.08} className="mt-8">
          <Card className="border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Impacto de velocidad
                </p>
                <h3 className="mt-4 text-3xl font-black leading-[0.95] tracking-tighter text-foreground sm:text-4xl">
                  Cada segundo<br /><span className="text-primary">cuesta clientes.</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <strong className="text-foreground">53% de usuarios móviles</strong> abandona sitios
                  que tardan más de 3 segundos. En Chile, el 70% del tráfico web es móvil.
                </p>
              </div>

              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Probabilidad de rebote según tiempo de carga
                </p>
                <div className="space-y-5">
                  {impactRows.map((row, index) => (
                    <div key={row.second}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-foreground/60 sm:text-sm">{row.second}</span>
                        <span className={`text-sm font-bold sm:text-base ${row.pctClass}`}>{row.pct}</span>
                      </div>
                      <div className="h-8 w-full overflow-hidden rounded-sm bg-muted">
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
                      <p className="mt-1 text-xs text-muted-foreground">{row.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
