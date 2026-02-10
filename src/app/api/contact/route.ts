import { NextResponse } from "next/server"
import { Resend } from "resend"

const RECAPTCHA_THRESHOLD = 0.5

export async function POST(request: Request) {
  try {
    const { name, email, message, token, action } = await request.json()

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
