import { createVar, style } from '@vanilla-extract/css'

export const gridTemplateColumnsVar = createVar()

export const wrapper = style({
  gridTemplateColumns: gridTemplateColumnsVar,
})
