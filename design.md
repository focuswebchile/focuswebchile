# design.md — Sistema Visual FocusWeb

> Complementa a `BRAND.md`. Este documento es la fuente de verdad técnica para
> Claude Code: tokens de color, tipografía, reglas de layout y de animación.
> Si algo en el código contradice esto, el código está mal — no este documento.

---

## 1. Principio rector

Bold, con personalidad, con confianza. Ni "SaaS dashboard" (azul/verde Tailwind
default), ni "editorial de revista" (serif cálido, itálicas, grillas tipo magazine).
Familia visual propia, sin cruce con Tiny Van (otro proyecto de Felipe, identidad
naranja/tierra).

- **Prohibido:** paletas azul-informativo/verde-forest sin modificar (Tailwind
  default), terminales verdes simulando código, gradientes tipo fintech, dark cards
  genéricas usadas solo por estética.
- **Prohibido:** naranja/terracota, tonos neón/lima muy saturados.
- **Prohibido:** grillas tipo magazine, texto justificado, serif en párrafos,
  itálicas cálidas, layouts que parezcan artículo editorial.

Todo elemento visual debe responder a: *"¿esto tiene presencia y personalidad
propia, transmite confianza, y es imposible de confundir con Tiny Van o con
cualquier plantilla SaaS genérica?"*

---

## 2. Paleta de color — Tinta índigo + dorado apagado

```css
--background:      #F7F5F0;   /* Blanco roto cálido — no crema, no blanco clínico */
--foreground:      #17162B;   /* Tinta índigo casi negro — bold, serio, con confianza */
--foreground-soft: #4A4864;   /* Texto secundario, violeta-gris apagado */
--primary:         #3D3A8C;   /* Índigo profundo — links, acentos, nunca el azul Tailwind default */
--accent:          #C9971F;   /* Dorado apagado — CTA principal y badges */
--accent-soft:     #E3C77A;   /* Dorado claro — texto/badges sobre fondo oscuro (--foreground) */
--border:          #E4E1D8;   /* Borde neutro cálido sobre el fondo */
--card:            #FFFFFF;
--radius:           0.75rem;
```

**Uso:**
- Fondo general: `--background`, nunca blanco puro ni negro.
- CTA principal (botones): `--accent` (dorado) sólido, sin gradiente, texto en `--foreground`.
- Bloque de contraste puntual (máx. 1 por sección, ej. card de "Desarrollo web" o testimonio): fondo `--foreground` (tinta), texto en `--accent-soft`.
- Texto: `--foreground` para títulos y cuerpo principal, `--foreground-soft` para texto secundario.

**Evitar:** naranja/terracota, lima/verde neón, y cualquier azul/verde Tailwind default sin modificar (`#3B82F6`, `#22C55E` — son literalmente los defaults del framework, cero decisión de marca).

---

## 3. Tipografía — Bricolage Grotesque + Plus Jakarta Sans

**Regla de oro: Bricolage Grotesque solo en titulares grandes (peso 800). Plus Jakarta Sans en todo lo demás.**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```js
// tailwind.config
fontFamily: {
  display: ['Bricolage Grotesque', 'sans-serif'],  // SOLO H1 hero y section headers
  body: ['Plus Jakarta Sans', 'sans-serif'],        // Todo el resto: párrafos, nav, botones, cards
}
```

**Escala tipográfica completa — OBLIGATORIA, aplica a TODA la página, no solo al hero.**
Cada nivel tiene un tamaño único y fijo. Ninguna sección define su propio tamaño de
título "a criterio" — se elige el nivel de la tabla que corresponda según la
jerarquía de esa sección, punto.

