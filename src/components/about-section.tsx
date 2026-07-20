import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function AboutSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start lg:gap-16">
          <div className="mx-auto w-72 shrink-0 sm:w-80 lg:order-2 lg:mx-0 lg:w-full">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/sobremi.png"
                alt="Felipe Ibar, fundador de FocusWeb"
                width={1024}
                height={1283}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Sobre mí
            </p>
            <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
              No hago solamente<br />
              páginas web
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trabajo toda la estrategia digital de tu negocio: sitio web, SEO, automatizaciones y
              contenido. La idea es simple: que todas las piezas trabajen juntas para atraer más
              clientes y hacerte la vida más fácil.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Soy Felipe, y prefiero construir relaciones de largo plazo antes que entregar un
              proyecto y desaparecer.
            </p>
            <Link
              href="/mi-historia"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
            >
              Conocer mi historia completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
