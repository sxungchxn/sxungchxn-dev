import { style } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

export const divider = style({
  marginTop: vars.space['8px'],
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: vars.colors.secondary,
})
