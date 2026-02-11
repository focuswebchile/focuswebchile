import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ReviewRequestBar } from "@/components/review-request-bar"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Diagnóstico inicial web | Focus Web",
  description:
    "Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero.",
  alternates: {
    canonical: "/metodologia",
  },
}

const principles = [
  {
    title: "Criterio antes que métricas",
    body: "No todo lo medible es prioritario. Leemos el contexto antes de decidir.",
  },
  {
    title: "Datos como punto de partida, no como fin",
    body: "Los datos orientan el análisis, pero la decisión final la define el impacto.",
  },
  {
    title: "Priorizar es tan importante como detectar",
    body: "Detectar problemas sin orden de acción solo aumenta ruido operativo.",
  },
  {
    title: "Transparencia total",
    body: "Explicamos qué encontramos, por qué importa y qué no vale la pena tocar.",
  },
]

const steps = [
  {
    title: "Recolección de datos técnicos y experiencia",
    bullets: [
      "Análisis de carga, estructura, indexación y rastreo.",
      "Revisión del flujo real de uso en desktop y mobile.",
      "Levantamiento de hallazgos con evidencia concreta.",
    ],
  },
  {
    title: "Interpretación con foco en negocio",
    bullets: [
      "Relación entre problema técnico y efecto comercial.",
      "Separación entre ruido técnico y riesgo real.",
      "Contexto según etapa, canal y objetivo del sitio.",
    ],
  },
  {
    title: "Priorización por impacto real",
    bullets: [
      "Orden por impacto esperado versus esfuerzo.",
      "Bloques de acción rápida y mejoras estructurales.",
      "Ruta de ejecución clara para evitar dispersión.",
    ],
  },
  {
    title: "Recomendaciones accionables",
    bullets: [
      "Entregables claros en lenguaje comprensible.",
      "Acciones concretas, responsables y criterio de éxito.",
      "Documento útil para implementar, no solo para leer.",
    ],
  },
]

const includes = [
  "Diagnóstico inicial claro",
  "Hallazgos técnicos prioritarios",
  "Interpretación con contexto",
  "Siguiente paso recomendado",
  "Lenguaje comprensible",
]

const excludes = [
  "Auditoría técnica completa",
  "Implementación de mejoras",
  "Acompañamiento mensual",
  "Promesas garantizadas",
]

const forWho = [
  "Equipos que necesitan decidir qué mejorar primero.",
  "Negocios con web activa y foco en conversión o leads.",
  "Proyectos que valoran criterio técnico con lectura comercial.",
]

const notForWho = [
  "Quienes buscan promesas de resultado inmediato.",
  "Quienes solo necesitan ejecutar cambios sin priorización.",
  "Proyectos sin capacidad de implementar mejoras luego del diagnóstico.",
]

export default function MetodologiaPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Diagnóstico inicial web | Focus Web",
    url: "https://focusweb.cl/metodologia",
    description:
      "Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero.",
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
        name: "Metodología",
        item: "https://focusweb.cl/metodologia",
      },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9fafb] text-[#1f2937] font-sans">
      <section id="diagnostico-inicial" className="mx-auto max-w-5xl px-6 pb-14 pt-24 sm:pb-16 sm:pt-28">
          <SiteBreadcrumb
            className="mb-4"
            items={[
              { label: "Inicio", href: "/" },
              { label: "Metodología" },
            ]}
          />
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#3B82F6]">
              Audit Studio · Framework
            </span>
          </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Diagnóstico inicial de tu sitio web</h1>
        <p className="mt-4 max-w-3xl text-base text-[#4B5563] sm:text-lg">
          Una revisión inicial para entender qué está funcionando, qué no y qué conviene priorizar
          primero.
        </p>
        <p className="mt-4 text-sm text-[#6B7280]">
          Si luego necesitas una auditoría completa, también te guiamos en ese siguiente nivel.
        </p>
        <div className="mt-6 rounded-2xl border border-[#dbeafe] bg-[#eff6ff] p-4 sm:p-5">
          <p className="text-sm text-[#1e40af] sm:text-base">
            <strong>Importante:</strong> esta página y su formulario corresponden al{" "}
            <strong>diagnóstico inicial</strong>. Es una primera capa de claridad para decidir bien.
            No reemplaza una auditoría técnica completa.
          </p>
        </div>
        <div className="mt-8">
          <ReviewRequestBar leadText="edita tu website aqui" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Mi página web tarda mucho en cargar: cómo lo diagnosticamos</h2>
        <div className="mt-4 rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Cuando un sitio carga lento, no asumimos: medimos. Revisamos recursos pesados, imágenes sin optimizar,
            scripts que bloquean render, caché y estado general de Core Web Vitals. Con eso definimos un orden claro
            de mejoras para priorizar impacto real en experiencia y conversión.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Principios</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Proceso</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#3B82F6]">Paso {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#4B5563]">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Qué incluye / Qué no incluye el diagnóstico inicial</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#22c55e]">Incluye</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
              {includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#6B7280]">No incluye (en esta etapa)</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
              {excludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#9CA3AF]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold">Para quién es / Para quién no es</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Para quién es</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
              {forWho.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#22c55e]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Para quién no es</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
              {notForWho.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#9CA3AF]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <article className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Próximo paso</h2>
          <p className="mt-3 text-sm text-[#4B5563] sm:text-base">
            Si este diagnóstico inicial te hace sentido, podemos revisar tu caso y definir si
            conviene avanzar a una auditoría técnica completa.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#diagnostico-inicial"
              className="inline-flex items-center justify-center rounded-xl border border-[#3B82F6] px-5 py-3 text-sm font-semibold text-[#3B82F6] hover:bg-[#3B82F6]/5"
            >
              Ir al diagnóstico inicial
            </Link>
            <Link
              href="https://wa.me/420733796959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Quiero auditoría completa
            </Link>
          </div>
          <p className="mt-4 text-xs text-[#6B7280]">Sin presión. Te ayudamos a priorizar.</p>
        </article>
      </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingWhatsApp />
    </>
  )
}
