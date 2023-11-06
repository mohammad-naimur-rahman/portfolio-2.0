'use client'

import { cn } from '@/utils/cn'
import { useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const viewportHeight = window.innerHeight
    const toggleVisibility = () => {
      return window.scrollY > viewportHeight
        ? setIsVisible(true)
        : setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <button
      type="button"
      className={cn(
        'fixed bottom-5 w-14 h-14 right-5 rounded-full outline-none opacity-0 -z-20 bg-secondary flex items-center justify-center',
        {
          'opacity-100 z-30 animate-fade-up animate-once animate-duration-500':
            isVisible,
        }
      )}
      onClick={scrollToTop}
    >
      <BiChevronUp className="text-6xl text-white" />
    </button>
  )
}

export default ScrollToTop
