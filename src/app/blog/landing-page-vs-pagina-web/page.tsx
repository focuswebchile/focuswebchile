import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Landing Page vs Página Web: diferencias clave en diseño web | Focus Web",
  description:
    "¿Landing page o página web? Te explicamos las diferencias en diseño web profesional, con ejemplos claros para negocios y pymes en Chile.",
  alternates: {
    canonical: "/blog/landing-page-vs-pagina-web",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/landing-page-vs-pagina-web",
    title: "Landing Page vs Página Web: diferencias clave en diseño web | Focus Web",
    description:
      "¿Landing page o página web? Te explicamos las diferencias en diseño web profesional, con ejemplos claros para negocios y pymes en Chile.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/landingvswebsite.webp",
        width: 1200,
        height: 630,
        alt: "Landing page vs página web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page vs Página Web: diferencias clave en diseño web | Focus Web",
    description:
      "¿Landing page o página web? Te explicamos las diferencias en diseño web profesional, con ejemplos claros para negocios y pymes en Chile.",
    images: ["https://focusweb.cl/landingvswebsite.webp"],
  },
}

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/landingvssite.webp"
                alt="Landing page vs página web"
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
                ¿Qué es una landing page y en qué se diferencia de una página web?
              </h1>

              <p>
                Si estás armando la presencia online de tu negocio, tarde o temprano aparece esta duda: ¿necesito una
                landing page o una página web? Y claro, desde fuera ambas parecen lo mismo: una página en internet con
                información.
              </p>

              <p>
                Pero en la práctica cumplen funciones distintas y sirven para momentos distintos. Entender esto te
                puede ahorrar tiempo, plata y más de un dolor de cabeza.
              </p>

              <p>
                En este artículo te lo explicamos en simple, con ejemplos reales y sin tecnicismos. La idea es que
                termines de leer y digas: “ah, ya, esto es lo que necesito”.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/explicamossimple.webp"
                    alt="Explicamos en simple las diferencias entre landing page y página web"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué es una landing page (explicado en simple)</h2>

              <p>
                Una landing page es una página creada con un solo objetivo claro. No tiene menús, no tiene mil
                secciones, no te manda a pasear por distintos lados. Todo está pensado para que la persona haga una
                acción específica.
              </p>

              <p>
                Esa acción puede ser dejar sus datos, escribirte por WhatsApp, agendar una llamada o comprar algo
                puntual. Nada más.
              </p>

              <p>
                Por ejemplo, si ofreces un servicio específico o estás lanzando una promoción, una landing page te
                permite ir directo al punto, sin distracciones. Si quieres ver cómo funciona una en la práctica, puedes
                revisar nuestra sección de{" "}
                <a href="/landing-page" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  landing page
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/ofertaexclusiva.webp"
                    alt="Landing page para promocionar una oferta"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Cuándo usar una landing page</h2>

              <p>
                Una landing page es ideal cuando necesitas resultados rápidos y claros. Por ejemplo, si estás probando
                un nuevo servicio, lanzando una oferta o simplemente quieres validar si la gente está interesada en lo
                que ofreces.
              </p>

              <p>
                Muchos emprendedores parten con una landing page porque es más simple, más directa y más fácil de
                ajustar. No necesitas tener todo resuelto desde el día uno.
              </p>

              <p>
                Ahora, ojo con algo importante: una landing page puede ser suficiente al inicio, pero no siempre
                reemplaza a una página web completa. Todo depende del momento en el que esté tu negocio.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué es una página web y qué incluye</h2>

              <p>
                Una página web es un espacio más completo. No está pensada para una sola acción, sino para mostrar tu
                negocio en general: quién eres, qué haces, cómo trabajas y cómo contactarte.
              </p>

              <p>
                Normalmente incluye varias secciones: inicio, servicios, sobre ti, contacto y a veces un blog o
                portafolio. Es como tu casa digital.
              </p>

              <p>
                Si alguien quiere conocerte mejor antes de tomar una decisión, una web completa entrega más contexto y
                genera mayor confianza.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/estructura.webp"
                    alt="Estructura típica de una página web completa"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Landing Page vs Página Web: diferencias clave para tu estrategia digital
              </h2>

              <p>
                Cuando se habla de landing page y página web, muchas veces la comparación se queda en lo superficial:
                que una es corta y la otra larga, que una vende y la otra informa. Pero la diferencia real está en cómo
                se integran dentro de tu estrategia digital.
              </p>

              <p>
                Desde el punto de vista del <strong>diseño web</strong>, una landing page se construye con foco total en
                la conversión. Todo —textos, botones, estructura— está pensado para guiar al usuario hacia una sola
                acción. No hay menús, no hay caminos alternativos, no hay distracciones.
              </p>

              <p>
                En cambio, una página web trabaja el diseño de forma más amplia. Aquí el objetivo no es solo convertir,
                sino también explicar, generar confianza y mostrar el contexto completo de tu negocio.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Objetivo y enfoque</h3>

              <p>
                Si tu objetivo es captar contactos rápidamente, lanzar un servicio puntual o validar una idea, diseñar
                una landing page suele ser la mejor opción. Es directa, clara y va al grano.
              </p>

              <p>
                Si lo que necesitas es posicionar tu marca, explicar cómo trabajas y dar una imagen sólida a largo
                plazo, una página web completa cumple mejor ese rol.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Diseño web profesional: no es solo que se vea bonito</h3>

              <p>
                Tanto en una landing page como en una página web, el <strong>diseño web profesional</strong> no se trata
                solo de colores y tipografías. Se trata de jerarquía visual, claridad en los mensajes y facilidad para
                que el usuario entienda qué hacer.
              </p>

              <p>
                En el contexto del <strong>diseño web en Chile</strong>, esto es especialmente importante, porque muchos
                usuarios no tienen tiempo ni paciencia para descifrar una página. Si no entienden rápido, simplemente se
                van.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Cuál conviene según tu negocio?</h3>

              <p>
                No existe una respuesta única. Para algunos negocios, una landing page es el primer paso lógico. Para
                otros, una página web completa es necesaria desde el inicio.
              </p>

              <p>
                La clave está en no elegir por moda ni por lo que “todos hacen”, sino por lo que realmente necesita tu
                negocio hoy. Una buena estrategia digital parte por ahí.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/segun%20tu%20negocio.webp"
                    alt="Elegir según las necesidades del negocio"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Cómo trabajamos esto en Focus Web</h2>

              <p>
                En Focus Web no partimos diseñando de inmediato. Primero entendemos en qué punto está tu negocio y qué
                necesitas realmente hoy, no lo que “se supone” que deberías tener.
              </p>

              <p>
                A veces la respuesta es una landing page clara y bien enfocada. Otras veces, una web completa que ordene
                todo tu negocio digital. Por eso nuestro enfoque está basado en proceso, no en plantillas al azar.
              </p>

              <p>
                Si te interesa saber cómo lo hacemos paso a paso, puedes revisar{" "}
                <a href="/nuestro-proceso" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  nuestro proceso de trabajo
                </a>
                .
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Entonces… ¿qué necesitas hoy?</h2>

              <p>
                Si estás partiendo, una landing page puede ser el primer paso perfecto. Te permite salir rápido, validar
                tu idea y empezar a recibir contactos.
              </p>

              <p>
                Si ya tienes un negocio andando y quieres ordenar tu presencia online, una página web completa
                probablemente sea la mejor opción.
              </p>

              <p>
                Y si todavía no lo tienes claro, no pasa nada. Lo importante es tomar una decisión informada y alineada
                con tu realidad. Si quieres ver opciones y valores, puedes revisar nuestros{" "}
                <a href="/precios" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  planes y precios
                </a>
                .
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
      <FloatingWhatsApp />
    </>
  )
}
