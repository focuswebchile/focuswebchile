import Link from "next/link"

export function ServicesQuickNav() {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Comienza según tu caso</p>
      <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">Elige el camino más útil para ti ahora</h2>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <Link
          href="/servicios/auditoria-seo-tecnico"
          className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
        >
          Conocer auditoría SEO
        </Link>
        <Link
          href="/metodologia"
          className="inline-flex rounded-full border border-success/35 bg-success/10 px-4 py-2 text-sm font-semibold text-success transition-colors hover:bg-success/15"
        >
          Ir a auditar gratis
        </Link>
        <Link
          href="/precios"
          className="inline-flex rounded-full border border-info/35 bg-info/10 px-4 py-2 text-sm font-semibold text-info transition-colors hover:bg-info/15"
        >
          Ver precios de desarrollo web
        </Link>
      </div>
    </div>
  )
}
