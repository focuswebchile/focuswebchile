import { Reveal } from "@/components/ui/reveal"

export function ProcessAuditCta() {
  return (
    <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl rounded-xl border border-border bg-foreground p-6 text-center sm:p-8 lg:p-10">
          <h3 className="text-2xl font-extrabold text-background sm:text-3xl">
            ¿No estás seguro de qué necesitas?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-background/60 sm:text-base">
            Solicita un diagnóstico inicial y te mostramos con claridad qué está frenando tu sitio.
          </p>
          <a
            href="/metodologia"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 sm:text-base"
          >
            Ir al diagnóstico gratuito
          </a>
        </Reveal>
      </div>
    </section>
  )
}
