# Ops & Agente — Handoff Julio 2026

**Repositorio de conocimiento:** `agente-focusweb/` (carpeta sin trackear dentro de `focusweb-chile`, no es un repo git separado — ver corrección en `SITE-HANDOFF-JULIO-2026.md` §4)
**VPS:** Hetzner CX23 — IP `46.62.141.40` — Helsinki — `ssh root@46.62.141.40`
**Fecha de cierre original:** 15 de julio de 2026
**Última actualización:** 16 de julio de 2026 (pasos 4 y 5 del brief, completados)
**Brief original:** `agente-focusweb/000-brief-migracion-ops-focusweb.md`
**Ver también:** `docs/handoffs/SITE-HANDOFF-JULIO-2026.md` (embeber el widget en el sitio, UX, punto de vista focusweb-chile)

---

## Resumen de la sesión

Objetivo: sacar el agente conversacional y la automatización de Instagram de Focus Web de la infraestructura de un cliente (TinyVan, `bot.tinyvan.cl`) y levantarlos en infraestructura propia en Hetzner, sin afectar la producción de TinyVan (que comparte el mismo VPS). Se avanzó en los pasos 1-3 del brief (infraestructura + migración de Instagram), se corrigió un bug real de contenido, se limpiaron residuos en la infraestructura del cliente, y se resolvieron gaps de precio y de identidad/tono del agente del sitio.

**Actualización del 16 de julio:** los pasos 4 y 5 del brief (construir el agente propio y cortar DNS) **ya se completaron** — ver sección 3.1 y 4.1 más abajo. El agente está en producción, respondiendo en `op.focusweb.cl` y embebido como widget en focusweb.cl.

---

## 1. Infraestructura en Hetzner

- El VPS **no estaba vacío**: ya corría el stack de TinyVan (`/opt/tinyvan-bot/` — n8n, Postgres con pgvector, Redis, Chatwoot, cloudflared), en producción activa. Nunca se tocó ni se reinició nada de ahí.
- Se agregó un **swap de 2GB** (`/swapfile`, persistido en `/etc/fstab`) como colchón de estabilidad para ambos stacks compartiendo ~3.7GB de RAM.
- Se levantó un stack nuevo, **100% aislado**, en `/opt/focusweb-ops/`:
  - Contenedores: `focusweb-ops-n8n-1`, `focusweb-ops-postgres-1` (imagen `pgvector/pgvector:pg16`, elegida desde el día 1 para no reiniciar en producción cuando llegue el paso de RAG), `focusweb-ops-cloudflared-1`.
  - Red propia (`focusweb-ops_focusweb-net`), volúmenes propios, **sin ningún puerto publicado al host** — todo el tráfico entra solo por Cloudflare Tunnel.
  - `n8n` necesita `mem_limit: 1024m` + `NODE_OPTIONS=--max-old-space-size=768` (con 512m se caía en loop por memoria).
  - Túnel de Cloudflare `focusweb-ops` conectado, hostname de prueba: **`test-op.focusweb.cl`** (funcional, HTTP 200).
- **`op.focusweb.cl` no tiene ningún registro DNS hoy** (se creía que ya apuntaba a TinyVan, pero es `NXDOMAIN` — confirmado con dig autoritativo). El corte de DNS (paso 5 del brief) va a ser crear el registro por primera vez, no repuntar uno existente. Sigue sin tocarse.

---

## 2. Migración de la automatización de Instagram — completa

