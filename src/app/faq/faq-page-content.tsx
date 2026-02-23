"use client"

import { useState } from "react"
import Link from "next/link"

type FAQItem = {
  question: string
  answer: React.ReactNode
}

type FAQCategory = {
  id: string
  title: string
  subtitle: string
  icon: string
  countLabel: string
  items: FAQItem[]
}

const faqCategories: FAQCategory[] = [
  {
    id: "precios",
    title: "Precios y Presupuesto",
    subtitle: "8 preguntas",
    icon: "",
    countLabel: "8 preguntas",
    items: [
      {
        question: "¿Cuánto cuesta hacer una página web en Chile?",
        answer:
          "El precio de una página web en Chile depende principalmente del tipo de sitio y su alcance.\nComo referencia general del mercado chileno:\n- Landing page: desde proyectos simples orientados a conversión.\n- Sitio web corporativo: para empresas que necesitan varias secciones y presencia profesional.\n- Tienda online: incluye catálogo, pagos online y mayor complejidad técnica.\nEl valor final se define según funcionalidades, diseño, contenidos y soporte requerido.",
      },
      {
        question: "¿De qué depende el precio de una página web?",
        answer:
          "El costo de un sitio web no depende solo del diseño. Los factores más relevantes son:\n- Cantidad de páginas o secciones.\n- Tipo de diseño (plantilla vs diseño a medida).\n- Funcionalidades especiales (formularios avanzados, reservas, pagos online).\n- Optimización SEO inicial.\n- Soporte y acompañamiento post-lanzamiento.\nPor eso, dos páginas “similares” pueden tener precios muy distintos.",
      },
      {
        question: "¿Qué incluye normalmente el precio de una página web?",
        answer:
          "En un proyecto profesional, el precio suele incluir:\n- Diseño responsive (adaptado a celular y computador).\n- Desarrollo del sitio y configuración técnica.\n- Páginas o secciones acordadas.\n- SEO básico inicial.\n- Publicación y puesta en marcha.\nServicios como redacción de textos, fotografías profesionales, mantención mensual o integraciones complejas suelen cotizarse aparte.",
      },
      {
        question: "¿Cuánto cuesta una landing page en Chile?",
        answer:
          "Una landing page suele ser más económica que un sitio web completo porque:\n- Tiene un solo objetivo (contacto, venta, registro).\n- Menos secciones y menor complejidad técnica.\nEl precio varía según el diseño, el copy, las integraciones (formularios, WhatsApp, CRM) y si está optimizada para campañas publicitarias.",
      },
      {
        question: "¿Es mejor pagar una página web una sola vez o con mensualidad?",
        answer:
          "Depende de cómo quieras gestionar tu web:\n- Pago único: inviertes al inicio y luego pagas solo hosting, dominio o soporte cuando lo necesites.\n- Mensualidad: incluye mantención, actualizaciones y soporte continuo, ideal si no quieres preocuparte por lo técnico.\nAmbos modelos existen en Chile y ninguno es “mejor” por sí solo: depende de tu negocio y tranquilidad deseada.",
      },
      {
        question: "¿La mantención web tiene un costo adicional?",
        answer:
          "Sí. La mantención web normalmente no está incluida de forma indefinida en el precio inicial.\nLa mantención puede incluir:\n- Actualizaciones de seguridad.\n- Copias de respaldo.\n- Corrección de errores.\n- Pequeños ajustes técnicos.\nContratar mantención reduce riesgos y alarga la vida útil del sitio.",
      },
    ],
  },
  {
    id: "chile",
    title: "Específico Chile",
    subtitle: "5 preguntas",
    icon: "",
    countLabel: "5 preguntas",
    items: [
      {
        question: "¿Mi página web puede integrar Webpay en Chile?",
        answer:
          "Sí. Una página web puede integrar Webpay Plus, el sistema de pago más utilizado y reconocido en Chile.\nEsta integración permite recibir pagos con tarjetas de débito y crédito chilenas directamente desde tu sitio web, entregando mayor confianza al usuario final.\nEs especialmente común en tiendas online, pero también puede usarse para pagos de servicios o reservas.",
      },
      {
        question: "¿Puedo usar otros medios de pago además de Webpay en Chile?",
        answer:
          "Sí. Además de Webpay, en Chile es común integrar:\n- Flow, para pagos con tarjetas y transferencias.\n- Mercado Pago, especialmente usado en comercio digital.\n- Transferencias bancarias tradicionales.\nLa elección depende de tu tipo de negocio, comisiones, experiencia de usuario y necesidades operativas.",
      },
      {
        question: "¿Mi página web cumple con las necesidades del mercado chileno?",
        answer:
          "Un sitio web pensado para Chile debe considerar:\n- Medios de pago locales.\n- Lenguaje, precios y moneda en pesos chilenos.\n- Formularios simples y canales de contacto rápidos (como WhatsApp).\n- Hosting y configuración optimizados para usuarios en Chile.\nAdaptar la web al contexto local mejora la confianza y las conversiones.",
      },
      {
        question: "¿Necesito un hosting o dominio especial para Chile?",
        answer:
          "No es obligatorio, pero sí recomendable:\n- Un dominio .cl transmite mayor cercanía y confianza al público chileno.\n- Un hosting optimizado para Chile o Latinoamérica mejora la velocidad de carga.\nLa velocidad y estabilidad del sitio influyen tanto en la experiencia del usuario como en el posicionamiento en Google Chile.",
      },
      {
        question: "¿Cómo optimizo Google Mi Negocio en Chile para aparecer en Google Maps?",
        answer: (
          <>
            Si quieres una guía paso a paso para pymes, revisa{" "}
            <Link
              href="/blog/seo-local-google-business-chile"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Google Mi Negocio en Chile
            </Link>
            . Ahí explicamos configuración, errores comunes y mejoras prácticas.
          </>
        ),
      },
    ],
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    subtitle: "8 preguntas",
    icon: "",
    countLabel: "8 preguntas",
    items: [
      {
        question: "¿Con qué tecnología se desarrolla una página web?",
        answer: (
          <>
            <strong>La mayoría de sitios profesionales se construyen con un CMS</strong>, siendo WordPress el más usado.
            Esto permite crear webs flexibles, escalables y fáciles de administrar sin programar cambios básicos.
          </>
        ),
      },
      {
        question: "¿WordPress sirve para empresas?",
        answer: (
          <>
            <strong>WordPress no es solo para blogs.</strong> Se usa para sitios corporativos, servicios, tiendas online y
            landing pages. La diferencia está en cómo se diseña, configura y mantiene.
          </>
        ),
      },
      {
        question: "¿WordPress es seguro para un sitio profesional?",
        answer: (
          <>
            <strong>Sí, si está bien implementado.</strong> La seguridad depende de hosting de calidad, actualizaciones
            periódicas, plugins confiables y copias de seguridad automáticas.
          </>
        ),
      },
      {
        question: "¿La web será rápida y optimizada para Google?",
        answer: (
          <>
            <strong>Sí, cuando la parte técnica se hace bien.</strong> La velocidad depende del hosting, imágenes
            livianas, código limpio y configuración básica de SEO técnico.
          </>
        ),
      },
      {
        question: "¿Se verá bien en celulares y tablets?",
        answer: (
          <>
            <strong>Sí. Se diseña con enfoque responsive</strong> para adaptarse a celular, tablet y computador. Esto es
            clave porque gran parte del tráfico en Chile viene de móviles.
          </>
        ),
      },
      {
        question: "¿Podré editar contenidos después?",
        answer: (
          <>
            <strong>Sí, tendrás un panel de administración.</strong> Podrás cambiar textos, imágenes, crear secciones o
            páginas y gestionar productos si es tienda online, sin conocimientos técnicos.
          </>
        ),
      },
      {
        question: "¿Puedo agregar funciones más adelante?",
        answer: (
          <>
            <strong>La mayoría de sitios se construyen de forma escalable.</strong> Esto permite sumar blog, pagos online,
            formularios avanzados o convertir la web en tienda online.
          </>
        ),
      },
      {
        question: "¿La tecnología quedará obsoleta?",
        answer: (
          <>
            <strong>No, si se mantiene actualizada.</strong> Con actualizaciones periódicas, mantención básica y buen
            hosting, tu web puede mantenerse vigente por años.
          </>
        ),
      },
    ],
  },
  {
    id: "comparativas",
    title: "Comparativas",
    subtitle: "5 preguntas",
    icon: "",
    countLabel: "5 preguntas",
    items: [
      {
        question: "¿Qué es mejor: una landing page o una página web completa?",
        answer: (
          <>
            <strong>Depende del objetivo.</strong> La landing page sirve para campañas o un servicio puntual; la web
            completa es ideal cuando necesitas información institucional, varios servicios y confianza a largo plazo.
          </>
        ),
      },
      {
        question: "¿Es mejor tener una página web o solo redes sociales?",
        answer: (
          <>
            <strong>Las redes ayudan, pero no reemplazan una web.</strong> Una página propia te da control total,
            posicionamiento en Google y más profesionalismo. Las redes dependen de algoritmos.
          </>
        ),
      },
      {
        question: "¿Conviene hacer una página web con plantilla o a medida?",
        answer: (
          <>
            <strong>Plantilla:</strong> más rápida y económica. <strong>A medida:</strong> mayor diferenciación, mejor
            experiencia de usuario y escalabilidad. Depende de presupuesto y nivel de personalización.
          </>
        ),
      },
      {
        question: "¿Es mejor hacer la página web solo o contratar a un profesional?",
        answer: (
          <>
            <strong>Un profesional aporta estrategia y resultados.</strong> Mejora estructura, SEO, diseño orientado a
            conversión y reduce errores técnicos. Para negocios suele ser más eficiente delegar.
          </>
        ),
      },
      {
        question: "¿WordPress es mejor que otras plataformas para una web profesional?",
        answer: (
          <>
            <strong>WordPress no es “mejor” en todo, pero sí destaca</strong> por flexibilidad, facilidad de uso,
            ecosistema de plugins y escalabilidad. Lo clave es una buena implementación.
          </>
        ),
      },
    ],
  },
  {
    id: "problemas",
    title: "Soporte",
    subtitle: "4 preguntas",
    icon: "",
    countLabel: "4 preguntas",
    items: [
      {
        question: "¿Qué pasa si mi página web tiene un problema después de publicada?",
        answer: (
          <>
            <strong>Es normal que aparezcan ajustes menores.</strong> Por eso es clave contar con soporte inicial,
            un canal claro de contacto y definir qué problemas están cubiertos para no quedar sin respaldo técnico.
          </>
        ),
      },
      {
        question: "¿Qué tipo de soporte incluye una página web profesional?",
        answer: (
          <>
            <strong>Incluye correcciones y ajustes menores.</strong> Usualmente contempla errores técnicos, pequeños
            ajustes de funcionamiento y asistencia básica. Cambios grandes se cotizan aparte.
          </>
        ),
      },
      {
        question: "¿Necesito contratar mantención web mensual?",
        answer: (
          <>
            <strong>No es obligatoria, pero sí recomendable.</strong> Ayuda a mantener el sitio actualizado, prevenir
            caídas o vulnerabilidades y detectar problemas antes de que afecten a los usuarios.
          </>
        ),
      },
      {
        question: "¿Qué pasa si quiero hacer cambios en mi web en el futuro?",
        answer: (
          <>
            <strong>Los cambios futuros son totalmente posibles.</strong> Desde ajustes simples hasta nuevas
            funcionalidades. Lo importante es que la base esté bien construida para crecer sin problemas.
          </>
        ),
      },
    ],
  },
  {
    id: "tendencias",
    title: "Tendencias",
    subtitle: "2 preguntas",
    icon: "",
    countLabel: "2 preguntas",
    items: [
      {
        question: "¿Qué tendencias en diseño web están funcionando hoy en Chile?",
        answer: (
          <>
            <strong>Funcionan las tendencias claras y funcionales.</strong> Diseños simples y rápidos, mobile-first,
            textos directos enfocados en conversión y llamados a la acción visibles (contacto, WhatsApp).
          </>
        ),
      },
      {
        question: "¿Qué es más importante hoy: el diseño o la conversión?",
        answer: (
          <>
            <strong>El diseño debe estar al servicio de la conversión.</strong> Si no carga rápido, no se entiende
            y no guía a la acción, no cumple su objetivo. La tendencia es ayudar a decidir, no solo a mirar.
          </>
        ),
      },
    ],
  },
]

