import { borderStyles, borderWidths, radius } from './border'
import { space } from './space'
import { colors } from './color'
import { opacity } from './opacity'
import { zIndex } from './z-index'
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './typography'

/**
 * 아래 tokens 값에 속성이 추가되었다면 "styles/types"에도 타입 추가해야됨
 */
export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radius,
  space,
  zIndex,
}

export type Tokens = typeof tokens
