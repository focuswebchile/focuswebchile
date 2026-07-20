# Focus Web — Handoff del sitio (focusweb-chile) — Julio 2026

**Repositorio:** `focusweb-chile` (Next.js, deploy en Vercel, auto-deploy en push a `main`)
**Fecha de cierre:** 16 de julio de 2026 — actualizado 20 de julio de 2026 (ver sección 5 en adelante)
**Handoff relacionado:** `docs/handoffs/OPS-HANDOFF-JULIO-2026.md` (infraestructura del agente y n8n en Hetzner)

---

## Resumen de la sesión (16 de julio)

Punto de vista del sitio (no de la infraestructura): se embebió el widget de chat del asistente de FocusWeb en el sitio en producción (reemplazando el botón flotante de WhatsApp), se pulió su UX en varias rondas de feedback real, se agregaron las páginas legales (Términos y Política de Privacidad), y se ordenó la estructura de archivos del repo (documentación suelta y carpeta de imágenes duplicada).

---

## 1. Widget de chat — reemplaza el botón de WhatsApp

Componente: `src/components/chat-widget.tsx`. Habla con el agente de n8n vía `https://op.focusweb.cl/webhook/focusweb-site-chat/chat` (ver OPS-HANDOFF para el detalle de infraestructura).

**Estado final de la UX, tras varias rondas de ajuste:**

- **Botón flotante:** ícono de chat (`MessageCircle`) siempre visible, no cambia a "minimizar" — solo gira 90° como micro-feedback al abrir/cerrar (se probó cambiar el ícono a `Minus` al abrir, pero se revirtió: rompía la asociación visual de "esto es un chat", no un WhatsApp).
- **Botón de cerrar del header:** ahora es "Minimizar" (ícono `Minus`, no `X`) — feedback real: un usuario podía pensar que la `X` borraba la conversación. La conversación se mantiene en memoria del componente mientras dure la sesión del navegador.
- **Aviso antes de la primera interacción:** una burbuja con copy ("¿Tienes dudas sobre tu web? Escríbeme 👋") aparece a los 4 segundos si el usuario no ha interactuado, colapsando a una píldora breve ("¿Te ayudo?") si la descarta. Antes había dos elementos separados que se superponían — se unificaron.
- **Saludo simulado:** al abrir el chat sin mensajes previos, se muestra un indicador de "escribiendo" (~1.1s) seguido de un saludo fijo en el frontend (no llama al agente real) — evita gastar una llamada real solo para el saludo, y evita el doble "¡Hola!" (el agente real ya no se re-presenta en su primera respuesta, ver AGENTS.md).
- **Delay mínimo de tipeo:** las respuestas reales del agente esperan un mínimo de ~0.9s (hasta 2.2s según el largo de la respuesta) mostrando el indicador de "escribiendo" antes de aparecer, aunque el webhook responda al instante — se sentía demasiado instantáneo/robótico sin esto.
- **Avatar del logo:** cada mensaje del asistente (saludo, indicador de tipeo, y respuestas) muestra el logo de FocusWeb en un círculo de 24px a la izquierda de la burbuja, para reforzar credibilidad. Se usa `<img>` plano (no `next/image`) para este ícono chico — con `next/image` se generaba una petición de optimización aparte del tamaño usado en el header, causando un flash de placeholder en desarrollo.
- **Tamaño del panel:** `h-[65vh] max-h-[480px] w-[90vw] max-w-[360px]` — se redujo desde una versión más grande tras feedback de que se sentía demasiado grande en desktop.
- **Botón flotante:** 64×64px (`h-16 w-16`) — se agrandó desde 56×56 original.
- **Pie del panel:** "Diseñado por FocusWeb Chile".

**Pendiente / a evaluar a futuro:** ninguno bloqueante. Si se agregan más rondas de feedback de uso real, revisar longitud de las respuestas del agente (mensajes muy largos se ven bien pero podrían acortarse para mobile).

---

## 2. Páginas legales

- `src/app/terminos-y-condiciones/page.tsx` y `src/app/politica-de-privacidad/page.tsx` — contenido fuente en `docs/legal/terminos-y-condiciones-focusweb.md` y `docs/legal/politica-de-privacidad-focusweb.md` (movidos ahí en la limpieza de estructura, ver sección 4).
- Agregadas a un nuevo grupo **"Legal"** en el footer (`src/components/footer.tsx`), en vez de mezclarse sueltas — decisión explícita de Felipe: con un agente de IA respondiendo en el sitio, quería que estas páginas se sintieran completas y encontrables, no un trámite mínimo.
- Motivo del esfuerzo extra en redacción: el sitio usa IA/automatización de forma visible (agente de chat, optimizaciones), lo que genera más fricción con clientes rigurosos — se buscó que la política fuera clara y específica, no genérica.

---

## 3. Footer — ajustes de layout

- Fila "Legal" (Términos / Política de Privacidad) puesta en una sola línea, espaciado corregido.
- En desktop, "© 2026 FocusWeb Chile" y el grupo "Legal" ahora se leen como un bloque centrado horizontalmente (antes "FocusWeb Chile" quedaba pegado a la izquierda y se sentía descolgado del resto) — implementado con `grid grid-cols-1 sm:grid-cols-3` para repartir el espacio simétricamente entre ambos lados.

