import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HomeSections } from "@/components/home-sections"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <HeroSection />
        <HomeSections />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
