"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { useFaqContent } from "@/components/faq/use-faq-content"

export default function FAQsComponent() {
  const { items } = useFaqContent()

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
              <Link href="/contacto" className="text-primary font-medium hover:underline">
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
              {items.map((item) => (
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
            <Link href="/contacto" className="text-primary font-medium hover:underline">
              Contáctanos
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
