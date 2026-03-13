# T14 — Arquitectura final y ownership

## Objetivo
Dejar documentada la arquitectura final despues del desacople entre Focus Web, Gasfiter y ABCIS, con naming claro y responsabilidades separadas.

## Estado final por ecosistema

### Focus Web
- Frontend: `focusweb-chile`
- Backend: `focusweb-backend`
- Backend URL: `https://focusweb-backend-production.up.railway.app`
- Supabase: `focuswebchile's Project`
- Slug operativo: `site-001`
- Sites presentes en Supabase Focus Web:
  - `site-001` (`Focus Web - Demo`)
- Estado: limpio y sin residuos de Gasfiter

### ABCIS
- Frontend: `ABCIS`
- Backend/CMS: `cms-abcis`
- Backend URL: `https://cms-abcis.vercel.app`
- Dominio CMS: `https://cms.abcis.cl`
- Slug operativo: `abcis`
- Estado: desacoplado de `Gasfiter`

### Gasfiter
- Frontend/app actual: `Gasfiter`
- Proyecto Vercel: `gasfiter-landing`
- Dominio actual: `https://gasfiter-landing-lilac.vercel.app`
- Slug operativo vigente: `gasfiter-staging`
- Estado: desacoplado de `ABCIS`, ya no sirve contenido ni dominio del cliente

## Decisiones cerradas

### 1. Focus Web queda aislado
- Focus Web no depende de Gasfiter
- Focus Web no depende de ABCIS
- El Supabase de Focus Web ya no contiene residuos `gasfiter` ni `gasfiter-demo`

### 2. ABCIS queda aislado
- `ABCIS` ya no depende de `gasfiter-landing`
- `cms.abcis.cl` ya no apunta a `Gasfiter`
- Todo trabajo funcional futuro del cliente debe hacerse en:
  - `cms-abcis`
  - `ABCIS`

### 3. Gasfiter vuelve a su propio scope
- `Gasfiter` ya no sostiene el CMS productivo de `ABCIS`
- El repo fue limpiado de referencias runtime principales al cliente
- El slug actual sigue siendo transicional: `gasfiter-staging`

## Trabajo futuro permitido

### Focus Web
- mantenimiento normal de frontend y backend
- mejoras SEO y contenido
- sin relacion con `ABCIS` o `Gasfiter`

### ABCIS
- mejoras funcionales del CMS
- mejoras del frontend del cliente
- Fase 4 documentada para servicios/contacto editables

### Gasfiter
- normalizacion futura del slug `gasfiter-staging` hacia `gasfiter`
- cleanup adicional de branding o staging si se requiere
- sin reintroducir dependencia con `ABCIS`

## Regla operativa final
Antes de tocar cualquier proyecto, confirmar siempre:
1. repo correcto
2. deploy correcto
3. slug correcto
4. proyecto Supabase correcto

## Mapa resumido
- `focusweb-chile` -> `focusweb-backend` -> Supabase Focus Web -> `site-001`
- `ABCIS` -> `cms-abcis` -> CMS `cms.abcis.cl` -> slug `abcis`
- `Gasfiter` -> `gasfiter-landing` -> slug `gasfiter-staging`

## Conclusion
La arquitectura ya no esta mezclada entre Focus Web, Gasfiter y ABCIS. Lo que queda pendiente a futuro son mejoras de naming y producto, no desacoples criticos.
