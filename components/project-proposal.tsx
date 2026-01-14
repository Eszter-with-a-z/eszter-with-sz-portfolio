import { renderWithTextStyling } from "@/lib/functions"
import Image from "next/image"

interface ProjectProposalProps {
  id: number
  proposal: {
    text: string[]
    styles?: any
    videoUrl: string
    videoCaption: string
  }
}

export default function ProjectProposal({ id, proposal }: ProjectProposalProps) {
  return (
    <div  style={{
        "--project-color": `var(--project-${id})`,
      } as React.CSSProperties}>
    <section className="z-10 py-24 bg-[color:var(--project-color)]"
>
      <div className="text-white container mx-auto px-6 max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12">Design proposal</h2>

        <div className="grid md:grid-cols-3 md:max-w-full sm:max-w-[500px] mx-auto gap-4 mb-16">
          {proposal.text.map((paragraph, index) => (
            // Contidional map for odd cols
            
            <p key={index} className=" leading-relaxed whitespace-pre-line">
              {renderWithTextStyling(paragraph, proposal.styles?.[index])}
            </p>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={proposal.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
          </div>
          <p className="text-sm text-white/80 text-center mt-4 italic">{proposal.videoCaption}</p>
        </div>
      </div>
    </section>
    </div>
  )
}
