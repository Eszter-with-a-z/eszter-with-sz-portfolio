// hooks/use-is-desktop.ts
"use client"

import { useEffect, useState } from "react"

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches)
  }, [])

  return isDesktop
}
