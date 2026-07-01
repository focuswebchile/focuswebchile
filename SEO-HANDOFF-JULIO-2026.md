# SEO & UX Handoff — Julio 2026

**Repositorio:** focuswebchile/focuswebchile  
**Rama:** `main`  
**Despliegue:** Vercel (auto-deploy en cada push a `main`)  
**Fecha de cierre:** 1 de julio de 2026  
**Stack:** Next.js 16.1.0 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Poppins local · Vercel

---

## Resumen de la Sesión

### Objetivos iniciales (extraídos de GSC)

Los datos de Google Search Console exportados el 2026-07-01 revelaron cuatro problemas concretos:

1. **CTR nulo en páginas con visibilidad real.** La home aparecía en posición 3.45 con 98 impresiones y 0 clics. El blog de SEO local tenía 787 impresiones a posición 10.64 con 0.13% CTR. El checklist ecommerce acumulaba 150 impresiones a posición 11.43 con 0 clics.
2. **2376 impresiones atrapadas en un blog post antiguo** (`/blog/crear-pagina-web-desde-cero`, pos 22.64) sin URL canónica consolidada para captarlas.
3. **12 páginas en estado "Crawled - currently not indexed"**, incluyendo duplicados técnicos y una página de administración expuesta al rastreo.
4. **Fragmentación visual** de la home que generaba baja confianza antes de que el usuario pudiera tomar una decisión.

### Estado final

Seis commits desplegados a producción en Vercel. Build TypeScript sin errores en cada push. Cambios activos para reindexación de Google (plazo estimado: 1-4 semanas según la frecuencia de rastreo de cada URL).

---

## Fase 1: Rediseño Visual — Technical Minimalism

### Design Tokens (`src/app/globals.css`)

Se reemplazó el sistema de colores anterior por un esquema de alta autoridad editorial basado en OKLCH:

```css
/* Tokens activos */
--background:  oklch(1 0 0);           /* Blanco puro */
--foreground:  oklch(0.11 0.025 260);  /* Casi negro con tono azul oscuro */
--primary:     oklch(0.52 0.22 145);   /* Forest green #15803D */
--accent:      oklch(0.55 0.22 260);   /* Azul informativo */
--radius:      0.5rem;                 /* 8px — radio unificado */
--font-weight-display: 900;            /* Poppins Black */
--font-weight-heading:  800;           /* Poppins ExtraBold */
```

Se eliminó el `gradient-mesh` del `<main>` en `src/app/page.tsx` porque los overlays radiales verde/azul competían visualmente con las secciones oscuras.

### Componentes refactorizados

**`src/components/hero-section.tsx`**
Reescritura total. Retorna un fragmento `<>` con dos secciones: banda hero + banda del formulario de auditoría. H1 con clases `font-black leading-[0.88] tracking-tighter`. Lógica de reCAPTCHA v3 preservada íntegramente (warmup en `useEffect`, reintentos con backoff de 150ms, ejecución mediante `grecaptcha.ready`). Imagen de ilustración alineada al ras inferior con `xl:pb-0` en la sección y `xl:self-end` en la columna de imagen.

**`src/components/value-prop-dark-section.tsx`** *(nuevo)*
Sección oscura `#0D1117` con H2 `font-black` y terminal visual con texto verde simulando output de auditoría. Patrón "dark card" aplicado: `bg-foreground text-background`.

**`src/components/testimonials-section.tsx`**
ABCIS como tarjeta dominante full-width (`bg-foreground`), badge ámbar "Caso de Rescate SEO", blockquote sobre crisis de hackeo/spam con 1M+ páginas de spam indexadas, tres métricas (+1M páginas eliminadas, 100% backend estabilizado, 0 incidentes post-intervención). Álvaro Careño y Verki Bambas como tarjetas secundarias. Se eliminó James Fraser y el scroll parallax.

**`src/components/needs-section.tsx`**
H2 "¿Cuál es tu situación?". Tarjeta izquierda (dominante): `bg-foreground text-background`, H3 `font-black text-4xl`, 4 bullets, precio y un CTA. Tarjeta derecha (secundaria): `border-2 border-border bg-card`. Se eliminó el accordeon de opciones y los chips de diagnóstico previos.

**`src/components/delay-impact-section.tsx`**
Layout asimétrico 2 columnas. Izquierda: tipografía masiva "Cada/segundo/cuesta/clientes." en `text-7xl font-black leading-[0.88]` + stat `53%` en `text-8xl font-black`. Derecha: gráfico de barras en `bg-card border-border rounded-xl`. Se eliminó el wrapper con gradiente.

