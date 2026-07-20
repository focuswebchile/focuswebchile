# Brief: Migración de infraestructura Focus Web a "ops" (Hetzner)

## Estado de ejecución (actualizado 16 de julio de 2026)

Los 5 pasos de la sección "Prioridad de ejecución" están **completos**. Detalle y verificación en `docs/handoffs/OPS-HANDOFF-JULIO-2026.md` (infraestructura y agente) y `docs/handoffs/SITE-HANDOFF-JULIO-2026.md` (widget embebido en el sitio), ambos en el repo `focusweb-chile`.

- Pasos 1-3 (Docker/n8n en Hetzner, Cloudflare Tunnel, migración de Instagram): cerrados el 15 de julio.
- Paso 4 (agente propio del sitio) y paso 5 (corte de DNS de `op.focusweb.cl`): cerrados el 16 de julio — el agente corre en producción (workflow `Focus Web — Website Chat Agent`, id `SKtqO41h8gtLQrZ0`) y el widget está embebido en focusweb.cl.
- Único paso sin iniciar: **paso 6 (optimización vía RAG/pgvector)** — queda para cuando haya volumen real de conversaciones que lo justifique.

Este brief se mantiene sin editar más abajo como registro histórico de lo acordado — para el estado día a día, usar los handoffs de arriba.

## Rol
Actúa como mi socio técnico de DevOps/infraestructura para este proyecto. Antes de ejecutar cualquier cambio, quiero que me expliques qué vas a hacer, por qué, y qué alternativas consideraste. No ejecutes pasos irreversibles (cambios de DNS, borrado de datos, sobreescritura de credenciales) sin que yo confirme explícitamente.

## Contexto general
Opero Focus Web Chile, un negocio solo de marketing digital para pymes chilenas. Tengo dos frentes técnicos que hoy viven en lugares distintos y quiero unificarlos:

1. **Automatización de Instagram**: pipeline de generación de contenido (scripts, b-roll, carruseles) usando Claude Code, Playwright y Remotion. Hoy corre en un n8n levantado localmente cuando armé el primer proyecto con Claude Code.
2. **Agente conversacional para el sitio web** (preguntas y costos): ya probado y funcionando, pero corriendo en infraestructura de un cliente (bot.tinyvan.cl), no mía. El dominio op.focusweb.cl está en Cloudflare como proxy reverso apuntando hacia ahí — quiero desconectar esa dependencia.

## Estado actual (as-is)
- `op.focusweb.cl` → Cloudflare (proxy reverso) → `bot.tinyvan.cl` → n8n del cliente, donde vive el flujo del agente ya validado.
- **Automatización de Instagram de Focus Web: NO está levantada localmente (corrección respecto a versiones anteriores de este brief). Vive dentro del mismo n8n del cliente en `bot.tinyvan.cl`**, junto con la automatización de WhatsApp de TinyVan. Al migrarla hay que tratarla con el mismo cuidado que el agente: exportar sin tocar nada que TinyVan use en producción.
- **El VPS de Hetzner NO está vacío.** Ya tiene Docker instalado y corriendo — específicamente la automatización de WhatsApp de TinyVan (otro cliente). Esto significa que el nuevo stack de Focus Web (n8n + Postgres) debe convivir en el mismo servidor sin chocar con lo que ya está corriendo: **contenedores, nombres, puertos y redes de Docker completamente separados** del `docker-compose` existente de TinyVan. Nada del setup nuevo puede tocar, reiniciar ni interferir con los contenedores actuales.
- Todos los archivos de conocimiento para el agente (precios, servicios, FAQ) ya existen y están listos para ingesta — hoy viven en la carpeta `agente-focusweb`, en un repo separado del sitio web (`focusweb-chile`).
- Sin n8n Cloud ni plan pagado → **no tengo la función "Projects"** (carpetas nativas). La separación de workflows debe hacerse por convención de nombres y tags (ej: `IG - ...`, `Agente - ...`).

## Objetivo (to-be)
Un solo n8n, self-hosted en Docker en mi VPS de Hetzner, dedicado 100% a Focus Web (nada de infraestructura de clientes), accesible en `op.focusweb.cl` a través de Cloudflare Tunnel (no exponer puertos directos del VPS). Dentro de ese n8n conviven, organizados por tags/nombre:
- Los workflows de automatización de Instagram.
- El workflow del agente conversacional (chat de preguntas/costos para el sitio), con conocimiento vía RAG (probablemente pgvector sobre el mismo Postgres del n8n, para no sumar otro servicio).