---

## 4. Limpieza de estructura del repo

Motivo: demasiados archivos sueltos en la raíz y una carpeta de imágenes duplicada innecesaria.

- **Documentación movida a `docs/`** (ninguno estaba referenciado desde código, verificado con grep antes de mover):
  - `docs/planning/` ← `PHASE2-restructure.md`, `PHASE3-cleanup.md`, `PHASE4-content-density.md`
  - `docs/handoffs/` ← `OPS-HANDOFF-JULIO-2026.md`, `SEO-HANDOFF-JULIO-2026.md`, y este mismo archivo
  - `docs/legal/` ← los dos `.md` fuente de Términos y Política de Privacidad
  - `BRAND.md` y `design.md` **se quedan en la raíz** — `CLAUDE.md` los referencia explícitamente ahí como fuente de verdad de tono y sistema visual.
- **`.claude/` agregado a `.gitignore`** — config local de Claude Code, no se versiona.
- **Carpeta `imagenes/` eliminada por completo** (vivía suelta en la raíz, duplicando `public/`):
  - 9 archivos eran copias idénticas (verificado con `md5`) de assets que el sitio ya servía desde `public/` — borrados sin impacto.
  - 3 archivos eran exports viejos sin ninguna referencia en el código (`1200x630.png`, `512x512.png`, `200x200-header.png`) — borrados.
  - 8 fotos nuevas (agregadas por Felipe, aún no usadas en ningún componente) se movieron a `public/` — quedan listas para usarse, pero **integrarlas en el sitio (hero, testimonios, etc.) es trabajo pendiente, no hecho todavía.**

**Corrección de un error propio:** en la sesión anterior se afirmó que `agente-focusweb/` era un repositorio git separado (nested repo) — es falso, es solo una carpeta normal sin trackear dentro de este mismo repo (`focusweb-chile`). Si se quiere versionar el contenido de esa carpeta, es un commit normal acá, no un repo aparte.

---

## 5. Voz de marca — VOICE.md, auditoría y reescritura de copy (19–20 de julio)

Punto de partida: Felipe subió `Tonovozphome.md` (auditoría inicial del Hero) y luego `VOICE.md` (identidad de marca, principios editoriales, frases prohibidas — la fuente de verdad) y `Homepage.md` (auditoría sección por sección de la home contra `VOICE.md`, con historial de decisiones). Los tres quedaron en la raíz del repo.

**`Homepage.md` documenta dos tipos de chequeo repetibles** (no solo el resultado de una sesión): auditoría por sección contra `VOICE.md`, y "lectura corrida" (leer toda la home de corrido buscando dónde se rompe la sensación de una sola voz — encontró cosas que la auditoría por sección no vio, como verbos en plural sueltos al lado de uno ya corregido). Ver ese doc para el detalle completo, no se repite acá.

**Cambios aplicados en la home**, resumidos (detalle línea por línea en `Homepage.md`):
- Reescritas de voz "nosotros"/agencia a primera persona singular: sección Servicios (`main-services-section.tsx`) y Proceso (`process-section.tsx`) — títulos de paso que usaban vocabulario literalmente prohibido en `VOICE.md` §9 ("Diagnóstico estratégico", "Implementación técnica") pasaron a verbos cotidianos.
- Eyebrow del Hero: "Felipe Ibar — diseño web, SEO y automatización" → "Más que una página web".
- Corregidos 4 "nosotros" sueltos en microcopy de cierre (CTA pre-FAQ, subtítulo FAQ, mensaje de éxito del formulario de contacto — dos veces, en dos rondas de lectura corrida).
- Autor del blog: de logo/nombre de marca ("FocusWeb") a "Felipe Ibar" con foto real.
- Caso ABCIS: la cita nombraba "FocusWeb" como entidad en vez de a Felipe — corregido. Además se rebalanceó badge y métricas (menos peso visual/ámbar, más peso a una frase humana de Felipe) sin sacar los números.
- Resultados/GA4: la sección menos personal de la home (incluía texto crudo de la interfaz de GA4) — se le dio voz de Felipe en los puntos donde no hay un dato que citar (H2, H3, pie de captura), sin tocar chips "GA4", valores ni fechas — esos deben seguir sonando a dato duro para ser creíbles.
- Footer: sacado el label "Legal" suelto antes de los links de Términos/Privacidad.

**Hero (`hero-section.tsx`):**
- Párrafo bajo el H1 reescrito por Felipe: "No te entrego una web y desaparezco. Primero entiendo qué necesita tu negocio. Después construyo la solución correcta y sigo contigo para asegurarme de que todo funcione." (ajustado a primera persona singular — la versión enviada tenía "construimos" en plural).
- CTAs: "Cuéntame qué te pasa con tu sitio" → "Cuéntame qué necesitas" (mismo link WhatsApp); "Ver cómo trabajo" → "Conocer mi proceso", ahora apunta a `/nuestro-proceso` (antes `/metodologia`).