- En `bot.tinyvan.cl` había exactamente 2 workflows: `Focus Web — Content Automation` (de Focus Web) y `Tinyvan Bot — WhatsApp AI Agent` (de TinyVan, activo, nunca tocado).
- El workflow de Focus Web se exportó (solo lectura) y se importó al n8n nuevo — id `hZDTYSN4mdbS07xc` en `test-op.focusweb.cl`, inactivo.
- Se recrearon las 4 credenciales en el n8n nuevo (Anthropic, Google Sheets, Google Drive, Webhook Auth) — los valores reales los cargó Felipe, no quedaron en ningún archivo de esta sesión salvo lo ya persistido en el propio n8n.
- **Validado con una ejecución real de punta a punta**: generó contenido, bajó assets de Drive, renderizó un Reel y lo publicó en Instagram real (`https://www.instagram.com/reel/Da0U5C4iVGg/`).
- **Bug corregido:** en el nodo `Content Brief`, la rotación de composiciones (`FocusWebTitleReel` / `FocusWebTrustReel` / `FocusWebToolsReel`) usaba el mismo módulo que decidía si era "día de reel", así que siempre caía en la primera — nunca rotaba. Se corrigió contando ocurrencias de día-de-reel en vez de días totales. Solo corregido en el n8n nuevo.
- **Limpieza en `bot.tinyvan.cl` (a pedido explícito de Felipe):** se borró el workflow `Focus Web — Content Automation` y sus 4 credenciales huérfanas asociadas. Hoy `bot.tinyvan.cl` solo tiene el workflow y las credenciales propias de TinyVan. Respaldo del workflow borrado (versión con el fix aplicado) en `~/Desktop/focusweb-content-automation-export.json`.
- **Pendiente de Felipe (fuera de esta sesión):** borrar el Client Secret viejo (9 de julio, termina en `oOdU`) en Google Cloud Console — confirmado seguro, nada lo usa ya.

## 2.1 El pipeline real de publicación — vive fuera de ambos n8n

- Corre local en la Mac de Felipe: `/Users/felipeibar/Desktop/IG | Focus Web/carruseles/` (Playwright para carruseles, Remotion para reels, `pipeline.sh` orquesta render + publicación a Meta).
- Expuesto vía un servicio `launchd` (`com.focusweb.webhook-receiver`, puerto 8787) detrás de un túnel de Cloudflare **separado y ya existente**, `focusweb-hook` → `ops.focusweb.cl` (con "s" — distinto del `op.focusweb.cl`/`focusweb-ops` del n8n). Nada de esto se migra a Hetzner.
- El secreto compartido (`WEBHOOK_SHARED_SECRET` en el `.env` de ese repo) se rotó a un valor nuevo y se sincronizó con la credencial `Focus Web Webhook Auth` del n8n nuevo.
- **Riesgo a tener en el radar:** el webhook mantiene la conexión HTTP abierta hasta que termina todo el render — los Reels (Remotion) tardan mucho más que los carruseles (Playwright), lo que es un timeout plausible contra los límites del túnel si vuelve a fallar con un error de conexión cortada.
- De las 3 composiciones de Reel, solo `FocusWebTrustReel` y `FocusWebToolsReel` usan video real de Pexels de fondo — `FocusWebTitleReel` es texto/gradientes, aunque el pipeline baja el video igual (fetch que no se usa en ese caso).

---

## 3. Actualizaciones al KB del agente (`agente-focusweb/`)

