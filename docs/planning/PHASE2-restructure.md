# PHASE2-restructure.md — Reestructuración de flujo, FocusWeb

> Complementa a `BRAND.md` y `design.md`. Fase 1 (color + tipografía + hero)
> ya está cerrada y verificada. Este documento define el reordenamiento de
> secciones para eliminar el "SaaS vibe" que persiste en el layout, aunque
> la paleta y tipografía ya estén correctas.

---

## 1. Diagnóstico post-Fase-1

Confirmado visualmente en `localhost:3000`: colores y tipografía ya se sienten
consistentes y propios. El problema que queda es puramente estructural:

- Demasiadas secciones "dark card" seguidas (No vendemos paquetes → Ya tengo
  sitio → CTA intermedio → Testimonios) — compiten entre sí en vez de generar
  un recorrido narrativo.
- El caso ABCIS (la prueba social más fuerte) está casi al final de la página,
  después de seis secciones — para cuando el visitante llega ahí, ya decidió
  si confía o no.
- No existe ninguna sección "quién soy" — el visitante ve servicios y precios
  antes de saber que hay una persona real detrás.
- La ilustración de mano+celular sigue siendo stock genérico (pendiente real,
  fuera de alcance de esta fase — ver `design.md` §6).

## 2. Nuevo orden de secciones

| # | Sección | Cambio respecto a hoy |
|---|---|---|
| 1 | Hero | Ya resuelto en Fase 1. Sin cambios en esta fase. |
| 2 | **Sobre mí (nueva)** | No existe hoy. 2-3 frases de `BRAND.md` §1, con foto real de Felipe (placeholder hasta tener la foto). Va inmediatamente después del hero. |
| 3 | **Caso ABCIS** | Sube desde el final de la página hasta acá. Es la prueba social más fuerte — debe aparecer temprano, no como featurette de cierre. |
| 4 | Servicios (3 cards) | Se mantiene tal cual — ya funciona bien, no tocar. |
| 5 | "No vendemos paquetes" | Se mantiene el mensaje pero se elimina la terminal verde tipo hacker-movie — no encaja con la nueva identidad bold/personal. Reescribir con tono de `BRAND.md` §5. |
| 6 | Metodología (4 pasos) | Se mantiene, ya está clara. |
| 7 | **Stats/testimonios consolidados** | Hoy están repartidos en 3-4 bloques dark-card distintos (tráfico orgánico, impacto de velocidad, "por qué la velocidad destruye tu negocio", testimonios finales). Consolidar en una sola sección con jerarquía visual clara, en vez de repetir el mismo patrón de card oscura cuatro veces seguidas. |
| 8 | CTA final | Se mantiene, sin cambios de contenido — solo hereda paleta ya aplicada en Fase 1. |

## 3. Reglas de la fase

- **Máximo un bloque de contraste oscuro (`--foreground`) visible por scroll.**
  Hoy hay cuatro o cinco seguidos — eso es lo que grita "SaaS dashboard". Elegir
  UNO para todo el flujo (probablemente la sección de "No vendemos paquetes" o
  el CTA final, no ambos con la misma intensidad).
- **La sección "Sobre mí" es nueva — no existe componente hoy.** Crear uno
  simple: foto + 2-3 frases, sin cards ni bordes duros, para que se sienta
  como una presentación, no como otro bloque de producto.
- **El caso ABCIS se mueve, no se reescribe** en esta fase — el contenido ya
  es fuerte, solo cambia su posición en la página.
- **La consolidación de stats (fila 7) no debe perder ningún dato real** —
  +99 personas, 3 min de lectura, 2.9 páginas, 53% rebote móvil, +15/+41/24%,
  etc. Se agrupan visualmente, no se eliminan.
- No tocar `admin/page.tsx`, formularios, ni lógica de reCAPTCHA — mismo
  alcance de "solo estructura visual" que en Fase 1.

## 4. Pendiente

- [ ] Foto real de Felipe para la sección "Sobre mí" (placeholder mientras tanto)
- [ ] Fotos de proyectos Tiny Van/ABCIS para reforzar el caso de éxito (opcional en esta fase, no bloqueante)
- [ ] Reemplazo de `svghero.svg` — sigue fuera de alcance, ver `design.md` §6
