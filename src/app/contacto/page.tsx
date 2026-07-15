import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ContactSection } from "@/components/contact-section"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { Clock3, SearchCheck, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto SEO Técnico y Desarrollo Web Chile | FocusWeb",
  description: "Escríbeme y te respondo en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/contacto",
    title: "Contacto SEO Técnico y Desarrollo Web Chile | FocusWeb",
    description: "Escríbeme y te respondo en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-home.png?v=2026-01-19",
        width: 1200,
        height: 630,
        alt: "FocusWeb Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto SEO Técnico y Desarrollo Web Chile | FocusWeb",
    description: "Escríbeme y te respondo en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function ContactoPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contacto | FocusWeb",
    url: "https://focusweb.cl/contacto",
    description:
      "Escríbeme y te respondo en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
    inLanguage: "es-CL",
    isPartOf: {
      "@type": "WebSite",
      url: "https://focusweb.cl",
      name: "FocusWeb Chile",
    },
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://focusweb.cl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contacto",
        item: "https://focusweb.cl/contacto",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <h1 className="sr-only">Contacto | Focus Web</h1>
        <section aria-label="Breadcrumb" className="px-4 pt-24 sm:px-6 md:pt-28">
          <div className="container mx-auto max-w-3xl">
            <SiteBreadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Contacto" },
              ]}
            />
          </div>
        </section>
        <ContactSection />
        <section className="pb-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Qué pasa después de que me escribas
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-foreground/70 sm:text-base">
                Leo tu mensaje y te respondo con una primera impresión y el siguiente paso que te
                recomendaría: diagnóstico técnico, optimización o desarrollo, según lo que me cuentes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">Respuesta rápida</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Te respondo en menos de 24 horas hábiles.
                  </p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <SearchCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">Evaluación inicial</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Reviso tu caso y te digo qué conviene priorizar primero.
                  </p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">Sin compromiso</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Te cuento con claridad qué conviene, sin venderte nada a la fuerza ni letra chica.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Qué información me ayuda a darte una respuesta más útil
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-foreground/75 sm:text-base">
                Mientras más contexto me compartas, mejor te puedo orientar desde el primer mensaje. No
                necesitas un brief técnico: con que me cuentes tu objetivo en simple, ya puedo saber si
                conviene partir por auditoría, optimización o desarrollo.
              </p>
              <p className="mt-5 text-sm font-medium text-foreground/85 sm:text-base">Checklist rápido para escribirme:</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                <li className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground/85 sm:text-base">
                  Objetivo principal: más tráfico, más contactos o mejorar velocidad
                </li>
                <li className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground/85 sm:text-base">
                  URL actual de tu sitio (si ya está publicado)
                </li>
                <li className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground/85 sm:text-base">
                  Problema que hoy te frena: SEO, rendimiento o estructura
                </li>
                <li className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground/85 sm:text-base">
                  Plazo estimado y nivel de urgencia del proyecto
                </li>
              </ul>
              <p className="mt-6 text-sm text-foreground/75 sm:text-base">
                Si todavía no tienes claro qué servicio necesitas, revisa mis{" "}
                <a href="/servicios" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  servicios de SEO y posicionamiento web
                </a>{" "}
                o hazme una consulta inicial en{" "}
                <a href="/metodologia" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  metodología
                </a>
                . Así llegas con un diagnóstico base y avanzamos más rápido.
              </p>
            </div>
          </div>
        </section>
        <section className="pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-foreground/75 sm:text-base md:max-w-none md:whitespace-nowrap">
            Si buscas una página clara y enfocada en resultados, revisa mis{" "}
            <a
              href="/landing-page"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              landing pages enfocadas en conversión
            </a>
            .
          </div>
        </section>
        <Footer />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
