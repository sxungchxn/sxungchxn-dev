import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const list = style({
  marginBottom: '300px',
  position: 'relative',
  '@media': {
    [mediaQuery.belowPc]: {
      display: 'flex',
      flexDirection: 'column',
      gridTemplateColumns: '1fr !important',
    },
  },
})

export const listItem = style({
  maxWidth: '100%',
})

export const thumbnailWrapper = style({
  borderRadius: vars.radius['8px'],
  overflow: 'hidden',
  transitionDuration: '0.3s',
  transitionProperty: 'box-shadow',
  transitionTimingFunction: 'ease-in-out',
  '@media': {
    [mediaQuery.pc]: {
      width: '476px',
      height: '270px',
    },
    [mediaQuery.tablet]: {
      aspectRatio: '5/3',
    },
    [mediaQuery.mobile]: {
      aspectRatio: '5/4',
    },
  },
  selectors: {
    [`${listItem}:hover &`]: {
      boxShadow: `${vars.colors.primary} 0px 0px 0px 8px, ${vars.colors.textSecondary} 0px 0px 0px 12px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
    },
  },
})

export const thumbnail = style({
  verticalAlign: 'bottom',
  objectFit: 'cover',
  objectPosition: 'top',
})
