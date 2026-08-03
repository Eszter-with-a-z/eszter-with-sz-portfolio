import { renderWithTextStyling } from "@/lib/functions"
{/* Icons: */}
import { ClipboardList, Sparkle, Sparkles, Users } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about-me" className="z-10 py-12 bg-background ">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold  text-center">About me</h2>
        <div className="m-auto max-w-[1000px] grid sm:grid-cols-2">
          {/* Column 1 */}
          <div className="text-end text-2xl my-12">
            <p className="font-sans font-bold mb-4">
              {renderWithTextStyling(
                "I am Eszter Kovács, an Interaction Designer based in Malmö, Sweden.",
                [{phrase: `Eszter Kovács`, serif: true}]
              )}
              </p>
            <p className="text-center leading-relaxed text-muted-foreground">
              📚🤸🌎💬
            </p>
            <p className=" font-sans font-bold leading-relaxed text-muted-foreground">
              
              {renderWithTextStyling(
                "I am passionate about my analog camera, linguistics, calisthenics, sustainability, wombats, and getting to know people!",
                [
                  {phrase: "analog camera", serif: true},
                  {phrase: "linguistics", serif: true}, 
                  {phrase:"wombats", serif: true}]
              )}
            </p>
          </div>

          {/* Column 2 */}
          {/*<div>
            <p className="leading-relaxed text-muted-foreground">
              No matter how extroverted I am there are 2 things I can never respond to properly:
                How are you?
              Introduce yourself!
            </p>
            <p className="leading-relaxed text-muted-foreground mt-4">
              The first is not relevant now. But instead of introducing myself, let me just say that instead of defining myself,
              I strive to define my goals and my principles. Consequently, I trust that  they will define me if my actions are aligned with them.
            </p>
            <p>So what are these goals and principles? 
              Here are some I find important:</p>
          </div>

           Column 3 */}
         
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
      </div>
    </section>
  )
}
