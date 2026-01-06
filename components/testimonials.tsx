import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    text: "“[She] listens carefully to the different voices that might  appear in her work. She makes considered judgements, is a team player and communicates well.’",
    name: "Lizette",
    title: "my professor & client for my project “Indigenous Weather Station”",
  },
  {
    text: `In our time working together, I’ve seen 
    Eszter demonstrate a great ability to engage with 
    different complex design challenges. She approaches 
    problems with curiosity and  willingness to explore, 
    making her a valuable contributor to projects. In her 
    IOIO work with external research projects, she proved 
    herself to be independent and reliable asset conducting 
    workshops and driving user centric processes.`,
    name: "Johannes",
    title: "head of IOIO lab",
  },
  {
    text: `I have witnessed first-hand her exceptional growth a
    nd innate talents in this domain. Eszter is deeply reflective 
    and thoughtful designer who is committed  to continuous 
    learning.[...] It is rare to find a junior service designer
     who already exhibits skills characteristic of medior and, in 
     some areas, even senior-level professionals.`,
    name: "Laci",
    title: "CEO of Meet Prespectives Ltd.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