**`src/components/process-section.tsx`**
Componente convertido a Server Component (se eliminó `"use client"`). Header alineado a la izquierda con overline "Metodología". H2 `text-6xl font-black`. Lista numerada con `divide-y divide-border`. Número de paso en `text-7xl font-black text-foreground/10` como ancla tipográfica.

**`src/components/process-audit-cta.tsx`**
Reemplazado gradiente hardcoded por patrón dark card: `bg-foreground text-background rounded-xl`. Botón CTA con `bg-primary`.

**`src/components/home-social-proof-section.tsx`**
H2 escalado a `text-4xl font-black leading-[0.9] tracking-tight sm:text-5xl`. Tres métricas GA4 en `text-4xl font-black`.

**`src/components/main-services-section.tsx`**
Header: overline "Servicios", H2 `text-6xl font-black tracking-tighter`. Campo `guideLink` añadido a la tarjeta "Desarrollo Web" con enlace contextual a `/crear-pagina-web-chile`.

**Eliminación de gradientes en títulos**
- `src/components/faq-section.tsx` línea 22: `text-primary font-extrabold` (antes `bg-gradient-to-r ... text-transparent`)
- `src/components/ui/form-1.tsx` línea 197: `text-primary` en `{titleTail}` del título de contacto

---

## Fase 2: Arquitectura y Consolidación de URLs

### Problema diagnosticado

Tres URLs publicaban contenido equivalente sobre "cómo crear una página web en Chile", fragmentando la autoridad que Google le asignaba a ese tema:

| URL | Estado previo |
|-----|--------------|
| `/blog/crear-pagina-web-desde-cero` | 2376 imp, pos 22.64 — indexada, pero blog post |
| `/blog/como-crear-una-pagina-web-en-chile` | Indexada — contenido solapado |
| `/crear-pagina-web-desde-cero` | Near-duplicate del blog post — no indexada |

### Páginas nuevas creadas

**`/crear-pagina-web-chile`** (`src/app/crear-pagina-web-chile/page.tsx`)
URL canónica definitiva para el cluster "crear página web chile". Hereda la autoridad acumulada por las URLs antiguas vía redirects 301. Metadata optimizada en Fase 3.

**`/paginas-web-chile`** (`src/app/paginas-web-chile/page.tsx`)
URL canónica para el cluster "páginas web chile" (111 impresiones a posición 33.11 en GSC). Página de servicio con pricing desde $180.000 CLP. Indexación en proceso.

### Reglas de redirección en `next.config.ts`

```ts
// Consolidación del cluster "crear página web"
{ source: "/blog/crear-pagina-web-desde-cero",        destination: "/crear-pagina-web-chile",                    permanent: true },
{ source: "/blog/como-crear-una-pagina-web-en-chile", destination: "/crear-pagina-web-chile",                    permanent: true },
{ source: "/crear-pagina-web-desde-cero",             destination: "/crear-pagina-web-chile",                    permanent: true },

// Consolidación de contenido duplicado de checklist de lanzamiento
{ source: "/5-pasos-antes-de-lanzar-un-sitio-web",   destination: "/blog/5-pasos-antes-de-lanzar-un-sitio-web", permanent: true },

// Legado
{ source: "/precios",  destination: "/servicios/desarrollo-web", permanent: true },
{ source: "/precios/", destination: "/servicios/desarrollo-web", permanent: true },

// Canonicalización www → non-www
{ source: "/:path*", has: [{ type: "host", value: "www.focusweb.cl" }], destination: "https://focusweb.cl/:path*", permanent: true },
```

### Internal links añadidos

- `src/components/footer.tsx`: enlaces a `/crear-pagina-web-chile` y `/paginas-web-chile` en la columna "Recursos clave"
- `src/components/main-services-section.tsx`: enlace contextual `guideLink` en la tarjeta "Desarrollo Web" apuntando a `/crear-pagina-web-chile`

---

## Fase 3: Optimización de Snippets (CTR)

Criterio aplicado: título ≤ 60 caracteres (Google trunca a partir de ese punto), meta descripción ≤ 155 caracteres. Copy orientado a dolor del usuario + llamada a la acción explícita.

### Home (`/`) — `src/app/page.tsx`

**Problema:** posición promedio 3.45 con 98 impresiones y 0 clics en el período analizado.

