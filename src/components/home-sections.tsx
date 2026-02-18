"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { HomeBlogSection } from "@/components/home-blog-section"
import { MainServicesSection } from "@/components/main-services-section"
import { DelayImpactSection } from "@/components/delay-impact-section"
import { NeedsSection } from "@/components/needs-section"
import { ProcessAuditCta } from "@/components/process-audit-cta"
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
      <MainServicesSection />
      <LazyOnViewport>
        <DelayImpactSection />
      </LazyOnViewport>
      <LazyOnViewport>
        <NeedsSection />
      </LazyOnViewport>
      <LazyOnViewport>
        <ProcessSection />
      </LazyOnViewport>
      <LazyOnViewport>
        <ProcessAuditCta />
      </LazyOnViewport>
      {toggles.showTestimonials && (
        <LazyOnViewport>
          <TestimonialsSection />
        </LazyOnViewport>
      )}
      {toggles.showFAQ && (
        <LazyOnViewport>
          <FAQSection />
        </LazyOnViewport>
      )}
      {toggles.showContact && (
        <LazyOnViewport>
          <ContactSection />
        </LazyOnViewport>
      )}
      <LazyOnViewport>
        <HomeBlogSection />
      </LazyOnViewport>
    </>
  )
}
