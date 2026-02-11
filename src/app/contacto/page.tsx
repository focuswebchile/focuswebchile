import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import FormOne from "@/components/ui/form-1"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { Clock3, SearchCheck, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | FocusWeb",
  description: "Escríbenos y recibe respuesta en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/contacto",
    title: "Contacto | FocusWeb",
    description: "Escríbenos y recibe respuesta en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
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
    title: "Contacto | FocusWeb",
    description: "Escríbenos y recibe respuesta en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
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
      "Escríbenos y recibe respuesta en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
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
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <SiteBreadcrumb
              className="mb-5"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Contacto" },
              ]}
            />
            <FormOne />
          </div>
        </section>
        <section className="pb-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Qué pasa después de enviar tu mensaje
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-foreground/70 sm:text-base">
                Te respondemos con una lectura inicial y el siguiente paso recomendado según tu caso:
                diagnóstico técnico, optimización o desarrollo.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">Respuesta rápida</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Tiempo estimado de respuesta: menos de 24 horas hábiles.
                  </p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <SearchCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">Evaluación inicial</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Revisamos tu contexto y detectamos qué conviene priorizar primero.
                  </p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">Sin compromiso</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Conversamos tu caso con claridad, sin ventas forzadas ni letra chica.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-foreground/75 sm:text-base">
            Si buscas una página clara y enfocada en resultados, revisa nuestras{" "}
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
