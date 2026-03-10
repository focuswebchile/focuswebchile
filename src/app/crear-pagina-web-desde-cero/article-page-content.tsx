import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

function buildWebPageSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Crear una página web desde cero en Chile: pasos reales | Focus Web",
    url: pageUrl,
    description:
      "Aprende a crear una página web desde cero en Chile con pasos claros para pymes: estructura, contenidos, SEO básico y decisiones clave para empezar bien.",
    inLanguage: "es-CL",
    isPartOf: {
      "@type": "WebSite",
      url: "https://focusweb.cl",
      name: "FocusWeb Chile",
    },
  }
}

function buildBreadcrumbSchema(pageUrl: string) {
  return {
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
        name: "Crear página web desde cero",
        item: pageUrl,
      },
    ],
  }
}

type ArticlePageContentProps = {
  pageUrl: string
}

export function ArticlePageContent({ pageUrl }: ArticlePageContentProps) {
  const webPageSchema = buildWebPageSchema(pageUrl)
  const breadcrumbSchema = buildBreadcrumbSchema(pageUrl)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/crear-una-pagina-web-desde-cero.webp"
                alt="Crear una página web desde cero"
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
                Tiempo de lectura: 4 min
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Crear una página web desde cero: pasos reales (sin tecnicismos)
              </h1>

              <p>
                Si estás pensando en tener tu propia página web y sientes que todo suena complicado, tranquilo, no
                estás solo. Mucha gente cree que necesita ser experta en tecnología o pasar semanas aprendiendo códigos
                raros. La verdad es que crear una web desde cero es mucho más simple de lo que parece.
              </p>

              <p>
                En esta guía te voy a mostrar paso a paso cómo partir tu web sin enredos, con ejemplos claros y sin
                tecnicismos. Y si quieres ver la guía completa sobre{" "}
                <strong>cómo crear una página web en Chile</strong>, la tenemos{" "}
                <a
                  href="/blog/como-crear-una-pagina-web-en-chile"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  acá
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/imagen-introduccion.webp"
                    alt="Introducción del artículo"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Paso 1 – Define qué quieres lograr con tu web
              </h2>

              <p>
                Antes de pensar en diseño o herramientas, pregúntate: ¿para qué quiero esta web? ¿Quieres que te
                contacten? ¿Que compren un producto? ¿O simplemente mostrar quién eres y qué haces?
              </p>

              <div className="rounded-2xl border border-border/60 bg-muted/40 px-5 py-4 text-sm text-foreground/80 sm:text-base">
                Si buscas una página simple y enfocada en convertir, mira{" "}
                <a
                  href="/landing-page"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  nuestras landing pages enfocadas en conversión
                </a>
                .
              </div>

              <p>
                Por ejemplo, un gasfíter que recién empieza probablemente solo necesita que la gente lo contacte para
                arreglos urgentes. En cambio, una tienda de ropa online quiere mostrar productos y procesar ventas
                directamente.
              </p>

              <p>
                Tener claro el objetivo es clave porque va a definir el tipo de web que construyes, la información que
                pones y los botones que necesitas. Si quieres ver ejemplos de <strong>páginas profesionales en Chile</strong>,
                puedes revisar cómo lo hacemos en{" "}
                <a
                  href="/nuestro-proceso"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Focus Web
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/objetivo-focusweb.webp"
                    alt="Objetivo y enfoque"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Paso 2 – Reúne lo que necesitas</h2>

              <p>Una web necesita pocas cosas pero importantes: dominio, hosting, fotos y textos claros.</p>

              <p>
                El dominio es como tu dirección en la web, por ejemplo <em>micliente.cl</em> (puedes registrarlo en{" "}
                <a
                  href="https://www.nic.cl"
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  NIC Chile
                </a>{" "}
                para dominios.cl). El hosting es el lugar donde va a “vivir” tu página, y hoy existen opciones confiables
                como{" "}
                <a
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Cloudflare
                </a>
                . No necesitas el más caro ni el más barato, solo uno estable y seguro para que tu web funcione sin
                problemas.
              </p>

              <p>
                Para los textos y fotos, piensa simple: una descripción de quién eres, tus servicios, contacto y algunas
                fotos reales. Y no te preocupes, no necesitas un fotógrafo profesional ni un dron para mostrar tu
                negocio; una buena foto con el teléfono sirve.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Dominio-hosting.webp"
                    alt="Dominio y hosting"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Paso 3 – Escoge cómo construirla</h2>

              <p>Ahora que sabes qué quieres lograr y tienes tu contenido, es momento de decidir cómo vas a construir tu web.</p>

              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-foreground">
                <li>
                  <strong>WordPress:</strong> Flexible, escalable y ampliamente usado. Funciona perfecto si sabes cómo
                  configurarlo o con ayuda profesional.
                </li>
                <li>
                  <strong>Herramientas online tipo Wix o similares:</strong> Rápidas y fáciles, ideales para validar tu
                  idea o partir rápido.
                </li>
                <li>
                  <strong>Web a medida:</strong> Hecha específicamente para tu negocio. No siempre es necesaria, pero
                  sirve si necesitas funciones muy concretas.
                </li>
              </ul>

              <p>
                Si quieres profundizar en los tipos de webs y cómo se diferencian, te recomiendo revisar nuestro artículo
                pilar{" "}
                <a
                  href="/blog/como-crear-una-pagina-web-en-chile"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Cómo crear una página web en Chile
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/tipos-websites-focusweb.webp"
                    alt="Tipos de websites"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Paso 4 – Publica y prueba</h2>

              <p>
                Una vez que tu web está armada, no significa que ya está lista para funcionar. Necesitas probarla:
                revisa que todos los enlaces funcionen, que los botones lleven a los lugares correctos y que el contacto
                se vea claro.
              </p>

              <p>
                Un tip simple: pídele a alguien que nunca haya visto tu web que intente contactarte. Si tu gato puede
                encontrar el botón de contacto, tus clientes también lo harán 😉.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/publicar-y-prueba-focusweb.webp"
                    alt="Publicar y prueba"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Paso 5 – Haz que la web respire</h2>

              <p>
                Tu web no termina al publicarla. Hay que mantenerla viva. Esto no significa rediseños cada semana, sino
                pequeños ajustes: actualizar fotos, cambiar textos, agregar información nueva. Todo esto ayuda a que la
                web siga siendo útil y confiable.
              </p>

              <p>Recuerda que una web abandonada transmite descuido, y eso es lo último que quieres.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/mantener-website.webp"
                    alt="Mantenimiento web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Errores comunes al partir desde cero</h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Pensar solo en el diseño</h3>
              <p>
                Una web bonita pero que no cumple su objetivo (contacto, venta, información clara) no sirve de mucho.
                El diseño acompaña, pero no es lo más importante.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">No considerar SEO desde el inicio</h3>
              <p>
                Muchas webs empiezan sin pensar en que alguien debe encontrarlas en Google. Esto luego cuesta tiempo y
                dinero. Mejor organizar la información y las palabras clave desde el principio.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">No tener claro qué quieres que haga el visitante</h3>
              <p>
                Cada web necesita un objetivo: que contacten, que compren, que lean tu historia. Si no está claro, tu
                visitante también se va a confundir.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/Errores-comunes.webp"
                    alt="Errores comunes"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Consejos finales para no perderse</h2>

              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-foreground">
                <li>Empieza simple: publica solo lo esencial al principio.</li>
                <li>Usa herramientas que se adapten a tu nivel y necesidades.</li>
                <li>Prueba y ajusta: no tiene que ser perfecto desde el día uno.</li>
                <li>Apóyate en profesionales cuando algo te exceda, no como excusa para no partir.</li>
              </ul>

              <p>
                Si quieres que alguien te acompañe desde el inicio y asegure que tu web quede profesional y lista para
                tus clientes, en{" "}
                <a
                  href="/landing-page"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  nuestras landing pages enfocadas en conversión
                </a>{" "}
                ayudamos a negocios como el tuyo a crear páginas web claras, confiables y efectivas.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">En resumen</h2>

              <p>
                Crear una página web desde cero no es magia ni requiere conocimientos imposibles. Con pasos claros,
                contenido simple y un poco de prueba y error, cualquier negocio puede tener su web funcionando.
              </p>

              <p>
                La clave está en definir objetivos, organizar contenido, probar y mantenerla viva. Y si quieres acelerar
                el proceso, contar con ayuda profesional siempre es una buena decisión.
              </p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
