"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { caseStudies } from "@/lib/data/projects"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
    setIsProjectsOpen(false)
  }

  return (
    
    <nav className="fixed top-4 m-auto w-full z-50 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg flex items-center justify-between px-2 py-2">
        <Link href="/" className="font-serif italic text-lg px-6 py-2 hover:bg-accent hover:text-white rounded-full transition-colors">
          Eszter with SZ
        </Link>
{/*Desktop view */}
        <div className="hidden lg:flex items-center flex-1 relative">
          <div
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <Link
              href="/#projects"
              className="cursor-pointer px-6 py-2 text-sm hover:bg-accent hover:text-white rounded-full transition-colors flex items-center gap-1"
            >
              Projects
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isProjectsOpen ? "rotate-180" : ""}`}
              />
              {/* </CHANGE> */}
            </Link>

            <div
              className={`absolute  top-full left-0 bg-white rounded-2xl shadow-xl min-w-[240px] border border-gray-100 overflow-hidden transition-all duration-300 ease-out origin-top ${
                isProjectsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
              }`}
            >
              <div className="py-2  ">
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Case Studies</p>
                  {Object.values(caseStudies).map((study) => (
                    <Link
                      key={study.id}
                      href={`/projects/${study.id}`}
                      className={`block px-3 py-2 text-sm hover:text-white rounded-lg transition-colors
                            ${study.id === 1 ? "hover:bg-project-1-hover" : ""}
                            ${study.id === 2 ? "hover:bg-project-2-hover" : ""}
                            ${study.id === 3 ? "hover:bg-project-3-hover" : ""}
                          `}
                    >
                      {study.title}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-100 mt-2"></div>
                <div className="px-4 py-2">
                  <Link
                    href="/#other-projects"
                    className="w-full block text-left px-3 py-2 text-sm hover:bg-accent hover:text-white rounded-lg transition-colors"
                  >
                    <span className="font-medium">Other Projects</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* </CHANGE> */}
          </div>

          <div className="flex-1"></div>
          <Link
            href="/#testimonials"
            className="px-6 py-2 text-sm hover:bg-accent hover:text-white rounded-full transition-colors"
          >
            Testimonials
          </Link>

          <Link
            href="/#about-me"
            className="px-6 py-2 text-sm hover:bg-accent hover:text-white rounded-full transition-colors"
          >
            About
          </Link>


          <Link
            href="#footer"
            className="px-6 py-2 text-sm hover:bg-accent hover:text-white rounded-full transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 mx-2 hover:bg-accent hover:text-white rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
{/*Mobile view*/}
      <div
        className={`lg:hidden max-w-2xl  mx-auto  mt-2 bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ease-out origin-top ${
          isOpen ? " opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          <div>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="w-full text-left py-3 px-4 hover:bg-accent hover:text-white rounded-xl transition-colors flex items-center justify-between"
            >
              Projects
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isProjectsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isProjectsOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 mt-2 space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase px-4 py-2">Case Studies</p>
                {Object.values(caseStudies).map((study) => (
                  <Link
                    key={study.id}
                    href={`/projects/${study.id}`}
                    className={`block px-3 py-2 text-sm hover:text-white rounded-lg transition-colors
                      ${study.id === 1 ? "hover:bg-project-1-hover" : ""}
                      ${study.id === 2 ? "hover:bg-project-2-hover" : ""}
                      ${study.id === 3 ? "hover:bg-project-3-hover" : ""}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {study.title}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-2"></div>
                <Link
                  href="/#other-projects"
                  className="text-left block py-2 px-4 text-sm hover:bg-accent hover:text-white rounded-lg transition-colors"
                >
                  <div className="font-medium">Other Projects</div>
                </Link>
              </div>
            </div>
            {/* </CHANGE> */}
          
          </div>
          <Link
            href="/#testimonials"
            className="text-left py-3 px-4 hover:bg-accent hover:text-white rounded-xl transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/#about-me"
            className="text-left py-3 px-4 hover:bg-accent hover:text-white rounded-xl transition-colors"
          >
            About
          </Link>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-left py-3 px-4 hover:bg-accent hover:text-white rounded-xl transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
      {/* </CHANGE> */}
    </nav>
  )
}
