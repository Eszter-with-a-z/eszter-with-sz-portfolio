import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectNavigationProps {
  currentId: number
}

export default function ProjectNavigation({ currentId }: ProjectNavigationProps) {
  const prevId = currentId === 1 ? 3 : currentId - 1
  const nextId = currentId === 3 ? 1 : currentId + 1

  return (
 
    <section className="py-12 bg-background border-t"
    style={{
        "--next-color": `var(--project-${nextId})`,
        "--prev-color": `var(--project-${prevId})`
      } as React.CSSProperties}>
      <div className="container text-white/90  mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href={`/projects/${prevId}`}>
            <Button variant="outline" className="gap-2 hover:text-white bg-[color:var(--prev-color)]">
              <ChevronLeft className="w-4 h-4" />
              Previous Project
            </Button>
          </Link>
          <Link href={`/projects/${nextId}`}>
            <Button variant="outline" className="gap-2 hover:text-white bg-[color:var(--next-color)] ">
              Next project
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
 
  )
}
