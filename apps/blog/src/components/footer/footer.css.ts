import { style } from '@vanilla-extract/css'
import { createVar } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

const footerHeight = createVar()

export const footerWrapper = style({
  vars: {
    [footerHeight]: '300px',
  },
})

export const footerSpacer = style({
  height: footerHeight,
})

export const footer = style({
  height: footerHeight,
  zIndex: 0,
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: vars.colors.secondary,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['32px'],
  justifyContent: 'center',
  alignItems: 'center',
})
