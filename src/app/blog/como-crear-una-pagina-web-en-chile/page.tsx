import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Cómo crear una página web en Chile: guía clara para pymes | Focus Web",
  description:
    "Guía clara para crear una página web en Chile: pasos, tipos de web y errores comunes, sin tecnicismos.",
  alternates: {
    canonical: "/blog/como-crear-una-pagina-web-en-chile",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/como-crear-una-pagina-web-en-chile",
    title: "Cómo crear una página web en Chile: guía clara para pymes | Focus Web",
    description:
      "Guía clara para crear una página web en Chile: pasos, tipos de web y errores comunes, sin tecnicismos.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-como-crea-una-pagina.webp",
        width: 1200,
        height: 630,
        alt: "Cómo crear una página web en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo crear una página web en Chile: guía clara para pymes | Focus Web",
    description:
      "Guía clara para crear una página web en Chile: pasos, tipos de web y errores comunes, sin tecnicismos.",
    images: ["https://focusweb.cl/og-como-crea-una-pagina.webp"],
  },
}

const articleAndBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cómo crear una página web en Chile: guía clara para negocios y pymes",
      description:
        "Guía clara para crear una página web en Chile: pasos, tipos de web y errores comunes, sin tecnicismos.",
      image: ["https://focusweb.cl/og-como-crea-una-pagina.webp"],
      author: {
        "@type": "Organization",
        name: "Focus Web",
      },
      publisher: {
        "@type": "Organization",
        name: "Focus Web",
        logo: {
          "@type": "ImageObject",
          url: "https://focusweb.cl/logo-512.png",
        },
      },
      datePublished: "2026-01-12",
      dateModified: "2026-01-12",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/como-crear-una-pagina-web-en-chile",
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
          name: "Cómo crear una página web en Chile",
          item: "https://focusweb.cl/blog/como-crear-una-pagina-web-en-chile",
        },
      ],
    },
  ],
}

