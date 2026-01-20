"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Building2, ShoppingCart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const SERVICES_CACHE_KEY = "focusweb_services_content"

const defaultServicesContent = {
  title: "Servicios pensados para emprender",
  subtitle: "Soluciones web claras y funcionales, diseñadas específicamente para emprendedores chilenos",
  items: {
    service_1: {
      title: "Landing Page",
      description: "Página enfocada en convertir, con formulario simple y botón de WhatsApp.",
    },
    service_2: {
      title: "Sitio Web Corporativo",
      description: "Presencia profesional completa con múltiples secciones y optimización SEO.",
    },
    service_3: {
      title: "E-commerce",
      description: "Tienda online completa con pagos y gestión de productos lista para vender.",
    },
  },
}

const services = [
  {
    key: "service_1",
    icon: Zap,
    title: defaultServicesContent.items.service_1.title,
    description: defaultServicesContent.items.service_1.description,
    features: ["Entrega en 5-7 días", "Diseño responsive", "Botón WhatsApp flotante", "Optimizada para conversión"],
    badge: "Ideal para partir",
    color: "from-accent to-orange-400",
    bgColor: "bg-accent/10",
    delay: 0.1,
  },
  {
    key: "service_2",
    icon: Building2,
    title: defaultServicesContent.items.service_2.title,
    description: defaultServicesContent.items.service_2.description,
    features: ["Hasta 7 secciones", "Base SEO incluida", "Panel de administración", "Blog integrado opcional"],
    badge: "Presencia profesional",
    color: "from-primary to-info",
    bgColor: "bg-primary/10",
    delay: 0.2,
  },
  {
    key: "service_3",
    icon: ShoppingCart,
    title: defaultServicesContent.items.service_3.title,
    description: defaultServicesContent.items.service_3.description,
    features: ["Integración Webpay/Flow", "Gestión de inventario", "Sistema de envíos", "Panel administrativo"],
    badge: "Listo para vender",
    color: "from-success to-emerald-400",
    bgColor: "bg-success/10",
    delay: 0.3,
  },
]

export function ServicesSection() {
  const [content, setContent] = useState(defaultServicesContent)
  const serviceItems = content.items ?? defaultServicesContent.items

  useEffect(() => {
    const cached = window.localStorage.getItem(SERVICES_CACHE_KEY)
    if (cached) {
      try {
        setContent((prev) => ({ ...prev, ...(JSON.parse(cached) as typeof defaultServicesContent) }))
      } catch (error) {
        // ignore cache errors
      }
    }

    const load = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/sites/${SITE_SLUG}/settings`, {
          cache: "no-store",
        })
        if (!response.ok) return
        const payload = await response.json()
        const services = payload?.settings?.content?.services
        if (!services) return
        const nextContent = {
          title: services.title ?? defaultServicesContent.title,
          subtitle:
            services.subtitle ?? services.intro ?? defaultServicesContent.subtitle,
          items: {
            service_1: {
              title: services.items?.service_1?.title ?? defaultServicesContent.items.service_1.title,
              description:
                services.items?.service_1?.description ?? defaultServicesContent.items.service_1.description,
            },
            service_2: {
              title: services.items?.service_2?.title ?? defaultServicesContent.items.service_2.title,
              description:
                services.items?.service_2?.description ?? defaultServicesContent.items.service_2.description,
            },
            service_3: {
              title: services.items?.service_3?.title ?? defaultServicesContent.items.service_3.title,
              description:
                services.items?.service_3?.description ?? defaultServicesContent.items.service_3.description,
            },
          },
        }
        setContent(nextContent)
        window.localStorage.setItem(SERVICES_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }
    load()
  }, [])

  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
              {content.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-light px-4">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const itemOverride = serviceItems?.[service.key as keyof typeof serviceItems]
            const title = itemOverride?.title ?? service.title
            const description = itemOverride?.description ?? service.description
            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              <Card className="group relative h-full overflow-hidden glass hover:shadow-2xl lg:hover:scale-[1.03] lg:hover:-translate-y-2 transition-all duration-300 border-border/50">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
                />

                <div className="p-6 sm:p-8 relative space-y-5 sm:space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                    >
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="font-medium border border-border/50 bg-secondary/80 backdrop-blur-sm text-xs sm:text-sm"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                      {description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                        />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between mt-3 sm:mt-4 hover:bg-accent/10 hover:text-accent rounded-xl font-medium text-sm sm:text-base h-11 sm:h-auto"
                    asChild
                  >
                    <a href="https://wa.me/420733796959" target="_blank" rel="noreferrer">
                      <span>Solicitar cotización</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
