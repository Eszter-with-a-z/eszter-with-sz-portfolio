import { renderWithTextStyling } from "@/lib/functions"
import Image from "next/image"
{/* Icons: */}
import { ClipboardList, Sparkle, Sparkles, Users } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about-me" className="z-10 py-12 bg-background ">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold  text-center">About me</h2>
        {/**    Row 1     */}
        <div className="m-auto max-w-[1000px] flex flex-col justify-center sm:flex-row py-10 gap-8 text-muted-foreground items-center">
          {/* Column 1 */}
          <div className="flex justify-center sm:justify-start sm:items-center">
            <div className="relative rounded-full w-48 h-48 overflow-hidden justify-end">
              <Image
                src="/images/profile-image.jpg"
                alt="Eszter Kovács"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="text-2xl w-auto max-w-[500px]">
            <p className="font-sans font-bold mb-4">
              {renderWithTextStyling(
                `I am Eszter Kovács, an Interaction Designer with a focus on Human-Centered AI & UX.`,
                [{phrase: `Eszter Kovács`, serif: true}
                ]
              )}
              </p>
              <p className="font-sans font-bold mb-4">
              {renderWithTextStyling(
                `I design for my users to say 'I didn't know, but this is what I needed!' `,
                [
                  {phrase: `'I didn't know, but this is what I needed!'`, serif: true}
                ]
              )}        
              </p>
          </div>          
        </div>

        {/*        Row 2        */}        
        <div className="m-auto max-w-[1000px] grid my-12">
          <div id="about-me" className="space-y-8 grid md:grid-cols-3 gap-8 ">
            <div className="flex flex-col items-center">
              <ClipboardList className="w-8 h-8 mb-2 text-muted-foreground" />
              <h4 className="text-lg text-center font-sans not-italic font-semibold mb-2">
                Qualitative Research
              </h4>
              <p className=" text-muted-foreground text-justify leading-relaxed">
                I have been trained in advanced qualitative research during my UX Research & Business Design internship at Meet Service Design Ltd. In my work, I prioritize human-centered design research, data visualization and turning findings into actionable insights for developers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkle className="w-8 h-8 mb-2  text-muted-foreground"/>
              <h4 className="text-lg text-center font-sans not-italic font-semibold mb-2">
                Human-Centered AI
                </h4>
              <p className=" text-muted-foreground text-justify leading-relaxed">
                The most exciting topic of our era for me is how to make AI human-centered instead of making humans AI-centered. I initiated Human-Centered Design process with AI (as a tool) during my UX/UI internship at Factorise Technologies Aps. In my thesis, I led a Human-Centered Design process for AI (as a product), creating a conversational AI for creative entrepreneurs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 text-muted-foreground"/>
              <h4 className="text-lg text-center  font-sans not-italic font-semibold mb-2">
                Cross-disciplinary Collaborations
              </h4>
              <p className=" text-muted-foreground text-justify leading-relaxed">
                I have worked with clients and teams across disciplines from developers through architects to dentists through (1)my position as a mechatronic&design lab assistant  and (2)my (award-winning) side projects in fields of architecture and business strategy.
              </p>
            </div>
          </div>
        </div>

        {/*        Row 3        */}
        <div className="m-auto max-w-[1000px]  gap-8 text-2xl  mb-4">
            <p className="text-center leading-relaxed ">
              📚🤸🌎💬
            </p>
            <p className="text-center font-sans font-bold leading-relaxed text-muted-foreground">
              
              {renderWithTextStyling(
                "Beyond design, I am passionate about my analog camera, linguistics, calisthenics, sustainability, wombats, and getting to know people!",
                [
                  {phrase: "analog camera", serif: true},
                  {phrase: "linguistics", serif: true}, 
                  {phrase:"wombats", serif: true}]
              )}
            </p>        </div>
      </div>
    </section>
  )
}
