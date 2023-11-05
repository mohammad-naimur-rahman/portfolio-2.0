import About from '@/components/pages/homepage/about'
import Experience from '@/components/pages/homepage/experience'
import Header from '@/components/pages/homepage/header'
import Projects from '@/components/pages/homepage/projects'
import Skills from '@/components/pages/homepage/skills'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}
