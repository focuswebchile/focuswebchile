"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type LaunchChecklistFormData = {
  name: string
  email: string
  siteUrl: string
  website: string
}

const defaultFormData: LaunchChecklistFormData = {
  name: "",
  email: "",
  siteUrl: "",
  website: "",
}

export function LaunchChecklistForm() {
  const [formData, setFormData] = useState<LaunchChecklistFormData>(defaultFormData)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [securityMessage, setSecurityMessage] = useState<string | null>(null)

  async function waitForGrecaptcha() {
    for (let attempt = 0; attempt < 40; attempt += 1) {
      if (window.grecaptcha?.execute) {
        return
      }
      await new Promise((resolve) => setTimeout(resolve, 50))
    }

    throw new Error("reCAPTCHA no disponible")
  }

  async function ensureRecaptchaReady() {
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
  }

  async function warmupRecaptcha() {
    try {
      await ensureRecaptchaReady()
    } catch {
      // Silent warmup failure. Final submit handles the user-facing state.
    }
  }

  async function executeRecaptcha(action: string) {
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)
    setSecurityMessage(null)

    const trimmedUrl = formData.siteUrl.trim()

    try {
      new URL(trimmedUrl)
    } catch {
      setErrorMessage("La URL no es valida. Usa formato https://tusitio.cl")
      return
    }

    setIsSubmitting(true)
    setSecurityMessage("Validando seguridad...")

    try {
      const action = "launch_checklist_review"
      const token = await executeRecaptcha(action)
      const message = [
        "Nueva solicitud desde 5 pasos antes de lanzar un sitio web",
        `URL del sitio: ${trimmedUrl}`,
        "Interes: revisar si el sitio esta bien configurado antes del lanzamiento.",
      ].join("\n")

      const submitResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message,
          token,
          action,
          website: formData.website,
        }),
      })

      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar la revision")
      }

      setFormData(defaultFormData)
      setSuccessMessage("Solicitud enviada. Revisare tu sitio y te respondere pronto.")
    } catch {
      setErrorMessage("No pudimos enviar la solicitud. Intenta nuevamente.")
    } finally {
      setSecurityMessage(null)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[2rem] border border-primary/20 bg-white/90 p-6 shadow-[0_30px_80px_-48px_rgba(31,41,55,0.45)] backdrop-blur sm:p-8 lg:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Revision inicial
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Quieres saber si tu sitio esta bien configurado?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Deja tu nombre, correo y URL. Revisare la base tecnica, la indexacion y la estructura minima antes de que lo
          publiques.
        </p>
      </div>

      <form className="mx-auto mt-8 max-w-3xl space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
            <span className="font-medium">Nombre</span>
            <input
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onFocus={warmupRecaptcha}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
            <span className="font-medium">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onFocus={warmupRecaptcha}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
          <span className="font-medium">URL de tu sitio web</span>
          <input
            type="url"
            required
            autoComplete="url"
            placeholder="https://tusitio.cl"
            value={formData.siteUrl}
            onFocus={warmupRecaptcha}
            onChange={(event) => setFormData((prev) => ({ ...prev, siteUrl: event.target.value }))}
            className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="sr-only" aria-hidden="true">
          No completar este campo
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
          />
        </label>

        <div className="space-y-3 pt-2 text-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="min-w-[220px] rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? "Enviando..." : "Revisar mi sitio web"}
          </Button>

          <p className="text-xs text-muted-foreground">
            Protegido por reCAPTCHA. Revision inicial clara, sin vueltas.
          </p>

          {securityMessage ? <p className="text-sm text-accent">{securityMessage}</p> : null}
          {errorMessage ? <p className="text-sm text-destructive">{errorMessage}</p> : null}
          {successMessage ? <p className="text-sm text-primary">{successMessage}</p> : null}
        </div>
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
