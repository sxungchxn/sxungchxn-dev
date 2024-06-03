import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const button = style({
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  zIndex: vars.zIndex.above,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  display: 'flex',
  '@media': {
    [mediaQuery.pc]: {
      display: 'none',
    },
  },
})
