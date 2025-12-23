import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
