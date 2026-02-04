"use client"
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG ?? "site-001"
const TOGGLES_CACHE_KEY = `focusweb_section_toggles:${SITE_SLUG}`

export type SectionToggles = {
  showServices: boolean
  showTestimonials: boolean
  showProcess: boolean
  showFAQ: boolean
  showContact: boolean
}

const defaultToggles: SectionToggles = {
  showServices: true,
  showTestimonials: true,
  showProcess: true,
  showFAQ: true,
  showContact: true,
}

export function useSiteToggles() {
  const [toggles, setToggles] = useState<SectionToggles>(defaultToggles)

  useEffect(() => {
    const cached = window.localStorage.getItem(TOGGLES_CACHE_KEY)
    if (cached) {
      try {
        setToggles((prev) => ({ ...prev, ...(JSON.parse(cached) as SectionToggles) }))
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
        const nextToggles = {
          ...defaultToggles,
          ...(payload?.settings?.toggles ?? {}),
        }
        setToggles(nextToggles)
        window.localStorage.setItem(TOGGLES_CACHE_KEY, JSON.stringify(nextToggles))
      } catch (error) {
        // keep cached toggles
      }
    }
    load()
  }, [])

  return toggles
}
