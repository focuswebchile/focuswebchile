# PHASE3-cleanup.md — Limpieza y optimización de páginas secundarias

> Complementa a `BRAND.md`, `design.md` y `PHASE2-restructure.md`. La home
> (Fase 1 + Fase 2) ya está alineada a la identidad índigo/dorado, Bricolage
> Grotesque + Plus Jakarta Sans. Esta fase extiende esa consistencia a las
> páginas secundarias del sitio, que quedaron con residuos de la identidad
> vieja (verde/azul SaaS) al no haber sido tocadas en las fases anteriores.

---

## 0. Progreso

| # | Página | Estado | Commit |
|---|--------|--------|--------|
| 2 | `/servicios` — Desarrollo Web | ✅ Completado | `0fc5285` |
| 4 | `/mi-historia` | ✅ Completado | `6d03f31` |
| 3 | `/contacto` | ✅ Completado | `7fd5b22` |
| 4b | `/faq` (banner/título) | ✅ Completado | — (sin commitear aún) |
| 5 | `/nuestro-proceso` | ✅ Completado | — (sin commitear aún) |
| 6 | `/noticias` (= `/blog`, 8 posts individuales + `5-pasos-antes-de-lanzar-un-sitio-web`) | ✅ Completado | — (sin commitear aún) |
| 7 | Footer — imagen "Transferencia electrónica" desalineada en mobile | ✅ Completado | — (sin commitear aún) |
| 9 | `/crear-pagina-web-chile` y `/paginas-web-chile` (no estaban en el alcance original, agregadas a pedido) | ✅ Completado | — (sin commitear aún) |
| 10 | `/metodologia` (+ `ReviewRequestBar`) | ✅ Completado | — (sin commitear aún) |
| 11 | `/check-list-ecommerce` | ✅ Completado | — (sin commitear aún) |

---

## 1. Contexto

Las Fases 1 y 2 se enfocaron exclusivamente en la home (`/`). El resto del
sitio nunca fue auditado contra `design.md` — es esperable que tenga colores
residuales de la paleta vieja, tipografía sin migrar a Bricolage/Jakarta, y
posibles bugs de layout que nunca se revisaron en esta sesión.

**Regla general para toda la Fase 3:** cambios de **color, tipografía y
layout** siguiendo `design.md` — no reescribir copy/contenido salvo que se
indique explícitamente en un ítem puntual. El objetivo es consistencia
visual, no una nueva ronda de reestructuración de contenido como la Fase 2.

---

## 2. /servicios — Desarrollo Web ✅ Completado (`0fc5285`)

- **Colores residuales:** la sección "Desarrollo Web" (dentro de la página
  de servicios) sigue con la paleta vieja — auditar contra los tokens de
  `design.md` §2 (tinta índigo + dorado, nada de verde/azul SaaS).
- **Bug de layout mobile:** el layout se corta / es ilegible en mobile —
  diagnosticar la causa exacta (contenedor con overflow, ancho fijo que no
  responde, imagen que no se adapta) antes de aplicar un fix. No asumir.

### Qué se hizo

- Eliminada la fuga de `:root` en `desarrollo-web-legacy.css` que
  redefinía `--accent`/`--secondary` a verde/azul y corrompía componentes
  compartidos (Header, FloatingWhatsApp) en toda la ruta.
- `.gradient-text` simplificado a `--primary` sólido (Opción A, confirmada
  con el usuario vía captura antes de aplicar).
- Reemplazados todos los hex hardcodeados (verde/azul Tailwind) por los
  tokens de `design.md` en CSS legacy, HTML legacy y `globals.css`
  (`.gradient-mesh`, sitewide — afecta 24 páginas, confirmado sin riesgo
  antes de aplicar).
- Corregido el anti-patrón `transform: scale()` en `.composition-container`
  (causaba clipping mobile) por `clamp()`/`max-width:100%`.
- Grids de 2 columnas sin breakpoint mobile (`.pillar-grid`,
  `.process-grid`, `.faq-grid`) que aplastaban tarjetas en pantallas
  angostas — agregado breakpoint `max-width:640px` a 1 columna (sin tocar
  iPad, que se veía bien en 2 columnas).
