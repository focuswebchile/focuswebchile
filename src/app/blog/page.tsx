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
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/",
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
    category: "Guía",
    title: "Cómo crear una página web en Chile: guía clara para negocios y pymes",
    excerpt:
      "Todo lo que necesitas saber para elegir bien entre landing, web completa o tienda online, sin tecnicismos.",
  },
  {
    category: "Consejos",
    title: "Crear una página web desde cero: pasos reales (sin tecnicismos)",
    excerpt:
      "Guía paso a paso para emprendedores y pymes que quieren crear su web desde cero, sin enredos.",
    href: "/crear-pagina-web-desde-cero/",
  },
  {
    category: "Tendencias",
    title: "Qué necesitas para crear una página web (y qué no)",
    excerpt:
      "Un resumen claro para no sobredimensionar tu web: lo esencial es objetivo, contenido y un contacto visible.",
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
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
                <Image
                  src="/como-crea-una-pagina-web-en-chile.webp"
                  alt="Cómo crear una página web en Chile"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                  priority
                />
              </div>
            </div>
            <article className="mt-6 flex flex-col gap-4 hover:opacity-90 transition-opacity">
              <div className="flex flex-row gap-4 items-center">
                <Badge>{posts[0].category}</Badge>
                <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                  <span>Autor</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/logo.png" alt="FocusWeb" />
                    <AvatarFallback>FW</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">FocusWeb</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="/blog/como-crear-una-pagina-web-en-chile/"
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
                  {post.href ? (
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted/70">
                      <Image
                        src="/web-desde-cero-focusweb.webp"
                        alt="Crear una página web desde cero"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted/70">
                      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                          Pronto más artículos
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-row gap-4 items-center">
                    <Badge>{post.category}</Badge>
                    <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                      <span>Autor</span>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/logo.png" alt="FocusWeb" />
                        <AvatarFallback>FW</AvatarFallback>
                      </Avatar>
                      <span className="text-foreground">FocusWeb</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {post.href ? (
                      <a
                        href={post.href}
                        className="max-w-3xl text-2xl tracking-tight text-foreground hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    ) : (
                      <h3 className="max-w-3xl text-2xl tracking-tight text-foreground">{post.title}</h3>
                    )}
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
