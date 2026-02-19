import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Google Business Profile (antes Google Mi Negocio): guía para PYMEs chilenas | Focus Web",
  description:
    "Aprende a optimizar tu Google Business y atrae clientes desde búsquedas locales gratuitas. Pasos simples y consejos SEO para tu pyme.",
  alternates: {
    canonical: "/blog/seo-local-google-business-chile",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/seo-local-google-business-chile",
    title: "Google Business Profile (antes Google Mi Negocio): guía para PYMEs chilenas | Focus Web",
    description:
      "Aprende a optimizar tu Google Business y atrae clientes desde búsquedas locales gratuitas. Pasos simples y consejos SEO para tu pyme.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-google-business.webp",
        width: 1200,
        height: 630,
        alt: "Google Business Profile para PYMEs chilenas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile (antes Google Mi Negocio): guía para PYMEs chilenas | Focus Web",
    description:
      "Aprende a optimizar tu Google Business y atrae clientes desde búsquedas locales gratuitas. Pasos simples y consejos SEO para tu pyme.",
    images: ["https://focusweb.cl/og-google-business.webp"],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Google Business Profile (antes Google Mi Negocio): guía para tu Pyme chilena",
      description:
        "Aprende a optimizar tu Google Business y atrae clientes desde búsquedas locales gratuitas. Pasos simples y consejos SEO para tu pyme.",
      image: ["https://focusweb.cl/og-google-business.webp"],
      author: { "@type": "Organization", name: "Focus Web" },
      publisher: {
        "@type": "Organization",
        name: "Focus Web",
        logo: { "@type": "ImageObject", url: "https://focusweb.cl/logo-512.png" },
      },
      datePublished: "2026-02-16",
      dateModified: "2026-02-16",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/seo-local-google-business-chile",
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
          name: "Google Business Profile para PYMEs chilenas",
          item: "https://focusweb.cl/blog/seo-local-google-business-chile",
        },
      ],
    },
  ],
}