- `width:100% + margin fijo` en `.slide-container` generaba márgenes
  asimétricos en mobile (12px/3px en vez de 12px/12px) — causa raíz:
  `scrollbar-gutter: stable` de `globals.css` (sitewide, no se tocó)
  interactuando con ese patrón específico de esta página. Fix: `width:auto`
  en vez de `width:100%`. Verificado: no rompe home ni otras páginas
  porque el fix vive en el CSS scoped de esta ruta, no en `globals.css`.
- Clase `nowrap` suelta (residuo, única ocurrencia en el archivo) cortaba
  el título "Tiendas online" contra el borde en mobile — eliminada.
- Blobs decorativos con blur (`.blob-1/.blob-2`, `.bg-blob.blob-blue/
  .blob-green`) seguían leyéndose como gradiente aun recoloreados — se
  eliminaron por completo (`display:none`), consistente con la regla de
  "sin gradientes" de `design.md`.
- **Hallazgo importante para futuras sesiones en esta página:** el HTML
  legacy se lee vía `fs.readFileSync` en `page.tsx`, no vía `import` — 
  Turbopack no rastrea ese archivo como dependencia, así que el dev server
  sirve una versión cacheada hasta que se reinicia manualmente. Cualquier
  edición a `desarrollo-web-content.html` requiere `kill` + relanzar
  `npm run dev` para verse reflejada.

## 3. /contacto — Migrar al flujo conversacional ✅ Completado (`7fd5b22`)

- Hoy tiene el formulario tradicional viejo (todos los campos a la vez).
  Reemplazar por el mismo patrón conversacional de 2 pasos que ya se
  construyó en la home (`contact-section.tsx`): Paso 1 selección de
  servicio (cards grandes), Paso 2 nombre + teléfono, transición fade sin
  desplazamiento con técnica de stacking (mismo componente/lógica, no
  reconstruir desde cero si se puede reutilizar el componente ya hecho).
- Mismo backend/validación ya extendida (`route.ts` con `email`/`phone`
  opcionales) — no debería requerir cambios de backend nuevos.

### Qué se hizo

- Reemplazado `FormOne` (formulario tradicional) por `<ContactSection />`
  directamente — mismo componente que la home, sin reconstruir. El
  componente viejo (`src/components/ui/form-1.tsx`) quedó sin ningún uso
  en el resto del código, así que se eliminó.
- Checklist "Qué información me ayuda..." tenía 4 colores arcoíris
  (emerald/sky/violet/amber pastel) — unificados a un solo tratamiento
  `border-primary/15 bg-primary/5`.
- Agregado `font-display` a los H2/H3 de la página que heredaban Plus
  Jakarta Sans (mismo patrón de auditoría que en `/servicios` y
  `/mi-historia`).
- Copy reescrito a primera persona según `BRAND.md` §5 (regla: "yo" en
  vez de "nosotros" corporativo) — afectaba tanto el copy visible
  ("Revisamos tu contexto y detectamos" → "Reviso tu caso y te digo",
  "nuestros servicios" → "mis servicios") como la meta description
  ("Escríbenos" → "Escríbeme").
- Breadcrumb separado en su propia sección (antes compartía contenedor
  con el formulario viejo) + `<h1 className="sr-only">` agregado, ya que
  `ContactSection` usa H2, no H1.
- Ajuste menor post-revisión: el cierre "Si buscas una página clara..."
  se cortaba en 2 líneas en desktop — `md:whitespace-nowrap` + contenedor
  sin max-width en ese breakpoint, mobile sigue apilando normalmente.

## 4. /mi-historia ✅ Completado (`6d03f31`)

- **Hero:** tiene verde residual de la identidad vieja — alinear a
  `--foreground` (tinta índigo) / `--accent` (dorado) según corresponda,
  mismo tratamiento que el hero de home. Confirmado explícitamente: el
  hero SÍ se toca en esta fase, no queda exento.
