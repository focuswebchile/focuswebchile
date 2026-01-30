"use client"

import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const FAQ_CACHE_KEY = `focusweb_faq_content:${SITE_SLUG}`

const defaultFaqContent = [
  {
    question: "¿Cuánto cuesta una página web en Chile?",
    answer:
      "Depende del tipo de proyecto: básica ($180.000 - $600.000), corporativa ($350.000 - $1.200.000), e-commerce ($650.000 - $2.000.000+) o proyectos personalizados (desde $3.000.000). A esto se suman hosting, dominio y mantenimiento anual.",
  },
  {
    question: "¿Cómo se calcula el valor de una página web?",
    answer:
      "Se considera diseño, número de páginas, funcionalidades, integraciones, SEO y seguridad. También se puede calcular por horas de trabajo o sumando costos de dominio, hosting, diseño, desarrollo y contenido.",
  },
  {
    question: "¿Cuál es la inversión real de una web?",
    answer:
      "Incluye diseño y desarrollo, dominio, hosting, SSL, SEO y mantenimiento. Un proyecto básico puede costar $300.000 - $800.000, uno medio $800.000 - $2.500.000 y e-commerce $2.000.000 - $6.000.000.",
  },
]

type FaqItem = {
  id: string
  question: string
  answer: string
}

export function useFaqContent() {
  const [content, setContent] = useState(defaultFaqContent)

  useEffect(() => {
    const cached = window.localStorage.getItem(FAQ_CACHE_KEY)
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as typeof defaultFaqContent
        if (Array.isArray(parsed)) {
          setContent(parsed)
        }
      } catch (error) {
        // ignore cache errors
      }
    }

    const load = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/sites/${SITE_SLUG}/settings`, {
          cache: "no-store",
        })
        if (!response.ok) return
        const payload = await response.json()
        const faqs = payload?.settings?.content?.faqs
        if (Array.isArray(faqs)) {
          setContent(faqs)
          window.localStorage.setItem(FAQ_CACHE_KEY, JSON.stringify(faqs))
          return
        }
        const legacy = payload?.settings?.content?.faq
        if (!legacy) return
        const nextContent = [
          {
            question: legacy.question_1 ?? defaultFaqContent[0].question,
            answer: legacy.answer_1 ?? defaultFaqContent[0].answer,
          },
          {
            question: legacy.question_2 ?? defaultFaqContent[1].question,
            answer: legacy.answer_2 ?? defaultFaqContent[1].answer,
          },
          {
            question: legacy.question_3 ?? defaultFaqContent[2].question,
            answer: legacy.answer_3 ?? defaultFaqContent[2].answer,
          },
        ]
        setContent(nextContent)
        window.localStorage.setItem(FAQ_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }

    load()
  }, [])

  const items: FaqItem[] = content.map((faq, index) => ({
    id: `item-${index + 1}`,
    question: faq.question,
    answer: faq.answer,
  }))

  return { items }
}
