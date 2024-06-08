import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@sxungchxn/dev-ui'

export const heading = recipe({
  base: {
    marginBottom: vars.space['16px'],
  },
  variants: {
    variant: {
      h1: {
        marginTop: vars.space['64px'],
      },
      h2: {
        marginTop: vars.space['48px'],
      },
      h3: {
        marginTop: vars.space['40px'],
      },
      h4: {
        marginTop: vars.space['32px'],
      },
    },
  },
})
