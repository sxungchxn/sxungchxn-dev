import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  width: '100%',
  gap: vars.space['16px'],
  marginBottom: vars.space['64px'],
  padding: `${vars.space.none} ${vars.space['24px']}`,
  '@media': {
    [mediaQuery.aboveMobile]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    [mediaQuery.mobile]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})
