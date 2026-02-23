"use client"

import { useState } from "react"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"

type ReviewRequestBarProps = {
  leadText?: string
}

export function ReviewRequestBar({ leadText = "edita tu website aqui" }: ReviewRequestBarProps) {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [securityMessage, setSecurityMessage] = useState<string | null>(null)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? null)

  const waitForGrecaptcha = useCallback(async () => {
    for (let attempt = 0; attempt < 40; attempt += 1) {
      if (window.grecaptcha?.execute) {
        return
      }
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
    throw new Error("reCAPTCHA no disponible")
  }, [])

  const ensureRecaptchaReady = useCallback(async () => {
    let siteKey = recaptchaSiteKey
    if (!siteKey) {
      const response = await fetch("/api/recaptcha/site-key")
      const data = await response.json()
      siteKey = data?.siteKey ?? null
      if (!siteKey) {
        throw new Error("reCAPTCHA no disponible")
      }
      setRecaptchaSiteKey(siteKey)
    }

    if (!window.grecaptcha?.execute) {
      await new Promise<void>((resolve, reject) => {
        const existingScript = document.getElementById("recaptcha-script")
        if (existingScript) {
          if (window.grecaptcha?.execute) {
            resolve()
            return
          }
          existingScript.addEventListener("load", () => resolve(), { once: true })
          existingScript.addEventListener("error", () => reject(new Error("reCAPTCHA no disponible")), { once: true })
          return
        }

        const script = document.createElement("script")
        script.id = "recaptcha-script"
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        script.defer = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error("reCAPTCHA no disponible"))
        document.head.appendChild(script)
      })
    }

    await waitForGrecaptcha()
    return siteKey
  }, [recaptchaSiteKey, waitForGrecaptcha])

  const warmupRecaptcha = useCallback(async () => {
    try {
      await ensureRecaptchaReady()
    } catch {
      // silent warmup failure; submit handles final error
    }
  }, [ensureRecaptchaReady])

  const executeRecaptcha = async (action: string) => {
    const siteKey = await ensureRecaptchaReady()
    return new Promise<string>((resolve, reject) => {
      const grecaptcha = window.grecaptcha
      if (!grecaptcha?.execute) {
        reject(new Error("reCAPTCHA no disponible"))
        return
      }

      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action }).then(resolve).catch(reject)
      })
    })
  }

  const handleReviewSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)
    setSecurityMessage(null)

    const trimmedUrl = websiteUrl.trim()
    if (!trimmedUrl) {
      setErrorMessage("Ingresa una URL para revisar.")
      return
    }

    try {
      new URL(trimmedUrl)
    } catch {
      setErrorMessage("La URL no es valida. Usa formato https://tusitio.cl")
      return
    }

    setIsSubmitting(true)
    setSecurityMessage("Validando seguridad...")
    try {
      const action = "hero_review"
      const token = await executeRecaptcha(action)
      const submitResponse = await fetch("/api/review-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ websiteUrl: trimmedUrl, token, action }),
      })
      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar la revision")
      }

      setSuccessMessage("Solicitud enviada. Te contactaremos con un diagnostico.")
      setWebsiteUrl("")
    } catch {
      setErrorMessage("No pudimos enviar la solicitud. Intenta nuevamente.")
    } finally {
      setSecurityMessage(null)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-[#dbeafe] bg-white p-5 shadow-sm sm:p-6">
      <form className="space-y-3" onSubmit={handleReviewSubmit}>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3B82F6]">{leadText}</p>
        <p className="text-sm text-[#6B7280]">Pega tu URL y recibe un diagnóstico inicial con prioridades reales.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="url"
            placeholder="https://tusitio.cl"
            value={websiteUrl}
            onChange={(event) => setWebsiteUrl(event.target.value)}
            onFocus={warmupRecaptcha}
            disabled={isSubmitting}
            className="flex-1 rounded-lg border-2 border-[#E5E7EB] bg-white px-5 py-3 text-sm text-[#1F2937] shadow-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-[#3B82F6] px-7 py-3 text-white hover:bg-[#2563eb]"
          >
            {isSubmitting ? "Revisando..." : "Revisar"}
          </Button>
        </div>
        <p className="text-xs font-medium text-[#3B82F6]">Recuerda: pega tu URL con https://</p>
        {securityMessage && <p className="text-xs text-[#3B82F6]">{securityMessage}</p>}
        {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
        {successMessage && <p className="text-xs text-emerald-700">{successMessage}</p>}
      </form>
    </div>
  )
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}
