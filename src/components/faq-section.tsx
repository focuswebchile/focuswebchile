"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
    answer:
      "Una landing page toma 5-7 días hábiles, un sitio corporativo 2-3 semanas, y un e-commerce 3-4 semanas. Los plazos pueden variar según la complejidad y disponibilidad de contenido.",
  },
  {
    question: "¿Puedo hacer modificaciones después del lanzamiento?",
    answer:
      "Sí, incluimos 2 rondas de modificaciones sin costo durante el desarrollo. Después del lanzamiento, ofrecemos soporte y puedes contratar modificaciones adicionales según necesites.",
  },
  {
    question: "¿Cuánto cuesta el dominio y hosting?",
    answer:
      "Un dominio cuesta aprox. desde $9.990 CLP al año (.cl) y el hosting básico desde $1.500 CLP al mes. Algunos proveedores incluyen el dominio gratis el primer año.",
  },
  {
    question: "¿Qué pasa si no tengo contenido o fotos?",
    answer:
      "No te preocupes. Te guiamos en la creación del contenido y podemos usar bancos de imágenes profesionales. También podemos recomendarte fotógrafos si necesitas material personalizado.",
  },
  {
    question: "¿El sitio será optimizado para móviles?",
    answer:
      "Absolutamente. Todos nuestros sitios son responsive y mobile-first. El 70% del tráfico en Chile viene desde móviles, por lo que priorizamos la experiencia móvil.",
  },
  {
    question: "¿Incluyen posicionamiento SEO?",
    answer:
      "Sí, incluimos SEO básico on-page: meta tags, optimización de velocidad, estructura correcta, y sitemap. Para SEO avanzado con contenido y estrategia, ofrecemos paquetes adicionales.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Resolvemos tus dudas sobre el proceso de desarrollo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-border/50 rounded-xl px-4 sm:px-6 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-sm sm:text-base">
                  <span className="font-semibold pr-3 sm:pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
