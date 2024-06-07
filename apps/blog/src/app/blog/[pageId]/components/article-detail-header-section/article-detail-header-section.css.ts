import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const section = style({
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space['none']} ${vars.space['24px']} !important`,
    },
  },
})
