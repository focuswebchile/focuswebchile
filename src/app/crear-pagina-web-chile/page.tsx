import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { ArticleAuthorCta } from "@/components/article-author-cta"

export const metadata: Metadata = {
  title: "Crear Página Web en Chile: Guía para Pymes | FocusWeb",
  description:
    "¿Quieres crear una página web en Chile? Guía con tipos de sitio, plataformas, costos reales y errores comunes que debes evitar. Ideal para pymes.",
  alternates: {
    canonical: "/crear-pagina-web-chile",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/crear-pagina-web-chile",
    title: "Crear Página Web en Chile: Guía para Pymes | FocusWeb",
    description:
      "¿Quieres crear una página web en Chile? Guía con tipos de sitio, plataformas, costos reales y errores comunes que debes evitar. Ideal para pymes.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/website-chile.webp",
        width: 1200,
        height: 630,
        alt: "Crear una página web en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crear Página Web en Chile: Guía para Pymes | FocusWeb",
    description:
      "¿Quieres crear una página web en Chile? Guía con tipos de sitio, plataformas, costos reales y errores comunes que debes evitar. Ideal para pymes.",
    images: ["https://focusweb.cl/website-chile.webp"],
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://focusweb.cl/crear-pagina-web-chile",
      name: "Crear Página Web en Chile: Guía para Pymes | FocusWeb",
      url: "https://focusweb.cl/crear-pagina-web-chile",
      description:
        "¿Quieres crear una página web en Chile? Guía con tipos de sitio, plataformas, costos reales y errores comunes que debes evitar. Ideal para pymes.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Crear una página web en Chile",
          item: "https://focusweb.cl/crear-pagina-web-chile",
        },
      ],
    },
  ],
}

