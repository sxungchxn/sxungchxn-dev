'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider storageKey="sxungchxn-dev-theme-mode" enableSystem>
      {children}
    </NextThemeProvider>
  )
}
