import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { FAQPageContent } from "./faq-page-content"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Diseño Web Chile 2026 | FocusWeb",
  description:
    "¿Cuánto cuesta una página web en Chile? ¿Cuánto demora? Resuelve todas tus dudas sobre diseño web, hosting, SEO, Webpay y más. Respuestas de expertos FocusWeb 2026.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/faq",
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
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Preguntas Frecuentes - Diseño Web Chile 2026 | FocusWeb",
    url: "https://focusweb.cl/faq",
    description:
      "¿Cuánto cuesta una página web en Chile? ¿Cuánto demora? Resuelve todas tus dudas sobre diseño web, hosting, SEO, Webpay y más.",
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
        name: "FAQ",
        item: "https://focusweb.cl/faq",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pt-24 sm:px-6 sm:pt-28">
          <div className="container mx-auto max-w-6xl">
            <SiteBreadcrumb
              className="mb-2"
              items={[
                { label: "Inicio", href: "/" },
                { label: "FAQ" },
              ]}
            />
          </div>
        </section>
        <FAQPageContent />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
