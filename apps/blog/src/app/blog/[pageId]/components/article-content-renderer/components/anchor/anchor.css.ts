import { style } from '@vanilla-extract/css'

export const anchor = style({
  selectors: {
    '&:hover': {
      textDecoration: 'underline !important',
    },
  },
})
