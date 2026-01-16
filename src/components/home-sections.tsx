"use client"

import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { useSiteToggles } from "@/components/toggle-sections"

export function HomeSections() {
  const toggles = useSiteToggles()

  return (
    <>
      {toggles.showServices && <ServicesSection />}
      {toggles.showTestimonials && <TestimonialsSection />}
      {toggles.showProcess && <ProcessSection />}
      {toggles.showContact && <ContactSection />}
      {toggles.showFAQ && <FAQSection />}
    </>
  )
}
