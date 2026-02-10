"use client"

import dynamic from "next/dynamic"

const HomeSections = dynamic(
  () => import("@/components/home-sections").then((mod) => mod.HomeSections),
  {
  ssr: true,
  }
)

export default function HomeSectionsLazy() {
  return <HomeSections />
}
