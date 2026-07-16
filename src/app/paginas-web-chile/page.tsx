import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import {
  CheckCircle2,
  Clock,
  Globe,
  HeadphonesIcon,
  Rocket,
  Shield,
  ArrowRight,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Páginas Web en Chile desde $180.000 | FocusWeb",
  description:
    "Diseño y creación de páginas web en Chile con SEO incluido, velocidad garantizada y entrega en 2 semanas. Cotiza sin compromiso por WhatsApp.",
  alternates: {
    canonical: "/paginas-web-chile",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/paginas-web-chile",
    title: "Páginas Web en Chile desde $180.000 | FocusWeb",
    description:
      "Diseño y creación de páginas web en Chile con SEO incluido, velocidad garantizada y entrega en 2 semanas. Cotiza sin compromiso por WhatsApp.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/servicios-digitales.webp",
        width: 1200,
        height: 630,
        alt: "Páginas web en Chile – FocusWeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginas Web en Chile desde $180.000 | FocusWeb",
    description:
      "Diseño y creación de páginas web en Chile con SEO incluido, velocidad garantizada y entrega en 2 semanas. Cotiza sin compromiso por WhatsApp.",
    images: ["https://focusweb.cl/servicios-digitales.webp"],
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://focusweb.cl/paginas-web-chile#servicio",
      name: "Diseño y Creación de Páginas Web en Chile",
      serviceType: "Diseño y desarrollo web",
      description:
        "Creación de páginas web en Chile para pymes y negocios: landing pages, sitios corporativos y tiendas online con SEO técnico y velocidad garantizada.",
      provider: {
        "@type": "Organization",
        name: "FocusWeb Chile",
        url: "https://focusweb.cl",
        logo: "https://focusweb.cl/logo-512.png",
      },
      areaServed: { "@type": "Country", name: "Chile" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CLP",
        price: "180000",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "180000",
          priceCurrency: "CLP",
          description: "Precio base desde",
        },
        availability: "https://schema.org/InStock",
        url: "https://focusweb.cl/paginas-web-chile",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://focusweb.cl/paginas-web-chile",
      name: "Páginas Web en Chile desde $180.000 | FocusWeb",
      url: "https://focusweb.cl/paginas-web-chile",
      description:
        "Diseño y creación de páginas web en Chile con SEO incluido, velocidad garantizada y entrega en 2 semanas.",
      inLanguage: "es-CL",
      isPartOf: { "@type": "WebSite", url: "https://focusweb.cl", name: "FocusWeb Chile" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://focusweb.cl" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Páginas web en Chile",
          item: "https://focusweb.cl/paginas-web-chile",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una página web en Chile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuestras páginas web parten desde $180.000 CLP. El precio final depende del tipo de proyecto: landing page, sitio corporativo o tienda online. Cotiza sin compromiso por WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto demora crear una página web?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una landing page o sitio simple puede estar lista en 1 a 2 semanas desde que tenemos tu contenido. Un sitio más completo toma 2 a 4 semanas.",
          },
        },
        {
          "@type": "Question",
          name: "¿El precio incluye hosting y dominio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El dominio (.cl o .com) y el hosting se coordinan contigo. Te explicamos las mejores opciones según tu presupuesto y te ayudamos a configurarlos sin costo adicional de gestión.",
          },
        },
        {
          "@type": "Question",
          name: "¿Atienden fuera de Santiago?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Trabajamos 100% remoto y atendemos clientes en todo Chile: Valparaíso, Concepción, Temuco, La Serena y regiones. Comunicación por WhatsApp y videollamada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa después de que lanzo mi página?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entregamos la web con documentación básica para que puedas actualizar contenidos. Ofrecemos soporte post-lanzamiento para ajustes menores durante las primeras 2 semanas.",
          },
        },
      ],
    },
  ],
}

const inclusions = [
  { icon: Globe, label: "Dominio .cl o .com", detail: "Te orientamos en la compra y configuración" },
  { icon: Shield, label: "SSL/HTTPS incluido", detail: "Certificado de seguridad activo desde el día uno" },
  { icon: Rocket, label: "Velocidad optimizada", detail: "Imágenes comprimidas, código limpio, carga rápida en móvil" },
  { icon: CheckCircle2, label: "SEO base configurado", detail: "Meta tags, sitemap, robots.txt y estructura semántica" },
  { icon: Clock, label: "Entrega en 1–2 semanas", detail: "Una vez que tenemos tu contenido y textos" },
  { icon: HeadphonesIcon, label: "Soporte post-lanzamiento", detail: "Ajustes menores incluidos las primeras 2 semanas" },
]

