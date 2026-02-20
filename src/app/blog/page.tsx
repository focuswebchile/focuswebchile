import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { blogPosts } from "@/lib/blog-posts"
import { Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | FocusWeb",
  description:
    "Guías de SEO, velocidad y posicionamiento web para pymes en Chile. Aprende a mejorar tu sitio, atraer tráfico orgánico y convertir visitas en clientes.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/blog",
    title: "Blog | FocusWeb",
    description:
      "Guías de SEO, velocidad y posicionamiento web para pymes en Chile. Aprende a mejorar tu sitio, atraer tráfico orgánico y convertir visitas en clientes.",
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
    title: "Blog | FocusWeb",
    description:
      "Guías de SEO, velocidad y posicionamiento web para pymes en Chile. Aprende a mejorar tu sitio, atraer tráfico orgánico y convertir visitas en clientes.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

const posts = blogPosts

export default function BlogPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog | FocusWeb",
    url: "https://focusweb.cl/blog",
    description:
      "Guías de SEO, velocidad y posicionamiento web para pymes en Chile. Aprende a mejorar tu sitio, atraer tráfico orgánico y convertir visitas en clientes.",
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
        name: "Blog",
        item: "https://focusweb.cl/blog",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <SiteBreadcrumb
              className="mb-5"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Blog" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Blog de Optimización Web
            </h1>
            <div className="mt-5 max-w-4xl space-y-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
              <p>
                Este blog está pensado para emprendedores, pymes y equipos que quieren entender el SEO de página web
                con criterios prácticos, sin tecnicismos innecesarios. Compartimos guías sobre velocidad, SEO técnico,
                posicionamiento local y estructura de contenidos para que puedas tomar mejores decisiones antes de
                invertir tiempo o presupuesto.
              </p>
              <p>
                Si hoy sientes que tu sitio no aparece en Google o no convierte como esperabas, aquí encontrarás pasos
                accionables para diagnosticar problemas reales. Cada artículo se conecta con escenarios comunes en
                Chile: sitios lentos, errores de indexación, arquitectura confusa y oportunidades claras de mejora en
                experiencia de usuario.
              </p>
              <p>
                Puedes partir por la guía que más se parezca a tu situación y luego profundizar con nuestro contenido
                de SEO web, optimización técnica y rendimiento. La idea es simple: menos teoría, más claridad para
                ejecutar.
              </p>
            </div>
            <div className="mt-4">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10 transition-transform duration-300">
                <Image
                  src={posts[0].image.src}
                  alt={posts[0].image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                  priority
                />
              </div>
            </div>
            <article className="mt-6 flex flex-col gap-4 hover:opacity-90 transition-opacity">
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <Badge>{posts[0].category}</Badge>
                <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                  <span>Autor</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/logo.png" alt="FocusWeb" />
                    <AvatarFallback>FW</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">FocusWeb</span>
                </div>
                <span className="text-sm text-muted-foreground">• {posts[0].date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="max-w-3xl text-2xl tracking-tight text-foreground">
                  <a href={posts[0].href} className="hover:text-primary transition-colors">
                    {posts[0].title}
                  </a>
                </h2>
                <p className="max-w-3xl text-muted-foreground text-base">{posts[0].excerpt}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="w-full pt-0 pb-16 lg:pb-20 px-4 sm:px-6">
          <div className="container mx-auto flex flex-col gap-8 max-w-6xl">
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-white to-info/5 shadow-sm">
              <div className="grid gap-4 p-5 sm:grid-cols-[auto,1fr] sm:items-start sm:p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Guía rápida</p>
                  <h2 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
                    Cómo aprovechar mejor este contenido
                  </h2>
                  <p className="mt-2 text-sm text-foreground/75 sm:text-base">
                    Lee según tu etapa y enfócate en lo que más impacto puede darte hoy.
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/80 sm:grid-cols-3">
                    <li className="rounded-lg border border-emerald-200/70 bg-emerald-50/70 px-3 py-2">
                      Sitio activo: parte por diagnóstico técnico y velocidad.
                    </li>
                    <li className="rounded-lg border border-sky-200/70 bg-sky-50/70 px-3 py-2">
                      Etapa inicial: prioriza estructura y jerarquía de páginas.
                    </li>
                    <li className="rounded-lg border border-violet-200/70 bg-violet-50/70 px-3 py-2">
                      Objetivo negocio: conecta SEO, UX y conversión.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.title} className="flex flex-col gap-4 hover:opacity-90 transition-opacity">
                  <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted/70 transition-transform duration-300">
                    {post.image ? (
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
                    )}
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 items-center">
                    <Badge>{post.category}</Badge>
                    <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                      <span>Autor</span>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/logo.png" alt="FocusWeb" />
                        <AvatarFallback>FW</AvatarFallback>
                      </Avatar>
                      <span className="text-foreground">FocusWeb</span>
                    </div>
                    <span className="text-sm text-muted-foreground">• {post.date}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="max-w-3xl text-xl sm:text-2xl tracking-tight text-foreground">
                      <a href={post.href} className="hover:text-primary transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <p className="max-w-3xl text-muted-foreground text-base">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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
