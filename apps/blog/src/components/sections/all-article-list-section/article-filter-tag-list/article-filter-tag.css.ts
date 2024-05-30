import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@sxungchxn/dev-ui'

export const chip = recipe({
  base: {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
    selectors: {
      '&:hover': {
        transitionDuration: '0.3s',
        transitionProperty: 'box-shadow, color, background-color',
        transitionTimingFunction: 'ease-in-out',
        boxShadow: `${vars.colors.primary} 0px 0px 0px 3px, ${vars.colors.textSecondary} 0px 0px 0px 5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        boxShadow: `${vars.colors.primary} 0px 0px 0px 3px, ${vars.colors.textSecondary} 0px 0px 0px 5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
        backgroundColor: vars.colors.textPrimary,
        color: vars.colors.primary,
      },
    },
  },
})
