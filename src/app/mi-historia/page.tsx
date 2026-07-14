import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SobreMiHero } from "./hero"
import { TextRevealByWord } from "@/components/ui/text-reveal-by-word"
import { Layout, MessageCircle, Target } from "lucide-react"
import { DiferenteTimeline } from "./diferente-timeline"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Mi historia | FocusWeb",
  description:
    "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a ordenar su web con diagnóstico técnico, SEO, velocidad y desarrollo claro.",
  alternates: {
    canonical: "/mi-historia",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/mi-historia",
    title: "Mi historia | Focus Web – SEO técnico, diagnóstico y desarrollo web",
    description:
      "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a ordenar su web con diagnóstico técnico, SEO, velocidad y desarrollo claro.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/opengraph-mi-historia.webp",
        width: 1200,
        height: 630,
        alt: "Mi historia de Focus Web: Felipe y su enfoque en webs para pymes chilenas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi historia | Focus Web – SEO técnico, diagnóstico y desarrollo web",
    description:
      "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a ordenar su web con diagnóstico técnico, SEO, velocidad y desarrollo claro.",
    images: ["https://focusweb.cl/opengraph-mi-historia.webp"],
  },
}

export default function SobreMiPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mi historia | Focus Web – SEO técnico, diagnóstico y desarrollo web",
    url: "https://focusweb.cl/mi-historia",
    description:
      "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a ordenar su web con diagnóstico técnico, SEO, velocidad y desarrollo claro.",
    inLanguage: "es-CL",
    isPartOf: {
      "@type": "WebSite",
      url: "https://focusweb.cl",
      name: "FocusWeb Chile",
    },
  }
  const breadcrumbSchema = {
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
        name: "Mi historia",
        item: "https://focusweb.cl/mi-historia",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <h1 className="sr-only">Mi historia en Focus Web</h1>
        <section aria-label="Breadcrumb" className="px-6 pt-24 md:px-10 md:pt-28">
          <div className="w-full">
            <SiteBreadcrumb
              className="mb-2"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Mi historia" },
              ]}
            />
          </div>
        </section>
        <SobreMiHero />
        <section aria-labelledby="quien-soy-title" className="w-full py-5 md:py-5">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="min-h-[35vh] flex w-full items-center justify-center">
              <div className="w-full">
                <h2 id="quien-soy-title" className="sr-only">Quién soy</h2>
                <p className="mx-auto w-full max-w-[18ch] text-center font-display text-4xl font-medium leading-relaxed text-foreground sm:hidden fade-in-up">
                  Quien soy
                </p>
                <TextRevealByWord
                  text="Quien soy"
                  className="hidden w-full sm:block"
                  textClassName="mx-auto w-full max-w-[24ch] px-0 text-center font-display text-5xl md:text-6xl lg:text-7xl leading-relaxed font-medium"
                />
              </div>
            </div>
            <div className="min-h-[60vh] flex w-full items-center justify-center">
              <div className="w-full">
                <div className="mx-auto w-full max-w-[38ch] px-6 text-center text-xl leading-relaxed text-foreground sm:hidden fade-in-up">
                  <p>No siempre me dediqué a crear páginas web.</p>
                  <p className="mt-4">
                    Hace algunos años viví en Vancouver, Canadá, donde estudié Marketing durante tres años. Fue ahí
                    donde descubrí que detrás de cada negocio hay mucho más que un buen producto: existe una
                    historia, una estrategia y una forma de resolver problemas reales.
                  </p>
                  <p className="mt-4">
                    Con el tiempo entendí que el marketing digital era el punto donde se unían todas las áreas que
                    más disfrutaba: estrategia, tecnología, diseño y análisis. No se trataba solo de crear sitios
                    atractivos, sino de construir herramientas que ayudaran a los negocios a crecer.
                  </p>
                  <p className="mt-4">
                    Hoy, desde Praga, trabajo con emprendedores y pymes en Chile aplicando esa misma forma de pensar.
                  </p>
                </div>
                <TextRevealByWord
                  text={
                    "No siempre me dediqué a crear páginas web.\n\nHace algunos años viví en Vancouver, Canadá, donde estudié Marketing durante tres años. Fue ahí donde descubrí que detrás de cada negocio hay mucho más que un buen producto: existe una historia, una estrategia y una forma de resolver problemas reales.\n\nCon el tiempo entendí que el marketing digital era el punto donde se unían todas las áreas que más disfrutaba: estrategia, tecnología, diseño y análisis. No se trataba solo de crear sitios atractivos, sino de construir herramientas que ayudaran a los negocios a crecer.\n\nHoy, desde Praga, trabajo con emprendedores y pymes en Chile aplicando esa misma forma de pensar."
                  }
                  className="w-full hidden sm:block"
                  textClassName="mx-auto w-full max-w-[56ch] px-6 sm:px-8 text-center text-2xl md:text-3xl lg:text-4xl leading-snug font-normal text-foreground"
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-[62ch] px-6 md:px-10">
              <blockquote className="relative mx-auto max-w-[46ch]">
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-5xl text-primary/20 md:-top-10 md:text-6xl">
                  “
                </span>
                <p className="font-display text-2xl font-medium leading-snug text-primary text-center sm:text-3xl md:text-4xl">
                  Antes de diseñar una página, me gusta entender qué necesita realmente el negocio, identificar qué
                  está frenando su crecimiento y priorizar las mejoras que tendrán un impacto real.
                </p>
              </blockquote>
            </div>

            <div className="min-h-[45vh] flex w-full items-center justify-center">
              <div className="w-full">
                <div className="mx-auto w-full max-w-[38ch] px-6 text-center text-xl leading-relaxed text-foreground/70 sm:hidden fade-in-up">
                  <p>
                    Por eso en FocusWeb no solo desarrollo sitios web. También optimizo velocidad, mejoro el SEO
                    técnico y busco que cada proyecto genere resultados reales, no que sea una página más en internet.
                  </p>
                  <p className="mt-4">
                    Creo que una buena presencia digital no tiene por qué ser complicada. Con una estrategia clara,
                    decisiones bien priorizadas y una ejecución cuidada, una web puede transformarse en una
                    herramienta que trabaje para tu negocio todos los días.
                  </p>
                </div>
                <TextRevealByWord
                  text={
                    "Por eso en FocusWeb no solo desarrollo sitios web. También optimizo velocidad, mejoro el SEO técnico y busco que cada proyecto genere resultados reales, no que sea una página más en internet.\n\nCreo que una buena presencia digital no tiene por qué ser complicada. Con una estrategia clara, decisiones bien priorizadas y una ejecución cuidada, una web puede transformarse en una herramienta que trabaje para tu negocio todos los días."
                  }
                  className="w-full hidden sm:block"
                  textClassName="mx-auto w-full max-w-[56ch] px-6 sm:px-8 text-center text-2xl md:text-3xl lg:text-4xl leading-snug font-normal text-foreground/70"
                />
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="lo-que-me-mueve-title" className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="space-y-4 text-center">
              <h2 id="lo-que-me-mueve-title" className="font-display text-3xl font-semibold sm:text-5xl md:text-7xl">
                <span className="text-foreground">Lo que</span>{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  me mueve
                </span>
              </h2>
              <p className="text-base text-foreground/70 sm:text-lg">
                Diagnóstico, SEO técnico y desarrollo con foco en resultados
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[3fr_2fr]">
              <figure className="overflow-hidden rounded-2xl border border-black/5 ring-1 ring-black/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)] md:h-full">
                <div className="relative h-full min-h-[420px] w-full overflow-hidden">
                  <Image
                    src="/lo-que-me-mueve.webp"
                    alt="Felipe Ibar | Focus Web"
                    fill
                    className="h-full w-full object-cover opacity-95 saturate-[1.08] contrast-[1.08] brightness-[0.98] !transition-none"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    loading="lazy"
                  />
                </div>
                <figcaption className="sr-only">Felipe Ibar y su enfoque de trabajo en Focus Web.</figcaption>
              </figure>

              <div className="flex flex-col gap-8 md:h-full">
                <article className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-accent/55 bg-white/90 p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(61,58,140,0.25)] md:p-10">
                  <Layout className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Claridad
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl">
                    Diagnóstico claro antes de ejecutar
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                    Antes de mover piezas, reviso qué está fallando de verdad: estructura, SEO on-page, indexación, rendimiento o experiencia móvil. Así evitamos cambios al azar y priorizamos lo que más impacto tiene.
                  </p>
                </article>

                <article className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-accent/30 bg-white/90 p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(61,58,140,0.25)] md:p-10">
                  <MessageCircle className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Acompañamiento
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl">
                    Transparencia técnica sin humo
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                   Dejamos de lado promesas vacías. Te explico en simple qué está bien, qué está mal y qué conviene hacer primero. Decidimos juntos con criterio y contexto de negocio.
                  </p>
                </article>
                <article className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-accent/30 bg-white/90 p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(61,58,140,0.25)] md:p-10">
                  <Target className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Estrategia
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl">
                    Base técnica para crecer sin rehacer
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                    Si hay que desarrollar, lo hacemos con SEO técnico y rendimiento desde el inicio. Si no, optimizamos lo existente. El objetivo es el mismo: una web sólida que crezca contigo.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <DiferenteTimeline />
        <section aria-labelledby="cierre-personal-title" className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
            <figure className="mx-auto max-w-3xl">
              <figcaption id="cierre-personal-title" className="sr-only">
                Cierre personal
              </figcaption>
              <blockquote className="relative text-center">
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-6xl text-primary/20 md:-top-12 md:text-7xl">
                  “
                </span>
                <p className="text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
                  Bueno, ahora que me conoces un poco mejor,{" "}
                  <span className="text-primary underline decoration-primary/40 underline-offset-4">
                    hablemos
                  </span>
                  . Cuéntame qué te preocupa hoy: si no apareces en Google, si tu sitio carga lento o si necesitas
                  construir una base técnica mejor. Lo revisamos juntos y definimos el siguiente paso.
                </p>
                <span className="pointer-events-none absolute -bottom-10 right-6 text-6xl text-primary/20 md:-bottom-12 md:text-7xl">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-8 block text-center text-sm font-medium uppercase tracking-[0.2em] text-foreground/60 not-italic">
                Felipe / Focus Web
              </figcaption>
            </figure>
          </div>
        </section>
        <section aria-labelledby="cta-mi-historia-title" className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <aside className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 px-8 py-10 md:px-12 md:py-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                    Un primer paso
                  </p>
                  <h2 id="cta-mi-historia-title" className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                    Hablemos de tu proyecto
                  </h2>
                  <p className="text-base text-foreground/70 md:text-lg">
                    Para revisar qué no está funcionando y qué conviene priorizar primero
                  </p>
                </div>
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  Conversemos
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
