import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Mapa del Sitio | FocusWeb",
  description:
    "Explora todas las páginas de FocusWeb: servicios, metodología, proceso, blog y recursos para mejorar tu SEO y presencia digital en Chile.",
  alternates: {
    canonical: "/mapa-del-sitio",
  },
}

const sections = [
  {
    title: "Páginas Principales",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Metodología", href: "/metodologia" },
      { label: "Nuestro Proceso", href: "/nuestro-proceso" },
      { label: "Contacto", href: "/contacto" },
      { label: "FAQ", href: "/faq" },
      { label: "Mi historia", href: "/mi-historia" },
      { label: "Landing Page", href: "/landing-page" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Servicios SEO y Posicionamiento", href: "/servicios" },
      { label: "Auditoría SEO Técnica", href: "/servicios/auditoria-seo-tecnico" },
      { label: "Optimización de Velocidad Web", href: "/servicios/optimizacion-velocidad-web" },
      { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Mi página web tarda mucho en cargar", href: "/blog/mi-pagina-web-tarda-mucho-en-cargar" },
      { label: "Google Business Profile para PYMEs chilenas", href: "/blog/seo-local-google-business-chile" },
      { label: "10 Errores Críticos en Páginas Web de PyMEs", href: "/blog/errores-paginas-web-pymes-chile" },
      { label: "Landing Page vs Página Web", href: "/blog/landing-page-vs-pagina-web" },
      { label: "Cómo crear una página web en Chile", href: "/blog/como-crear-una-pagina-web-en-chile" },
      { label: "De Instagram a tu Propia Tienda Online", href: "/blog/instagram-a-tienda-online" },
    ],
  },
]

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Mapa del Sitio | FocusWeb",
      url: "https://focusweb.cl/mapa-del-sitio",
      description:
        "Explora todas las páginas de FocusWeb: servicios, metodología, proceso, blog y recursos para mejorar tu SEO y presencia digital en Chile.",
      inLanguage: "es-CL",
      isPartOf: {
        "@type": "WebSite",
        url: "https://focusweb.cl",
        name: "FocusWeb Chile",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://focusweb.cl" },
        { "@type": "ListItem", position: 2, name: "Mapa del sitio", item: "https://focusweb.cl/mapa-del-sitio" },
      ],
    },
  ],
}

export default function SiteMapPage() {
  return (
    <>
      <Script id="sitemap-page-schema" type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24">
          <div className="container mx-auto max-w-6xl">
            <SiteBreadcrumb
              className="mb-6"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Mapa del sitio" },
              ]}
            />
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Mapa del Sitio
            </h1>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Encuentra rápidamente todas las secciones principales de FocusWeb y navega por servicios, contenidos y
              recursos sin perder contexto.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link className="transition-colors hover:text-primary" href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center sm:p-6">
              <p className="text-base text-foreground/85 sm:text-lg">
                ¿No sabes por dónde partir? Revisamos tu sitio y te damos prioridades claras.
              </p>
              <Link
                href="/metodologia"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Auditar gratis mi sitio
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
