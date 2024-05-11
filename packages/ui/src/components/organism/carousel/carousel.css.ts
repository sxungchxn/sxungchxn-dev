import { style } from '@vanilla-extract/css'
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles/vars.css'
import { sprinkles } from '@/styles/sprinkles.css'

export const root = style({
  position: 'relative',
})

export const viewport = style({
  overflow: 'hidden',
})

export const container = style({
  backfaceVisibility: 'hidden',
  display: 'flex',
  touchAction: 'pan-y pinch-zoom',
})

export const slide = style({
  flex: '0 0 100%',
  minWidth: 0,
})

export const knobList = sprinkles({ display: 'flex', alignItems: 'center', gap: '2px' })

export const knob = recipe({
  base: {
    borderRadius: vars.radius['4px'],
    backgroundColor: vars.colors.transparentWhite,
    transitionProperty: 'width, background-color',
    transitionDuration: '0.35s',
    transitionTimingFunction: 'ease-in-out',
  },
  variants: {
    size: {
      lg: {
        width: vars.space['8px'],
        height: vars.space['8px'],
      },
      md: {
        width: vars.space['6px'],
        height: vars.space['6px'],
      },
      sm: {
        width: vars.space['4px'],
        height: vars.space['4px'],
      },
    },
    selected: {
      true: {
        backgroundColor: vars.colors.white,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    selected: false,
  },
  compoundVariants: [
    {
      variants: {
        size: 'sm',
        selected: true,
      },
      style: {
        width: '16px',
      },
    },
    {
      variants: {
        size: 'md',
        selected: true,
      },
      style: {
        width: '24px',
      },
    },
    {
      variants: {
        size: 'md',
        selected: true,
      },
      style: {
        width: '32px',
      },
    },
  ],
})

export type KnobVariants = RecipeVariants<typeof knob>

export type KnobSize = NonNullable<KnobVariants>['size']
