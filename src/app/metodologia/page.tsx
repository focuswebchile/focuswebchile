import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Metodología de auditoría web | Focus Web",
  description:
    "Conoce la metodología con la que auditamos sitios web: un proceso claro, basado en datos y criterio, para priorizar mejoras con impacto real.",
  alternates: {
    canonical: "https://focusweb.cl/metodologia",
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
  "Diagnóstico claro",
  "Interpretación con contexto",
  "Prioridades por impacto",
  "Recomendaciones accionables",
  "Lenguaje comprensible",
]

const excludes = [
  "Promesas garantizadas",
  "Cambios sin criterio",
  "Checklists por cumplir",
  "Implementación automática",
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
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9fafb] text-[#1f2937] font-sans">
        <section className="mx-auto max-w-5xl px-6 pb-14 pt-24 sm:pb-16 sm:pt-28">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#3B82F6]">
              Audit Studio · Framework
            </span>
          </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Metodología de auditoría web</h1>
        <p className="mt-4 max-w-3xl text-base text-[#4B5563] sm:text-lg">
          Un proceso claro para entender qué está funcionando, qué no, y qué realmente vale la pena
          mejorar.
        </p>
        <p className="mt-4 text-sm text-[#6B7280]">
          Metodología desarrollada por Focus Web · Framework Audit Studio
        </p>
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
        <h2 className="text-2xl font-semibold">Qué incluye / Qué no incluye</h2>
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
            <h3 className="text-lg font-semibold text-[#6B7280]">No incluye</h3>
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
            Si este enfoque te hace sentido, podemos revisar tu caso y ver si esta auditoría es el
            paso correcto.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/420733796959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Conversar por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-[#3B82F6] px-5 py-3 text-sm font-semibold text-[#3B82F6] hover:bg-[#3B82F6]/5"
            >
              Ir a contacto
            </Link>
          </div>
          <p className="mt-4 text-xs text-[#6B7280]">Sin presión. Te ayudamos a priorizar.</p>
        </article>
      </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
