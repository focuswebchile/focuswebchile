import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollButton } from "@/components/ui/scroll-button"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import {
  AlertTriangle,
  BadgeCheck,
  BadgeInfo,
  Calendar,
  CalendarCheck,
  Calculator,
  Check,
  CreditCard,
  Building2,
  BookOpen,
  Contact,
  Computer,
  Globe2,
  FileText,
  Gavel,
  Globe,
  HardDrive,
  History,
  Info,
  ImageIcon,
  Layers,
  Lock,
  Lightbulb,
  LayoutGrid,
  ListChecks,
  Mail,
  Megaphone,
  Instagram,
  MailOpen,
  MapPin,
  Link2,
  Phone,
  Monitor,
  Package,
  Palette,
  PenTool,
  Plug,
  PenLine,
  Rocket,
  RotateCcw,
  Scale,
  Search,
  Share2,
  Ticket,
  Shuffle,
  Server,
  ShieldCheck,
  Shield,
  Smartphone,
  PieChart,
  Sparkles,
  Store,
  FlaskConical,
  Wallet,
  Tag,
  TrendingUp,
  Truck,
  UserCheck,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Checklist ecommerce | Focus Web",
  description:
    "Checklist ecommerce con 47 puntos clave para lanzar tu tienda online en Chile con orden, seguridad y claridad.",
  alternates: {
    canonical: "/check-list-ecommerce/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://focusweb.cl/check-list-ecommerce/",
    title: "Checklist ecommerce | Focus Web",
    description:
      "Checklist ecommerce con 47 puntos clave para lanzar tu tienda online en Chile con orden, seguridad y claridad.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/check-list-e-commerce.webp",
        width: 1200,
        height: 630,
        alt: "Checklist ecommerce Focus Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checklist ecommerce | Focus Web",
    description:
      "Checklist ecommerce con 47 puntos clave para lanzar tu tienda online en Chile con orden, seguridad y claridad.",
    images: ["https://focusweb.cl/check-list-e-commerce.webp"],
  },
}

