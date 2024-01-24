export const breakpoints = {
  lg: 1024,
  md: 768,
} as const

export type Breakpoint = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
