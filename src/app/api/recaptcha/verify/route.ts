import { NextResponse } from "next/server"

type VerifyRequest = {
  token?: string
  action?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as VerifyRequest
    const token = body.token?.trim()
    const action = body.action?.trim()

    if (!token || !action) {
      return NextResponse.json({ success: false, error: "missing_token_or_action" }, { status: 400 })
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ success: false, error: "missing_secret" }, { status: 500 })
    }

    const params = new URLSearchParams()
    params.append("secret", secret)
    params.append("response", token)

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    const data = (await response.json()) as {
      success: boolean
      score?: number
      action?: string
      ["error-codes"]?: string[]
    }

    const score = typeof data.score === "number" ? data.score : 0
    const isActionValid = data.action === action
    const isScoreValid = score >= 0.5

    return NextResponse.json({
      success: data.success && isActionValid && isScoreValid,
      score,
      action: data.action,
      errors: data["error-codes"] ?? [],
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "invalid_request" }, { status: 400 })
  }
}
