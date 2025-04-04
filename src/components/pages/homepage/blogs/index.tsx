import animationData from '@/assets/lottiefiles/blog.json'
import Button from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import Reveal from '@/components/ui/reveal'
import { configs } from '@/configs'
import BlogCard, { IBlog } from './BlogCard'

interface Props {
  blogs: IBlog[]
}

export default function Blogs({ blogs }: Props) {
  // const sortedBlogs = blogs?.sort((a, b) => b.published - a.published)
  const firstThreeBlogs = blogs?.slice(0, 3)

  return (
    <section className="py-10 md:py-16 lg:py-20 blogs">
      <Heading animationData={animationData}>Some of My Blogs</Heading>

      <div className="py-5 space-y-5">
        {firstThreeBlogs?.map((blog, index) => (
          <Reveal
            animateIn="fadeInUp"
            key={blog?.title}
            delay={index * 100}
            duration={1.5}
          >
            <BlogCard blog={blog} />
          </Reveal>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={configs.medium.link}
          target="_blank"
          className="mt-3 inline-block"
          rel="noreferrer"
        >
          <Button value="Read All Blogs" variant="primary" />
        </a>
      </div>
    </section>
  )
}
