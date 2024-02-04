import { style } from '@vanilla-extract/css'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles.css'

const variant = {
  display1: sprinkles({
    fontSize: '52px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  display2: sprinkles({
    fontSize: '46px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  display3: sprinkles({
    fontSize: '40px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  display4: sprinkles({
    fontSize: '36px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  heading1: sprinkles({
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  heading2: sprinkles({
    fontSize: '28px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  heading3: sprinkles({
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  heading4: sprinkles({
    fontSize: '22px',
    lineHeight: '1.3',
    fontWeight: 'bold',
  }),
  title1: sprinkles({
    fontSize: '20px',
    lineHeight: '1.4',
    fontWeight: 'bold',
  }),
  title2: sprinkles({
    fontSize: '18px',
    lineHeight: '1.4',
    fontWeight: 'bold',
  }),
  title3: sprinkles({
    fontSize: '16px',
    lineHeight: '1.4',
    fontWeight: 'bold',
  }),
  title4: sprinkles({
    fontSize: '14px',
    lineHeight: '1.4',
    fontWeight: 'bold',
  }),
  body1: sprinkles({
    fontSize: '18px',
    lineHeight: '1.5',
    fontWeight: 'regular',
  }),
  body2: sprinkles({
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'regular',
  }),
  body3: sprinkles({
    fontSize: '14px',
    lineHeight: '1.5',
    fontWeight: 'regular',
  }),
  body4: sprinkles({
    fontSize: '13px',
    lineHeight: '1.5',
    fontWeight: 'regular',
  }),
  body5: sprinkles({
    fontSize: '12px',
    lineHeight: '1.5',
    fontWeight: 'regular',
  }),
  logo: sprinkles({
    fontSize: '24px',
    lineHeight: '1.25',
    fontWeight: 'regular',
    fontFamily: 'secondary',
  }),
  nav1: sprinkles({
    fontSize: '36px',
    lineHeight: '1.375',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'secondary',
  }),
  nav2: sprinkles({
    fontSize: '16px',
    lineHeight: '1.375',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'secondary',
  }),
  nav3: sprinkles({
    fontSize: '16px',
    lineHeight: '1.375',
    fontWeight: 'regular',
    cursor: 'pointer',
    fontFamily: 'secondary',
  }),
}

// fontface variation
export const fontFaceVariation = {
  primary: sprinkles({
    fontFamily: 'primary',
  }),
  secondary: sprinkles({
    fontFamily: 'secondary',
  }),
}

export const fontStyle = recipe({
  variants: {
    variant,
    fontFace: fontFaceVariation,
    underline: {
      true: {
        textDecoration: 'underline',
      },
      false: {
        textDecoration: 'none',
      },
    },
    ellipsis: {
      true: style([
        {
          textOverflow: 'ellipsis',
        },
        sprinkles({
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }),
      ]),
    },
  },
})

export type TextVariant = RecipeVariants<typeof fontStyle>
export type Variant = NonNullable<TextVariant>['variant']
export type FontFace = NonNullable<TextVariant>['fontFace']
export type Underline = NonNullable<TextVariant>['underline']
export type Ellipsis = NonNullable<TextVariant>['ellipsis']
