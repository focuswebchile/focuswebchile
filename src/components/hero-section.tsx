"use client"

import { useState } from "react"
import { useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(null)

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
  }, [recaptchaSiteKey])

  useEffect(() => {
    let canceled = false

    const warmupRecaptcha = async () => {
      try {
        await ensureRecaptchaReady()
      } catch {
        // Warmup failure should not block manual submit flow
      }
    }

    const schedule = () => {
      const win = globalThis as Window & {
        requestIdleCallback?: (callback: () => void) => number
      }

      if (typeof win.requestIdleCallback === "function") {
        win.requestIdleCallback(() => {
          if (!canceled) {
            void warmupRecaptcha()
          }
        })
        return
      }

      globalThis.setTimeout(() => {
        if (!canceled) {
          void warmupRecaptcha()
        }
      }, 900)
    }

    schedule()
    return () => {
      canceled = true
    }
  }, [ensureRecaptchaReady])

  const executeRecaptcha = async (action: string) => {
    let lastError: unknown = null

    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const siteKey = await ensureRecaptchaReady()

        const token = await new Promise<string>((resolve, reject) => {
          const grecaptcha = window.grecaptcha
          if (!grecaptcha?.execute) {
            reject(new Error("reCAPTCHA no disponible"))
            return
          }

          grecaptcha.ready(() => {
            grecaptcha.execute(siteKey, { action }).then(resolve).catch(reject)
          })
        })

        return token
      } catch (error) {
        lastError = error
        if (attempt === 0) {
          await new Promise((resolve) => window.setTimeout(resolve, 350))
        }
      }
    }

    throw lastError ?? new Error("reCAPTCHA no disponible")
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
          <div className="relative z-20 space-y-6 pt-24 pb-8 md:pb-10 md:mt-6 md:h-full md:pt-0 md:flex md:flex-col md:justify-center md:max-w-[680px] lg:mt-8 xl:mt-10 xl:pr-20 xl:max-w-[760px] lg:pr-24">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              <p>Optimización web con criterio e impacto real.</p>
              <p>Priorizamos lo que importa.</p>
            </div>

            <h1 className="max-w-[820px] text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block lg:whitespace-nowrap">Posicionamiento</span>
              <span className="block lg:whitespace-nowrap">Web y técnico</span>
              <span className="block lg:whitespace-nowrap">en Chile</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Servicios de posicionamiento web y SEO técnico para que tu sitio aparezca en Google,
              cargue rápido y genere ventas. No vendemos paquetes genéricos: auditamos,
              priorizamos por impacto real y ejecutamos con criterio técnico.
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

          <div className="relative hidden w-full items-end justify-end overflow-visible xl:flex xl:min-h-[calc(100vh-80px)]">
            <div className="relative z-10 h-full w-full max-w-none xl:absolute xl:bottom-0 xl:right-0 xl:h-[clamp(440px,62vh,700px)] xl:w-[clamp(460px,40vw,820px)] xl:translate-x-[clamp(8px,2vw,56px)] 2xl:h-[760px] 2xl:w-[900px] 2xl:translate-x-[96px]">
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
