import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Mi página web tarda mucho en cargar: causas y soluciones en Chile | Focus Web",
  description:
    "Descubre por qué tu página web tarda mucho en cargar, cómo impacta en SEO y ventas, y qué acciones priorizar para optimizar WordPress en Chile.",
  alternates: {
    canonical: "/blog/mi-pagina-web-tarda-mucho-en-cargar",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/mi-pagina-web-tarda-mucho-en-cargar",
    title: "Mi página web tarda mucho en cargar: causas y soluciones en Chile | Focus Web",
    description:
      "Guía práctica para entender por qué tu web es lenta, cómo medir Core Web Vitals y qué hacer para mejorar velocidad y conversión.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-mi-sitio-carga-lento.webp",
        width: 1200,
        height: 630,
        alt: "Mi página web tarda mucho en cargar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi página web tarda mucho en cargar: causas y soluciones en Chile | Focus Web",
    description:
      "Guía práctica para entender por qué tu web es lenta, cómo medir Core Web Vitals y qué hacer para mejorar velocidad y conversión.",
    images: ["https://focusweb.cl/og-mi-sitio-carga-lento.webp"],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué hago si mi página web tarda mucho en cargar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primero diagnostica bloqueadores de carga, imágenes pesadas, scripts externos y caché. Luego prioriza mejoras por impacto en experiencia y conversión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué Core Web Vitals debo revisar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Revisa LCP para carga principal, INP para respuesta de interacción y CLS para estabilidad visual durante la carga.",
      },
    },
    {
      "@type": "Question",
      name: "¿Conviene una auditoría SEO técnica si ya optimicé lo básico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cuando el sitio sigue lento tras optimizaciones básicas, la auditoría técnica ayuda a detectar cuellos de botella de servidor, arquitectura y recursos bloqueantes.",
      },
    },
  ],
}

