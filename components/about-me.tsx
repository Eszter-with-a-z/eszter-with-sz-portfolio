export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">About me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Creating meaningful interactions</h3>
            <p className="leading-relaxed text-muted-foreground">
              I'm passionate about designing digital experiences that make a real difference in people's lives. With a
              background in both design and human psychology, I bring a unique perspective to every project.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p className="leading-relaxed text-muted-foreground">
              My approach is rooted in empathy and research. I believe that great design starts with understanding the
              people who will use it. Through careful observation, conversation, and iteration, I craft solutions that
              feel intuitive and natural.
            </p>
            <p className="leading-relaxed text-muted-foreground mt-4">
              When I'm not designing, you'll find me exploring new places, trying out the latest design tools, or
              contributing to the design community through workshops and mentorship.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold mb-2">Education</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Master's in Interaction Design from Umeå Institute of Design, Sweden. Bachelor's in Digital Media from
                Budapest University of Technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experience</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                8+ years working with startups and established companies across Europe, specializing in mobile and web
                applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Skills</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                User research, prototyping, usability testing, design systems, accessibility, Figma, Adobe Creative
                Suite, HTML/CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
