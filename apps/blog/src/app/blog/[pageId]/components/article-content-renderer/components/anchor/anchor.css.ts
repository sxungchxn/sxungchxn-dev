import { style } from '@vanilla-extract/css'

export const anchor = style({
  wordWrap: 'break-word',
  selectors: {
    '&:hover': {
      textDecoration: 'underline !important',
    },
    ':is(h1, h2, h3) > &': {
      display: 'flex',
      alignItems: 'center',
    },
  },
})
