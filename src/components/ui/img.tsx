import { cn } from '@/utils/cn'
import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData
  alt: string
  width?: number
  height?: number
  sizes?: string
  className?: string
}

export function Img({
  src,
  alt,
  width = 500,
  height = 500,
  sizes = '40vw',
  className,
  ...rest
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      className={cn('w-full h-auto block', className)}
      placeholder="blur"
      loading="lazy"
      {...rest}
    />
  )
}
