"use client"

import { ServicesSection } from "@/components/services-section"
import { BridgeTyping } from "@/components/bridge-typing"
import { FeatureStepsSection } from "@/components/feature-steps-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { useSiteToggles } from "@/components/toggle-sections"

export function HomeSections() {
  const toggles = useSiteToggles()

  return (
    <>
      <BridgeTyping />
      {toggles.showServices && <ServicesSection />}
      <FeatureStepsSection />
      {toggles.showTestimonials && <TestimonialsSection />}
      {toggles.showProcess && <ProcessSection />}
      {toggles.showContact && <ContactSection />}
      {toggles.showFAQ && <FAQSection />}
    </>
  )
}
