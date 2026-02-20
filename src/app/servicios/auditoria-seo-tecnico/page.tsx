import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { AuditoriaSeoCtaForm } from "@/components/auditoria-seo-cta-form"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Auditoría SEO Técnica Chile | Diagnóstico Completo Gratis | FocusWeb",
  description:
    "Auditoría SEO técnica en Chile para detectar errores y oportunidades con plan priorizado. Primera auditoría gratis y reporte inicial en 48 horas.",
  alternates: {
    canonical: "/servicios/auditoria-seo-tecnico",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/servicios/auditoria-seo-tecnico",
    title: "Auditoría SEO Técnica Chile | Diagnóstico Completo Gratis | FocusWeb",
    description:
      "Auditoría SEO técnica en Chile para detectar errores y oportunidades con plan priorizado. Primera auditoría gratis y reporte inicial en 48 horas.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-auditoria.webp",
        width: 1200,
        height: 630,
        alt: "Auditoría SEO técnica en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auditoría SEO Técnica Chile | Diagnóstico Completo Gratis | FocusWeb",
    description:
      "Auditoría SEO técnica en Chile para detectar errores y oportunidades con plan priorizado. Primera auditoría gratis y reporte inicial en 48 horas.",
    images: ["https://focusweb.cl/og-auditoria.webp"],
  },
}

const auditoriaFaqItems = [
  {
    question: "¿La auditoría básica realmente es gratis?",
    answer: [
      "Sí, 100% gratis y sin compromiso. La hacemos porque sabemos que cuando ves el valor, muchos clientes contratan la implementación o servicios adicionales. Es nuestra forma de demostrar expertise antes de que pagues.",
    ],
  },
  {
    question: "¿Necesito conocimientos técnicos para entender el reporte?",
    answer: [
      "No. Escribimos en lenguaje claro. Cada problema técnico lo explicamos así:",
      "Qué es",
      "Por qué afecta tu SEO",
      "Cómo solucionarlo (o quién puede hacerlo)",
      "Si algo no queda claro, agendamos llamada explicativa.",
    ],
  },
  {
    question: "¿Cuánto tarda en verse el impacto de corregir los errores?",
    answer: [
      "Depende del tipo de error:",
      "Indexación/rastreo: 1-2 semanas (Google re-rastrea)",
      "Velocidad: Inmediato (usuarios + Google lo notan en días)",
      "SEO on-page: 3-6 semanas (Google re-evalúa relevancia)",
      "Posicionamiento: 2-3 meses (competencia, autoridad, tiempo)",
      "Los errores técnicos son la base. Sin corregirlos, el resto del SEO no funciona.",
    ],
  },
  {
    question: "¿Ustedes implementan las correcciones o solo auditan?",
    answer: [
      "Ofrecemos ambos:",
      "Solo auditoría: Recibes el reporte y lo implementas tú (o tu equipo)",
      "Auditoría + implementación: Nosotros corregimos todo (cotizamos por separado)",
      "La mayoría de clientes prefiere que implementemos porque ahorra tiempo y evita errores.",
    ],
  },
  {
    question: "¿Qué pasa si la auditoría encuentra que mi sitio está bien?",
    answer: [
      "Te lo decimos con honestidad. Si técnicamente tu sitio está optimizado, el problema puede ser:",
      "Falta de contenido de calidad",
      "Competencia muy fuerte",
      "Nula autoridad de dominio (backlinks)",
      "Keywords demasiado competitivas",
      "Te orientamos hacia la solución real, no vendemos auditorías innecesarias.",
    ],
  },
  {
    question: "¿Hacen auditoría de sitios en cualquier plataforma?",
    answer: [
      "Sí. Auditamos:",
      "WordPress, Shopify, Wix, Webflow",
      "Sitios custom (React, Next.js, Vue, etc.)",
      "E-commerce (WooCommerce, PrestaShop, Magento)",
      "Landing pages",
      "Blogs",
      "La auditoría técnica SEO aplica independiente de la tecnología.",
    ],
  },
  {
    question: "¿Incluye análisis de penalizaciones de Google?",
    answer: [
      "Sí. Si Google Search Console muestra \"Acciones Manuales\" o sospechas de penalización algorítmica, lo identificamos y te decimos cómo recuperarte.",
    ],
  },
  {
    question: "¿Qué necesito para solicitar la auditoría?",
    answer: [
      "Solo:",
      "URL de tu sitio web",
      "Tu email",
      "(Opcional) Acceso a Google Search Console (si tienes)",
      "No necesitas acceso al hosting ni al código. Con la URL hacemos el 90% del análisis.",
    ],
  },
  {
    question: "¿Atienden fuera de Santiago?",
    answer: [
      "Sí, 100% remoto. Trabajamos con clientes en todo Chile (Santiago, Valparaíso, Concepción, regiones) y también en otros países de Latinoamérica.",
    ],
  },
  {
    question: "¿Ofrecen garantía?",
    answer: [
      "Garantizamos:",
      "Entrega del reporte en plazo acordado",
      "Identificación de errores técnicos reales",
      "Claridad en el análisis",
      "No garantizamos posiciones en Google (nadie honesto puede hacerlo), pero sí garantizamos que tu sitio tendrá bases técnicas sólidas para posicionar.",
    ],
  },
]

const auditoriaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: auditoriaFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
}

const auditoriaBreadcrumbSchema = {
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
      name: "Auditoría SEO técnica",
      item: "https://focusweb.cl/servicios/auditoria-seo-tecnico",
    },
  ],
}

const auditoriaWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Auditoría SEO Técnica: Identifica Qué Está Frenando Tu Sitio",
  url: "https://focusweb.cl/servicios/auditoria-seo-tecnico",
  description:
    "Auditoría SEO técnica completa para tu sitio web en Chile. Identificamos errores, oportunidades y creamos plan de acción priorizado. Primera auditoría GRATIS con reporte inicial en 48 horas.",
  isPartOf: {
    "@type": "WebSite",
    name: "FocusWeb Chile",
    url: "https://focusweb.cl",
  },
}

const auditAreas = [
  {
    title: "1. Análisis de Indexación y Rastreo",
    cardClass: "border border-emerald-400/45 bg-emerald-50/80 hover:shadow-emerald-500/10",
    titleClass: "text-emerald-700",
    intro: "Verificamos si Google puede acceder a todas tus páginas importantes:",
    items: [
      "Estado de indexación en Google Search Console",
      "Errores de rastreo (4xx, 5xx, timeouts)",
      "Páginas bloqueadas por robots.txt",
      "Revisamos páginas sin enlaces internos",
    ],
  },
  {
    title: "2. SEO On-Page Técnico",
    cardClass: "border border-sky-400/45 bg-sky-50/80 hover:shadow-sky-500/10",
    titleClass: "text-sky-700",
    intro: "Revisamos los elementos que Google lee para entender tu contenido:",
    items: [
      "Títulos (Title Tags): Duplicados, muy largos/cortos, sin keywords",
      "Meta Descriptions: Faltantes, duplicadas, no optimizadas",
      "Headings (H1-H6): Estructura correcta, jerarquía lógica",
      "URLs: Amigables vs crípticas, parámetros innecesarios",
      "Canonical Tags: Evitar contenido duplicado",
    ],
  },
  {
    title: "3. Optimización de Contenido",
    cardClass: "border border-amber-400/50 bg-amber-100/75 hover:shadow-amber-500/10",
    titleClass: "text-amber-700",
    intro: "Evaluamos si tu contenido está optimizado para rankear:",
    items: [
      "Sugerencias de contenido acorde a la intención de búsqueda",
      "Oportunidades de mejora en páginas con contenido insuficiente",
      "Alt text en imágenes (accesibilidad + SEO)",
      "Internal linking (estructura de enlaces internos)",
      "Enlaces rotos (404s internos)",
    ],
  },
  {
    title: "4. Performance y Core Web Vitals",
    cardClass: "border border-fuchsia-400/45 bg-fuchsia-50/80 hover:shadow-fuchsia-500/10",
    titleClass: "text-fuchsia-700",
    intro: "Medimos velocidad y experiencia de usuario (factores de ranking):",
    items: [
      "LCP (Largest Contentful Paint): Velocidad de carga percibida",
      "FID (First Input Delay): Interactividad",
      "CLS (Cumulative Layout Shift): Estabilidad visual",
      "PageSpeed Score (mobile y desktop)",
      "Tiempo de respuesta del servidor",
    ],
  },
  {
    title: "5. Schema Markup y Datos Estructurados",
    cardClass: "border border-cyan-400/45 bg-cyan-50/80 hover:shadow-cyan-500/10",
    titleClass: "text-cyan-700",
    intro: "Verificamos si ayudas a Google a entender tu contenido:",
    items: [
      "Tipos de Schema implementados (Organization, LocalBusiness, Product, etc.)",
      "Errores en JSON-LD",
      "Oportunidades de Rich Snippets (estrellas, precios, FAQs)",
      "Validación con Google Rich Results Test",
    ],
  },
  {
    title: "6. Mobile, Seguridad y Accesibilidad",
    cardClass: "border border-violet-400/45 bg-violet-50/80 hover:shadow-violet-500/10",
    titleClass: "text-violet-700",
    intro: "Revisamos usabilidad móvil y señales de confianza técnica:",
    items: [
      "Mobile usability en Google Search Console",
      "Responsive design, tamaño de fuentes y botones clickeables",
      "Viewport configuration e intersticiales intrusivos",
      "HTTPS implementado correctamente y certificado SSL válido",
    ],
  },
]

export default function AuditoriaSeoTecnicoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl shadow-primary/5 sm:p-10">
              <SiteBreadcrumb
                className="mb-5"
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Servicios", href: "/servicios" },
                  { label: "Auditoría SEO técnica" },
                ]}
              />
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Auditoría SEO Técnica: Identifica Qué Está Frenando Tu Sitio
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Si tu sitio web no aparece en Google, tiene problemas de indexación o simplemente no entiendes por qué
                no genera tráfico, necesitas saber exactamente qué está fallando.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Una auditoría SEO técnica es el primer paso para cualquier estrategia de posicionamiento web. Sin ella,
                estás optimizando a ciegas.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                <strong>En FocusWeb realizamos auditorías técnicas enfocadas en resultados medibles</strong>, no en
                reportes de 100 páginas que nadie lee. Identificamos los errores críticos que están impactando tu
                visibilidad en Google y te entregamos un plan de acción priorizado por impacto real.
              </p>

              <h2 className="mt-7 text-2xl font-bold text-foreground sm:text-3xl">Lo que hace diferente nuestra auditoría:</h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>
                  ✓ <strong>Priorización por impacto</strong> - No todo es urgente. Te decimos qué arreglar primero.
                </li>
                <li>
                  ✓ <strong>Lenguaje claro</strong> - Sin tecnicismos innecesarios. Entiendes cada problema.
                </li>
                <li>
                  ✓ <strong>Plan ejecutable</strong> - No solo problemas, sino soluciones concretas.
                </li>
                <li>
                  ✓ <strong>Primera auditoría gratis</strong> - Sin compromiso. Ves el valor antes de contratar.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Ir auditoría gratis
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                ¿Por Qué Tu Sitio Web No Aparece en Google?
              </h2>

              <p className="mt-5 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                La mayoría de los sitios web en Chile tienen problemas técnicos SEO que los hacen invisibles en Google,
                y sus dueños ni siquiera lo saben.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-foreground">Síntomas comunes de problemas SEO técnicos:</h3>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Tu sitio no aparece</strong> cuando buscas tus servicios en Google
                </li>
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Tráfico orgánico muy bajo</strong> o estancado hace meses
                </li>
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Google Search Console lleno de errores</strong> que no entiendes
                </li>
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Páginas importantes no indexadas</strong> (Google no las encuentra)
                </li>
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Posiciones bajando</strong> sin razón aparente
                </li>
                <li>
                  <span className="mr-2 text-red-600">✖</span>
                  <strong>Competencia te supera</strong> aunque tu producto/servicio es mejor
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-foreground">La causa real:</h3>
              <p className="mt-3 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                El 80% de los problemas de posicionamiento son técnicos, no de contenido:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                <li>Errores de indexación (Google no puede rastrear tu sitio)</li>
                <li>Meta tags mal configurados (títulos duplicados, descriptions vacías)</li>
                <li>Velocidad de carga muy lenta (Google penaliza sitios lentos)</li>
                <li>Estructura de URLs caótica (dificulta rastreo)</li>
                <li>Schema markup ausente o mal implementado</li>
                <li>Problemas de canonicalización (contenido duplicado)</li>
              </ul>

              <p className="mt-6 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                <strong>Una auditoría SEO técnica identifica TODO esto</strong> y te dice exactamente cómo
                solucionarlo.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Qué incluye nuestra auditoría SEO técnico
              </h2>
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Nuestra auditoría cubre 6 áreas críticas que determinan si Google puede encontrar, entender y rankear
                tu sitio web:
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {auditAreas.map((area) => (
                  <article
                    key={area.title}
                    className={`rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${area.cardClass}`}
                  >
                    <h3 className={`text-lg font-bold leading-snug ${area.titleClass}`}>
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{area.intro}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/75">
                      {area.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Qué NO Incluye Esta Auditoría (Para Mantener Claridad)
              </h2>

              <div className="mt-5 rounded-2xl border border-red-300/60 bg-red-50/80 p-5 sm:p-6">
                <p className="inline-flex rounded-full border border-red-300/70 bg-red-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-red-700">
                  Alcance excluido
                </p>
                <p className="mt-3 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                  Para ser transparentes, esta auditoría se enfoca en aspectos técnicos. NO incluye:
                </p>

                <ul className="mt-4 space-y-2 text-base leading-relaxed text-foreground/80 sm:text-lg">
                  <li>
                    <span className="mr-2 text-red-600">❌</span>
                    Investigación profunda de keywords (eso es estrategia de contenido)
                  </li>
                  <li>
                    <span className="mr-2 text-red-600">❌</span>
                    Análisis extenso de backlinks (profile completo de enlaces)
                  </li>
                  <li>
                    <span className="mr-2 text-red-600">❌</span>
                    Auditoría de contenido página por página (eso toma semanas)
                  </li>
                  <li>
                    <span className="mr-2 text-red-600">❌</span>
                    Estrategia competitiva completa
                  </li>
                  <li>
                    <span className="mr-2 text-red-600">❌</span>
                    Plan de link building
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold text-foreground">¿Por qué?</h3>
                <p className="mt-3 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                  Porque esos servicios requieren 20-40 horas adicionales de trabajo. Nuestra auditoría técnica te da
                  lo esencial para empezar a rankear sin perder semanas en pruebas al azar.
                </p>
                <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                  Si después del análisis técnico necesitas servicios adicionales (keywords, contenido, backlinks), te
                  lo indicamos claramente en el reporte y cotizamos por separado.
                </p>
                <p className="mt-4 max-w-5xl text-base font-semibold leading-relaxed text-foreground/90 sm:text-lg">
                  Sin letra chica. Sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Cómo Funciona Nuestra Auditoría SEO Técnica
              </h2>

              <div className="mt-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <article className="rounded-2xl border border-success/40 bg-success/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-success/10">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success text-sm font-bold text-success-foreground">
                        1
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-success">Inicio</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Paso 1: Solicitas Auditoría (5 minutos)</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">Completas formulario con:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
                    <li>URL de tu sitio</li>
                    <li>Tu email</li>
                    <li>Acceso a Google Search Console (opcional pero recomendado)</li>
                  </ul>
                  </article>

                  <article className="rounded-2xl border border-info/40 bg-info/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-info/10">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-info text-sm font-bold text-info-foreground">
                        2
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-info">Análisis</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Paso 2: Análisis Técnico (hasta 7 días)</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Nuestro equipo analiza tu sitio con herramientas profesionales:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
                    <li>Google Search Console</li>
                    <li>PageSpeed Insights</li>
                    <li>Screaming Frog SEO Spider</li>
                    <li>Ahrefs Site Audit</li>
                    <li>Schema Markup Validator</li>
                    <li>Mobile-Friendly Test</li>
                  </ul>
                  </article>
                </div>

                <article className="mt-5 rounded-2xl border border-violet-400/45 bg-violet-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                      3
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-violet-700">Entrega</span>
                  </div>
                <h3 className="text-xl font-bold text-foreground">Paso 3: Reporte Priorizado (PDF)</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">Recibes documento con:</p>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-border/60 bg-card p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      A) Resumen Ejecutivo
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                      <li>Estado general del sitio (score 0-100)</li>
                      <li>Top 5 problemas críticos</li>
                      <li>Impacto estimado de corregirlos</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-card p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      B) Análisis Detallado por Área
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                      <li>Cada problema identificado</li>
                      <li>Por qué afecta tu SEO</li>
                      <li>Cómo solucionarlo (técnico pero claro)</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-card p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      C) Plan de Acción Priorizado
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                      <li>Qué arreglar primero (alto impacto, baja dificultad)</li>
                      <li>Qué dejar para después</li>
                      <li>Estimación de tiempo/costo</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="/reporte-ejemplo-auditoria-seo.pdf"
                  download
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  Descargar ejemplo real de reporte (PDF)
                </a>
              </article>

                <article className="mt-5 rounded-2xl border border-amber-500/50 bg-amber-100/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      4
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">Seguimiento</span>
                  </div>
                <h3 className="text-xl font-bold text-foreground">
                  Paso 4: Videollamada Explicativa (30 min - Opcional)
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">Si lo necesitas, agendamos llamada para:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
                  <li>Explicar hallazgos en detalle</li>
                  <li>Responder dudas</li>
                  <li>Cotizar implementación si la quieres delegar</li>
                </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Qué Logras con Esta Auditoría</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-success/40 bg-success/10 p-5">
                  <h3 className="text-xl font-bold text-foreground">Inmediato (al recibir el reporte):</h3>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/80">
                    <li>✓ Claridad total sobre qué está mal en tu sitio</li>
                    <li>✓ Hoja de ruta priorizada para mejorar SEO</li>
                    <li>✓ Ahorro de tiempo - No pruebas cosas al azar</li>
                    <li>✓ Ahorro de dinero - Sabes exactamente qué vale la pena arreglar</li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-info/40 bg-info/10 p-5">
                  <h3 className="text-xl font-bold text-foreground">A 30 días (si implementas correcciones):</h3>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/80">
                    <li>✓ Errores críticos resueltos (indexación, rastreo)</li>
                    <li>✓ Google Search Console sin errores rojos</li>
                    <li>✓ Mejora en velocidad de carga (si aplica)</li>
                    <li>✓ Estructura técnica sólida</li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-amber-500/50 bg-amber-100/70 p-5">
                  <h3 className="text-xl font-bold text-foreground">A 90 días (con correcciones + contenido básico):</h3>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/80">
                    <li>✓ Aumento de páginas indexadas</li>
                    <li>✓ Mejora en posiciones promedio</li>
                    <li>✓ Incremento tráfico orgánico (15-40%)</li>
                    <li>✓ Base técnica lista para escalar SEO</li>
                  </ul>
                </article>
              </div>

              <p className="mt-7 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                <strong>Importante:</strong> Los resultados de posicionamiento dependen también de contenido,
                competencia y tiempo. La auditoría te da la base técnica sólida, pero el SEO es un proceso continuo.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">¿Es Esta Auditoría Para Ti?</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-success/40 bg-success/10 p-5">
                  <h3 className="text-xl font-bold text-foreground">✅ IDEAL SI:</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
                    <li>Tienes un sitio web funcionando hace +6 meses</li>
                    <li>Sabes que algo está mal pero no qué exactamente</li>
                    <li>Has intentado SEO por tu cuenta sin resultados</li>
                    <li>Contratas freelancers/agencias y quieres validar su trabajo</li>
                    <li>Vas a invertir en SEO y quieres empezar bien</li>
                    <li>Tu sitio tuvo tráfico antes pero cayó sin razón</li>
                    <li>Migraste de plataforma y el tráfico bajó</li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-red-300/60 bg-red-50/80 p-5">
                  <h3 className="text-xl font-bold text-foreground">❌ NO ES PARA TI SI:</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
                    <li>Tu sitio tiene menos de 1 mes online (muy pronto para auditar)</li>
                    <li>No tienes sitio web (necesitas desarrollo, no auditoría)</li>
                    <li>Quieres posicionarte para keywords ultra-competitivas sin presupuesto</li>
                    <li>Esperas resultados en 1 semana (SEO toma 2-3 meses mínimo)</li>
                    <li>No estás dispuesto a implementar correcciones</li>
                  </ul>
                </article>
              </div>

              <div className="mt-7 rounded-2xl border border-primary/30 bg-primary/10 p-5">
                <h3 className="text-xl font-bold text-foreground">¿No estás seguro?</h3>
                <p className="mt-3 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                  Solicita la auditoría gratis de todas formas. En el peor caso, confirmas que tu sitio está
                  técnicamente bien y el problema es otro (contenido, backlinks, competencia).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Precios de Auditoría SEO Técnica</h2>
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Ofrecemos 3 niveles según profundidad de análisis. El objetivo es que elijas el alcance que realmente
                necesitas, sin pagar por extras que hoy no aportan valor.
              </p>

              <div className="mt-6 grid gap-5 xl:grid-cols-3">
                <article className="rounded-2xl border border-border/60 bg-background/70 p-5">
                  <p className="inline-flex rounded-full border border-success/40 bg-success/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-success">
                    Nivel 1
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">Auditoría Básica (GRATIS)</h3>
                  <p className="mt-2 text-sm text-foreground/75">
                    <strong>Ideal para:</strong> Primeros clientes, sitios pequeños (&lt;20 páginas)
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">Incluye:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                    <li>Análisis Google Search Console</li>
                    <li>Errores críticos de indexación</li>
                    <li>Revisión básica SEO on-page</li>
                    <li>Reporte PDF de 5-8 páginas</li>
                    <li>Top 5 problemas prioritarios</li>
                  </ul>
                  <div className="mt-5 space-y-1 text-sm text-foreground/80">
                    <p><strong>Precio:</strong> $0 CLP (sin compromiso)</p>
                    <p><strong>Tiempo:</strong> Hasta 48 horas</p>
                    <p><strong>Entrega:</strong> PDF por email</p>
                  </div>
                </article>

                <article className="rounded-2xl border border-info/45 bg-info/10 p-5">
                  <p className="inline-flex rounded-full border border-info/40 bg-info/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-info">
                    Más elegido
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">Auditoría Estándar</h3>
                  <p className="mt-2 text-sm text-foreground/75">
                    <strong>Ideal para:</strong> PYMES, e-commerce, sitios corporativos
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">Incluye:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                    <li>Todo lo de Básica +</li>
                    <li>Análisis profundo de performance</li>
                    <li>Schema markup completo</li>
                    <li>Análisis competencia (top 3)</li>
                    <li>Reporte PDF detallado y priorizado</li>
                    <li>Videollamada explicativa (30 min)</li>
                    <li>Plan de acción detallado</li>
                  </ul>
                  <div className="mt-5 space-y-1 text-sm text-foreground/80">
                    <p><strong>Precio:</strong> Desde $110.000 CLP</p>
                    <p><strong>Tiempo:</strong> Hasta 7 días</p>
                    <p><strong>Entrega:</strong> PDF + llamada</p>
                  </div>
                </article>

                <article className="rounded-2xl border border-amber-500/50 bg-amber-100/70 p-5">
                  <p className="inline-flex rounded-full border border-amber-500/50 bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                    Nivel avanzado
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">Auditoría Premium</h3>
                  <p className="mt-2 text-sm text-foreground/75">
                    <strong>Ideal para:</strong> E-commerce grandes, sitios enterprise
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">Incluye:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                    <li>Todo lo de Estándar +</li>
                    <li>Análisis de arquitectura de información</li>
                    <li>Revisión de oportunidades keywords</li>
                    <li>Análisis backlinks básico</li>
                    <li>Recomendaciones de contenido</li>
                    <li>2 videollamadas (explicación + seguimiento)</li>
                    <li>Soporte 30 días post-auditoría</li>
                  </ul>
                  <div className="mt-5 space-y-1 text-sm text-foreground/80">
                    <p><strong>Precio:</strong> Desde $350.000 CLP</p>
                    <p><strong>Tiempo:</strong> Hasta 14 días</p>
                    <p><strong>Entrega:</strong> PDF + 2 llamadas + soporte</p>
                  </div>
                </article>
              </div>

              <p className="mt-6 max-w-5xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                Nota: esta auditoría entrega diagnóstico técnico y priorización. Los resultados finales dependen de la
                implementación y del contexto competitivo de cada nicho.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Preguntas Frecuentes sobre Auditoría SEO Técnica
              </h2>

              <div className="mt-6 space-y-4">
                {auditoriaFaqItems.map((item, index) => (
                  <article key={item.question} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                    {index < 3 ? (
                      <>
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                          {index + 1}. {item.question}
                        </h3>
                        <div className="mt-3 space-y-2 text-base leading-relaxed text-foreground/80">
                          {item.answer.map((line, lineIndex) => (
                            <p key={`${item.question}-${lineIndex}`}>{line}</p>
                          ))}
                        </div>
                      </>
                    ) : (
                      <details>
                        <summary className="cursor-pointer text-lg font-semibold text-foreground sm:text-xl">
                          {index + 1}. {item.question}
                        </summary>
                        <div className="mt-3 space-y-2 text-base leading-relaxed text-foreground/80">
                          {item.answer.map((line, lineIndex) => (
                            <p key={`${item.question}-${lineIndex}`}>{line}</p>
                          ))}
                        </div>
                      </details>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="solicitar-auditoria" className="scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="container mx-auto max-w-6xl">
            <AuditoriaSeoCtaForm />
          </div>
        </section>
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditoriaFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditoriaBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditoriaWebPageSchema) }}
      />
      <FloatingWhatsApp />
    </>
  )
}
