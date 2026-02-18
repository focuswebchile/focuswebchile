export type BlogPost = {
  category: string
  title: string
  excerpt: string
  href: string
  date: string
  image: {
    src: string
    alt: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    category: "VS",
    title: "Landing Page vs Página Web: diferencias clave en diseño web",
    excerpt:
      "Te explicamos cuándo conviene cada una, con ejemplos reales y diseño web pensado para pymes en Chile.",
    href: "/blog/landing-page-vs-pagina-web",
    date: "05-01-2026",
    image: {
      src: "/landingpagevswebsite.webp",
      alt: "Landing Page vs Página Web",
    },
  },
  {
    category: "Guía",
    title: "Cómo crear una página web en Chile: guía clara para negocios y pymes",
    excerpt:
      "Todo lo que necesitas saber para elegir bien entre landing, web completa o tienda online, sin tecnicismos.",
    href: "/blog/como-crear-una-pagina-web-en-chile",
    date: "12-01-2026",
    image: {
      src: "/guiaclaraparanegociosypymes.webp",
      alt: "Guía clara para negocios y pymes en Chile",
    },
  },
  {
    category: "Consejos",
    title: "Crear una página web desde cero: pasos reales (sin tecnicismos)",
    excerpt:
      "Guía paso a paso para emprendedores y pymes que quieren crear su web desde cero, sin enredos.",
    href: "/crear-pagina-web-desde-cero",
    date: "19-01-2026",
    image: {
      src: "/sintecnisimo.webp",
      alt: "Crear una página web desde cero",
    },
  },
  {
    category: "Ecommerce",
    title: "De Instagram a tu Propia Tienda Online: lo que nadie te cuenta antes de empezar",
    excerpt:
      "Guía completa para pasar de vender por DMs a una tienda online real en Chile, sin letra chica.",
    href: "/blog/instagram-a-tienda-online",
    date: "26-01-2026",
    image: {
      src: "/instagram-a-tienda-online.webp",
      alt: "De Instagram a tienda online",
    },
  },
  {
    category: "Errores",
    title: "10 Errores Críticos en Páginas Web de PyMEs Chilenas (Y Cómo Evitarlos)",
    excerpt:
      "Los errores más comunes que están costando dinero a las PyMEs y cómo corregirlos con soluciones reales.",
    href: "/blog/errores-paginas-web-pymes-chile",
    date: "02-02-2026",
    image: {
      src: "/10-errores-criticos.webp",
      alt: "10 errores críticos en páginas web de PyMEs chilenas",
    },
  },
  {
    category: "Velocidad",
    title: "Mi página web tarda mucho en cargar: causas reales y soluciones efectivas en Chile",
    excerpt:
      "Guía práctica para entender por qué tu sitio va lento, cómo medir Core Web Vitals y qué optimizar primero.",
    href: "/blog/mi-pagina-web-tarda-mucho-en-cargar",
    date: "10-02-2026",
    image: {
      src: "/pagina-lenta.webp",
      alt: "Mi página web tarda mucho en cargar",
    },
  },
  {
    category: "SEO Local",
    title: "Google Business Profile (antes Google Mi Negocio): guía para PYMEs chilenas",
    excerpt:
      "Pasos simples para optimizar tu perfil local, atraer búsquedas orgánicas y convertir más clientes en Chile.",
    href: "/blog/seo-local-google-business-chile",
    date: "16-02-2026",
    image: {
      src: "/google-business.profile.seo.webp",
      alt: "Google Business Profile para PYMEs chilenas",
    },
  },
]
