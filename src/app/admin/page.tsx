"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://focusweb-backend-production.up.railway.app"
const DEFAULT_SITE_SLUG = process.env.NEXT_PUBLIC_SITE_SLUG

const TOKEN_KEY = "focusweb_admin_token"

type Site = {
  id: string
  name: string
  slug: string
}

type SiteSettings = {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
  }
  typography: {
    fontFamily: string
    baseSize: string
    lineHeight: string
  }
  content: {
    hero: {
      title: string
      subtitle: string
      cta: {
        primary_text: string
        primary_url: string
      }
    }
    services: {
      title: string
      subtitle: string
      items: Array<{
        title: string
        description: string
      }>
    }
    contact: {
      title: string
      subtitle: string
      link: string
    }
    faqs: Array<{
      question: string
      answer: string
    }>
  }
  toggles: {
    showServices: boolean
    showTestimonials: boolean
    showFAQ: boolean
    showProcess: boolean
    showContact: boolean
  }
}

const defaultSettings: SiteSettings = {
  colors: {
    primary: "#22C55E",
    secondary: "#3B82F6",
    background: "#F4F7F6",
    text: "#0F172A",
  },
  typography: {
    fontFamily: "Poppins",
    baseSize: "16px",
    lineHeight: "1.6",
  },
  content: {
    hero: {
      title: "",
      subtitle: "",
      cta: {
        primary_text: "",
        primary_url: "",
      },
    },
    services: {
      title: "",
      subtitle: "",
      items: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
    contact: {
      title: "",
      subtitle: "",
      link: "",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta una página web en Chile?",
        answer:
          "Depende del tipo de proyecto: básica ($180.000 - $600.000), corporativa ($350.000 - $1.200.000), e-commerce ($650.000 - $2.000.000+) o proyectos personalizados (desde $3.000.000). A esto se suman hosting, dominio y mantenimiento anual.",
      },
      {
        question: "¿Cómo se calcula el valor de una página web?",
        answer:
          "Se considera diseño, número de páginas, funcionalidades, integraciones, SEO y seguridad. También se puede calcular por horas de trabajo o sumando costos de dominio, hosting, diseño, desarrollo y contenido.",
      },
      {
        question: "¿Cuál es la inversión real de una web?",
        answer:
          "Incluye diseño y desarrollo, dominio, hosting, SSL, SEO y mantenimiento. Un proyecto básico puede costar $300.000 - $800.000, uno medio $800.000 - $2.500.000 y e-commerce $2.000.000 - $6.000.000.",
      },
    ],
  },
  toggles: {
    showServices: true,
    showTestimonials: true,
    showFAQ: true,
    showProcess: true,
    showContact: true,
  },
}

const THEME_CACHE_KEY = "focusweb_theme_settings"
const HERO_CACHE_KEY = "focusweb_hero_content"
const SERVICES_CACHE_KEY = "focusweb_services_content"
const CONTACT_CACHE_KEY = "focusweb_contact_content"
const FAQ_CACHE_KEY = "focusweb_faq_content"
const TOGGLES_CACHE_KEY = "focusweb_section_toggles"

const buildCacheKey = (key: string, slug: string) => `${key}:${slug}`

