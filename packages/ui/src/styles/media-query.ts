import { breakpoints } from '@/styles/tokens/breakpoints'

export const mediaQuery = {
  mobile: `(max-width: ${breakpoints.md}px)`,
  aboveMobile: `(min-width: ${breakpoints.md}px)`,
  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
  belowPc: `(max-width: ${breakpoints.lg}px)`,
  pc: `(min-width: ${breakpoints.lg}px)`,
} as const
