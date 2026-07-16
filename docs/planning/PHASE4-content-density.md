# PHASE4-content-density.md — Simplificación de páginas de servicio

> Complementa a `BRAND.md`, `design.md`, `PHASE2-restructure.md` y
> `PHASE3-cleanup.md`. A diferencia de las fases anteriores (visual/color/
> tipografía), esta fase es de **estrategia de contenido**: las páginas de
> categoría de servicio (Auditoría, Optimización, y potencialmente la
> página general de Servicios) tienen mucho texto pensado para SEO, pero
> son densas para un usuario que llega buscando ayuda concreta y rápida.

---

## 1. El problema

Estas páginas probablemente fueron escritas priorizando keywords y
profundidad de contenido para posicionamiento en Google — válido para SEO,
pero genera fricción para el visitante real: alguien que llega con una
necesidad puntual ("necesito que mi sitio cargue más rápido") se encuentra
con un muro de texto antes de entender qué ofrece Felipe y cómo actuar.

**El objetivo de esta fase NO es sacrificar el SEO** — es separar el
contenido en dos capas: una capa de **escaneo rápido** para el humano que
decide en segundos si esto es para él, y una capa de **profundidad** que
sigue estando ahí (para SEO y para el usuario que sí quiere leer más), pero
no bloqueando el camino a la acción.

## 2. Alcance

- `/servicios/auditoria`
- `/servicios/optimizacion`
- (evaluar si la página general `/servicios` tiene el mismo problema, o
  si ya quedó resuelta como parte de la Fase 3 al trabajar Desarrollo Web)

Font-family y residuos de color en estas 3 páginas también se corrigen en
esta fase (mismo patrón que el resto de Fase 3), ya que de todos modos hay
que tocar estos archivos.

## 3. Estrategia propuesta (a validar con Felipe antes de construir)

- **Above the fold / primeras pantallas:** solo lo esencial — qué es el
  servicio, para quién es, precio o rango, CTA claro. Nada de párrafos
  largos acá.
- **Contenido SEO extenso:** no se elimina — se mueve a un bloque
  expandible ("Ver más detalles técnicos" / acordeón), o más abajo en la
  página después del CTA principal, para que siga indexándose por Google
  sin ser lo primero que un humano tiene que atravesar.
- **Párrafos largos → listas y subtítulos cortos** donde sea posible, sin
  perder la profundidad informativa (mismo principio que ya aplicamos en
  la home: nada de bloques de texto densos sin aire).
- **Un resumen tipo TL;DR** al inicio de cada página, 2-3 líneas, antes de
  entrar en detalle — le da al visitante apurado la respuesta inmediata.

## 4. Pendiente de decidir con Felipe antes de construir

- ¿Confirmar el criterio de "qué va arriba (escaneo) vs. qué va abajo/
  expandible (profundidad SEO)" página por página, o definir una regla
  general que aplique a las 3 por igual?
- ¿Hay contenido específico que Felipe sabe que es importante mantener
  visible siempre (no colapsado), aunque sea denso?
- Confirmar si esta fase toca copy (reescribir/resumir) o solo
  reestructura visualmente el contenido existente sin tocar el texto en
  sí — impacta directamente el esfuerzo y el riesgo de la fase.
