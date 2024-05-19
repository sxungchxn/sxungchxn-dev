'use client'

import type { PropsWithChildren } from 'react'
import { domMax, LazyMotion } from 'framer-motion'

export const AnimationProvider = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>
}
