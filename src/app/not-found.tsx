'use client'

import animationData from '@/assets/lottiefiles/404.json'
import Button from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Player } from '@lottiefiles/react-lottie-player'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BiSolidHome } from 'react-icons/bi'

export const metadata: Metadata = {
  title: 'Page not found!',
  description: 'The page you&apos;re looking for does not exist!',
}

export default function NotFoundPage() {
  return (
    <section className="min-h-[calc(100dvh_-_80px)] flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-8 italic">
        <Typography variant="h2">Page Not Found</Typography>
        <div className="max-w-lg h-auto">
          <Player src={animationData} loop autoplay />
        </div>

        <Link href="/">
          <Button
            icon={<BiSolidHome />}
            className="mt-8"
            value="Go Back Home"
          />
        </Link>
      </div>
    </section>
  )
}
