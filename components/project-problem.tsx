import { renderWithTextStyling } from "@/lib/functions"

interface ProjectProblemProps {
  problem: {
    col1: string
    col2: string
    styles?: any
  }
}

export default function ProjectProblem({ problem }: ProjectProblemProps) {
  return (
    <section className="py-24 sticky top-0 -z-1">
      <div className="container mx-auto px-6  bg-background max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12">Problem</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-2xl leading-relaxed text-muted-foreground">
            <div className="text-2xl leading-relaxed bold">
              {renderWithTextStyling(problem.col1, problem.styles.col1)}
            </div>

            
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {problem.col2}
          </p>
        </div>
      </div>
    </section>
  )
}
