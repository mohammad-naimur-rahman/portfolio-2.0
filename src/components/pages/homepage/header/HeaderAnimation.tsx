'use client'

import animationData from '@/assets/lottiefiles/coding.json'
import { Player } from '@lottiefiles/react-lottie-player'

export default function HeaderAnimation() {
  return <Player src={animationData} autoplay loop speed={1} />
}