const normalizeSettings = (raw: SiteSettings | any): SiteSettings => {
  if (!raw) return defaultSettings

  if (raw.content?.hero?.title) {
    return {
      ...defaultSettings,
      ...raw,
      toggles: {
        ...defaultSettings.toggles,
        ...(raw.toggles ?? {}),
      },
      content: {
        ...defaultSettings.content,
        ...raw.content,
        hero: {
          ...defaultSettings.content.hero,
          ...(raw.content?.hero ?? {}),
          cta: {
            ...defaultSettings.content.hero.cta,
            ...(raw.content?.hero?.cta ?? {}),
          },
        },
        services: {
          ...defaultSettings.content.services,
          ...(Array.isArray(raw.content?.services) ? {} : (raw.content?.services ?? {})),
          items: Array.isArray(raw.content?.services)
            ? raw.content?.services
            : Array.isArray(raw.content?.services?.items)
            ? raw.content?.services?.items
            : defaultSettings.content.services.items,
        },
        contact: {
          ...defaultSettings.content.contact,
          ...(raw.content?.contact ?? {}),
        },
        faqs: Array.isArray(raw.content?.faqs)
          ? raw.content?.faqs
          : defaultSettings.content.faqs,
      },
    }
  }

  const legacyContent = raw.content ?? {}
  return {
    ...defaultSettings,
    ...raw,
    toggles: {
      ...defaultSettings.toggles,
      ...(raw.toggles ?? {}),
    },
    content: {
      ...defaultSettings.content,
      hero: {
        title: legacyContent.hero_title ?? defaultSettings.content.hero.title,
        subtitle: legacyContent.hero_subtitle ?? defaultSettings.content.hero.subtitle,
        cta: {
          primary_text: legacyContent.primary_cta_text ?? defaultSettings.content.hero.cta.primary_text,
          primary_url: legacyContent.primary_cta_url ?? defaultSettings.content.hero.cta.primary_url,
        },
      },
      services: {
        title: legacyContent.services?.title ?? defaultSettings.content.services.title,
        subtitle:
          legacyContent.services?.subtitle ??
          legacyContent.services?.intro ??
          defaultSettings.content.services.subtitle,
        items: Array.isArray(legacyContent.services)
          ? legacyContent.services
          : Array.isArray(legacyContent.services?.items)
          ? legacyContent.services?.items
          : [
              legacyContent.services?.items?.service_1 ?? defaultSettings.content.services.items[0],
              legacyContent.services?.items?.service_2 ?? defaultSettings.content.services.items[1],
              legacyContent.services?.items?.service_3 ?? defaultSettings.content.services.items[2],
            ],
      },
      contact: {
        title: legacyContent.contact?.title ?? defaultSettings.content.contact.title,
        subtitle: legacyContent.contact?.subtitle ?? defaultSettings.content.contact.subtitle,
        link: legacyContent.contact?.link ?? defaultSettings.content.contact.link,
      },
      faqs: Array.isArray(legacyContent.faqs)
        ? legacyContent.faqs
        : [
            {
              question: legacyContent.faq?.question_1 ?? defaultSettings.content.faqs[0].question,
              answer: legacyContent.faq?.answer_1 ?? defaultSettings.content.faqs[0].answer,
            },
            {
              question: legacyContent.faq?.question_2 ?? defaultSettings.content.faqs[1].question,
              answer: legacyContent.faq?.answer_2 ?? defaultSettings.content.faqs[1].answer,
            },
            {
              question: legacyContent.faq?.question_3 ?? defaultSettings.content.faqs[2].question,
              answer: legacyContent.faq?.answer_3 ?? defaultSettings.content.faqs[2].answer,
            },
          ],
    },
  }
}

const updateLocalCaches = (settings: SiteSettings, siteSlug: string) => {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(
      buildCacheKey(THEME_CACHE_KEY, siteSlug),
      JSON.stringify({ colors: settings.colors, typography: settings.typography }),
    )
    window.localStorage.setItem(
      buildCacheKey(HERO_CACHE_KEY, siteSlug),
      JSON.stringify({
        title: settings.content.hero.title,
        subtitle: settings.content.hero.subtitle,
        ctaText: settings.content.hero.cta.primary_text,
        ctaUrl: settings.content.hero.cta.primary_url,
      }),
    )
    window.localStorage.setItem(
      buildCacheKey(SERVICES_CACHE_KEY, siteSlug),
      JSON.stringify({
        title: settings.content.services.title,
        subtitle: settings.content.services.subtitle,
        items: settings.content.services.items,
      }),
    )
    window.localStorage.setItem(
      buildCacheKey(CONTACT_CACHE_KEY, siteSlug),
      JSON.stringify({
        title: settings.content.contact.title,
        subtitle: settings.content.contact.subtitle,
        link: settings.content.contact.link,
      }),
    )
    window.localStorage.setItem(
      buildCacheKey(FAQ_CACHE_KEY, siteSlug),
      JSON.stringify(settings.content.faqs),
    )
    window.localStorage.setItem(
      buildCacheKey(TOGGLES_CACHE_KEY, siteSlug),
      JSON.stringify(settings.toggles),
    )
  } catch (error) {
    // Ignore cache errors.
  }
}

