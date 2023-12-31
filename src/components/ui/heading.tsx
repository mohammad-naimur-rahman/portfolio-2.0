'use client'

import { cn } from '@/utils/cn'
import { Player } from '@lottiefiles/react-lottie-player'
import { ReactNode, Suspense } from 'react'
import Typography from './typography'

interface Props {
  children: ReactNode
  animationData: string | object
  className?: string
}

export default function Heading({ children, animationData, className }: Props) {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <Typography variant="h1" className="font-bold">
        {children}
      </Typography>
      <Suspense
        fallback={
          <div className="w-20 h-20 sm:w-32 sm:h-32 bg-slate-400 dark:bg-slate-700 animate-pulse bg-opacity-30 dark:bg-opacity-30" />
        }
      >
        <Player
          src={animationData}
          autoplay
          loop
          speed={1}
          className="w-20 h-20 sm:w-32 sm:h-32"
        />
      </Suspense>
    </div>
  )
}
