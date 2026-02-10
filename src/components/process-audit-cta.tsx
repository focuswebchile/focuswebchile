"use client"

export function ProcessAuditCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/90 via-primary to-info/90 p-6 text-center shadow-lg sm:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">¿No estás seguro qué necesitas?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
            Solicita un diagnóstico inicial y te mostramos con claridad qué está frenando tu sitio.
          </p>
          <a
            href="/metodologia"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90 sm:text-base"
          >
            Ir al diagnóstico
          </a>
        </div>
      </div>
    </section>
  )
}
