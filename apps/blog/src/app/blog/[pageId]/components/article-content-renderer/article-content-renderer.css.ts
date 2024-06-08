import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  marginTop: '80px',
  marginBottom: '120px',
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space.none} ${vars.space['24px']}`,
    },
  },
})
