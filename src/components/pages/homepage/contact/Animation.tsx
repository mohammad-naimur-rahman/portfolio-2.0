'use client'

import animationData from '@/assets/lottiefiles/contact-us.json'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Animation() {
  return <Player src={animationData} loop autoplay />
}
