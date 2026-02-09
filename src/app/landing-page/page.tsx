import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import LandingPageContent from "@/components/landing-page/landing-page-content"

export const metadata: Metadata = {
  title: "Landing pages en Chile que convierten | Diseño web profesional – Focus Web",
  description:
    "Creamos landing pages para pymes en Chile: diseño web claro, rápido y enfocado en convertir visitas en contactos reales.",
  alternates: {
    canonical: "/landing-page",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/landing-page",
    title: "Landing pages en Chile que convierten | Diseño web profesional – Focus Web",
    description:
      "Creamos landing pages para pymes en Chile: diseño web claro, rápido y enfocado en convertir visitas en contactos reales.",
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
    title: "Landing pages en Chile que convierten | Diseño web profesional – Focus Web",
    description:
      "Creamos landing pages para pymes en Chile: diseño web claro, rápido y enfocado en convertir visitas en contactos reales.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

export default function LandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una landing page y para qué sirve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una página enfocada en una sola acción: contacto, venta o registro. Está diseñada para convertir visitas en resultados concretos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo conviene una landing page en lugar de un sitio web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando tienes un objetivo puntual y quieres guiar al usuario sin distracciones. Es ideal para campañas, productos o servicios específicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto demora una landing page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del contenido, pero normalmente puede estar lista en pocos días una vez que tenemos textos e imágenes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué necesito para comenzar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una idea clara de tu oferta, algunos textos base y material visual si lo tienes. Nosotros te ayudamos a ordenar todo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Incluye diseño y texto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El servicio contempla diseño de página web y apoyo en la estructura del contenido para que tu mensaje quede claro y efectivo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el precio de una página web o landing page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del alcance y del contenido. En general, una landing page es la opción más directa y accesible para empezar.",
        },
      },
      {
        "@type": "Question",
        name: "¿También hacen página web e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Si necesitas vender online, también desarrollamos página web e-commerce (e commerce). Podemos ayudarte a elegir la mejor opción.",
        },
      },
    ],
  }

  return (
    <>
      <Script id="landing-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <LandingPageContent />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
