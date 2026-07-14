import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import HashRedirect from "@/components/auth/hash-redirect"
// import { ThemeSync } from "@/components/theme-sync"
// ThemeSync desactivado: sincronizaba colores/tipografía desde el panel /admin
// (backend Railway), que ya no existe. Candidato a eliminación completa en una
// fase de limpieza junto con src/components/theme-sync.tsx y src/app/admin.
import { DeferredAnalytics } from "@/components/deferred-analytics"
import "./globals.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-bricolage",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
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
      name: "FocusWeb Chile",
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
      name: "FocusWeb Chile",
      url: "https://focusweb.cl",
      inLanguage: "es-CL",
    },
  ]

  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Script
            id="ga4-src"
            src="https://www.googletagmanager.com/gtag/js?id=G-33SDJFM25D"
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-33SDJFM25D');
            `}
          </Script>
          <DeferredAnalytics />
          <HashRedirect />
          {/* <ThemeSync /> — desactivado, ver import comentado arriba */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
