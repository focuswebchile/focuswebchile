"use client"

import { useEffect } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const THEME_CACHE_KEY = `focusweb_theme_settings:${SITE_SLUG}`

type ThemeSettings = {
  colors?: {
    primary?: string
    secondary?: string
    background?: string
    text?: string
  }
  typography?: {
    fontFamily?: string
    baseSize?: string
    lineHeight?: string
  }
}

const applyTheme = (settings: ThemeSettings) => {
  if (typeof document === "undefined") return
  const root = document.documentElement
  const colors = settings.colors
  const typography = settings.typography

  if (colors?.background) root.style.setProperty("--background", colors.background)
  if (colors?.text) root.style.setProperty("--foreground", colors.text)
  if (colors?.primary) {
    root.style.setProperty("--primary", colors.primary)
    root.style.setProperty("--success", colors.primary)
    root.style.setProperty("--ring", colors.primary)
  }
  if (colors?.secondary) {
    root.style.setProperty("--accent", colors.secondary)
    root.style.setProperty("--info", colors.secondary)
  }

  if (typography?.fontFamily) {
    const fontKey = typography.fontFamily.toLowerCase()
    const allowed = ["poppins", "inter", "nunito"]
    const normalized = allowed.includes(fontKey) ? fontKey : "poppins"
    document.documentElement.setAttribute("data-font", normalized)
    document.body.setAttribute("data-font", normalized)
  }
  if (typography?.baseSize) root.style.setProperty("font-size", typography.baseSize)
  if (typography?.lineHeight) root.style.setProperty("line-height", typography.lineHeight)
}

export function ThemeSync() {
  useEffect(() => {
    const cached = window.localStorage.getItem(THEME_CACHE_KEY)
    if (cached) {
      try {
        applyTheme(JSON.parse(cached))
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
        const themeSettings: ThemeSettings = {
          colors: payload?.settings?.colors,
          typography: payload?.settings?.typography,
        }
        applyTheme(themeSettings)
        window.localStorage.setItem(THEME_CACHE_KEY, JSON.stringify(themeSettings))
      } catch (error) {
        // keep cached theme on failure
      }
    }
    load()
  }, [])

  return null
}
