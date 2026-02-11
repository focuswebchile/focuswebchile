import { NextResponse } from "next/server"
import { Resend } from "resend"

const RECAPTCHA_THRESHOLD = 0.5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 min
const RATE_LIMIT_MAX_REQUESTS = 5
const ipRequestLog = new Map<string, number[]>()

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  const realIp = request.headers.get("x-real-ip")
  if (realIp) return realIp

  return "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const existing = ipRequestLog.get(ip) ?? []
  const recent = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, recent)
    return true
  }

  recent.push(now)
  ipRequestLog.set(ip, recent)
  return false
}

export async function POST(request: Request) {
  try {
    const { name, email, message, token, action, website } = await request.json()

    const clientIp = getClientIp(request)
    if (isRateLimited(clientIp)) {
      return NextResponse.json({ success: false, error: "Demasiados intentos, prueba en unos minutos" }, { status: 429 })
    }

    // Honeypot: bots suelen completar campos ocultos.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !message || !token || !action) {
      return NextResponse.json({ success: false, error: "Datos incompletos" }, { status: 400 })
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ success: false, error: "reCAPTCHA no configurado" }, { status: 500 })
    }

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
    })
    const verifyData = await verifyResponse.json()

    if (!verifyData.success || verifyData.action !== action || verifyData.score < RECAPTCHA_THRESHOLD) {
      return NextResponse.json({ success: false, error: "reCAPTCHA inválido" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || "focuswebchile@gmail.com"
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Focus Web <onboarding@resend.dev>"

    if (!resendApiKey) {
      return NextResponse.json({ success: false, error: "Resend no configurado" }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nuevo contacto Focus Web - ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: "Error enviando mensaje" }, { status: 500 })
  }
}
