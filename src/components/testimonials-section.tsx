"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Star } from "lucide-react"
import { useSiteToggles } from "@/components/toggle-sections"

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
    project: "Reestructuración Técnica · Hero · SEO Internacional",
    content:
      "Coordinamos todo desde Europa y fue impecable. Felipe reestructuró la arquitectura técnica, reordenó el SEO y rediseñó el hero. El resultado fue inmediato: mejor rendimiento, mejor posicionamiento y una base sólida para crecer internacionalmente.",
    rating: 5,
    avatar: "/verki.webp",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const toggles = useSiteToggles()
  if (!toggles.showTestimonials) return null

  return (
    <section id="testimonios" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Clientes
          </p>
          <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            Lo que dicen mis clientes
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <Card className="h-full border-border bg-card p-5 transition-shadow duration-300 hover:shadow-lg sm:p-6">
                <div className="space-y-4">
                  <Stars count={t.rating} />
                  <p className="text-sm leading-relaxed text-foreground/85 text-pretty sm:text-base">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <Image src={t.avatar} alt={t.name} width={88} height={88} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center rounded-md border border-primary/20 bg-primary/10 px-3 py-1">
                      <span className="text-xs font-semibold text-primary">{t.project}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