| Campo | Antes | Después |
|-------|-------|---------|
| Title | `SEO y Posicionamiento Web Chile \| FocusWeb` (42 ch) | `SEO Técnico y Posicionamiento Web en Chile \| FocusWeb` (53 ch) |
| Meta | `SEO y posicionamiento web en Chile. Mejoramos velocidad...` (149 ch) | `¿Tu sitio web no vende o carga lento? Optimizamos el SEO técnico y la velocidad de tu página en Chile para dominar Google. ¡Cotiza tu auditoría hoy!` (149 ch) |

Cambio aplicado también en `openGraph` y `twitter` card.

### Blog SEO Local (`/blog/seo-local-google-business-chile`) — `src/app/blog/seo-local-google-business-chile/page.tsx`

**Problema:** 787 impresiones, posición 10.64, CTR 0.13%. Query dominante: "mi negocio" (672 impresiones) — mismatch de intent entre lo que el usuario busca y el título anterior.

| Campo | Antes | Después |
|-------|-------|---------|
| Title | `Google Mi Negocio Chile: guía para PYMEs \| Focus Web` (52 ch) | `Google Mi Negocio en Chile: Guía de SEO Local Paso a Paso` (57 ch) |
| Meta | `Google Mi Negocio Chile: aprende a optimizar tu perfil...` (143 ch) | `Aprende a registrar, optimizar y posicionar el perfil de Google Mi Negocio de tu empresa en Chile. Atrae clientes locales y multiplica tus ventas hoy.` (150 ch) |

Schema JSON-LD `headline` y `dateModified` actualizados a `2026-07-01`. Corregido nombre de marca de "Focus Web" a "FocusWeb" en metadatos.

### Checklist Ecommerce (`/check-list-ecommerce`) — `src/app/check-list-ecommerce/page.tsx`

**Problema:** 150 impresiones, posición 11.43, 0 clics. El title anterior tenía 69 caracteres — Google lo truncaba a los 60, cortando "Online | FocusWeb". La truncación en sí era un factor de CTR negativo.

| Campo | Antes | Después |
|-------|-------|---------|
| Title | `Checklist Ecommerce en Chile para Lanzar tu Tienda Online \| FocusWeb` (**69 ch — truncado**) | `Checklist Ecommerce en Chile: 47 Puntos Clave \| FocusWeb` (56 ch) |
| Meta | `Checklist ecommerce en Chile con 47 puntos clave...` (134 ch) | `¿Listo para vender online en Chile? Revisa los 47 puntos críticos antes de lanzar tu tienda: Webpay, envíos, seguridad, SEO y requisitos legales.` (146 ch) |

El número "47" en el título actúa como trust signal y CTR driver.

### Crear Página Web Chile (`/crear-pagina-web-chile`) — `src/app/crear-pagina-web-chile/page.tsx`

**Problema:** heredando ~2376 impresiones del redirect del blog post. La meta descripción anterior tenía 161 caracteres — 6 sobre el límite, siendo recortada por Google.

| Campo | Antes | Después |
|-------|-------|---------|
| Title | `Crear una Página Web en Chile para tu Negocio \| FocusWeb` (56 ch) | `Crear Página Web en Chile: Guía para Pymes \| FocusWeb` (53 ch) |
| Meta | `Guía completa para crear una página web en Chile: tipos de web, qué necesitas, plataformas... Sin tecnicismos, para pymes reales.` (**161 ch — truncada**) | `¿Quieres crear una página web en Chile? Guía con tipos de sitio, plataformas, costos reales y errores comunes que debes evitar. Ideal para pymes.` (146 ch) |

Schema JSON-LD `name` y `description` actualizados para coherencia.

---

## Fase 4: Limpieza de Indexación (Crawl Waste)

GSC reportó 12 páginas en estado "Crawled - currently not indexed". Diagnóstico y acciones:

### `/admin` — Panel administrativo

**Hallazgo:** página funcional de autenticación magic link y gestión de settings del sitio. Sin ninguna directiva `robots` en el metadata. Google la había rastreado.

**Limitación técnica:** el `page.tsx` del admin usa `"use client"` como primera línea, lo que impide exportar `metadata` directamente desde ese archivo en Next.js App Router (los exports de metadata solo funcionan en Server Components).

**Solución:** se creó `src/app/admin/layout.tsx` como Server Component independiente que exporta el metadata de noindex:

