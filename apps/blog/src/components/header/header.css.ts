import { mediaQuery, vars } from '@sxungchxn/dev-ui'
import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const header = recipe({
  base: {
    position: 'fixed',
    maxWidth: '100vw',
    width: '100%',
    top: 0,
    zIndex: vars.zIndex.docked,
    padding: `${vars.space['32px']} ${vars.space['40px']} !important`,
    '@media': {
      [mediaQuery.tablet]: {
        padding: `${vars.space['16px']} ${vars.space['24px']} !important`,
      },
      [mediaQuery.mobile]: {
        padding: `${vars.space['16px']} ${vars.space['16px']} !important`,
      },
    },
  },
  variants: {
    isBordered: {
      true: {
        // nextjs css order 버그로인한 임시방편 (https://github.com/vercel/next.js/issues/51030)
        borderBottom: `1px solid ${vars.colors.secondary} !important`,
      },
    },
  },
})

export const pcNavBar = style({
  '@media': {
    [mediaQuery.belowPc]: {
      display: 'none !important',
    },
  },
})

export const mobileNavbar = style({
  '@media': {
    [mediaQuery.pc]: {
      display: 'none !important',
    },
  },
})
