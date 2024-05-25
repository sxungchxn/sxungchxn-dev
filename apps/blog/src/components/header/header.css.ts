import { vars } from '@sxungchxn/dev-ui'
import { recipe } from '@vanilla-extract/recipes'

export const header = recipe({
  base: {
    position: 'sticky',
    top: 0,
    zIndex: vars.zIndex.docked,
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
