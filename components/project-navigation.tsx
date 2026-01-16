import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectNavigationProps {
  currentId: number
  currentTitle: string
}

export default function ProjectNavigation({ currentId, currentTitle }: ProjectNavigationProps) {
  const prevId = currentId === 1 ? 3 : currentId - 1
  const nextId = currentId === 3 ? 1 : currentId + 1
  const titles = ["(Em)powered by AI", "Reader's Lamp","Reed-E"]
  // id-s in projects are 1-3, while titles is [0-2]
  const prevTitle = currentId === 1 ? titles[2] : titles[currentId - 2]
  const nextTitle = currentId === 3 ? titles[0] : titles[currentId]

  return (
 
    <section className="py-8 bg-background border-t"
    style={{
        "--next-color": `var(--project-${nextId})`,
        "--prev-color": `var(--project-${prevId})`
      } as React.CSSProperties}>
      <div className="container text-white/90  mx-auto px-6">
        <div className="flex justify-between flex-col sm:flex-row gap-6 items-center">
          <Link href={`/projects/${prevId}`} >
            <Button variant="outline" className="gap-2 hover:text-white bg-[color:var(--prev-color)] hover:bg-[color:var(--prev-color)]/80">
              <ChevronLeft className="w-4 h-4" />
              <span>Previous project: {prevTitle}</span>
            </Button>
          </Link>
          <Link href={`/projects/${nextId}`} >
            <Button variant="outline" className="gap-2 hover:text-white bg-[color:var(--next-color)] hover:bg-[color:var(--next-color)]/80">
              Next project: {nextTitle}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
 
  )
}
