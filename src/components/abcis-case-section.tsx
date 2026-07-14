import Image from "next/image"
import { Star, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

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
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function AbcisCaseSection() {
  return (
    <section id="caso-abcis" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Caso real
          </p>
          <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            De catástrofe a sitio blindado
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card">
            <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">
                {featuredCase.badge}
              </span>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-start lg:p-12">
              <div className="space-y-6">
                <Stars count={featuredCase.rating} />

                <blockquote className="max-w-3xl text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl lg:text-2xl lg:leading-snug">
                  &ldquo;{featuredCase.content}&rdquo;
                </blockquote>

                <div className="grid grid-cols-3 gap-3 border-t border-border pt-6 sm:gap-6">
                  {featuredCase.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-black text-primary sm:text-3xl lg:text-4xl">{m.value}</p>
                      <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 lg:min-w-[200px] lg:flex-col lg:items-start lg:gap-4 lg:pt-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/5 p-2">
                  <Image
                    src="/logoabcischile.png"
                    alt="Logo ABCIS"
                    width={138}
                    height={98}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-foreground">{featuredCase.name}</p>
                  <p className="text-sm text-muted-foreground">{featuredCase.role}</p>
                  <div className="mt-3 inline-flex rounded-md border border-primary/30 bg-primary/10 px-3 py-1">
                    <span className="text-xs font-semibold text-primary">{featuredCase.project}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
