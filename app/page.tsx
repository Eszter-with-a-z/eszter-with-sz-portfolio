import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import AboutMe from "@/components/about-me"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <AboutMe />
      <Footer />
    </div>
  )
}