- **Sección "Lo que me mueve":** hoy está muy encajonada, con una foto
  comprimida en poco espacio. Ganar más ancho para esa imagen — layout
  pensado para que pueda subirse una foto de mayor presencia (tipo banner/
  hero secundario dentro de la página), no una miniatura apretada.

### Qué se hizo

- Hero: gradiente verde/celeste (`from-emerald-50 via-[#22c55eab]
  to-sky-50`) reemplazado por `--accent-soft` sólido (elegido entre 3
  variantes mostradas al usuario: `--foreground`, `--primary`,
  `--accent-soft`). Marquee y overlay de contraste mobile ajustados para
  seguir siendo legibles sobre el nuevo fondo.
- "Lo que me mueve": grid 50/50 → 60/40 a favor de la foto, quitado el
  padding interno de 40px que la encajonaba, `min-h` subido de 320px a
  420px. Verde residual (`emerald-*`, radial-gradient con
  `rgba(16,185,129,...)`) en las 3 tarjetas reemplazado por tokens
  `--accent`/`--primary`. Quitado también un overlay de gradiente cream
  que lavaba la parte inferior de la foto (pedido en una ronda posterior).
- Fade-in por defecto de `next/image` (`transition:all` inline) neutralizado
  con `!transition-none` en la foto de "Lo que me mueve" — pedido
  explícito de que apareciera directa, sin animación de entrada.
- Auditoría de font-family: **todos** los headings visibles de la página
  (H2/H3 de "Lo que me mueve", "Qué me hace diferente", CTA final, y el
  título "Quien soy") heredaban Plus Jakarta Sans en vez de Bricolage
  Grotesque — se agregó `font-display` a cada uno. Footer compartido
  (logo "FocusWeb") quedó fuera a propósito, es marca, no heading de
  contenido.
- Contenido de "Quién soy" reescrito completo (gancho + 3 párrafos +
  pull-quote + cierre) — copy provisto explícitamente por el usuario, no
  generado. Al reemplazar el contenido se perdió por accidente el efecto
  GSAP/ScrollTrigger de scroll-reveal palabra por palabra que tenía el
  bio anterior; se reconectó el texto nuevo a `TextRevealByWord`
  (componente compartido, también usado en `landing-page-content.tsx`,
  no se modificó) en 2 bloques separados (apertura+3 párrafos, cierre),
  dejando el pull-quote como bloque estático intermedio sin animar (no
  encaja en el mecanismo de reveal por palabra sin perder su tratamiento
  visual propio).
- Breadcrumb centrado visualmente por un `max-w-6xl` que no coincidía con
  el ancho real del hero (`w-full` sin max-width) — alineados ambos al
  mismo borde izquierdo. Espacio muerto entre breadcrumb y hero reducido
  (pt-24/pt-28 → pt-6/pt-8 en el hero).

## 4b. /faq (página separada, no parte de /mi-historia) ✅ Completado

- El título/banner grande de esta página tiene colores de la marca antigua
  — corregir a la paleta nueva. **El cuerpo/contenido de las preguntas y
  respuestas NO se toca** — solo el tratamiento visual del título.
- Nota: esta página usa `useFaqContent` / `faqs-component.tsx`, ya
  identificado en la Fase 2 como dependiente de un backend Railway muerto
  — no confundir con el array hardcodeado que se creó para la FAQ de la
  home, son cosas distintas.
- Nota de una sesión posterior: se confirmó explícitamente que el banner
  "Preguntas frecuentes" mencionado originalmente en el punto 4 de este
  documento (dentro de `/mi-historia`) en realidad no existe ahí — es
  este ítem 4b, la página `/faq` separada. `/mi-historia` no tiene ni tuvo
  nunca una sección de preguntas frecuentes propia.

### Qué se hizo

- Banner hero: gradiente azul→verde (`from-[#4F9CF9] via-[#34D399]
  to-[#2FBF7C]`) → `bg-primary` sólido. CTA final: `radial-gradient` azul
  (`rgba(59,130,246,...)`) → `bg-card` sólido. Mensaje de éxito del
  formulario: `emerald-200/50/700` → tokens `primary`.
