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
          {proposal.text.map((paragraph, index) => 
           {
            if (index ==0){
              return(            
                <p key={index} className=" leading-relaxed whitespace-pre-line font-bold text-2xl">
                  {renderWithTextStyling(paragraph, proposal.styles?.[index])}
                </p>)
            }
            return(            
            <p key={index} className=" leading-relaxed whitespace-pre-line">
              {renderWithTextStyling(paragraph, proposal.styles?.[index])}
            </p>)
           }
            

          )}
        </div>

        <div className="flex mx-auto gap-4 md:flex-row flex-col justify-end">
          <div className="rounded-lg shadow-xl">
            <video
              className="max-h-[80vh] min-w-[50vw] mx-auto rounded-lg"
              controls
              playsInline
              preload="metadata"
            >
                <source src={proposal.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
          <p className="text-sm text-white/80  mt-4 italic">{proposal.videoCaption}</p>
        </div>
      </div>
    </section>
    </div>
  )
}
