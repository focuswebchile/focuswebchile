import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import HashRedirect from "@/components/auth/hash-redirect"
import { ThemeSync } from "@/components/theme-sync"
import "./globals.css"

const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins/Poppins-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Poppins/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Poppins/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Poppins/Poppins-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
})

const inter = localFont({
  src: "../../public/fonts/Inter/Inter-VariableFont_opsz,wght.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  preload: false,
  variable: "--font-inter",
})

const nunito = localFont({
  src: "../../public/fonts/Nunito/Nunito-VariableFont_wght.woff2",
  weight: "200 1000",
  style: "normal",
  display: "swap",
  preload: false,
  variable: "--font-nunito",
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
            strategy="lazyOnload"
          />
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Script id="ga4" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-33SDJFM25D');
            `}
          </Script>
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="s+O8F/fzRT/Wxo/VzK5fjQ"
            strategy="lazyOnload"
          />
          <HashRedirect />
          <ThemeSync />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
