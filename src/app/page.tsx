/* eslint-disable @typescript-eslint/no-non-null-assertion */
import About from '@/components/pages/homepage/about'
import Blogs from '@/components/pages/homepage/blogs'
import Contact from '@/components/pages/homepage/contact'
import Experience from '@/components/pages/homepage/experience'
import Footer from '@/components/pages/homepage/footer'
import Header from '@/components/pages/homepage/header'
import Projects from '@/components/pages/homepage/projects'
import Skills from '@/components/pages/homepage/skills'
import { configs } from '@/configs'
import type { Metadata } from 'next'

async function getData() {
  const res = await fetch(configs.medium.api!, { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const metadata: Metadata = {
  title: 'Naimur Rahman | Portfolio',
  description: 'Full Stack Web Developer',
}

export default async function Home() {
  const blogs = await getData()
  return (
    <main>
      <Header />
      <section className="about">
        <About />
        <Skills />
        <Experience />
      </section>
      <Projects />
      <Blogs blogs={blogs} />
      <Contact />
      <Footer />
    </main>
  )
}
