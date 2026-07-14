import { CheckCircle2, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const bullets = [
  "Antes de proponerte nada, quiero entender qué te está pasando con tu sitio.",
  "Precios transparentes en CLP — sin sorpresas ni contratos largos.",
  "Trabajo con todo Chile, 100% remoto — sin reuniones que te hagan perder tiempo.",
]

export function ValuePropDarkSection() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Por qué trabajar conmigo
            </p>
            <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
              No vendo paquetes.<br />
              Diagnostico primero.
            </h2>
          </div>

          <ul className="mx-auto mt-10 max-w-2xl space-y-5 text-left md:max-w-3xl lg:max-w-4xl">
            {bullets.map((bullet, i) => (
              <Reveal key={bullet} delay={i * 0.07} as="li" className="flex items-start gap-3 md:justify-center">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base leading-relaxed text-foreground/80 sm:text-lg md:whitespace-nowrap">{bullet}</span>
              </Reveal>
            ))}
          </ul>

          <a
            href="/metodologia"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
          >
            Auditoría gratuita
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
