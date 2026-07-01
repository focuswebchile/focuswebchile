import { CheckCircle2, ArrowRight } from "lucide-react"

const bullets = [
  "Diagnóstico antes que propuesta — sabemos qué tienes antes de cotizar.",
  "Precios transparentes en CLP — sin sorpresas ni contratos largos.",
  "Atendemos todo Chile, 100% remoto — sin reuniones presenciales.",
]

const terminalLines = [
  { prefix: "$", text: "focusweb audit --url https://tusitio.cl", cls: "text-green-400" },
  { prefix: "→", text: "Analizando estructura SEO...", cls: "text-slate-400" },
  { prefix: "→", text: "Revisando Core Web Vitals...", cls: "text-slate-400" },
  { prefix: "→", text: "Detectando errores técnicos...", cls: "text-slate-400" },
  { prefix: "", text: "", cls: "" },
  { prefix: "", text: "HALLAZGOS PRIORITARIOS:", cls: "text-amber-400 font-semibold" },
  { prefix: "✗", text: "H1 duplicado en 3 páginas", cls: "text-red-400" },
  { prefix: "✗", text: "LCP > 4.2s en móvil (imágenes sin WebP)", cls: "text-red-400" },
  { prefix: "✗", text: "0 Schema markup detectado", cls: "text-orange-400" },
  { prefix: "✓", text: "SSL activo", cls: "text-green-400" },
  { prefix: "✓", text: "Sitemap.xml presente", cls: "text-green-400" },
  { prefix: "", text: "", cls: "" },
  { prefix: "→", text: "Reporte con prioridades en tu correo en 24h", cls: "text-green-400" },
]

export function ValuePropDarkSection() {
  return (
    <section className="bg-[#0D1117] px-4 py-20 sm:px-6 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left: value text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Por qué FocusWeb
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.90] tracking-tighter text-white sm:text-5xl lg:text-[3.5rem]">
              No vendemos<br />
              paquetes.<br />
              Diagnosticamos<br />
              primero.
            </h2>
            <ul className="mt-8 space-y-5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base leading-relaxed text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="/metodologia"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
            >
              Auditoría gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: terminal */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161B22] p-5 sm:p-6">
            {/* Mac-style titlebar */}
            <div className="mb-4 flex items-center gap-1.5 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-slate-500">focusweb-audit — bash</span>
            </div>
            {/* Terminal lines */}
            <div className="space-y-1 font-mono text-sm">
              {terminalLines.map((line, i) =>
                line.text === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <p key={i} className={`leading-snug ${line.cls}`}>
                    {line.prefix && (
                      <span className="mr-2 opacity-70">{line.prefix}</span>
                    )}
                    {line.text}
                  </p>
                )
              )}
              {/* blinking cursor */}
              <p className="text-green-400">
                <span className="mr-2 opacity-70">$</span>
                <span className="inline-block w-2 animate-pulse bg-green-400">&nbsp;</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
