"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { ServicesSection } from "@/components/services-section"
import { BridgeTyping } from "@/components/bridge-typing"
import { FeatureStepsSection } from "@/components/feature-steps-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { useSiteToggles } from "@/components/toggle-sections"

function LazyOnViewport({ children }: { children: ReactNode }) {
  const [hasIntersected, setHasIntersected] = useState(false)
  const placeholderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const target = placeholderRef.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasIntersected(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px 0px" },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  if (hasIntersected) {
    return <>{children}</>
  }

  return <div ref={placeholderRef} className="min-h-[40vh]" aria-hidden="true" />
}

export function HomeSections() {
  const toggles = useSiteToggles()

  return (
    <>
      <BridgeTyping />
      {toggles.showServices && (
        <LazyOnViewport>
          <ServicesSection />
        </LazyOnViewport>
      )}
      <LazyOnViewport>
        <FeatureStepsSection />
      </LazyOnViewport>
      {toggles.showTestimonials && (
        <LazyOnViewport>
          <TestimonialsSection />
        </LazyOnViewport>
      )}
      {toggles.showProcess && (
        <LazyOnViewport>
          <ProcessSection />
        </LazyOnViewport>
      )}
      {toggles.showContact && (
        <LazyOnViewport>
          <ContactSection />
        </LazyOnViewport>
      )}
      {toggles.showFAQ && (
        <LazyOnViewport>
          <FAQSection />
        </LazyOnViewport>
      )}
    </>
  )
}
