import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'

export const wrapper = style({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: vars.radius.circle,
  flexShrink: 0,
  boxShadow: `0 0 0 1px ${vars.colors.transparent} inset`,
})

export const svg = style({
  position: 'absolute',
})

export const circle = style({
  strokeLinecap: 'round',
  fill: 'transparent',
})