export function FAQPageContent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [openByCategory, setOpenByCategory] = useState<Record<string, Set<number>>>({})
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const accordionCategories = new Set(["chile", "tecnologia", "comparativas", "problemas", "tendencias"])

  const toggleAccordionItem = (categoryId: string, index: number) => {
    setOpenByCategory((prev) => {
      const current = prev[categoryId] ?? new Set<number>()
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return { ...prev, [categoryId]: next }
    })
  }

  const filteredCategories = faqCategories

  const executeRecaptcha = (action: string) =>
    new Promise<string>((resolve, reject) => {
      const grecaptcha = window.grecaptcha
      if (!recaptchaSiteKey || !grecaptcha?.execute) {
        reject(new Error("reCAPTCHA no disponible"))
        return
      }

      grecaptcha.ready(() => {
        grecaptcha.execute(recaptchaSiteKey, { action }).then(resolve).catch(reject)
      })
    })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)
    setIsSubmitting(true)

    try {
      const action = "contact_faq"
      const token = await executeRecaptcha(action)
      const submitResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token, action }),
      })
      const submitData = await submitResponse.json()

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData?.error || "No pudimos enviar el mensaje")
      }

      setFormData({ name: "", email: "", message: "" })
      setSuccessMessage("Gracias. Te responderemos en menos de 24 horas.")
    } catch {
      setErrorMessage("No pudimos enviar tu mensaje. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full" id="faq-top">
      <section className="w-full px-6 pb-12 pt-8 md:pt-12">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#4F9CF9] via-[#34D399] to-[#2FBF7C] px-6 py-12 text-center text-white shadow-lg md:px-12 md:py-16">
          <h1 className="text-4xl font-bold md:text-6xl">
            Preguntas Frecuentes sobre Diseño Web en Chile
          </h1>
          <p className="mt-4 text-base text-white/90 md:text-lg">
            Encuentra respuestas rápidas a tus dudas sobre precios, tiempos, tecnología y servicios web
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-white/60" />
        </div>
      </section>

      <section className="mx-auto hidden w-full max-w-6xl px-6 pb-10 md:block">
        <div className="sticky top-24 z-10 rounded-2xl border border-border/60 bg-white/90 px-6 py-4 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Índice rápido:</span>
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80 transition hover:border-primary hover:text-primary"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-border/60 bg-white px-6 py-8 shadow-sm md:px-10">
          <p className="text-base text-foreground/80">
            ¿Estás pensando en <span className="font-semibold text-primary">crear una página web en Chile</span> pero
            tienes dudas sobre <span className="font-semibold">precios, tiempos o tecnologías</span>? En esta sección
            encontrarás respuestas claras y actualizadas sobre{" "}
            <span className="font-semibold text-primary">diseño web profesional</span>, desde cuánto cuesta hacer una
            página web hasta cómo integrar <span className="font-semibold">Webpay</span> o{" "}
            <span className="font-semibold">Chilexpress</span> en tu tienda online.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">¿No encuentras tu respuesta?</span>{" "}
            <Link className="text-primary underline underline-offset-4" href="/contacto">
              Contáctanos directamente
            </Link>{" "}
            y te responderemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-border/60 bg-white px-6 py-8 shadow-sm md:px-10">
          <h2 className="text-3xl font-bold text-foreground">Navega por Categorías</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Haz clic en cualquier categoría para ir directamente. Precios está desplegado para lectura rápida; el resto
            se muestra en acordeón.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex flex-col items-center gap-1 rounded-xl border border-transparent bg-muted/60 px-5 py-6 text-center text-foreground transition hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-lg"
              >
                <strong className="text-base text-primary">{category.title}</strong>
                <small className="text-xs text-muted-foreground">{category.items.length} preguntas</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      {filteredCategories.map((category) => (
        <section key={category.id} id={category.id} className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6">
          <div className="border-b-4 border-primary pb-4">
            <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
          </div>

          <div className="mt-6 space-y-5">
            {accordionCategories.has(category.id) ? (
              category.items.map((item, index) => {
                const isOpen = openByCategory[category.id]?.has(index) ?? false
                return (
                  <div key={`${category.id}-${index}`} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordionItem(category.id, index)}
                    >
                      <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">{item.question}</h3>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-base text-white transition ${
                          isOpen ? "bg-primary" : "bg-primary/80"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid px-6 text-sm text-muted-foreground transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="whitespace-pre-line">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              category.items.map((item, index) => (
                <div key={`${category.id}-${index}`} className="rounded-xl border border-border bg-white px-6 py-5 shadow-sm">
                  <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">{item.question}</h3>
                  <p className="mt-3 text-sm text-muted-foreground whitespace-pre-line">{item.answer}</p>
                </div>
              ))
            )}
          </div>
        </section>
      ))}

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:hidden">
        <a
          href="#faq-top"
          className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
        >
          Volver arriba
        </a>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-border/60 bg-[radial-gradient(900px_circle_at_0%_0%,rgba(59,130,246,0.12),rgba(255,255,255,0.95),rgba(255,255,255,0.9))] px-6 py-10 shadow-sm md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">¿Te quedó alguna duda?</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Déjanos tu consulta y te respondemos en menos de 24 horas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 grid w-full max-w-2xl gap-4">
            {successMessage && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="faq-name">
                  Nombre
                </label>
                <input
                  id="faq-name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Tu nombre"
                  className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="faq-email">
                  Email
                </label>
                <input
                  id="faq-email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder="tu@email.com"
                  className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-foreground" htmlFor="faq-message">
                Mensaje
              </label>
              <textarea
                id="faq-message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder="Cuéntanos tu duda"
                className="min-h-[140px] rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar pregunta"}
            </button>
            {errorMessage ? <p className="text-xs text-center text-destructive">{errorMessage}</p> : null}
          </form>
        </div>
      </section>
    </div>
  )
}
