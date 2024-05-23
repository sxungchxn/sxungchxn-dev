import type { Tokens } from '@/styles/tokens'

export type Mode = 'light' | 'dark'

type BaseColors = Tokens['colors']['base']

type ThemeColors = BaseColors & Tokens['colors']['light']

interface ThemeMode {
  colors: Tokens['colors']['light']
}

export interface Theme {
  borderStyles: Tokens['borderStyles']
  borderWidths: Tokens['borderWidths']
  colors: ThemeColors
  fonts: Tokens['fonts']
  fontSizes: Tokens['fontSizes']
  fontWeights: Tokens['fontWeights']
  mode: ThemeMode
  radius: Tokens['radius']
  space: Tokens['space']
  lineHeights: Tokens['lineHeights']
  letterSpacings: Tokens['letterSpacings']
  opacity: Tokens['opacity']
  zIndex: Tokens['zIndex']
}
