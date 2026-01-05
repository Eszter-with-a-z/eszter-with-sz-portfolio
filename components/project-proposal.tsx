import Image from "next/image"

interface ProjectProposalProps {
  proposal: {
    text: string[]
    videoUrl: string
    videoCaption: string
  }
}

export default function ProjectProposal({ proposal }: ProjectProposalProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Design proposal</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {proposal.text.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph}
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
          <p className="text-sm text-muted-foreground text-center mt-4 italic">{proposal.videoCaption}</p>
        </div>
      </div>
    </section>
  )
}
