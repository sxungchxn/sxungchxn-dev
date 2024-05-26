import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const wrapper = style({
  width: '100%',
  padding: `${vars.space['36px']} ${vars.space['40px']}`,
  gap: vars.space['32px'],
  borderRadius: vars.radius['8px'],
  cursor: 'pointer',
  backgroundColor: vars.colors.secondary,
  '@media': {
    [mediaQuery.pc]: {
      display: 'grid',
      gridTemplateColumns: `1fr 500px`,
    },
    [mediaQuery.belowPc]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    [mediaQuery.tablet]: {},
    [mediaQuery.mobile]: {
      gap: vars.space['20px'],
      padding: `${vars.space['24px']} ${vars.space['20px']}`,
    },
  },
})

export const textField = style({
  marginRight: vars.space['40px'],
  '@media': {
    [mediaQuery.belowPc]: {
      marginRight: '0px',
      marginBottom: vars.space['24px'],
    },
  },
})

export const slide = style({
  display: 'block',
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: vars.radius['8px'],
  '@media': {
    [mediaQuery.pc]: {
      width: '500px',
      height: '280px',
    },
    [mediaQuery.belowPc]: {
      aspectRatio: '4/3',
    },
  },
})

export const pagination = style({
  position: 'absolute',
  bottom: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
})

export const controller = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const image = style({
  verticalAlign: 'bottom',
  objectFit: 'cover',
  objectPosition: 'top',
})

export const linkArrow = style({
  transition: 'transform 0.5s ease-in-out',
  selectors: {
    [`${wrapper}:hover &`]: {
      transform: 'translateX(4px)',
    },
  },
})
