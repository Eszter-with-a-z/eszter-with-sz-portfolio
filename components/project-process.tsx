"use client"

import { useState } from "react"
import GalleryModal from "@/components/galleryModal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { InlineTextStyle } from "@/lib/functions"
import { renderWithTextStyling } from "@/lib/functions"

export interface ProcessContentItem {
  type: "text" | "image"
  text?: string
  url?: string
  caption?:string
  styles?: InlineTextStyle[]
}

export interface ProcessStep {
  title: string
  subtitle: string
  content: ProcessContentItem[]
}

interface ProjectProcessProps {
  id:number
  process: ProcessStep[]
}

export default function ProjectProcess({ process, id }: ProjectProcessProps) {
  const [activeImage, setActiveImage] = useState<{
  src: string
  alt?: string
} | null>(null)

  return (
    <section 
    className="py-24 bg-background mx-auto max-w-[1200px]"
    style={{
        "--project-color": `var(--project-${id})`,
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">The process</h2>
        <div className=" flex content-center w-full pr-4 my-6">
          <div className="flex px-6 w-full flex-col border rounded-lg py-3 md:flex-row items-start md:items-center md:gap-6  items-center font-sans not-italic">
            <span className="font-bold text-xl font-sans w-[50%] whitespace-pre-line md:text-end">
              step
            </span>
            <span className="text-sm font-semibold text-muted-foreground w-full">
              main outcome
            </span>
          </div>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {process.map((step, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg">
              <AccordionTrigger className="
              px-6 hover:no-underline hidden md:flex border
              hover:bg-[color:var(--project-color)] hover:text-white 
              [&[data-state=open]]:bg-[color:var(--project-color)] [&[data-state=open]]:text-white 
              [&[data-state=open]>svg]:stroke-white">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex gap-6 items-center font-sans not-italic">
                    <span className="font-bold text-xl font-sans w-[50%] whitespace-pre-line text-end">{step.title}</span>
                    <span className="text-sm w-full">{step.subtitle}</span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionTrigger className="
              px-6 hover:no-underline flex 
              md:hidden border 
              hover:bg-[color:var(--project-color)] hover:text-white 
              [&[data-state=open]]:bg-[color:var(--project-color)] [&[data-state=open]]:text-white 
              [&[data-state=open]>svg]:stroke-white
              ">
                <div className="flex items-center justify-between w-full pr-4 gap-4 not-italic">
                  <div className="flex flex-col items-start gap-1 font-sans not-italic">
                    <span className="font-bold text-xl font-sans whitespace-pre-line ">{step.title}</span>
                    <span className="text-sm text-sans">{step.subtitle}</span>
                  </div>
                  
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-6 mt-4 items-stretch">
                  {step.content.map((item, itemIndex) =>
                    item.type === "text" ? (
                      <div
                        key={itemIndex}
                        className="mx-auto whitespace-pre-line text-muted-foreground leading-relaxed flex-1 min-w-[250px] max-w-[500px] p-2"
                      >
                        {renderWithTextStyling(item.text, item.styles) }
                      </div>
                    ) : (
                      <div
                        key={itemIndex}
                        className="flex-1 cursor-zoom-in flex justify-center flex-col"
                        onClick={() =>
                        setActiveImage({
                          src: item.url!,
                          alt: `Step ${index + 1} image ${itemIndex + 1}`,
                        })
                      }                      
                      >
                        <div className="
                        min-w-[300px] max-h-[400px] 
                        rounded-lg overflow-hidden
                        w-full  max-w-[80vh] mx-auto">

                        <Image
                          src={item.url || ""}
                          alt={`Step ${index + 1} image ${itemIndex + 1}`}
                          width={1600}
                          height={900}
                          className="w-full h-full  object-contain rounded-lg"
                        />
                        </div>
                          {/* Caption */}
                        {item.caption && (
                          <p className="text-sm  min-w-[250px] text-center text-muted-foreground mt-2 italic whitespace-pre-line">
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
