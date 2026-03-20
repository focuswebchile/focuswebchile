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
  title: "Seguridad Web para PYMEs: HTTPS y Backups | FocusWeb",
  description:
    "Seguridad web para pymes: protege tu sitio con HTTPS, SSL, contraseñas seguras, respaldos y medidas básicas contra ataques comunes.",
  alternates: {
    canonical: "/blog/seguridad-web-pymes",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/seguridad-web-pymes",
    title: "Seguridad de páginas web para PYMEs: HTTPS y respaldos | FocusWeb",
    description:
      "Seguridad web para pymes: protege tu sitio con HTTPS, SSL, contraseñas seguras, respaldos y medidas básicas contra ataques comunes.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/Protege-la-web-de-tu-pyme.webp",
        width: 1200,
        height: 630,
        alt: "Protege la web de tu pyme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguridad de páginas web para PYMEs: HTTPS y respaldos | FocusWeb",
    description:
      "Seguridad web para pymes: protege tu sitio con HTTPS, SSL, contraseñas seguras, respaldos y medidas básicas contra ataques comunes.",
    images: ["https://focusweb.cl/Protege-la-web-de-tu-pyme.webp"],
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Seguridad de páginas web para PYMEs: HTTPS y respaldos",
      description:
        "Informate sobre cómo mejorar la seguridad de páginas web para PYMEs con HTTPS, SSL, contraseñas seguras, respaldos y protección básica contra ataques comunes.",
      inLanguage: "es-CL",
      image: ["https://focusweb.cl/Protege-la-web-de-tu-pyme.webp"],
      author: { "@type": "Organization", name: "FocusWeb Chile" },
      publisher: {
        "@type": "Organization",
        name: "FocusWeb Chile",
        logo: { "@type": "ImageObject", url: "https://focusweb.cl/logo-512.png" },
      },
      datePublished: "2026-03-07",
      dateModified: "2026-03-07",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/seguridad-web-pymes",
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
          name: "Seguridad web para PYMEs",
          item: "https://focusweb.cl/blog/seguridad-web-pymes",
        },
      ],
    },
  ],
}

