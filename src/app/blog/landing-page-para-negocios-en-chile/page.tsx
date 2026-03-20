import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { ArticleAuthorCta } from "@/components/article-author-cta"

export const metadata: Metadata = {
  title: "Landing Page para Negocios en Chile: Qué es y Cómo Crear | FocusWeb",
  description:
    "Descubre qué es una landing page, para qué sirve y cómo crear una página de una sección para tu negocio en Chile con ejemplos reales.",
  alternates: {
    canonical: "/blog/landing-page-para-negocios-en-chile",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/landing-page-para-negocios-en-chile",
    title: "Landing Page para Negocios en Chile: Qué es y Cómo Crear | FocusWeb",
    description:
      "Descubre qué es una landing page, para qué sirve y cómo crear una página de una sección para tu negocio en Chile con ejemplos reales.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/og-landing-page-para-negocios-chilenos.webp",
        width: 1200,
        height: 630,
        alt: "Landing page para negocios chilenos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page para Negocios en Chile: Qué es y Cómo Crear | FocusWeb",
    description:
      "Descubre qué es una landing page, para qué sirve y cómo crear una página de una sección para tu negocio en Chile con ejemplos reales.",
    images: ["https://focusweb.cl/og-landing-page-para-negocios-chilenos.webp"],
  },
}

const articleAndBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "¿Qué es una landing page y cómo crear una para tu negocio?",
      description:
        "Descubre qué es una landing page, para qué sirve y cómo crear una página de una sección para tu negocio en Chile con ejemplos reales.",
      inLanguage: "es-CL",
      image: ["https://focusweb.cl/og-landing-page-para-negocios-chilenos.webp"],
      author: { "@type": "Organization", name: "FocusWeb Chile" },
      publisher: {
        "@type": "Organization",
        name: "FocusWeb Chile",
        logo: { "@type": "ImageObject", url: "https://focusweb.cl/logo-512.png" },
      },
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/landing-page-para-negocios-en-chile",
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
          name: "Landing Page para Negocios en Chile",
          item: "https://focusweb.cl/blog/landing-page-para-negocios-en-chile",
        },
      ],
    },
  ],
}

function PlaceholderImage({ alt }: { alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/placeholder.jpg"
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
        />
      </div>
    </div>
  )
}

