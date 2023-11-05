/* eslint-disable security/detect-unsafe-regex */
import { Img } from './img'

type Props = {
  domain: string
}

export default function DomainIcon({ domain }: Props) {
  function extractDomain(url: string) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    )
    let parts
    if (match) {
      const fullDomain = match[1]
      parts = fullDomain.split('.')
      if (parts.length >= 2) {
        return parts[0]
      }
    }
    return parts?.[0]
  }

  return (
    <Img
      className="mr-2 w-4 h-4"
      src={`http://www.google.com/s2/favicons?domain=${domain}`}
      width={16}
      height={16}
      sizes="20px"
      activePlaceholder={false}
      alt={extractDomain(domain) || ''}
    />
  )
}
