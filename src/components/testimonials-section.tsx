"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Álvaro Careño",
    role: "Fundador de Tiny Van · Chile",
    project: "Diseño Web · SEO · Campaña",
    content:
      "En solo 2 semanas tenía mi tienda online funcionando. El tráfico superó mis expectativas y el diseño quedó buenísimo. Feliz de seguir trabajando con Felipe.",
    rating: 5,
    avatar: "/alvaro.webp",
  },
  {
    name: "Verki Bambas",
    role: "Fundadora de Stay Loco · Rep. Checa",
    project: "Optimización Web · Hero · SEO",
    content:
      "Felipe hizo exactamente lo que le pedí. El proyecto fue rápido, claro y bien ejecutado. La nueva estructura, el hero y el SEO marcaron una diferencia real.",
    rating: 5,
    avatar: "/verki.webp",
  },
  {
    name: "James Fraser",
    role: "Director de Marketing · Crest Painting Canada",
    project: "SEO · Creación de contenido",
    content:
      "FocusWeb.cl optimizó nuestro SEO y creó contenido claro para la empresa. El trabajo fue preciso y los resultados se notaron rápido. Muy conformes con el proceso.",
    rating: 5,
    avatar: "/james.webp",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id="testimonios"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30 relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="hidden sm:block absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        className="hidden sm:block absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Emprendedores que confiaron en nosotros para su presencia digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-5 sm:p-6 glass hover:shadow-xl transition-all duration-300 border-border/50">
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Stars */}
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed text-pretty">
                    {`“${testimonial.content}”`}
                  </p>

                  <div className="pt-3 sm:pt-4 border-t border-border/50 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="pl-2 border-l-2 border-primary/50">
                      <p className="text-xs sm:text-sm text-muted-foreground">Proyecto:</p>
                      <p className="font-bold text-sm sm:text-base text-primary">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
