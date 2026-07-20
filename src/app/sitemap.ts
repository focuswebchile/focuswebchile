import type { MetadataRoute } from "next"

const baseUrl = "https://focusweb.cl"

// Fechas del último commit real que tocó cada página (git log -1 --format=%cI -- <page.tsx>),
// para que lastmod refleje cambios de contenido reales y no la hora de build.
const rebrand = new Date("2026-07-16T11:24:14+02:00")
const fivePasosPost = new Date("2026-03-10T14:07:24+01:00")
const miHistoria = new Date("2026-07-20T11:25:38+02:00")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}`, lastModified: rebrand },
    { url: `${baseUrl}/landing-page`, lastModified: rebrand },
    { url: `${baseUrl}/blog/5-pasos-antes-de-lanzar-un-sitio-web`, lastModified: fivePasosPost },
    { url: `${baseUrl}/servicios`, lastModified: rebrand },
    { url: `${baseUrl}/servicios/auditoria-seo-tecnico`, lastModified: rebrand },
    { url: `${baseUrl}/servicios/desarrollo-web`, lastModified: rebrand },
    { url: `${baseUrl}/servicios/optimizacion-velocidad-web`, lastModified: rebrand },
    { url: `${baseUrl}/nuestro-proceso`, lastModified: rebrand },
    { url: `${baseUrl}/contacto`, lastModified: rebrand },
    { url: `${baseUrl}/faq`, lastModified: rebrand },
    { url: `${baseUrl}/blog`, lastModified: rebrand },
    { url: `${baseUrl}/blog/como-crear-una-pagina-web-en-chile`, lastModified: rebrand },
    { url: `${baseUrl}/blog/landing-page-vs-pagina-web`, lastModified: rebrand },
    { url: `${baseUrl}/blog/instagram-a-tienda-online`, lastModified: rebrand },
    { url: `${baseUrl}/blog/errores-paginas-web-pymes-chile`, lastModified: rebrand },
    { url: `${baseUrl}/blog/mi-pagina-web-tarda-mucho-en-cargar`, lastModified: rebrand },
    { url: `${baseUrl}/blog/seo-local-google-business-chile`, lastModified: rebrand },
    { url: `${baseUrl}/blog/seguridad-web-pymes`, lastModified: rebrand },
    { url: `${baseUrl}/blog/landing-page-para-negocios-en-chile`, lastModified: rebrand },
    { url: `${baseUrl}/crear-pagina-web-chile`, lastModified: rebrand },
    { url: `${baseUrl}/mi-historia`, lastModified: miHistoria },
    { url: `${baseUrl}/metodologia`, lastModified: rebrand },
    { url: `${baseUrl}/mapa-del-sitio`, lastModified: rebrand },
    { url: `${baseUrl}/check-list-ecommerce`, lastModified: rebrand },
  ]
}
