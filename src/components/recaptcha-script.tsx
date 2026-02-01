"use client"

import { useEffect, useState } from "react"

let recaptchaLoaded = false

export function RecaptchaScript() {
  const [siteKey, setSiteKey] = useState<string | null>(null)

  useEffect(() => {
    if (siteKey || recaptchaLoaded) return

    const fetchKey = async () => {
      try {
        const response = await fetch("/api/recaptcha/site-key")
        const data = await response.json()
        if (data?.siteKey) {
          setSiteKey(data.siteKey)
        }
      } catch {
        // silently fail
      }
    }

    fetchKey()
  }, [siteKey])

  useEffect(() => {
    if (!siteKey || recaptchaLoaded) return

    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      recaptchaLoaded = true
    }
    document.head.appendChild(script)
  }, [siteKey])

  return null
}
