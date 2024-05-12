import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/vars.css'

export const chip = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'max-content',
  },
  variants: {
    variant: {
      filled: {},
      bordered: {},
    },
    color: {
      primary: {},
      secondary: {},
    },
    size: {
      sm: {
        padding: `0px ${vars.space['12px']}`,
        borderRadius: vars.radius['16px'],
        height: vars.space['32px'],
      },
      md: {
        padding: `0px ${vars.space['32px']}`,
        borderRadius: vars.space['32px'],
        height: vars.space['48px'],
      },
    },
    fullWidth: {
      true: {
        flex: 1,
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'filled',
    color: 'primary',
    size: 'sm',
    fullWidth: false,
  },
  compoundVariants: [
    {
      variants: {
        variant: 'filled',
        color: 'primary',
      },
      style: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.textPrimary,
      },
    },
    {
      variants: {
        variant: 'filled',
        color: 'secondary',
      },
      style: {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.textPrimary,
      },
    },
    {
      variants: {
        variant: 'bordered',
        color: 'primary',
      },
      style: {
        color: vars.colors.primary,
        border: `1.5px solid ${vars.colors.primary}`,
      },
    },
    {
      variants: {
        variant: 'bordered',
        color: 'secondary',
      },
      style: {
        color: vars.colors.secondary,
        border: `1.5px solid ${vars.colors.secondary}`,
      },
    },
  ],
})

export type ChipVariants = RecipeVariants<typeof chip>
export type Variant = NonNullable<ChipVariants>['variant']
export type Size = NonNullable<ChipVariants>['size']
export type Color = NonNullable<ChipVariants>['color']
