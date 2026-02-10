"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(null)

  const ensureRecaptchaReady = async () => {
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

    return siteKey
  }

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
    <section
      id="hero"
      className="relative w-full bg-[#F9FAFB] pb-10 overflow-visible md:min-h-[calc(100vh-80px)] md:pb-0"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:items-stretch md:min-h-[calc(100vh-80px)] xl:grid-cols-2 xl:gap-24">
          <div className="relative z-20 space-y-6 pt-24 md:h-full md:pt-0 md:flex md:flex-col md:justify-center md:max-w-[680px] xl:pr-24 xl:max-w-[640px] lg:pr-32">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              <p>Optimización web con criterio e impacto real.</p>
              <p>Priorizamos lo que importa.</p>
            </div>

            <h1 className="max-w-[720px] text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="whitespace-nowrap">Optimización</span>
              <br />
              Web en Chile
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Mejoramos rendimiento y SEO técnico para que tu sitio cargue rápido, se entienda mejor
              en Google y convierta. Analizamos, priorizamos y ejecutamos con criterio.
            </p>

            <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF] sm:text-xs sm:tracking-[0.18em]">
              Rendimiento · SEO técnico · Core Web Vitals · Velocidad
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-lg bg-[#22C55E] px-8 py-4 text-white hover:bg-[#1ea34d]" asChild>
                <a href="https://wa.me/420733796959" target="_blank" rel="noopener noreferrer">
                  Conversar por WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-2 border-[#3B82F6] px-8 py-4 text-[#3B82F6] hover:bg-[#EFF6FF]"
                asChild
              >
                <a href="/metodologia">Ver metodología</a>
              </Button>
            </div>

            <form className="space-y-3 pt-4" onSubmit={handleReviewSubmit}>
              <p className="text-sm text-[#6B7280]">
                Pega tu URL y recibe un diagnóstico claro con prioridades reales.
              </p>
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
              <p className="text-xs font-medium text-[#3B82F6]">
                Recuerda: pega tu URL con https://
              </p>
              {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
              {successMessage && <p className="text-xs text-emerald-700">{successMessage}</p>}
            </form>
          </div>

          <div className="relative hidden h-[360px] w-full items-end justify-end overflow-visible sm:h-[420px] md:h-full xl:flex">
            <div className="relative z-10 h-full w-full max-w-none md:absolute md:bottom-0 md:right-0 md:h-[760px] md:w-[860px] md:translate-x-[clamp(120px,10vw,260px)] lg:h-[820px] lg:w-[980px] xl:h-[880px] xl:w-[1040px]">
              <Image
                src="/svghero.svg"
                alt="Ilustración de optimización web"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48 bg-gradient-to-t from-[#22C55E]/20 via-[#3B82F6]/12 to-transparent" />
    </section>
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
