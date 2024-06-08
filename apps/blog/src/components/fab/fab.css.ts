import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const button = style({
  position: 'fixed',
  bottom: vars.space['32px'],
  right: vars.space['32px'],
  zIndex: vars.zIndex.above,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  display: 'flex',
  '@media': {
    [mediaQuery.pc]: {
      display: 'none',
    },
  },
})
