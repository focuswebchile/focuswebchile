import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import ProcessContent from "@/components/process/process-content"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Proceso de SEO técnico, optimización y desarrollo web | Focus Web",
  description:
    "Así trabajamos: diagnóstico técnico, priorización SEO, optimización de velocidad y ejecución web para pymes en Chile.",
  alternates: {
    canonical: "/nuestro-proceso",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/nuestro-proceso",
    title: "Proceso de SEO técnico, optimización y desarrollo web | Focus Web",
    description:
      "Así trabajamos: diagnóstico técnico, priorización SEO, optimización de velocidad y ejecución web para pymes en Chile.",
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
    title: "Proceso de SEO técnico, optimización y desarrollo web | Focus Web",
    description:
      "Así trabajamos: diagnóstico técnico, priorización SEO, optimización de velocidad y ejecución web para pymes en Chile.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function NuestroProcesoPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Proceso de SEO técnico, optimización y desarrollo web | Focus Web",
    url: "https://focusweb.cl/nuestro-proceso",
    description:
      "Así trabajamos: diagnóstico técnico, priorización SEO, optimización de velocidad y ejecución web para pymes en Chile.",
    inLanguage: "es-CL",
    isPartOf: {
      "@type": "WebSite",
      url: "https://focusweb.cl",
      name: "FocusWeb Chile",
    },
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pt-24 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-[1200px]">
            <SiteBreadcrumb
              className="mb-2"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Nuestro proceso" },
              ]}
            />
          </div>
        </section>
        <ProcessContent />
        <section className="pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-foreground/75 sm:text-base">
            ¿Buscas una página enfocada en convertir? Revisa nuestras{" "}
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
      <FloatingWhatsApp />
    </>
  )
}
