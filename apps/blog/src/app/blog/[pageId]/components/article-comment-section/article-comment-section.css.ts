import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  width: '100%',
  '@media': {
    [mediaQuery.pc]: {
      marginBottom: '120px',
    },
    [mediaQuery.belowPc]: {
      marginBottom: '80px',
      padding: `${vars.space.none} ${vars.space['24px']}`,
    },
  },
})
