"use client"

import type React from "react"
import { useCallback, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Code2, Gauge, HelpCircle, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { RecaptchaScript } from "@/components/recaptcha-script"

const EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1]

const serviceOptions = [
  { value: "diseno", label: "Diseño web", icon: Code2 },
  { value: "optimizacion", label: "Optimización", icon: Gauge },
  { value: "consultoria", label: "Consultoría", icon: MessageCircle },
  { value: "otro", label: "Otra cosa", icon: HelpCircle },
] as const

type ServiceOption = (typeof serviceOptions)[number]

export function ContactSection() {
  const [step, setStep] = useState<1 | 2>(1)
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string | null>(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? null,
  )

  const selectService = (option: ServiceOption) => {
    setSelectedService(option)
    setStep(2)
  }

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

    return siteKey
  }, [recaptchaSiteKey])

  const executeRecaptcha = async (action: string) => {
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
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!selectedService) return
    setErrorMessage(null)
    setIsSubmitting(true)

    try {
      const action = "contact_main"
      const token = await executeRecaptcha(action)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: `Servicio de interés: ${selectedService.label}`,
          token,
          action,
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data?.error || "No pudimos enviar tu info")
      }
      setSuccessMessage("¡Listo! Te contactamos pronto.")
    } catch {
      setErrorMessage("No pudimos enviar tu info. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (successMessage) {
    return (
      <section id="contacto" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{successMessage}</p>
            <p className="mt-3 text-base text-muted-foreground">
              Escríbenos por WhatsApp si quieres avanzar más rápido.
            </p>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <RecaptchaScript />

          {/* Progress dots */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? "w-6 bg-primary" : "w-2 bg-border"}`} />
            <span className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? "w-6 bg-primary" : "w-2 bg-border"}`} />
          </div>

          <div className="grid">
          <AnimatePresence>
            {step === 1 ? (
              <motion.div
                key="step-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_IN_OUT }}
                className="col-start-1 row-start-1 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Contacto
                </p>
                <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
                  ¿Cómo te puedo ayudar?
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-base text-muted-foreground">
                  Elige una opción y te contacto en menos de 24 horas.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectService(option)}
                      className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/5 sm:p-8"
                    >
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                        <option.icon className="h-8 w-8" />
                      </span>
                      <span className="text-base font-semibold text-foreground sm:text-lg">{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_IN_OUT }}
                className="col-start-1 row-start-1 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {selectedService?.label}
                </p>
                <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
                  Dejame tu nombre y tu teléfono
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-base text-muted-foreground">
                  Yo me pondré en contacto contigo por WhatsApp o llamada.
                </p>

                <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md space-y-4 text-left">
                  <div>
                    <Label htmlFor="contact-name" className="font-medium">
                      Nombre
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      className="mt-2 h-12 rounded-full px-4"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="font-medium">
                      Teléfono
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      className="mt-2 h-12 rounded-full px-4"
                      placeholder="+56 9 1234 5678"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  {errorMessage ? (
                    <p className="text-center text-xs text-destructive">{errorMessage}</p>
                  ) : null}

                  <p className="text-center text-xs text-muted-foreground">
                    Protegido por reCAPTCHA ·{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Privacidad
                    </a>
                  </p>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mx-auto flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Elegir otra opción
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
