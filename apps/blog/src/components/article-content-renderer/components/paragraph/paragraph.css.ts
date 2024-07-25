import { wrapper } from '@/components/article-content-renderer/article-content-renderer.css'
import { style } from '@vanilla-extract/css'
import { vars } from '@sxungchxn/dev-ui'

export const paragraph = style({
  selectors: {
    [`${wrapper} > &`]: {
      margin: `${vars.space['16px']} ${vars.space['none']}`,
    },
  },
})