export default function SeoLocalGoogleBusinessChilePage() {
  return (
    <>
      <Script id="blog-seo-local-google-business-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-24 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <SiteBreadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "Google Business Profile para PYMEs chilenas" },
                ]}
              />

              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Tiempo de lectura: 7 min</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Google Business Profile para tu Pyme chilena
              </h1>

              <p>
                Si tienes una Pyme, presta atención: ¿sabías que puedes aparecer en Google Maps y en los resultados
                locales de Google (gratis) sin gastar un peso en publicidad? La herramienta para lograrlo es Google
                Business Profile (antes conocida como Google Mi Negocio). Crear y optimizar tu ficha de empresa en
                Google es como poner tu local en el radar de todos tus vecinos (¡e incluso de quienes ni sabían qué te
                necesitaban!).
              </p>

              <p>
                En este artículo vamos a explicarlo paso a paso, de forma sencilla y hasta con un poco de humor
                (prometemos no llenar esto de tecnicismos aburridos). Al final sabrás:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Qué es Google Business Profile y por qué tu Pyme lo necesita ya mismo.</li>
                <li>Beneficios concretos que obtendrás (más visibilidad local y más clientes contactándote).</li>
                <li>Cómo crear y verificar tu perfil en minutos.</li>
                <li>Tips prácticos de optimización para sacarle todo el jugo a tu ficha.</li>
              </ul>

              <p>¡Comencemos!</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/seo-local-chile.webp"
                    alt="Placeholder: resultados locales en Google Maps"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Qué demonios es Google Business Profile?</h2>

              <p>
                Google Business Profile es como un “carnet de presentación virtual” para tu negocio. Es una ficha
                gratuita de Google donde pones datos básicos de tu empresa: nombre, dirección, teléfono, horario,
                fotos, servicios, página web y reseñas de clientes. De esa manera, cuando alguien busque tu rubro o tu
                marca en Google (o en Google Maps), tu negocio aparece con toda la info clave.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                Si esto lo conectas con una base de{" "}
                <Link href="/servicios" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  SEO y posicionamiento web
                </Link>
                , tu perfil en Google va a rendir mucho mejor.
              </blockquote>

              <p>
                Por ejemplo, si tienes una cafetería en Ñuñoa y alguien busca “café cerca de mí”, un perfil de Google
                Business bien hecho puede hacer que tu cafetería aparezca destacada en el mapa y en el famoso “paquete
                local” (los 3 locales que Google muestra primero). Es como tener una vitrina abierta todo el día.
              </p>

              <p>
                Google Business Profile también integra directo tus fotos, reseñas y botones de acción (sitio web,
                botón de llamada o WhatsApp). Todo esto le dice al cliente curioso: “Oye, este es mi negocio, estamos
                aquí y estamos activos”. Y lo mejor: es gratis. Google no te cobrará por aparecer. Solo necesitas
                dedicar unos minutos a configurarlo.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Por qué es tan importante para tu Pyme?</h2>

              <p>
                Imagina esto: un vecino con hambre busca “sushi en Maipú”. Si tu negocio no aparece en Google, para ese
                cliente simplemente no existes. Además, Google favorece
                los perfiles completos y activos. Eso significa que si tienes buena información, fotos buenas y
                reseñas respondidas, Google te mueve hacia arriba en los resultados locales.
              </p>

              <p className="font-semibold text-foreground">Beneficios clave:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Visibilidad local gratis:</strong> apareces en Google Maps y búsquedas con alta intención de
                  compra.
                </li>
                <li>
                  <strong>Confianza instantánea:</strong> un perfil completo (con horario, fotos y reseñas) transmite
                  profesionalismo y claridad.
                </li>
                <li>
                  <strong>Datos valiosos:</strong> Google te da estadísticas gratis: cuánta gente vio tu ficha,
                  cuántos hicieron clic, llamaron o pidieron cómo llegar.
                </li>
                <li>
                  <strong>Competir con grandes:</strong> para las pymes pequeñas, esto nivela el terreno en búsquedas
                  locales.
                </li>
              </ul>

              <p>
                ¿Conclusión? Google Business Profile es la forma más sencilla y barata de asegurarte una vitrina
                digital. Si tu cliente te busca, quieres que te encuentre al tiro, ¿no?
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Paso a paso: crea y verifica tu perfil</h2>

              <p>
                Lo bueno es que crear el perfil es bastante intuitivo. Vamos por pasos (tranquilo, no hace falta un
                PhD en Informática):
              </p>

              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Ve a Google Business Profile:</strong>{" "}
                  <a
                    href="https://business.google.com/add"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    business.google.com/add
                  </a>
                </li>
                <li>
                  <strong>Inicia sesión con tu cuenta de Google:</strong> Puede ser una cuenta personal o corporativa
                  (la que uses para tu empresa).
                </li>
                <li>
                  <strong>Registra o verifica tu negocio:</strong> Si tu negocio ya aparece, el sistema te lo mostrará y
                  puedes reclamar la propiedad. Si no existe, elige “Agregar tu negocio” e ingresa los datos básicos.
                </li>
                <li>
                  <strong>Completa tu información:</strong> nombre exacto del negocio, categoría principal, dirección o
                  zona de servicio, teléfono, web y horarios (incluye feriados). Mientras más completo, mejor.
                </li>
              </ol>

              <p>
                <strong>Verifica tu negocio:</strong> Google pedirá confirmar que eres el dueño. Normalmente envía un
                código por correo postal (en Chile puede tardar unos días), aunque algunos negocios verifican por
                teléfono o email. La verificación es obligatoria: sin ella, tu perfil no se activa.
              </p>
              <p>
                Este paso de verificación puede tomar unos días, pero es clave para que la ficha quede activa y puedas
                aparecer con consistencia en resultados locales.
              </p>

              <p>
                <strong>Optimiza tu perfil:</strong> una vez verificado, a llenar de amor tu ficha:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Descripción clara:</strong> explica quién eres, qué ofreces y dónde.
                </li>
                <li>
                  <strong>Fotos reales:</strong> sube imágenes de tu local, productos o equipo.
                </li>
                <li>
                  <strong>Servicios/productos:</strong> agrega lo que vendes para que quede claro desde la ficha.
                </li>
                <li>
                  <strong>Reseñas:</strong> pide opiniones y responde siempre, tanto buenas como malas.
                </li>
              </ul>

              <p>
                ¡Listo! Ahora tu negocio puede aparecer en Google cuando te buscan en tu comuna y alrededores. Pero no
                te duermas: hay que sacarle partido con un par de consejitos extra…
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/paso-a-paso-google.webp"
                    alt="Paso a paso para configurar Google Business Profile"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Tips de optimización para sacarle el máximo partido
              </h2>

              <p>
                <strong>Palabras clave locales en la descripción:</strong> ¿Cómo busca la gente tu negocio en Chile?
                Por ejemplo, en vez de escribir solo “panadería”, podrías poner “Panadería artesanal en Providencia”.
                Incluye la comuna o el barrio y el producto/servicio.
              </p>

              <p>
                <strong>Publicaciones frecuentes:</strong> Google permite crear “posts” (ofertas, eventos, novedades)
                en tu perfil. Publica al menos una vez al mes algo útil. Un negocio activo en GBP suele subir un poco
                en resultados.
              </p>

              <p>
                <strong>Actualiza fotos y horarios:</strong> agrega fotos nuevas cada cierto tiempo y ajusta horarios
                si cambian en fechas especiales. Google premia información fresca y exacta.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                Si tu sitio está lento, la experiencia del usuario también se ve afectada. Si quieres, puedes revisar
                cómo trabajamos la{" "}
                <Link
                  href="/servicios/optimizacion-velocidad-web"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  optimización de velocidad web
                </Link>
                .
              </blockquote>

              <p>
                <strong>Gestiona reseñas:</strong> responde todas. Agradece elogios y aborda problemas con calma. Cada
                interacción suma puntos con Google y con futuros clientes.
              </p>

              <p>
                Con estos cuidados, tu perfil trabaja casi solo. Imagina a clientes potenciales preguntando cosas en tu
                Google Business y tú respondiendo, todo sin salir a perseguirlos.
              </p>

              <h2 className="pt-4 text-2xl font-semibold sm:text-3xl">
                <span className="block">Otros recursos avanzados</span>
                <span className="mt-1 block text-lg font-medium text-foreground/80 sm:text-xl">
                  (para cuando quieras más)
                </span>
              </h2>

              <p>Google Business tiene funciones extra no tan conocidas, pero muy útiles:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Sección de preguntas y respuestas:</strong> puedes responder dudas frecuentes desde tu perfil.
                </li>
                <li>
                  <strong>Mensajería de Google/WhatsApp:</strong> activa contacto directo desde la ficha.
                </li>
                <li>
                  <strong>Productos o servicios:</strong> añade listados detallados si tu modelo lo permite.
                </li>
                <li>
                  <strong>Publicaciones “Oferta” y “Evento”:</strong> ideal para promociones con fecha límite.
                </li>
                <li>
                  <strong>Estadísticas:</strong> revisa cuántas personas piden cómo llegar o visitan tu sitio desde la
                  ficha.
                </li>
              </ul>

              <p>Estos elementos pueden esperar al comienzo, pero es bueno saberlos.</p>

              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                Si quieres llevar esto a resultados sostenibles, conviene complementar tu ficha con una base técnica
                sólida en el sitio. Puedes empezar por una{" "}
                <Link
                  href="/servicios/auditoria-seo-tecnico"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  auditoría SEO técnica
                </Link>
                .
              </blockquote>

              <p>
                En proyectos donde la estructura ya no da para escalar, también puede tocar rediseñar el sitio para
                sostener mejor el crecimiento local.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/otros-recursos-google.webp"
                    alt="Otros recursos avanzados de Google Business Profile"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">En resumen</h2>

              <p>Google Business Profile es tu mejor aliado local. Con una ficha bien armada:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  Llegas directamente a clientes que ya te buscan, sin pagar publicidad. Como quien tiene un cartel
                  luminoso en Google.
                </li>
                <li>
                  Construyes confianza: fotos bonitas y reseñas reales hacen tu negocio más serio y confiable.
                </li>
                <li>
                  Te informas: Google te da datos reales de cuánta gente te quiere encontrar.
                </li>
              </ul>

              <p>
                En cambio, si no haces nada, aunque tengas un buen servicio, muchas personas no te van a encontrar en
                Google. No esperes que te descubran por arte de magia.
              </p>

              <p>
                ¿Y ahora qué? Implementa estos pasos y verás cómo tu Pyme empieza a destacar en las búsquedas locales.
                Si te abruma el proceso o prefieres concentrarte en vender, en FocusWeb podemos ayudarte a configurar y
                optimizar tu Google Business Profile para que funcione sin que tú estés pegado todo el día a la
                pantalla.
              </p>

              <p>¡Nos vemos en el próximo artículo!</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/google-buisness-profile.webp"
                    alt="Google Business Profile para pymes chilenas"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-primary/35 bg-primary/10 p-5 sm:p-6">
                <h2 className="text-2xl font-semibold text-foreground">¿Quieres implementarlo sin perder tiempo?</h2>
                <p className="mt-3 text-foreground/85">
                  Si prefieres enfocarte en vender y no en configurar todo manualmente, partamos por una revisión clara
                  de tu caso.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/metodologia"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Auditar mi sitio
                  </Link>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Ver servicios
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
