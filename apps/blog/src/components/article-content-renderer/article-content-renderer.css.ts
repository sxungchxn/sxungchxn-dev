import { mediaQuery, vars } from '@sxungchxn/dev-ui'
import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  marginBottom: vars.space['64px'],
  '@media': {
    [mediaQuery.belowPc]: {
      padding: `${vars.space.none} ${vars.space['24px']}`,
    },
  },
})

export const wrapperVariants = recipe({
  variants: {
    withMarginTop: {
      true: {
        marginTop: '80px',
      },
    },
  },
  defaultVariants: {
    withMarginTop: false,
  },
})
