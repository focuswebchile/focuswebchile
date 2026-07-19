"use client"

import { useState } from "react"
import { Search, Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
  {
    id: "costo",
    q: "¿Cuánto cuesta una página web en Chile?",
    a: "Depende del proyecto: básica desde $180.000, corporativa desde $350.000, e-commerce desde $650.000. El precio exacto lo defino después del diagnóstico, no antes.",
  },
  {
    id: "valor",
    q: "¿Cómo se calcula el valor de una página web?",
    a: "El valor se mueve según diseño, funcionalidades, integraciones, SEO técnico y seguridad. Un sitio simple y uno con automatizaciones no cuestan lo mismo, aunque se vean parecidos.",
  },
  {
    id: "inversion",
    q: "¿Cuál es la inversión real de una web?",
    a: "Más allá del pago inicial, hay costos anuales de hosting y dominio, y eventual mantención. Te los dejo claros desde el principio — nada de sorpresas después de publicar.",
  },
  {
    id: "tiempo",
    q: "¿Cuánto se demora un proyecto?",
    a: "Un proyecto estándar toma alrededor de 2 semanas, desde el diagnóstico hasta la publicación. Proyectos más grandes o con integraciones a medida pueden tomar más.",
  },
  {
    id: "cambios",
    q: "¿Qué pasa si necesito cambios después de que el sitio esté listo?",
    a: "Me quedo después de publicar. Si necesitas ajustes, correcciones o nuevas secciones, seguimos trabajando juntos — no desaparezco apenas el sitio queda arriba.",
  },
  {
    id: "diagnostico",
    q: "¿Por qué primero hacen un diagnóstico gratis en vez de cotizar directo?",
    a: "Porque cotizar sin entender tu problema real es adivinar. El diagnóstico gratuito me permite darte prioridades claras antes de proponerte cualquier cosa.",
  },
]

function FAQItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition-shadow duration-300 sm:p-6 data-[state=open]:shadow-lg" data-state={isOpen ? "open" : "closed"}>
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-semibold text-muted-foreground/60">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="min-h-[44px] text-base font-semibold leading-snug text-foreground md:min-h-[50px] md:text-lg">{q}</h3>
        </div>
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors group-hover:border-primary/40 group-hover:text-primary">
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [query, setQuery] = useState("")
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = query
    ? faqs.filter(({ q, a }) => (q + a).toLowerCase().includes(query.toLowerCase()))
    : faqs

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-[28px] font-extrabold leading-[1.05] tracking-tight text-balance px-4 md:text-[64px]">
            Preguntas{" "}
            <span className="text-primary">frecuentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4">
            Resuelvo tus dudas sobre el proceso de desarrollo
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mx-auto mb-10 flex max-w-sm items-center gap-2 rounded-full border border-border bg-background px-4 focus-within:ring-2 focus-within:ring-primary/40">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar preguntas…"
            className="h-11 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            {filtered.map((item, i) => (
              <FAQItem
                key={item.id}
                q={item.q}
                a={item.a}
                index={i + 1}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No encontré preguntas que coincidan con &ldquo;{query}&rdquo;.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
