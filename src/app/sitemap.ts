import type { MetadataRoute } from "next"

const baseUrl = "https://focusweb.cl"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/landing-page/`, lastModified: now },
    { url: `${baseUrl}/precios/`, lastModified: now },
    { url: `${baseUrl}/nuestro-proceso/`, lastModified: now },
    { url: `${baseUrl}/contacto/`, lastModified: now },
    { url: `${baseUrl}/faq/`, lastModified: now },
    { url: `${baseUrl}/blog/`, lastModified: now },
    { url: `${baseUrl}/blog/como-crear-una-pagina-web-en-chile/`, lastModified: now },
    { url: `${baseUrl}/crear-pagina-web-desde-cero/`, lastModified: now },
  ]
}
