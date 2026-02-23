"use client"

import { Card } from "@/components/ui/card"
import { Search, Code2, Rocket, LifeBuoy } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico estratégico",
    description:
      "Auditamos tu situación actual, definimos prioridades y ordenamos el plan antes de ejecutar.",
    focus: "Qué revisamos",
    focusText: "Objetivos, estado técnico y oportunidades reales",
    color: "from-primary to-accent",
    iconColor: "text-primary",
    step: "01",
  },
  {
    icon: Code2,
    title: "Implementación técnica",
    description:
      "Aplicamos lo definido según tu caso: desarrollo desde cero u optimización de un sitio existente.",
    focus: "Qué hacemos",
    focusText: "Cambios técnicos priorizados y medibles",
    color: "from-accent to-primary",
    iconColor: "text-accent",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Publicación y validación",
    description:
      "Publicamos los cambios y validamos funcionamiento, rendimiento y trazabilidad para salir con control.",
    focus: "Qué validamos",
    focusText: "Carga, formularios, indexación y medición",
    color: "from-primary via-accent to-primary",
    iconColor: "text-primary",
    step: "03",
  },
  {
    icon: LifeBuoy,
    title: "Soporte y mejora continua",
    description:
      "Acompañamos post-lanzamiento con ajustes, mejoras y soporte cercano para mantener resultados.",
    focus: "Qué sigue",
    focusText: "Correcciones, iteración y evolución del sitio",
    color: "from-accent to-primary",
    iconColor: "text-accent",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="hidden sm:block absolute top-10 left-20 w-56 h-56 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            Un proceso{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              simple y claro
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-[1.05rem] lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Diagnóstico, implementación, validación y soporte en una ruta clara para crear o mejorar tu sitio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connecting line - show only on extra large screens */}
          <div className="hidden xl:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative w-full max-w-[420px] mx-auto md:max-w-none"
            >
              <Card className="relative h-full p-6 sm:p-8 glass hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-border/60 overflow-hidden group border-2 border-emerald-300 sm:border sm:border-border/50 text-left">
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-7xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>

                <div className="relative space-y-5 sm:space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-card rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <step.icon
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${step.iconColor}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-xs sm:text-sm font-mono text-muted-foreground">{step.step}</span>
                      <h3 className="text-xl sm:text-2xl md:text-[1.25rem] lg:text-[1.45rem] font-bold leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {step.focus}
                    </div>
                    <p className="text-sm sm:text-base md:text-[0.95rem] lg:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <p className="border-t border-border/50 pt-3 text-xs sm:text-sm text-foreground/80">
                      {step.focusText}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
