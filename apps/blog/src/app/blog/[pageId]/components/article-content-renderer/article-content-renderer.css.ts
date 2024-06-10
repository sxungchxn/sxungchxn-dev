import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  marginTop: '80px',
  marginBottom: vars.space['64px'],
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space.none} ${vars.space['24px']}`,
    },
  },
})
