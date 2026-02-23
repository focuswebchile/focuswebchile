"use client"

import { useEffect, useRef, useState } from "react"

let recaptchaLoaded = false
let recaptchaLoadingPromise: Promise<void> | null = null

type RecaptchaScriptProps = {
  lazy?: boolean
  rootMargin?: string
}

export function RecaptchaScript({ lazy = false, rootMargin = "200px" }: RecaptchaScriptProps) {
  const [siteKey, setSiteKey] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(!lazy)
  const triggerRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!lazy || isInView) return

    const node = triggerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [lazy, isInView, rootMargin])

  useEffect(() => {
    if (!isInView || siteKey || recaptchaLoaded) return

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
  }, [isInView, siteKey])

  useEffect(() => {
    if (!siteKey || recaptchaLoaded) return

    if (window.grecaptcha?.execute) {
      recaptchaLoaded = true
      return
    }

    const existingScript = document.getElementById("recaptcha-script")
    if (existingScript) {
      if (!recaptchaLoadingPromise) {
        recaptchaLoadingPromise = new Promise<void>((resolve, reject) => {
          existingScript.addEventListener(
            "load",
            () => {
              recaptchaLoaded = true
              resolve()
            },
            { once: true }
          )
          existingScript.addEventListener("error", () => reject(new Error("reCAPTCHA no disponible")), { once: true })
        })
      }
      return
    }

    if (!recaptchaLoadingPromise) {
      recaptchaLoadingPromise = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script")
        script.id = "recaptcha-script"
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        script.defer = true
        script.onload = () => {
          recaptchaLoaded = true
          resolve()
        }
        script.onerror = () => {
          recaptchaLoadingPromise = null
          reject(new Error("reCAPTCHA no disponible"))
        }
        document.head.appendChild(script)
      })
    }
  }, [siteKey])

  if (!lazy) return null

  return <span ref={triggerRef} className="sr-only" aria-hidden="true" />
}
