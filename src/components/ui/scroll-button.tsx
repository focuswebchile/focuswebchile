"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollButtonProps = {
  targetId: string
  className?: string
  children: ReactNode
}

export function ScrollButton({ targetId, className, children }: ScrollButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.search)
  }

  return (
    <button type="button" onClick={handleClick} className={cn(className)}>
      {children}
    </button>
  )
}
