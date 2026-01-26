import React from "react"

export default function Globe() {
  return (
    <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-[440px] lg:w-[440px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.45),transparent_60%)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--secondary)/0.45),transparent_60%)]" />
      <div className="absolute inset-10 rounded-full border border-border/40 bg-background/40 backdrop-blur-3xl" />
    </div>
  )
}
