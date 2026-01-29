"use client"

import { Card } from "@/components/ui/card"
import { Search, Code2, Rocket, LifeBuoy } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Conversamos para entender tu negocio, objetivos y necesidades específicas. Sin tecnicismos, directo al punto.",
    color: "from-primary to-accent",
    iconColor: "text-primary",
    step: "01",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description:
      "Construimos tu sitio con tecnología moderna y te mantenemos informado del progreso. Podrás ver avances en tiempo real.",
    color: "from-accent to-primary",
    iconColor: "text-accent",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Publicamos tu sitio y te enseñamos a gestionarlo para que quede operativo desde el primer día.",
    color: "from-primary via-accent to-primary",
    iconColor: "text-primary",
    step: "03",
  },
  {
    icon: LifeBuoy,
    title: "Soporte",
    description:
      "Seguimos disponibles para resolver dudas, ajustes o mejoras puntuales cuando lo necesites.",
    color: "from-accent to-primary",
    iconColor: "text-accent",
    step: "04",
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="proceso" className="py-16 sm:py-20 lg:py-24 px-8 sm:px-6 relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="hidden sm:block absolute top-10 left-20 w-56 h-56 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-balance px-4">
            Un proceso{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              simple y claro
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-[1.05rem] lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Cuatro pasos para llevar tu negocio al mundo digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connecting line - show only on extra large screens */}
          <div className="hidden xl:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative w-full max-w-[420px] mx-auto md:max-w-none"
            >
              <Card className="relative h-full p-6 sm:p-8 glass hover:shadow-2xl transition-all duration-500 border-border/60 overflow-hidden group border-2 border-emerald-300 sm:border sm:border-border/50 text-left">
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-7xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>

                <div className="relative space-y-5 sm:space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-card rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <step.icon
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${step.iconColor}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-xs sm:text-sm font-mono text-muted-foreground">{step.step}</span>
                      <h3 className="text-xl sm:text-2xl md:text-[1.35rem] lg:text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-[0.95rem] lg:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
