import { style } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  border: `1px solid ${vars.colors.textSecondary} !important`,
})

export const th = style({
  borderCollapse: 'collapse',
  border: `1px solid ${vars.colors.textSecondary} !important`,
  padding: `${vars.space['16px']} !important`,
})

export const td = style({
  borderCollapse: 'collapse',
  border: `1px solid ${vars.colors.textSecondary} !important`,
  padding: `${vars.space['16px']} !important`,
})
