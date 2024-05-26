'use client'

import type { PropsWithChildren } from 'react'
import { AnimationProvider as DevUIAnimationProvider } from '@sxungchxn/dev-ui'
import { domMax, LazyMotion } from 'framer-motion'

export const AnimationProvider = ({ children }: PropsWithChildren) => {
  return (
    <DevUIAnimationProvider>
      <LazyMotion features={domMax}>{children}</LazyMotion>
    </DevUIAnimationProvider>
  )
}
