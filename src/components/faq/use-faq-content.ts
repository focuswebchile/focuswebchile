"use client"

import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const FAQ_CACHE_KEY = "focusweb_faq_content"

const defaultFaqContent = {
  question_1: "¿Cuánto cuesta una página web en Chile?",
  answer_1:
    "Depende del tipo de proyecto: básica ($180.000 - $600.000), corporativa ($350.000 - $1.200.000), e-commerce ($650.000 - $2.000.000+) o proyectos personalizados (desde $3.000.000). A esto se suman hosting, dominio y mantenimiento anual.",
  question_2: "¿Cómo se calcula el valor de una página web?",
  answer_2:
    "Se considera diseño, número de páginas, funcionalidades, integraciones, SEO y seguridad. También se puede calcular por horas de trabajo o sumando costos de dominio, hosting, diseño, desarrollo y contenido.",
  question_3: "¿Cuál es la inversión real de una web?",
  answer_3:
    "Incluye diseño y desarrollo, dominio, hosting, SSL, SEO y mantenimiento. Un proyecto básico puede costar $300.000 - $800.000, uno medio $800.000 - $2.500.000 y e-commerce $2.000.000 - $6.000.000.",
}

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
        setContent((prev) => ({ ...prev, ...(JSON.parse(cached) as typeof defaultFaqContent) }))
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
        const faq = payload?.settings?.content?.faq
        if (!faq) return
        const nextContent = {
          question_1: faq.question_1 ?? defaultFaqContent.question_1,
          answer_1: faq.answer_1 ?? defaultFaqContent.answer_1,
          question_2: faq.question_2 ?? defaultFaqContent.question_2,
          answer_2: faq.answer_2 ?? defaultFaqContent.answer_2,
          question_3: faq.question_3 ?? defaultFaqContent.question_3,
          answer_3: faq.answer_3 ?? defaultFaqContent.answer_3,
        }
        setContent(nextContent)
        window.localStorage.setItem(FAQ_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }

    load()
  }, [])

  const items: FaqItem[] = [
    {
      id: "item-1",
      question: content.question_1,
      answer: content.answer_1,
    },
    {
      id: "item-2",
      question: content.question_2,
      answer: content.answer_2,
    },
    {
      id: "item-3",
      question: content.question_3,
      answer: content.answer_3,
    },
  ]

  return { items }
}
