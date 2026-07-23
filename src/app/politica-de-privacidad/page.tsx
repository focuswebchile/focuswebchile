import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Política de Privacidad | FocusWeb",
  description:
    "Política de privacidad de Focus Web Chile: qué datos recolectamos, para qué los usamos, dónde se almacenan y con quién se comparten.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24">
          <div className="container mx-auto max-w-3xl">
            <SiteBreadcrumb
              className="mb-6"
              items={[{ label: "Inicio", href: "/" }, { label: "Política de Privacidad" }]}
            />

            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Política de Privacidad — Focus Web Chile
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Última revisión: 16 de julio de 2026</p>

            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              En Focus Web Chile (&ldquo;Focus Web&rdquo;, &ldquo;nosotros&rdquo;), operado por{" "}
              <strong>Felipe Alejandro Ibar Jeppesen, RUT 16.659.089-2</strong>, nos tomamos en serio la privacidad de
              quienes visitan nuestro sitio, nos contactan o contratan nuestros servicios. Esta Política explica{" "}
              <strong>qué datos recolectamos, para qué los usamos, dónde se almacenan y con quién se comparten</strong>
              . Al usar focusweb.cl, nuestro chat agent, o contratar nuestros servicios, usted acepta esta Política.
            </p>

            <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground/80">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  1. Compromiso general
                </h2>
                <p className="mt-4">
                  <strong>
                    Ningún dato personal de nuestros clientes o visitantes es vendido, arrendado o expuesto
                    públicamente a terceros.
                  </strong>{" "}
                  Los datos que usted nos entrega se usan exclusivamente para los fines descritos en este documento:
                  contactarlo, brindarle el servicio contratado y, cuando corresponde, mejorar nuestra atención
                  mediante herramientas de automatización.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  2. Qué datos recolectamos
                </h2>
                <p className="mt-4">Dependiendo de cómo interactúa con nosotros, podemos recolectar:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Datos de contacto:</strong> nombre, número de teléfono/WhatsApp y correo electrónico.
                  </li>
                  <li>
                    <strong>Datos del proyecto:</strong> información de su negocio, contenido que nos entrega
                    (textos, imágenes, logo) para el desarrollo del sitio web o del contenido de redes sociales.
                  </li>
                  <li>
                    <strong>Datos de conversación con nuestro chat agent:</strong> cuando usted escribe a nuestro
                    asistente conversacional en el sitio web, recolectamos su nombre, teléfono y/o correo si los
                    proporciona, además del contenido de la conversación, con el fin de responder sus consultas,
                    calificar el contacto y hacer seguimiento comercial.
                  </li>
                  <li>
                    <strong>Datos de navegación:</strong> si nuestro sitio usa cookies o herramientas analíticas,
                    podemos recolectar datos de uso básico (páginas visitadas, dispositivo), sin identificarlo
                    personalmente salvo que usted nos haya entregado sus datos de contacto.
                  </li>
                </ul>
                <p className="mt-4">
                  No solicitamos ni almacenamos datos sensibles (salud, situación financiera detallada, datos
                  bancarios) a través de nuestro chat agent ni de nuestro sitio.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  3. Cómo y dónde almacenamos sus datos
                </h2>
                <p className="mt-4">
                  Los datos recolectados a través de nuestro chat agent en el sitio web se procesan mediante nuestra
                  propia infraestructura de automatización (<strong>n8n</strong>, alojado en un servidor propio) y se
                  almacenan de la siguiente forma:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    El historial de la conversación se guarda temporalmente en la base de datos de n8n (Postgres), en
                    un servidor de acceso restringido, controlado exclusivamente por Focus Web.
                  </li>
                  <li>
                    Cuando usted deja su nombre y teléfono para que lo contactemos, esos datos junto con un resumen
                    breve de la conversación se envían por correo electrónico (a través del servicio de envío{" "}
                    <strong>Resend</strong>) directamente a la casilla de Felipe.
                  </li>
                </ul>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    El acceso a esta información está limitado a Felipe Alejandro Ibar Jeppesen, como responsable
                    único del tratamiento de datos.
                  </li>
                  <li>
                    Se toman medidas razonables para proteger dicha información (accesos restringidos, buenas
                    prácticas de manejo de credenciales), aunque ningún sistema es 100% infalible, y Focus Web no
                    puede garantizar seguridad absoluta frente a incidentes de terceros ajenos a su control.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  4. Uso de inteligencia artificial (IA)
                </h2>
                <p className="mt-4">
                  Nuestro chat agent y parte de nuestros procesos internos utilizan modelos de inteligencia artificial
                  de terceros (Anthropic/Claude) para generar respuestas, redactar contenido o procesar información de
                  forma automatizada.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Los mensajes que usted envía a nuestro chat agent pueden ser procesados por estos proveedores de
                    IA con el único fin de generar una respuesta o ejecutar la automatización correspondiente.
                  </li>
                  <li>
                    Estos proveedores procesan la información bajo sus propias políticas de privacidad y no la
                    utilizan para identificarlo públicamente ni para fines ajenos a la prestación del servicio.
                  </li>
                  <li>No enviamos a estos proveedores datos sensibles ni información bancaria.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  5. Con quién compartimos sus datos
                </h2>
                <p className="mt-4">
                  Focus Web <strong>no vende ni cede</strong> sus datos personales a terceros con fines comerciales o
                  publicitarios. Sus datos solo se comparten con:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Herramientas de automatización y almacenamiento que usamos operativamente (n8n, Google Workspace).</li>
                  <li>
                    Nuestro servicio de envío de correo (<strong>Resend</strong>), únicamente para hacerle llegar a
                    Felipe los datos de contacto que usted deja en el chat.
                  </li>
                  <li>Proveedores de IA (ver punto 4), únicamente para procesar su consulta o generar contenido.</li>
                  <li>Autoridades competentes, solo si existe una obligación legal que así lo exija.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  6. Sus derechos (Ley 19.628 sobre Protección de la Vida Privada)
                </h2>
                <p className="mt-4">Conforme a la legislación chilena vigente, usted tiene derecho a:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Acceder</strong> a los datos personales que tenemos sobre usted.
                  </li>
                  <li>
                    <strong>Rectificar</strong> datos que estén desactualizados o sean incorrectos.
                  </li>
                  <li>
                    <strong>Solicitar la eliminación</strong> de sus datos de nuestros sistemas (n8n, Google
                    Sheets/Drive), salvo que exista una obligación legal de conservarlos.
                  </li>
                  <li>
                    <strong>Oponerse</strong> al uso de sus datos para fines de contacto comercial.
                  </li>
                </ul>
                <p className="mt-4">
                  Para ejercer cualquiera de estos derechos, puede escribirnos a <strong>contacto@focusweb.cl</strong>{" "}
                  o por <strong>WhatsApp al +56 9 2226 1321</strong>, indicando su solicitud. Responderemos dentro de
                  un plazo razonable.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  7. Retención de datos
                </h2>
                <p className="mt-4">
                  Conservamos los datos de contacto y de proyectos mientras dure la relación comercial y por un
                  periodo adicional razonable tras su finalización, con fines de respaldo y eventuales requerimientos
                  legales o contables. Si usted solicita la eliminación de sus datos y no existe obligación legal de
                  conservarlos, procederemos a eliminarlos de nuestras planillas y sistemas de automatización.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  8. Menores de edad
                </h2>
                <p className="mt-4">
                  Nuestros servicios están dirigidos a personas mayores de 18 años o representantes legales de
                  empresas. No recolectamos intencionalmente datos de menores de edad.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  9. Cambios a esta Política
                </h2>
                <p className="mt-4">
                  Focus Web podrá actualizar esta Política de Privacidad en cualquier momento. Los cambios se
                  reflejarán en la fecha de &ldquo;Última revisión&rdquo; al inicio de este documento y entrarán en
                  vigencia desde su publicación en focusweb.cl.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">10. Contacto</h2>
                <p className="mt-4">
                  Para consultas sobre esta Política de Privacidad o el tratamiento de sus datos, puede escribir a:
                </p>
                <p className="mt-4">
                  <strong className="block text-foreground">Focus Web Chile</strong>
                  contacto@focusweb.cl
                  <br />
                  +56 9 2226 1321
                  <br />
                  focusweb.cl
                </p>
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
