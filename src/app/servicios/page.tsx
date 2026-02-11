import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ServicesQuickNav } from "@/components/services-quick-nav"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { Activity, ArrowRight, Gauge, Hammer, ListChecks } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios SEO y Posicionamiento Web Chile | Auditoría Gratis | FocusWeb",
  description:
    "Servicios de SEO y posicionamiento web en Chile: auditoría técnica, optimización de velocidad, SEO on-page y estrategia de contenido. Desde $110.000 CLP. Consulta gratis.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/servicios",
    title: "Servicios SEO y Posicionamiento Web Chile | Auditoría Gratis | FocusWeb",
    description:
      "Servicios de SEO y posicionamiento web en Chile: auditoría técnica, optimización de velocidad, SEO on-page y estrategia de contenido. Desde $110.000 CLP. Consulta gratis.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/servicios-digitales.webp",
        width: 1200,
        height: 630,
        alt: "Servicios SEO y posicionamiento web en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios SEO y Posicionamiento Web Chile | Auditoría Gratis | FocusWeb",
    description:
      "Servicios de SEO y posicionamiento web en Chile: auditoría técnica, optimización de velocidad, SEO on-page y estrategia de contenido. Desde $110.000 CLP. Consulta gratis.",
    images: ["https://focusweb.cl/servicios-digitales.webp"],
  },
}

const serviciosFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre diagnóstico y auditoría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El diagnóstico es una revisión inicial (hasta 48 horas) que identifica problemas principales. Una auditoría profunda incluye análisis competitivo, investigación de keywords, revisión de backlinks y estrategia completa (hasta 14 días). Recomendamos empezar con diagnóstico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda una optimización de velocidad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la complejidad del sitio. Un WordPress estándar: 1-2 semanas. Un sitio custom con muchas funcionalidades: 2-4 semanas. Te damos estimación exacta después del diagnóstico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesito para empezar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para diagnóstico: solo la URL de tu sitio. Para optimización o desarrollo: acceso al hosting/CMS. Te guiamos paso a paso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo contratar solo diagnóstico sin compromiso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El diagnóstico inicial es gratis y sin compromiso. Después decides si quieres que implementemos las correcciones o lo haces tú.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen garantía de resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para optimización de velocidad: garantizamos mejora medible en PageSpeed Score. Para SEO/posicionamiento: garantizamos corrección de errores técnicos, pero posiciones en Google dependen de muchos factores (competencia, tiempo, etc.).",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden fuera de Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, trabajamos 100% remoto. Atendemos clientes en todo Chile (Santiago, Valparaíso, Concepción, regiones). Comunicación por WhatsApp, videollamada y email.",
      },
    },
  ],
}

const serviciosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://focusweb.cl/#organization",
      name: "FocusWeb Chile",
      url: "https://focusweb.cl",
      logo: "https://focusweb.cl/logo-512.png",
    },
    {
      "@type": "Service",
      "@id": "https://focusweb.cl/servicios#diagnostico-seo",
      name: "Diagnóstico SEO Técnico",
      serviceType: "Diagnóstico SEO Técnico",
      description:
        "Revisión inicial técnica para detectar problemas de indexación, SEO on-page y estructura con prioridades claras. Incluye consulta inicial gratuita y opción de diagnóstico profundo pagado.",
      provider: { "@id": "https://focusweb.cl/#organization" },
      areaServed: "CL",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CLP",
        lowPrice: "0",
        highPrice: "180000",
        offerCount: "2",
        availability: "https://schema.org/InStock",
        url: "https://focusweb.cl/metodologia",
      },
    },
    {
      "@type": "Service",
      "@id": "https://focusweb.cl/servicios#optimizacion-velocidad",
      name: "Optimización de Velocidad Web",
      serviceType: "Optimización de velocidad y Core Web Vitals",
      description:
        "Optimización técnica de carga para mejorar Core Web Vitals, reducir tiempos y mejorar experiencia móvil.",
      provider: { "@id": "https://focusweb.cl/#organization" },
      areaServed: "CL",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CLP",
        lowPrice: "110000",
        offerCount: "1",
        availability: "https://schema.org/InStock",
        url: "https://focusweb.cl/metodologia",
      },
    },
    {
      "@type": "Service",
      "@id": "https://focusweb.cl/servicios#desarrollo-web",
      name: "Desarrollo Web con SEO Técnico Integrado",
      serviceType: "Desarrollo web",
      description:
        "Creación o rediseño de sitios web con SEO técnico, rendimiento y estructura escalable desde el inicio.",
      provider: { "@id": "https://focusweb.cl/#organization" },
      areaServed: "CL",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CLP",
        lowPrice: "180000",
        offerCount: "1",
        availability: "https://schema.org/InStock",
        url: "https://focusweb.cl/servicios/desarrollo-web",
      },
    },
  ],
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
  ],
}

const serviciosWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Servicios de SEO y Posicionamiento Web en Chile",
  url: "https://focusweb.cl/servicios",
  description:
    "Servicios de SEO y posicionamiento web en Chile: auditoría técnica, optimización de velocidad, SEO on-page y estrategia de contenido. Desde $110.000 CLP. Consulta gratis.",
  isPartOf: {
    "@type": "WebSite",
    name: "FocusWeb Chile",
    url: "https://focusweb.cl",
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/10 sm:p-10">
              <SiteBreadcrumb
                className="mb-5"
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Servicios" },
                ]}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                FocusWeb Chile
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Servicios de SEO y Posicionamiento Web en Chile
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Si tu sitio web no aparece en Google, carga lento o no genera ventas, tenemos servicios específicos
                para cada problema.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Trabajamos con emprendedores chilenos que necesitan resultados técnicos medibles: diagnóstico SEO,
                optimización de velocidad o desarrollo web desde cero con bases sólidas.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                No vendemos paquetes genéricos. Identificamos tu situación, priorizamos lo que más impacto tiene y
                ejecutamos con criterio.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="group inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Ir al diagnóstico
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="container mx-auto max-w-6xl">
            <ServicesQuickNav />
          </div>
        </section>

        <section id="guia-rapida" className="px-4 py-8 sm:px-6 sm:py-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">¿Qué Servicio Necesitas? Guía Rápida</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                No todos los sitios web necesitan lo mismo. Estos son los escenarios más comunes:
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-success/40 bg-success/10 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-success/10">
                  <p className="mb-3 inline-flex rounded-full border border-success/40 bg-success/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-success">
                    Caso 1
                  </p>
                  <h3 className="text-xl font-bold text-foreground">Ya tienes un sitio pero no sabes qué le pasa</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    <strong>Necesitas:</strong>{" "}
                    <Link
                      href="/servicios/auditoria-seo-tecnico"
                      className="text-success underline underline-offset-4 hover:text-success/80"
                    >
                      Diagnóstico SEO Técnico
                    </Link>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    <strong>Te entregamos:</strong> Reporte claro con prioridades
                  </p>
                </article>

                <article className="rounded-2xl border border-info/40 bg-info/10 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-info/10">
                  <p className="mb-3 inline-flex rounded-full border border-info/40 bg-info/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-info">
                    Caso 2
                  </p>
                  <h3 className="text-xl font-bold text-foreground">Tu sitio existe pero carga muy lento</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    <strong>Necesitas:</strong> Optimización de Velocidad
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    <strong>Te entregamos:</strong> Mejora medible de rendimiento
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-400/50 bg-amber-100/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                  <p className="mb-3 inline-flex rounded-full border border-amber-400/50 bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                    Caso 3
                  </p>
                  <h3 className="text-xl font-bold text-foreground">No tienes sitio web o necesitas uno nuevo</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    <strong>Necesitas:</strong> Desarrollo Web
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    <strong>Te entregamos:</strong> Sitio optimizado desde día 1
                  </p>
                </article>
              </div>

              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                A continuación, detallamos cada servicio para que elijas con claridad.
              </p>
            </div>
          </div>
        </section>

        <section id="diagnostico-seo" className="px-4 py-8 sm:px-6 sm:py-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-success/30 bg-gradient-to-br from-success/10 via-card/90 to-card/95 p-6 shadow-lg shadow-success/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-success/10 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.75fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-success">
                  <Activity className="h-3.5 w-3.5" />
                  Servicio 1
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Diagnóstico SEO Técnico: Claridad sobre Qué Arreglar
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Si tu sitio web existe pero no aparece en Google, tiene problemas de indexación o simplemente no sabes
              por dónde empezar, este servicio es tu punto de partida.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Qué incluye el diagnóstico:</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Revisamos los aspectos técnicos que afectan tu posicionamiento en Google:
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  Si quieres entender errores comunes antes del diagnóstico, puedes revisar esta guía:
                  {" "}
                  <Link
                    href="/blog/errores-paginas-web-pymes-chile"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    errores críticos en páginas web de pymes chilenas
                  </Link>
                  .
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>
                <strong>Indexación y rastreo:</strong> Verificamos que Google pueda ver y entender tu sitio
              </li>
              <li>
                <strong>SEO on-page básico:</strong> Títulos (H1, H2), meta descriptions, estructura de headings
              </li>
              <li>
                <strong>Elementos técnicos:</strong> Alt text en imágenes, URLs amigables, enlaces rotos
              </li>
              <li>
                <strong>Schema markup:</strong> Validamos si tienes datos estructurados (JSON-LD)
              </li>
              <li>
                <strong>Google Search Console:</strong> Análisis de errores y oportunidades
              </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Qué NO incluye (para mantener claridad):</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Este servicio es un diagnóstico, no una auditoría profunda. No incluye análisis de backlinks,
              investigación competitiva extensa ni estrategia de contenido completa. Si necesitas eso, te lo indicamos
              en el reporte.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Resultado esperado:</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">Recibes un documento PDF con:</p>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>Lista de problemas encontrados</li>
              <li>Priorización por impacto (alto/medio/bajo)</li>
              <li>Plan de acción sugerido</li>
              <li>Estimación de tiempo/costo para corregir</li>
                </ol>

                <p className="mt-5 text-base leading-relaxed text-foreground/85">
              <strong>Tiempo de entrega:</strong> Hasta 48 horas
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/85">
              <strong>Precio:</strong> Gratis en primera consulta / $180.000 CLP diagnóstico profundo
                </p>
              </div>
              <aside className="lg:pt-11">
                <div className="rounded-2xl border border-success/35 bg-white/70 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-success">Resumen rápido</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    <li><strong>Ideal para:</strong> Sitios con problemas poco claros</li>
                    <li><strong>Entregable:</strong> PDF con prioridades</li>
                    <li><strong>Tiempo:</strong> Hasta 48 horas</li>
                    <li><strong>Desde:</strong> Gratis primera consulta</li>
                  </ul>
                  <Link
                    href="/metodologia"
                    className="group mt-4 inline-flex w-full items-center justify-center rounded-full border border-success/35 bg-success/10 px-4 py-2.5 text-sm font-semibold text-success transition-colors hover:bg-success/15"
                  >
                    Revisar diagnóstico inicial
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/servicios/auditoria-seo-tecnico"
                    className="group mt-2 inline-flex w-full items-center justify-center rounded-full border border-success/30 bg-white px-4 py-2.5 text-sm font-semibold text-success transition-colors hover:bg-success/5"
                  >
                    Ver servicio completo
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="optimizacion-velocidad" className="px-4 py-8 sm:px-6 sm:py-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-info/30 bg-gradient-to-br from-info/10 via-card/90 to-card/95 p-6 shadow-lg shadow-info/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-info/10 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.75fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-info/40 bg-info/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-info">
                  <Gauge className="h-3.5 w-3.5" />
                  Servicio 2
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Optimización de Velocidad Web: Mejora Core Web Vitals
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Si tu sitio web carga lento (más de 3 segundos), estás perdiendo clientes. Google penaliza sitios lentos
              y los usuarios abandonan antes de ver tu contenido.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Problemas típicos que resolvemos:</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>
                <strong>Core Web Vitals deficientes:</strong> LCP, FID, CLS en rojo
              </li>
              <li>
                <strong>Imágenes sin optimizar:</strong> PNGs pesados, falta de lazy loading
              </li>
              <li>
                <strong>JavaScript bloqueante:</strong> Scripts que retrasan la carga
              </li>
              <li>
                <strong>Caché mal configurado:</strong> Servidor no guarda recursos
              </li>
              <li>
                <strong>Sin CDN:</strong> Archivos se sirven desde un solo servidor lento
              </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Nuestro enfoque:</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Priorizamos <strong>móvil primero</strong> porque el 70% del tráfico en Chile viene de celulares.
              Optimizamos lo que más impacto tiene en la experiencia real del usuario.
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  Si hoy estás en el escenario de &quot;web lenta&quot;, este artículo complementa bien el proceso técnico:
                  {" "}
                  <Link
                    href="/blog/mi-pagina-web-tarda-mucho-en-cargar"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    mi página web tarda mucho en cargar
                  </Link>
                  .
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Proceso de optimización:</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>Medición inicial (PageSpeed Insights, GTmetrix)</li>
              <li>Identificación de cuellos de botella</li>
              <li>Implementación de mejoras técnicas</li>
              <li>Medición post-optimización</li>
              <li>Reporte antes/después</li>
                </ol>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Resultado esperado:</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>PageSpeed Score de &lt;50 → 85-95</li>
              <li>Tiempo de carga de 5-8seg → 1.5-3seg</li>
              <li>Core Web Vitals en verde</li>
              <li>Mejora medible en tasa de rebote</li>
                </ul>

                <p className="mt-5 text-base leading-relaxed text-foreground/85">
              <strong>Tiempo:</strong> 1-2 semanas según complejidad
                </p>
            <p className="mt-2 text-base leading-relaxed text-foreground/85">
              <strong>Precio:</strong> Desde $110.000 CLP (WordPress)
            </p>
              </div>
              <aside className="lg:pt-11">
                <div className="rounded-2xl border border-info/35 bg-white/70 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-info">Resumen rápido</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    <li><strong>Ideal para:</strong> Sitios lentos y rebote alto</li>
                    <li><strong>Enfoque:</strong> Móvil primero</li>
                    <li><strong>Tiempo:</strong> 1-2 semanas</li>
                    <li><strong>Desde:</strong> $110.000 CLP</li>
                  </ul>
                  <Link
                    href="/servicios/optimizacion-velocidad-web"
                    className="group mt-4 inline-flex w-full items-center justify-center rounded-full border border-info/35 bg-info/10 px-4 py-2.5 text-sm font-semibold text-info transition-colors hover:bg-info/15"
                  >
                    Ver servicio completo
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="desarrollo-web" className="px-4 py-8 sm:px-6 sm:py-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-100/60 via-card/90 to-card/95 p-6 shadow-lg shadow-amber-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/15 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.75fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">
                  <Hammer className="h-3.5 w-3.5" />
                  Servicio 3
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Desarrollo Web con SEO y Rendimiento Integrado
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Si necesitas un sitio web desde cero o un rediseño completo, lo construimos con optimización técnica
              integrada desde la primera línea de código.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Diferencia clara con los otros servicios:</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Este NO es para optimizar un sitio existente. Es para crear uno nuevo con bases técnicas sólidas que no
              tendrás que arreglar después.
                </p>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Casos en los que aplica:</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>No tienes sitio web</li>
              <li>Tu sitio actual es tan viejo/roto que conviene rehacer</li>
              <li>Necesitas landing page, sitio corporativo o e-commerce</li>
              <li>Quieres migrar de plataforma (ej: Wix → WordPress)</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Base técnica desde día 1:</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Incluimos TODO lo que los otros servicios arreglan después:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>SEO técnico integrado (títulos, meta tags, schema markup)</li>
              <li>Velocidad optimizada (imágenes WebP, lazy loading, caché)</li>
              <li>Core Web Vitals en verde desde el lanzamiento</li>
              <li>Responsive design (mobile-first)</li>
              <li>Google Analytics y Search Console configurados</li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-foreground">Tipos de proyectos:</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
              <li>
                <strong>Landing page:</strong> 1 página optimizada para conversión (desde $180.000 CLP)
              </li>
              <li>
                <strong>Sitio corporativo:</strong> hasta 7 páginas institucionales (desde $350.000 CLP)
              </li>
              <li>
                <strong>E-commerce:</strong> Tienda online completa (desde $900.000 CLP)
              </li>
                </ol>

            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              <strong>Tiempo:</strong> Según alcance (landing hasta 7 días, e-commerce 30+ días)
            </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/85">
              <strong>Importante:</strong> Si ya tienes un sitio funcionando, probablemente NO necesites desarrollo.
              Solicita{" "}
              <Link href="/metodologia" className="text-primary underline underline-offset-4">
                diagnóstico primero
              </Link>
              .
                </p>
              </div>
              <aside className="lg:pt-11">
                <div className="rounded-2xl border border-amber-400/45 bg-white/75 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">Resumen rápido</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    <li><strong>Ideal para:</strong> Sitio nuevo o rediseño total</li>
                    <li><strong>Incluye:</strong> SEO + rendimiento integrado</li>
                    <li><strong>Tiempo:</strong> Según alcance (landing 7 días, e-commerce 30+ días)</li>
                    <li><strong>Desde:</strong> $180.000 CLP</li>
                  </ul>
                  <Link
                    href="/servicios/desarrollo-web"
                    className="group mt-4 inline-flex w-full items-center justify-center rounded-full border border-amber-500/60 bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                  >
                    Ver planes y precios
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="comparador-rapido" className="px-4 py-8 sm:px-6 sm:py-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-border/60 bg-card/85 p-6 sm:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/75">
              <ListChecks className="h-3.5 w-3.5" />
              Comparador
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Comparador rápido</h2>
            <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-border/60 bg-background/65 md:block">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/60">
                    <th className="px-4 py-3 font-semibold text-foreground/90">Criterio</th>
                    <th className="px-4 py-3 font-semibold text-success">Diagnóstico SEO</th>
                    <th className="px-4 py-3 font-semibold text-info">Optimización</th>
                    <th className="px-4 py-3 font-semibold text-amber-700">Desarrollo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground/90">Ideal para</td>
                    <td className="px-4 py-3 text-foreground/80">Sitios existentes con problemas desconocidos</td>
                    <td className="px-4 py-3 text-foreground/80">Sitios lentos (&gt;3 segundos)</td>
                    <td className="px-4 py-3 text-foreground/80">Sitios nuevos o rediseño total</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground/90">Entregable</td>
                    <td className="px-4 py-3 text-foreground/80">Reporte PDF + plan de acción</td>
                    <td className="px-4 py-3 text-foreground/80">Mejora medible de rendimiento</td>
                    <td className="px-4 py-3 text-foreground/80">Sitio web completo optimizado</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground/90">Tiempo</td>
                    <td className="px-4 py-3 text-foreground/80">Hasta 48 horas</td>
                    <td className="px-4 py-3 text-foreground/80">1-2 semanas</td>
                    <td className="px-4 py-3 text-foreground/80">Según alcance (7 a 30+ días)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground/90">Precio</td>
                    <td className="px-4 py-3 text-foreground/80">Gratis (primera consulta)</td>
                    <td className="px-4 py-3 text-foreground/80">Desde $110.000 CLP</td>
                    <td className="px-4 py-3 text-foreground/80">Desde $180.000 CLP</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="px-4 py-3 font-semibold text-foreground/90">Próximo paso</td>
                    <td className="px-4 py-3">
                      <Link
                        href="/servicios/auditoria-seo-tecnico"
                        className="inline-flex items-center justify-center rounded-full border border-success/45 bg-success/10 px-3 py-1.5 text-sm font-semibold text-success transition-colors hover:bg-success/15"
                      >
                        Ver auditoría completa
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/servicios/optimizacion-velocidad-web"
                        className="inline-flex items-center justify-center rounded-full border border-info/45 bg-info/10 px-3 py-1.5 text-sm font-semibold text-info transition-colors hover:bg-info/15"
                      >
                        Ver servicio completo
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/servicios/desarrollo-web"
                        className="inline-flex items-center justify-center rounded-full border border-amber-500/50 bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-200"
                      >
                        Ver precios
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 md:hidden">
              <article className="rounded-2xl border border-success/40 bg-success/10 p-4">
                <h3 className="text-lg font-semibold text-success">Diagnóstico SEO</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  <li><strong>Ideal para:</strong> Sitios existentes con problemas desconocidos</li>
                  <li><strong>Entregable:</strong> Reporte PDF + plan de acción</li>
                  <li><strong>Tiempo:</strong> Hasta 48 horas</li>
                  <li><strong>Precio:</strong> Gratis (primera consulta)</li>
                </ul>
                <Link
                  href="/servicios/auditoria-seo-tecnico"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-success/45 bg-success/10 px-3 py-1.5 text-sm font-semibold text-success transition-colors hover:bg-success/15"
                >
                  Ver auditoría completa
                </Link>
              </article>

              <article className="rounded-2xl border border-info/40 bg-info/10 p-4">
                <h3 className="text-lg font-semibold text-info">Optimización</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  <li><strong>Ideal para:</strong> Sitios lentos (&gt;3 segundos)</li>
                  <li><strong>Entregable:</strong> Mejora medible de rendimiento</li>
                  <li><strong>Tiempo:</strong> 1-2 semanas</li>
                  <li><strong>Precio:</strong> Desde $110.000 CLP</li>
                </ul>
                <Link
                  href="/servicios/optimizacion-velocidad-web"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-info/45 bg-info/10 px-3 py-1.5 text-sm font-semibold text-info transition-colors hover:bg-info/15"
                >
                  Ver servicio completo
                </Link>
              </article>

              <article className="rounded-2xl border border-amber-500/50 bg-amber-100/70 p-4">
                <h3 className="text-lg font-semibold text-amber-700">Desarrollo</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  <li><strong>Ideal para:</strong> Sitios nuevos o rediseño total</li>
                  <li><strong>Entregable:</strong> Sitio web completo optimizado</li>
                  <li><strong>Tiempo:</strong> Según alcance (7 a 30+ días)</li>
                  <li><strong>Precio:</strong> Desde $180.000 CLP</li>
                </ul>
                <Link
                  href="/servicios/desarrollo-web"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-amber-500/50 bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-200"
                >
                  Ver precios
                </Link>
              </article>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
              Esta tabla resume las diferencias principales. Si aún no tienes claro cuál necesitas, solicita un
              diagnóstico inicial gratuito y te orientamos según tu caso.
            </p>
          </div>
        </section>

        <section id="faq-servicios" className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 scroll-mt-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-border/60 bg-card/85 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes sobre servicios SEO en Chile</h2>
            <div className="mt-6 space-y-4">
              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  1. ¿Cuál es la diferencia entre diagnóstico y auditoría?
                </h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    El diagnóstico es una revisión inicial (hasta 48 horas) que identifica problemas principales. Una
                    auditoría profunda incluye análisis competitivo, investigación de keywords, revisión de backlinks y
                    estrategia completa (hasta 14 días). Recomendamos empezar con diagnóstico.
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  2. ¿Cuánto tarda una optimización de velocidad?
                </h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Depende de la complejidad del sitio. Un WordPress estándar: 1-2 semanas. Un sitio custom con
                    muchas funcionalidades: 2-4 semanas. Te damos estimación exacta después del diagnóstico.
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">3. ¿Qué necesito para empezar?</h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Para diagnóstico: solo la URL de tu sitio. Para optimización o desarrollo: acceso al hosting/CMS.
                    Te guiamos paso a paso.
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  4. ¿Puedo contratar solo diagnóstico sin compromiso?
                </h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Sí. El diagnóstico inicial es gratis y sin compromiso. Después decides si quieres que
                    implementemos las correcciones o lo haces tú.
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">5. ¿Ofrecen garantía de resultados?</h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Para optimización de velocidad: garantizamos mejora medible en PageSpeed Score. Para
                    SEO/posicionamiento: garantizamos corrección de errores técnicos, pero posiciones en Google
                    dependen de muchos factores (competencia, tiempo, etc.).
                  </p>
                </div>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">6. ¿Atienden fuera de Santiago?</h3>
                <div className="mt-2 rounded-xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Sí, trabajamos 100% remoto. Atendemos clientes en todo Chile (Santiago, Valparaíso, Concepción,
                    regiones). Comunicación por WhatsApp, videollamada y email.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/90 to-info/90 px-5 py-6 text-white sm:px-7 sm:py-7">
              <h3 className="text-xl font-semibold sm:text-2xl">¿No estás seguro qué servicio elegir?</h3>
              <p className="mt-2 max-w-3xl text-sm text-white/90 sm:text-base">
                No estás solo en esto. Si no tienes claro qué necesitas o por dónde empezar, conversemos. Revisamos tu
                caso específico y te orientamos con honestidad.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-white/90 sm:text-base">
                No vendemos lo que no necesitas. Si tu sitio no requiere optimización, te lo decimos.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="group inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Revisar mi sitio
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Hablar por WhatsApp
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosWebPageSchema) }}
      />
      <FloatingWhatsApp />
    </>
  )
}
