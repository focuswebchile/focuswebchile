import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import HomeSectionsLazy from "@/components/home-sections-lazy"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <HeroSection />
        <HomeSectionsLazy />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