## Prioridad de ejecución (orden acordado, no alterar sin justificar)
1. Levantar Docker + Docker Compose en Hetzner con n8n + Postgres.
2. Conectar Cloudflare Tunnel y confirmar acceso funcional antes de tocar DNS de producción.
3. Migrar primero la automatización de Instagram (flujo ya conocido) para validar que la infraestructura nueva funciona con carga real, antes de tocar el agente.
4. Recién ahí, diseñar y construir el flujo del agente propio dentro del nuevo n8n. **Esto NO es una migración 1:1 del agente de bot.tinyvan.cl** — ese es un flujo distinto y más avanzado (usa Chatwoot, Telegram, múltiples canales) que pertenece a otro proyecto/cliente. Mi agente es intencionalmente más simple: chat en el sitio web que responde preguntas y costos, y cuando la conversación necesita escalar (el usuario quiere agendar una llamada o hacer una pregunta que el agente no puede resolver), me llega una notificación a mí con los datos del lead. Sin Chatwoot, sin multi-canal, sin la complejidad de tinyvan.
5. Cortar DNS de `op.focusweb.cl` para que apunte a Hetzner en vez de a bot.tinyvan.cl — esto solo ocurre después de que el agente esté corriendo y probado en el nuevo entorno, no antes.
6. Con todo migrado y estable, recién ahí optimizar: ingesta de conocimiento vía pgvector, pulir el agente, evaluar mejoras.

## Identidad visual y de voz del agente (fuente: design.md y BRAND.md)
- **Tokens de color** para themear el widget: `--background:#F7F5F0`, `--foreground:#17162B`, `--primary:#3D3A8C`, `--accent:#C9971F` (CTA/enviar), `--accent-soft:#E3C77A`, `--border:#E4E1D8`, `--radius:0.75rem`.
- **Tipografía del widget**: Plus Jakarta Sans para todo el texto de la conversación (mensajes, botones, input). Bricolage Grotesque NO se usa en el widget salvo posiblemente un título de header, y con criterio — es una fuente de titulares grandes (peso 800), no de UI chica.
- **Tono del agente**: hereda las reglas de `BRAND.md` §5 — mentor cercano y cálido, primera persona ("yo", nunca "nosotros" corporativo), frases cortas, sin jerga sin explicar, nunca lenguaje tipo brief de agencia ("solución integral", "optimizamos"). El agente habla en nombre de Felipe.
- **Restricción dura para el system prompt**: nunca prometer plazos ni compromisos que no se puedan sostener después — esto aplica directamente a cómo responde preguntas de costos y disponibilidad.

## Alcance del agente propio (deliberadamente simple)
- Canal único: widget de chat embebido en focusweb.cl. No Telegram, no Chatwoot, no multi-canal (a diferencia del flujo de tinyvan, que es de otro proyecto/cliente y no debe copiarse).
- Responde preguntas frecuentes y de costos usando la base de conocimiento ya existente (archivos de Focus Web).
- Flujo de conversación:
  1. El bot saluda y pregunta el nombre de la persona al inicio.
  2. Responde preguntas libremente usando el conocimiento (RAG).
  3. Cuando la persona muestra interés, el bot ofrece dejar su teléfono para que Felipe la contacte.
  4. Al tener nombre + teléfono, el agente llama una tool estructurada (`guardar_contacto`) — no se intenta extraer el teléfono parseando texto libre — que dispara un email a Felipe con los datos del lead y un resumen breve de la conversación.
  5. El bot confirma al usuario que Felipe lo va a contactar.
- No hay lógica de "escalamiento" ni detección de urgencia — es una conversación natural que termina en captura de contacto cuando corresponde.
- Canal de notificación: email (sin necesidad de cuenta de WhatsApp Business ni aprobaciones de Meta).
- Este alcance simple es intencional y debe mantenerse así salvo que yo pida explícitamente sumar complejidad.

## Restricciones y decisiones ya tomadas
- **Aislamiento total de los contenedores existentes de TinyVan en Hetzner.** El servidor ya corre Docker con la automatización de WhatsApp de otro cliente — el stack nuevo de Focus Web debe usar su propio `docker-compose` con nombres de contenedor, puertos y red de Docker exclusivos, sin depender de nada existente ni arriesgar downtime de lo que ya está en producción para TinyVan.
- No usar n8n Cloud ni plan pagado — todo self-hosted community edition.
- No exponer puertos del VPS directamente a internet — todo el tráfico entra vía Cloudflare Tunnel.
- Postgres como base de datos de n8n (no SQLite), pensando en volumen real de datos y posible uso futuro como vector store (pgvector).
- Las credenciales (API keys de Claude, Meta Graph API, Google Sheets/Drive, etc.) no se migran automáticamente al exportar workflows — deben recrearse manualmente en el nuevo entorno.
- Nada de esto se corta ni se cambia en producción (DNS) sin probar en paralelo primero.

## Lo que necesito de ti en cada paso
- Antes de proponer comandos o configuración, confírmame que entendiste en qué paso de la lista de prioridad estamos.
- Si detectas que una decisión mía contradice el objetivo o las restricciones de arriba, dímelo antes de ejecutar.
- Sé explícito sobre qué es reversible y qué no.

## Pendiente de evaluación futura (no bloquea la migración actual)
- **Upgrade del plan Hetzner (más RAM/CPU):** hoy el VPS tiene margen ajustado (~1.6GB RAM disponible) para correr ambos stacks (TinyVan + Focus Web) de forma estable. El swap de 2GB + límites de memoria por contenedor son la mitigación inmediata. Si con carga real ambos proyectos crecen, evaluar subir el plan del VPS para dar más margen a los dos — decisión de Felipe, sin apuro, se revisita después de validar el stack nuevo funcionando.