"use client"
/* eslint-disable react-hooks/set-state-in-effect */

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Building2, ShoppingCart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const SERVICES_CACHE_KEY = `focusweb_services_content:${SITE_SLUG}`

const defaultServicesContent = {
  title: "Servicios pensados para emprender",
  subtitle: "Soluciones web claras y funcionales, diseñadas específicamente para emprendedores chilenos",
  items: [
    {
      title: "Landing Page",
      description: "Página enfocada en convertir, con formulario simple y botón de WhatsApp.",
    },
    {
      title: "Sitio Web Corporativo",
      description: "Presencia profesional completa con múltiples secciones y optimización SEO.",
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con pagos y gestión de productos lista para vender.",
    },
  ],
}

const serviceConfigs = [
  {
    key: "service-1",
    icon: Zap,
    features: ["Entrega en 5-7 días", "Diseño responsive", "Botón WhatsApp flotante", "Optimizada para conversión"],
    badge: "Ideal para partir",
    color: "from-accent to-orange-400",
    bgColor: "bg-accent/10",
    delay: 0.1,
    cta: {
      label: "Ver landing page",
      href: "/landing-page",
      external: false,
    },
  },
  {
    key: "service-2",
    icon: Building2,
    features: ["Hasta 7 secciones", "Base SEO incluida", "Panel de administración", "Blog integrado opcional"],
    badge: "Presencia profesional",
    color: "from-primary to-info",
    bgColor: "bg-primary/10",
    delay: 0.2,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/420733796959",
      external: true,
    },
  },
  {
    key: "service-3",
    icon: ShoppingCart,
    features: ["Integración Webpay/Flow", "Gestión de inventario", "Sistema de envíos", "Panel administrativo"],
    badge: "Listo para vender",
    color: "from-success to-emerald-400",
    bgColor: "bg-success/10",
    delay: 0.3,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/420733796959",
      external: true,
    },
  },
]

export function ServicesSection() {
  const [content, setContent] = useState(defaultServicesContent)
  const serviceItems = content.items ?? defaultServicesContent.items
  const fallbackItems = defaultServicesContent.items
  const servicesData = serviceItems.map((item, index) => {
    const config = serviceConfigs[index % serviceConfigs.length]
    const fallbackItem = fallbackItems[index] ?? fallbackItems[index % fallbackItems.length]
    return {
      ...config,
      key: `${config.key}-${index}`,
      title: item?.title ?? fallbackItem?.title ?? "Servicio",
      description: item?.description ?? fallbackItem?.description ?? "",
    }
  })

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
        const items = Array.isArray(services)
          ? services
          : Array.isArray(services.items)
          ? services.items
          : services.items
          ? [services.items.service_1, services.items.service_2, services.items.service_3].filter(Boolean)
          : defaultServicesContent.items
        const nextContent = {
          title: (Array.isArray(services) ? defaultServicesContent.title : services.title) ?? defaultServicesContent.title,
          subtitle:
            (Array.isArray(services) ? defaultServicesContent.subtitle : services.subtitle ?? services.intro) ??
            defaultServicesContent.subtitle,
          items,
        }
        setContent(nextContent)
        window.localStorage.setItem(SERVICES_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }
    load()
  }, [])

  const renderCards = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {servicesData.map((service) => (
        <motion.div
          key={service.key}
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

              <div className="space-y-2.5 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

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
                <a
                  href={service.cta.href}
                  {...(service.cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span>{service.cta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )

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

        {renderCards()}
      </div>
    </section>
  )
}