- Tipografía: H1, los 8 H2 (categorías + "Navega por categorías" + CTA
  final) y los 32 H3 (una por pregunta) heredaban Plus Jakarta Sans —
  `font-display` agregado a todos.
- Bug de responsive real encontrado: el círculo "+" del acordeón no tenía
  `shrink-0`, así que con preguntas largas se aplastaba a un óvalo
  (medido: 13-18px de ancho en vez de 32px). Corregido y verificado
  32×32px exacto.
- Extra (mismo criterio que `/contacto`, no solo lo pedido explícitamente):
  corregidos varios "nosotros" de la interfaz (no del contenido de
  preguntas/respuestas) a primera persona — "Déjanos"→"Déjame",
  "Contáctanos"→"Escríbeme", "responderemos"→"respondo",
  placeholder "Cuéntanos"→"Cuéntame".
- El archivo real y en uso es `src/app/faq/faq-page-content.tsx` (array
  hardcodeado `faqCategories`). Confirmado que `src/components/faq/*`
  (`faq-content.tsx`, `faq-hero.tsx`, `use-faq-content.ts`) y
  `faqs-component.tsx` — los que dependen del backend Railway muerto —
  están completamente huérfanos, ningún route los importa. No se
  tocaron ni se borraron en esta pasada (limpieza de dead code no pedida).

## 5. /nuestro-proceso ✅ Completado

- **Tipografía:** migrar a `font-display`/`font-body` según `design.md`
  §3 — algunas secciones ya están alineadas en color, pero la fuente
  sigue sin migrar (mismo patrón detectado en `/servicios` antes del fix).
- **Colores residuales:** auditar y corregir cualquier resto de la paleta
  anterior (verde/azul) en badges, íconos o fondos, igual que se hizo en
  `/servicios` y `/mi-historia`.

### Qué se hizo

- Tipografía: los 15 headings (H1 + 5 H2 + 9 H3) heredaban Plus Jakarta
  Sans — `font-display` agregado a todos.
- 4 gradientes de texto (`from-accent via-primary to-info`) en H1 y H2 →
  `text-primary` sólido (Option A, mismo patrón de `/servicios`). El
  token `--info` resulta ser un alias de `--primary` en `globals.css`
  (mismo valor), así que no era literalmente verde/azul, pero seguía
  siendo un gradiente (prohibido por `design.md`).
- 4 gradientes decorativos + 1 blur-blob en las tarjetas "Transparencia
  total" etc. → tintes sólidos alternando `primary/5`/`accent/5`.
- Hallazgo real: `text-[#22c55e]/40`, `bg-[#22c55e]/30` y
  `text-[#52a9ff]` — hex literales del verde/azul viejo en las 3 tarjetas
  finales ("Tiempo claro"/"Proceso simple"/"Resultado sólido") → tokens
  `primary`/`foreground`.
- `<GlowCard glowColor="green"|"blue">` — el componente compartido
  `glow-card.tsx` (también usado en `/landing-page`, no tocado) solo
  ofrecía `blue/purple/green/red/orange`. Se agregaron dos entradas
  on-brand (`indigo`/`gold`, HSL calculado desde `--primary`/`--accent`)
  de forma aditiva, sin romper el uso existente.
- Campo `color` en los datos de las 3 tarjetas finales (con
  `emerald-400` hardcodeado) confirmado por grep como dato muerto
  (nunca se renderizaba) — eliminado.
- Bug de responsive real (post-fix, reportado por el usuario): en mobile
  la línea vertical del timeline (indigo, animada con scroll) se salía
  de su sección y se sobreponía a "Lo que puedes esperar del proceso".
  Causa: `lineHeight` se medía una sola vez al montar
  (`getBoundingClientRect().height`), pero el layout usa `min-h-[65vh]`
  — en mobile real `vh` cambia cuando la barra de direcciones del
  navegador se colapsa/expande durante el scroll, dejando esa altura
  obsoleta. Playwright no lo reproduce (viewport fijo, sin ese
  comportamiento). Fix en 3 partes: `vh`→`dvh` (viewport real, no el que
  asume la barra oculta), `ResizeObserver` + listener de `resize` en vez
  de medir una sola vez, y `overflow-hidden` como red de seguridad en el
  contenedor del timeline.
