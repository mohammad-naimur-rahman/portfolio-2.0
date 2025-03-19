import youtubeImage from '@/assets/images/homepage/youtube.png'
import { Img } from '@/components/ui/img'

export default function Youtube() {
  return (
    <div className="flex flex-col items-center justify-center py-5 max-w-3xl mx-auto">
      <h3 className="text-3xl font-semibold text-balance text-center">
        Follow my YouTube Channel
      </h3>
      <p className="text-lg font-light text-balance text-center text-gray-500 mt-3">
        I post videos about coding, programming, and web development. Follow my
        YouTube Channel for coding contents regularly.
      </p>
      <a
        href="https://www.youtube.com/@codewithnaimur"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col text-center justify-center items-center gap-2 mt-6 shadow-lg p-3 rounded-lg hover:scale-105 transition-all duration-500"
      >
        <Img
          src={youtubeImage}
          alt="YouTube"
          width={120}
          height={120}
          className="w-12 h-12"
        />
        <p className="text-lg font-bold">Code with Naimur</p>
      </a>
    </div>
  )
}
