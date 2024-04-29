import { style } from '@vanilla-extract/css'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles.css'
import * as resetStyle from '@/styles/reset.css'

export const wrapper = recipe({
  base: style([
    resetStyle.base,
    resetStyle.element.button,
    {
      gridTemplateColumns: '1fr 1fr',
    },
    sprinkles({
      cursor: 'pointer',
      position: 'relative',
      display: 'grid',
      alignItems: 'center',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '4px',
      paddingRight: '4px',
      borderRadius: 'full',
    }),
  ]),
  variants: {
    mode: {
      light: sprinkles({
        backgroundColor: 'purple200',
        color: 'textPrimary',
      }),
      dark: sprinkles({
        backgroundColor: 'purple600',
        color: 'white',
      }),
    },
    size: {
      medium: {
        width: '50px',
      },
      large: {
        width: '68px',
      },
    },
  },
})

export const iconLeft = recipe({
  base: sprinkles({
    justifySelf: 'flex-start',
    marginLeft: '2px',
  }),
  variants: {
    size: {
      medium: {
        width: '16px',
        height: '16px',
      },
      large: {
        width: '24px',
        height: '24px',
      },
    },
  },
})

export const iconRight = recipe({
  base: sprinkles({
    justifySelf: 'flex-end',
  }),
  variants: {
    size: {
      medium: {
        width: '16px',
        height: '16px',
      },
      large: {
        width: '24px',
        height: '24px',
      },
    },
  },
})

export const knob = recipe({
  base: sprinkles({
    position: 'absolute',
    zIndex: 'above',
    backgroundColor: 'white',
    borderRadius: 'full',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
  }),
  variants: {
    mode: {
      light: sprinkles({
        marginLeft: '4px',
        justifySelf: 'flex-start',
      }),
      dark: sprinkles({
        marginRight: '4px',
        justifySelf: 'flex-end',
      }),
    },
    size: {
      medium: {
        width: '20px',
        height: '20px',
      },
      large: {
        width: '28px',
        height: '28px',
      },
    },
  },
})

export type ThemeSwitchVariants = RecipeVariants<typeof wrapper>
export type Mode = NonNullable<ThemeSwitchVariants>['mode']
export type Size = NonNullable<ThemeSwitchVariants>['size']
