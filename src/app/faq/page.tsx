import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import FaqContent from "@/components/faq/faq-content"

export const metadata: Metadata = {
  title: "Preguntas frecuentes | FocusWeb",
  description: "Resuelve dudas comunes sobre nuestros servicios, tiempos y proceso de trabajo.",
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/faq/",
    title: "Preguntas frecuentes | FocusWeb",
    description: "Resuelve dudas comunes sobre nuestros servicios, tiempos y proceso de trabajo.",
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
    title: "Preguntas frecuentes | FocusWeb",
    description: "Resuelve dudas comunes sobre nuestros servicios, tiempos y proceso de trabajo.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function FAQRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <FaqContent />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
