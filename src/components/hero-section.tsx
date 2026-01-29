"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { Button } from "@/components/ui/button"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"

const defaultHero = {
  title: "Presencia digital clara para emprendedores en Chile",
  subtitle:
    "Desarrollo web funcional, rápido y sin costos ocultos. Convertimos tu idea en una presencia online lista para crecer.",
}
const HERO_CACHE_KEY = `focusweb_hero_content:${SITE_SLUG}`

const meshColors = ["#22c55e", "#3b82f6", "#52a9ff", "#bff1d0", "#e6f6ff", "#c7f9d4"]

export function HeroSection() {
  const [heroContent, setHeroContent] = useState(defaultHero)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

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
        }
        const nextHero = {
          title: hero?.title ?? defaultHero.title,
          subtitle: hero?.subtitle ?? defaultHero.subtitle,
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
      className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center"
    >
      <div className="absolute inset-0">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={meshColors}
              distortion={0.8}
              swirl={0.6}
              grainMixer={0}
              grainOverlay={0}
              speed={0.42}
              offsetX={0.08}
            />
            <div className="absolute inset-0 pointer-events-none bg-white/20" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h1 className="font-bold text-white text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight lg:text-7xl mb-6">
            {heroContent.title}
          </h1>
          <p className="text-lg sm:text-xl text-white text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4">
            {heroContent.subtitle}
          </p>
          <Button size="lg" className="text-base sm:text-lg font-medium" asChild>
            <a href="#servicios" onClick={handleScrollToServices}>
              Ver servicios
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
