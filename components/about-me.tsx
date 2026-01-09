export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">About me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">I am Eszter Kovács, an Interaction Designer based in Malmö, Sweden.</h3>
            <p className="leading-relaxed text-muted-foreground">
              📚🤸🌎💬
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am passionate about my analog camera, linguistics, calisthenics, sustainability, wombats, and getting to know people!
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
          <div id="about-me" className="space-y-8">
            <div>
              <h4 className="font-semibold mb-2"> 🔬 my design approach</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enhancing rather than replacing meaningful human interactions with technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🥅 my goal</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To find projects that challenge me to learn new skills.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🌠 my philosophy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You improve when you help others improve,
                and you help others improve by improving yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
