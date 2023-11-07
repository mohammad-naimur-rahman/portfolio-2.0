'use client'

import { ReactNode } from 'react'
import ScrollAnimation, { ScrollAnimationProps } from 'react-animate-on-scroll'

interface Props extends ScrollAnimationProps {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className, ...rest }: Props) {
  return (
    <ScrollAnimation {...rest} className={className}>
      {children}
    </ScrollAnimation>
  )
}
