import { readFileSync } from "fs"
import { join } from "path"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"
import "./precios.css"

export const metadata: Metadata = {
  title: "Precios diseño web en Chile | Landing pages y sitios web – Focus Web",
  description:
    "Planes y precios para diseño web en Chile. Landing pages, sitios web y tiendas online con foco en resultados.",
  alternates: {
    canonical: "/precios",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/precios",
    title: "Precios diseño web en Chile | Landing pages y sitios web – Focus Web",
    description:
      "Planes y precios para diseño web en Chile. Landing pages, sitios web y tiendas online con foco en resultados.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/precios/favicon/og-precios.png?v=2026-01-19",
        width: 1200,
        height: 630,
        alt: "Precios FocusWeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios diseño web en Chile | Landing pages y sitios web – Focus Web",
    description:
      "Planes y precios para diseño web en Chile. Landing pages, sitios web y tiendas online con foco en resultados.",
    images: ["https://focusweb.cl/precios/favicon/og-precios.png?v=2026-01-19"],
  },
}

const preciosHtml = readFileSync(join(process.cwd(), "src/app/precios/precios-content.html"), "utf8")

export default function PreciosPage() {
  return (
    <>
      <Header />
      <main className="precios-page bg-background gradient-mesh">
        <div id="hero" />
        <article className="precios-content" aria-label="Planes y precios">
          <div dangerouslySetInnerHTML={{ __html: preciosHtml }} />
        </article>
        <section className="pb-16 px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-foreground/75 sm:text-base">
            Si necesitas una página que convierta, mira nuestras{" "}
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
