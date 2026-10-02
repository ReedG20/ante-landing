"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

// Marks itself shown the first time it scrolls into view. CSS in globals.css
// does the rest: [data-reveal] rises in, and [data-draw] strokes inside it
// draw themselves.
function Reveal({
  as: Tag = "div",
  delay = 0,
  rise = true,
  className,
  children,
  ...props
}: {
  as?: "div" | "section" | "li" | "span" | "figure"
  delay?: number
  rise?: boolean
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.setAttribute("data-shown", "")
        observer.disconnect()
      },
      { rootMargin: "0px 0px -12% 0px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal={rise ? "" : undefined}
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Reveal }