- **Nuevo nivel de precio "Landing AI"** (`03-servicio-desarrollo-web.md`, `04-precios-resumen.md`, `AGENTS.md`): desde $140.000 CLP + $13.990 CLP/mes de mantención (incluye 1 cambio menor/mes), sin backend, sin foco en SEO, con conexión a Google Mi Negocio, una sola ronda de ajustes antes de publicar. Incluye nota de transparencia obligatoria: pasados ~3 meses, el costo total supera a la Landing Page normal — hay que decirlo si preguntan por el largo plazo.
- **Contradicción corregida:** la Landing Page normal ($180.000) sí tiene backend propio (antes el KB decía que no) — lo que no tiene es panel de administración de autoservicio, eso sigue igual.
- **Nota general agregada:** los precios de FocusWeb son por el desarrollo — cualquier suscripción de plataforma de terceros (ej. Shopify) corre por cuenta del cliente.
- **Identidad del agente, resuelta** (`AGENTS.md`, nueva sección "Identidad del agente"; `AGENTS-identidad-visual.md` actualizado): el agente habla con el tono y los valores de Felipe (primera persona, sin "nosotros" corporativo) pero **se identifica como su asistente virtual, nunca como Felipe en persona** — para no generar una sorpresa que rompa confianza más adelante. Ejemplo de saludo ya definido en `AGENTS.md`.
- **Corrección de tuteo:** el KB pedía "tuteo" sin especificar — se aclaró explícitamente **"tú", nunca "vos"** (se había colado voseo en el tono).
- **(16 jul) Landing AI ahora incluye dominio y hosting:** la mantención de $13.990 CLP/mes pasó de cubrir solo "1 cambio menor/mes" a incluir explícitamente **dominio .cl + hosting + 1 cambio menor/mes**. Decisión de negocio: si el cliente deja de pagar, el dominio y el hosting dejan de renovarse y el sitio queda offline (a diferencia de la Landing Page normal, pago único, que sigue funcionando siempre). Verificado que el margen sigue siendo saludable tras amortizar el costo del dominio (~$832/mes) sobre la mantención. Actualizado en `03-servicio-desarrollo-web.md`, `04-precios-resumen.md`, `AGENTS.md` y en el `systemMessage` del agente en producción.
- **(16 jul) Fix de identidad — primera persona indebida:** el agente decía frases tipo *"la administro yo (Felipe)"* al hablar de quién hace los cambios manuales — sonaba a que el agente se hacía pasar por Felipe. Corregido a tercera persona ("la administra Felipe") en `AGENTS.md` y en el system prompt en producción. Verificado con test en vivo.

---

## 3.1 Paso 4 y 5 del brief — completados (16 de julio)

El agente del sitio ya está construido, probado y en producción — esto cierra los pasos 4 y 5 del brief original (`000-brief-migracion-ops-focusweb.md`).

- **Workflow en n8n:** `Focus Web — Website Chat Agent` (id `SKtqO41h8gtLQrZ0`), activo, en el stack `focusweb-ops` de Hetzner. Chat Trigger (`loadPreviousSession: "notSupported"` — el widget del sitio maneja su propio historial, no la memoria nativa de n8n) → AI Agent (LangChain, modelo `claude-sonnet-5`) → Memory Buffer Window.
- **KB completo cargado directo en el `systemMessage`** del nodo AI Agent (no RAG todavía — eso sigue siendo el paso 6, sin iniciar).
- **Tool `guardar_contacto`:** terminó siendo un sub-workflow propio (no Code Tool — el sandbox de n8n no tiene `fetch`/red) con un nodo HTTP Request real, llamando a la API de **Resend** para el email de aviso a Felipe. Sub-workflow activo (los Tool Workflow de n8n requieren que el sub-workflow esté activo para poder ejecutarse).
- **DNS de `op.focusweb.cl` cortado hacia Hetzner** — ya no apunta a `bot.tinyvan.cl`. Confirmado con pruebas reales contra `https://op.focusweb.cl/webhook/focusweb-site-chat/chat`.
- **Widget embebido en focusweb.cl**, reemplazando el botón flotante de WhatsApp — detalle completo de la UX en `docs/handoffs/SITE-HANDOFF-JULIO-2026.md`.
- Guion probado de punta a punta en producción: saludo simulado (frontend) → primera respuesta real sin repetir el saludo → preguntas calificadoras de precio → transparencia de Landing AI → oferta de dejar contacto.

---

## 4. Pendiente para retomar

1. ~~Paso 4 — construir el agente del sitio~~ **Completado (16 jul), ver §3.1.**
2. ~~Paso 5 — cortar DNS de `op.focusweb.cl`~~ **Completado (16 jul), ver §3.1.**
3. **Paso 6 — optimización:** ingesta del KB vía pgvector, evaluar qué contenido de blog conviene sumar (con datos reales de conversación, no antes). Sigue sin iniciar.
4. Borrar el Client Secret viejo de Google Cloud (9 de julio) — pendiente de Felipe.
5. Evaluar upgrade del plan de Hetzner si el uso real de ambos stacks (TinyVan + Focus Web) empieza a apretar la RAM (ver nota en `000-brief-migracion-ops-focusweb.md`).
6. Con el agente ya en producción, empezar a mirar conversaciones reales para detectar preguntas que el KB no cubre bien (input directo para el paso 6).
