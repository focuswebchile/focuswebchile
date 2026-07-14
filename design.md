# design.md — Sistema Visual FocusWeb

> Complementa a `BRAND.md`. Este documento es la fuente de verdad técnica para
> Claude Code: tokens de color, tipografía, reglas de layout y de animación.
> Si algo en el código contradice esto, el código está mal — no este documento.

---

## 1. Principio rector

Bold, con personalidad, con confianza. Ni "SaaS dashboard" (azul/verde Tailwind
default), ni "editorial de revista" (serif cálido, itálicas, grillas tipo magazine),
ni tampoco naranja/terracota (esa es la identidad de Tiny Van, otro proyecto de
Felipe — FocusWeb necesita su propia familia visual, sin cruce).

- **Prohibido:** paletas azul-informativo/verde-forest sin modificar (Tailwind
  default), terminales verdes simulando código, gradientes tipo fintech, dark cards
  genéricas usadas solo por estética.
- **Prohibido:** naranja/terracota (colisiona con Tiny Van), tonos neón/lima muy
  saturados (se probó y se sintió "app de producto", no marca personal).
- **Prohibido:** grillas tipo magazine, texto justificado, serif en párrafos,
  itálicas cálidas, layouts que parezcan artículo editorial.

Todo elemento visual debe responder a: *"¿esto tiene presencia y personalidad
propia, transmite confianza, y es imposible de confundir con Tiny Van o con
cualquier plantilla SaaS genérica?"*

---

## 2. Paleta de color — Tinta índigo + dorado apagado

> Descartada la dirección terracota/ocre: se acercaba demasiado a la identidad de
> Tiny Van (naranja/tonos tierra). FocusWeb necesita su propia familia de color,
> completamente separada, para que ambos proyectos no se confundan.

```css
--background:      #F7F5F0;   /* Blanco roto cálido — no crema, no blanco clínico */
--foreground:      #17162B;   /* Tinta índigo casi negro — bold, serio, con confianza */
--foreground-soft: #4A4864;   /* Texto secundario, violeta-gris apagado */
--primary:         #3D3A8C;   /* Índigo profundo — links, acentos, nunca el azul Tailwind default */
--accent:          #C9971F;   /* Dorado apagado — CTA principal y badges. Reemplaza al lima (demasiado saturado/app) y al terracota (demasiado cerca de Tiny Van) */
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
- Nunca usar lima/verde neón — se probó y se descartó por sentirse "app de producto" en vez de marca personal.

**Evitar:** cualquier tono naranja/terracota (colisiona con Tiny Van), cualquier azul/verde Tailwind default sin modificar (`#3B82F6`, `#22C55E` — son literalmente los defaults del framework, cero decisión de marca).

---

## 3. Tipografía — Bricolage Grotesque + Plus Jakarta Sans

> Descartada la dirección Fraunces/serif: se sentía demasiado editorial/cálida.
> La marca busca presencia bold con personalidad, no tono de revista — grande,
> directo, fácil de leer, con confianza.

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

**Tamaños y reglas de peso:**
| Uso | Fuente | Peso | Tamaño | Notas |
|---|---|---|---|---|
| H1 hero (desktop) | Bricolage Grotesque | 800 | 72px | `line-height: 0.95`, `letter-spacing: -0.02em` |
| H1 hero (mobile) | Bricolage Grotesque | 800 | 32px | `line-height: 1.0` |
| H2 sección | Bricolage Grotesque | 800 | 36–48px | Mismo tratamiento bold, sin itálica |
| Subtítulos | Plus Jakarta Sans | 600–700 | 18–20px | |
| Cuerpo de texto | Plus Jakarta Sans | 400 | 16–18px | `leading-relaxed` |
| Botones/CTA | Plus Jakarta Sans | 700 | 14px | Nunca Bricolage en botones |
| Nav | Plus Jakarta Sans | 500 | 14–15px | |

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
