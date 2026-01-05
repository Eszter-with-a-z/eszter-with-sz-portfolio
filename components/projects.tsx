import ProjectCard from "./project-card"
import ProjectTile from "./project-tile"
import { projectGallery } from "@/lib/data-other-projects"
import { caseStudies } from "@/lib/data-projects"



export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>

        {/* Case Studies */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-8">Case studies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(caseStudies).map((project) => (
              <ProjectCard 
              key={project.id} 
              project={{
               ...project,
               image: project.images[0],
                }} />
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Project Gallery</h3>
            <p className="text-muted-foreground">Hover/tap for more!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectGallery.map((project, index) => (
              <ProjectTile key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
