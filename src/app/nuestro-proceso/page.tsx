import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import ProcessContent from "@/components/process/process-content"

export const metadata: Metadata = {
  title: "Nuestro proceso | FocusWeb",
  description:
    "Conoce nuestro proceso de trabajo: diagnóstico, desarrollo y lanzamiento. Transparente, claro y enfocado en resultados.",
  alternates: {
    canonical: "/nuestro-proceso/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/nuestro-proceso/",
    title: "Nuestro proceso | FocusWeb",
    description:
      "Conoce nuestro proceso de trabajo: diagnóstico, desarrollo y lanzamiento. Transparente, claro y enfocado en resultados.",
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
    title: "Nuestro proceso | FocusWeb",
    description:
      "Conoce nuestro proceso de trabajo: diagnóstico, desarrollo y lanzamiento. Transparente, claro y enfocado en resultados.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function NuestroProcesoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <ProcessContent />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