```tsx
// src/app/admin/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

El layout wrappea el page.tsx sin alterar su rendering, aplicando los headers HTTP `X-Robots-Tag: noindex, nofollow` en cada respuesta de la ruta `/admin`.

### `/mapa-del-sitio` — Sitemap HTML

**Hallazgo:** página de thin content (solo lista de enlaces). El archivo `/sitemap.xml` ya cumple la función de descubrimiento de URLs para Googlebot. Tener ambos compite por el mismo crawl budget sin beneficio.

**Solución:** campo `robots` añadido al metadata existente en `src/app/mapa-del-sitio/page.tsx`:

```ts
robots: {
  index: false,
  follow: true,  // Los links siguen siendo rastreables
},
```

### Duplicados consolidados con 301

| URL duplicada | Destino canónico | Método |
|--------------|-----------------|--------|
| `/crear-pagina-web-desde-cero` | `/crear-pagina-web-chile` | `next.config.ts` redirect |
| `/blog/crear-pagina-web-desde-cero` | `/crear-pagina-web-chile` | `next.config.ts` redirect |
| `/blog/como-crear-una-pagina-web-en-chile` | `/crear-pagina-web-chile` | `next.config.ts` redirect |
| `/5-pasos-antes-de-lanzar-un-sitio-web` | `/blog/5-pasos-antes-de-lanzar-un-sitio-web` | `next.config.ts` redirect |

---

## Roadmap — Próximos Pasos (2–4 semanas)

### Semana 2–3: Verificación de impacto en GSC

Abrir Google Search Console → Performance → Comparar período anterior vs. período post-deploy (filtrar desde 2026-07-01). Verificar en estas 4 URLs:

| URL | Métrica a observar | Baseline actual |
|-----|-------------------|----------------|
| `/` | CTR en pos 3.45 | 0% sobre 98 imp |
| `/blog/seo-local-google-business-chile` | CTR en pos 10.64 | 0.13% sobre 787 imp |
| `/check-list-ecommerce` | CTR en pos 11.43 | 0% sobre 150 imp |
| `/crear-pagina-web-chile` | Impresiones propias (sin contar redirect) | 33 imp, pos 12.94 |

Si el CTR no mejoró en alguna URL, revisar si Google reescribió el snippet (señal de que el title no coincide con la intención de búsqueda).

### Semana 3–4: Auditoría de `/metodologia`

**Estado actual:** 326 líneas de código, canonical correcto, 0 impresiones en GSC durante todo el período analizado. Google la rastreó pero no la indexó — sospecha de thin content o falta de autoridad de links internos.

**Acciones propuestas:**
1. Revisar densidad de texto real en el HTML renderizado (no contar código JSX, contar solo palabras visibles al usuario)
2. Añadir al menos 3 internal links desde otras páginas del sitio apuntando a `/metodologia`
3. Evaluar si el H1 actual ("Diagnóstico inicial web") tiene suficiente volumen de búsqueda o si conviene renombrarlo a "Metodología SEO Técnico FocusWeb" para capturar queries de marca

### Mes 2: Estrategia de enlazado interno hacia páginas de ventas

Las páginas `/paginas-web-chile` y `/crear-pagina-web-chile` están recién indexadas y necesitan autoridad interna para escalar posición. Plan:

1. **Desde el blog:** añadir un bloque CTA al final de los 3 artículos con más impresiones (seo-local, errores-pymes, mi-pagina-tarda) apuntando a las páginas de servicio relevantes
2. **Desde la home:** verificar que `MainServicesSection` y `NeedsSection` tengan anchor text variado hacia `/paginas-web-chile` y `/crear-pagina-web-chile`
3. **Desde `/metodologia`:** cuando se refuerce esa página, incluir links contextuales a las dos URLs estratégicas

### Seguimiento de las 3 páginas con redirect "Failed" en GSC

GSC Coverage reportó 3 URLs con redirect en estado "Failed" (validación pendiente). Estas corresponden a las URLs antiguas del blog ahora redirigidas. Solución: entrar en GSC → Coverage → "Page with redirect" → seleccionar cada URL → "Validate Fix". Google re-rastreará y actualizará el estado en 1–2 semanas.

---

## Commits de esta sesión

| Hash | Descripción |
|------|-------------|
| `b872a40` | Optimize meta titles and descriptions for top GSC opportunities (Home + Blog SEO Local) |
| `bd1d370` | Fix truncated title and optimize meta for ecommerce checklist and crear-pagina-web |
| `70b3ee9` | Audit crawled-not-indexed pages: noindex and 301 consolidation |

---

*Generado el 2026-07-01. Próxima revisión sugerida: 2026-07-22.*
