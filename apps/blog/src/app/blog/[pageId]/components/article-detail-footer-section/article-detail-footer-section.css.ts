import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  width: '100%',
  gap: vars.space['20px'],
  marginBottom: '120px',
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space.none} ${vars.space['24px']}`,
    },
    [mediaQuery.aboveMobile]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [mediaQuery.mobile]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})
