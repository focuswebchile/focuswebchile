# Focus Web — Handoff del sitio (focusweb-chile) — Julio 2026

**Repositorio:** `focusweb-chile` (Next.js, deploy en Vercel, auto-deploy en push a `main`)
**Fecha de cierre:** 16 de julio de 2026
**Handoff relacionado:** `docs/handoffs/OPS-HANDOFF-JULIO-2026.md` (infraestructura del agente y n8n en Hetzner)

---

## Resumen de la sesión

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

## 5. Pendiente para retomar (punto de vista sitio)

1. Decidir si versionar `agente-focusweb/` en este repo (hoy sigue sin trackear, a la espera de una decisión explícita de Felipe).
2. Integrar las 8 fotos nuevas movidas a `public/` en los componentes correspondientes (hero, sección "quién es Felipe", etc.) — sin definir todavía dónde va cada una.
3. Sin pendientes bloqueantes en el widget de chat — funcionalidad y UX validadas en producción.
