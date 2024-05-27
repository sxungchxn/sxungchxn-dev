import { style } from '@vanilla-extract/css'
import { mediaQuery } from '@sxungchxn/dev-ui'

export const logoText = style({
  '@media': {
    [mediaQuery.belowPc]: {
      display: 'none',
    },
  },
})
