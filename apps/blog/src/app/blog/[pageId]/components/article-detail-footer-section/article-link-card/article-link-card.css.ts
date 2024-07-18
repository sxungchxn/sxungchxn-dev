import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { mediaQuery } from '@sxungchxn/dev-ui'

export const cardBase = style({
  height: '106px',
})

export const card = recipe({
  variants: {
    type: {
      prev: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      next: {
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
      },
    },
  },
})

export const linkArrow = recipe({
  base: {
    transition: 'transform 0.3s ease-in-out',
  },
  variants: {
    type: {
      prev: {
        selectors: {
          [`${cardBase}:hover &`]: {
            transform: 'translateX(-4px)',
          },
        },
      },
      next: {
        selectors: {
          [`${cardBase}:hover &`]: {
            transform: 'translateX(4px)',
          },
        },
      },
    },
  },
})

export const linkTitle = style({
  '@media': {
    [mediaQuery.belowPc]: {
      whiteSpace: 'pre-wrap',
    },
  },
})
