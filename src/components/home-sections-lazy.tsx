"use client"

import dynamic from "next/dynamic"

const HomeSections = dynamic(
  () => import("@/components/home-sections").then((mod) => mod.HomeSections),
  {
  ssr: false,
  loading: () => <div className="min-h-[40vh]" aria-hidden="true" />,
  }
)

export default function HomeSectionsLazy() {
  return <HomeSections />
}
