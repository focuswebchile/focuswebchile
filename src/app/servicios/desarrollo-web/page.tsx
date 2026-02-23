import { readFileSync } from "fs"
import { join } from "path"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import "./precios.css"

export const metadata: Metadata = {
  title: "Desarrollo Web en Chile | Landing pages y sitios web – Focus Web",
  description:
    "Servicio de desarrollo web en Chile. Landing pages, sitios web y tiendas online con foco en rendimiento, SEO técnico y resultados.",
  alternates: {
    canonical: "/servicios/desarrollo-web",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/servicios/desarrollo-web",
    title: "Desarrollo Web en Chile | Landing pages y sitios web – Focus Web",
    description:
      "Servicio de desarrollo web en Chile. Landing pages, sitios web y tiendas online con foco en rendimiento, SEO técnico y resultados.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/precios/favicon/og-precios.png?v=2026-01-19",
        width: 1200,
        height: 630,
        alt: "Desarrollo web FocusWeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web en Chile | Landing pages y sitios web – Focus Web",
    description:
      "Servicio de desarrollo web en Chile. Landing pages, sitios web y tiendas online con foco en rendimiento, SEO técnico y resultados.",
    images: ["https://focusweb.cl/precios/favicon/og-precios.png?v=2026-01-19"],
  },
}

const preciosHtml = readFileSync(join(process.cwd(), "public/legacy-precios/precios-content.html"), "utf8")

export default function DesarrolloWebPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Desarrollo Web en Chile | Landing pages y sitios web – Focus Web",
    url: "https://focusweb.cl/servicios/desarrollo-web",
    description:
      "Servicio de desarrollo web en Chile. Landing pages, sitios web y tiendas online con foco en rendimiento, SEO técnico y resultados.",
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
        name: "Servicios",
        item: "https://focusweb.cl/servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Desarrollo web",
        item: "https://focusweb.cl/servicios/desarrollo-web",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="precios-page bg-background gradient-mesh">
        <div id="hero" />
        <section className="px-6 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto max-w-[1200px]">
            <SiteBreadcrumb
              className="mb-2"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: "Desarrollo web" },
              ]}
            />
          </div>
        </section>
        <article className="precios-content" aria-label="Planes y precios de desarrollo web">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