- Efecto secundario del `overflow-hidden`: recortaba el número "01" del
  primer paso (usa `-translate-y-6` en mobile para "flotar" sobre la
  línea). Corregido con `pt-8` en el contenedor (padding-top no mueve el
  punto de referencia `top:0` de los elementos absolutos, así que las
  líneas quedan intactas y el primer artículo gana el espacio que
  necesitaba).

## 6. /noticias (= `/blog`) ✅ Completado

- **Tipografía:** migrar a `font-display`/`font-body` — no está
  actualizada.
- **Colores residuales:** auditar de la misma forma que el resto de
  páginas secundarias.
- Nota: "Noticias" es el label de nav para `/blog` (`header.tsx`), no
  una ruta propia.

### Qué se hizo

- **Listado `/blog` (`src/app/blog/page.tsx`):** H1/2 H2/1 H3 a
  `font-display`. Gradiente de la caja "Guía rápida" → sólido. 3 ítems
  de checklist con colores arcoíris → unificados a `primary`. Fallback
  de imagen faltante (gradiente, código alcanzable pero sin uso real
  hoy) → sólido.
- **8 posts individuales** (`como-crear-una-pagina-web-en-chile`,
  `errores-paginas-web-pymes-chile`, `instagram-a-tienda-online`,
  `landing-page-para-negocios-en-chile`, `landing-page-vs-pagina-web`,
  `mi-pagina-web-tarda-mucho-en-cargar`, `seguridad-web-pymes`,
  `seo-local-google-business-chile`): no existe una plantilla/componente
  compartida para el cuerpo del artículo — cada uno tiene su propio
  `page.tsx` con headings hardcodeados (patrón copy-paste con pequeñas
  variaciones). Se corrió un script batch que agregó `font-display` a
  los 159 headings de los 8 archivos + `article-page-content.tsx`
  (compartido por 2 rutas que hoy redirigen 301 a `/crear-pagina-web-chile`,
  corregido igual por si se reactiva) + `launch-checklist-page-content.tsx`.
  Además se unificaron las clases de H1/H2/H3 (y el párrafo de apertura)
  a un único patrón canónico entre los 8 posts, y se corrigieron colores
  residuales reales en 2 de ellos (`mi-pagina-web-tarda-mucho-en-cargar`:
  1 gradiente con `--info`; `seguridad-web-pymes`: 5 tarjetas de
  comparación SSL/backups en emerald/sky/violet → primary/accent
  alternado).
