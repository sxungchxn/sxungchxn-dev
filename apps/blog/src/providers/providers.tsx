import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimationProvider } from '@/providers/animation-provider/animation-provider'

export interface ProvidersProps extends PropsWithChildren {}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeProvider>
  )
}
