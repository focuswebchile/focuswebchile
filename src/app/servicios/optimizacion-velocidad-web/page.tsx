import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Optimización de Velocidad Web y SEO Técnico | FocusWeb",
  description:
    "Optimizamos la velocidad y el SEO técnico de tu página web para que cargue rápido, se entienda mejor en Google y convierta visitas en clientes.",
  alternates: {
    canonical: "/servicios/optimizacion-velocidad-web",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/servicios/optimizacion-velocidad-web",
    title: "Optimización de Velocidad Web y SEO Técnico | FocusWeb",
    description:
      "Optimizamos la velocidad y el SEO técnico de tu página web para que cargue rápido, se entienda mejor en Google y convierta visitas en clientes.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/velocidad-web-y-seo-tecnico.webp",
        width: 1200,
        height: 630,
        alt: "Optimización de velocidad web y SEO técnico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimización de Velocidad Web y SEO Técnico | FocusWeb",
    description:
      "Optimizamos la velocidad y el SEO técnico de tu página web para que cargue rápido, se entienda mejor en Google y convierta visitas en clientes.",
    images: ["https://focusweb.cl/velocidad-web-y-seo-tecnico.webp"],
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
      name: "Optimización de velocidad web",
      item: "https://focusweb.cl/servicios/optimizacion-velocidad-web",
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Velocidad Web y SEO Técnico para tu Página",
  url: "https://focusweb.cl/servicios/optimizacion-velocidad-web",
  description:
    "Optimizamos la velocidad y el SEO técnico de tu página web para que cargue rápido, se entienda mejor en Google y convierta visitas en clientes.",
  isPartOf: {
    "@type": "WebSite",
    name: "FocusWeb Chile",
    url: "https://focusweb.cl",
  },
}

const speedFaqItems = [
  {
    question: "¿Qué pasa si mi página web tarda mucho en cargar?",
    answer:
      "Si mi página web tarda mucho en cargar, normalmente aumentan el rebote y la pérdida de leads. La optimización de velocidad corrige cuellos de botella técnicos para recuperar experiencia y conversiones.",
  },
  {
    question: "¿Este servicio incluye seo pagina web y seo técnico?",
    answer:
      "Sí. Este servicio combina optimización de velocidad con seo pagina web técnico: estructura, recursos bloqueantes, performance móvil y señales clave para seo de pagina web.",
  },
  {
    question: "¿Cuánto tarda la optimización?",
    answer:
      "Depende del estado inicial. En sitios WordPress estándar, el trabajo suele completarse entre 1 y 2 semanas con reporte antes/después.",
  },
  {
    question: "¿Garantizan posiciones en Google?",
    answer:
      "No. Se garantiza mejora técnica medible en rendimiento y correcciones ejecutadas. El posicionamiento final depende también de contenido, competencia y autoridad del dominio.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "URL del sitio y acceso técnico básico (CMS/hosting o soporte del proveedor). Si no lo tienes, te guiamos paso a paso.",
  },
]

const speedFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: speedFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const speedServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://focusweb.cl/servicios/optimizacion-velocidad-web#service",
  name: "Optimización de Velocidad Web y SEO Técnico",
  serviceType: "Optimización de velocidad web y SEO técnico",
  description:
    "Servicio de optimización de velocidad web y seo técnico para mejorar carga, Core Web Vitals y claridad de indexación.",
  provider: {
    "@type": "Organization",
    "@id": "https://focusweb.cl/#organization",
    name: "FocusWeb Chile",
    url: "https://focusweb.cl",
  },
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  serviceOutput: [
    "Reporte técnico antes/después",
    "Checklist de mejoras implementadas",
    "Plan de continuidad recomendado",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CLP",
    lowPrice: "110000",
    offerCount: "1",
    availability: "https://schema.org/InStock",
    url: "https://focusweb.cl/metodologia",
  },
}

export default function OptimizacionVelocidadWebPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl shadow-primary/5 sm:p-10">
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link className="transition-colors hover:text-primary" href="/">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link className="transition-colors hover:text-primary" href="/servicios">
                      Servicios
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="font-medium text-foreground">Optimización de velocidad web</li>
                </ol>
              </nav>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Velocidad Web y SEO Técnico para tu Página
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Optimizamos la velocidad y el SEO técnico de tu página web para que cargue rápido, se entienda mejor
                en Google y convierta visitas en clientes.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Si hoy estás buscando soluciones porque <strong>mi página web tarda mucho en cargar</strong>, este
                servicio está diseñado para resolver cuellos técnicos con enfoque real en negocio.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Auditar mi velocidad gratis
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  Ver todos los servicios
                </Link>
              </div>
              <p className="mt-4 text-sm font-medium text-foreground/70 sm:text-base">
                Diagnóstico inicial: 48h | Implementación: 1-2 semanas
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                ¿Tu sitio carga lento y te hace perder clientes?
              </h2>
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                En la práctica, una <strong>web lenta</strong> no solo afecta performance: también daña tu{" "}
                <strong>seo web</strong>, reduce conversiones y complica la lectura de señales para Google.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>Sube el rebote en móvil y baja el tiempo de permanencia.</li>
                <li>Core Web Vitals en rojo afectan experiencia y confianza.</li>
                <li>Tu seo de pagina web pierde tracción frente a competidores más rápidos.</li>
                <li>El sitio convierte menos aunque tenga buen tráfico.</li>
              </ul>
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Si quieres entender este escenario con ejemplos claros, revisa la guía:{" "}
                <Link
                  href="/blog/mi-pagina-web-tarda-mucho-en-cargar"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  mi página web tarda mucho en cargar
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Qué incluye nuestra optimización de velocidad web
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <article className="rounded-2xl border border-info/40 bg-info/10 p-4">
                  <h3 className="text-lg font-semibold text-foreground">1. Diagnóstico de performance real</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Medimos estado inicial y priorizamos lo que más impacto tiene.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-info">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Usamos PageSpeed, Lighthouse y métricas de usuario para construir una ruta técnica realista.
                    </p>
                  </details>
                </article>
                <article className="rounded-2xl border border-primary/35 bg-primary/10 p-4">
                  <h3 className="text-lg font-semibold text-foreground">2. Optimización de recursos críticos</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Reducimos bloqueos de carga y mejoramos el primer render.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Diferimos scripts, optimizamos CSS crítico y limpiamos recursos que frenan la experiencia.
                    </p>
                  </details>
                </article>
                <article className="rounded-2xl border border-success/35 bg-success/10 p-4">
                  <h3 className="text-lg font-semibold text-foreground">3. Imágenes y medios</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Optimizamos imágenes y medios para acelerar sin perder calidad.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-success">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Aplicamos compresión, formatos modernos y lazy loading según prioridad visual.
                    </p>
                  </details>
                </article>
                <article className="rounded-2xl border border-amber-400/45 bg-amber-100/70 p-4">
                  <h3 className="text-lg font-semibold text-foreground">4. Caché y entrega</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Ajustamos caché y entrega para una respuesta más estable y rápida.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Revisamos headers, expiraciones y estrategia de distribución según tu stack.
                    </p>
                  </details>
                </article>
                <article className="rounded-2xl border border-cyan-400/45 bg-cyan-50/80 p-4">
                  <h3 className="text-lg font-semibold text-foreground">5. Core Web Vitals + SEO técnico</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Alineamos rendimiento con señales de seo y posicionamiento web.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-cyan-700">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Trabajamos LCP, interacción y estabilidad visual para sostener crecimiento orgánico.
                    </p>
                  </details>
                </article>
                <article className="rounded-2xl border border-violet-400/45 bg-violet-50/80 p-4">
                  <h3 className="text-lg font-semibold text-foreground">6. Reporte antes/después</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Entregamos evidencia de mejora y próximos pasos sugeridos.
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.08em] text-violet-700">
                      Ver más
                    </summary>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                      Recibes comparativo antes/después y recomendaciones para mantener performance.
                    </p>
                  </details>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Cómo trabajamos la optimización (paso a paso)
              </h2>
              <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>Medición inicial y priorización técnica.</li>
                <li>Implementación de mejoras en recursos, caché y carga crítica.</li>
                <li>Pruebas de estabilidad y validación móvil.</li>
                <li>Reporte final con resultados y plan de continuidad.</li>
              </ol>
              <p className="mt-5 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Este enfoque sirve tanto para <strong>site web seo</strong> como para proyectos de{" "}
                <strong>website seo optimization</strong> más avanzados.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                ¿No sabes si optimizar o rehacer tu sitio?
              </h2>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                Parte por auditar tu página sin compromiso. Inserta tu URL y revisa qué está funcionando y qué no.
              </p>
              <Link
                href="/metodologia"
                className="mt-4 inline-flex rounded-full border border-primary/35 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Auditar mi página gratis
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Qué resultados puedes esperar (sin promesas infladas)
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>Mejora de carga percibida y respuesta en móvil.</li>
                <li>Reducción de fricción en navegación y formularios.</li>
                <li>Mejor lectura técnica para Google en escenarios de web &amp; seo.</li>
                <li>Base sólida para escalar contenido y campañas.</li>
              </ul>

              <article className="mt-7 grid gap-5 rounded-2xl border border-border/60 bg-background/70 p-5 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="inline-flex rounded-full border border-info/35 bg-info/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-info">
                    Caso de referencia
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">Antes y después de optimización</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    Resultados reales de un caso optimizado con foco en móvil.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em]">
                    <span className="inline-flex rounded-full border border-amber-400/50 bg-amber-100 px-2.5 py-1 text-amber-700">
                      Antes
                    </span>
                    <span className="inline-flex rounded-full border border-success/40 bg-success/10 px-2.5 py-1 text-success">
                      Después
                    </span>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                    <li>PageSpeed móvil: 48 → 88</li>
                    <li>LCP: 4.9s → 2.4s</li>
                    <li>Tiempo de carga inicial: 6.2s → 2.9s</li>
                    <li>TBT: 470 ms → 110 ms</li>
                    <li>Speed Index: 3.8 s → 1.4 s</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
                  <Image
                    src="/performance-speed.webp"
                    alt="Comparación antes y después de optimización de velocidad web"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-red-300/60 bg-red-50/80 p-6 shadow-lg shadow-red-500/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Qué NO incluye este servicio</h2>
              <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>❌ Rediseño completo de sitio.</li>
                <li>❌ Estrategia editorial profunda de contenidos.</li>
                <li>❌ Gestión de backlinks y outreach.</li>
              </ul>
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Si tu caso requiere <strong>desarrollo web y seo</strong> desde cero, te lo decimos y te derivamos al
                servicio correcto.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Planes de optimización (desde)</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-info/40 bg-info/10 p-5">
                  <h3 className="text-xl font-semibold text-foreground">Optimización estándar</h3>
                  <p className="mt-2 text-sm text-foreground/75">Ideal para WordPress y sitios pymes.</p>
                  <p className="mt-4 text-base text-foreground/85">
                    <strong>Desde $110.000 CLP</strong>
                  </p>
                  <p className="text-base text-foreground/80">
                    <strong>Tiempo:</strong> 1-2 semanas
                  </p>
                </article>
                <article className="rounded-2xl border border-amber-400/50 bg-amber-100/70 p-5">
                  <h3 className="text-xl font-semibold text-foreground">Si necesitas más que optimización</h3>
                  <p className="mt-2 text-sm text-foreground/75">
                    Recomendado cuando el problema es estructural o de plataforma.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/servicios/auditoria-seo-tecnico"
                      className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                    >
                      Ver auditoría SEO técnica
                    </Link>
                    <Link
                      href="/precios"
                      className="inline-flex rounded-full border border-amber-500/50 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-200"
                    >
                      Ver precios de desarrollo
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Preguntas frecuentes sobre velocidad web
              </h2>
              <div className="mt-6 space-y-4">
                {speedFaqItems.map((item, index) => (
                  <article key={item.question} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {index + 1}. {item.question}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/80">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/90 to-info/90 px-6 py-8 text-white sm:px-10">
              <h2 className="text-2xl font-bold sm:text-3xl">¿Listo para mejorar velocidad y resultados?</h2>
              <p className="mt-3 max-w-3xl text-sm text-white/90 sm:text-base">
                Evaluamos tu caso y te decimos con claridad si necesitas optimización, auditoría o un enfoque más
                amplio.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Ir a auditar gratis
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Volver a servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speedFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speedServiceSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
