import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { HomeSections } from "@/components/home-sections"

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye el diagnóstico inicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incluye una revisión inicial del sitio con hallazgos prioritarios y una recomendación clara de siguiente paso según impacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia el diagnóstico inicial de una auditoría completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El diagnóstico inicial entrega claridad rápida para decidir. La auditoría completa profundiza en análisis técnico detallado y roadmap extendido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo mejorar velocidad y SEO técnico al mismo tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La optimización técnica suele trabajar rendimiento, estructura y señales SEO en paralelo, priorizando primero los cambios de mayor impacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hago si mi página web tarda mucho en cargar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primero diagnosticamos bloqueadores de carga, imágenes pesadas, scripts y configuración de caché. Luego priorizamos mejoras para reducir tiempos en móvil y desktop.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con pymes y emprendimientos en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Focus Web trabaja con pymes y emprendimientos en Chile para mejorar su presencia digital y su capacidad de conversión.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <HeroSection />
        <HomeSections />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <FloatingWhatsApp />
    </>
  )
}
