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

function LazyOnMobile({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(true)
  const [hasIntersected, setHasIntersected] = useState(false)
  const placeholderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(min-width: 1024px)")
    const update = () => setIsDesktop(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (isDesktop) return
    const target = placeholderRef.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasIntersected(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [isDesktop])

  if (isDesktop || hasIntersected) {
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
        <LazyOnMobile>
          <ServicesSection />
        </LazyOnMobile>
      )}
      <LazyOnMobile>
        <FeatureStepsSection />
      </LazyOnMobile>
      {toggles.showTestimonials && (
        <LazyOnMobile>
          <TestimonialsSection />
        </LazyOnMobile>
      )}
      {toggles.showProcess && (
        <LazyOnMobile>
          <ProcessSection />
        </LazyOnMobile>
      )}
      {toggles.showContact && (
        <LazyOnMobile>
          <ContactSection />
        </LazyOnMobile>
      )}
      {toggles.showFAQ && (
        <LazyOnMobile>
          <FAQSection />
        </LazyOnMobile>
      )}
    </>
  )
}
