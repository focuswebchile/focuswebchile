"use client"

import { useState } from "react"
import { RecaptchaScript } from "@/components/recaptcha-script"

type FormData = {
  fullName: string
  email: string
  siteUrl: string
  gscAccess: "si" | "no" | "no_se"
  notes: string
  website: string
  acceptedPrivacy: boolean
}

const defaultFormData: FormData = {
  fullName: "",
  email: "",
  siteUrl: "",
  gscAccess: "no_se",
  notes: "",
  website: "",
  acceptedPrivacy: false,
}

export function AuditoriaSeoCtaForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

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
          existingScript.addEventListener("error", () => reject(new Error("reCAPTCHA no disponible")), {
            once: true,
          })
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    if (!formData.acceptedPrivacy) {
      setErrorMessage("Debes aceptar la política de privacidad para continuar.")
      return
    }

    const trimmedUrl = formData.siteUrl.trim()
    try {
      new URL(trimmedUrl)
    } catch {
      setErrorMessage("La URL no es válida. Usa formato https://tusitio.cl")
      return
    }

    setIsSubmitting(true)
    try {
      const action = "contact_auditoria_seo"
      const token = await executeRecaptcha(action)
      const message = [
        "Nueva solicitud de auditoría SEO técnica",
        `URL del sitio: ${trimmedUrl}`,
        `Acceso a Google Search Console: ${formData.gscAccess}`,
        `¿Qué problema específico notas?: ${formData.notes.trim() || "No especificado"}`,
      ].join("\n")

      const submitResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          message,
          token,
          action,
          website: formData.website,
        }),
      })
      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar la solicitud")
      }

      setFormData(defaultFormData)
      setSuccessMessage("Solicitud enviada. Te contactaremos para agendar la auditoría.")
    } catch {
      setErrorMessage("No pudimos enviar la solicitud. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/5 sm:p-10">
      <RecaptchaScript lazy />

      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Solicita Tu Auditoría SEO Técnica Gratis</h2>
      <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/85 sm:text-lg">
        No sigas invirtiendo en SEO a ciegas. Saber exactamente qué está mal es el primer paso para aparecer en
        Google.
      </p>
      <p className="mt-4 text-base font-semibold text-foreground sm:text-lg">Solicita tu auditoría técnica gratis:</p>
      <ul className="mt-2 space-y-1.5 text-base leading-relaxed text-foreground/80 sm:text-lg">
        <li>✓ Sin compromiso</li>
        <li>✓ Reporte inicial en hasta 48 horas</li>
        <li>✓ Plan de acción priorizado</li>
        <li>✓ Lenguaje claro, no tecnicismos</li>
      </ul>
      <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground/80 sm:text-lg">
        Completa el formulario o escríbenos por WhatsApp y agendamos tu auditoría.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
            <span className="font-medium">Nombre completo*</span>
            <input
              type="text"
              value={formData.fullName}
              onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
              required
              autoComplete="name"
              className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
            <span className="font-medium">Email*</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              required
              autoComplete="email"
              className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
          <span className="font-medium">URL de tu sitio web* (https://tusitio.cl)</span>
          <input
            type="url"
            value={formData.siteUrl}
            onChange={(event) => setFormData((prev) => ({ ...prev, siteUrl: event.target.value }))}
            required
            autoComplete="url"
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
          <span className="font-medium">¿Tienes acceso a Google Search Console?</span>
          <select
            value={formData.gscAccess}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, gscAccess: event.target.value as FormData["gscAccess"] }))
            }
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
            <option value="no_se">No sé qué es</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm text-foreground/80">
          <span className="font-medium">¿Qué problema específico notas? (opcional)</span>
          <textarea
            value={formData.notes}
            onChange={(event) => setFormData((prev) => ({ ...prev, notes: event.target.value }))}
            rows={4}
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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

        <label className="flex items-start gap-2 text-sm text-foreground/80">
          <input
            type="checkbox"
            checked={formData.acceptedPrivacy}
            onChange={(event) => setFormData((prev) => ({ ...prev, acceptedPrivacy: event.target.checked }))}
            required
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <span>Acepto política de privacidad</span>
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          <a
            href="https://wa.me/420733796959"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            Prefiero conversar por WhatsApp
          </a>
        </div>

        {errorMessage && (
          <p className="text-sm text-red-600" role="alert" aria-live="assertive">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-sm text-success" role="status" aria-live="polite">
            {successMessage}
          </p>
        )}
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
