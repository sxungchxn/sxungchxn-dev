'use client'

import { type Mode, ThemeSwitch, type ThemeSwitchProps } from '@sxungchxn/dev-ui'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export interface ThemeToggleSwitchProps extends Omit<ThemeSwitchProps, 'mode' | 'onToggleTheme'> {}

export const ThemeToggleSwitch = (props: ThemeToggleSwitchProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  // by blocking logic with useEffect, the logic below is not affected on server render
  if (!mounted) return null

  return <ThemeSwitch {...props} mode={resolvedTheme as Mode} onToggleTheme={handleToggleTheme} />
}
