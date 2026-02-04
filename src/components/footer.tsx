import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FocusWeb
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Desarrollo web funcional y rápido para emprendedores chilenos. Sin costos ocultos, con resultados claros.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base">Enlaces rápidos</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="/precios/" className="hover:text-primary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="/nuestro-proceso/" className="hover:text-primary transition-colors">
                  Nuestro proceso
                </a>
              </li>
              <li>
                <a href="/blog/" className="hover:text-primary transition-colors">
                  Noticias
                </a>
              </li>
              <li>
                <a href="/contacto/" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base">Síguenos</h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/focuswebchile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/people/Focus-Web-Chile/61585246727387/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a
                href="/contacto/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 pb-20 sm:pb-0 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p className="text-center sm:text-left">© {currentYear} FocusWeb Chile. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2 text-center sm:text-right">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              Hecho en Chile para emprender online
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
