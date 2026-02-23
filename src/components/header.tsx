"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nuestro Proceso", href: "/nuestro-proceso" },
  { name: "Mi historia", href: "/mi-historia" },
  { name: "Noticias", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isScrolledRef = useRef(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const shouldShowBackground = isScrolled || !isHome

  useEffect(() => {
    const mountTimer = window.setTimeout(() => {
      setIsMounted(true)
    }, 0)
    let rafId: number | null = null

    const syncScrollState = () => {
      const nextIsScrolled = window.scrollY > 20
      if (nextIsScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextIsScrolled
        setIsScrolled(nextIsScrolled)
      }
      rafId = null
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(syncScrollState)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.clearTimeout(mountTimer)
      window.removeEventListener("scroll", handleScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldShowBackground
            ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto py-3 sm:py-4 pl-[max(1.75rem,env(safe-area-inset-left))] pr-[max(1.75rem,env(safe-area-inset-right))] md:pl-[max(2rem,env(safe-area-inset-left))] md:pr-[max(2rem,env(safe-area-inset-right))]">
          <div className="flex items-center justify-between">
            <a
              href={isHome ? "#hero" : "https://focusweb.cl"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault()
                  scrollToSection("#hero")
                }
              }}
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity shrink-0"
            >
              <Image
                src="/logo.png"
                alt="FocusWeb"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
                priority
              />
              <span className="hidden xl:inline bg-gradient-to-r from-accent via-primary to-info bg-clip-text text-transparent">
                FocusWeb
              </span>
            </a>

            {/* Desktop Navigation */}
            {isMounted ? (
              <div className="hidden md:ml-auto md:flex items-center gap-3 lg:gap-5 xl:gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (isHome && item.href.startsWith("/#")) {
                        e.preventDefault()
                        scrollToSection(item.href.replace("/#", "#"))
                      } else if (item.href === "/" && isHome) {
                        e.preventDefault()
                        scrollToSection("#hero")
                      }
                    }}
                    className="text-[11px] lg:text-sm font-medium text-foreground/70 hover:text-accent transition-colors relative group whitespace-nowrap"
                  >
                    {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <Button size="sm" className="shadow-lg shadow-accent/25 font-medium text-xs lg:text-sm" asChild>
                <a href="https://wa.me/420733796959" target="_blank" rel="noreferrer">
                  Comenzar
                </a>
              </Button>
              </div>
            ) : (
              <div className="hidden md:flex md:ml-auto h-9 w-[560px] max-w-[62vw]" aria-hidden />
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 sm:h-10 sm:w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="relative container mx-auto px-4 pt-20 sm:pt-24 pb-8">
            <div className="flex flex-col gap-2 sm:gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (isHome && item.href.startsWith("/#")) {
                      e.preventDefault()
                      scrollToSection(item.href.replace("/#", "#"))
                    } else if (item.href === "/" && isHome) {
                      e.preventDefault()
                      scrollToSection("#hero")
                    }
                  }}
                  className="text-base sm:text-lg font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-xl hover:bg-muted active:bg-muted/80"
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-2 sm:mt-4 shadow-lg shadow-accent/25 h-12 text-base" asChild>
                <a href="https://wa.me/420733796959" target="_blank" rel="noreferrer">
                  Comenzar ahora
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
