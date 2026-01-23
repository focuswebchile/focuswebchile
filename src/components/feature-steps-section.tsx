"use client"

import { FeatureSteps } from "@/components/feature-steps"

const processFeatures = [
  {
    step: "Paso 1",
    title: "Ordenamos",
    content: "Aclaramos ideas, prioridades y objetivos antes de diseñar nada.",
    image: "/ordenamos.svg",
  },
  {
    step: "Paso 2",
    title: "Diseñamos",
    content: "Definimos estructura y diseño para que la web se entienda y funcione.",
    image: "/diseñamos.svg",
    imageScale: 1.12,
  },
  {
    step: "Paso 3",
    title: "Lanzamos",
    content: "Dejamos todo funcionando y listo para acompañar tu proyecto.",
    image: "/lanzamos.svg",
    imageScale: 1.12,
  },
]

export function FeatureStepsSection() {
  return <FeatureSteps features={processFeatures} />
}