export default function CheckListEcommercePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh pt-10 md:pt-12 lg:pt-12 xl:pt-0">
        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-9">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block lg:mt-9">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="font-semibold text-foreground">01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Catálogo</div>
                    <div>04 · Pagos</div>
                    <div>05 · Envíos</div>
                    <div>06 · Confianza</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[8%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 1 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:px-6 lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>01/13</span>
                </div>

                <div className="relative mt-4 lg:mt-8 overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]" id="slide-01">
                  <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10" />
                  <div className="absolute -left-40 -bottom-36 h-[420px] w-[420px] rounded-full bg-accent/10" />

                  <div className="relative z-10 flex flex-col gap-12 px-8 py-12 md:px-12 md:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-7/12">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <Layers className="h-4 w-4" aria-hidden="true" />
                        Plan de diseño digital
                      </div>

                      <h1 className="mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
                        Checklist 47 puntos
                        <span className="block text-primary">Tienda Online</span>
                      </h1>

                      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                        La guía técnica y estratégica definitiva para lanzar tu ecommerce sin sorpresas. Asegura
                        calidad, seguridad y ventas desde el día uno.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Server className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              Categoría 1
                            </p>
                            <p className="text-sm font-semibold text-foreground">Técnico &amp; hosting</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3 shadow-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              Categoría 7
                            </p>
                            <p className="text-sm font-semibold text-foreground">Seguridad &amp; confianza</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/95 p-6 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)] md:p-8">
                        <div className="flex items-center justify-between border-b border-border/60 pb-4">
                          <p className="text-base font-semibold text-foreground">Estado del lanzamiento</p>
                          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                            <span className="relative flex h-3 w-3">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                            </span>
                            En progreso
                          </div>
                        </div>

                        <div className="mt-6 space-y-4 text-sm text-foreground/80">
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                              <Check className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Dominio .cl configurado</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                              <Check className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span>Certificado SSL activo</span>
                          </div>
                          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                            <div className="flex items-center gap-3">
                              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                                <PenLine className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-primary">Pasarela de pagos</p>
                                <p className="text-xs text-primary/70">Integrando Webpay…</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="h-6 w-6 rounded border border-border/80" />
                            <span>Políticas de despacho</span>
                          </div>
                        </div>

                        <div className="mt-6 border-t border-border/60 pt-4">
                          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            <span>Completado</span>
                            <span className="text-foreground">40/47 puntos</span>
                          </div>
                          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-2 w-[85%] rounded-full bg-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 bg-white/70 px-8 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground md:px-12">
                    <span>www.focusweb.cl</span>
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                        Febrero 2026
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                        Edición verificada
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                        Guía ecommerce 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">
                    Siguiente: diagnóstico inicial y objetivos de tu tienda online.
                  </p>
                  <ScrollButton targetId="slide-02" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 02
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div className="font-semibold text-foreground">02 · Diagnóstico</div>
                    <div>03 · Catálogo</div>
                    <div>04 · Pagos</div>
                    <div>05 · Envíos</div>
                    <div>06 · Confianza</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[16%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 2 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>02/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-02"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_55%)]" />

                  <div className="relative z-10 flex flex-col gap-12 px-8 py-12 md:px-12 md:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <BadgeInfo className="h-4 w-4" aria-hidden="true" />
                        Introducción
                      </div>
                      <h2 className="mt-8 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                        ¿Por qué necesitas
                        <span className="block text-accent">este checklist?</span>
                      </h2>
                      <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/70 md:text-lg">
                        <p>
                          Lanzar una tienda online no es solo{" "}
                          <span className="font-semibold text-foreground">
                            &quot;subir productos y esperar ventas&quot;
                          </span>
                          . Existen detalles técnicos, legales y de experiencia de usuario que a menudo se pasan por
                          alto.
                        </p>
                        <p>
                          Estos factores invisibles pueden hacer la diferencia entre un lanzamiento exitoso y uno
                          frustrante.
                        </p>
                      </div>

                      <div className="mt-10 rounded-2xl border border-border/60 bg-white/90 p-6 shadow-sm">
                        <div className="flex gap-4">
                          <div className="mt-1 text-primary">
                            <Lightbulb className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-foreground">Experiencia chilena</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Este documento agrupa los{" "}
                              <span className="font-semibold text-foreground">47 puntos esenciales</span> identificados
                              por Focus Web tras ayudar a emprendedores chilenos a digitalizar sus negocios.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                      <div className="relative mx-auto max-w-md space-y-5">
                        <div className="rounded-2xl border border-border/60 bg-white/70 p-5 text-foreground/50 shadow-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
                              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground/60">Sin checklist</p>
                              <p className="text-xs text-foreground/50">
                                Errores técnicos, multas legales, carritos abandonados.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border/60 bg-white p-7 shadow-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Tu guía definitiva
                              </p>
                              <p className="mt-2 text-xl font-semibold text-foreground">Lanzamiento seguro</p>
                            </div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Rocket className="h-6 w-6" aria-hidden="true" />
                            </span>
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="rounded-xl bg-muted/50 p-3">
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground/60">
                                <Server className="h-4 w-4" aria-hidden="true" />
                                Técnico
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-full rounded-full bg-primary" />
                              </div>
                            </div>
                            <div className="rounded-xl bg-muted/50 p-3">
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground/60">
                                <Gavel className="h-4 w-4" aria-hidden="true" />
                                Legal
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-full rounded-full bg-primary" />
                              </div>
                            </div>
                            <div className="rounded-xl bg-muted/50 p-3">
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground/60">
                                <UserCheck className="h-4 w-4" aria-hidden="true" />
                                UX / UI
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-full rounded-full bg-primary" />
                              </div>
                            </div>
                            <div className="rounded-xl bg-muted/50 p-3">
                              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground/60">
                                <Megaphone className="h-4 w-4" aria-hidden="true" />
                                Marketing
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-full rounded-full bg-primary" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center gap-2 text-sm text-foreground/60">
                            <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                            Elimina la incertidumbre
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">
                    Siguiente: estructura base y catálogo de tu tienda online.
                  </p>
                  <ScrollButton targetId="slide-03" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 03
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div className="font-semibold text-foreground">03 · Categorías</div>
                    <div>04 · Pagos</div>
                    <div>05 · Envíos</div>
                    <div>06 · Confianza</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[24%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 3 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>03/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-03"
                >
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
                    <div className="mb-10 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                        Visión general
                      </div>
                      <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                        Estructura del checklist
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
                        Hemos organizado los <span className="font-semibold text-primary">47 puntos esenciales</span> en
                        8 categorías lógicas para facilitar tu proceso de implementación.
                      </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                      {[
                        {
                          title: "Técnico y hosting",
                          desc: "Dominio, SSL, hosting, velocidad y configuración base.",
                          count: 7,
                          Icon: Server,
                        },
                        {
                          title: "Diseño y UX",
                          desc: "Responsividad, navegación, imágenes y experiencia de compra.",
                          count: 10,
                          Icon: Monitor,
                        },
                        {
                          title: "Catálogo",
                          desc: "Fichas, descripciones, categorías y gestión de stock.",
                          count: 8,
                          Icon: Package,
                        },
                        {
                          title: "Pagos",
                          desc: "Pasarelas, facturación electrónica y notificaciones.",
                          count: 7,
                          Icon: CreditCard,
                        },
                        {
                          title: "Logística",
                          desc: "Couriers, costos, seguimiento y zonas de cobertura.",
                          count: 7,
                          Icon: Truck,
                        },
                        {
                          title: "Legales",
                          desc: "Términos, políticas de privacidad y cumplimiento SERNAC.",
                          count: 7,
                          Icon: Gavel,
                        },
                        {
                          title: "Seguridad",
                          desc: "Protección de datos, anti-spam y sellos de confianza.",
                          count: 7,
                          Icon: Shield,
                        },
                        {
                          title: "Marketing",
                          desc: "SEO, analítica, redes sociales y email marketing.",
                          count: 9,
                          Icon: Megaphone,
                        },
                      ].map((item) => {
                        const badgeClass =
                          item.count === 7
                            ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200/70"
                            : item.count === 8
                              ? "bg-sky-100 text-sky-700 ring-1 ring-sky-200/70"
                              : item.count === 9
                                ? "bg-violet-100 text-violet-700 ring-1 ring-violet-200/70"
                                : item.count === 10
                                  ? "bg-amber-100 text-amber-700 ring-1 ring-amber-200/70"
                                  : "bg-muted text-foreground/70 ring-1 ring-border/60"

                        return (
                        <div
                          key={item.title}
                          className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.35)]"
                        >
                          <div>
                            <div className="flex items-start justify-between">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                                <item.Icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${badgeClass}`}
                              >
                                {item.count} puntos
                              </span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
                          </div>
                          <div className="mt-4 h-1.5 w-full rounded-full bg-muted">
                            <div className="h-1.5 w-1/3 rounded-full bg-primary/70" />
                          </div>
                        </div>
                      )})}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      <BadgeInfo className="h-4 w-4 text-primary" aria-hidden="true" />
                      Haz click en cualquier categoría para ver los detalles específicos
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">
                    Siguiente: definición de catálogo, productos y estructura inicial.
                  </p>
                  <ScrollButton targetId="slide-04" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 04
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div className="font-semibold text-foreground">04 · Técnico &amp; hosting</div>
                    <div>05 · Envíos</div>
                    <div>06 · Confianza</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[32%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 4 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>04/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-04"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Server className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 1
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Aspectos técnicos
                        <span className="block text-foreground/40">&amp; hosting</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        La base de tu tienda online. Sin una infraestructura técnica sólida y segura, ningún diseño o
                        producto podrá destacar.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Un hosting con menos del 99.9% de uptime puede significar perder ventas en momentos
                              críticos como CyberDay o Navidad.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Dominio .cl registrado y configurado",
                              desc: "La identidad de tu marca en Chile.",
                              Icon: Globe,
                            },
                            {
                              title: "Hosting profesional contratado",
                              desc: "Mínimo 99.9% uptime garantizado.",
                              Icon: HardDrive,
                            },
                            {
                              title: "Certificado SSL instalado y funcionando",
                              desc: "El candadito verde en la URL es vital para la confianza.",
                              Icon: Lock,
                            },
                            {
                              title: "Configuración de respaldos automáticos",
                              desc: "Backups diarios para prevenir desastres.",
                              Icon: History,
                            },
                            {
                              title: "Configuración de CDN",
                              desc: "Content Delivery Network para mejorar velocidad de carga.",
                              Icon: Zap,
                            },
                            {
                              title: "Plan de hosting escalable",
                              desc: "Preparado para el crecimiento proyectado.",
                              Icon: TrendingUp,
                            },
                            {
                              title: "Emails corporativos configurados",
                              desc: "Ej: contacto@tudominio.cl para profesionalismo.",
                              Icon: Mail,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-x-1 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/70 text-xs text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">
                    Siguiente: estructura de envíos, logística y despachos.
                  </p>
                  <ScrollButton targetId="slide-05" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 05
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div className="font-semibold text-foreground">05 · Diseño &amp; UX</div>
                    <div>06 · Confianza</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[40%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 5 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>05/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-05"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/60" />
                  <div className="absolute -right-16 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-16 bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Palette className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 2
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Diseño y experiencia
                        <span className="block text-foreground/40">de usuario</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        Un diseño atractivo vende, pero una buena experiencia de usuario fideliza. Tu tienda debe ser
                        intuitiva y rápida.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Smartphone className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato móvil</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              En Chile, más del 70% de las visitas a ecommerce provienen de móviles. Si tu sitio falla
                              en celular, pierdes la venta.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            {
                              title: "Diseño responsive",
                              desc: "Optimizado para móvil, tablet y desktop.",
                            },
                            {
                              title: "Velocidad de carga &lt; 3s",
                              desc: "Rápido en todas las páginas.",
                            },
                            {
                              title: "Menú claro y organizado",
                              desc: "Navegación intuitiva por categorías.",
                            },
                            {
                              title: "Buscador interno con filtros",
                              desc: "Para encontrar productos rápido.",
                            },
                            {
                              title: "Carrito siempre visible",
                              desc: "Accesible desde cualquier lugar.",
                            },
                            {
                              title: "Checkout en máximo 3 pasos",
                              desc: "Reduce el abandono de carrito.",
                            },
                            {
                              title: "Breadcrumbs (migas de pan)",
                              desc: "Facilita volver atrás sin perderse.",
                            },
                            {
                              title: "Imágenes HD (800x800px+)",
                              desc: "Calidad que inspire confianza.",
                            },
                            {
                              title: "Zoom en productos",
                              desc: "Permite ver detalles y texturas.",
                            },
                            {
                              title: "Consistencia de marca",
                              desc: "Colores y tipografía unificados.",
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: confianza, sellos y seguridad.</p>
                  <ScrollButton targetId="slide-06" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 06
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div className="font-semibold text-foreground">06 · Catálogo</div>
                    <div>07 · Marketing</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[48%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 6 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>06/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-06"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Package className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 3
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Productos
                        <span className="block text-foreground/40">&amp; catálogo</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        El corazón de tu tienda. Un catálogo bien organizado y atractivo es la clave para convertir
                        visitantes curiosos en compradores seguros.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Las fichas de producto con información incompleta son una de las principales causas de
                              abandono del carrito. No dejes dudas sin responder.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Fichas de producto completas",
                              desc: "Nombre, descripción detallada, precio y stock actual.",
                              Icon: FileText,
                            },
                            {
                              title: "Descripciones únicas",
                              desc: "Contenido original para SEO, no copiado de proveedores.",
                              Icon: PenTool,
                            },
                            {
                              title: "Múltiples imágenes por producto",
                              desc: "Mínimo 3 fotos para mostrar detalles y ángulos.",
                              Icon: ImageIcon,
                            },
                            {
                              title: "Categorización lógica de productos",
                              desc: "Estructura intuitiva que facilita la búsqueda.",
                              Icon: Layers,
                            },
                            {
                              title: "Sistema de variantes (tallas, colores)",
                              desc: "Selectores claros en una sola ficha de producto.",
                              Icon: Palette,
                            },
                            {
                              title: "Productos relacionados o cross-sell",
                              desc: "Sugerencias para aumentar el ticket promedio.",
                              Icon: Shuffle,
                            },
                            {
                              title: "Indicador de stock disponible",
                              desc: "Transparencia que genera urgencia de compra.",
                              Icon: TrendingUp,
                            },
                            {
                              title: "Etiquetas de estado visuales",
                              desc: "Nuevo, oferta, agotado para rápida identificación.",
                              Icon: Tag,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: pagos, checkout y facturación.</p>
                  <ScrollButton targetId="slide-07" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 07
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div className="font-semibold text-foreground">07 · Pagos</div>
                    <div>08 · SEO</div>
                    <div>09 · Analítica</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[56%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 7 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>07/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-07"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <CreditCard className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 4
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Pagos y
                        <span className="block text-foreground/40">facturación</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        Garantiza transacciones seguras y el cumplimiento legal. Un checkout confiable es la clave para
                        convertir carritos en ventas reales.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Automatizar la boleta electrónica ahorra horas de gestión administrativa y evita multas
                              por errores manuales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Pasarela de pagos integrada",
                              desc: "Webpay, Mercado Pago, Flow, etc. funcionando.",
                              Icon: Plug,
                            },
                            {
                              title: "Múltiples métodos de pago",
                              desc: "Ofrece opciones: débito, crédito y transferencia.",
                              Icon: Wallet,
                            },
                            {
                              title: "Pruebas de compra exitosas",
                              desc: "Validación completa en ambiente de prueba.",
                              Icon: FlaskConical,
                            },
                            {
                              title: "Facturación electrónica integrada",
                              desc: "Conexión directa y certificada con el SII.",
                              Icon: FileText,
                            },
                            {
                              title: "Emisión automática de documentos",
                              desc: "Boletas y facturas generadas sin clic manual.",
                              Icon: Sparkles,
                            },
                            {
                              title: "Emails transaccionales automáticos",
                              desc: "Confirmación de pedido y envío de boleta.",
                              Icon: MailOpen,
                            },
                            {
                              title: "Indicadores de seguridad en checkout",
                              desc: "Sellos y certificaciones visibles para dar confianza.",
                              Icon: ShieldCheck,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: confianza, sellos y seguridad.</p>
                  <ScrollButton targetId="slide-08" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 08
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div className="font-semibold text-foreground">08 · Envíos</div>
                    <div>09 · Seguridad</div>
                    <div>10 · Legal</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[64%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 8 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>08/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-08"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Truck className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 5
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Envíos y
                        <span className="block text-foreground/40">logística</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        La experiencia de compra no termina en el pago, sino cuando el cliente recibe su producto. Una
                        logística clara y eficiente es clave para la fidelización.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Los costos de envío “sorpresa” son la causa #1 de abandono de carritos. Sé transparente
                              desde el principio.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Integración con courier(s)",
                              desc: "Cálculo automático de envío para evitar pérdidas.",
                              Icon: Calculator,
                            },
                            {
                              title: "Múltiples opciones de despacho",
                              desc: "Starken, Blue Express, Chilexpress y más.",
                              Icon: Truck,
                            },
                            {
                              title: "Zonas de cobertura definidas",
                              desc: "Claridad sobre dónde llegas y dónde no.",
                              Icon: MapPin,
                            },
                            {
                              title: "Costos de envío transparentes",
                              desc: "Visibles antes del checkout para evitar abandonos.",
                              Icon: Tag,
                            },
                            {
                              title: "Opción de retiro en tienda",
                              desc: "Punto de encuentro o local físico (si aplica).",
                              Icon: Store,
                            },
                            {
                              title: "Sistema de tracking",
                              desc: "Seguimiento de pedidos fácil para el cliente.",
                              Icon: Search,
                            },
                            {
                              title: "Tiempos de entrega estimados",
                              desc: "Fechas realistas y visibles en la compra.",
                              Icon: CalendarCheck,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: sellos y seguridad para generar confianza.</p>
                  <ScrollButton targetId="slide-09" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 09
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div>08 · Envíos</div>
                    <div className="font-semibold text-foreground">09 · Legales</div>
                    <div>10 · Confianza</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[72%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 9 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>09/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-09"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Scale className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 6
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Legales
                        <span className="block text-foreground/40">&amp; políticas</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        La transparencia legal no es solo un requisito, es la base de la confianza. Cumple con la
                        normativa chilena y protege tanto a tu negocio como a tus clientes.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              La Ley del Consumidor en Chile exige informar claramente sobre el derecho a retracto.
                              Omitir esto puede derivar en multas y pérdida de credibilidad.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Política de privacidad publicada",
                              desc: "Accesible y clara sobre el uso de datos.",
                              Icon: Shield,
                            },
                            {
                              title: "Términos y condiciones de uso claros",
                              desc: "Las reglas del juego bien definidas.",
                              Icon: FileText,
                            },
                            {
                              title: "Política de cambios y devoluciones",
                              desc: "Detallada para evitar fricciones post-venta.",
                              Icon: RotateCcw,
                            },
                            {
                              title: "Información de contacto completa",
                              desc: "Teléfono, email y dirección física visibles.",
                              Icon: Contact,
                            },
                            {
                              title: "Razón social y RUT visible",
                              desc: "Obligatorio para validar la existencia legal.",
                              Icon: Building2,
                            },
                            {
                              title: "Cumplimiento Ley del Consumidor",
                              desc: "Alineado con normativas del SERNAC.",
                              Icon: Gavel,
                            },
                            {
                              title: "Libro de reclamos digital",
                              desc: "Si aplica según volumen o exigencia legal.",
                              Icon: BookOpen,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: sellos y seguridad para generar confianza.</p>
                  <ScrollButton targetId="slide-10" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 10
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div>08 · Envíos</div>
                    <div>09 · Legales</div>
                    <div className="font-semibold text-foreground">10 · Seguridad</div>
                    <div>11 · Soporte</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[80%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 10 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>10/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-10"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 7
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Seguridad
                        <span className="block text-foreground/40">&amp; confianza</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        La confianza es la moneda de cambio en el ecommerce. Si el cliente no se siente seguro, no
                        comprará, sin importar cuán bueno sea el producto.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <Info className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Alrededor del 17% de los carritos abandonados se deben a preocupaciones sobre la seguridad
                              del pago. Muestra tus sellos claramente.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Certificado SSL activo y visible",
                              desc: "Encriptación de datos vital para la seguridad.",
                              Icon: Lock,
                            },
                            {
                              title: "Plugin de seguridad instalado y actualizado",
                              desc: "Barrera activa contra malware e intrusiones.",
                              Icon: Shield,
                            },
                            {
                              title: "Sistema anti-spam en formularios",
                              desc: "Protección contra bots (ej. reCAPTCHA).",
                              Icon: AlertTriangle,
                            },
                            {
                              title: "Protección contra ataques DDoS básica",
                              desc: "Asegura la disponibilidad continua de tu tienda.",
                              Icon: Zap,
                            },
                            {
                              title: "Reseñas de clientes visibles",
                              desc: "Prueba social real para generar confianza inmediata.",
                              Icon: BadgeCheck,
                            },
                            {
                              title: "Sellos de confianza visibles",
                              desc: "Cámara de Comercio, certificaciones, logos de seguridad.",
                              Icon: BadgeInfo,
                            },
                            {
                              title: "Política de protección de datos personales",
                              desc: "Conforme a la ley, explicando el uso de información.",
                              Icon: FileText,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: soporte y operación diaria.</p>
                  <ScrollButton targetId="slide-11" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 11
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div>08 · Envíos</div>
                    <div>09 · Legales</div>
                    <div>10 · Seguridad</div>
                    <div className="font-semibold text-foreground">11 · Marketing</div>
                    <div>12 · Lanzamiento</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[88%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 11 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>11/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-11"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Megaphone className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Categoría 8
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                        Marketing
                        <span className="block text-foreground/40">&amp; SEO</span>
                      </h2>
                      <p className="mt-4 text-base text-foreground/70 md:text-lg">
                        Si nadie conoce tu tienda, nadie compra. Prepara tu ecommerce para ser visible en Google y
                        efectivo en redes sociales.
                      </p>

                      <div className="mt-8 rounded-2xl border border-primary/20 bg-white/90 p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <PieChart className="h-6 w-6 text-primary" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Dato clave</p>
                            <p className="mt-2 text-sm text-foreground/60">
                              Configurar Google Analytics y el Pixel desde el día 1 es crucial para tener datos
                              históricos y poder hacer remarketing efectivo después.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="grid gap-4">
                          {[
                            {
                              title: "Google Analytics instalado",
                              desc: "Para medir tráfico y conversiones.",
                              Icon: TrendingUp,
                            },
                            {
                              title: "Google Search Console configurado",
                              desc: "Monitorea la salud de tu sitio en Google.",
                              Icon: Search,
                            },
                            {
                              title: "Pixel de Facebook/Instagram instalado",
                              desc: "Esencial para futuras campañas de anuncios.",
                              Icon: Instagram,
                            },
                            {
                              title: "Meta descripciones únicas",
                              desc: "Optimizadas para SEO en páginas principales.",
                              Icon: Search,
                            },
                            {
                              title: "URLs amigables",
                              desc: "Limpias y legibles (sin códigos extraños).",
                              Icon: Link2,
                            },
                            {
                              title: "Sistema de cupones funcional",
                              desc: "Para promociones de lanzamiento.",
                              Icon: Ticket,
                            },
                            {
                              title: "Email marketing configurado",
                              desc: "Plataforma lista para captar suscriptores.",
                              Icon: MailOpen,
                            },
                            {
                              title: "Botones de compartir en RRSS",
                              desc: "Facilita que los usuarios viralicen tu contenido.",
                              Icon: Share2,
                            },
                            {
                              title: "Integración con redes sociales",
                              desc: "Links visibles a tus perfiles oficiales.",
                              Icon: Instagram,
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-sm"
                            >
                              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 text-[10px] text-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <Check className="h-3 w-3" aria-hidden="true" />
                              </span>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="mt-1 text-xs text-foreground/60">{item.desc}</p>
                              </div>
                              <item.Icon className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: checklist final y lanzamiento.</p>
                  <ScrollButton targetId="slide-12" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 12
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div>08 · Envíos</div>
                    <div>09 · Legales</div>
                    <div>10 · Seguridad</div>
                    <div>11 · Marketing</div>
                    <div className="font-semibold text-foreground">12 · Progreso</div>
                    <div>13 · Checklist final</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-[92%] rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 12 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>12/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-12"
                >
                  <div className="absolute left-0 top-0 h-2 w-full bg-primary/70" />
                  <div className="absolute -right-20 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-8 px-8 py-12 md:px-12 md:py-16 lg:flex-row">
                    <div className="w-full lg:w-1/3">
                      <div className="rounded-3xl border border-border/60 bg-white p-8 text-center shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)]">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <PieChart className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">Estado general</h3>
                        <p className="text-sm text-foreground/60">Progreso de implementación</p>

                        <div className="relative mx-auto mt-6 h-48 w-48">
                          <svg className="h-full w-full" viewBox="0 0 200 200">
                            <circle
                              cx="100"
                              cy="100"
                              r="82"
                              className="text-muted"
                              stroke="currentColor"
                              strokeWidth="14"
                              fill="none"
                            />
                            <circle
                              cx="100"
                              cy="100"
                              r="82"
                              className="text-primary"
                              stroke="currentColor"
                              strokeWidth="14"
                              fill="none"
                              strokeDasharray="515"
                              strokeDashoffset="77"
                              strokeLinecap="round"
                              transform="rotate(-90 100 100)"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-semibold text-foreground">85%</span>
                            <span className="mt-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              40/47 puntos
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 text-sm text-foreground/60">
                          <span className="inline-flex items-center gap-2 font-semibold text-primary">
                            <Rocket className="h-4 w-4" aria-hidden="true" />
                            Listo para lanzar
                          </span>
                          <p className="mt-2 text-xs text-foreground/50">
                            Has completado el mínimo requerido. Puedes lanzar y ajustar el resto post-lanzamiento.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="rounded-3xl border border-border/60 bg-white/70 p-6 md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <h3 className="text-lg font-semibold text-foreground">Desglose por categoría</h3>
                          <div className="flex items-center gap-4 text-xs font-semibold text-foreground/50">
                            <span className="inline-flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary" />
                              Completado
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-muted" />
                              Pendiente
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          {[
                            { label: "Técnico & hosting", value: "7/7", pct: "100%", Icon: Server },
                            { label: "Diseño & UX", value: "10/10", pct: "100%", Icon: Monitor },
                            { label: "Productos", value: "8/8", pct: "100%", Icon: Package },
                            { label: "Pagos", value: "7/7", pct: "100%", Icon: CreditCard },
                            { label: "Envíos", value: "5/7", pct: "71%", Icon: Truck },
                            { label: "Legales", value: "3/7", pct: "42%", Icon: Gavel },
                            { label: "Seguridad", value: "4/7", pct: "57%", Icon: Shield },
                            { label: "Marketing", value: "0/9", pct: "0%", Icon: Megaphone },
                          ].map((row) => (
                            <div key={row.label} className="rounded-2xl border border-border/60 bg-white p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <row.Icon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                  <span className="text-sm font-semibold text-foreground">{row.label}</span>
                                </div>
                                <span className="text-sm font-semibold text-primary">{row.value}</span>
                              </div>
                              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                                <div className="h-2 rounded-full bg-primary" style={{ width: row.pct }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-primary/80">
                          <span className="font-semibold text-primary">Siguiente paso:</span> Enfócate en “Envíos” y
                          “Legales” antes del lanzamiento. Marketing puede configurarse en paralelo durante la primera
                          semana.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/60">Siguiente: checklist final y próximos pasos.</p>
                  <ScrollButton targetId="slide-13" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                    Continuar con la sección 13
                  </ScrollButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <div className="space-y-6 rounded-2xl border border-border/60 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Guía ecommerce
                  </p>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div>01 · Portada</div>
                    <div>02 · Diagnóstico</div>
                    <div>03 · Categorías</div>
                    <div>04 · Técnico &amp; hosting</div>
                    <div>05 · Diseño &amp; UX</div>
                    <div>06 · Catálogo</div>
                    <div>07 · Pagos</div>
                    <div>08 · Envíos</div>
                    <div>09 · Legales</div>
                    <div>10 · Seguridad</div>
                    <div>11 · Marketing</div>
                    <div>12 · Progreso</div>
                    <div className="font-semibold text-foreground">13 · Lanzamiento</div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Progreso
                    </p>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 w-full rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-foreground/60">Sección 13 de 13</p>
                  </div>
                </div>
              </aside>

              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                  <span>Guía ecommerce</span>
                  <span>13/13</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.35)]"
                  id="slide-13"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_60%)]" />

                  <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:px-12 md:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-3/5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                        Misión cumplida
                      </div>
                      <h2 className="mt-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                        Lanza tu ecommerce
                        <span className="block text-primary">sin sorpresas</span>
                      </h2>
                      <p className="mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
                        En Focus Web nos especializamos en crear tiendas online profesionales para el mercado chileno.
                        Conocemos cada detalle de este checklist porque lo vivimos a diario.
                      </p>

                      <div className="mt-6 space-y-3 text-sm text-foreground/70">
                        {[
                          "Costos claros y plazos realistas desde el día uno.",
                          "Asesoría experta en integraciones locales (Webpay, couriers).",
                          "Soporte técnico post-lanzamiento.",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                          href="https://wa.me/420733796959"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Agenda tu consultoría
                        </a>
                        <p className="text-sm font-medium text-foreground/50">Gratis &amp; sin compromiso</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/5">
                      <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)]">
                        <div className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Computer className="h-8 w-8" aria-hidden="true" />
                          </div>
                          <h3 className="mt-4 text-xl font-semibold text-foreground">Hablemos</h3>
                          <p className="mt-2 text-sm text-foreground/60">
                            Estamos listos para potenciar tu negocio.
                          </p>
                        </div>

                        <div className="mt-6 space-y-3">
                          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Globe2 className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Sitio web
                              </p>
                              <p className="text-sm font-semibold text-foreground">www.focusweb.cl</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Mail className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Email
                              </p>
                              <p className="text-sm font-semibold text-foreground">Formulario de contacto directo</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-4 py-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Phone className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                WhatsApp
                              </p>
                              <p className="text-sm font-semibold text-foreground">+420 733 796 959</p>
                            </div>
                          </div>
                        </div>

                        <p className="mt-6 text-center text-xs text-foreground/40">
                          Focus Web © 2026. Todos los derechos reservados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
