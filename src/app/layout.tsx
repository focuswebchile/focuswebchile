import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://focusweb.cl"),
  title: "Diseño Web en Chile para Emprendedores | FocusWeb",
  description:
    "Creamos páginas web, landing pages y tiendas online para emprendedores en Chile. Diseño moderno, SEO y contacto directo por WhatsApp.",
  keywords: "desarrollo web chile, landing page chile, sitio web emprendedores, e-commerce chile, diseño web santiago",
  authors: [{ name: "FocusWeb Chile" }],
  creator: "FocusWeb Chile",
  publisher: "FocusWeb Chile",
  robots: "index, follow",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl",
    title: "Diseño Web en Chile para Emprendedores | FocusWeb",
    description:
      "Creamos páginas web, landing pages y tiendas online para emprendedores en Chile. Diseño moderno, SEO y contacto directo por WhatsApp.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FocusWeb Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web en Chile para Emprendedores | FocusWeb",
    description:
      "Creamos páginas web, landing pages y tiendas online para emprendedores en Chile. Diseño moderno, SEO y contacto directo por WhatsApp.",
    images: ["/og.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        rel: "icon",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-light-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/logo-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-33SDJFM25D"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-33SDJFM25D');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
