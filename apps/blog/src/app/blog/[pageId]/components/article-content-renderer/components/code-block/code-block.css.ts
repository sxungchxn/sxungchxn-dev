import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

export const code = style({})

// code block
globalStyle(`pre ${code}`, {
  padding: vars.space['16px'],
  borderRadius: vars.space['8px'],
  lineHeight: vars.lineHeights['1.5'],
})

// inline code block
globalStyle(`:not(pre) > ${code}`, {
  borderRadius: vars.radius['2px'],
  padding: `${vars.space['2px']} ${vars.space['4px']}`,
  margin: vars.space['2px'],
  backgroundColor: `${vars.colors.secondary}`,
  color: `${vars.colors.textSecondary}`,
  fontSize: '16px',
})
