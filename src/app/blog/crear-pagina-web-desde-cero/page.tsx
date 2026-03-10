import type { Metadata } from "next"
import { ArticlePageContent } from "@/app/crear-pagina-web-desde-cero/article-page-content"

export const metadata: Metadata = {
  title: "Crear una página web desde cero en Chile: pasos reales | Focus Web",
  description:
    "Aprende a crear una página web desde cero en Chile con pasos claros para pymes: estructura, contenidos, SEO básico y decisiones clave para empezar bien.",
  alternates: {
    canonical: "/blog/crear-pagina-web-desde-cero",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/crear-pagina-web-desde-cero",
    title: "Crear una página web desde cero en Chile: pasos reales | Focus Web",
    description:
      "Aprende a crear una página web desde cero en Chile con pasos claros para pymes: estructura, contenidos, SEO básico y decisiones clave para empezar bien.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/crea-pagina-web-desde-cero.webp",
        width: 1200,
        height: 630,
        alt: "Crear una página web desde cero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crear una página web desde cero en Chile: pasos reales | Focus Web",
    description:
      "Aprende a crear una página web desde cero en Chile con pasos claros para pymes: estructura, contenidos, SEO básico y decisiones clave para empezar bien.",
    images: ["https://focusweb.cl/crea-pagina-web-desde-cero.webp"],
  },
}

export default function BlogArticlePage() {
  return <ArticlePageContent pageUrl="https://focusweb.cl/blog/crear-pagina-web-desde-cero" />
}
