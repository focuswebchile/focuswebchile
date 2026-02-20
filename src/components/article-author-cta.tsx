import Image from "next/image"
import Link from "next/link"

export function ArticleAuthorCta() {
  return (
    <aside className="mt-10 rounded-3xl border border-border/60 bg-white/85 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border/70">
          <Image
            src="/felipe-ibar.webp"
            alt="Felipe Ibar, fundador de FocusWeb"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Felipe Ibar · Fundador de FocusWeb</p>
          <p className="mt-1 text-sm text-foreground/75">
            Ayudo a pymes a ordenar los pasos técnicos y de SEO para que su sitio deje de ser una carga y empiece a
            generar resultados reales.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/metodologia"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Auditar gratis mi sitio
        </Link>
        <a
          href="https://wa.me/420733796959"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </aside>
  )
}

