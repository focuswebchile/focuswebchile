import { Search, Code2, Rocket, LifeBuoy } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico estratégico",
    description:
      "Auditamos tu situación actual, definimos prioridades y ordenamos el plan antes de ejecutar.",
    focus: "Qué revisamos",
    focusText: "Objetivos, estado técnico y oportunidades reales",
    step: "01",
  },
  {
    icon: Code2,
    title: "Implementación técnica",
    description:
      "Aplicamos lo definido según tu caso: desarrollo desde cero u optimización de un sitio existente.",
    focus: "Qué hacemos",
    focusText: "Cambios técnicos priorizados y medibles",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Publicación y validación",
    description:
      "Publicamos los cambios y validamos funcionamiento, rendimiento y trazabilidad para salir con control.",
    focus: "Qué validamos",
    focusText: "Carga, formularios, indexación y medición",
    step: "03",
  },
  {
    icon: LifeBuoy,
    title: "Soporte y mejora continua",
    description:
      "Acompañamos post-lanzamiento con ajustes, mejoras y soporte cercano para mantener resultados.",
    focus: "Qué sigue",
    focusText: "Correcciones, iteración y evolución del sitio",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">

        {/* Header — left-aligned editorial */}
        <Reveal className="mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Metodología
          </p>
          <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            Un proceso{" "}
            <span className="text-primary">simple</span>
            <br />
            y claro
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            Diagnóstico, implementación, validación y soporte en una ruta clara para crear o mejorar tu sitio
          </p>
        </Reveal>

        {/* Numbered steps list */}
        <div className="divide-y divide-border">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.06}
              as="div"
              className="grid grid-cols-1 gap-5 py-8 sm:py-10 md:grid-cols-[72px_1fr] lg:grid-cols-[80px_1fr_220px] lg:items-start lg:gap-8"
            >
              {/* Step number — typographic anchor */}
              <div>
                <span className="font-mono text-6xl font-black leading-none tracking-tighter text-foreground/10 lg:text-7xl">
                  {step.step}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                    <step.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
                {/* Focus block visible on mobile/tablet only */}
                <div className="mt-4 rounded-lg border border-border bg-card p-3 lg:hidden">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                    {step.focus}
                  </p>
                  <p className="mt-1 text-sm text-foreground/75">{step.focusText}</p>
                </div>
              </div>

              {/* Focus block — desktop only */}
              <div className="hidden rounded-lg border border-border bg-card p-4 lg:block">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  {step.focus}
                </p>
                <p className="mt-1.5 text-sm text-foreground/75">{step.focusText}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
