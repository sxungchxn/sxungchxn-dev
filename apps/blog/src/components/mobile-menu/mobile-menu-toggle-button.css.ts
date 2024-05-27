import { style } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

export const button = style({
  outline: 'none',
  border: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  position: 'absolute',
  top: '24px',
  right: '32px',
  borderRadius: vars.radius.circle,
  background: 'transparent',
  width: '22px',
  height: '22px',
  pointerEvents: 'auto',
})