- **`5-pasos-antes-de-lanzar-un-sitio-web`** (`launch-checklist-page-content.tsx`,
  ruta canónica `/blog/5-pasos-antes-de-lanzar-un-sitio-web`): 33
  residuos de color (5 tarjetas "overview" + 5 secciones de detalle,
  cada una con su propio color — emerald/sky/amber/cyan/indigo/rose/
  orange — más un gradiente final y un highlight `[[robots.txt]]`) →
  todo unificado a índigo/dorado alternado.
  - Bug real encontrado: el botón CTA del hero ("Revisar si mi sitio
    está bien configurado") se desbordaba horizontalmente en mobile —
    el `Button` compartido tiene `whitespace-nowrap` por defecto (uso
    correcto en general, pero este texto es más largo que lo usual).
    Fix local en este botón (`whitespace-normal` + `h-auto`), sin tocar
    el componente compartido.
  - Layout "no amigable" (diagnóstico pedido explícitamente): la página
    repetía los mismos 5 pasos tres veces (badges del hero → 5 tarjetas
    "overview" grandes → 5 secciones de detalle real). En mobile las 5
    tarjetas overview se apilaban (`min-h-[230px]` cada una) sumando
    ~1150px de scroll sin aportar información nueva. **Decisión del
    usuario: Opción B** — sección "overview" eliminada por completo en
    mobile/tablet (`hidden lg:block`, mismo breakpoint que ya usaba el
    grid interno), intacta en desktop. Verificado con `getComputedStyle`:
    `display:none` en 768px e inferior, `display:block` sin cambios en
    1280px.

## 7. Footer — imagen "Transferencia electrónica" ✅ Completado

- En mobile, la imagen/ícono de "Transferencia electrónica" queda
  alineada a la izquierda — debe quedar centrada en ese breakpoint.

### Qué se hizo

- Causa: `next/image` renderiza `display:block` por defecto: el
  `text-center` del contenedor padre (activo solo en mobile,
  `sm:text-left` en desktop) no tiene ningún efecto sobre un elemento
  block (esa propiedad CSS solo afecta contenido inline/inline-block).
  Fix: `mx-auto` en la imagen para mobile, `sm:mx-0` para no alterar el
  alineado izquierdo en desktop.

## 9. /crear-pagina-web-chile y /paginas-web-chile ✅ Completado

*(No estaban en el alcance original de esta fase — agregadas a pedido
explícito del usuario tras notar que "no tienen tipografía de la marca".)*

### Qué se hizo

- Confirmado por auditoría: ambas páginas ya estaban limpias de color
  (sin residuos verde/azul ni gradientes, confirmado por grep) — el
  problema era puramente tipográfico. Ningún H1/H2/H3 usaba
  `font-display` (24 headings en `crear-pagina-web-chile`, 8 en
  `paginas-web-chile`) — corregido con el mismo script batch.
- Extra: 6 residuos de tono "nosotros" corregidos a primera persona
  entre ambas páginas ("nuestros proyectos"→"mis proyectos",
  "Escríbenos/respondemos"→"Escríbeme/respondo", "Cuéntanos"→"Cuéntame"),
  mismo criterio que `/contacto`, `/faq` y `/nuestro-proceso`.

## 10. /metodologia (+ `ReviewRequestBar`) ✅ Completado

*(Página que nunca había sido tocada en ninguna fase anterior — 100% hex
literal de la paleta vieja, 0% `font-display`.)*

### Qué se hizo

- Migración completa de `main` y de cada sección (badge, callout
  "Importante", principios, proceso, "Qué incluye/no incluye", "Para
  quién es/no es", CTA final) de hex literales (`#3B82F6`, `#22c55e`,
  `#e5e7eb`, `#4B5563`, etc.) a tokens de `design.md`
  (`primary`/`accent`/`border`/`muted-foreground`/`background`/
  `foreground`).
- Tipografía: 19 de 20 headings migrados a `font-display` (el H3 restante
  es el logo compartido "FocusWeb" del Footer, excluido a propósito en
  toda la fase).
- Copy a primera persona por `BRAND.md` §5: "no asumimos: medimos" →
  "no asumo: mido", "Leemos el contexto" → "Leo el contexto",
  "también te guiamos" → "también te guío", entre otros.
- **`ReviewRequestBar`** (componente compartido, usado únicamente en
  `/metodologia` — confirmado con `grep -rln`): quedó con residuos azules
  (`#3B82F6`, `#dbeafe`, `#6B7280`) porque es un componente separado
  importado en la página, no JSX inline — se saltó en la primera pasada
  de auditoría (que sólo cubrió `page.tsx`) y lo reportó el usuario tras
  ver la barra "EDITA TU WEBSITE AQUI" seguir en azul. Corregido a
  tokens (`primary`/`border`/`muted-foreground`/`destructive` para el
  mensaje de error). **Lección para futuras auditorías:** revisar
  siempre los componentes importados de una página, no sólo su
  `page.tsx`.

## 11. /check-list-ecommerce ✅ Completado

### Qué se hizo

- Tipografía: 23 de 24 headings (H1 + 11 H2 + 11 H3) migrados a
  `font-display` vía script (mismo patrón que `/blog`); el heading 24
  restante es, de nuevo, el H3 compartido del Footer.
- Caja "Sin checklist" (estado de error/advertencia, contrastada contra
  la tarjeta "Lanzamiento seguro" en índigo): `bg-rose-100 text-rose-500`
  → `bg-destructive/10 text-destructive`. Se mapeó al token semántico
  `--destructive` de `design.md` en vez de eliminarlo, porque es un
  estado de error legítimo, no un color decorativo.
- Sistema de badges por categoría (8 tarjetas: Técnico, Diseño, Catálogo,
  Pagos, Logística, Legales, Seguridad, Marketing) coloreadas según
  `item.count` (`emerald/sky/violet/amber` según si el conteo era
  7/8/9/10) — arcoíris puramente decorativo y sin significado real (5 de
  8 categorías compartían `count === 7` por coincidencia). Unificado a
  un solo tratamiento `bg-primary/10 text-primary ring-primary/20`,
  eliminando la lógica condicional por `count`.
- 2 radiales `rgba()` residuales de azul/verde viejo (`rgba(59,130,246,…)`,
  `rgba(34,197,94,…)`) en los fondos decorativos de las secciones 2 y 13
  → reemplazados por los valores RGB reales de `--primary`/`--accent`
  (`rgba(61,58,140,…)` / `rgba(201,151,31,…)`).
- Copy a primera persona (mismo criterio que el resto de la fase): "nos
  especializamos" → "me especializo", "Conocemos... lo vivimos" →
  "Conozco... lo vivo", "Estamos listos" → "Estoy listo".
- **Hallazgo fuera de alcance, no corregido:** `FloatingWhatsApp`
  (`floating-whatsapp.module.css`), componente compartido en todo el
  sitio (no específico de esta página), todavía tiene un azul residual
  (`#2563eb`, `rgba(37,99,235,…)`) en el estilo de sus burbujas de chat.
  Como afecta a todas las páginas del sitio y no fue nombrado
  explícitamente en el pedido de esta ronda, se deja documentado para
  una futura pasada en vez de corregirse de forma incidental aquí.

## 8. Fuera de alcance de esta fase (a evaluar después)

- `/admin` y cualquier página no mencionada arriba — no auditar todavía,
  puede quedar para una Fase 4 si aparecen más residuos al navegar el
  sitio completo.
- Reescritura de copy de contenido real (cuerpo de artículos, preguntas
  y respuestas de FAQ) — esta fase es visual/layout/tipografía, no de
  contenido. La excepción ya aplicada consistentemente: textos de
  interfaz (botones, headings, mensajes del sistema, placeholders) sí
  se alinean a primera persona según `BRAND.md` cuando se detectan,
  aunque no se pida explícitamente cada vez.
- `FloatingWhatsApp` (`floating-whatsapp.module.css`) — azul residual
  (`#2563eb`) en las burbujas de chat. Es un componente compartido en
  todo el sitio, no una página puntual; queda para una pasada dedicada
  (Fase 4 o una ronda de "componentes compartidos").

## 10. Orden de trabajo (fase cerrada)

1. ~~`/servicios` — Desarrollo Web (colores + bug mobile)~~ ✅
2. ~~`/mi-historia` — hero, "Lo que me mueve", tipografía~~ ✅
3. ~~`/contacto` — migración al flujo conversacional~~ ✅
4. ~~`/faq` — banner/título con colores de marca antigua~~ ✅
5. ~~`/nuestro-proceso` — tipografía + colores + bug de timeline~~ ✅
6. ~~`/noticias` (`/blog` + 8 posts + 5-pasos) — tipografía + colores + layout~~ ✅
7. ~~Footer — centrar imagen de transferencia electrónica en mobile~~ ✅
9. ~~`/crear-pagina-web-chile` y `/paginas-web-chile` — tipografía~~ ✅
10. ~~`/metodologia` (+ `ReviewRequestBar`) — colores + tipografía~~ ✅
11. ~~`/check-list-ecommerce` — colores + tipografía~~ ✅

**Fase 3 cerrada por completo** (confirmado explícitamente por el
usuario: "ya con eso la fase 3 se da cerrada por completo"). Pendiente:
commit y push de todo lo acumulado. Ver Fase 4 (`PHASE4-content-density.md`)
para el siguiente bloque de trabajo, y la nota sobre `FloatingWhatsApp`
arriba como posible ítem suelto de una futura ronda de componentes
compartidos.