**Sección "Sobre mí" (`about-section.tsx`):**
- Foto nueva `public/sobremi.png` (retrato, reemplaza `felipe-ibar.webp` en esta sección puntual).
- Layout invertido: texto a la izquierda, foto a la derecha en desktop (con `lg:order-2`/`lg:order-1`, sin tocar el DOM, para que en mobile la foto siga apareciendo primero como estaba pensado).
- Foto agrandada dos veces a pedido (columna final: 460px en desktop).
- H2 "No hago solamente páginas web" partido en dos líneas.

---

## 6. Página Nuestro Proceso — voz + layout (19–20 de julio)

- H1 y bajada nuevos: "Así convierto una idea en resultados" / "No importa si necesitas una web nueva, mejorar la que ya tienes o resolver un problema específico. Primero entiendo tu negocio para recomendarte la mejor solución para ti." (`process-content.tsx`).
- Reescritura de voz completa del timeline de 4 pasos: títulos "Priorización"/"Ejecución"/"Medición" (consultora) → "Qué hacer primero"/"Manos a la obra"/"Medir lo que importa"; verbos prohibidos por `VOICE.md` §9 ("Implementamos", "Validamos") corregidos a primera persona singular; jerga de gestión de proyectos ("Backlog", "Quick wins") reemplazada.
- Las 4 cards de valores (Transparencia, Enfoque, Acompañamiento, Calidad): descripciones a primera persona; se sacó el badge "FocusWeb · [Label]" repetido (entidad hablando en vez de Felipe) — no se reemplazó por "Felipe", se eliminó directamente por pedido de Felipe (no aportaba). Layout de esas 4 cards pasó de fila apilada de ancho completo a grilla 2×2, tras el ajuste.
- Ajustes de layout: título "Lo que puedes esperar del proceso" y el CTA final "¿Vemos si este proceso es para tu proyecto?" partidos en dos líneas (eran una sola línea muy ancha).

---

## 7. Página Mi Historia — voz + layout (19–20 de julio)

**Auditoría de voz** (`page.tsx`, `diferente-timeline.tsx`): mismo patrón sistemático que en Servicios/Proceso — casi cada párrafo abría en "nosotros" y saltaba a "yo"/"tú" en la misma oración. Se dejaron intactas, a pedido explícito, "Quién soy" (ya estaba bien) y la cita de cierre (el "nosotros" ahí es tú-y-yo válido, viene después de "hablemos"). Se corrigieron 8 verbos en plural en "Lo que me mueve" y "Qué me hace diferente", más "el negocio"/"su crecimiento" → "tu negocio"/"tu crecimiento" en una cita.

**Rediseño de layout de "Lo que me mueve"** — pasó por 3 iteraciones en la misma sesión:
1. Layout original: foto vertical dominante + 3 tarjetas apiladas con padding grande — mucho scroll para leer la sección completa.
2. Opción B (elegida entre dos propuestas): foto como banner horizontal + 3 tarjetas compactas en fila.
3. Rediseño final a pedido de Felipe, con mockup propio: foto banner reemplazada por **collage de 2 fotos superpuestas** (`public/felipe_en_computador.webp` atrás, `public/felipe_computador_espalda.webp` adelante con borde tipo polaroid), y las 3 tarjetas pasaron a **lista de texto plano sin bordes/sombra/ícono** (badge + título + párrafo). Los badges se ajustaron de pill sólido grande (chocaba visualmente con los títulos) a eyebrow chico en mayúsculas — mismo patrón que "Qué reviso"/"Qué hago" de Nuestro Proceso, por consistencia con el resto del sitio.
- No se recortó copy en ningún punto de este rediseño — el ahorro de espacio vino del layout, no del texto.

**Fotos nuevas usadas esta sesión** (subidas directamente a `public/` por Felipe, no son parte del batch de 8-9 fotos del 16 de julio mencionado en la sección 5 original — ver pendiente 2 abajo): `sobremi.png`, `felipe_en_computador.webp`, `felipe_computador_espalda.webp`.

---

## 8. Pendiente para retomar

1. Decidir si versionar `agente-focusweb/` en este repo (hoy sigue sin trackear, a la espera de una decisión explícita de Felipe).
2. Las 8-9 fotos del batch del 16 de julio (`Cara de sorpresa reaccion.png`, `En_computador.png`, `Hablando por telefono.png`, `Manos sobre el teclado.png`, `en_computador_mirando_la_camara.JPG`, `felipe.png`, `imagen_hero_focuswebchile.png`, `seccion_hero_felipe.png`, `Felipe_imagen_seccion_hero.png`) **siguen sin integrarse en ningún componente** — las fotos usadas en la sesión del 19–20 de julio (`sobremi.png`, `felipe_en_computador.webp`, `felipe_computador_espalda.webp`) son subidas nuevas y distintas, no resuelven este pendiente.
3. La auditoría de voz contra `VOICE.md` cubrió hasta ahora: Home (completa), Nuestro Proceso, Mi Historia. Quedan sin auditar: FAQ, subpáginas de Servicios, Landing page, Metodología, posts del blog.
4. Sin pendientes bloqueantes en el widget de chat — funcionalidad y UX validadas en producción.
