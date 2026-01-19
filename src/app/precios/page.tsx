import { readFileSync } from "fs"
import { join } from "path"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"
import "./precios.css"

export const metadata: Metadata = {
  title: "Precios Diseño Web en Chile | FocusWeb",
  description:
    "Planes y precios claros para diseño web, landing pages y tiendas online en Chile. Cotiza rápido con FocusWeb.",
  alternates: {
    canonical: "/precios/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/precios/",
    title: "Precios Diseño Web en Chile | FocusWeb",
    description:
      "Planes y precios claros para diseño web, landing pages y tiendas online en Chile. Cotiza rápido con FocusWeb.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/precios/favicon/og-precios.png",
        width: 1200,
        height: 630,
        alt: "Precios FocusWeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios Diseño Web en Chile | FocusWeb",
    description:
      "Planes y precios claros para diseño web, landing pages y tiendas online en Chile. Cotiza rápido con FocusWeb.",
    images: ["https://focusweb.cl/precios/favicon/og-precios.png"],
  },
}

const preciosHtml = readFileSync(join(process.cwd(), "src/app/precios/precios-content.html"), "utf8")

export default function PreciosPage() {
  return (
    <>
      <Header />
      <main className="precios-page bg-background gradient-mesh">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        <div id="hero" />
        <div dangerouslySetInnerHTML={{ __html: preciosHtml }} />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
