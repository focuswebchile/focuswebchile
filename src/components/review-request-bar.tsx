"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RecaptchaScript } from "@/components/recaptcha-script"

type ReviewRequestBarProps = {
  leadText?: string
}

export function ReviewRequestBar({ leadText = "edita tu website aqui" }: ReviewRequestBarProps) {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const executeRecaptcha = (action: string) =>
    new Promise<string>((resolve, reject) => {
      const grecaptcha = window.grecaptcha
      if (!recaptchaSiteKey || !grecaptcha?.execute) {
        reject(new Error("reCAPTCHA no disponible"))
        return
      }

      grecaptcha.ready(() => {
        grecaptcha.execute(recaptchaSiteKey, { action }).then(resolve).catch(reject)
      })
    })

  const handleReviewSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

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
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-[#dbeafe] bg-white p-5 shadow-sm sm:p-6">
      <RecaptchaScript lazy />
      <form className="space-y-3" onSubmit={handleReviewSubmit}>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#3B82F6]">{leadText}</p>
        <p className="text-sm text-[#6B7280]">Pega tu URL y recibe un diagnóstico inicial con prioridades reales.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="url"
            placeholder="https://tusitio.cl"
            value={websiteUrl}
            onChange={(event) => setWebsiteUrl(event.target.value)}
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
