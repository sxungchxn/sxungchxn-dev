import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const section = style({
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space['none']} ${vars.space['24px']} !important`,
    },
  },
})

export const thumbnailWrapper = style({
  position: 'relative',
  borderRadius: vars.radius['8px'],
  overflow: 'hidden',
  '@media': {
    [mediaQuery.pc]: {
      width: '980px',
      height: '580px',
    },
    [mediaQuery.tablet]: {
      aspectRatio: '5/3',
    },
    [mediaQuery.mobile]: {
      aspectRatio: '5/4',
    },
  },
})
