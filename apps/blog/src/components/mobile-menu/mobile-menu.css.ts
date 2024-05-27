import { style } from '@vanilla-extract/css'
import { mediaQuery, vars } from '@sxungchxn/dev-ui'

export const menuNav = style({
  display: 'block',
  position: 'absolute',
  height: '100vh',
  width: '100%',
  top: '6px',
  right: 0,
  '@media': {
    [mediaQuery.pc]: {
      display: 'none !important',
    },
  },
})

export const background = style({
  backgroundColor: vars.colors.transparentPrimary,
  position: 'absolute',
  top: '74px', // header(80px) - 6px
  left: 0,
  bottom: 0,
  width: '100vw',
  backdropFilter: 'blur(20px)',
})

export const menuContent = style({
  position: 'absolute',
  marginTop: '152px !important',
  padding: `0px ${vars.space['40px']} !important`,
  gap: '120px',
})
