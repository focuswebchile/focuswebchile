import type { Metadata } from "next"
import { LaunchChecklistPageContent } from "@/app/5-pasos-antes-de-lanzar-un-sitio-web/launch-checklist-page-content"

export const metadata: Metadata = {
  title: "5 pasos antes de lanzar un sitio web | FocusWeb",
  description:
    "Revisa los aspectos clave antes de lanzar un sitio web: base tecnica, indexacion en Google, medicion, presencia local y SEO minimo.",
  alternates: {
    canonical: "/blog/5-pasos-antes-de-lanzar-un-sitio-web",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/5-pasos-antes-de-lanzar-un-sitio-web",
    title: "5 pasos antes de lanzar un sitio web | FocusWeb",
    description:
      "Revisa los aspectos clave antes de lanzar un sitio web: base tecnica, indexacion en Google, medicion, presencia local y SEO minimo.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/5pasos-antes-lanzar-tu-sitioweb.webp",
        width: 1200,
        height: 630,
        alt: "5 pasos antes de lanzar un sitio web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 pasos antes de lanzar un sitio web | FocusWeb",
    description:
      "Revisa los aspectos clave antes de lanzar un sitio web: base tecnica, indexacion en Google, medicion, presencia local y SEO minimo.",
    images: ["https://focusweb.cl/5pasos-antes-lanzar-tu-sitioweb.webp"],
  },
}

export default function BlogLaunchChecklistPage() {
  return <LaunchChecklistPageContent pageUrl="https://focusweb.cl/blog/5-pasos-antes-de-lanzar-un-sitio-web" />
}
