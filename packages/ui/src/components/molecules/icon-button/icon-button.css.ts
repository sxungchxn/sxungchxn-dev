import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { createVar } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'
import { element } from '@/styles/reset.css'

export const backgroundColorVar = createVar()

export const button = recipe({
  base: [
    element['button'],
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: vars.space['4px'],
    },
  ],
  variants: {
    variant: {
      filled: {
        backgroundColor: backgroundColorVar,
      },
      subtle: {
        selectors: {
          '&:hover': {
            backgroundColor: backgroundColorVar,
          },
        },
      },
    },
    shape: {
      square: {
        borderRadius: vars.radius['4px'],
      },
      circle: {
        borderRadius: vars.radius.circle,
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    shape: 'circle',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>

export type Variant = NonNullable<ButtonVariants>['variant']
export type Shape = NonNullable<ButtonVariants>['shape']
