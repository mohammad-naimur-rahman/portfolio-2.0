import animationData from '@/assets/lottiefiles/blog.json'
import Button from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { mediumLink } from '@/configs'
import BlogCard from './BlogCard'

export interface IBlog {
  title: string
  link: string
  category: string[]
  published: number
  content: string
}

interface Props {
  blogs: IBlog[]
}

export default function Blogs({ blogs }: Props) {
  const sortedBlogs = blogs?.sort((a, b) => b.published - a.published)
  const firstThreeBlogs = sortedBlogs?.slice(0, 3)

  return (
    <section className="py-20" id="blog">
      <Heading animationData={animationData}>Some of my blogs</Heading>

      <div className="py-5 space-y-5">
        {firstThreeBlogs.map(blog => (
          <BlogCard key={blog?.title} blog={blog} />
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={mediumLink}
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
