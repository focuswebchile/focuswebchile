/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { ArticleAuthorCta } from "@/components/article-author-cta"

export const metadata: Metadata = {
  title: "Instagram a tienda online en Chile: guía práctica | FocusWeb",
  description:
    "Guía para pasar de Instagram a tienda online en Chile: costos reales, Transbank, couriers y elección entre WooCommerce o Shopify.",
  alternates: {
    canonical: "/blog/instagram-a-tienda-online",
  },
  openGraph: {
    type: "article",
    locale: "es_CL",
    url: "https://focusweb.cl/blog/instagram-a-tienda-online",
    title: "Instagram a tienda online en Chile: guía práctica | FocusWeb",
    description:
      "Guía para pasar de Instagram a tienda online en Chile: costos reales, Transbank, couriers y elección entre WooCommerce o Shopify.",
    siteName: "FocusWeb Chile",
    images: [
      {
        url: "https://focusweb.cl/instagramatiendaonline.webp",
        width: 1200,
        height: 630,
        alt: "De Instagram a tu Propia Tienda Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram a tienda online en Chile: guía práctica | FocusWeb",
    description:
      "Guía para pasar de Instagram a tienda online en Chile: costos reales, Transbank, couriers y elección entre WooCommerce o Shopify.",
    images: ["https://focusweb.cl/instagramatiendaonline.webp"],
  },
}

const articleAndBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "De Instagram a tu Propia Tienda Online: Todo lo que Nadie te Cuenta Antes de Empezar",
      description:
        "Guía para pasar de Instagram a tienda online en Chile: costos reales, Transbank, couriers y elección entre WooCommerce o Shopify.",
      inLanguage: "es-CL",
      image: ["https://focusweb.cl/instagramatiendaonline.webp"],
      author: { "@type": "Organization", name: "FocusWeb Chile" },
      publisher: {
        "@type": "Organization",
        name: "FocusWeb Chile",
        logo: { "@type": "ImageObject", url: "https://focusweb.cl/logo-512.png" },
      },
      datePublished: "2026-01-26",
      dateModified: "2026-01-26",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://focusweb.cl/blog/instagram-a-tienda-online",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://focusweb.cl" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://focusweb.cl/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "De Instagram a tu Propia Tienda Online",
          item: "https://focusweb.cl/blog/instagram-a-tienda-online",
        },
      ],
    },
  ],
}

