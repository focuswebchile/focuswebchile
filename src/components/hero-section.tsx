"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [securityMessage, setSecurityMessage] = useState<string | null>(null)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(null)
  const [desktopHeroVisible, setDesktopHeroVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDesktopHeroVisible(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

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
    setSecurityMessage(null)

    const trimmedUrl = websiteUrl.trim()
    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedUrl) {
      setErrorMessage("Ingresa una URL para revisar.")
      return
    }
    if (!trimmedEmail) {
      setErrorMessage("Ingresa un correo para enviarte el diagnostico.")
      return
    }

    try {
      new URL(trimmedUrl)
    } catch {
      setErrorMessage("La URL no es valida. Usa formato https://tusitio.cl")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage("El correo no es valido.")
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
        body: JSON.stringify({ websiteUrl: trimmedUrl, email: trimmedEmail, token, action }),
      })
      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar la revision")
      }

      setSuccessMessage("Solicitud enviada. Te contactaremos con un diagnostico.")
      setWebsiteUrl("")
      setEmail("")
    } catch {
      setErrorMessage("No pudimos enviar la solicitud. Intenta nuevamente.")
    } finally {
      setSecurityMessage(null)
      setIsSubmitting(false)
    }
  }

  const desktopRevealClass = desktopHeroVisible
    ? "xl:translate-y-0 xl:opacity-100"
    : "xl:translate-y-4 xl:opacity-0"
  const desktopImageRevealClass = desktopHeroVisible ? "xl:opacity-100" : "xl:opacity-0"

  return (
    <section
      id="hero"
      className="relative w-full overflow-visible bg-[#F9FAFB] pb-10 md:pb-0 xl:min-h-[calc(84vh-80px)] 2xl:min-h-[calc(82vh-80px)]"
    >
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-12 md:items-stretch xl:min-h-[calc(84vh-80px)] xl:grid-cols-[minmax(580px,1.14fr)_minmax(420px,0.86fr)] xl:gap-20 2xl:min-h-[calc(82vh-80px)] 2xl:grid-cols-[minmax(640px,1.12fr)_minmax(480px,0.88fr)] 2xl:gap-24">
          <div
            className={`relative z-20 space-y-6 pt-24 pb-8 transition-all duration-700 ease-out md:mt-6 md:flex md:h-full md:flex-col md:justify-center md:pb-10 md:pt-0 lg:mt-8 xl:mt-10 xl:max-w-[920px] xl:pr-16 2xl:max-w-[980px] 2xl:pr-20 ${desktopRevealClass}`}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              <p>Optimización web con criterio e impacto real.</p>
              <p>Priorizamos lo que importa.</p>
            </div>

            <h1 className="max-w-[900px] text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl md:text-6xl lg:text-7xl">
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

            <form className="max-w-[860px] space-y-3 pt-4" onSubmit={handleReviewSubmit}>
              <p className="text-sm text-[#6B7280]">
                Pega tu URL y tu correo para recibir un diagnóstico claro con prioridades reales.
              </p>
              <div className="grid gap-3 xl:grid-cols-[minmax(0,1.95fr)_minmax(220px,0.72fr)] xl:items-center 2xl:grid-cols-[minmax(0,2.15fr)_minmax(240px,0.72fr)_170px]">
                <input
                  type="url"
                  placeholder="https://tusitio.cl"
                  value={websiteUrl}
                  onChange={(event) => setWebsiteUrl(event.target.value)}
                  onFocus={warmupRecaptcha}
                  disabled={isSubmitting}
                  className="flex-1 rounded-lg border-2 border-[#E5E7EB] bg-white px-5 py-3 text-sm text-[#1F2937] shadow-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                />
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={warmupRecaptcha}
                  disabled={isSubmitting}
                  className="rounded-lg border-2 border-[#E5E7EB] bg-white px-5 py-3 text-sm text-[#1F2937] shadow-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-[#3B82F6] px-7 py-3 text-white hover:bg-[#2563eb] xl:col-span-2 2xl:col-span-1 2xl:w-full"
                >
                  {isSubmitting ? "Revisando..." : "Revisar"}
                </Button>
              </div>
              <p className="text-xs font-medium text-[#3B82F6]">
                Recuerda: pega tu URL con https://
              </p>
              {securityMessage && <p className="text-xs text-[#3B82F6]">{securityMessage}</p>}
              {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
              {successMessage && <p className="text-xs text-emerald-700">{successMessage}</p>}
            </form>
          </div>

          <div
            className={`relative hidden w-full items-end justify-end overflow-visible transition-opacity duration-700 ease-out xl:flex xl:min-h-[calc(84vh-80px)] 2xl:min-h-[calc(82vh-80px)] ${desktopImageRevealClass}`}
          >
            <div className="relative z-10 h-full w-full max-w-none xl:absolute xl:bottom-[-2px] xl:right-[clamp(-56px,-1vw,-8px)] xl:h-[clamp(480px,60vh,675px)] xl:w-[clamp(410px,31vw,655px)] 2xl:bottom-[-2px] 2xl:right-[-12px] 2xl:h-[730px] 2xl:w-[810px]">
              <Image
                src="/svghero.svg"
                alt="Ilustración de optimización web"
                fill
                className="object-contain object-bottom"
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
