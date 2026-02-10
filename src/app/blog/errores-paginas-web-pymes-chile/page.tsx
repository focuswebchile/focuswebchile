import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "10 Errores Críticos en Páginas Web de PyMEs Chilenas (Y Cómo Evitarlos)",
  description:
    "Descubre los 10 errores más comunes al crear páginas web en Chile que están costando dinero a las PyMEs. Guía práctica con soluciones reales de desarrollo web.",
  alternates: {
    canonical: "/blog/errores-paginas-web-pymes-chile",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/errores-paginas-web-pymes-chile",
    title: "10 Errores Críticos en Páginas Web de PyMEs Chilenas (Y Cómo Evitarlos)",
    description:
      "Descubre los 10 errores más comunes al crear páginas web en Chile que están costando dinero a las PyMEs. Guía práctica con soluciones reales de desarrollo web.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-10%20errores.webp",
        width: 1200,
        height: 630,
        alt: "10 errores críticos en páginas web de PyMEs chilenas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Errores Críticos en Páginas Web de PyMEs Chilenas (Y Cómo Evitarlos)",
    description:
      "Descubre los 10 errores más comunes al crear páginas web en Chile que están costando dinero a las PyMEs. Guía práctica con soluciones reales de desarrollo web.",
    images: ["https://focusweb.cl/og-10%20errores.webp"],
  },
}

const articleAndBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "10 Errores Críticos en Páginas Web de PyMEs Chilenas (Y Cómo Evitarlos)",
      description:
        "Descubre los 10 errores más comunes al crear páginas web en Chile que están costando dinero a las PyMEs.",
      image: ["https://focusweb.cl/og-10%20errores.webp"],
      author: { "@type": "Organization", name: "Focus Web" },
      publisher: {
        "@type": "Organization",
        name: "Focus Web",
        logo: { "@type": "ImageObject", url: "https://focusweb.cl/logo-512.png" },
      },
      datePublished: "2026-02-02",
      dateModified: "2026-02-02",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/errores-paginas-web-pymes-chile",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://focusweb.cl" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://focusweb.cl/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Errores en páginas web de PyMEs",
          item: "https://focusweb.cl/blog/errores-paginas-web-pymes-chile",
        },
      ],
    },
  ],
}

