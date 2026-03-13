-- Focus Web / Supabase
-- Objetivo:
-- 1) Activar RLS en tablas expuestas en schema public
-- 2) Cerrar acceso directo desde PostgREST para roles cliente
-- 3) Mantener acceso para procesos server-side via service_role
--
-- Supuesto operativo confirmado:
-- - El frontend NO consulta Supabase directo.
-- - El backend es quien lee/escribe estas tablas.
-- - El backend usa la SUPABASE_SERVICE_ROLE_KEY.
--
-- Si hoy algun cliente/frontend consume estas tablas con la anon key,
-- NO ejecutes esto sin antes crear policies explicitas de SELECT.

begin;

alter table public.sections enable row level security;
alter table public.items enable row level security;
alter table public.typography enable row level security;
alter table public.colors enable row level security;

alter table public.sections force row level security;
alter table public.items force row level security;
alter table public.typography force row level security;
alter table public.colors force row level security;

commit;

-- Verificacion sugerida despues de ejecutar:
-- select schemaname, tablename, rowsecurity
-- from pg_tables
-- where schemaname = 'public'
--   and tablename in ('sections', 'items', 'typography', 'colors');
--
-- Si necesitas lectura publica directa desde el frontend en el futuro,
-- crea policies SELECT especificas y acotadas. Ejemplo base:
--
-- create policy "sections_read_public"
-- on public.sections
-- for select
-- to anon, authenticated
-- using (true);
--
-- No abras INSERT / UPDATE / DELETE para anon.
