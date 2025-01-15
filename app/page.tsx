import Intro from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ThemeSwitch from "@/components/theme-switch"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro/>
        <SectionDivider/>
        <About/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <Skills/>
        <SectionDivider/>
        <Contact/>
        <ThemeSwitch/>
    </main>
  )
}