export default function BlogPostPage() {
  return (
    <>
      <Script id="blog-velocidad-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Tiempo de lectura: 8 min</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Mi página web tarda mucho en cargar: causas reales y soluciones efectivas en Chile
              </h1>

              <p>
                Si alguna vez has pensado <strong>&quot;mi página web tarda mucho en cargar&quot;</strong>, no estás solo.
                Es una de las consultas más comunes en pymes y emprendedores en Chile, especialmente en sitios
                desarrollados en WordPress.
              </p>

              <p>
                Y no, no es solo un problema técnico. Una web lenta impacta directamente en tus visitas, conversiones y
                posicionamiento en Google. En este artículo verás por qué ocurre y cuál es una solución real.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/impacto-en-velocidad.webp"
                    alt="Impacto de la velocidad en rebote y conversiones"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                ¿Por qué una página web lenta es un problema serio hoy?
              </h2>

              <p>
                En Chile, la mayoría de usuarios navega desde móvil. Eso implica menos paciencia y más abandono cuando
                la carga se alarga.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Aumenta la tasa de rebote.</li>
                <li>Disminuyen las conversiones.</li>
                <li>Se afecta el rendimiento SEO.</li>
                <li>La marca se percibe menos profesional.</li>
              </ul>

              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                &quot;La velocidad no es un detalle técnico: es parte de tu experiencia de venta.&quot;
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Core Web Vitals: qué son y por qué importan en Chile
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Qué son los Core Web Vitals?</h3>
              <p>
                Son métricas que Google usa para medir experiencia real del usuario. Si buscas{" "}
                <strong>core web vitals chile qué son</strong>, piensa en una respuesta simple: indicadores de rapidez y
                usabilidad.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>LCP:</strong> carga del contenido principal.
                </li>
                <li>
                  <strong>INP:</strong> respuesta ante interacción.
                </li>
                <li>
                  <strong>CLS:</strong> estabilidad visual.
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Por qué afecta tanto a sitios locales?</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Hosting mal configurado o sin foco regional.</li>
                <li>WordPress sin optimización base.</li>
                <li>Themes pesados centrados solo en diseño.</li>
                <li>Demasiados plugins activos.</li>
              </ul>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/metricas-core.webp"
                    alt="Métricas de Core Web Vitals en móvil"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Principales causas de una web lenta en WordPress
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Hosting deficiente</h3>
              <p>Un servidor lento afecta todo el sitio, incluso si el diseño está correcto.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">WordPress sin optimización</h3>
              <p>Sin ajustes técnicos, WordPress puede cargar recursos innecesarios en cada página.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Imágenes pesadas</h3>
              <p>Subir imágenes sin compresión sigue siendo uno de los errores más comunes.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Plugins y scripts externos</h3>
              <p>Chats, píxeles, mapas y plugins en exceso aumentan solicitudes y tiempo de render.</p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Cómo optimizar la velocidad de WordPress en Chile</h2>
              <p>
                Si buscas <strong>optimizar velocidad WordPress Chile</strong>, estas acciones suelen dar mejor retorno:
              </p>

              <div className="rounded-2xl border border-info/35 bg-gradient-to-br from-info/15 via-card to-primary/10 p-5 shadow-md shadow-info/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Checklist en 30 segundos</h3>
                <p className="mt-1 text-sm text-foreground/75">
                  Si respondes “no” a 2 o más puntos, vale la pena priorizar optimización.
                </p>
                <ul className="mt-4 space-y-2 text-foreground/85">
                  <li>¿Tu home carga en menos de 3 segundos en móvil?</li>
                  <li>¿Tus imágenes principales están comprimidas o en WebP?</li>
                  <li>¿Tienes plugins activos que ya no usas?</li>
                  <li>¿Tu hosting responde rápido en Chile/LATAM?</li>
                  <li>¿PageSpeed muestra alertas críticas en rojo?</li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Acciones básicas de alto impacto</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Configurar caché de forma correcta.</li>
                <li>Comprimir imágenes existentes.</li>
                <li>Eliminar plugins innecesarios.</li>
                <li>Cargar scripts de forma diferida.</li>
                <li>Optimizar CSS, fuentes y recursos críticos.</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Acciones técnicas avanzadas</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Implementar CDN con configuración adecuada.</li>
                <li>Optimizar servidor y stack de hosting.</li>
                <li>Revisar theme y arquitectura del sitio.</li>
                <li>Reducir recursos bloqueantes de render.</li>
              </ul>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/check-list-optimizacion.webp"
                    alt="Checklist de optimización WordPress"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                ¿Cómo saber si tu sitio lento necesita una auditoría SEO técnica?
              </h2>
              <p>
                Probar plugins sin diagnóstico rara vez resuelve el problema de fondo. Cuando el sitio sigue lento, lo
                más eficiente es una revisión técnica estructurada.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Señales de alerta</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>El sitio sigue lento pese a optimizaciones básicas.</li>
                <li>Errores recurrentes en PageSpeed.</li>
                <li>Core Web Vitals fuera de rango.</li>
                <li>Baja conversión desde tráfico orgánico.</li>
              </ul>

              <p>
                Si te identificas con esto, revisa primero nuestra{" "}
                <a href="/metodologia" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  metodología de diagnóstico inicial
                </a>{" "}
                y luego decide si avanzar a auditoría completa.
              </p>

              <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
                <h3 className="text-xl sm:text-2xl font-semibold">Ejemplo real (antes y después)</h3>
                <p className="mt-2 text-muted-foreground">
                  En un sitio de servicios, el tiempo de carga móvil bajó de <strong>6,1s</strong> a{" "}
                  <strong>2,8s</strong> tras optimizar imágenes, caché y scripts bloqueantes. El rebote en la página
                  principal se redujo de <strong>68%</strong> a <strong>44%</strong> en 4 semanas.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Página web lenta: solución según tu tipo de negocio
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Pymes y emprendimientos:</strong> optimización base y prioridades por impacto.
                </li>
                <li>
                  <strong>Sitios corporativos:</strong> auditoría técnica y mejoras progresivas.
                </li>
                <li>
                  <strong>Ecommerce:</strong> optimización profunda y control continuo.
                </li>
              </ul>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/antes-despues.webp"
                    alt="Comparativa antes y después de optimización web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                FAQ breve: velocidad, SEO técnico y próximos pasos
              </h2>

              <div className="space-y-3">
                <details className="rounded-xl border border-border/60 bg-card p-4">
                  <summary className="cursor-pointer font-semibold">
                    ¿Una web lenta puede afectar mis ventas aunque tenga visitas?
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Sí. Si la experiencia es lenta, más usuarios abandonan antes de contactarte o comprar.
                  </p>
                </details>
                <details className="rounded-xl border border-border/60 bg-card p-4">
                  <summary className="cursor-pointer font-semibold">
                    ¿WordPress es el problema o la configuración?
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Generalmente no es WordPress en sí, sino la configuración, plugins, theme y servidor.
                  </p>
                </details>
                <details className="rounded-xl border border-border/60 bg-card p-4">
                  <summary className="cursor-pointer font-semibold">
                    ¿Qué hago primero si mi web tarda mucho en cargar?
                  </summary>
                  <p className="mt-2 text-muted-foreground">
                    Empieza por diagnóstico: mide, prioriza y ejecuta cambios por impacto. Puedes partir desde{" "}
                    <a href="/metodologia" className="text-primary hover:text-primary/80 underline underline-offset-4">
                      metodología
                    </a>
                    .
                  </p>
                </details>
              </div>

              <section
                id="cta-final"
                className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-info/10 p-6 sm:p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  Conclusión: la velocidad es una decisión estratégica
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Si tu web carga lento, no es solo un tema técnico: impacta experiencia, SEO y ventas. El siguiente
                  paso natural es auditar con criterio y ejecutar mejoras en orden.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/metodologia"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Ir al diagnóstico inicial
                  </a>
                  <a
                    href="/precios"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/5"
                  >
                    Ver precios
                  </a>
                  <a
                    href="/blog/errores-paginas-web-pymes-chile"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                  >
                    Leer artículo relacionado
                  </a>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
