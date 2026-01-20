"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useFaqContent } from "@/components/faq/use-faq-content"

export function FAQSection() {
  const { items } = useFaqContent()

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
            {items.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
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
