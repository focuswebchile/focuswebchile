import Link from "next/link"
import Script from "next/script"
import { AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { Button } from "@/components/ui/button"
import { LaunchChecklistForm } from "./launch-checklist-form"

const overviewSteps = [
  { number: "01", title: "Base\ntecnica", numberTone: "text-emerald-500/10", accentTone: "bg-emerald-500" },
  { number: "02", title: "Indexacion\nen Google", numberTone: "text-sky-500/10", accentTone: "bg-sky-500" },
  { number: "03", title: "Monitoreo\nweb", numberTone: "text-amber-500/10", accentTone: "bg-amber-500" },
  { number: "04", title: "Presencia\nlocal", numberTone: "text-cyan-500/10", accentTone: "bg-cyan-500" },
  { number: "05", title: "Estructura\nSEO minima", numberTone: "text-indigo-500/10", accentTone: "bg-indigo-500" },
]

const detailedSteps = [
  {
    number: "01",
    title: "Dominio y base tecnica correcta",
    explanation:
      "Tu sitio necesita partir con una base estable. Si el dominio, el HTTPS o las configuraciones iniciales estan mal, todo lo demas pierde fuerza.",
    checks: [
      "Tu sitio carga con https",
      "El dominio es el correcto",
      "No hay duplicados entre www y sin www",
    ],
    error: "Publicar el sitio sin redirecciones claras o sin certificado SSL activo.",
    sectionTone: "bg-white/85",
    badgeTone: "bg-emerald-100 text-emerald-700 border-emerald-200",
    errorTone: "bg-amber-50 border-amber-200 text-amber-900",
  },
  {
    number: "02",
    title: "Indexacion en Google",
    explanation:
      "Si Google no puede rastrear o indexar tu sitio, simplemente no aparecera cuando alguien busque tu marca o servicios.",
    checks: [
      "La web no esta bloqueada por [[robots.txt]]",
      "Las paginas importantes pueden indexarse",
      "El sitemap esta activo y visible",
    ],
    error: "Publicar el sitio y asumir que Google lo encontrara solo.",
    sectionTone: "bg-slate-50/90",
    badgeTone: "bg-sky-100 text-sky-700 border-sky-200",
    errorTone: "bg-rose-50 border-rose-200 text-rose-900",
  },
  {
    number: "03",
    title: "Medicion desde el primer dia",
    explanation:
      "Si no mides desde el inicio, despues no sabras que paginas funcionan, de donde vienen tus visitantes ni que acciones generan contacto.",
    checks: [
      "Google Analytics instalado",
      "Search Console conectado",
      "Formularios y clics importantes medidos",
    ],
    error: "Instalar la medicion meses despues y perder datos clave del lanzamiento del sitio.",
    sectionTone: "bg-white/85",
    badgeTone: "bg-amber-100 text-amber-800 border-amber-200",
    errorTone: "bg-orange-50 border-orange-200 text-orange-900",
  },
  {
    number: "04",
    title: "Presencia local (si aplica)",
    explanation:
      "Si tu negocio trabaja por ciudad, comuna o zona, tu presencia local tambien debe estar lista. Eso ayuda a que te encuentren cuando buscan servicios cerca de ti.",
    checks: [
      "Ficha de Google Mi Negocio creada y verificada",
      "Datos del negocio coinciden con la web",
      "Ubicacion o zona de servicio clara",
    ],
    error: "Tener la web publicada pero sin ficha de Google Mi Negocio.",
    sectionTone: "bg-slate-50/90",
    badgeTone: "bg-cyan-100 text-cyan-800 border-cyan-200",
    errorTone: "bg-amber-50 border-amber-200 text-amber-900",
  },
  {
    number: "05",
    title: "Estructura SEO minima",
    explanation:
      "No necesitas una estrategia completa de SEO para lanzar, pero si una estructura minima que ayude a Google y a los usuarios a entender tu sitio.",
    checks: [
      "Cada pagina tiene un titulo claro",
      "Existe un H1 por pagina",
      "La jerarquia y la intencion de cada seccion se entienden",
    ],
    error: "Publicar paginas sin titulos claros o sin estructura organizada.",
    sectionTone: "bg-white/85",
    badgeTone: "bg-indigo-100 text-indigo-700 border-indigo-200",
    errorTone: "bg-rose-50 border-rose-200 text-rose-900",
  },
]

const selfAuditChecklist = [
  "Mi sitio carga con https",
  "Google puede encontrar mi sitio",
  "Tengo Analytics y Search Console",
  "Mi presencia local esta lista",
  "Cada pagina tiene titulo y H1",
]

function buildPageSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "5 pasos antes de lanzar un sitio web | FocusWeb",
        url: pageUrl,
        description:
          "Revisa los aspectos clave antes de lanzar un sitio web: base tecnica, indexacion en Google, medicion, presencia local y SEO minimo.",
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
            name: "5 pasos antes de lanzar un sitio web",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "5 pasos antes de lanzar un sitio web",
        itemListElement: overviewSteps.map((step, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: step.title,
        })),
      },
      {
        "@type": "HowTo",
        name: "5 pasos antes de lanzar un sitio web",
        description:
          "Checklist practico para revisar la base tecnica, la indexacion, la medicion, la presencia local y la estructura SEO minima antes de publicar un sitio web.",
        inLanguage: "es-CL",
        totalTime: "PT10M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Dominio y base tecnica correcta",
            text: "Verifica que tu sitio cargue con https, que el dominio final sea el correcto y que no existan duplicados entre www y sin www.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Indexacion en Google",
            text: "Revisa que la web no este bloqueada, que las paginas importantes puedan indexarse y que el sitemap este activo.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Medicion desde el primer dia",
            text: "Comprueba que Google Analytics, Search Console y los eventos o formularios importantes esten medidos desde el lanzamiento.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Presencia local",
            text: "Si tu negocio trabaja por ciudad o zona, valida que tu ficha de Google Mi Negocio este creada y coincida con la informacion del sitio.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Estructura SEO minima",
            text: "Asegurate de que cada pagina tenga titulo claro, un H1 y una estructura entendible para Google y para los usuarios.",
          },
        ],
      },
    ],
  }
}

