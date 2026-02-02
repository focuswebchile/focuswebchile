import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { FAQPageContent } from "./faq-page-content"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Diseño Web Chile 2026 | FocusWeb",
  description:
    "¿Cuánto cuesta una página web en Chile? ¿Cuánto demora? Resuelve todas tus dudas sobre diseño web, hosting, SEO, Webpay y más. Respuestas de expertos FocusWeb 2026.",
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/faq/",
    title: "Preguntas Frecuentes - Diseño Web Chile 2026 | FocusWeb",
    description:
      "¿Cuánto cuesta una página web en Chile? ¿Cuánto demora? Resuelve todas tus dudas sobre diseño web, hosting, SEO, Webpay y más. Respuestas de expertos FocusWeb 2026.",
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
    title: "Preguntas Frecuentes - Diseño Web Chile 2026 | FocusWeb",
    description:
      "¿Cuánto cuesta una página web en Chile? ¿Cuánto demora? Resuelve todas tus dudas sobre diseño web, hosting, SEO, Webpay y más. Respuestas de expertos FocusWeb 2026.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function FAQRoute() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <FAQPageContent />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
