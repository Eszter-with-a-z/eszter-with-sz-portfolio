import { Card, CardContent } from "@/components/ui/card"
import { renderWithTextStyling } from "@/lib/functions"
import { testimonials } from "@/lib/data/testimonials"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="sticky top-24  text-4xl font-bold mb-16 text-center text-white">Testimonials</h2>
        <div className="relative flex flex-col items-center gap-24 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="sticky top-36 max-w-[400px] bg-background transition-shadow">
              <CardContent className="p-6 pt-0">
                <p className="mb-6 font-semibold text-foreground/50">{testimonial.id}/{testimonials.length}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed ">
                  {renderWithTextStyling(testimonial.text, testimonial.styles)}</p>
                <div className="border-t pt-4 w-full flex flex-col items-end pr-8">
                  <p className="font-semibold font-serif italic text-lg text-right">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground text-right max-w-[70%]">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
