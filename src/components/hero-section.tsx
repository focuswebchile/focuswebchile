"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"

const defaultHero = {
  title: "Presencia digital clara para emprendedores en Chile",
  subtitle:
    "Desarrollo web funcional, rápido y sin costos ocultos. Convertimos tu idea en una presencia online lista para crecer.",
  ctaText: "Comenzar ahora",
  ctaUrl: "https://wa.me/420733796959",
}
const HERO_CACHE_KEY = "focusweb_hero_content"

export function HeroSection() {
  const [heroContent, setHeroContent] = useState(defaultHero)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cached = window.localStorage.getItem(HERO_CACHE_KEY)
      if (cached) {
        try {
          const parsed = JSON.parse(cached) as typeof defaultHero
          setHeroContent((prev) => ({ ...prev, ...parsed }))
        } catch (error) {
          // Ignore cache parsing errors.
        }
      }
    }

    const load = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/sites/${SITE_SLUG}/settings`, {
          cache: "no-store",
        })
        if (!response.ok) return
        const payload = await response.json()
        const content = payload?.settings?.content
        if (!content) return
        const hero = content.hero ?? {
          title: content.hero_title,
          subtitle: content.hero_subtitle,
          cta: {
            primary_text: content.primary_cta_text,
            primary_url: content.primary_cta_url,
          },
        }
        const nextHero = {
          title: hero?.title ?? defaultHero.title,
          subtitle: hero?.subtitle ?? defaultHero.subtitle,
          ctaText: hero?.cta?.primary_text ?? defaultHero.ctaText,
          ctaUrl: hero?.cta?.primary_url ?? defaultHero.ctaUrl,
        }
        setHeroContent(nextHero)
        if (typeof window !== "undefined") {
          window.localStorage.setItem(HERO_CACHE_KEY, JSON.stringify(nextHero))
        }
      } catch (error) {
        // Keep default content on failure.
      }
    }
    load()
  }, [])

  const handleScrollToServices = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.querySelector("#servicios")
    if (section) {
      const offset = 80
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-info/12 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-accent/10 to-info/10 border border-accent/30 text-sm sm:text-base"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">Desarrollo web en Chile</span>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                  {heroContent.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-light">
                {heroContent.subtitle}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-base sm:text-lg group shadow-lg shadow-accent/30 font-medium h-12 sm:h-auto"
                asChild
              >
                <a href={heroContent.ctaUrl} target="_blank" rel="noreferrer">
                  {heroContent.ctaText}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg border-2 bg-background/50 backdrop-blur-sm hover:bg-muted font-medium h-12 sm:h-auto"
                asChild
              >
                <a href="#servicios" onClick={handleScrollToServices}>
                  Ver servicios
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[
                  { src: "/emprendedor_head1.webp", alt: "Cliente FocusWeb 1" },
                  { src: "/emprendedor_head2.webp", alt: "Cliente FocusWeb 2" },
                  { src: "/emprendedor_head3.webp", alt: "Cliente FocusWeb 3" },
                  { src: "/emprendedor_head4.webp", alt: "Cliente FocusWeb 4" },
                ].map((avatar) => (
                  <div
                    key={avatar.src}
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background shadow-md overflow-hidden"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-foreground">+20 emprendedores</p>
                <p className="text-muted-foreground">confían en nosotros</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-border/50"
              >
                <div className="bg-card p-2 sm:p-3">
                  <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-success" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-info" />
                  </div>
                  <div className="bg-gradient-to-br from-muted via-secondary to-background rounded-xl sm:rounded-2xl aspect-[16/10] flex items-center justify-center border border-border/30">
                    <Image
                      src="/desktop.webp"
                      alt="Landing FocusWeb Chile mostrando propuesta digital"
                      width={1600}
                      height={1000}
                      priority
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Mobile mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-4 lg:-right-8 w-24 sm:w-32 md:w-40 z-20"
              >
                <div className="bg-card rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl border-2 border-border/50">
                  <div className="bg-gradient-to-br from-muted to-secondary rounded-xl sm:rounded-2xl aspect-[9/16] overflow-hidden border border-border/30">
                    <Image
                      src="/mobil.webp"
                      alt="Vista móvil FocusWeb Chile"
                      width={900}
                      height={1600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-info/25 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
