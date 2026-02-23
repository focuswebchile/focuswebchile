"use client"

import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-posts"

export function HomeBlogSection() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            Últimos Artículos sobre Optimización Web
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.title} className="flex flex-col gap-4 hover:opacity-90 transition-opacity">
              <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted/70 transition-transform duration-300">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <Badge>{post.category}</Badge>
                <div className="flex flex-row gap-2 text-sm items-center text-muted-foreground">
                  <span>Autor</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/logo_focus_web.webp" alt="FocusWeb" />
                    <AvatarFallback>FW</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">FocusWeb</span>
                </div>
                <span className="text-sm text-muted-foreground">• {post.date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <a href={post.href} className="text-xl tracking-tight text-foreground hover:text-primary transition-colors">
                  {post.title}
                </a>
                <p className="text-muted-foreground text-base">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-border/60 bg-card/80 p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
            ¿Quieres ver más ideas para mejorar tu web?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Revisa guías prácticas sobre SEO técnico, velocidad y decisiones clave para que tu sitio se entienda mejor
            en Google y convierta más.
          </p>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
