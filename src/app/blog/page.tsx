import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog | FocusWeb",
  description: "Ideas, guías y consejos sobre diseño web y presencia digital para emprendedores en Chile.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/blog",
    title: "Blog | FocusWeb",
    description: "Ideas, guías y consejos sobre diseño web y presencia digital para emprendedores en Chile.",
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
    title: "Blog | FocusWeb",
    description: "Ideas, guías y consejos sobre diseño web y presencia digital para emprendedores en Chile.",
    images: ["https://focusweb.cl/og-home.png?v=2026-01-19"],
  },
}

const posts = [
  {
    category: "Comparativa",
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
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mt-4">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10 transition-transform duration-300">
                <Image
                  src={posts[0].image.src}
                  alt={posts[0].image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                  priority
                />
              </div>
            </div>
            <article className="mt-6 flex flex-col gap-4 hover:opacity-90 transition-opacity">
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <Badge>{posts[0].category}</Badge>
                <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                  <span>Autor</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/logo.png" alt="FocusWeb" />
                    <AvatarFallback>FW</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">FocusWeb</span>
                </div>
                <span className="text-sm text-muted-foreground">• {posts[0].date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={posts[0].href}
                  className="block max-w-3xl text-2xl tracking-tight text-foreground hover:text-primary transition-colors"
                >
                  {posts[0].title}
                </a>
                <p className="max-w-3xl text-muted-foreground text-base">{posts[0].excerpt}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="w-full pt-0 pb-16 lg:pb-20 px-4 sm:px-6">
          <div className="container mx-auto flex flex-col gap-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.title} className="flex flex-col gap-4 hover:opacity-90 transition-opacity">
                  <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted/70 transition-transform duration-300">
                    {post.image ? (
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
                    )}
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 items-center">
                    <Badge>{post.category}</Badge>
                    <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                      <span>Autor</span>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/logo.png" alt="FocusWeb" />
                        <AvatarFallback>FW</AvatarFallback>
                      </Avatar>
                      <span className="text-foreground">FocusWeb</span>
                    </div>
                    <span className="text-sm text-muted-foreground">• {post.date}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={post.href}
                      className="max-w-3xl text-2xl tracking-tight text-foreground hover:text-primary transition-colors"
                    >
                      {post.title}
                    </a>
                    <p className="max-w-3xl text-muted-foreground text-base">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
