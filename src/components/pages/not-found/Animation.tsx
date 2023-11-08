'use client'

import animationData from '@/assets/lottiefiles/404.json'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Animation() {
  return <Player src={animationData} loop autoplay />
}
