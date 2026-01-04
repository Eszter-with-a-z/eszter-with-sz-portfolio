import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    text: "Working with Eszter was an absolute pleasure. Her attention to detail and understanding of user needs transformed our product completely. The designs were not only beautiful but also highly functional.",
    name: "Maria Johnson",
    title: "Product Manager at TechCorp",
  },
  {
    text: "Eszter's ability to bridge the gap between design and development is remarkable. She created intuitive interfaces that our users love, and the development team found easy to implement.",
    name: "Lars Andersson",
    title: "CTO at StartupHub",
  },
  {
    text: "The research-driven approach Eszter brought to our project was exactly what we needed. She identified pain points we hadn't even considered and designed elegant solutions for each one.",
    name: "Sofia Chen",
    title: "UX Lead at DesignStudio",
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
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
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
