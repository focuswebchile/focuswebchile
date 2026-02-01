"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const executeRecaptcha = (action: string) =>
    new Promise<string>((resolve, reject) => {
      if (!recaptchaSiteKey || !window.grecaptcha?.execute) {
        reject(new Error("reCAPTCHA no disponible"))
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(recaptchaSiteKey, { action })
          .then(resolve)
          .catch(reject)
      })
    })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    try {
      const token = await executeRecaptcha("contact_page")
      const verifyResponse = await fetch("/api/recaptcha/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action: "contact_page" }),
      })
      const verifyData = await verifyResponse.json()

      if (!verifyData.success) {
        throw new Error("reCAPTCHA inválido")
      }

      const subject = `Contacto FocusWeb - ${formData.name}`
      const body = `Nombre: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensaje:%0A${encodeURIComponent(
        formData.message,
      )}`
      window.location.href = `mailto:focuswebchile@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    } catch (error) {
      setErrorMessage("No pudimos validar el envío. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            Hablemos de tu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">proyecto</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Escríbenos y te respondemos en menos de 24 horas con una propuesta clara.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8 lg:p-10 glass border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Nombre
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="h-11 sm:h-12 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="h-11 sm:h-12 pl-10 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="min-h-32 text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group h-12 sm:h-auto text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>

              {errorMessage ? <p className="text-xs text-center text-destructive">{errorMessage}</p> : null}

              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                También puedes escribirnos directo por WhatsApp o email.
              </p>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 sm:p-7 border-border/50 shadow-md">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Email</p>
                  <p className="text-base font-semibold">focuswebchile@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-7 border-border/50 shadow-md">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">WhatsApp</p>
                  <p className="text-base font-semibold">+420 733 796 959</p>
                </div>
              </div>
            </Card>
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
