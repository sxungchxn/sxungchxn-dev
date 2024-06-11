'use client'

import Lottie from 'react-lottie-player'
import WipLottie from '../../../public/wip.json'

export interface InProgressProps {
  width?: number
  height?: number
}

export const InProgress = ({ width = 180, height = 180 }: InProgressProps) => {
  return <Lottie loop animationData={WipLottie} play style={{ width: width, height: height }} />
}
