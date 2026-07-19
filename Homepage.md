# Homepage — Auditoría y Decisiones de Copy

> Aplica los principios de `VOICE.md` / `Tonovozphome.md` a la home real
> (`page.tsx` → `HeroSection` + `HomeSections`, 13 secciones). Este doc
> registra qué ya está alineado, qué no, y qué se decidió hacer con cada
> sección — para no repetir la auditoría cada vez que se toque la home.

## Estado por sección (auditoría 2026-07-19, actualizado tras pase de reescritura)

### ✅ Ya alineadas — no tocar

- **Hero** — coincide casi palabra por palabra con lo que pedía
  `Tonovozphome.md`: CTAs, microcopy y párrafo de 4 ideas ya aplicados.
  Eyebrow actualizado de "Felipe Ibar — diseño web, SEO y automatización"
  (descriptivo/genérico) a "Más que una página web" — cierra el pendiente
  de la auditoría original.
- **Sobre mí** — "prefiero construir relaciones de largo plazo antes que
  entregar un proyecto y desaparecer" — coherente 1:1 con la voz.
- **¿Cuál es tu situación? (Needs)** — arranca del problema del cliente,
  no del servicio. Referencia de cómo debería sonar cualquier sección
  nueva.
- **No vendo paquetes. Diagnóstico primero. (ValuePropDark)** — el
  mensaje central de la marca convertido en titular. La mejor sección de
  toda la home en tono — usar como vara de medir para las demás.
- **CTA final, FAQ, Contacto** — primera/segunda persona, cercanas, sin
  jerga. Alineadas.
