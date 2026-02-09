"use client"

import Link from "next/link"
import { useSiteToggles } from "@/components/toggle-sections"
import FaqHero from "@/components/faq/faq-hero"
import FAQsComponent from "@/components/ui/faqs-component"

export default function FaqContent() {
  const toggles = useSiteToggles()

  if (!toggles.showFAQ) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Sección no disponible por el momento
          </h1>
          <p className="text-muted-foreground mt-3">
            Si necesitas ayuda o información adicional, contáctanos y te responderemos a la brevedad.
          </p>
          <Link href="/contacto" className="inline-flex mt-6 text-primary font-medium hover:underline">
            Ir a contacto
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <FaqHero />
      <FAQsComponent />
    </>
  )
}