export default function AdminPage() {
  const [email, setEmail] = useState("focuswebchile@gmail.com")
  const [token, setToken] = useState<string | null>(null)
  const [sites, setSites] = useState<Site[]>([])
  const [site, setSite] = useState<Site | null>(null)
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [saveStatus, setSaveStatus] = useState<string | null>(null)
  const serviceItems = settings.content.services.items ?? defaultSettings.content.services.items

  useEffect(() => {
    if (typeof window === "undefined") return
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const params = new URLSearchParams(hash)
      const accessToken = params.get("access_token")
      if (accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
        setToken(accessToken)
        setStatus("Sesión iniciada. Cargando datos...")
        window.history.replaceState(null, "", window.location.pathname)
      }
    }
    const stored = localStorage.getItem(TOKEN_KEY)
    if (stored) {
      setToken(stored)
    }
  }, [])

  useEffect(() => {
    if (!token) return
    const load = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${BACKEND_URL}/api/me/sites`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!response.ok) {
          throw new Error("No autorizado")
        }
        const payload = await response.json()
        const availableSites: Site[] = payload.sites ?? []
        if (!availableSites.length) {
          throw new Error("No hay sitios asociados")
        }
        setSites(availableSites)

        const preferred = DEFAULT_SITE_SLUG
          ? availableSites.find((entry) => entry.slug === DEFAULT_SITE_SLUG)
          : undefined
        setSite(preferred ?? availableSites[0])
        setStatus("Datos cargados correctamente.")
      } catch (error) {
        setStatus("No fue posible validar la sesión. Inicia sesión nuevamente.")
        localStorage.removeItem(TOKEN_KEY)
        setToken(null)
        setSite(null)
        setSites([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [token])

  useEffect(() => {
    if (!token || !site) return
    const loadSettings = async () => {
      setLoading(true)
      try {
        const settingsResponse = await fetch(`${BACKEND_URL}/api/sites/${site.slug}/settings`)
        if (!settingsResponse.ok) {
          throw new Error("No se pudieron cargar los settings")
        }
        const settingsPayload = await settingsResponse.json()
        setSettings(normalizeSettings(settingsPayload.settings))
      } catch (error) {
        setStatus("No se pudieron cargar los settings del sitio seleccionado.")
      } finally {
        setLoading(false)
      }
    }
    loadSettings()
  }, [site, token])

  const handleSendMagicLink = async () => {
    setLoading(true)
    setStatus(null)
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/magic-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        throw new Error("No se pudo enviar el correo")
      }
      setStatus("Revisa tu correo y abre el link para iniciar sesión.")
    } catch (error) {
      setStatus("No se pudo enviar el magic link. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!site || !token) return
    setLoading(true)
    setStatus(null)
    setSaveStatus("Guardando cambios...")
    try {
      const response = await fetch(`${BACKEND_URL}/api/sites/${site.id}/settings`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        const message = payload?.error ?? "No se pudieron guardar los cambios"
        throw new Error(message)
      }
      updateLocalCaches(settings, site.slug)
      setSaveStatus("Cambios guardados correctamente.")
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : "No se pudieron guardar los cambios.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setSite(null)
    setStatus("Sesión cerrada.")
  }

  return (
    <main className="min-h-screen bg-background gradient-mesh">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Panel administrativo</p>
              <h1 className="text-3xl sm:text-4xl font-semibold">FocusWeb Admin</h1>
              <p className="text-muted-foreground mt-2">
                Edita colores, tipografías, textos clave y visibilidad de secciones.
              </p>
            </div>
            <Link href="/" className="text-sm text-primary hover:underline">
              Volver al sitio
            </Link>
          </div>

          {status && (
            <div className="rounded-xl border border-border/50 bg-card/70 px-4 py-3 text-sm text-muted-foreground">
              {status}
            </div>
          )}

          {!token ? (
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-6">
              <h2 className="text-lg font-semibold">Iniciar sesión</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Recibirás un magic link para acceder al panel.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  className="h-11 flex-1 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="correo@empresa.com"
                />
                <Button onClick={handleSendMagicLink} disabled={loading || !email}>
                  Enviar magic link
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Sitio activo</p>
                  {sites.length > 1 ? (
                    <div className="mt-2">
                      <label className="text-xs text-muted-foreground">Selecciona sitio</label>
                      <select
                        className="mt-1 h-10 w-full rounded-xl border border-border/60 bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        value={site?.id ?? ""}
                        onChange={(event) => {
                          const next = sites.find((entry) => entry.id === event.target.value)
                          if (next) {
                            setSite(next)
                          }
                        }}
                      >
                        {sites.map((entry) => (
                          <option key={entry.id} value={entry.id}>
                            {entry.name} ({entry.slug})
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg font-semibold">{site?.name ?? "Cargando..."}</p>
                      <p className="text-xs text-muted-foreground">Slug: {site?.slug}</p>
                    </>
                  )}
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </div>

              <section className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold">Colores</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                  {(["primary", "secondary", "background", "text"] as const).map((field) => (
                    <label key={field} className="min-w-0 text-sm text-muted-foreground flex flex-col gap-2">
                      <span className="capitalize">{field}</span>
                      <input
                        type="text"
                        className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        value={settings.colors[field]}
                        onChange={(event) =>
                          setSettings((prev) => ({
                            ...prev,
                            colors: { ...prev.colors, [field]: event.target.value },
                          }))
                        }
                      />
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold">Tipografía</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {(["baseSize", "lineHeight"] as const).map((field) => (
                    <label key={field} className="min-w-0 text-sm text-muted-foreground flex flex-col gap-2">
                      <span className="capitalize">{field}</span>
                      <input
                        type="text"
                        className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        value={settings.typography[field]}
                        onChange={(event) =>
                          setSettings((prev) => ({
                            ...prev,
                            typography: { ...prev.typography, [field]: event.target.value },
                          }))
                        }
                      />
                    </label>
                  ))}
                  <label className="min-w-0 text-sm text-muted-foreground flex flex-col gap-2">
                    <span>Font family</span>
                    <select
                      className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      value={settings.typography.fontFamily}
                      onChange={(event) =>
                        setSettings((prev) => ({
                          ...prev,
                          typography: { ...prev.typography, fontFamily: event.target.value },
                        }))
                      }
                    >
                      <option value="Poppins">Poppins</option>
                      <option value="Inter">Inter</option>
                      <option value="Nunito">Nunito</option>
                    </select>
                  </label>
                </div>
              </section>

              <section className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">Contenido del sitio</h3>
                  <p className="text-sm text-muted-foreground">Edita los textos de cada página</p>
                </div>

                <div className="mt-6 grid gap-8">
                  <div className="rounded-2xl border border-border/40 bg-background/70 p-5">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-foreground">Página de inicio</h4>
                      <p className="text-sm text-muted-foreground">
                        Textos que aparecen en la portada del sitio
                      </p>
                    </div>
                    <div className="mt-4 grid gap-4">
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Título principal</span>
                        <input
                          type="text"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.hero.title}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                hero: { ...prev.content.hero, title: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Texto de presentación</span>
                        <textarea
                          rows={3}
                          className="rounded-xl border border-border/60 bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.hero.subtitle}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                hero: { ...prev.content.hero, subtitle: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Texto del botón principal</span>
                          <input
                            type="text"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.hero.cta.primary_text}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  hero: {
                                    ...prev.content.hero,
                                    cta: { ...prev.content.hero.cta, primary_text: event.target.value },
                                  },
                                },
                              }))
                            }
                          />
                        </label>
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Enlace del botón principal</span>
                          <input
                            type="url"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.hero.cta.primary_url}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  hero: {
                                    ...prev.content.hero,
                                    cta: { ...prev.content.hero.cta, primary_url: event.target.value },
                                  },
                                },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Título de servicios</span>
                          <input
                            type="text"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.services.title}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  services: { ...prev.content.services, title: event.target.value },
                                },
                              }))
                            }
                          />
                        </label>
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Texto de servicios</span>
                          <input
                            type="text"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.services.subtitle}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  services: { ...prev.content.services, subtitle: event.target.value },
                                },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Título de contacto</span>
                          <input
                            type="text"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.contact.title}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  contact: { ...prev.content.contact, title: event.target.value },
                                },
                              }))
                            }
                          />
                        </label>
                        <label className="text-sm text-muted-foreground flex flex-col gap-2">
                          <span>Texto de contacto</span>
                          <input
                            type="text"
                            className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                            value={settings.content.contact.subtitle}
                            onChange={(event) =>
                              setSettings((prev) => ({
                                ...prev,
                                content: {
                                  ...prev.content,
                                  contact: { ...prev.content.contact, subtitle: event.target.value },
                                },
                              }))
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background/70 p-5">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-foreground">Servicios</h4>
                      <p className="text-sm text-muted-foreground">Información de los servicios que ofreces</p>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Título de servicios</span>
                        <input
                          type="text"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.services.title}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                services: { ...prev.content.services, title: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Texto introductorio</span>
                        <input
                          type="text"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.services.subtitle}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                services: { ...prev.content.services, subtitle: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      {serviceItems.map((item, index) => (
                        <div
                          key={`service-${index}`}
                          className="flex flex-col gap-3 rounded-xl border border-border/40 bg-background/70 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">
                              Servicio {index + 1}
                            </span>
                            <button
                              type="button"
                              className="text-xs text-muted-foreground hover:text-primary"
                              onClick={() =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    services: {
                                      ...prev.content.services,
                                      items: prev.content.services.items.filter((_, idx) => idx !== index),
                                    },
                                  },
                                }))
                              }
                            >
                              Eliminar
                            </button>
                          </div>
                          <label className="flex flex-col gap-2">
                            <span className="text-xs">Nombre</span>
                            <input
                              type="text"
                              className="h-10 rounded-lg border border-border/60 bg-background px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                              value={item.title}
                              onChange={(event) =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    services: {
                                      ...prev.content.services,
                                      items: prev.content.services.items.map((current, idx) =>
                                        idx === index ? { ...current, title: event.target.value } : current,
                                      ),
                                    },
                                  },
                                }))
                              }
                            />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-xs">Descripción</span>
                            <textarea
                              rows={3}
                              className="rounded-lg border border-border/60 bg-background px-3 py-2 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/40"
                              value={item.description}
                              onChange={(event) =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    services: {
                                      ...prev.content.services,
                                      items: prev.content.services.items.map((current, idx) =>
                                        idx === index ? { ...current, description: event.target.value } : current,
                                      ),
                                    },
                                  },
                                }))
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          setSettings((prev) => ({
                            ...prev,
                            content: {
                              ...prev.content,
                              services: {
                                ...prev.content.services,
                                items: [...prev.content.services.items, { title: "", description: "" }],
                              },
                            },
                          }))
                        }
                      >
                        Agregar servicio
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background/70 p-5">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-foreground">Contacto</h4>
                      <p className="text-sm text-muted-foreground">
                        Textos que invitan a las personas a contactarte
                      </p>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Título de contacto</span>
                        <input
                          type="text"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.contact.title}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                contact: { ...prev.content.contact, title: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                      <label className="text-sm text-muted-foreground flex flex-col gap-2">
                        <span>Texto de contacto</span>
                        <input
                          type="text"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.contact.subtitle}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                contact: { ...prev.content.contact, subtitle: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                      <label className="text-sm text-muted-foreground flex flex-col gap-2 sm:col-span-2">
                        <span>Enlace de contacto</span>
                        <input
                          type="url"
                          className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                          value={settings.content.contact.link}
                          onChange={(event) =>
                            setSettings((prev) => ({
                              ...prev,
                              content: {
                                ...prev.content,
                                contact: { ...prev.content.contact, link: event.target.value },
                              },
                            }))
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background/70 p-5">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-foreground">Preguntas frecuentes</h4>
                      <p className="text-sm text-muted-foreground">
                        Respuestas a las dudas más comunes de tus clientes
                      </p>
                    </div>
                    <div className="mt-4 grid gap-4">
                      {settings.content.faqs.map((faq, index) => (
                        <div key={`faq-${index}`} className="grid gap-3 rounded-xl border border-border/40 bg-background/70 p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">FAQ {index + 1}</span>
                            <button
                              type="button"
                              className="text-xs text-muted-foreground hover:text-primary"
                              onClick={() =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    faqs: prev.content.faqs.filter((_, idx) => idx !== index),
                                  },
                                }))
                              }
                            >
                              Eliminar
                            </button>
                          </div>
                          <label className="text-sm text-muted-foreground flex flex-col gap-2">
                            <span>Pregunta</span>
                            <input
                              type="text"
                              className="h-11 rounded-xl border border-border/60 bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                              value={faq.question}
                              onChange={(event) =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    faqs: prev.content.faqs.map((current, idx) =>
                                      idx === index ? { ...current, question: event.target.value } : current,
                                    ),
                                  },
                                }))
                              }
                            />
                          </label>
                          <label className="text-sm text-muted-foreground flex flex-col gap-2">
                            <span>Respuesta</span>
                            <textarea
                              rows={3}
                              className="rounded-xl border border-border/60 bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                              value={faq.answer}
                              onChange={(event) =>
                                setSettings((prev) => ({
                                  ...prev,
                                  content: {
                                    ...prev.content,
                                    faqs: prev.content.faqs.map((current, idx) =>
                                      idx === index ? { ...current, answer: event.target.value } : current,
                                    ),
                                  },
                                }))
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          setSettings((prev) => ({
                            ...prev,
                            content: {
                              ...prev.content,
                              faqs: [...prev.content.faqs, { question: "", answer: "" }],
                            },
                          }))
                        }
                      >
                        Agregar FAQ
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold">Secciones visibles</h3>
                <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                  {([
                    ["showServices", "Mostrar servicios"],
                    ["showTestimonials", "Mostrar testimonios"],
                    ["showFAQ", "Mostrar FAQ"],
                    ["showProcess", "Mostrar proceso"],
                    ["showContact", "Mostrar contacto"],
                  ] as const).map(([field, label]) => (
                    <label key={field} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.toggles[field]}
                        onChange={(event) =>
                          setSettings((prev) => ({
                            ...prev,
                            toggles: { ...prev.toggles, [field]: event.target.checked },
                          }))
                        }
                        className="h-4 w-4 rounded border-border/60 text-primary"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </section>

              <div className="flex justify-end">
                <Button onClick={handleSave} disabled={loading}>
                  Guardar cambios
                </Button>
              </div>
              {saveStatus && (
                <p className="mt-3 text-sm text-muted-foreground text-right">{saveStatus}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
