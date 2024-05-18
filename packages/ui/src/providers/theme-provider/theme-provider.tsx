'use client'

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useIsomorphicEffect, useMediaQuery } from '@/hooks'
import { type Mode } from '@/types/theme'

export interface ThemeContextValue {
  mode: Mode
  setMode: (mode: Mode) => void
  toggle: () => void
}

export const THEME_ATTR_SELECTOR = 'data-theme'
export const THEME_LOCALSTORAGE_KEY = 'theme-mode'
export const ThemeContext = createContext<ThemeContextValue | null>(null)

export interface ThemeProviderProps {
  children: ReactNode
}

const getInitTheme: () => Mode = () => {
  if (typeof window === 'undefined') return 'dark'
  const systemPrefers: Mode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const userTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY)
  return (userTheme as Mode) ?? systemPrefers
}

// TODO
// [] add support for server-side rendering
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setRawMode] = useState<Mode>(() => getInitTheme())
  const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)')
  const firstRender = useRef(true)

  const setThemeAttrs = useCallback((mode: Mode) => {
    window?.localStorage.setItem(THEME_LOCALSTORAGE_KEY, mode)
    const $root = document?.querySelector(':root')
    $root?.setAttribute(THEME_ATTR_SELECTOR, mode)
  }, [])

  const setColorMode = useCallback(
    (mode: Mode) => {
      setThemeAttrs(mode)
      setRawMode(mode)
    },
    [setThemeAttrs],
  )

  const toggleMode = useCallback(() => {
    setThemeAttrs(mode === 'light' ? 'dark' : 'light')
    setColorMode(mode === 'light' ? 'dark' : 'light')
  }, [setThemeAttrs, setColorMode, mode])

  useIsomorphicEffect(() => {
    if (window === undefined) return
    if (firstRender.current) {
      const initTheme = getInitTheme()
      setColorMode(initTheme)
      firstRender.current = false
    } else {
      setColorMode(systemPrefers ? 'dark' : 'light')
    }
  }, [systemPrefers, setColorMode])

  const value = useMemo(
    () => ({
      mode,
      setMode: setColorMode,
      toggle: toggleMode,
    }),
    [mode, setColorMode, toggleMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
