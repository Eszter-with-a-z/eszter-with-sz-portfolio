"use client"

import { useState } from "react"
import GalleryModal from "@/components/galleryModal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Plus } from "lucide-react"

export interface ProcessContentItem {
  type: "text" | "image"
  text?: string
  url?: string
  caption?:string
}

export interface ProcessStep {
  title: string
  subtitle: string
  content: ProcessContentItem[]
}

interface ProjectProcessProps {
  process: ProcessStep[]
}

export default function ProjectProcess({ process }: ProjectProcessProps) {
  const [activeImage, setActiveImage] = useState<{
  src: string
  alt?: string
} | null>(null)

  return (
    <section className="py-24 bg-background mx-auto max-w-[1200px]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">The process</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {process.map((step, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline hidden md:flex">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex gap-6 items-center">
                    <span className="font-bold">{step.title}</span>
                    <span className="text-sm text-muted-foreground">{step.subtitle}</span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionTrigger className="px-6 hover:no-underline flex md:hidden">
                <div className="flex items-center justify-between w-full pr-4 gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-bold text-left">{step.title}</span>
                    <span className="text-sm text-muted-foreground">{step.subtitle}</span>
                  </div>
                  
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-6 mt-4 items-stretch">
                  {step.content.map((item, itemIndex) =>
                    item.type === "text" ? (
                      <div
                        key={itemIndex}
                        className="mx-auto min-w-[350px]  text-muted-foreground leading-relaxed flex-1 min-w-[250px] max-w-[500px] p-2"
                      >
                        {item.text}
                      </div>
                    ) : (
                      <div
                        key={itemIndex}
                        className="flex-1 cursor-zoom-in min-w-[250px] max-h-[400px] rounded-lg overflow-hidden"
                        onClick={() =>
                        setActiveImage({
                          src: item.url!,
                          alt: `Step ${index + 1} image ${itemIndex + 1}`,
                        })
                      }                      
                      >
                        <Image
                          src={item.url || ""}
                          alt={`Step ${index + 1} image ${itemIndex + 1}`}
                          width={1600}
                          height={900}
                          className="w-full h-full object-contain rounded-lg"
                        />
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
