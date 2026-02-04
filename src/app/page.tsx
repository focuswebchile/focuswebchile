import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import dynamic from "next/dynamic"

const HomeSections = dynamic(() => import("@/components/home-sections"), {
  ssr: false,
  loading: () => <div className="min-h-[40vh]" aria-hidden="true" />,
})

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
