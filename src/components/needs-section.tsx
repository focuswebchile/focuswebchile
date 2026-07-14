import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function NeedsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="text-center">
          <h2 className="font-display text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            ¿Cuál es tu situación?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Identifica tu punto de partida y toma el camino correcto desde el primer paso.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">

          {/* ── TARJETA: Ya Tengo Sitio (dominante, tono claro con acento) ─────── */}
          <Reveal className="relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-primary/30 bg-primary/5 p-6 sm:p-8">

            {/* Badge */}
            <div className="mb-5 inline-flex self-start items-center rounded-lg border border-primary/40 bg-primary/15 px-3 py-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Más común</span>
            </div>

            <h3 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
              Ya tengo sitio<br />que no convierte
            </h3>

            <p className="mt-3 text-base text-muted-foreground">
              Carga lento, no aparece en Google o no genera ventas. El problema suele ser técnico.
            </p>

            <div className="mt-6 border-t border-primary/20 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                → Necesitas Optimización
              </p>
              <ul className="mt-4 mb-6 space-y-3">
                {[
                  "Auditoría técnica SEO con prioridades claras",
                  "Corrección de Core Web Vitals y velocidad",
                  "SEO on-page y estructura de contenidos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-primary/20 pt-6">
              <p className="text-3xl font-black text-primary">Desde $111.000</p>
              <a
                href="/servicios/auditoria-seo-tecnico"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
              >
                Conocer auditoría SEO
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* ── TARJETA CLARA: No Tengo Sitio (secundaria) ──────── */}
          <Reveal delay={0.07} className="flex h-full flex-col rounded-xl border-2 border-border bg-card p-6 sm:p-8">

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
              <ul className="mt-4 mb-6 space-y-3">
                {[
                  "Diseño profesional adaptado a tu negocio",
                  "PageSpeed 90+ garantizado desde día 1",
                  "Entrega en 2 semanas, soporte incluido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-border pt-6">
              <p className="text-3xl font-black text-foreground">Desde $180.000</p>
              <a
                href="/servicios/desarrollo-web"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-foreground/20 bg-background px-6 py-3.5 text-base font-bold text-foreground transition-colors hover:bg-muted"
              >
                Ver precios y proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
