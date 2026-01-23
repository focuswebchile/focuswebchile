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
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-6">
          <div className="relative flex justify-center lg:justify-start lg:order-1">
            <div className="absolute -top-10 left-6 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-10 right-6 h-40 w-40 rounded-full bg-info/10 blur-3xl" />
            <div className="relative w-full max-w-xl p-2 sm:p-4">
              <img
                src="/email2.svg"
                alt="Ilustración de contacto FocusWeb"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex justify-center lg:justify-center lg:order-2 lg:-translate-x-6">
            <div className="w-full max-w-md">
              <FormOne
                badge="Contacto"
                title={content.title}
                subtitle={content.subtitle}
                showEmailLine={false}
                showServiceSelect
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
