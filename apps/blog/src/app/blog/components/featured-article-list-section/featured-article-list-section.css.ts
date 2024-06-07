import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const section = style({
  marginBottom: '100px',
  '@media': {
    [mediaQuery.tablet]: {
      padding: `0px ${vars.space['32px']}`,
    },
    [mediaQuery.mobile]: {
      padding: `0px ${vars.space['24px']}`,
    },
  },
})