- **Nuestros servicios principales → "¿Qué te está pasando con tu
  sitio?"** — reescrita. Eyebrow pasó de "Servicios" a "Por dónde
  empezar"; el h2 pasó de tercera persona plural a pregunta en segunda
  persona; la bajada "Especializados en optimización técnica..." se
  reemplazó por una invitación a elegir según la situación del lector.
  Las 3 descripciones de tarjeta ahora abren con el problema del cliente
  ("Si no sabes por qué tu sitio no aparece en Google...", "Si tu sitio
  carga lento...", "Si no tienes sitio, o el que tienes no te
  representa...") antes de mencionar el servicio, y la de Desarrollo Web
  ya no enumera diseño/velocidad/SEO/arquitectura en una sola frase
  corrida. Los `seoDetail` pasaron de "nosotros" a primera persona
  singular. Bullets técnicos se mantuvieron (detalle de apoyo, no
  enumeración de servicios).
- **Proceso (Metodología) → "Así trabajo, sin misterios"** — reescrita.
  Los 4 pasos dejaron los nombres prohibidos explícitamente en
  `VOICE.md` §9 ("Diagnóstico estratégico", "Implementación técnica",
  "Publicación y validación", "Soporte y mejora continua") por verbos
  cotidianos: "Entender qué te pasa", "Hacer los cambios", "Publicarlo y
  probarlo", "Seguir ahí". Las descripciones pasaron de voz "nosotros"
  ("Auditamos... Aplicamos...") a primera persona singular, y el último
  paso usa textual la frase de marca de `VOICE.md` §8: "Y aquí no
  desaparezco." El subtítulo de sección también perdió la enumeración de
  sustantivos de consultora ("Diagnóstico, implementación, validación y
  soporte...").

### ❌ Suenan a agencia — reescribir

*(vacío — Servicios y Proceso ya pasaron a la lista de alineadas arriba)*

### ⚠️ Balance a ajustar — no reescribir del todo

- **Caso ABCIS** — ✅ **Rebalanceado (2026-07-19).** Funciona bien como
  prueba social (un caso real con resultados es justo lo que genera
  confianza), pero el badge ("Caso de Rescate SEO") y el peso de las
  métricas (+1M, 100%, 0 incidentes) inclinaban la balanza hacia
  "impacto" cuando `VOICE.md` pide que gane siempre "confianza". No se
  reescribió de cero — se hicieron 3 cambios puntuales:
  - Badge: "Caso de Rescate SEO" → "Cliente real"; color pasó de ámbar
    (alarma/urgencia) a neutro (border-border/bg-card), bajando el tono
    de drama.
  - Métricas: mismos 3 números (+1 M, 100%, 0), pero de
    `text-4xl font-black text-primary` a
    `text-2xl font-bold text-foreground/80` — ya no compiten en peso
    visual con la cita del cliente.
  - Se agregó una frase de Felipe en primera persona bajo el H2 ("Un
    ataque así no es solo un problema técnico — es la reputación
    completa de un negocio en juego. Así lo acompañé hasta dejarlo
    resuelto.") que sube el peso a la parte humana sin tocar la cita del
    cliente ni el resto de la sección.
  El problema puntual de la cita (nombraba "FocusWeb" como entidad en
  tercera persona) ya se había corregido antes — ver "Hallazgos de
  lectura corrida" abajo, hallazgo 3.

## Hallazgos de lectura corrida (cohesión de voz)

> Chequeo distinto a la auditoría por sección de arriba. En vez de
> revisar sección por sección contra `VOICE.md`, se lee la home completa
> de corrido — Hero hasta el final, como un visitante — buscando el
> punto exacto donde deja de sentirse que habla una sola persona. La
> auditoría por sección responde "¿esta sección cumple las reglas?"; la
> lectura corrida responde "¿el recorrido completo suena a una sola
> voz?" — son preguntas distintas y pueden dar resultados distintos: una
> sección puede pasar la auditoría y aun así generar un salto de voz al
> leerla justo después de la anterior (o un problema puede ser tan chico
> — un solo verbo — que ninguna auditoría por sección lo marcaría como
> propio).

### Cómo se hace

Leer todo el copy de la home en el orden real de renderizado (`page.tsx`
→ `HeroSection` + las 13 secciones de `HomeSections`), sin pausar por
sección, y marcar cualquier punto donde el narrador implícito cambia: de
"yo" (Felipe) a "nosotros" (la empresa), de primera persona a tercera
persona/marca, o de tono conversacional a tono de reporte/dato.

### Corrida 2026-07-19 — 4 hallazgos

1. **3 "nosotros" sueltos en microcopy de cierre** — verbos en plural
   colados en medio de una voz en primera persona singular, justo en los
   momentos de más carga emocional (CTA antes del FAQ, subtítulo del
   FAQ, mensaje de éxito del formulario de contacto). Invisibles
   leyendo rápido, pero reales. ✅ **Corregido:** "te muestro"
   (`process-audit-cta.tsx`), "Resuelvo tus dudas" (`faq-section.tsx`),
   "Te contacto pronto" (`contact-section.tsx`).
2. **Autor del blog = "FocusWeb"** — el byline de los posts mostraba el
   logo y el nombre de la marca como autor: exactamente el split
   marca/persona que `VOICE.md` §1 dice que nunca debería pasar. ✅
   **Corregido:** ahora dice "Felipe Ibar" con su foto real
   (`/felipe-ibar.webp`, la misma de Sobre mí) en
   `home-blog-section.tsx`.
3. **Cita de Caso ABCIS en tercera persona sobre "FocusWeb"** — la cita
   del cliente decía "FocusWeb diagnosticó la raíz del ataque...",
   nombrando la marca como entidad en vez de a Felipe como persona. ✅
   **Corregido** con cambio quirúrgico y nada más: "FocusWeb" →
   "Felipe", sin tocar el resto de la cita, el badge ni las métricas
   (ese rebalanceo más amplio sigue en "⚠️ Balance a ajustar" arriba).
4. **Resultados que se pueden medir (GA4)** — era la sección con menos
   primera persona de toda la home; incluía texto literal de la interfaz
   de GA4 ("Total de usuarios por primer grupo de canales..."). ✅
   **Resuelto (2026-07-19), a propósito sin tocar los datos.** La
   tensión real era "sonar a Felipe" vs. "mostrar datos duros de un
   dashboard" — no se resuelve borrando el dashboard (perdería
   credibilidad como prueba), se resuelve dándole voz a Felipe solo en
   los puntos donde no hay un dato que citar:
   - H2 de la sección: "Resultados que se pueden medir" → "No prometo
     resultados. Te muestro los datos." (misma estructura que "No vendo
     paquetes. Diagnóstico primero." de ValuePropDark — la sección con
     mejor tono de toda la home — para que la entrada a la parte más
     fría de la home también suene a Felipe).
   - Subtítulo: de listar "tráfico, velocidad y clientes" a nombrar que
     es un cliente real y concreto, no una lista de categorías.
   - H3 de la tarjeta de tráfico: "Datos reales de Google Analytics" →
     "Así le fue a un cliente real" (el protagonista pasa de ser la
     herramienta GA4 a ser el negocio del cliente).
   - Pie de la captura de pantalla: el texto crudo de la interfaz de GA4
     ("Total de usuarios por primer grupo de canales (Grupo de canales
     predeterminado)") → "Captura real de Google Analytics, sin
     editar." — sigue siendo prueba verificable, pero en palabras de
     Felipe, no de la UI de Google.
   Lo que **no** se tocó, a propósito: los chips "GA4", los valores
   (+99, 3 min, 2.9), el rango de fechas exacto, y toda la tarjeta
   "Impacto de velocidad" (ya sonaba bien: "Cada segundo cuesta
   clientes."). Esos elementos necesitan seguir leyéndose como dato
   duro — ahí "sonar a reporte" es la señal de que es verificable, no un
   defecto de voz.

### Corrida 2026-07-19 (repetida, después del rebalanceo de ABCIS/GA4) — 1 hallazgo nuevo

Se repitió la lectura corrida completa, como sugería el "Próximo paso"
de la corrida anterior, para confirmar que rebalancear Caso ABCIS y
Resultados/GA4 no hubiera introducido un salto de voz nuevo. Confirmado:
no lo introdujo — el nuevo párrafo humano en Caso ABCIS ("Así lo
acompañé hasta dejarlo resuelto") y el nuevo H2 de Resultados ("No
prometo resultados. Te muestro los datos.") de hecho suavizan esas dos
transiciones más de lo que pedía el arreglo mínimo.

Pero apareció un quinto "nosotros" suelto que la corrida anterior no
detectó, porque cae en la misma pantalla — la de éxito del formulario de
contacto — justo al lado del que ya se había corregido, y por eso pasó
desapercibido revisando solo esa variable:

5. **"Escríbenos" en la pantalla de éxito del contacto** — un renglón
   debajo de "¡Listo! Te contacto pronto." (ya en singular), la
   siguiente línea decía "Escríbenos por WhatsApp si quieres avanzar más
   rápido." — nosotros, en la misma pantalla, un segundo después de que
   la línea de arriba ya había dicho "yo". ✅ **Corregido:** "Escríbenos"
   → "Escríbeme" (`contact-section.tsx`).

**Lección para la próxima corrida:** un "nosotros" suelto puede esconderse
al lado de uno ya corregido — conviene releer el bloque completo donde
vivía el error, no solo la línea que se tocó.

## Próximo paso

Todo lo detectado hasta ahora (auditoría por sección + 2 corridas de
lectura corrida) está resuelto: Servicios, Proceso, el eyebrow del Hero,
los 4 "nosotros" sueltos (3 + el de "Escríbenos"), el autor del blog, la
cita y el rebalanceo de Caso ABCIS, y Resultados/GA4. No hay pendientes
abiertos de este ciclo de revisión.

Próximo chequeo natural: la próxima vez que se edite cualquier texto de
la home, repetir la lectura corrida completa una vez más — es barata de
hacer y, como acaba de demostrar la corrida de hoy, sigue encontrando
cosas que la auditoría por sección no ve.

---

**Estado de este doc:** v1 (2026-07-19). Refleja la auditoría real de la
home actual, hecha por Claude Code contra `VOICE.md`/`Tonovozphome.md`.
Este doc registra **dos tipos de chequeo distintos**, ambos repetibles
cada vez que se toque la home — no solo el resultado de hoy:

1. **Auditoría por sección** ("Estado por sección" arriba) — sección por
   sección contra `VOICE.md`.
2. **Lectura corrida** ("Hallazgos de lectura corrida" arriba) — la home
   completa de una sola vez, buscando dónde se rompe la sensación de una
   sola voz.

Actualizar este doc después de cada pase de cualquiera de los dos,
marcando qué pasa de ❌/⚠️/⏳ a ✅ — así queda como historial de
decisiones, no solo como snapshot de un día.
