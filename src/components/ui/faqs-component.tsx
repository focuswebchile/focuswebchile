"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqItems = [
  {
    id: "item-1",
    question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
    answer:
      "Una landing page toma 5-7 días hábiles, un sitio corporativo 2-3 semanas, y un e-commerce 3-4 semanas. Los plazos pueden variar según la complejidad y disponibilidad de contenido.",
  },
  {
    id: "item-2",
    question: "¿Puedo hacer modificaciones después del lanzamiento?",
    answer:
      "Sí, incluimos 2 rondas de modificaciones sin costo durante el desarrollo. Después del lanzamiento, ofrecemos soporte y puedes contratar modificaciones adicionales según necesites.",
  },
  {
    id: "item-3",
    question: "¿Cuánto cuesta el dominio y hosting?",
    answer:
      "Un dominio cuesta aprox. desde $9.990 CLP al año (.cl) y el hosting básico desde $1.500 CLP al mes. Algunos proveedores incluyen el dominio gratis el primer año.",
  },
  {
    id: "item-4",
    question: "¿Qué pasa si no tengo contenido o fotos?",
    answer:
      "No te preocupes. Te guiamos en la creación del contenido y podemos usar bancos de imágenes profesionales. También podemos recomendarte fotógrafos si necesitas material personalizado.",
  },
  {
    id: "item-5",
    question: "¿El sitio será optimizado para móviles?",
    answer:
      "Absolutamente. Todos nuestros sitios son responsive y mobile-first. El 70% del tráfico en Chile viene desde móviles, por lo que priorizamos la experiencia móvil.",
  },
  {
    id: "item-6",
    question: "¿Incluyen posicionamiento SEO?",
    answer:
      "Sí, incluimos SEO básico on-page: meta tags, optimización de velocidad, estructura correcta y sitemap. Para SEO avanzado con contenido y estrategia, ofrecemos paquetes adicionales.",
  },
  {
    id: "item-7",
    question: "¿Cuánto cuesta una página web en Chile?",
    answer:
      "Depende del tipo de proyecto: básica ($180.000 - $600.000), corporativa ($350.000 - $1.200.000), e-commerce ($650.000 - $2.000.000+) o proyectos personalizados (desde $3.000.000). A esto se suman hosting, dominio y mantenimiento anual.",
  },
  {
    id: "item-8",
    question: "¿Cómo se calcula el valor de una página web?",
    answer:
      "Se considera diseño, número de páginas, funcionalidades, integraciones, SEO y seguridad. También se puede calcular por horas de trabajo o sumando costos de dominio, hosting, diseño, desarrollo y contenido.",
  },
  {
    id: "item-9",
    question: "¿Cuál es la inversión real de una web?",
    answer:
      "Incluye diseño y desarrollo, dominio, hosting, SSL, SEO y mantenimiento. Un proyecto básico puede costar $300.000 - $800.000, uno medio $800.000 - $2.500.000 y e-commerce $2.000.000 - $6.000.000.",
  },
  {
    id: "item-10",
    question: "¿Qué costos recurrentes debo considerar?",
    answer:
      "Hosting, dominio, SSL, mantenimiento y marketing digital. Dependiendo del proyecto, pueden sumar entre $50.000 y $12.000.000 anuales.",
  },
]

export default function FAQsComponent() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2 md:self-center">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-semibold">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-base sm:text-lg">
              Resolvemos las dudas más comunes sobre nuestros servicios, tiempos y proceso de trabajo.
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block text-sm sm:text-base">
              ¿Tienes otra duda?{" "}
              <Link href="/contacto/" className="text-primary font-medium hover:underline">
                Contáctanos
              </Link>
              .
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible
              className="bg-card ring-foreground/5 rounded-xl w-full border border-transparent px-6 sm:px-8 py-3 shadow ring-1"
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-dotted">
                  <AccordionTrigger className="cursor-pointer text-sm sm:text-base hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden text-sm sm:text-base">
            ¿Tienes otra duda?{" "}
            <Link href="/contacto/" className="text-primary font-medium hover:underline">
              Contáctanos
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
