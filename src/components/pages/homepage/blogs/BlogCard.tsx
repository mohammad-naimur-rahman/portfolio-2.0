'use client'

import Button from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import Typography from '@/components/ui/typography'
import { formateDate } from '@/utils/formatDate'
import { parse } from 'node-html-parser'
import { BsCalendar2Day } from 'react-icons/bs'

interface IBlog {
  title: string
  link: string
  category: string[]
  published: number
  content: string
}

interface Props {
  blog: IBlog
}

function parseImageUrl(html: string): string | undefined {
  const doc = parse(html)
  const imgElement = doc.querySelector('figure img[alt]')
  return imgElement?.getAttribute('src')
}

export default function BlogCard({ blog }: Props) {
  const imageUrl = parseImageUrl(blog?.content)
  return (
    <div className="flex gap-5 bg-white dark:bg-secondary shadow-md rounded-xl p-5">
      <div className="overflow-hidden max-h-[200px] w-auto aspect-video object-cover">
        {imageUrl ? (
          <Img
            src={imageUrl}
            alt={blog?.title}
            activePlaceholder={false}
            sizes="450px"
            width={450}
            height={300}
            className="w-full h-full aspect-video object-cover hover:scale-110 transition-transform duration-700"
          />
        ) : null}
      </div>
      <div className="space-y-3">
        <Typography variant="h5">{blog?.title}</Typography>
        <Typography variant="body" className="flex items-center gap-2">
          <BsCalendar2Day /> {formateDate(blog?.published)}
        </Typography>
        <ul className="flex flex-wrap gap-2">
          {blog?.category?.map(category => (
            <li
              key={category}
              className="font-jost border px-3 py-1 rounded-full"
            >
              {category}
            </li>
          ))}
        </ul>
        <a
          href={blog?.link}
          target="_blank"
          className="mt-3 inline-block"
          rel="noreferrer"
        >
          <Button value="Read Blog" className="px-4 py-2" variant="secondary" />
        </a>
      </div>
    </div>
  )
}