export default function BlogPostPage() {
  return (
    <>
      <Script id="blog-errores-pymes-schema" type="application/ld+json">
        {JSON.stringify(articleAndBreadcrumbSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Tiempo de lectura: 10 min
              </p>
              <header className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  10 Errores Críticos Que Cometen las PyMEs Chilenas en Sus Páginas Web
                </h1>
                <p className="text-lg font-semibold text-muted-foreground">(Y Cómo Evitarlos)</p>
              </header>

              <p>
                Cada vez que recibimos en FocusWeb consultas de PyMEs que necesitan “arreglar” su sitio web, casi siempre
                encontramos los mismos problemas. Lo curioso es que muchos de estos errores son fáciles de solucionar,
                pero pueden estar costándote clientes sin que te des cuenta.
              </p>

              <p>
                Después de auditar más de 50 sitios web chilenos <strong>(datos de FocusWeb, 2025)</strong>, identificamos
                los 10 errores más comunes. La buena noticia: todos tienen solución.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/identificamos-10-errores.webp"
                    alt="Identificamos 10 errores críticos en sitios de PyMEs"
                    fill
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">1. Esconder tu información de contacto</h2>
                <p>
                  Parece obvio, pero según nuestras auditorías en FocusWeb, el 93% de las PyMEs chilenas no muestra un
                  email visible en su página de inicio. Si un cliente interesado no encuentra cómo contactarte en 5
                  segundos, simplemente se va a la competencia.
                </p>
                <p>
                  <strong>La solución:</strong> Teléfono y email en el header, siempre visibles. Agrega un botón de
                  WhatsApp flotante y asegúrate de tener una página de contacto clara con formulario, mapa y horarios.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">2. No estar optimizado para celulares</h2>
                <p>
                  En Chile, el acceso a la información y a internet está fuertemente marcado por el uso de dispositivos
                  móviles: el 93,2% de los usuarios se conecta mediante un smartphone, mientras que un 72,2% lo hace
                  desde laptops o computadores de escritorio. Esta diferencia refleja una preferencia evidente por la
                  movilidad al momento de consumir contenidos digitales.{" "}
                  <a
                    href="https://marketing4ecommerce.cl/estado-de-la-conexion-a-internet-en-chile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    (fuente)
                  </a>
                </p>
                <p>
                  <strong>Test rápido:</strong> Abre tu web desde tu celular. ¿Tienes que hacer zoom para leer? ¿Los
                  botones son imposibles de clickear? Entonces tienes un problema urgente.
                </p>
              </section>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/diseñosdel-2010.webp"
                    alt="Diseños web que parecen de 2010"
                    fill
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">3. Diseño que parece de 2010</h2>
                <p>
                  Tienes 0.05 segundos para causar una buena primera impresión. Un diseño anticuado con fondos raros,
                  textos centrados y GIFs animados comunica: <em>“Este negocio no se actualiza”</em>.
                </p>
                <p>
                  Si tu sitio tiene un contador de visitas o usa Comic Sans, es momento de un rediseño. En{" "}
                  <a href="/nuestro-proceso" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    nuestro proceso
                  </a>{" "}
                  conocerás nuestro paso a paso para que entiendas cómo trabajamos y que la idea es convertir visitas en
                  clientes o contactos.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">4. Contenido desactualizado</h2>
                <p>
                  El blog con el último post de 2019. La foto del equipo con personas que ya no trabajan ahí. Precios
                  desactualizados. Todo esto grita <em>“abandono”</em> y mata tu credibilidad.
                </p>
                <p>
                  <strong>La solución:</strong> Haz una auditoría completa de tu contenido. Si no puedes mantener un{" "}
                  <a href="/blog" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    blog
                  </a>
                  , mejor elimínalo y enfócate en una FAQ sólida.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">5. Sin certificado SSL (HTTP en vez de HTTPS)</h2>
                <p>
                  Si tu URL empieza con <code>http://</code> en lugar de <code>https://</code>, Chrome muestra una alerta
                  roja de “No seguro”. El 84% de los usuarios abandonan sitios sin SSL.
                </p>
                <p>
                  <strong>Lo bueno:</strong> la mayoría de los hostings en Chile incluyen SSL gratis. Solo hay que
                  activarlo. Si no sabes cómo hacerlo, en nuestra sección de{" "}
                  <a href="/precios" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    precios
                  </a>{" "}
                  incluimos la configuración SSL en todos nuestros planes.
                </p>
              </section>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/velocidad.webp"
                    alt="Velocidad de carga web"
                    fill
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">6. Velocidad de carga desesperante</h2>
                <p>
                  Por cada segundo extra de carga, pierdes un 7% de conversiones. Si tu sitio tarda más de 3 segundos,
                  ya perdiste casi un tercio de tus ventas potenciales.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Imágenes gigantes de 3MB</li>
                  <li>Hosting barato compartido</li>
                  <li>Plugins de WordPress que no usas</li>
                </ul>
                <p>
                  <strong>Test rápido:</strong>{" "}
                  <a
                    href="https://pagespeed.web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    Analiza tu sitio en PageSpeed Insights
                  </a>
                  . Si sale en rojo, es crítico.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">7. Invisible en Google</h2>
                <p>
                  Creíble pero cierto: según nuestras auditorías en FocusWeb, el 35% de las PyMEs chilenas no estaban
                  indexadas en Google.
                </p>
                <p>
                  Usa Google Search Console y revisa que no tengas <code>noindex</code> activado o un archivo{" "}
                  <code>robots.txt</code> bloqueando el sitio.
                </p>
              </section>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/formulario-listo.webp"
                    alt="Formularios listos y funcionando"
                    fill
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">8. Formularios rotos</h2>
                <p>
                  En nuestras pruebas en FocusWeb, casi la mitad de los sitios revisados tenía formularios rotos,
                  perdiendo leads sin saberlo.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">9. Sin llamados a la acción claros</h2>
                <p>
                  “Más información” no es un buen CTA. “Solicita tu cotización gratis en 24 horas” sí lo es.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">10. Sin Google My Business</h2>
                <p>
                  El 46% de las búsquedas tienen intención local. Sin Google My Business, no existes para muchos
                  clientes potenciales.
                </p>
              </section>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/que-hacer-ahora.webp"
                    alt="Qué hacer ahora con tu sitio web"
                    fill
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">¿Qué hacer ahora?</h2>
                <p>
                  Cuando fundé FocusWeb después de{" "}
                  <a href="/mi-historia" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    mi experiencia
                  </a>{" "}
                  trabajando con PyMEs, me di cuenta de que la mayoría de estos problemas vienen de no tener un plan
                  claro desde el inicio.
                </p>
                <p>
                  Por eso desarrollamos un proceso específico para PyMEs chilenas. Puedes conocer más sobre{" "}
                  <a href="/nuestro-proceso" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    cómo trabajamos
                  </a>{" "}
                  o revisar las{" "}
                  <a href="/faq" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    preguntas frecuentes
                  </a>{" "}
                  que nos hacen otros dueños de negocio.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">¿Quieres una auditoría gratuita de tu sitio web?</h2>
                <p>
                  En FocusWeb revisamos tu página sin costo y te decimos exactamente qué errores tiene y cómo
                  solucionarlos.{" "}
                  <a href="/contacto" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    Conversemos
                  </a>{" "}
                  y veamos cómo podemos ayudarte.
                </p>
              </section>

              <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Auditoría gratuita</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-foreground">
                  Revisamos tu sitio y te decimos qué está fallando
                </h3>
                <p className="mt-3 text-base text-foreground/80">
                  Sin vueltas ni tecnicismos. Una revisión clara para que sepas por dónde mejorar.
                </p>
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Solicitar auditoría
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
