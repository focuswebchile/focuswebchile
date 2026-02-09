import { NextResponse } from "next/server"
import { Resend } from "resend"

const RECAPTCHA_THRESHOLD = 0.5

type ReviewRequest = {
  websiteUrl?: string
  token?: string
  action?: string
}

export async function POST(request: Request) {
  try {
    const { websiteUrl, token, action } = (await request.json()) as ReviewRequest

    if (!websiteUrl || !token || !action) {
      return NextResponse.json({ success: false, error: "Datos incompletos" }, { status: 400 })
    }

    const normalizedAction = action.trim()
    if (normalizedAction !== "hero_review") {
      return NextResponse.json({ success: false, error: "Accion no valida" }, { status: 400 })
    }

    let parsedUrl: URL
    try {
      parsedUrl = new URL(websiteUrl.trim())
    } catch {
      return NextResponse.json({ success: false, error: "URL invalida" }, { status: 400 })
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
        response: token.trim(),
      }).toString(),
    })
    const verifyData = await verifyResponse.json()

    if (!verifyData.success || verifyData.action !== normalizedAction || verifyData.score < RECAPTCHA_THRESHOLD) {
      return NextResponse.json({ success: false, error: "reCAPTCHA invalido" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = "focuswebchile@gmail.com"
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Focus Web <onboarding@resend.dev>"

    if (!resendApiKey) {
      return NextResponse.json({ success: false, error: "Resend no configurado" }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "Nueva solicitud de revision desde Hero",
      text: [
        "Solicitud de auditoria desde home hero",
        "",
        `URL: ${parsedUrl.toString()}`,
        `Action: ${normalizedAction}`,
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: "Error enviando solicitud" }, { status: 500 })
  }
}