const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Chile?",
    a: "Nuestros proyectos parten desde $180.000 CLP. El precio exacto depende del tipo de web y el contenido que necesitas. Cotizar no tiene costo ni compromiso.",
  },
  {
    q: "¿Cuánto demora en estar lista?",
    a: "Una landing page o sitio simple: 1 a 2 semanas desde que tienes el contenido listo. Un sitio con más secciones o funciones: 2 a 4 semanas. Te damos un plazo exacto antes de empezar.",
  },
  {
    q: "¿El hosting y el dominio están incluidos?",
    a: "El dominio y hosting se contratan a tu nombre para que siempre seas dueño de tu web. Te orientamos en las mejores opciones para tu caso y lo configuramos nosotros sin cobro extra.",
  },
  {
    q: "¿Incluye correos corporativos?",
    a: "Sí. Te ayudamos a configurar correos tipo hola@tunegocio.cl o ventas@tunegocio.cl usando Google Workspace o una alternativa económica según tu presupuesto.",
  },
  {
    q: "¿Atienden fuera de Santiago?",
    a: "Trabajamos 100% remoto con clientes en todo Chile: Valparaíso, Concepción, Temuco, La Serena y regiones. Todo por WhatsApp y videollamada, sin que tengas que ir a ninguna oficina.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo contarnos qué hace tu negocio y qué quieres lograr con la web. Nosotros te guiamos en el contenido, textos y fotos. No necesitas saber nada técnico.",
  },
  {
    q: "¿Puedo pedir cambios después del lanzamiento?",
    a: "Las primeras 2 semanas post-lanzamiento incluyen ajustes menores sin costo. Para cambios mayores o actualizaciones continuas, coordinamos según tu necesidad.",
  },
  {
    q: "¿La página va a aparecer en Google?",
    a: "Entregamos la web con SEO base: estructura correcta, velocidad optimizada, meta tags y sitemap. Aparecer en Google toma tiempo, pero partirás con las bases técnicas bien puestas.",
  },
]

