import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Nunito, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import HashRedirect from "@/components/auth/hash-redirect"
import { ThemeSync } from "@/components/theme-sync"
import { RecaptchaScript } from "@/components/recaptcha-script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
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
        url: "https://focusweb.cl/og-home.png?v=2026-01-19",
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
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
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
        url: "/icon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/icon-96x96.png",
        type: "image/png",
        sizes: "96x96",
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Focus Web",
      url: "https://focusweb.cl",
      logo: "https://focusweb.cl/logo-512.png",
      description:
        "Estudio de desarrollo y diseño web en Chile enfocado en pymes y emprendedores.",
      areaServed: [
        {
          "@type": "Country",
          name: "Chile",
        },
      ],
      availableLanguage: "es-CL",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Focus Web",
      url: "https://focusweb.cl",
    },
  ]

  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} ${nunito.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-33SDJFM25D"
            strategy="afterInteractive"
          />
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-33SDJFM25D');
            `}
          </Script>
          <RecaptchaScript />
          <HashRedirect />
          <ThemeSync />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
