"use client"

import { useEffect, useState } from "react"
import FormOne from "@/components/ui/form-1"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const CONTACT_CACHE_KEY = "focusweb_contact_content"

const defaultContactContent = {
  title: "Comienza tu proyecto hoy",
  subtitle: "Cuéntanos sobre tu negocio y te contactaremos en menos de 24 horas",
  link: "",
}

export function ContactSection() {
  const [content, setContent] = useState(defaultContactContent)

  useEffect(() => {
    const cached = window.localStorage.getItem(CONTACT_CACHE_KEY)
    if (cached) {
      try {
        setContent((prev) => ({ ...prev, ...(JSON.parse(cached) as typeof defaultContactContent) }))
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
        const contact = payload?.settings?.content?.contact
        if (!contact) return
        const nextContent = {
          title: contact.title ?? defaultContactContent.title,
          subtitle: contact.subtitle ?? defaultContactContent.subtitle,
          link: contact.link ?? defaultContactContent.link,
        }
        setContent(nextContent)
        window.localStorage.setItem(CONTACT_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }
    load()
  }, [])

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <FormOne
          badge="Contacto"
          title={content.title}
          subtitle={content.subtitle}
          showEmailLine={false}
          showServiceSelect
        />
      </div>
    </section>
  )
}
