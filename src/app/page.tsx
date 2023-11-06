import About from '@/components/pages/homepage/about'
import Blogs from '@/components/pages/homepage/blogs'
import Experience from '@/components/pages/homepage/experience'
import Header from '@/components/pages/homepage/header'
import Projects from '@/components/pages/homepage/projects'
import Skills from '@/components/pages/homepage/skills'

async function getData() {
  const res = await fetch(
    `https://v1.nocodeapi.com/naimurrahmandev/medium/fYpIXvmCCwRbFSLi`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const blogs = await getData()
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blogs blogs={blogs} />
    </main>
  )
}
