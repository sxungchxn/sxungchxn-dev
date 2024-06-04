import { style } from '@vanilla-extract/css'
import { mediaQuery } from '@sxungchxn/dev-ui'

export const container = style({
  boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.3)',
  '@media': {
    [mediaQuery.pc]: {
      marginTop: '160px !important',
    },
    [mediaQuery.belowPc]: {
      marginTop: '128px !important',
    },
  },
})
