import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | FocusWeb",
  description:
    "Términos y condiciones de uso de los servicios de Focus Web Chile: contratación, servicios, propiedad del contenido, pagos, cancelaciones y más.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background gradient-mesh">
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24">
          <div className="container mx-auto max-w-3xl">
            <SiteBreadcrumb
              className="mb-6"
              items={[{ label: "Inicio", href: "/" }, { label: "Términos y Condiciones" }]}
            />

            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Términos y Condiciones de Uso — Focus Web Chile
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Última revisión: 16 de julio de 2026</p>
            <p className="mt-6 text-base font-semibold text-foreground/90">
              Lea este documento atentamente, ya que contiene información importante respecto a sus derechos y
              obligaciones.
            </p>

            <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground/80">
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  1. Información general
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Estos Términos y Condiciones regulan la relación de servicio entre <strong>Focus Web Chile</strong>
                    , operado por <strong>Felipe Alejandro Ibar Jeppesen, RUT 16.659.089-2</strong>, persona natural
                    que presta servicios mediante boleta de honorarios, en adelante &ldquo;Focus Web&rdquo;,
                    &ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;, y la persona natural o jurídica que contrata sus
                    servicios, en adelante &ldquo;el cliente&rdquo;, &ldquo;usted&rdquo; o &ldquo;su&rdquo;.
                  </p>
                  <p>
                    La contratación de cualquier servicio de Focus Web (ya sea por escrito, vía formulario, WhatsApp,
                    correo electrónico o transferencia de pago) implica que usted ha leído, comprende y acepta regirse
                    por este documento, junto con cualquier modificación posterior.
                  </p>
                  <p>
                    Focus Web podrá modificar estos Términos en cualquier momento. Los cambios entrarán en vigencia
                    desde su publicación en focusweb.cl, indicada en la fecha de &ldquo;Última revisión&rdquo;. El uso
                    continuo de nuestros servicios tras una actualización constituye la aceptación de los nuevos
                    términos.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  2. Condiciones de contratación
                </h2>
                <div className="mt-4 space-y-4">
                  <p>Para contratar los servicios de Focus Web, el cliente debe:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Ser mayor de 18 años, o contar con representación legal si actúa a nombre de una empresa.</li>
                    <li>
                      Proporcionar nombre completo o razón social, RUT, correo electrónico y un número de contacto
                      (WhatsApp) vigentes.
                    </li>
                    <li>
                      Entregar de forma oportuna y completa el contenido necesario para el proyecto (textos,
                      imágenes, logo, accesos, información del negocio, etc.).
                    </li>
                    <li>
                      Ser el único responsable de contar con los derechos necesarios sobre el contenido, imágenes y
                      marcas que entregue para su publicación.
                    </li>
                    <li>
                      Mantener sus datos de contacto actualizados. Focus Web no se responsabiliza por la falta de
                      recepción de notificaciones producto de datos de contacto erróneos o desactualizados.
                    </li>
                  </ul>
                  <p>
                    El incumplimiento grave de estas condiciones faculta a Focus Web para suspender el proyecto o
                    servicio contratado.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  3. Descripción de los servicios
                </h2>
                <p className="mt-4">
                  Focus Web presta servicios de marketing digital para pequeñas y medianas empresas (pymes) chilenas,
                  que pueden incluir, según el plan o proyecto contratado:
                </p>

                <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  3.1 Diseño y desarrollo web
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Diseño, maquetación y publicación de un sitio web según el contenido (textos, imágenes, videos,
                    enlaces) entregado por el cliente.
                  </li>
                  <li>
                    Configuración técnica básica del sitio (estructura, velocidad de carga, adaptación a dispositivos
                    móviles).
                  </li>
                  <li>
                    Los plazos de entrega comienzan a contar únicamente desde el momento en que el cliente entrega{" "}
                    <strong>la totalidad</strong> del contenido solicitado. Si el cliente no entrega su contenido
                    dentro de un plazo de 30 días desde la contratación, Focus Web se reserva el derecho de reordenar
                    sus prioridades de trabajo, pudiendo posponer la entrega hasta contar con nueva disponibilidad.
                  </li>
                  <li>
                    Las solicitudes de diseño personalizado (módulos, funcionalidades a medida) dependen de la
                    factibilidad técnica de la plataforma utilizada (ej. WordPress u otra), lo cual será informado al
                    cliente antes de iniciar dicho desarrollo.
                  </li>
                </ul>

                <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  3.2 SEO técnico y optimización (Core Web Vitals)
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Auditoría y aplicación de mejoras de SEO técnico (velocidad, indexación, estructura, metadatos)
                    sobre el sitio del cliente.
                  </li>
                  <li>
                    Los resultados en posicionamiento dependen de múltiples factores externos (competencia,
                    algoritmos de buscadores, antigüedad del dominio, comportamiento del mercado), por lo que Focus
                    Web <strong>no garantiza posiciones específicas</strong> en los resultados de búsqueda, sino la
                    correcta implementación de buenas prácticas.
                  </li>
                </ul>

                <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  3.3 Gestión de redes sociales / contenido para Instagram
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Creación y/o programación de contenido (reels, carruseles, publicaciones) según el plan contratado.</li>
                  <li>
                    Los volúmenes, frecuencia y tipo de contenido se rigen por lo específicamente acordado en la
                    propuesta o plan del cliente.
                  </li>
                  <li>
                    El cliente es responsable de aprobar el contenido dentro de los plazos que se le indiquen; la
                    falta de respuesta puede retrasar la publicación sin que ello sea responsabilidad de Focus Web.
                  </li>
                </ul>

                <h3 className="font-display mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  3.4 Hosting y dominio (proveedores externos)
                </h3>
                <p className="mt-4">
                  Focus Web <strong>no aloja los sitios web en servidores propios</strong>. El hosting y/o el dominio
                  son contratados por el cliente directamente con un proveedor externo (ej. Cloudflare, otro proveedor
                  de hosting, NIC Chile para dominios .cl), o bien Focus Web puede gestionar dicha contratación a
                  nombre y cargo del cliente si así se acuerda expresamente. En cualquier caso:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>El cliente es el titular del dominio y del servicio de hosting contratado.</li>
                  <li>
                    Focus Web no se responsabiliza por caídas, fallas técnicas, costos o políticas del proveedor de
                    hosting/dominio externo.
                  </li>
                  <li>
                    Al finalizar la relación comercial, el cliente conserva el control de su dominio y hosting, sin
                    perjuicio de lo señalado en el punto 4 sobre propiedad del sitio.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  4. Propiedad del sitio web y del contenido
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    El <strong>contenido</strong> entregado por el cliente (textos, imágenes, logo, videos) sigue
                    siendo de su propiedad en todo momento.
                  </li>
                  <li>
                    El <strong>código, diseño y estructura</strong> desarrollados específicamente por Focus Web para
                    el proyecto se entregan en propiedad al cliente una vez pagado en su totalidad el servicio
                    contratado, salvo que se indique lo contrario por escrito en la propuesta.
                  </li>
                  <li>
                    Focus Web se reserva el derecho de mostrar capturas de pantalla o menciones del sitio/proyecto
                    realizado como parte de su portafolio o material de marketing, salvo que el cliente solicite
                    expresamente lo contrario por escrito.
                  </li>
                  <li>
                    El cliente declara y garantiza contar con todos los derechos necesarios sobre el contenido que
                    entrega, y se obliga a mantener indemne a Focus Web ante cualquier reclamo de terceros derivado
                    del uso indebido de dicho contenido.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  5. Contenidos y publicaciones prohibidas
                </h2>
                <p className="mt-4">Focus Web no prestará servicios ni publicará contenido que:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Sea de carácter adulto, pornográfico o ilegal.</li>
                  <li>
                    Infrinja derechos de autor, marcas registradas o cualquier otro derecho de propiedad intelectual
                    de terceros.
                  </li>
                  <li>Contenga software o scripts maliciosos.</li>
                  <li>Promueva productos o actividades ilegales.</li>
                  <li>
                    Contenga contenido discriminatorio, ofensivo o que vulnere la integridad de terceros (xenofobia,
                    racismo, homofobia, u otras formas de discriminación).
                  </li>
                </ul>
                <p className="mt-4">
                  Si un cliente solicita este tipo de contenido, Focus Web se reserva el derecho de rechazar el
                  proyecto o suspender el servicio sin derecho a reembolso.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  6. Soporte y comunicación
                </h2>
                <p className="mt-4">
                  El soporte y las consultas relacionadas con proyectos en curso se canalizan a través de:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>WhatsApp: +56 9 2226 1321</li>
                  <li>Correo electrónico: contacto@focusweb.cl</li>
                  <li>Instagram: @focuswebchile</li>
                </ul>
                <p className="mt-4">
                  Focus Web atiende dentro de un horario razonable de días hábiles y se reserva el derecho de no
                  responder mensajes ofensivos, agresivos o que insistan de forma reiterada sobre un tema ya resuelto.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  7. Duración del servicio y pagos
                </h2>
                <p className="mt-4">
                  Focus Web trabaja con modalidades de pago <strong>mixtas</strong>, según el tipo de servicio
                  contratado:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Proyectos únicos</strong> (ej. desarrollo de un sitio web): se rigen por anticipo + pago
                    final, según lo acordado en la propuesta.
                  </li>
                  <li>
                    <strong>Servicios recurrentes</strong> (ej. SEO mensual, gestión de contenido/redes): se rigen por
                    una suscripción mensual, cuyo pago habilita la continuidad del servicio en el periodo siguiente.
                  </li>
                </ul>
                <p className="mt-4">
                  El detalle de montos, fechas y forma de pago de cada servicio se especifica en la propuesta o
                  cotización aceptada por el cliente, la cual forma parte integral de este Contrato.
                </p>
                <p className="mt-4">
                  En caso de atraso de pago en servicios recurrentes, Focus Web podrá pausar el servicio hasta la
                  regularización del pago, sin que esto genere responsabilidad alguna para Focus Web por la
                  interrupción.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  8. Política de cancelación y reembolsos
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Proyectos únicos:</strong> el anticipo pagado no es reembolsable una vez que Focus Web ha
                    iniciado el trabajo (diseño, redacción, configuración). Si el cliente cancela antes de que el
                    trabajo haya comenzado, se reembolsa el 100% del anticipo.
                  </li>
                  <li>
                    <strong>Servicios recurrentes (suscripción mensual):</strong> el cliente puede cancelar en
                    cualquier momento, efectiva al término del periodo ya pagado. No se realizan reembolsos parciales
                    por periodos ya iniciados.
                  </li>
                  <li>
                    <strong>Errores de cobro:</strong> si se detecta un cobro indebido atribuible a un error de Focus
                    Web, el cliente puede solicitar el reembolso correspondiente dentro de un plazo de 7 días hábiles
                    desde el cobro, escribiendo a contacto@focusweb.cl.
                  </li>
                  <li>
                    Focus Web se reserva el derecho de evaluar cada solicitud de reembolso de forma individual
                    quedando la resolución final a su criterio, actuando siempre de buena fe.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  9. Limitación de responsabilidad
                </h2>
                <p className="mt-4">
                  Focus Web pone sus mejores esfuerzos y conocimiento técnico en cada proyecto, pero no garantiza
                  resultados específicos de negocio (ventas, conversiones, posicionamiento exacto en buscadores o
                  crecimiento de seguidores), ya que estos dependen de factores externos fuera de su control. Focus
                  Web no se hace responsable por daños indirectos, pérdida de ingresos o de datos derivados del uso de
                  servicios de terceros (hosting, plataformas de pago, redes sociales).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  10. Legislación aplicable
                </h2>
                <p className="mt-4">
                  Este Contrato se rige por las leyes de la República de Chile. Cualquier controversia derivada de su
                  interpretación o cumplimiento será sometida a los tribunales ordinarios de justicia de Talagante,
                  Chile.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">11. Contacto</h2>
                <p className="mt-4">Para consultas sobre estos Términos y Condiciones, puede escribir a:</p>
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
