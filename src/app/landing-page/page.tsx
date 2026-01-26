import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import LandingPageContent from "@/components/landing-page/landing-page-content"

export const metadata: Metadata = {
  title: "Landing Page | FocusWeb",
  description:
    "Landing pages enfocadas en conversión para pymes en Chile. Diseño claro, rápido y pensado para contacto real.",
  alternates: {
    canonical: "/landing-page/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/landing-page/",
    title: "Landing Page | FocusWeb",
    description:
      "Landing pages enfocadas en conversión para pymes en Chile. Diseño claro, rápido y pensado para contacto real.",
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
    title: "Landing Page | FocusWeb",
    description:
      "Landing pages enfocadas en conversión para pymes en Chile. Diseño claro, rápido y pensado para contacto real.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <LandingPageContent />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