export default function SeguridadWebPymesPage() {
  return (
    <>
      <Script id="blog-seguridad-web-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <SiteBreadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "Seguridad web para PYMEs" },
                ]}
              />

              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Tiempo de lectura: 4 min</p>
              <h1 className="text-3xl sm:text-[2.35rem] md:text-[2.55rem] lg:text-5xl font-semibold tracking-tight leading-[1.02]">
                Seguridad web para PYMEs: HTTPS, contraseñas y respaldos
              </h1>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/seguridadwebseo.webp"
                    alt="Seguridad web y SEO para PYMEs"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                    priority
                  />
                </div>
              </div>

              <p className="text-lg font-medium text-foreground/90">¿Sabes realmente qué tan protegido está tu sitio web?</p>

              <p>
                ¿Alguna vez te has preguntado qué pasaría si mañana tu sitio web deja de funcionar o alguien lo
                hackea? Muchas PYMEs creen que con solo tener su página publicada ya está todo listo, pero la
                seguridad web funciona igual que la puerta de un local: si no tiene llave, cualquiera puede entrar.
              </p>

              <p>
                Un sitio vulnerable puede provocar pérdida de información, robo de datos de clientes, caídas en la web
                y, en el peor de los casos, pérdida de confianza. La buena noticia es que hoy existen medidas simples
                que cualquier Pyme en Chile puede aplicar para proteger su sitio, dar más seguridad a sus usuarios y
                mejorar su presencia en Google.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                HTTPS y certificado SSL: tu primera barrera de protección
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Qué es SSL y por qué es tan importante?</h3>

              <p>
                SSL (Secure Sockets Layer) es un sistema que cifra la información que viaja entre tu sitio web y el
                navegador de tus visitantes. Cuando tu web tiene HTTPS, los datos se transmiten de forma segura y
                Google reconoce que tu sitio es confiable.
              </p>

              <p>
                La seguridad SSL es una de las primeras medidas para proteger una página web y transmitir confianza,
                tanto a tus visitantes como a Google.
              </p>

              <p>
                En la práctica, es como poner un candado a la información de tus clientes. Si tu página sigue
                funcionando con HTTP, los navegadores mostrarán avisos de “sitio no seguro”, lo que puede hacer que
                muchas personas abandonen tu web antes de leer tu contenido.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Tipos de certificados SSL para PYMEs</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">SSL gratuito</p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Suficiente para sitios informativos, blogs o páginas corporativas simples.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-200/70 bg-sky-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">SSL de pago</p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Recomendado si tu web maneja formularios con datos sensibles, accesos privados o pagos en línea, ya
                    que incluye validaciones adicionales y soporte técnico.
                  </p>
                </div>
              </div>

              <p>
                Hoy en Chile es posible activar certificados SSL sin mayor dificultad, por lo que no hay excusas para
                seguir usando HTTP.
              </p>

              <p>
                Si quieres profundizar en este tema, revisa nuestra{" "}
                <Link
                  href="/servicios/auditoria-seo-tecnico"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  sección Full SEO
                </Link>
                , donde explicamos cómo la seguridad técnica influye en el posicionamiento y rendimiento de tu sitio.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/seguridad-focusweb.webp"
                    alt="Buenas prácticas de seguridad web para pymes"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Contraseñas seguras y autenticación en dos pasos (2FA)
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Las contraseñas simples son un riesgo</h3>

              <p>
                Usar contraseñas como “empresa123” o “123456” es uno de los errores más comunes en sitios web de
                PYMEs. Una contraseña segura debería combinar letras mayúsculas, minúsculas, números y símbolos, por
                ejemplo: <strong>Pyme2026!Web</strong>.
              </p>

              <p>
                Para no tener que memorizar claves difíciles, es recomendable usar gestores de contraseñas, que guardan
                tus accesos de forma segura y reducen el riesgo de repetir claves débiles.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Qué es la autenticación de dos factores?</h3>

              <p>
                La autenticación de dos factores (2FA) agrega una capa extra de seguridad. Además de la contraseña,
                necesitas un código temporal que llegue a tu celular o correo.
              </p>

              <p>
                Aunque alguien obtenga tu contraseña, no podrá ingresar sin ese segundo código. Es una medida sencilla
                que reduce mucho el riesgo de accesos no autorizados.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Respaldos automáticos: tu seguro digital</h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Cada cuánto hacer copias de seguridad?</h3>

              <p>
                Si tu sitio web se dañara hoy, ¿podrías recuperarlo fácilmente? Los respaldos automáticos permiten
                restaurar tu web si ocurre un error, un ataque o una falla técnica.
              </p>

              <p>Lo ideal es:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>respaldos diarios si tu web se actualiza con frecuencia</li>
                <li>respaldos semanales si el contenido cambia poco</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Dónde guardar los respaldos?</h3>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">
                    En tu computador o disco externo
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Útil como copia local y rápida de consultar si necesitas recuperar archivos o revisar una versión
                    anterior del sitio.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-200/70 bg-sky-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">En la nube</p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Servicios como Google Drive o servidores externos permiten guardar versiones seguras.
                  </p>
                </div>
                <div className="rounded-2xl border border-violet-200/70 bg-violet-50/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">
                    Modelo mixto (local + nube)
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/80">
                    Es la opción más segura porque combina acceso rápido a una copia local y respaldo externo si el
                    equipo o el servidor principal fallan.
                  </p>
                </div>
              </div>

              <p>
                Con un buen sistema de backups, recuperar tu sitio es tan simple como restaurar un archivo.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Actualizaciones, firewall y protección básica
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Mantén tu sitio siempre actualizado</h3>

              <p>
                Las actualizaciones de tu CMS, temas y plugins no solo agregan funciones, también corrigen errores de
                seguridad. Dejar un sistema desactualizado es como dejar una ventana abierta en tu negocio.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Firewalls y monitoreo</h3>

              <p>
                Un firewall web funciona como un filtro de seguridad que bloquea accesos sospechosos antes de que
                entren a tu sitio. Combinado con herramientas de monitoreo, puedes recibir alertas cuando ocurre algo
                extraño.
              </p>

              <p>
                Hoy existen soluciones simples y accesibles para PYMEs, sin necesidad de ser experto en informática.
              </p>

              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                Estas prácticas forman parte de una revisión técnica completa. Puedes conocerlas con más detalle en
                nuestra{" "}
                <Link href="/servicios" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  sección Servicios
                </Link>
                .
              </blockquote>

              <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/seooptimizacion.webp"
                    alt="Seguridad web y SEO trabajando en conjunto"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Seguridad web y posicionamiento en Google</h2>

              <p>
                La seguridad web también influye en el SEO. Google prioriza los sitios seguros y los usuarios confían
                más en páginas que no muestran advertencias de riesgo.
              </p>

              <p>Un sitio protegido:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>reduce el abandono de visitas</li>
                <li>mejora la confianza</li>
                <li>ayuda a posicionar mejor en buscadores</li>
              </ul>

              <p>La seguridad no es solo técnica: también es parte de tu imagen digital.</p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Educación y prevención en tu equipo</h2>

              <p>
                Muchos ataques no ocurren por fallas técnicas, sino por errores humanos: correos falsos, enlaces
                sospechosos o archivos infectados.
              </p>

              <p>Conversar con tu equipo sobre buenas prácticas digitales, como:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>no abrir correos dudosos</li>
                <li>usar contraseñas seguras</li>
                <li>verificar enlaces</li>
              </ul>

              <p>es tan importante como tener HTTPS o backups.</p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                ¿Cómo proteger mi sitio web contra ataques comunes?
              </h2>

              <p>
                La base suele ser más simple de lo que parece: tener HTTPS activo, usar contraseñas seguras, activar
                2FA, mantener respaldos al día, actualizar el sistema y revisar periódicamente la seguridad de tu
                sitio.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Checklist básica de seguridad web para PYMEs
              </h2>

              <div className="grid gap-3">
                {[
                  "Tener HTTPS activo con certificado SSL.",
                  "Usar contraseñas seguras y activar 2FA.",
                  "Programar respaldos automáticos.",
                  "Mantener el sistema siempre actualizado.",
                  "Usar firewall y monitoreo básico.",
                  "Capacitar al equipo en buenas prácticas digitales.",
                  "Revisar periódicamente la seguridad del sitio.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/85 px-4 py-3 text-sm leading-relaxed text-foreground/85 sm:text-base"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-primary/40 bg-primary/10 text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-foreground/90">
                Si quieres ver estos puntos aplicados a tu propio sitio y entender cómo trabajamos, revisa nuestra{" "}
                <Link
                  href="/nuestro-proceso"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  sección Nuestro Proceso
                </Link>
                .
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Seguridad web: una inversión, no un gasto</h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/seguridadfocuswebsistema.webp"
                    alt="Seguridad web, sistema y posicionamiento en Google"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <p>
                Proteger tu sitio web no es un lujo, es una inversión en confianza, reputación y continuidad de tu
                negocio. Un sitio seguro evita problemas, mejora la experiencia del usuario y refuerza tu
                posicionamiento en Google.
              </p>

              <p>Si no tienes claro qué tan protegido está hoy tu sitio, una revisión básica puede ayudarte a saber:</p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>si tu web es segura</li>
                <li>qué riesgos existen</li>
                <li>y qué deberías priorizar primero</li>
              </ul>

              <ArticleAuthorCta />
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
