"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useSiteToggles } from "@/components/toggle-sections"

const MainServicesSection = dynamic(
  () => import("@/components/main-services-section").then((mod) => mod.MainServicesSection),
)
const HomeSocialProofSection = dynamic(
  () => import("@/components/home-social-proof-section").then((mod) => mod.HomeSocialProofSection),
)
const DelayImpactSection = dynamic(
  () => import("@/components/delay-impact-section").then((mod) => mod.DelayImpactSection),
)
const NeedsSection = dynamic(
  () => import("@/components/needs-section").then((mod) => mod.NeedsSection),
)
const ProcessSection = dynamic(
  () => import("@/components/process-section").then((mod) => mod.ProcessSection),
)
const ProcessAuditCta = dynamic(
  () => import("@/components/process-audit-cta").then((mod) => mod.ProcessAuditCta),
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
)
const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => mod.FAQSection),
)
const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => mod.ContactSection),
)
const HomeBlogSection = dynamic(
  () => import("@/components/home-blog-section").then((mod) => mod.HomeBlogSection),
)

export function DeferredHomeSections() {
  const toggles = useSiteToggles()
  const [start, setStart] = useState(false)
  const [stage2, setStage2] = useState(false)
  const [stage3, setStage3] = useState(false)

  useEffect(() => {
    let timeout1: number | undefined
    let timeout2: number | undefined

    const runStart = () => {
      setStart(true)
      timeout1 = window.setTimeout(() => setStage2(true), 250)
      timeout2 = window.setTimeout(() => setStage3(true), 650)
      window.removeEventListener("pointerdown", runStart)
      window.removeEventListener("touchstart", runStart)
      window.removeEventListener("keydown", runStart)
      window.removeEventListener("scroll", runStart)
    }

    const hasIdleCallback =
      typeof (window as Window & { requestIdleCallback?: unknown }).requestIdleCallback === "function"

    if (hasIdleCallback) {
      ;(window as Window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number })
        .requestIdleCallback?.(runStart, { timeout: 1600 })
    } else {
      timeout1 = window.setTimeout(runStart, 900)
    }

    window.addEventListener("pointerdown", runStart, { once: true, passive: true })
    window.addEventListener("touchstart", runStart, { once: true, passive: true })
    window.addEventListener("keydown", runStart, { once: true })
    window.addEventListener("scroll", runStart, { once: true, passive: true })

    return () => {
      if (timeout1) window.clearTimeout(timeout1)
      if (timeout2) window.clearTimeout(timeout2)
      window.removeEventListener("pointerdown", runStart)
      window.removeEventListener("touchstart", runStart)
      window.removeEventListener("keydown", runStart)
      window.removeEventListener("scroll", runStart)
    }
  }, [])

  if (!start) return null

  return (
    <>
      <MainServicesSection />
      <HomeSocialProofSection />

      {stage2 ? (
        <>
          <DelayImpactSection />
          <NeedsSection />
          <ProcessSection />
          <ProcessAuditCta />
        </>
      ) : null}

      {stage3 ? (
        <>
          {toggles.showTestimonials ? <TestimonialsSection /> : null}
          {toggles.showFAQ ? <FAQSection /> : null}
          {toggles.showContact ? <ContactSection /> : null}
          <HomeBlogSection />
        </>
      ) : null}
    </>
  )
}
