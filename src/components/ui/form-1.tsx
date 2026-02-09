"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, User } from "lucide-react"
import { RecaptchaScript } from "@/components/recaptcha-script"

type FormOneProps = {
  badge?: string
  title?: string
  subtitle?: string
  showEmailLine?: boolean
  showServiceSelect?: boolean
  submitLabel?: string
  serviceOptions?: Array<{ value: string; label: string }>
  onSubmit?: (data: {
    name: string
    email: string
    message: string
    service?: string
  }) => void
}

const defaultServiceOptions = [
  { value: "landing", label: "Landing Page" },
  { value: "corporativo", label: "Sitio Web Corporativo" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "otro", label: "Otro / No estoy seguro" },
]

export default function FormOne({
  badge = "Contacto",
  title = "Hablemos de tu proyecto",
  subtitle = "Escríbenos y te respondemos en menos de 24 horas.",
  showEmailLine = true,
  showServiceSelect = false,
  submitLabel = "Enviar mensaje",
  serviceOptions = defaultServiceOptions,
  onSubmit,
}: FormOneProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const titleParts = title.trim().split(/\s+/)
  const titleTail = titleParts.length > 0 ? titleParts.pop() : ""
  const titleHead = titleParts.join(" ")

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)
    setIsSubmitting(true)

    try {
      const action = "contact_main"
      const token = await executeRecaptcha(action)
      const submitResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token, action }),
      })
      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar el mensaje")
      }

      if (onSubmit) {
        onSubmit(formData)
        return
      }

      setFormData({ name: "", email: "", message: "", service: "" })
      setSuccessMessage("Mensaje enviado. Te responderemos pronto.")
    } catch (error) {
      setErrorMessage("No pudimos enviar el mensaje. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = isSubmitting
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-foreground">
      <RecaptchaScript lazy />
      {successMessage && (
        <div className="mb-4 w-full max-w-xl rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm text-emerald-700">
          {successMessage}
        </div>
      )}
      <p className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">{badge}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-center text-balance">
        {titleHead && <span className="text-foreground">{titleHead} </span>}
        <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">{titleTail}</span>
      </h1>
      <p className="max-md:text-sm text-muted-foreground pb-8 text-center max-w-xl">
        {subtitle}{" "}
        {showEmailLine && (
          <>
            También puedes escribirnos desde nuestro{" "}
            <a href="/contacto" className="text-primary hover:underline">
              formulario de contacto
            </a>
            .
          </>
        )}
      </p>

      <div className="max-w-md w-full px-2 sm:px-4">
        <Label htmlFor="name" className="font-medium">
          Nombre
        </Label>
        <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-border rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition-all overflow-hidden bg-background">
          <User className="h-4 w-4 text-muted-foreground" />
        <Input
          id="name"
          type="text"
          className="h-full px-2 w-full border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          required
          disabled={isDisabled}
        />
        </div>

        <Label htmlFor="email" className="font-medium mt-4">
          Email
        </Label>
        <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-border rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition-all overflow-hidden bg-background">
          <Mail className="h-4 w-4 text-muted-foreground" />
        <Input
          id="email"
          type="email"
          className="h-full px-2 w-full border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          required
          disabled={isDisabled}
        />
        </div>

        {showServiceSelect && (
          <>
            <Label htmlFor="service" className="font-medium mt-4">
              Servicio de interés
            </Label>
            <select
              id="service"
              value={formData.service}
              onChange={(event) => setFormData({ ...formData, service: event.target.value })}
              required
              disabled={isDisabled}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
              }}
              className="h-11 mt-2 w-full rounded-full border border-border bg-background px-3 pr-14 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-primary/40 appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_1.5rem_center]"
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </>
        )}

        <Label htmlFor="message" className="font-medium mt-4">
          Mensaje
        </Label>
        <Textarea
          id="message"
          rows={4}
          className="w-full mt-2 p-3 border border-border rounded-2xl resize-none bg-background focus-visible:ring-2 focus-visible:ring-primary/40"
          placeholder="Cuéntanos sobre tu proyecto"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          required
          disabled={isDisabled}
        />

        <Button
          type="submit"
          className="flex items-center justify-center gap-2 mt-5 w-full rounded-full text-sm"
          disabled={isDisabled}
        >
          {isSubmitting ? "Enviando..." : submitLabel}
          <Send className="h-4 w-4" />
        </Button>
        <p className="mt-2 text-xs text-center text-muted-foreground">
          Protegido por reCAPTCHA ·{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Privacidad
          </a>{" "}
          ·{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Términos
          </a>
        </p>

        {errorMessage ? (
          <p className="mt-3 text-xs text-center text-destructive">{errorMessage}</p>
        ) : null}
      </div>
    </form>
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
