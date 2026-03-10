import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const redirects = new Map<string, string>([
  ["/5-pasos-antes-de-lanzar-un-sitio-web", "/blog/5-pasos-antes-de-lanzar-un-sitio-web"],
  ["/crear-pagina-web-desde-cero", "/blog/crear-pagina-web-desde-cero"],
])

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, "") || "/"
  const destination = redirects.get(pathname)

  if (!destination) {
    return NextResponse.next()
  }

  const url = new URL(destination, request.url)

  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ["/5-pasos-antes-de-lanzar-un-sitio-web/:path*", "/crear-pagina-web-desde-cero/:path*"],
}
