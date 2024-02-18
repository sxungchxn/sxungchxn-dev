import { style } from '@vanilla-extract/css'
import { vars } from './vars.css'

// reference: mirror-xyz/degen/components/src/css/reset.css.ts
// reset elements' userAgent stylesheet

export const base = style({
  // Prevent padding and border from affecting element width
  boxSizing: 'border-box',

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: vars.colors.textPrimary,
  borderStyle: vars.borderStyles.solid,
  borderWidth: 0,

  color: vars.colors.currentColor,
  fontSize: '100%',
  fontFamily: vars.fonts.primary,
  verticalAlign: 'baseline',
})

const block = style({
  display: 'block',
})

const body = style({
  lineHeight: vars.lineHeights.base,
})

const list = style({
  listStyle: 'none',
})

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
})

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

const appearance = style({
  appearance: 'none',
})

const field = style([
  block,
  appearance,
  style({
    outline: 'none',
    '::placeholder': {
      color: vars.colors.textPrimary,
      opacity: '0.1',
    },
  }),
])

// Custom reset rules
const mark = style({
  backgroundColor: vars.colors.transparent,
  color: 'inherit',
})

const select = style([
  field,
  style({
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  }),
])

const input = style([
  field,
  style({
    selectors: {
      // Hide browser increment/decrement buttons
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
      // Hide browser clear input button
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
    },
  }),
])

const button = style({
  background: 'none',
  cursor: 'pointer',
})

const a = style({
  textDecoration: 'none',
  color: 'inherit',
})

export const element = {
  article: block,
  aside: block,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input,
}

export type Element = keyof typeof element