type LaunchChecklistPageProps = {
  pageUrl: string
}

export function LaunchChecklistPageContent({ pageUrl }: LaunchChecklistPageProps) {
  const pageSchema = buildPageSchema(pageUrl)

  return (
    <>
      <Script id="launch-checklist-schema" type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pt-24 sm:px-6 sm:pt-28">
          <div className="container mx-auto max-w-6xl">
            <SiteBreadcrumb
              className="mb-4"
              items={[
                { label: "Inicio", href: "/" },
                { label: "5 pasos antes de lanzar un sitio web" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 sm:pb-18">
          <div className="mx-auto max-w-[1600px]">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/85 px-6 py-12 shadow-[0_35px_120px_-72px_rgba(15,23,42,0.45)] backdrop-blur sm:px-10 sm:py-16 lg:px-14">
              <div className="absolute right-4 top-0 text-[9rem] font-semibold leading-none text-primary/7 sm:right-10 sm:text-[12rem]">
                5
              </div>
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <p className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Guia practica de lanzamiento
                </p>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  5 pasos antes de lanzar un sitio web
                </h1>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-base">
                  Aspectos clave que deberias revisar antes de publicar tu sitio web.
                </p>
                <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                  Antes de publicar tu sitio web, hay configuraciones basicas que determinan si Google podra
                  encontrarlo, medirlo y mostrarlo correctamente. Este checklist te ayuda a revisar lo esencial antes
                  de salir al aire.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/metodologia">Revisar si mi sitio esta bien configurado</Link>
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                  <span className="rounded-full border border-border/70 bg-background/80 px-3 py-2">Base tecnica</span>
                  <span className="rounded-full border border-border/70 bg-background/80 px-3 py-2">Indexacion</span>
                  <span className="rounded-full border border-border/70 bg-background/80 px-3 py-2">Medicion</span>
                  <span className="rounded-full border border-border/70 bg-background/80 px-3 py-2">Presencia local</span>
                  <span className="rounded-full border border-border/70 bg-background/80 px-3 py-2">SEO minimo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-[1.75rem] border border-emerald-200/70 bg-emerald-50/80 px-6 py-5 text-center shadow-sm sm:px-8">
              <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Enfoque practico
              </p>
              <p className="mx-auto mt-3 max-w-[44rem] text-base leading-relaxed text-emerald-950/80 sm:text-lg">
                En muchos proyectos el problema no esta en el diseño, sino en pequeños detalles que quedan pendientes
                antes de publicar. Revisarlos a tiempo puede evitar errores, caidas de rendimiento o problemas de
                indexacion en Google.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 xl:px-10 2xl:px-14">
          <div className="mx-auto max-w-[1600px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Vista general</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl xl:text-[3.4rem] xl:leading-[1.05]">
                Checklist antes de publicar
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-5 xl:gap-6">
              {overviewSteps.map((step, index) => (
                <article key={step.number} className="relative">
                  {index < overviewSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[calc(100%-0.75rem)] top-1/2 hidden h-px w-[calc(100%+1.5rem)] -translate-y-1/2 bg-gradient-to-r from-border via-border/80 to-transparent xl:block"
                    />
                  ) : null}
                  <div className="group relative min-h-[230px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur transition-transform duration-300 lg:hover:-translate-y-1">
                    <div className={`pointer-events-none absolute right-3 top-0 text-[7rem] font-black leading-none ${step.numberTone}`}>
                      {step.number}
                    </div>
                    <div className={`h-1.5 w-14 rounded-full ${step.accentTone}`} />
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Paso {step.number}
                    </p>
                    <h3 className="mt-8 max-w-[11ch] pr-8 text-[2rem] font-bold leading-[0.98] tracking-tight text-foreground xl:text-[1.9rem]">
                      {step.title.split("\n").map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="container mx-auto max-w-6xl space-y-6">
            {detailedSteps.slice(0, 3).map((step) => (
              <article
                key={step.number}
                className={`rounded-[2rem] border border-white/70 ${step.sectionTone} p-6 shadow-[0_28px_80px_-58px_rgba(15,23,42,0.42)] backdrop-blur sm:p-8 lg:p-10`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div className="lg:flex lg:min-h-full lg:flex-col lg:justify-center">
                    <div className={`inline-flex self-start rounded-full border px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] ${step.badgeTone}`}>
                      Paso {step.number}
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {step.explanation}
                    </p>
                    {step.number === "01" ? (
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                        Si tu sitio ya esta publicado y sientes que la base tecnica o el rendimiento no estan bien resueltos,
                        puede ayudarte una{" "}
                        <Link
                          className="inline-block whitespace-nowrap text-primary underline underline-offset-4 hover:text-primary/80"
                          href="/servicios/optimizacion-velocidad-web"
                        >
                          optimizacion de velocidad web
                        </Link>
                        .
                      </p>
                    ) : null}
                    {step.number === "02" ? (
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                        Si quieres revisar este punto con mas detalle, puedes partir por nuestra{" "}
                        <Link className="text-primary underline underline-offset-4 hover:text-primary/80" href="/metodologia">
                          metodologia
                        </Link>
                        .
                      </p>
                    ) : null}
                    {step.number === "05" ? (
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                        Si ya tienes un sitio publicado y quieres revisar esta base tecnica, puedes ver nuestra{" "}
                        <Link
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                          href="/servicios/auditoria-seo-tecnico"
                        >
                          auditoria SEO tecnica
                        </Link>
                        .
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-border/70 bg-white/90 p-5">
                      <h3 className="text-lg font-semibold text-foreground">Que revisar</h3>
                      <ul className="mt-4 space-y-3">
                        {step.checks.map((check) => (
                          <li key={check} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                            <span>
                              {check.split(/(\[\[.*?\]\])/g).map((part, index) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                  const label = part.slice(2, -2)
                                  return (
                                    <span
                                      key={`${check}-${index}`}
                                      className="rounded-md bg-sky-100 px-1.5 py-0.5 font-semibold text-sky-800"
                                    >
                                      {label}
                                    </span>
                                  )
                                }

                                return <span key={`${check}-${index}`}>{part}</span>
                              })}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`rounded-[1.5rem] border p-5 ${step.errorTone}`}>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                        <div>
                          <h3 className="text-base font-semibold">Error comun</h3>
                          <p className="mt-2 text-sm leading-relaxed sm:text-base">{step.error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-primary/20 bg-primary/10 px-6 py-8 text-center shadow-sm sm:px-8">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                No estas seguro si tu sitio cumple con estos puntos?
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Si quieres, puedo revisar tu sitio y decirte que puntos conviene ajustar antes de publicarlo.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary/25 bg-white/80 px-7 text-base font-semibold text-primary hover:bg-white"
                >
                  <Link href="/metodologia">Revisar mi sitio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="container mx-auto max-w-6xl space-y-6">
            {detailedSteps.slice(3).map((step) => (
              <article
                key={step.number}
                className={`rounded-[2rem] border border-white/70 ${step.sectionTone} p-6 shadow-[0_28px_80px_-58px_rgba(15,23,42,0.42)] backdrop-blur sm:p-8 lg:p-10`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div className="lg:flex lg:min-h-full lg:flex-col lg:justify-center">
                    <div className={`inline-flex self-start rounded-full border px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] ${step.badgeTone}`}>
                      Paso {step.number}
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {step.explanation}
                    </p>
                    {step.number === "02" ? (
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                        Si quieres revisar este punto con mas detalle, puedes partir por nuestra{" "}
                        <Link className="text-primary underline underline-offset-4 hover:text-primary/80" href="/metodologia">
                          metodologia
                        </Link>
                        .
                      </p>
                    ) : null}
                    {step.number === "05" ? (
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                        Si ya tienes un sitio publicado y quieres revisar esta base tecnica, puedes ver nuestra{" "}
                        <Link
                          className="text-primary underline underline-offset-4 hover:text-primary/80"
                          href="/servicios/auditoria-seo-tecnico"
                        >
                          auditoria SEO tecnica
                        </Link>
                        .
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-border/70 bg-white/90 p-5">
                      <h3 className="text-lg font-semibold text-foreground">Que revisar</h3>
                      <ul className="mt-4 space-y-3">
                        {step.checks.map((check) => (
                          <li key={check} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                            <span>
                              {check.split(/(\[\[.*?\]\])/g).map((part, index) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                  const label = part.slice(2, -2)
                                  return (
                                    <span
                                      key={`${check}-${index}`}
                                      className="rounded-md bg-sky-100 px-1.5 py-0.5 font-semibold text-sky-800"
                                    >
                                      {label}
                                    </span>
                                  )
                                }

                                return <span key={`${check}-${index}`}>{part}</span>
                              })}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`rounded-[1.5rem] border p-5 ${step.errorTone}`}>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                        <div>
                          <h3 className="text-base font-semibold">Error comun</h3>
                          <p className="mt-2 text-sm leading-relaxed sm:text-base">{step.error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_28px_80px_-58px_rgba(15,23,42,0.42)] backdrop-blur sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Autoevaluacion
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[2.6rem] sm:leading-none">
                  Antes de lanzar tu sitio, revisa esto
                </h2>
                <ul className="mt-6 space-y-4">
                  {selfAuditChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/85 px-4 py-3 text-sm leading-relaxed text-foreground/85 sm:text-base"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-primary/40 bg-primary/10 text-primary">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <aside className="flex flex-col justify-center rounded-[2rem] border border-primary/20 bg-primary/10 p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lectura rapida</p>
                <p className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  Si detectaste dos o mas puntos pendientes, todavia hay cosas importantes que conviene corregir antes de publicar.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  Corregir estos puntos antes de publicar evita errores frecuentes de indexacion, medicion incompleta o
                  estructuras que despues cuestan mucho mas ajustar una vez que tu sitio web ya esta publicado. Si
                  necesitas ordenar mejor esa base desde el inicio, puede ayudarte un{" "}
                  <Link className="text-primary underline underline-offset-4 hover:text-primary/80" href="/servicios/desarrollo-web">
                    desarrollo web profesional
                  </Link>
                  .
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-emerald-200/60 bg-gradient-to-r from-emerald-50/95 via-white/85 to-sky-50/95 px-6 py-9 text-center shadow-[0_24px_80px_-60px_rgba(15,23,42,0.32)] backdrop-blur sm:px-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Una ultima idea importante
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-balance text-[2rem] font-semibold leading-tight text-foreground sm:text-[2.6rem]">
                Publicar un sitio no es lo mismo que dejarlo listo para ser encontrado.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                Una base bien configurada desde el inicio evita errores, mejora la medicion y te da un lanzamiento mucho
                mas solido.
              </p>
            </div>
          </div>
        </section>

        <section id="revision-final" className="px-4 pb-20 pt-8 sm:px-6 sm:pb-24">
          <div className="container mx-auto max-w-6xl">
            <LaunchChecklistForm />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
