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
        className="relative w-full overflow-visible bg-background pb-12 pt-24 md:pb-16 xl:pb-0"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Grid de altura definida (90vh en desktop) — no depende del alto
              del texto. La columna de foto se estira a esa altura y recorta
              su contenido vía overflow-hidden; la columna de texto centra su
              contenido dentro de esa misma altura. */}
          <div className="grid grid-cols-1 gap-12 xl:min-h-[76vh] xl:grid-cols-[minmax(480px,1.05fr)_minmax(480px,0.95fr)] xl:gap-12 2xl:grid-cols-[minmax(540px,1.05fr)_minmax(540px,0.95fr)] 2xl:gap-16">

            {/* Left: hero photo — solo desktop (xl+). Sacada del flujo con
                position:absolute para poder ser más grande que el alto de la
                sección sin empujar hacia abajo las secciones siguientes.
                Se fija bottom con un pequeño offset (deja respiro de
                fondo crema antes de la franja siguiente, sin empujarla
                hacia abajo — la sección mantiene xl:pb-0) y left
                (sangrado hacia la izquierda) — el alto queda en auto según
                el ancho fijo, sin caja que la obligue a encogerse.
                Puede sobrepasar el ancho de la columna hacia
                la derecha (la sección tiene overflow-visible).
                En mobile "Sobre mí" introduce la foto. */}
            <div
              className={`relative hidden w-full transition-opacity duration-700 ease-out xl:block ${desktopImageRevealClass}`}
            >
              <div className="xl:absolute xl:left-[clamp(-220px,-9vw,-90px)] xl:bottom-0 min-[2000px]:left-[clamp(-400px,-15.5vw,-220px)]!">
                <Image
                  src="/felipe-hero-llamada-v2.png"
                  alt="Felipe Ibar hablando por teléfono con un cliente"
                  width={1430}
                  height={1154}
                  className="h-auto w-[680px] max-w-none object-contain 2xl:w-[clamp(860px,43vw,1150px)]"
                  sizes="(min-width: 1280px) 45vw, 0px"
                  priority
                />
              </div>
            </div>

            {/* Right: headline — centrada verticalmente dentro del grid de 90vh */}
            <div
              className={`relative z-20 flex flex-col justify-center space-y-7 transition-all duration-700 ease-out md:mt-6 lg:mt-8 xl:mt-0 ${desktopRevealClass}`}
            >
              <p className="pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:pt-12 lg:pt-6 xl:pt-0">
                Más que una página web
              </p>

              <h1 className="max-w-[860px] font-display text-[32px] font-extrabold leading-[1] tracking-[-0.02em] text-foreground sm:text-[44px] sm:leading-[0.97] md:text-[56px] lg:text-[72px] lg:leading-[0.95]">
                <span className="block">Tu sitio web,</span>
                <span className="block">acompañado</span>
                <span className="block text-primary">de principio a fin</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                No te entrego una web y desaparezco. Diagnostico antes de proponerte nada,
                construyo pensando en tu negocio real, y me quedo viendo que todo funcione —
                código, SEO, contenido y automatizaciones.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-foreground shadow-lg shadow-accent/25 transition-colors hover:bg-accent/90"
                >
                  Cuéntame qué te pasa con tu sitio
                </a>
                <a
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-foreground/20 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Ver cómo trabajo
                </a>
              </div>

              {/* Prueba de forma de trabajo, no métricas de vanidad */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm">
                <span className="font-semibold text-foreground">Diagnostico antes de vender</span>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="font-semibold text-foreground">Me quedo después de publicar</span>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="font-semibold text-foreground">Todo Chile, 100% remoto</span>
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
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-foreground hover:bg-accent/90 disabled:opacity-50"
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