export default function BlogPostPage() {
  return (
    <>
      <Script id="blog-instagram-tienda-schema" type="application/ld+json">
        {JSON.stringify(articleAndBreadcrumbSchema)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/ecommerce.webp"
                alt="Guía para crear una tienda online en Chile"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <article className="space-y-6 text-foreground">
              <SiteBreadcrumb
                items={[
                  { label: "Inicio", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "De Instagram a tu propia tienda online" },
                ]}
              />
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Tiempo de lectura: 7 min
              </p>
              <h1 className="text-3xl sm:text-[2.35rem] md:text-[2.55rem] lg:text-5xl font-semibold tracking-tight leading-[0.95]">
                De Instagram a tienda online en Chile
              </h1>

              <p>
                Si estás leyendo esto, probablemente ya llevas un tiempo vendiendo. Quizás por Instagram, respondiendo
                DMs hasta las 11 de la noche. O por WhatsApp, con ese grupo familiar donde se mezclan pedidos con los
                memes de tu tía.
              </p>

              <p>Y funciona. Vendes. Pero...</p>

              <p>
                Empiezas a sentir que se te escapa agua entre los dedos. Un cliente te escribe a las 3 de la tarde y le
                respondes a las 8 de la noche — cuando contestas, ya compró en otro lado. O peor: tienes 50 mensajes sin
                leer y perdiste la cuenta de quién pagó y quién no.
              </p>

              <p>
                <strong>Entonces llega LA pregunta</strong>: ¿necesito una página web?
              </p>

              <p>
                Y ahí empieza el vértigo. ¿Cuánto cuesta? ¿Me van a estafar? ¿Y si nadie compra? ¿Transbank me va a
                pedir ser S.A.? ¿Shopify o WordPress? ¿QUÉ ES WOOCOMMERCE?
              </p>

              <p>Respira.</p>

              <p>
                En este artículo vamos a conversar — así, como amigos — sobre todo lo que implica crear tu primera
                tienda online en Chile. Sin venderte nada todavía. Primero, que tomes la decisión correcta para tu
                negocio. Después, si quieres, conversamos.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/unatiendaonline.webp"
                    alt="Vender por Instagram vs tienda online"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                ¿Realmente necesitas una tienda online? (El test de la verdad)
              </h2>

              <p>Antes de que gastes un peso, hagamos un ejercicio honesto.</p>

              <p>
                <strong>Responde con sinceridad:</strong>
              </p>

              <p>
                ✅ ¿Vendes más de 30 productos al mes?
                <br />
                ✅ ¿Te has perdido ventas porque no alcanzaste a responder a tiempo?
                <br />
                ✅ ¿Tus clientes te preguntan "¿tienes catálogo?" o "¿dónde puedo ver todo lo que vendes?"
                <br />
                ✅ ¿Pasas más de 15 horas a la semana solo organizando pedidos, respondiendo consultas y coordinando
                pagos?
                <br />
                ✅ ¿Sientes que si te enfermas un día, tu negocio se detiene?
              </p>

              <p>
                <strong>Si marcaste 3 o más: sí, probablemente sea el momento.</strong>
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                Pero ojo, también hay casos donde NO necesitas una web (todavía)
              </h3>

              <p>
                No queremos que gastes plata al pedo. Hay situaciones donde una tienda online es como comprarte un auto
                de lujo cuando todavía estás aprendiendo a manejar:
              </p>

              <p>
                ❌ <strong>Si estás recién probando tu producto</strong> — Primero valida que la gente quiera comprarlo.
                Instagram es gratis y rápido para testear.
              </p>

              <p>
                ❌ <strong>Si vendes cosas ultra personalizadas</strong> — Si cada producto requiere 40 minutos de
                conversación con el cliente, una tienda automatizada no te sirve mucho.
              </p>

              <p>
                ❌ <strong>Si tu ticket promedio es muy bajo y tu margen también</strong> — Ejemplo: vendes stickers a
                $1.000. Los costos fijos de una web podrían no justificarse (por ahora).
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">¿Cuándo SÍ es el momento perfecto?</h3>

              <p>
                ✅ Tienes demanda constante (no son ventas de una vez al mes)
                <br />
                ✅ Quieres recuperar tu tiempo y tu vida personal
                <br />
                ✅ Estás listo para profesionalizar tu marca
                <br />
                ✅ Quieres que tu negocio funcione aunque tú no estés 24/7 pegado al celular
              </p>

              <p>
                <strong>En resumen:</strong> Si ya validaste que tu producto se vende y ahora el problema eres TÚ (tu
                tiempo, tus manos), entonces sí. Es hora de crear tu tienda online. Si quieres dar ese paso con una
                base más ordenada, puedes revisar nuestro servicio de{" "}
                <a
                  href="/servicios/desarrollo-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  desarrollo de tienda online
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/WebpayvsMercadoPago.webp"
                    alt="Webpay vs Mercado Pago para ecommerce en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">Las 5 preguntas que todo el mundo se hace</h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                1. Pasarelas de pago en Chile: Webpay vs Mercado Pago (y la boleta electrónica)
              </h3>

              <p>Ah, Transbank. El gigante de las pasarelas en Chile.</p>

              <p>
                <strong>La verdad pelada:</strong> Transbank (Webpay) es el sistema que la mayoría de los chilenos
                conoce y confía. Ese "Pagar con Webpay" en rojo les da seguridad. PERO sí tiene sus requisitos:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Necesitas ser empresa (SPA, EIRL, o similar — no puedes como persona natural)</li>
                <li>Tienen comisiones (andan entre 2.9% y 3.5% + IVA por transacción)</li>
                <li>El proceso de afiliación puede tomar 1-2 semanas</li>
              </ul>

              <p>
                <strong>"Pero yo no soy empresa todavía, ¿me condeno a vender por transfer?"</strong>
              </p>

              <p>Para nada. Tienes alternativas que funcionan bien en Chile:</p>

              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>
                  <strong>Mercado Pago</strong>: Puedes usarlo como persona natural, comisiones similares a Transbank,
                  la gente también confía
                </li>
                <li>
                  <strong>Flow</strong>: Chileno, fácil de integrar, acepta varios métodos de pago
                </li>
                <li>
                  <strong>Khipu</strong>: Transferencias bancarias automáticas (sin tarjeta de crédito)
                </li>
              </ul>

              <p>
                <strong>Y el tema del SII (que a todos les da un poco de susto):</strong>
              </p>

              <p>
                Sí, se puede automatizar para que la boleta electrónica le llegue al cliente sin que tú muevas un dedo.
                Tu tienda online se puede conectar con sistemas de facturación certificados por el SII como Nubox, Bind
                o Siigo.
              </p>

              <p>
                <strong>Cómo funciona:</strong> Cliente compra → sistema emite la boleta automáticamente → cliente
                recibe su boleta por email → tú cumples con el SII desde tu casa en pijama.
              </p>

              <p>
                Estos sistemas de facturación tienen un costo adicional (desde ~$10.000/mes), pero si vendes un buen
                volumen, ese costo se justifica solo por el tiempo que te ahorras y el sueño que vas a dormir sabiendo
                que estás al día con impuestos.
              </p>

              <p>
                <strong>Lo que hacemos en Focus Web:</strong> Te ayudamos a elegir la mejor combinación de pasarela de
                pago + facturación según tu situación legal y tu público. Y lo dejamos TODO configurado — tú solo te
                preocupas de vender. Si quieres saber más sobre cómo trabajamos,{" "}
                <a href="/nuestro-proceso" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  conoce nuestro proceso aquí
                </a>
                .
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/comoautomatizar.webp"
                    alt="Cómo automatizar envíos en Chile"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                2. Integración de couriers en Chile: cómo automatizar tus envíos
              </h3>

              <p>Chile es largo. MUUUY largo. Y eso hace que el tema envíos sea... especial.</p>

              <p>
                La buena noticia: <strong>NO tienes que convertirte en repartidor.</strong>
              </p>

              <p>
                La clave está en integrar tu tienda con empresas de courier que calculan automáticamente el costo del
                envío según el destino. Tus clientes eligen su región/comuna, y ¡pum! el sistema les dice cuánto cuesta.
              </p>

              <p>
                <strong>Las opciones más usadas en Chile:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>
                  <strong>Blue Express</strong> (rápido, para zonas urbanas)
                </li>
                <li>
                  <strong>Starken</strong> (buena cobertura nacional)
                </li>
                <li>
                  <strong>Chilexpress</strong> (el clásico confiable)
                </li>
                <li>
                  <strong>Correos de Chile</strong> (más económico, un poco más lento)
                </li>
              </ul>

              <p>
                <strong>¿Cómo funciona en la práctica?</strong>
              </p>

              <p>Cuando alguien compra en tu web:</p>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/90">
                <li>Se genera automáticamente la orden con los datos del cliente</li>
                <li>Tú imprimes la etiqueta desde el sistema del courier</li>
                <li>Dejas los paquetes en una sucursal o pides retiro a domicilio</li>
                <li>El cliente recibe su número de seguimiento automáticamente por email</li>
              </ol>

              <p>
                <strong>Lo que configuramos nosotros:</strong> La integración técnica con los courier para tu
                ecommerce, para que el cálculo sea automático y no tengas que estar cotizando a mano cada envío como si
                fuera 1995.
              </p>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/cualesmejor.webp"
                    alt="Qué plataforma es mejor para tu tienda online"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                3. WooCommerce vs Shopify vs Tiendanube: ¿cuál es mejor para Chile?
              </h3>

              <p>Esta es como preguntar "¿iPhone o Android?" — todos tienen su club de fans.</p>

              <p>Vamos a lo práctico con esta comparación de plataformas para crear tu tienda online:</p>

              <div className="overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-foreground">Lo que importa</th>
                      <th className="px-4 py-3 font-semibold text-foreground">WooCommerce (WordPress)</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Shopify</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Tiendanube</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/90">
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">¿Es tuya la tienda?</td>
                      <td className="px-4 py-3">✅ Sí, 100%</td>
                      <td className="px-4 py-3">❌ Arriendes</td>
                      <td className="px-4 py-3">❌ Arriendes</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">¿Es fácil de usar?</td>
                      <td className="px-4 py-3">⚠️ Necesitas aprender un poco</td>
                      <td className="px-4 py-3">✅ Muy intuitiva</td>
                      <td className="px-4 py-3">✅ Súper fácil</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">¿Cuánto pagas al mes?</td>
                      <td className="px-4 py-3">Solo hosting (~$15.000-$30.000)</td>
                      <td className="px-4 py-3">Desde USD $29 + comisiones</td>
                      <td className="px-4 py-3">Desde $15.000 CLP</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">¿Integraciones chilenas?</td>
                      <td className="px-4 py-3">✅ Todas (Webpay, SII, couriers)</td>
                      <td className="px-4 py-3">⚠️ Algunas con apps pagas</td>
                      <td className="px-4 py-3">✅ La mayoría</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>¿Por qué en Focus Web apostamos por WooCommerce?</strong>
              </p>

              <p>
                Porque es como construir una casa propia vs. arrendar un departamento. A largo plazo, es tuya. Nadie
                te puede subir el arriendo. Nadie te cierra la cuenta. Y si algún día quieres cambiar de "agencia de
                mantenimiento", llevas tu web donde quieras.
              </p>

              <p>
                Además, para el mercado chileno, WooCommerce tiene todas las integraciones que necesitas: Webpay,
                Mercado Pago, sistemas de facturación del SII, todos los couriers locales. No tienes que andar pagando
                apps extras para cosas básicas.
              </p>

              <p>
                Eso sí: <strong>no es para todo el mundo</strong>. Si tu prioridad #1 es "lo más fácil posible y no
                quiero aprender nada", Shopify o Tiendanube pueden ser mejor opción (al menos al principio).
              </p>

              <p>
                <strong>Lo importante:</strong> Que elijas lo que elijas con información clara, no por marketing bonito.
                Si tienes dudas sobre cuál plataforma es mejor para tu caso específico,{" "}
                <a href="/faq" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  revisa nuestras preguntas frecuentes
                </a>{" "}
                o{" "}
                <a href="/contacto" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  conversemos directamente
                </a>
                .
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                4. Cómo generar confianza en tu tienda online (el factor "no me estafen")
              </h3>

              <div className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-lg shadow-primary/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/confianzaentutienda.webp"
                    alt="Confianza en una tienda online"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                  />
                </div>
              </div>

              <p>El chileno es desconfiado por naturaleza. Y con razón — hay cada estafa dando vueltas.</p>

              <p>
                <strong>Los 5 elementos que SÍ generan confianza:</strong>
              </p>

              <p>
                🔒 <strong>1. El candadito (Certificado SSL)</strong>
                <br />
                Ese "https://" al inicio de tu URL. Básico, pero necesario. Sin eso, Google Chrome le dice a tus
                clientes "SITIO NO SEGURO" en rojo. Chao venta.
              </p>

              <p>
                📞 <strong>2. Información de contacto REAL</strong>
                <br />
                Teléfono, email, dirección. Si solo tienes un formulario de contacto sin más datos, la gente piensa:
                "¿Y si me estafan? ¿A quién reclamo?"
              </p>

              <p>
                ↩️ <strong>3. Políticas claras de devolución</strong>
                <br />
                No tiene que ser "devolvemos todo siempre", pero sí tiene que existir y estar visible. La gente
                necesita saber qué pasa si el producto llega malo.
              </p>

              <p>
                ⭐ <strong>4. Reseñas de clientes</strong>
                <br />
                Aunque tengas 3 ventas, pídele a esos 3 clientes que te dejen su opinión. Las reviews reales valen oro.
              </p>

              <p>
                💳 <strong>5. Métodos de pago conocidos</strong>
                <br />
                Webpay, Mercado Pago, transferencia bancaria. Si pides PaySafeCard o criptomonedas para un negocio de
                ropa, suenas raro.
              </p>

              <p>
                <strong>Lo que incluimos en nuestros proyectos de ecommerce:</strong> Certificado SSL, secciones
                optimizadas para mostrar información de contacto, configuración de sistema de reviews, y asesoría sobre
                cómo comunicar tus políticas.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                5. Costo real de una tienda online en Chile (desglose sin letra chica)
              </h3>

              <p>Esta es LA pregunta. Y nadie te lo dice clarito.</p>

              <p>
                <strong>Desglose honesto de costos mensuales de un ecommerce:</strong>
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-foreground">Concepto</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Costo mensual aproximado</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/90">
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">Dominio .cl</td>
                      <td className="px-4 py-3">$1.500 (mensualizado)</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">Hosting profesional</td>
                      <td className="px-4 py-3">$15.000 - $30.000</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">Certificado SSL</td>
                      <td className="px-4 py-3">Incluido en hosting</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">Pasarela de pagos</td>
                      <td className="px-4 py-3">2.9% - 3.5% por venta + IVA</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3">Mantenimiento básico</td>
                      <td className="px-4 py-3">$20.000 - $40.000</td>
                    </tr>
                    <tr className="border-t border-border/60">
                      <td className="px-4 py-3 font-semibold">TOTAL BASE</td>
                      <td className="px-4 py-3 font-semibold">~$37.000 - $72.000/mes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Costos opcionales (pero útiles):</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Software de facturación automática SII (Nubox, Bind): $10.000 - $30.000/mes</li>
                <li>Email marketing (Mailchimp, etc.): $0 - $20.000/mes según cantidad de contactos</li>
                <li>Plugins premium si los necesitas: $5.000 - $15.000/mes</li>
              </ul>

              <p>
                <strong>Tu punto de equilibrio (lo que nadie te cuenta):</strong>
              </p>

              <p>
                Digamos que vendes poleras a $15.000 con un margen de $5.000 por polera. Con un costo total de
                mantención de ~$50.000/mes, necesitas vender <strong>10 poleras más al mes</strong> para que la web se
                pague sola.
              </p>

              <p>
                ¿Ya vendes 30 poleras al mes por Instagram? Perfecto. Solo necesitas que 10 de esas 30 ventas vengan por
                la web en vez de por DM. El resto es ganancia pura + tiempo recuperado.
              </p>

              <p>
                <strong>Básicamente:</strong> Si vendes un volumen razonable, la inversión en una tienda online no es un
                gasto, es una máquina que trabaja por ti mientras duermes.
              </p>

              <p>
                <strong>Lo que NO te cuentan otras agencias:</strong> Los costos ocultos. Ese plugin bonito que viste en
                otra web y quieres para la tuya (puede ser $50 USD/mes). Las actualizaciones de seguridad que hay que
                hacer cada cierto tiempo. El respaldo de la base de datos.
              </p>

              <p>
                <strong>Nuestra filosofía:</strong> Te decimos TODO antes. Sin sorpresas en la factura del mes 3. Si
                quieres conocer exactamente cuánto te costaría tu proyecto específico, aquí tienes un resumen claro.
              </p>

              <div className="rounded-2xl border border-border/60 bg-muted/60 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Precios y opciones</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-foreground">
                  Planes claros para tu tienda online
                </h3>
                <p className="mt-3 text-base text-foreground/80">
                  Revisa valores, alcances y qué incluye cada plan antes de decidir.
                </p>
                <a
                  href="/servicios/desarrollo-web"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Ver planes de desarrollo web
                </a>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                ¿Vale la pena si ya vendo bien por Instagram?
              </h2>

              <p>Pregunta válida. Si ya tienes ventas, ¿para qué complicarse?</p>

              <p>
                <strong>Acá va la verdad:</strong> No es una cosa O la otra. Es complementario.
              </p>

              <p>
                <strong>Instagram es genial para:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Construir comunidad</li>
                <li>Mostrar tu día a día</li>
                <li>Generar confianza y cercanía</li>
                <li>Tráfico gratis (si sabes usarlo)</li>
              </ul>

              <p>
                <strong>Tu tienda online es genial para:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Vender 24/7 sin contestar mensajes</li>
                <li>Verse profesional</li>
                <li>No depender de un algoritmo que cambia cada 3 meses</li>
                <li>Tener PROPIEDAD sobre tu base de datos de clientes</li>
              </ul>

              <p>
                <strong>El combo perfecto:</strong> Usas Instagram para mostrar tus productos y contar tu historia. Pero
                cuando alguien quiere comprar, lo mandas a tu web. Ahí compran cuando quieran, del producto que quieran,
                sin esperar que les contestes.
              </p>

              <p>
                <strong>El factor clave que nadie dice:</strong> Instagram puede cerrar tu cuenta mañana. Por error, por
                un reporte masivo, porque sí. Tu web es TUYA. Nadie te la puede quitar.
              </p>

              <p>
                Si te interesa combinar tu presencia en redes sociales con una web profesional, también podemos
                ayudarte a crear{" "}
                <a href="/landing-page" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  landing pages optimizadas
                </a>{" "}
                que convierten ese tráfico de Instagram en ventas reales.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Los 3 errores más comunes (y caros) al crear tu ecommerce
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                Error #1: Elegir hosting barato porque "es lo mismo"
              </h3>

              <p>No. No es lo mismo.</p>

              <p>
                Un hosting malo significa: tu web se cae en Black Friday justo cuando más vendes. O se pone lenta y la
                gente se aburre y se va. O te hackean y pierdes TODO porque no había respaldos. Cuando ya estás en ese
                escenario, suele ser buena idea revisar una{" "}
                <a
                  href="/servicios/optimizacion-velocidad-web"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  optimización de velocidad web
                </a>
                .
              </p>

              <p>
                <strong>Inversión inteligente:</strong> Un hosting profesional. No el más caro del mundo, pero tampoco
                el de $2.000/mes que te prometen "recursos ilimitados".
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">
                Error #2: Pensar que "si la hago, la gente vendrá sola"
              </h3>

              <p>Ojalá fuera así. Pero no.</p>

              <p>
                Tu tienda online es como abrir una tienda física en medio del desierto. Bonita, funcional, pero si nadie
                sabe que existe, nadie llega.
              </p>

              <p>
                <strong>Necesitas:</strong> Marketing. Puede ser orgánico (SEO, redes sociales, contenido) o pagado
                (Google Ads, Instagram Ads). Pero necesitas traer gente.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold pt-2">Error #3: No optimizar para móvil</h3>

              <p>
                El 70% de las compras en Chile se hacen desde el celular. Si tu web se ve mal en el teléfono, perdiste.
              </p>

              <p>
                <strong>La solución:</strong> Diseño responsive desde el día uno. No es "un extra", es LO BÁSICO.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">
                Entonces, ¿qué hago? ¿Lo hago yo o contrato a alguien?
              </h2>

              <p>
                <strong>Hazlo tú mismo SI:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Tienes tiempo real (50+ horas para aprender y ejecutar)</li>
                <li>Te gusta la parte técnica y quieres aprender</li>
                <li>Tu presupuesto inicial es muy ajustado (menos de $500.000)</li>
                <li>Vendes pocos productos (menos de 20)</li>
              </ul>

              <p>
                <strong>Contrata a profesionales SI:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Quieres lanzar en menos de 2 meses</li>
                <li>Tu tiempo vale más que el costo de la agencia</li>
                <li>Necesitas integraciones con sistemas chilenos (Transbank, facturación electrónica SII, couriers)</li>
                <li>Quieres evitar errores que te pueden salir más caros después</li>
              </ul>

              <p>
                <strong>¿Por qué elegir Focus Web para tu desarrollo de ecommerce?</strong>
              </p>

              <p>
                Porque somos chilenos, entendemos el mercado local. Sabemos cómo funciona Transbank, conocemos los
                courier que sirven y los que no, sabemos qué pide el SII para la facturación electrónica.
              </p>

              <p>
                No te vamos a vender un Ferrari si necesitas una bicicleta. Te vamos a decir la verdad: si todavía no
                es tu momento, te lo decimos. Y si SÍ lo es, te acompañamos paso a paso.
              </p>

              <p>
                Si quieres conocer más sobre quiénes somos y por qué hacemos esto,{" "}
                <a href="/mi-historia" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  lee nuestra historia aquí
                </a>
                .
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold pt-4">¿Listo para dar el salto?</h2>

              <p>
                Si llegaste hasta acá, ya sabes más que el 90% de la gente que está pensando en crear su tienda online.
              </p>

              <p>Ahora la pelota está en tu cancha.</p>

              <p>
                <strong>Puedes:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Guardar este artículo y seguir pensándolo (totally válido)</li>
                <li>Intentarlo por tu cuenta (si tienes el tiempo, adelante)</li>
                <li>Conversar con nosotros para ver si tiene sentido trabajar juntos</li>
              </ul>

              <p>
                <strong>Si quieres conversar</strong>, te ofrecemos una auditoría gratuita de 30 minutos donde:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Revisamos tu situación actual</li>
                <li>Te damos un plan realista (con tiempos y costos reales)</li>
                <li>Sin letra chica, sin compromiso</li>
              </ul>

              <p>
                👉{" "}
                <strong>
                  <a
                    href="/contacto"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    Agenda tu Consultoría Gratuita aquí
                  </a>
                </strong>
              </p>

              <hr className="border-border/60" />

              <p>
                <strong>P.D.:</strong> ¿Quieres el checklist con los 47 puntos que debe tener tu tienda online antes de
                lanzar? Te lo comparto gratis, haz click acá 👇
              </p>

              <div className="pt-2">
                <a
                  href="/check-list-ecommerce"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Ver Checklist Completo de 47 Puntos →
                </a>
              </div>
              <ArticleAuthorCta />
            </article>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
