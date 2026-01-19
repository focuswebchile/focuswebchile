"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const CONTACT_CACHE_KEY = "focusweb_contact_content"

const defaultContactContent = {
  title: "Comienza tu proyecto hoy",
  subtitle: "Cuéntanos sobre tu negocio y te contactaremos en menos de 24 horas",
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
  })
  const [content, setContent] = useState(defaultContactContent)

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const cached = window.localStorage.getItem(CONTACT_CACHE_KEY)
    if (cached) {
      try {
        setContent((prev) => ({ ...prev, ...(JSON.parse(cached) as typeof defaultContactContent) }))
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
        const contact = payload?.settings?.content?.contact
        if (!contact) return
        const nextContent = {
          title: contact.title ?? defaultContactContent.title,
          subtitle: contact.subtitle ?? defaultContactContent.subtitle,
        }
        setContent(nextContent)
        window.localStorage.setItem(CONTACT_CACHE_KEY, JSON.stringify(nextContent))
      } catch (error) {
        // keep cached content on failure
      }
    }
    load()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola! Soy ${formData.name}. Estoy interesado en ${formData.service}. Mi WhatsApp: ${formData.whatsapp}`
    const whatsappURL = `https://wa.me/420733796959?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      ref={ref}
      id="contacto"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30 relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="hidden sm:block absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {content.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-6 sm:p-8 lg:p-10 glass border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 sm:h-12 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm sm:text-base">
                  WhatsApp
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="h-11 sm:h-12 pl-10 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm sm:text-base">
                  Servicio de interés
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="h-11 sm:h-12 text-sm sm:text-base">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="corporativo">Sitio Web Corporativo</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="otro">Otro / No estoy seguro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full group h-12 sm:h-auto text-sm sm:text-base">
                <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar mensaje por WhatsApp
              </Button>

              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Te responderemos en menos de 24 horas
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
