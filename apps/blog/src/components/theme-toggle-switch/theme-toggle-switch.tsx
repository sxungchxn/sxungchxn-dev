'use client'

import { ThemeSwitch } from '@sxungchxn/dev-ui'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeToggleSwitch = () => {
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

  return <ThemeSwitch mode={resolvedTheme} onToggleTheme={handleToggleTheme} />
}
