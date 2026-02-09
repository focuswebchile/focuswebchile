import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import ProcessContent from "@/components/process/process-content"

export const metadata: Metadata = {
  title: "Proceso de diseño web en Chile | Focus Web",
  description:
    "Así trabajamos: diagnóstico, diseño, desarrollo y lanzamiento de páginas web para pymes en Chile.",
  alternates: {
    canonical: "/nuestro-proceso",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/nuestro-proceso",
    title: "Proceso de diseño web en Chile | Focus Web",
    description:
      "Así trabajamos: diagnóstico, diseño, desarrollo y lanzamiento de páginas web para pymes en Chile.",
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
    title: "Proceso de diseño web en Chile | Focus Web",
    description:
      "Así trabajamos: diagnóstico, diseño, desarrollo y lanzamiento de páginas web para pymes en Chile.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function NuestroProcesoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
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
      <FloatingWhatsApp />
    </>
  )
}
