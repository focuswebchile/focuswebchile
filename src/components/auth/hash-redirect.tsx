"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function HashRedirect() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    const hasAccessToken = window.location.hash.includes("access_token=")
    if (hasAccessToken && pathname !== "/admin") {
      window.location.href = `/admin${window.location.hash}`
    }
  }, [pathname])

  return null
}
