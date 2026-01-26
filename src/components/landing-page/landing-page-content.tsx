"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { TextRevealByWord } from "@/components/ui/text-reveal-by-word";
import { cn } from "@/lib/utils";
import { ProcessSection } from "@/components/process-section";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none text-primary/20">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" aria-hidden="true">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 22 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function LandingHero({ title, subtitle }: { title: string; subtitle: string }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-0 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="mx-auto max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight text-balance leading-[1.05] overflow-visible">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.08 + letterIndex * 0.02,
                      type: "spring",
                      stiffness: 160,
                      damping: 22,
                    }}
                    className="inline-block text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex justify-center">
            <Button size="lg" className="text-base sm:text-lg font-semibold" asChild>
              <a href="#cta-final">Hablemos por WhatsApp</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ScrollGlobeProps {
  sections: {
    id: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    align?: "left" | "center" | "right";
    features?: { title: string; description: string }[];
    actions?: { label: string; variant: "primary" | "secondary"; onClick?: () => void }[];
    custom?: React.ReactNode;
  }[];
  className?: string;
}

function ScrollGlobe({ sections, className }: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const navLabelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    setScrollProgress(progress);

    const viewportCenter = window.innerHeight / 2;
    let newActiveSection = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = index;
        }
      }
    });

    setActiveSection(newActiveSection);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId.current = requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (navLabelTimeoutRef.current) {
        clearTimeout(navLabelTimeoutRef.current);
      }
    };
  }, [updateScrollPosition]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-screen overflow-x-hidden min-h-screen bg-background text-foreground",
        className,
      )}
    >
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-border/20 via-border/40 to-border/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-blue-600 to-blue-900 will-change-transform shadow-sm"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: "left center",
            transition: "transform 0.15s ease-out",
            filter: "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
          }}
        />
      </div>

      <div className="hidden sm:flex fixed right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="relative group">
              <div
                className={cn(
                  "nav-label absolute right-5 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2",
                  "px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap",
                  "bg-background/95 backdrop-blur-md border border-border/60 shadow-xl z-50",
                  activeSection === index ? "animate-fadeOut" : "opacity-0",
                )}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                  <div className="w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs sm:text-sm lg:text-base">{section.badge || `Seccion ${index + 1}`}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={cn(
                  "relative w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
                  "before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300",
                  activeSection === index
                    ? "bg-primary border-primary shadow-lg before:animate-ping before:bg-primary/20"
                    : "bg-transparent border-muted-foreground/40 hover:border-primary/60 hover:bg-primary/10",
                )}
                aria-label={`Ir a ${section.badge || `seccion ${index + 1}`}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 lg:w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 -z-10" />
      </div>

      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => {
            sectionRefs.current[index] = el as HTMLDivElement | null;
          }}
          className={cn(
            section.custom
              ? "relative w-full max-w-full px-0 z-20 py-0 overflow-visible"
              : "relative flex flex-col justify-center px-4 sm:px-6 z-20 py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden",
            section.align === "center" && "items-center text-center",
            section.align === "right" && "items-end text-right",
            section.align !== "center" && section.align !== "right" && "items-start text-left",
            index === 0 && "pt-0",
          )}
        >
          <div
            className={cn(
              "w-full max-w-7xl",
              section.custom && "mx-auto",
              section.custom && "max-w-none",
              section.custom ? "opacity-100" : "will-change-transform transition-all duration-700 opacity-100 translate-y-0",
            )}
          >
            {section.custom ? (
              section.custom
            ) : (
              <>
                <h1
                  className={cn(
                    "font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight",
                    index === 0
                      ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
                      : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
                  )}
                >
                  {section.subtitle ? (
                    <div className="space-y-1 sm:space-y-2">
                      <div className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {section.title}
                      </div>
                      <div className="text-muted-foreground/90 text-[0.6em] sm:text-[0.7em] font-medium tracking-wider">
                        {section.subtitle}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                      {section.title}
                    </div>
                  )}
                </h1>

                <div
                  className={cn(
                    "text-muted-foreground/80 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl font-light",
                    section.align === "center" ? "max-w-full mx-auto text-center" : "max-w-full",
                  )}
                >
                  <p className="mb-3 sm:mb-4">{section.description}</p>
                </div>
              </>
            )}

            {section.features && (
              <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-10">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={feature.title}
                    className={cn(
                      "group p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                      "hover:border-primary/20 hover:-translate-y-1",
                    )}
                    style={{ animationDelay: `${featureIndex * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/60 mt-1.5 sm:mt-2 group-hover:bg-primary transition-colors flex-shrink-0" />
                      <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                        <h3 className="font-semibold text-card-foreground text-base sm:text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.actions && (
              <div
                className={cn(
                  "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4",
                  section.align === "center" && "justify-center",
                  section.align === "right" && "justify-end",
                  (!section.align || section.align === "left") && "justify-start",
                )}
              >
                {section.actions.map((action, actionIndex) => (
                  <button
                    key={action.label}
                    onClick={action.onClick}
                    className={cn(
                      "group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base",
                      "hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-auto",
                      action.variant === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30"
                        : "border-2 border-border/60 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:border-primary/30 text-foreground",
                    )}
                    style={{ animationDelay: `${actionIndex * 0.1 + 0.2}s` }}
                  >
                    <span className="relative z-10">{action.label}</span>
                    {action.variant === "primary" && (
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function LandingPageContent() {
  const landingSections = [
    {
      id: "que-es",
      badge: "Que es",
      title: "¿Que es una landing page y cuando realmente la necesitas?",
      description:
        "Es una pagina disenada para un solo objetivo: convertir visitas en contactos, clientes o acciones concretas",
      align: "left" as const,
      custom: (
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <LandingHero
            title="¿Que es una landing page y cuando realmente la necesitas?"
            subtitle="Es una pagina disenada para un solo objetivo: convertir visitas en contactos, clientes o acciones concretas."
          />
        </div>
      ),
    },
    {
      id: "problema",
      badge: "Problema",
      title: "Tu pagina actual no convierte",
      description: "Seccion reemplazada por texto reveal.",
      align: "center" as const,
      custom: (
        <section className="w-full">
          <div className="min-h-[40vh] flex w-full items-center justify-center">
            <div className="w-full">
              <p className="mx-auto w-full max-w-[22ch] px-6 text-center text-3xl leading-relaxed font-normal text-foreground text-balance sm:hidden fade-in-up">
                Una landing page tiene un solo objetivo
              </p>
              <TextRevealByWord
                text="Una landing page tiene un solo objetivo"
                className="w-full hidden sm:block"
                textClassName="mx-auto w-full max-w-[34ch] lg:max-w-[42ch] px-0 text-center text-5xl md:text-6xl lg:text-7xl leading-relaxed font-normal text-balance"
              />
            </div>
          </div>
          <div className="min-h-[60vh] flex w-full items-center justify-center">
            <div className="w-full">
              <div className="mx-auto w-full max-w-[28ch] px-6 text-center text-xl leading-relaxed font-normal text-foreground sm:hidden fade-in-up">
                <p>Que la persona que entra haga una acción específica.</p>
                <p>Está pensada para convertir visitas en contactos,</p>
                <p>clientes o acciones concretas,</p>
                <p>concentrando toda la atención en un solo propósito.</p>
              </div>
              <TextRevealByWord
                text={
                  "Que la persona que entra haga una acción específica.\n\nEstá pensada para convertir visitas en contactos,\n\nclientes o acciones concretas,\n\nconcentrando toda la atención en un solo propósito."
                }
                className="w-full hidden sm:block"
                textClassName="mx-auto w-full max-w-[48ch] lg:max-w-[82rem] px-0 text-center text-3xl md:text-4xl lg:text-5xl leading-relaxed font-normal"
              />
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "tipos",
      badge: "Tipos",
      title: "No todas las landing page son iguales",
      description: "Seccion personalizada con cards.",
      align: "center" as const,
      custom: (
        <section className="w-full">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-12">
            <div className="space-y-6 text-center py-4 sm:py-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  No todas las landing page son iguales
                </span>
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
                Depende de lo que busques lograr. Algunas funcionan como tu carta de presentacion online, otras estan
                pensadas para una accion muy concreta, como vender un producto o promocionar una oferta.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <GlowCard
                glowColor="green"
                customSize
                className="h-full w-full min-h-[420px] rounded-3xl border-border/50 bg-white p-0 shadow-2xl shadow-primary/10"
              >
                <div className="relative z-10 flex h-full flex-col gap-5 p-7 sm:p-9">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
                      <span className="h-2 w-2 rounded-full bg-primary/30" />
                      Presencia online
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                      Tu negocio o marca en una sola pagina
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      Si tu objetivo es que las personas te conozcan rapido, este landing es ideal. Permite presentar
                      quien eres, que ofreces y como contactarte, todo en un vistazo.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      Perfecta para quienes quieren tener presencia online sin complicaciones, pero con claridad y
                      estilo.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard
                glowColor="blue"
                customSize
                className="h-full w-full min-h-[420px] rounded-3xl border-border/50 bg-white p-0 shadow-2xl shadow-primary/10"
              >
                <div className="relative z-10 flex h-full flex-col gap-5 p-7 sm:p-9">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-info/60">
                      <span className="h-2 w-2 rounded-full bg-info/40" />
                      Producto / campana
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                      Una landing page pensada para convertir
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      Si buscas vender un producto, lanzar una oferta o promocionar una campana puntual, esta es la
                      indicada. Toda la pagina esta disenada para una sola accion, sin distracciones: comprar,
                      registrarse o participar.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      Funciona como un escenario donde tu producto es el protagonista y la conversion es el objetivo.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "cuando",
      badge: "Cuando",
      title: "Cuando y cual landing necesito",
      description: "Seccion comparativa sin cards.",
      align: "center" as const,
      custom: (
        <section className="w-full">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:py-16">
            <div className="space-y-5 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-foreground">
                <span className="text-foreground">Cuándo </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  conviene una landing page
                </span>
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
                Cuando buscas una acción concreta: que te escriban, compren o respondan a una campaña puntual. Todo en
                la página está pensado para guiar a la persona hacia ese único objetivo, sin distracciones.
              </p>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Cuándo sí</h3>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Si tu objetivo es lograr una acción concreta, como que alguien se contacte, compre un producto o
                  participe en una promoción puntual, una landing page es perfecta. Toda la página está pensada para
                  guiar al usuario hacia ese único objetivo.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Cuándo no aplica</h3>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Si tu objetivo es presentar tu marca, contar tu historia o mejorar tu SEO, una landing page no es la
                  mejor opción. En ese caso, revisa nuestra sección de Sitio Web Corporativo, donde te mostramos cómo
                  crear una presencia online completa y efectiva.
                </p>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "proceso",
      badge: "Proceso",
      title: "Proceso",
      description: "Seccion de proceso.",
      align: "center" as const,
      custom: (
        <div className="w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <ProcessSection />
        </div>
      ),
    },
    {
      id: "practica",
      badge: "Practica",
      title: "Asi se ve en la practica",
      description: "Seccion de ejemplos.",
      align: "center" as const,
      custom: (
        <section className="w-full">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:py-16">
            <div className="space-y-4 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">Casos reales</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                Asi se ve en la practica
              </h2>
              <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
                Dos ejemplos de landing pages que cumplen un objetivo concreto: captar clientes o promover un producto
                de manera clara y directa.
              </p>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  label: "PROYECTO",
                  title: "Tiny Van — Landing para campañas",
                  description:
                    "Landing para Google Ads orientada a captar interesados en camperizar vehículos",
                  image: {
                    src: "/tiny_van.webp",
                    alt: "Ejemplo de landing page",
                  },
                  href: "https://modulos.tinyvan.cl/",
                },
                {
                  label: "PROYECTO",
                  title: "StayLoco.cz — Página de producto",
                  description:
                    "Página creada para mostrar poleras personalizadas y convertir visitas en ventas de forma simple y directa.",
                  image: {
                    src: "/Stay_loco.cz.webp",
                    alt: "Proyecto StayLoco.cz",
                  },
                  href: "https://www.stayloco.cz/",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="relative h-full rounded-3xl border border-border/60 bg-white/70 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-primary/5 overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),rgba(59,130,246,0.12),transparent_60%)]" />
                  {item.image ? (
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted/30">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={1600}
                        height={900}
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] w-full rounded-2xl bg-muted/30 border border-border/40" />
                  )}
                  <div className="mt-6 space-y-3">
                    <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{item.description}</p>
                    <div>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-info hover:text-info/80 transition-colors"
                      >
                        <span className="underline decoration-2 underline-offset-4 decoration-info/30 hover:decoration-info/60">
                          Ver proyecto
                        </span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "cta-final",
      badge: "CTA",
      title: "Entonces... ¿avanzamos?",
      description: "CTA final.",
      align: "center" as const,
      custom: (
        <section className="w-full">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-24 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground">
              Entonces... ¿avanzamos?
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground">
              Hablemos por WhatsApp y veamos como hacer tu landing page realidad.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/420733796959"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                Escribeme por WhatsApp
              </a>
            </div>
          </div>
        </section>
      ),
    },
  ];

  return (
    <ScrollGlobe
      sections={landingSections}
      className="gradient-mesh"
    />
  );
}