export default function LandingPageParaNegociosPage() {
  return (
    <>
      <Script id="blog-landing-page-negocios-schema" type="application/ld+json">
        {JSON.stringify(articleAndBreadcrumbSchema)}
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
                  { label: "Landing Page para Negocios en Chile" },
                ]}
              />

              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Tiempo de lectura: 5 min</p>
              <h1 className="text-3xl sm:text-[2.35rem] md:text-[2.55rem] lg:text-5xl font-semibold tracking-tight leading-[0.95]">
                ¿Qué es una landing page y cómo crearla para tu negocio?
              </h1>

              <p className="text-lg font-medium text-foreground/90">
                “Necesito una página donde mostrar mi negocio, mis servicios y que se vea profesional.”
              </p>

              <p>
                Si estás acá, probablemente estás pensando algo bien simple: necesitas una página donde mostrar tu
                negocio, tus servicios y que se vea profesional.
              </p>

              <p>
                No estás buscando algo complejo. No necesitas 10 páginas ni una web gigante.
              </p>

              <p>
                Lo que buscas, aunque no siempre con ese nombre, es una landing page.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Qué es una landing page</h2>
              <p>
                Una landing page, o página de aterrizaje, es una página web diseñada para que una persona realice una
                acción específica: contactarte, cotizar, escribirte por WhatsApp o conocer tus servicios.
              </p>

              <p>
                En otras palabras, es una página clara, directa y enfocada en convertir visitas en clientes.
              </p>

              <p>
                En español se la conoce como página de aterrizaje, pero en la práctica es simplemente una página creada
                para presentar tu negocio de forma clara y directa.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/landingpage-focusweb-chile.webp"
                    alt="Qué es una landing page para negocios en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Ejemplos de landing page en negocios reales</h2>
              <p>
                Para bajarlo a tierra, estos son algunos ejemplos de landing page:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>
                  Un gasfiter con una página donde muestra servicios, urgencias y un botón directo a WhatsApp.
                </li>
                <li>Un electricista que muestra certificaciones, trabajos realizados y contacto rápido.</li>
                <li>Una inmobiliaria con propiedades destacadas y un formulario de consulta.</li>
              </ul>

              <p>No son sitios grandes. Son páginas simples que cumplen un objetivo claro.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/gasfiter-focus-web.webp"
                    alt="Ejemplo de landing page para gasfiter"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Para qué sirve una landing page?</h2>
              <p>
                La pregunta clave no es solo qué es, sino para qué sirve una landing page.
              </p>

              <p>Sirve para:</p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Captar clientes.</li>
                <li>Mostrar tus servicios de forma profesional.</li>
                <li>Generar confianza.</li>
                <li>Tener presencia digital sin necesidad de una web compleja.</li>
              </ul>

              <p>
                Sí, se puede ganar dinero con una página de destino, pero no por el simple hecho de existir.
              </p>

              <p>Funciona cuando:</p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Tienes tráfico, ya sea desde Google, redes sociales o recomendaciones.</li>
                <li>El mensaje es claro.</li>
                <li>La página está bien estructurada.</li>
              </ul>

              <div className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/para-que-sirve-landing-page.webp"
                    alt="Para qué sirve una landing page"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Lo que probablemente estás buscando: una página simple
              </h2>
              <p>Acá es donde entra algo importante.</p>

              <p>
                Muchas personas buscan términos como <strong>one page</strong>, <strong>one page website</strong> o
                incluso <strong>pages one</strong>, pero en el fondo se refieren a lo mismo: una página web de una sola
                sección, simple, directa y enfocada en mostrar un negocio.
              </p>

              <p>
                Esto es lo que muchos necesitan al comenzar: no una web completa, sino una landing page tipo one page.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Cómo crear una landing page paso a paso (estructura real)
              </h2>
              <p>Si estás partiendo, esta estructura funciona para la mayoría de negocios:</p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">01. ¿Qué haces? (Hero)</h3>
                  <p className="mt-2">Explica claramente:</p>
                  <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                    <li>Qué servicio ofreces.</li>
                    <li>A quién ayudas.</li>
                    <li>Por qué deberían elegirte.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">02. ¿Para quién es?</h3>
                  <p className="mt-2">Define a tu cliente ideal.</p>
                  <p>No es para todos, y eso hace que tu página conecte mejor.</p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">03. ¿Por qué importa?</h3>
                  <p className="mt-2">Explica beneficios reales:</p>
                  <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                    <li>Qué problema solucionas.</li>
                    <li>Qué gana el cliente al trabajar contigo.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">04. ¿Por qué confiar en ti?</h3>
                  <p className="mt-2">Aquí construyes autoridad:</p>
                  <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                    <li>Experiencia.</li>
                    <li>Testimonios.</li>
                    <li>Trabajos realizados.</li>
                    <li>Certificaciones.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">05. Servicios</h3>
                  <p className="mt-2">Muestra lo que haces de forma simple y clara.</p>
                  <p>Sin tecnicismos innecesarios.</p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">06. Proyectos reales</h3>
                  <p className="mt-2">Nada genera más confianza que ver lo que ya hiciste.</p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">07. Llamado a la acción (CTA)</h3>
                  <p className="mt-2">Plantea una sola acción clara:</p>
                  <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                    <li>WhatsApp.</li>
                    <li>Formulario de contacto.</li>
                    <li>Llamada.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">08. Preguntas frecuentes (FAQs)</h3>
                  <p className="mt-2">Responde dudas típicas:</p>
                  <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                    <li>Precios.</li>
                    <li>Tiempos de entrega o respuesta.</li>
                    <li>Cobertura, ciudades o zonas que atiendes.</li>
                  </ul>
                  <p>Esto ayuda mucho a convertir.</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Cómo crear una landing page para tu negocio (ejemplos)
              </h2>
              <p>Dependiendo del rubro, la estructura se adapta:</p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Gasfiter</h3>
                  <p className="mt-2">
                    Hero con urgencias 24/7, CTA directo a WhatsApp y fotos de trabajos realizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Electricista</h3>
                  <p className="mt-2">
                    Servicios bien definidos, certificaciones visibles y contacto rápido.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Inmobiliaria</h3>
                  <p className="mt-2">
                    Propiedades destacadas, formulario de contacto e información clara sobre precios y ubicación.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border/60 bg-white/85 p-5 shadow-lg shadow-primary/10 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ejemplo real</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">ABcis Chile</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  ABcis necesitaba una página simple para mostrar con claridad su servicio, mantener los colores de la
                  marca y tener una web profesional que pudiera vincularse con su perfil de Google Mi Negocio.
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  El foco estaba en explicar bien lo que hacen: un equipo multidisciplinario de ingenieros, abogados y
                  auditores que trabaja desde 2011 diseñando soluciones de compliance para fortalecer la integridad
                  corporativa de empresas de distintos tamaños y sectores.
                </p>
                <div className="mt-5 overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm">
                  <a href="https://abcis.cl/" target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="/abcis.cl.webp"
                        alt="Landing page de ABCIS Chile"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                      />
                    </div>
                  </a>
                </div>
                <p className="mt-3 text-sm text-foreground/65">
                  Sitio de referencia:{" "}
                  <a
                    href="https://abcis.cl/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    abcis.cl
                  </a>
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Cómo hacer una landing page efectiva para captar clientes
              </h2>
              <p>No basta con tener una página.</p>
              <p>Tiene que funcionar.</p>
              <p>Claves para que tu landing page sea efectiva:</p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Mensaje claro desde el inicio.</li>
                <li>Carga rápida, porque una página lenta pierde clientes.</li>
                <li>Un solo objetivo, sin intentar convertir en cinco cosas distintas al mismo tiempo.</li>
              </ul>

              <p>
                Si tu sitio carga lento, afecta directamente los resultados. Puedes revisar más sobre esto en nuestro
                servicio de{" "}
                <a
                  href="/servicios/optimizacion-velocidad-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  optimización de velocidad web
                </a>
                .
              </p>

              <p>
                Y si la estructura no está bien pensada desde el inicio, también impacta. Por eso el desarrollo es
                clave: puedes revisar nuestro{" "}
                <a
                  href="/servicios/desarrollo-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  desarrollo web profesional
                </a>
                .
              </p>

              <p>
                Descubre qué es una landing page, para qué sirve y cómo crear una página de una sección para tu negocio
                en Chile con ejemplos reales.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Cómo aparecer en Google con una landing page?</h2>
              <p>Acá hay que ser claro.</p>
              <p>Una landing page por sí sola no te posiciona automáticamente.</p>

              <p>
                Si quieres trabajar la visibilidad en buscadores, necesitas una base técnica correcta. Puedes
                profundizar en eso en nuestra{" "}
                <a
                  href="/servicios/auditoria-seo-tecnico"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  auditoría SEO técnica
                </a>
                .
              </p>

              <p>
                Ahora, si tu objetivo es tener presencia local, hay algo aún más importante: combinar tu página con tu
                perfil de negocio en Google, o Google Business Profile.
              </p>

              <p>
                Si no lo has visto, este artículo te puede ayudar mucho:{" "}
                <a
                  href="/blog/seo-local-google-business-chile"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Google Mi Negocio Chile
                </a>
                .
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Plataformas para crear una landing page sin saber programar
              </h2>
              <p>Hoy existen varias opciones para crear una landing page sin experiencia técnica:</p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Constructores visuales, drag and drop, como Wix, Webflow o similares.</li>
                <li>WordPress con plantillas y builders como Elementor.</li>
                <li>Shopify, especialmente útil si ya tienes productos y quieres vender en línea.</li>
              </ul>

              <p>
                Funcionan bien para comenzar, pero tienen límites si necesitas algo más personalizado, escalable o
                optimizado para conversiones.
              </p>

              <p>
                Además, ahora también existen plataformas basadas en IA donde puedes crear una landing con un simple
                prompt. Por ejemplo:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>
                  <a
                    href="https://app.emergent.sh/landing/"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    app.emergent.sh/landing
                  </a>
                </li>
                <li>
                  <a
                    href="https://v0.app/"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    v0.app
                  </a>
                </li>
              </ul>

              <p>
                Estas herramientas permiten generar una página rápida solo describiendo lo que quieres, pero también
                tienen pros y contras.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold">Ventajas</h3>
              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Rapidez extrema para tener algo funcionando.</li>
                <li>No necesitas tocar código ni diseñar desde cero.</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold">Limitaciones</h3>
              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Menos control sobre detalles técnicos y de experiencia de usuario.</li>
                <li>Diseños genéricos que pueden no reflejar bien tu marca.</li>
                <li>A veces cuesta ajustar elementos específicos de conversión, CTA, formularios o tracking.</li>
              </ul>

              <p>
                Por eso, muchas veces lo ideal es usar estas herramientas como punto de partida y luego trabajar con un
                desarrollador o agencia para pulir la estructura, la velocidad y la estrategia de conversión.
              </p>

              <p>
                Si quieres profundizar y ver cómo estructuramos este tipo de páginas en proyectos reales, puedes
                revisar más acá:{" "}
                <a
                  href="/landing-page"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  landing page
                </a>
                .
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Cuánto cuesta una landing page?</h2>
              <p>El precio de una landing page puede variar bastante:</p>

              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Hacerlo tú mismo, bajo costo.</li>
                <li>Contratar a alguien, costo intermedio.</li>
                <li>Trabajar con una agencia, mayor inversión.</li>
              </ul>

              <p>Todo depende del nivel de personalización y de la estrategia detrás del proyecto.</p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Conclusión: no necesitas una web compleja para empezar
              </h2>
              <p>Muchas personas creen que necesitan una página web completa desde el inicio.</p>

              <p>Pero en la práctica, una landing page bien hecha puede ser más que suficiente para:</p>
              <ul className="list-disc space-y-2 pl-6 text-foreground/90">
                <li>Mostrar tu negocio.</li>
                <li>Generar confianza.</li>
                <li>Captar clientes.</li>
              </ul>

              <p>No se trata de tener más páginas.</p>
              <p>Se trata de tener una página que funcione.</p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/30 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/landing-page-chile.webp"
                    alt="Landing page en Chile para negocios"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

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
