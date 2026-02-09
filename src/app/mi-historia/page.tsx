import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SobreMiHero } from "./hero"
import { TextRevealByWord } from "@/components/ui/text-reveal-by-word"
import { Layout, MessageCircle, Target } from "lucide-react"
import { DiferenteTimeline } from "./diferente-timeline"

export const metadata: Metadata = {
  title: "Mi historia | Focus Web – Desarrollo web para pymes chilenas",
  description:
    "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a crear páginas web claras, funcionales y confiables.",
  alternates: {
    canonical: "/mi-historia",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/mi-historia",
    title: "Mi historia | Focus Web – Desarrollo web para pymes chilenas",
    description:
      "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a crear páginas web claras, funcionales y confiables.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/opengraph-mi-historia.webp",
        width: 1200,
        height: 630,
        alt: "Mi historia de Focus Web: Felipe y su enfoque en webs para pymes chilenas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi historia | Focus Web – Desarrollo web para pymes chilenas",
    description:
      "Soy Felipe de Focus Web. Ayudo a pymes y emprendedores en Chile a crear páginas web claras, funcionales y confiables.",
    images: ["https://focusweb.cl/opengraph-mi-historia.webp"],
  },
}

export default function SobreMiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <SobreMiHero />
        <section className="w-full py-5 md:py-5">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="min-h-[35vh] flex w-full items-center justify-center">
              <div className="w-full">
                <p className="mx-auto w-full max-w-[18ch] text-center text-4xl font-medium leading-relaxed text-foreground sm:hidden fade-in-up">
                  Quien soy
                </p>
                <TextRevealByWord
                  text="Quien soy"
                  className="hidden w-full sm:block"
                  textClassName="mx-auto w-full max-w-[24ch] px-0 text-center text-5xl md:text-6xl lg:text-7xl leading-relaxed font-medium"
                />
              </div>
            </div>
            <div className="min-h-[45vh] flex w-full items-center justify-center">
              <div className="w-full">
                <div className="mx-auto w-full max-w-[38ch] text-center text-base leading-relaxed text-foreground/70 sm:hidden fade-in-up">
                  <p>Soy Felipe, chileno apasionado por el marketing digital y los viajes.</p>
                  <p className="mt-4">
                    Vivo en Praga, República Checa, desde donde mantengo un lazo fuerte con mi gente en Chile.
                  </p>
                  <p className="mt-4">
                    Mi misión es ayudar a pymes chilenas a tener webs claras, confiables y realmente efectivas:
                    sitios que funcionan sin complicaciones y transmiten confianza desde el primer clic.
                  </p>
                  <p className="mt-4">Eso es lo que hago y por qué lo hago.</p>
                </div>
                <TextRevealByWord
                  text="Soy Felipe, un chileno apasionado por el marketing y los viajes. Aunque hoy vivo en Praga, trabajo codo a codo con emprendedores en Chile. Lo que busco es que te olvides de los problemas técnicos y tengas por fin una web clara y confiable. Me dedico a armar sitios que funcionen sin dramas y que tus clientes amen desde el primer clic. Eso es lo que hago y la razón por la que estoy aquí: para que tu proyecto se vea tan profesional como lo imaginas."
                  className="hidden w-full sm:block"
                  textClassName="mx-auto w-full max-w-[52ch] px-6 sm:px-8 text-center text-2xl md:text-3xl lg:text-4xl leading-snug font-normal text-foreground/70"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold sm:text-5xl md:text-7xl">
                <span className="text-foreground">Lo que</span>{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  me mueve
                </span>
              </h2>
              <p className="text-base text-foreground/70 sm:text-lg">
                Transformamos ideas en webs que funcionan
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-black/5 ring-1 ring-black/5 bg-white/70 p-8 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)] md:h-full md:p-10">
                <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/lo-que-me-mueve.webp"
                    alt="Felipe Ibar | Focus Web"
                    fill
                    className="h-full w-full object-cover opacity-95 saturate-[1.08] contrast-[1.08] brightness-[0.98]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EC]/55 via-[#F4F1EC]/20 to-transparent" />
                </div>
              </div>

              <div className="flex flex-col gap-8 md:h-full">
                <div className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-emerald-400/55 bg-[radial-gradient(1200px_circle_at_0%_0%,rgba(16,185,129,0.08),rgba(255,255,255,0.92),rgba(255,255,255,0.85))] p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(16,185,129,0.25)] md:p-10">
                  <Layout className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100/70 text-emerald-700">
                    Claridad
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                    Diseño con sentido para tu negocio
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                    Mi objetivo es que tu web se vea increíble y, sobre todo, que sea fácil de navegar. Me enfoco en que tus clientes encuentren lo que buscan rápido y sin fricciones, para que tu sitio sea una herramienta que realmente trabaje a tu favor.
                  </p>
                </div>

                <div className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-emerald-400/30 bg-[radial-gradient(1200px_circle_at_0%_0%,rgba(16,185,129,0.08),rgba(255,255,255,0.92),rgba(255,255,255,0.85))] p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(16,185,129,0.25)] md:p-10">
                  <MessageCircle className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100/70 text-emerald-700">
                    Acompañamiento
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                    Transparencia total
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                   Dejemos de lado los tecnicismos. Me gusta explicarte todo de forma simple para que tomemos decisiones juntos. Quiero que entiendas cada paso y sientas que tienes el control total de tu proyecto profesional.
                  </p>
                </div>
                <div className="flex flex-1 flex-col rounded-2xl border border-black/5 ring-1 ring-black/5 border-t-2 border-t-emerald-400/30 bg-[radial-gradient(1200px_circle_at_0%_0%,rgba(16,185,129,0.08),rgba(255,255,255,0.92),rgba(255,255,255,0.85))] p-8 shadow-[0_18px_50px_-34px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(16,185,129,0.25)] md:p-10">
                  <Target className="h-7 w-7 text-primary" aria-hidden="true" />
                  <div className="mt-4 inline-flex w-fit items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100/70 text-emerald-700">
                    Estrategia
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                    Una web que crece contigo
                  </h3>
                  <p className="mt-3 text-base text-foreground/70 sm:text-lg">
                    Construyo tu sitio pensando en el futuro. Será sólido, fácil de mantener y capaz de adaptarse cuando tu negocio crezca. Así, tienes la tranquilidad de que tu inversión está protegida desde el primer día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DiferenteTimeline />
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
            <div className="relative mx-auto max-w-3xl text-center">
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-6xl text-primary/20 md:-top-12 md:text-7xl">
                “
              </span>
              <p className="text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
                Bueno, ahora que me conoces un poco mejor,{" "}
                <span className="text-primary underline decoration-primary/40 underline-offset-4">
                  hablemos
                </span>
                . Cuéntame qué tienes en mente y veamos juntos si una web bien armada es el empujón que tu negocio
                necesita hoy.
              </p>
              <span className="pointer-events-none absolute -bottom-10 right-6 text-6xl text-primary/20 md:-bottom-12 md:text-7xl">
                ”
              </span>
            </div>
            <p className="mt-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
              Felipe / Focus Web
            </p>
          </div>
        </section>
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 px-8 py-10 md:px-12 md:py-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                    Un primer paso
                  </p>
                  <h3 className="text-3xl font-semibold text-foreground md:text-4xl">
                    Hablemos de tu proyecto
                  </h3>
                  <p className="text-base text-foreground/70 md:text-lg">
                    Para entender tu idea y ver si una web bien hecha puede ayudarte
                  </p>
                </div>
                <a
                  href="https://wa.me/420733796959"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  Conversemos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