| Nivel | Uso | Fuente | Peso | Desktop | Mobile | Notas |
|---|---|---|---|---|---|---|
| H1 | Título del hero — el único de la página | Bricolage Grotesque | 800 | 72px | 32px | `line-height: 0.95`, `letter-spacing: -0.02em`. Exclusivo del hero — ningún otro título usa H1. |
| H2 | Título de cada sección (Sobre mí, ABCIS, Servicios, ¿Cuál es tu situación?, No vendo paquetes, Proceso, Resultados, FAQ, Contacto, Blog) | Bricolage Grotesque | 800 | 48px | 28px | `line-height: 1.05`. Mismo tamaño en TODAS las secciones — es el nivel de "título de sección", no varía por importancia percibida de cada una. Testimonios **no** es sección propia — vive como H3 anidado dentro de "Resultados" (`proof-stats-section.tsx`), no lleva H2. |
| H3 | Subtítulo dentro de una sección (ej. títulos de card individuales: "Diagnóstico SEO Técnico", "Ya tengo sitio que no convierte") | Bricolage Grotesque | 700 | 22–24px | 18–20px | Solo cuando hay jerarquía interna dentro de una sección con H2 propio. |
| Subtítulo/eyebrow | Texto pequeño sobre el H2 (ej. "CASO REAL", "METODOLOGÍA") | Plus Jakarta Sans | 600 | 12–13px | 12–13px | Uppercase, `letter-spacing` amplio, color `--foreground-soft` o `--primary`. |
| Cuerpo de texto | Párrafos, descripciones | Plus Jakarta Sans | 400 | 16–18px | 15–16px | `leading-relaxed` |
| Botones/CTA | Texto de botones | Plus Jakarta Sans | 700 | 14–16px | 14–16px | Nunca Bricolage en botones |
| Nav | Menú de navegación | Plus Jakarta Sans | 500 | 14–15px | — | |

**Regla de auditoría:** si una sección nueva o editada usa un tamaño de título que
no está en esta tabla (ej. `text-3xl` a mano, o un `clamp()` custom no documentado
acá), es un error — hay que corregirlo al nivel correspondiente (H1/H2/H3) antes de
darlo por terminado.

---

## 4. Layout — bold y personal, anti-editorial, anti-SaaS

- **No** columnas tipo magazine con texto largo en 2-3 columnas.
- **No** texto justificado, no itálicas cálidas.
- **Sí** titulares grandes (72px desktop / 32px mobile) como ancla visual de cada sección — el bold typographic es el protagonista, no la decoración.
- **Sí** cards redondeadas (`--radius: 0.75rem`) con foto real de Felipe y de proyectos (Tiny Van, ABCIS) en vez de ilustraciones stock genéricas.
- **Sí** un único bloque de contraste por sección usando `--foreground` (tinta) con texto en `--accent-soft` (dorado claro) — nunca más de uno visible a la vez, para que el contraste siga sintiéndose intencional y no "dark card" repetitiva.
- Espaciado generoso entre secciones — la presencia viene del tamaño tipográfico y el aire, no de llenar todo con contenido denso tipo blog.
- El caso ABCIS (rescate/hackeo) sube en la jerarquía de la home — es la prueba social más fuerte y hoy está enterrada a mitad de página bajo el mismo estilo dark-card que todo lo demás.

---

## 5. Animación — principios de Emil Kowalski

*(Referencia para cuando instales `emilkowalski/skills` en Claude Code — resumen aplicado a este proyecto)*

- Antes de animar algo, responder: ¿por qué anima esto? Si no hay respuesta clara, no animar.
- Duración de animaciones de UI: bajo 300ms. Botones con `scale(0.97–0.98)` en `:active`, transición ~150ms.
- Preferir transiciones CSS interrumpibles sobre keyframes rígidos.
- Nunca animar acciones repetidas cientos de veces al día (ej. hover de nav) de forma pesada — sutileza ante todo.
- Nada de animaciones "efecto wow" tipo parallax pesado o scroll-jacking — no encaja con "mentor cercano y cálido", se siente a demo de agencia.

---

## 6. Pendiente

- [x] Paleta y tipografía validadas visualmente (mockups en conversación) — **cerradas**
- [ ] Reemplazar ilustración stock de mano+celular por foto real de Felipe
- [ ] Recolectar fotos de proyectos Tiny Van y ABCIS para las cards de casos
- [ ] Instalar `typography-selector` y `emilkowalski/skills` en el repo (Claude Code)
- [ ] Reordenar secciones de home según `BRAND.md` §4 y este documento §4