export default function BlogPostPage() {
  return (
    <>
      <Script id="blog-como-crear-schema" type="application/ld+json">
        {JSON.stringify(articleAndBreadcrumbSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/website-chile.webp"
                alt="Cómo crear una página web en Chile"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Tiempo de lectura: 5 min
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Cómo crear una página web en Chile: guía clara para negocios y pymes
              </h1>

              <p>
                Si tienes un negocio y estás pensando en crear una página web, es muy probable que estés medio
                confundido. Has escuchado de páginas web, landing pages, WordPress, hosting, dominios… y en algún punto
                todo empieza a sonar igual y a dar lata.
              </p>

              <p>
                Y es normal. La mayoría de las personas que llegan acá no son técnicas ni trabajan en tecnología. Lo
                único que saben es esto: necesitan estar en internet y que los contacten.
              </p>

              <p>
                Crear una página web en Chile hoy no es un lujo ni algo solo para empresas grandes. Es más bien como
                tener un local ordenado: no tiene que ser gigante ni perfecto, pero sí claro, confiable y fácil de
                entender. Una web bien hecha ayuda a que te encuentren en Google, entiendan qué haces y se atrevan a
                escribirte.
              </p>

              <p>
                En esta guía te vamos a explicar cómo crear una página web paso a paso, en simple, sin palabras raras y
                con ejemplos reales. No para que te vuelvas experto, sino para que puedas tomar buenas decisiones y no
                te mareen en el camino.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/focus-web-chile.webp"
                    alt="Focus Web Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Por qué hoy es importante tener una página web en Chile
              </h2>

              <p>
                Hoy, cuando alguien necesita un servicio o quiere comprar algo, lo primero que hace es buscar en
                Google. Da lo mismo si vendes servicios, productos o trabajas solo: la gente quiere investigar antes de
                contactar.
              </p>

              <p>
                Si no tienes página web, no es que no existas, pero es como tener un negocio sin letrero. Puede que
                alguien llegue por dato, pero muchos otros pasan de largo.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Cómo buscan hoy los clientes</h3>

              <p>
                Las personas comparan. Entran a un par de resultados, miran si el texto se entiende, si hay fotos, si
                aparece un teléfono claro y si se ve confiable. Nadie revisa si tu web es moderna, solo quieren saber
                si eres serio y si les puedes ayudar.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Redes sociales vs página web</h3>

              <p>
                Instagram sirve, obvio. Pero no reemplaza a una web. Instagram muestra, la página web explica.
                Instagram atrae, la web convence.
              </p>

              <p>
                La web es tu base. El lugar donde ordenas la información y ayudas a que alguien tome la decisión con
                calma.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/focus-web-chile-redes-sociales.webp"
                    alt="Redes sociales vs página web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué tipo de página web necesita tu negocio</h2>

              <p>No todos los negocios necesitan lo mismo, y acá es donde muchos se equivocan.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Landing page: simple y directa</h3>

              <p>
                Es una página única, pensada para una sola acción: que te escriban, te llamen o coticen. Ideal si estás
                partiendo o vendes un servicio específico.
              </p>

              <p>
                Si este es tu caso, puedes revisar cómo trabajamos este tipo de proyectos en nuestras{" "}
                <a
                  href="/landing-page"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  landing pages enfocadas en conversión
                </a>
                .
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Sitio web: más completo y ordenado</h3>

              <p>
                Tiene varias secciones: inicio, servicios, quién eres y contacto. Sirve cuando quieres explicar mejor tu
                negocio y proyectar algo más estable. Es una muy buena opción para pymes que quieren crecer con orden.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Tienda online: vender directamente</h3>

              <p>
                No es solo subir productos. Requiere medios de pago, despacho y soporte. Funciona bien si ya tienes
                claro qué vendes y cómo lo entregas. No todos la necesitan, y está bien decirlo.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/tienda-online.webp"
                    alt="Tipos de web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué se necesita para crear una página web en Chile</h2>

              <p>Acá bajamos un poco la ansiedad, porque no es tan complejo como parece.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Dominio y hosting (en simple)</h3>

              <p>
                El dominio es tu dirección, como micliente.cl. El hosting es donde vive tu web. No necesitas el más caro
                ni el más barato, necesitas uno confiable.
              </p>

              <p>
                Si no quieres enredarte con esta parte técnica, en{" "}
                <Link
                  href="/"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Focus Web nos encargamos de dejar todo listo desde el inicio
                </Link>
                , sin que tengas que aprender términos raros.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Contenido claro</h3>

              <p>
                Textos simples, fotos reales y mensajes directos. No necesitas escribir bonito, necesitas que se
                entienda. Si alguien entra a tu web y no entiende qué haces en 10 segundos, se va.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Estructura pensada en personas</h3>

              <p>Botones claros, contacto visible y nada escondido. La web no es para lucirse, es para ayudar.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Dominio-focus-web.webp"
                    alt="Dominio, hosting y contenido"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué plataforma usar para crear tu página web</h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">WordPress</h3>

              <p>Flexible, conocido y escalable. Bien usado, funciona perfecto. Mal usado, se vuelve un caos.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Web a medida</h3>

              <p>Tiene sentido cuando el proyecto lo necesita. No es mejor por defecto, es distinta.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Herramientas “hazlo tú mismo”</h3>

              <p>
                Sirven para partir, probar o validar una idea. El problema aparece cuando el negocio crece y la web se
                queda corta.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Errores comunes al crear una página web</h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Pensar solo en el diseño</h3>

              <p>Una web linda que no genera contactos no sirve mucho.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">No considerar SEO desde el inicio</h3>

              <p>Después cuesta más y suele salir más caro.</p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">No tener claro el objetivo</h3>

              <p>Si no sabes qué quieres que haga el visitante, la web tampoco lo va a saber.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/usuario-se-confunde-al-navegar.webp"
                    alt="Errores comunes al crear una página web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Cuánto cuesta crear una página web en Chile</h2>

              <p>
                Depende. Y no es una respuesta trucha. Influyen el tipo de web, el nivel de personalización y el
                acompañamiento. Más importante que el precio es entender qué incluye y qué no.
              </p>

              <p>Una web barata que no sirve, termina saliendo cara.</p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Cuándo conviene hacerlo con un profesional</h2>

              <p>
                Si no tienes tiempo, quieres hacerlo bien desde el inicio o necesitas resultados, pedir ayuda
                profesional puede ahorrarte errores y frustraciones.
              </p>

              <p>
                Si quieres ver cómo trabajamos con negocios y pymes en Chile, puedes revisar nuestras{" "}
                <a
                  href="/nuestro-proceso"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  soluciones de desarrollo web en Focus Web
                </a>{" "}
                y ver si hace sentido para tu proyecto.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">En resumen</h2>

              <p>
                Crear una página web en Chile no tiene por qué ser complicado. Con entender lo básico y tomar buenas
                decisiones, puedes tener una web clara, útil y que realmente funcione para tu negocio.
              </p>

              <p>Y si prefieres no hacerlo solo, está bien. Para eso existen los profesionales.</p>
            </article>
            <div className="mt-12 rounded-3xl border border-border/60 bg-white/70 px-6 py-10 text-center shadow-xl shadow-primary/10 sm:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
                ¿Conversamos sobre tu proyecto?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Escríbenos por WhatsApp y te ayudamos a definir la mejor opción para tu negocio.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
