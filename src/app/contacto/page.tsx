import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import FormOne from "@/components/ui/form-1"

export const metadata: Metadata = {
  title: "Contacto | FocusWeb",
  description: "Escríbenos y recibe respuesta en menos de 24 horas. Diseño web y soluciones digitales para tu negocio.",
  alternates: {
    canonical: "/contacto/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/contacto/",
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
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <FormOne />
          </div>
        </section>
        <section className="pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-foreground/75 sm:text-base">
            Si buscas una página clara y enfocada en resultados, revisa nuestras{" "}
            <a
              href="/landing-page/"
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
