"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import GalleryModal from "@/components/galleryModal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { InlineTextStyle, renderWithTextStyling } from "@/lib/functions"

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

export interface ProcessContentItem {
  type: "text" | "image"
  text?: string
  url?: string
  caption?: string
  styles?: InlineTextStyle[]
}

export interface ProcessStep {
  title: string
  subtitle: string
  content: ProcessContentItem[]
}

interface ProjectProcessProps {
  id: number
  process: ProcessStep[]
}

/* ------------------------------------------------------------------ */
/* Progress Bar */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Progress Bar (linear) */
/* ------------------------------------------------------------------ */

function ProcessProgressBar({
  progress,
}: {
  progress: number // 0 to 1
}) {
  return (
    <div className="sticky top-32 h-[60vh] -ml-4 flex justify-center">
      <div className="relative h-full w-[2px] bg-muted">
        {/* Smooth filled line */}
        <div
          className="absolute top-0 left-0 w-full bg-[color:var(--project-color)] transition-[height] duration-300 ease-out"
          style={{
            height: `${Math.min(Math.max(progress * 100, 0), 100)}%`,
          }}
        />
      </div>
    </div>
  )
}



/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

export default function ProjectProcess({ process, id }: ProjectProcessProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string
    alt?: string
  } | null>(null)

  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  /* ---------------------------------------------------------------- */
  /* Scroll tracking */
  /* ---------------------------------------------------------------- */
  const [progress, setProgress] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    if (!stepRefs.current.length) return

    const first = stepRefs.current[0]?.getBoundingClientRect()
    const last = stepRefs.current[stepRefs.current.length - 1]?.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (!first || !last) return

    const totalHeight = last.bottom - first.top
    const scrolled = windowHeight - first.top
    const p = scrolled / totalHeight

    setProgress(Math.min(Math.max(p, 0), 1)) // clamp between 0 and 1
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll() // initialize

  return () => window.removeEventListener("scroll", handleScroll)
}, [])


  /* ---------------------------------------------------------------- */
  /* Render */
  /* ---------------------------------------------------------------- */

  return (
    <section
      className="py-24 bg-background mx-auto max-w-[1200px]"
      style={
        {
          "--project-color": `var(--project-${id})`,
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">The process</h2>

        {/* Header row */}
        <div className="flex content-center w-full pr-4 my-6">
          <div className="flex px-6 w-full flex-col border rounded-lg py-3 md:flex-row md:items-center md:gap-6 font-sans">
            <span className="font-bold text-xl w-[50%] whitespace-pre-line md:text-end">
              step
            </span>
            <span className="text-sm font-semibold text-muted-foreground w-full">
              main outcome
            </span>
          </div>
        </div>

        {/* Layout */}
        <div className="relative flex gap-2">
          {/* Progress bar */}
          <ProcessProgressBar
            progress={progress}
          />

          {/* Accordion */}
          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              onValueChange={(value) => {
                if (!value) return
                const index = Number(value.split("-")[1])
                stepRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }}
            >
              {process.map((step, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  ref={(el) => {stepRefs.current[index] = el}}
                  className="rounded-lg"
                >
                  {/* Desktop trigger */}
                  <AccordionTrigger
                    className="
                      hidden md:flex px-6 border hover:no-underline
                      hover:bg-[color:var(--project-color)] hover:text-white
                      [&[data-state=open]]:bg-[color:var(--project-color)]
                      [&[data-state=open]]:text-white
                      [&[data-state=open]>svg]:stroke-white
                    "
                  >
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex gap-6 items-center font-sans">
                        <span className="font-bold text-xl w-[50%] text-end whitespace-pre-line">
                          {step.title}
                        </span>
                        <span className="text-sm w-full">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  {/* Mobile trigger */}
                  <AccordionTrigger
                    className="
                      md:hidden flex px-6 border hover:no-underline
                      hover:bg-[color:var(--project-color)] hover:text-white
                      [&[data-state=open]]:bg-[color:var(--project-color)]
                      [&[data-state=open]]:text-white
                      [&[data-state=open]>svg]:stroke-white
                    "
                  >
                    <div className="flex flex-col gap-1 text-left font-sans">
                      <span className="font-bold text-xl whitespace-pre-line">
                        {step.title}
                      </span>
                      <span className="text-sm">
                        {step.subtitle}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* Content */}
                  <AccordionContent className="px-2 sm:px-6 pb-6">
                    <div className="flex flex-wrap gap-6 mt-4 items-stretch">
                      {step.content.map((item, itemIndex) =>
                        item.type === "text" ? (
                          <div
                            key={itemIndex}
                            className="mx-auto whitespace-pre-line text-muted-foreground leading-relaxed flex-1 min-w-[250px] max-w-[500px]"
                          >
                            {renderWithTextStyling(
                              item.text,
                              item.styles
                            )}
                          </div>
                        ) : (
                          <div
                            key={itemIndex}
                            className="flex-1 cursor-zoom-in flex flex-col items-center"
                            onClick={() =>
                              setActiveImage({
                                src: item.url!,
                                alt: `Step ${index + 1} image ${
                                  itemIndex + 1
                                }`,
                              })
                            }
                          >
                            <div className="min-w-[300px] max-h-[400px] rounded-lg overflow-hidden w-full max-w-[80vh] mx-auto">
                              <Image
                                src={item.url || ""}
                                alt={`Step ${index + 1} image ${
                                  itemIndex + 1
                                }`}
                                width={1600}
                                height={900}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>

                            {item.caption && (
                              <p className="text-sm text-center text-muted-foreground mt-2 italic whitespace-pre-line">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Image modal */}
      {activeImage && (
        <GalleryModal
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  )
}
