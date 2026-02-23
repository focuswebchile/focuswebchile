"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = "G-33SDJFM25D"
const AHREFS_KEY = "s+O8F/fzRT/Wxo/VzK5fjQ"

function injectScript(id: string, src: string, attrs: Record<string, string> = {}) {
  if (document.getElementById(id)) return
  const script = document.createElement("script")
  script.id = id
  script.src = src
  script.async = true
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value)
  })
  document.head.appendChild(script)
}

export function DeferredAnalytics() {
  const hasLoaded = useRef(false)

  useEffect(() => {
    const loadAnalytics = () => {
      if (hasLoaded.current) return
      hasLoaded.current = true

      injectScript("ga4-src", `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args)
      }
      window.gtag("js", new Date())
      window.gtag("config", GA_ID)

      injectScript("ahrefs-src", "https://analytics.ahrefs.com/analytics.js", {
        "data-key": AHREFS_KEY,
      })

      window.removeEventListener("pointerdown", loadAnalytics)
      window.removeEventListener("keydown", loadAnalytics)
      window.removeEventListener("scroll", loadAnalytics)
      window.removeEventListener("touchstart", loadAnalytics)
    }

    const timeout = window.setTimeout(loadAnalytics, 4500)

    window.addEventListener("pointerdown", loadAnalytics, { once: true, passive: true })
    window.addEventListener("keydown", loadAnalytics, { once: true })
    window.addEventListener("scroll", loadAnalytics, { once: true, passive: true })
    window.addEventListener("touchstart", loadAnalytics, { once: true, passive: true })

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("pointerdown", loadAnalytics)
      window.removeEventListener("keydown", loadAnalytics)
      window.removeEventListener("scroll", loadAnalytics)
      window.removeEventListener("touchstart", loadAnalytics)
    }
  }, [])

  return null
}
