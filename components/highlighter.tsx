"use client"

import { useLayoutEffect, useRef } from "react"
import { annotate } from "rough-notation"

import { cn } from "@/lib/utils"

// A marker swiped behind a few words, drawn on the page by rough-notation.
// rough-notation only takes a fixed color and always sizes the stroke to the
// font's whole line box, so the parent can restyle `.rough-annotation path`
// (CSS beats the SVG attributes) to follow the theme or fit a display face.
//
// With `ink`, the letters turn that color exactly where the marker covers
// them. The words are filled through their background (background-clip:
// text): a solid layer in the text color, and on top of it a copy of the
// marker's strokes in the ink color, drawing on with the same timing.
function Highlighter({
  children,
  color = "currentColor",
  ink,
  delay = 400,
}: {
  children: React.ReactNode
  color?: string
  ink?: string
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
    const annotation = annotate(node, {
      type: "highlight",
      color,
      iterations: 2,
      padding: [0, 6],
      multiline: true,
      animate,
      animationDuration: 800,
    })
    let observer: MutationObserver | null = null
    const timer = window.setTimeout(
      () => {
        annotation.show()
        // The marker's SVG goes in just before the words.
        const svg = node.previousElementSibling
        if (!ink || !(svg instanceof SVGSVGElement)) return
        paintInk(node, svg, ink)
        // rough-notation redraws (without animating) on resize and font
        // loads; copy the new strokes each time.
        observer = new MutationObserver(() => paintInk(node, svg, ink))
        observer.observe(svg, { childList: true })
      },
      animate ? delay : 0
    )
    return () => {
      window.clearTimeout(timer)
      observer?.disconnect()
      node.style.backgroundImage = ""
      node.style.backgroundSize = ""
      annotation.remove()
    }
  }, [color, ink, delay])

  return (
    <span
      ref={ref}
      className={cn(
        ink &&
          "bg-[linear-gradient(currentColor,currentColor)] bg-clip-text bg-no-repeat [-webkit-text-fill-color:transparent]"
      )}
    >
      {children}
    </span>
  )
}

// Ease-out, as rough-notation draws its strokes.
const EASE_OUT = 'calcMode="spline" keyTimes="0;1" keySplines="0 0 0.58 1"'

// Copies the marker's strokes, in the ink color, into an SVG laid over the
// words' solid fill. Each stroke draws on with its own duration and delay,
// so the ink lands with the marker.
function paintInk(node: HTMLElement, svg: SVGSVGElement, ink: string) {
  const box = node.getBoundingClientRect()
  const origin = svg.getBoundingClientRect()
  const strokes = Array.from(svg.querySelectorAll("path"), (path) => {
    const width = window.getComputedStyle(path).strokeWidth
    const { animationDuration: duration, animationDelay: begin } = path.style
    if (!duration) {
      return `<path d="${path.getAttribute("d")}" stroke-width="${width}"/>`
    }
    const length = path.getTotalLength()
    return (
      `<path d="${path.getAttribute("d")}" stroke-width="${width}" stroke-dasharray="${length}" stroke-dashoffset="${length}">` +
      `<animate attributeName="stroke-dashoffset" from="${length}" to="0" begin="${begin || "0ms"}" dur="${duration}" fill="freeze" ${EASE_OUT}/>` +
      `</path>`
    )
  })
  const markup =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${box.width}" height="${box.height}">` +
    `<g transform="translate(${origin.left - box.left} ${origin.top - box.top})" fill="none" stroke="${ink}">` +
    strokes.join("") +
    `</g></svg>`
  node.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(markup)}"), linear-gradient(currentColor, currentColor)`
  node.style.backgroundSize = `${box.width}px ${box.height}px, 100% 100%`
}

export { Highlighter }