export default function CrearPaginaWebChilePage() {
  return (
    <>
      <Script id="crear-pagina-web-chile-schema" type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        {/* Hero image */}
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/website-chile.webp"
                alt="Crear una página web en Chile"
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
              <SiteBreadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Crear una página web en Chile" },
                ]}
              />

              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Tiempo de lectura: 6 min
              </p>

              <h1 className="font-display text-3xl sm:text-[2.35rem] md:text-[2.55rem] lg:text-5xl font-semibold tracking-tight leading-[0.95]">
                Crear una página web en Chile: guía completa para negocios y pymes
              </h1>

              <p>
                Si tienes un negocio y estás pensando en crear una página web, es muy probable que estés algo confundido.
                Has escuchado de WordPress, hosting, dominios, landing pages… y en algún punto todo empieza a sonar igual
                y a dar lata.
              </p>

              <p>
                Es normal. La mayoría de las personas que llegan acá no son técnicas ni trabajan en tecnología. Lo único
                que saben es esto: necesitan estar en internet y que los contacten.
              </p>

              <p>
                Crear una página web en Chile hoy no es un lujo ni algo solo para empresas grandes. Es como tener un
                local ordenado: no tiene que ser gigante ni perfecto, pero sí claro, confiable y fácil de entender.
                Una web bien hecha ayuda a que te encuentren en Google, entiendan qué haces y se atrevan a escribirte.
              </p>

              <p>
                En esta guía te explicamos cómo crear una página web paso a paso, en simple, sin palabras raras y con
                ejemplos reales. No para que te vuelvas experto, sino para que puedas tomar buenas decisiones.
              </p>

              {/* ── Por qué importa tener web en Chile ─────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Por qué es importante tener una página web en Chile hoy
              </h2>

              <p>
                Cuando alguien necesita un servicio o quiere comprar algo, lo primero que hace es buscar en Google.
                Da lo mismo si vendes servicios, productos o trabajas solo: la gente quiere investigar antes de contactar.
              </p>

              <p>
                Si no tienes página web, no es que no existas, pero es como tener un negocio sin letrero. Puede que
                alguien llegue por dato, pero muchos otros pasan de largo.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Redes sociales vs. página web</h3>

              <p>
                Instagram sirve, obvio. Pero no reemplaza a una web. Instagram muestra, la página web explica.
                Instagram atrae, la web convence.
              </p>

              <p>
                La web es tu base: el lugar donde ordenas la información y ayudas a que alguien tome la decisión con
                calma.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/focus-web-chile-redes-sociales.webp"
                    alt="Redes sociales vs página web en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              {/* ── Qué tipo de web necesita tu negocio ────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Qué tipo de página web necesita tu negocio
              </h2>

              <p>No todos los negocios necesitan lo mismo, y acá es donde muchos se equivocan.</p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Landing page: simple y directa</h3>

              <p>
                Es una página única, pensada para una sola acción: que te escriban, te llamen o coticen. Ideal si estás
                partiendo o vendes un servicio específico.
              </p>

              <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/40 px-5 py-4 text-sm text-foreground/80 sm:text-base">
                Si buscas una página enfocada en captar clientes directamente, mira mis{" "}
                <Link href="/landing-page" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  landing pages orientadas a conversión
                </Link>
                .
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Sitio web: más completo y ordenado</h3>

              <p>
                Tiene varias secciones: inicio, servicios, quién eres y contacto. Sirve cuando quieres explicar mejor
                tu negocio y proyectar algo más estable. Una muy buena opción para pymes que quieren crecer con orden.
              </p>

              <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/40 px-5 py-4 text-sm text-foreground/80 sm:text-base">
                Si este es tu caso, revisa mi servicio de{" "}
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  desarrollo web profesional en Chile
                </Link>
                .
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Tienda online: vender directamente</h3>

              <p>
                No es solo subir productos. Requiere medios de pago, despacho y soporte. Funciona bien si ya tienes
                claro qué vendes y cómo lo entregas. No todos la necesitan, y está bien decirlo.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/tienda-online.webp"
                    alt="Tipos de página web para negocios en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              {/* ── Pasos para crear tu web ─────────────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Pasos para crear una página web desde cero
              </h2>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Paso 1 – Define qué quieres lograr</h3>

              <p>
                Antes de pensar en diseño o herramientas, pregúntate: ¿para qué quiero esta web? ¿Quieres que te
                contacten? ¿Que compren un producto? ¿O simplemente mostrar quién eres y qué haces?
              </p>

              <p>
                Tener claro el objetivo es clave porque define el tipo de web, la información que pones y los botones
                que necesitas.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Paso 2 – Reúne lo que necesitas</h3>

              <p>Una web necesita pocas cosas pero importantes: dominio, hosting, fotos y textos claros.</p>

              <p>
                El dominio es tu dirección en la web, por ejemplo <em>tunegocio.cl</em> (puedes registrarlo en{" "}
                <a
                  href="https://www.nic.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  NIC Chile
                </a>
                ). El hosting es donde "vive" tu página.
              </p>

              <p>
                Para los textos y fotos, piensa simple: una descripción de quién eres, tus servicios, contacto y
                algunas fotos reales. No necesitas un fotógrafo profesional; una buena foto con el teléfono sirve.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Paso 3 – Escoge cómo construirla</h3>

              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-foreground">
                <li>
                  <strong>WordPress:</strong> Flexible y escalable. Funciona perfecto con buena configuración o ayuda
                  profesional.
                </li>
                <li>
                  <strong>Herramientas "hazlo tú mismo":</strong> Rápidas para arrancar y validar una idea. El problema
                  aparece cuando el negocio crece y la web se queda corta.
                </li>
                <li>
                  <strong>Web a medida:</strong> Tiene sentido cuando el proyecto lo necesita. No es mejor por defecto,
                  es distinta.
                </li>
              </ul>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Paso 4 – Publica y prueba</h3>

              <p>
                Una vez que tu web está armada, no significa que ya está lista. Necesitas probarla: revisa que todos
                los enlaces funcionen, que los botones lleven a los lugares correctos y que el contacto se vea claro.
              </p>

              <p>
                Un tip simple: pídele a alguien que nunca haya visto tu web que intente contactarte. Si lo encuentra
                fácil, tus clientes también lo harán.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Paso 5 – Mantenla viva</h3>

              <p>
                Tu web no termina al publicarla. No significa rediseños cada semana, sino pequeños ajustes: actualizar
                fotos, cambiar textos, agregar información nueva. Una web abandonada transmite descuido.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/objetivo-focusweb.webp"
                    alt="Pasos para crear una página web en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              {/* ── Qué se necesita ─────────────────────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Qué se necesita para crear una página web en Chile
              </h2>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Dominio y hosting</h3>

              <p>
                No necesitas el más caro ni el más barato, necesitas uno confiable. Si no quieres enredarte con esta
                parte técnica,{" "}
                <Link href="/" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  en FocusWeb nos encargamos de dejar todo listo desde el inicio
                </Link>
                , sin que tengas que aprender términos raros.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Contenido claro</h3>

              <p>
                Textos simples, fotos reales y mensajes directos. No necesitas escribir bonito, necesitas que se
                entienda. Si alguien entra a tu web y no entiende qué haces en 10 segundos, se va.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Estructura pensada en personas</h3>

              <p>Botones claros, contacto visible y nada escondido. La web no es para lucirse, es para ayudar.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Dominio-focus-web.webp"
                    alt="Dominio, hosting y contenido para página web en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              {/* ── Errores comunes ──────────────────────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Errores comunes al crear una página web
              </h2>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">Pensar solo en el diseño</h3>
              <p>
                Una web bonita que no cumple su objetivo (contacto, venta, información clara) no sirve mucho. El diseño
                acompaña, pero no es lo más importante.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">No considerar SEO desde el inicio</h3>
              <p>
                Muchas webs empiezan sin pensar en que alguien debe encontrarlas en Google. Esto luego cuesta tiempo y
                dinero. Si quieres revisar esa base antes de avanzar, una{" "}
                <Link
                  href="/servicios/auditoria-seo-tecnico"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  auditoría SEO técnica
                </Link>{" "}
                puede ayudarte a detectar problemas a tiempo.
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-semibold pt-2">No tener claro el objetivo</h3>
              <p>
                Si no sabes qué quieres que haga el visitante, la web tampoco lo va a saber. Cada web necesita un
                objetivo: que contacten, que compren, que lean tu historia.
              </p>

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

              {/* ── Cuánto cuesta ────────────────────────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Cuánto cuesta crear una página web en Chile
              </h2>

              <p>
                Depende. Y no es una respuesta trucha. Influyen el tipo de web, el nivel de personalización y el
                acompañamiento que necesites. Más importante que el precio es entender qué incluye y qué no.
              </p>

              <p>
                Una web barata que no sirve, termina saliendo cara.
              </p>

              <p>
                Si quieres ver opciones concretas para tu negocio, en mi servicio de{" "}
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  desarrollo web profesional
                </Link>{" "}
                explico qué incluye cada proyecto y cómo trabajo.
              </p>

              {/* ── Cuándo conviene un profesional ──────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">
                Cuándo conviene hacerlo con un profesional
              </h2>

              <p>
                Si no tienes tiempo, quieres hacerlo bien desde el inicio o necesitas resultados concretos, pedir
                ayuda profesional puede ahorrarte errores y frustraciones.
              </p>

              <p>
                Si quieres ver cómo trabajo con negocios y pymes en Chile, puedes revisar mi{" "}
                <Link
                  href="/nuestro-proceso"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  proceso de trabajo
                </Link>{" "}
                y ver si hace sentido para tu proyecto.
              </p>

              {/* ── CTA transaccional intermedio ────────────────────── */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 px-6 py-8 text-center shadow-sm">
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  ¿Ya sabes qué tipo de web necesitas?
                </p>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Cuéntame tu proyecto y te respondo con opciones claras, sin compromiso.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/servicios/desarrollo-web"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                  >
                    Ver servicio de desarrollo web
                  </Link>
                  <a
                    href="https://wa.me/420733796959"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>

              {/* ── Resumen ──────────────────────────────────────────── */}
              <h2 className="font-display text-2xl sm:text-3xl font-semibold pt-4">En resumen</h2>

              <p>
                Crear una página web en Chile no tiene por qué ser complicado. Con entender lo básico y tomar buenas
                decisiones, puedes tener una web clara, útil y que realmente funcione para tu negocio.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-foreground">
                <li>Empieza simple: publica solo lo esencial al principio.</li>
                <li>Usa herramientas que se adapten a tu nivel y necesidades.</li>
                <li>Prueba y ajusta: no tiene que ser perfecto desde el día uno.</li>
                <li>Considera el SEO desde el inicio, no después.</li>
                <li>Apóyate en profesionales cuando algo te exceda, no como excusa para no partir.</li>
              </ul>

              <p>
                Y si prefieres no hacerlo solo, está bien. Para eso existen los profesionales.
              </p>

              <ArticleAuthorCta />
            </article>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
