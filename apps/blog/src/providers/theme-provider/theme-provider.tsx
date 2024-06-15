'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider
      enableSystem
      enableColorScheme
      attribute="data-theme"
      storageKey="sxungchxn-dev-theme-mode"
    >
      {children}
    </NextThemeProvider>
  )
}