export default function PaginasWebChilePage() {
  return (
    <>
      <Script id="paginas-web-chile-schema" type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl shadow-primary/5 sm:p-10">
              <SiteBreadcrumb
                className="mb-5"
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Páginas web en Chile" },
                ]}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                FocusWeb Chile · desde $180.000 CLP
              </p>
              <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground leading-[0.96] sm:text-4xl lg:text-5xl">
                Diseño y Creación de Páginas Web en Chile:
                <span className="block text-primary">Rápidas y Optimizadas</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Creamos tu página web en Chile con SEO incluido, velocidad garantizada y entrega en 1 a 2 semanas.
                Sin tecnicismos ni sorpresas en el precio.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/420733796959?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                >
                  Cotizar por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="#precios"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  Ver precios y qué incluye
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Atendemos todo Chile, 100% remoto
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  Sin compromiso al cotizar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ INCLUYE ──────────────────────────────────────── */}
        <section className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Qué incluye cada proyecto
            </h2>
            <p className="mt-2 text-base text-foreground/75">
              Nada de costos escondidos. Esto es lo que entra en todos mis proyectos de desarrollo web:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inclusions.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{label}</p>
                    <p className="mt-0.5 text-xs text-foreground/70 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRECIOS ──────────────────────────────────────────── */}
        <section id="precios" className="scroll-mt-28 px-4 py-8 sm:px-6 sm:py-10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Precios transparentes en CLP
            </h2>
            <p className="mt-2 text-base text-foreground/75">
              Sin cotización genérica de agencia. Precio real desde el primer mensaje.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* Tarjeta Landing Page */}
              <div className="flex flex-col rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-lg shadow-primary/10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Más popular</p>
                <h3 className="font-display mt-2 text-xl font-bold text-foreground">Landing Page</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  Una página, un objetivo. Ideal para captar clientes de forma directa.
                </p>
                <p className="mt-4 text-3xl font-bold text-foreground">
                  $180.000
                  <span className="ml-1 text-base font-normal text-foreground/60">CLP</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {[
                    "Diseño a medida (no plantillas)",
                    "SEO base configurado",
                    "Velocidad optimizada para móvil",
                    "Formulario o CTA hacia WhatsApp",
                    "SSL/HTTPS activo",
                    "Entrega en 1–2 semanas",
                    "Soporte 2 semanas post-lanzamiento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/420733796959?text=Hola%2C%20me%20interesa%20la%20landing%20page"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  Quiero esta landing
                </a>
              </div>

              {/* Tarjeta Sitio Web */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Más completo</p>
                <h3 className="font-display mt-2 text-xl font-bold text-foreground">Sitio Web Completo</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  Inicio, servicios, sobre nosotros y contacto. Para pymes que quieren crecer con orden.
                </p>
                <p className="mt-4 text-3xl font-bold text-foreground">
                  A cotizar
                  <span className="ml-2 text-base font-normal text-foreground/60">según alcance</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {[
                    "Todo lo de la landing page",
                    "Múltiples secciones y páginas",
                    "Correos corporativos configurados",
                    "Blog o sección de novedades (opcional)",
                    "Tienda online (opcional)",
                    "Entrega en 2–4 semanas",
                    "Capacitación para gestionar contenido",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/420733796959?text=Hola%2C%20me%20interesa%20un%20sitio%20web%20completo"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  Cotizar mi sitio
                </a>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-foreground/60">
              ¿Necesitas tienda online o algo a medida?{" "}
              <a
                href="https://wa.me/420733796959"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Cuéntame tu proyecto
              </a>{" "}
              y te respondo con opciones reales.
            </p>
          </div>
        </section>

        {/* ── PROCESO / TIEMPOS ────────────────────────────────── */}
        <section className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                ¿Cómo funciona el proceso?
              </h2>
              <p className="mt-2 text-sm text-foreground/70">
                Sin reuniones de hora ni propuestas interminables.
              </p>
              <ol className="mt-6 space-y-5">
                {[
                  {
                    step: "01",
                    title: "Nos cuentas tu proyecto",
                    desc: "Por WhatsApp o formulario. Sin formularios kilométricos, solo lo esencial: qué hace tu negocio y qué necesitas.",
                  },
                  {
                    step: "02",
                    title: "Te enviamos presupuesto en 24 hrs",
                    desc: "Precio claro, alcance definido y plazo de entrega exacto. Sin sorpresas después.",
                  },
                  {
                    step: "03",
                    title: "Recopilamos tu contenido",
                    desc: "Textos, fotos y lo que tengas. Si no tienes todo, te guiamos para conseguirlo o adaptamos lo que hay.",
                  },
                  {
                    step: "04",
                    title: "Desarrollamos y te mostramos avances",
                    desc: "Ves la web antes de que salga al aire. Tienes espacio para pedir ajustes.",
                  },
                  {
                    step: "05",
                    title: "Lanzamiento y soporte",
                    desc: "Publicamos la web, configuramos hosting y SSL. Las primeras 2 semanas post-lanzamiento incluyen ajustes sin costo.",
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="mt-0.5 text-sm text-foreground/70 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA INTERMEDIO ───────────────────────────────────── */}
        <section className="px-4 py-6 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 px-6 py-8 text-center shadow-sm">
              <p className="text-lg font-semibold text-foreground sm:text-xl">
                ¿Listo para tener tu página web en Chile?
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                Escríbeme por WhatsApp y te respondo hoy con opciones claras para tu negocio.
              </p>
              <a
                href="https://wa.me/420733796959?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
              >
                Cotizar gratis por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Preguntas frecuentes de pymes chilenas
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Lo que nos preguntan antes de empezar.
            </p>
            <div className="mt-6 divide-y divide-border/60 rounded-3xl border border-border/60 bg-card/80 shadow-lg shadow-primary/5 overflow-hidden">
              {faqs.map(({ q, a }) => (
                <div key={q} className="px-6 py-5">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{q}</p>
                  <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────── */}
        <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border border-border/60 bg-white/70 px-6 py-10 text-center shadow-xl shadow-primary/10 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                FocusWeb Chile
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Tu página web, sin vueltas
              </h2>
              <p className="mt-4 text-base text-foreground/70 sm:text-lg">
                Proyectos desde $180.000 CLP. Entrega en 1–2 semanas. Sin contratos largos ni letra chica.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/420733796959?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/servicios/desarrollo-web"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  Ver más sobre desarrollo web
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
