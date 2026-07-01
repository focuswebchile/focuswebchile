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
      if (window.grecaptcha?.execute) return
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
      if (!siteKey) throw new Error("reCAPTCHA no disponible")
      setRecaptchaSiteKey(siteKey)
    }

    if (!window.grecaptcha?.execute) {
      await new Promise<void>((resolve, reject) => {
        const existingScript = document.getElementById("recaptcha-script")
        if (existingScript) {
          if (window.grecaptcha?.execute) { resolve(); return }
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
    try { await ensureRecaptchaReady() } catch { /* silent */ }
  }, [ensureRecaptchaReady])

  const executeRecaptcha = async (action: string) => {
    let lastError: unknown = null
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const siteKey = await ensureRecaptchaReady()
        const token = await new Promise<string>((resolve, reject) => {
          const grecaptcha = window.grecaptcha
          if (!grecaptcha?.execute) { reject(new Error("reCAPTCHA no disponible")); return }
          grecaptcha.ready(() => { grecaptcha.execute(siteKey, { action }).then(resolve).catch(reject) })
        })
        return token
      } catch (error) {
        lastError = error
        if (attempt === 0) await new Promise((resolve) => window.setTimeout(resolve, 350))
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
    if (!trimmedUrl) { setErrorMessage("Ingresa una URL para revisar."); return }
    if (!trimmedEmail) { setErrorMessage("Ingresa un correo para enviarte el diagnóstico."); return }

    try { new URL(trimmedUrl) } catch {
      setErrorMessage("La URL no es válida. Usa formato https://tusitio.cl")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("El correo no es válido.")
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
        throw new Error(submitData?.error || "No pudimos enviar la revisión")
      }
      setSuccessMessage("Solicitud enviada. Te contactaremos con un diagnóstico.")
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
    <>
      {/* ── HERO BAND ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative w-full overflow-visible bg-background pb-12 pt-24 md:pb-16 xl:min-h-[calc(82vh-80px)] 2xl:min-h-[calc(80vh-80px)]"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-12 xl:min-h-[calc(82vh-80px)] xl:grid-cols-[minmax(560px,1.14fr)_minmax(400px,0.86fr)] xl:items-center xl:gap-20 2xl:min-h-[calc(80vh-80px)] 2xl:grid-cols-[minmax(620px,1.12fr)_minmax(460px,0.88fr)] 2xl:gap-24">

            {/* Left: headline */}
            <div
              className={`relative z-20 space-y-7 transition-all duration-700 ease-out md:mt-6 lg:mt-8 xl:mt-0 xl:max-w-[900px] xl:pr-12 2xl:pr-16 ${desktopRevealClass}`}
            >
              <p className="pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:pt-12 lg:pt-6 xl:pt-0">
                SEO técnico · Velocidad · Desarrollo · Chile
              </p>

              <h1 className="max-w-[860px] text-5xl font-black leading-[0.88] tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[5.5rem]">
                <span className="block">Posicionamiento</span>
                <span className="block">Web y técnico</span>
                <span className="block text-primary">en Chile</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                Auditamos, optimizamos velocidad y corregimos errores técnicos para que tu sitio
                aparezca en Google, cargue rápido y genere ventas. Sin paquetes genéricos.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  Conversar por WhatsApp
                </a>
                <a
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-foreground/20 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Ver metodología
                </a>
              </div>

              {/* Inline metrics */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm">
                <span className="font-semibold text-foreground">200+ sitios auditados</span>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="font-semibold text-foreground">95+ PageSpeed Score</span>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="font-semibold text-foreground">Todo Chile, 100% remoto</span>
              </div>
            </div>

            {/* Right: hero image (xl+) */}
            <div
              className={`relative hidden w-full items-end justify-end overflow-visible transition-opacity duration-700 ease-out xl:flex xl:min-h-[calc(82vh-80px)] 2xl:min-h-[calc(80vh-80px)] ${desktopImageRevealClass}`}
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

      {/* ── AUDIT FORM BAND ────────────────────────────────────── */}
      <div className="border-y border-border bg-card px-4 py-8 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <form className="space-y-3" onSubmit={handleReviewSubmit}>
            <p className="text-sm font-semibold text-foreground">
              Diagnóstico gratuito — pega tu URL y recibe prioridades reales
            </p>
            <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input
                type="url"
                placeholder="https://tusitio.cl"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                onFocus={warmupRecaptcha}
                disabled={isSubmitting}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={warmupRecaptcha}
                disabled={isSubmitting}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90 disabled:opacity-50"
              >
                {isSubmitting ? "Revisando..." : "Revisar"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Recuerda: pega tu URL con https://
            </p>
            {securityMessage && <p className="text-xs text-accent">{securityMessage}</p>}
            {errorMessage && <p className="text-xs text-destructive">{errorMessage}</p>}
            {successMessage && <p className="text-xs text-success">{successMessage}</p>}
          </form>
        </div>
      </div>
    </>
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
