import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@sxungchxn/dev-ui'
import { wrapper } from '@/app/blog/[pageId]/components/article-content-renderer/article-content-renderer.css'
import { globalStyle } from '@vanilla-extract/css'

export const list = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space['8px'],
    paddingInlineStart: vars.space['24px'],
    backgroundColor: vars.colors.secondary,
    borderRadius: '8px',
    selectors: {
      [`${wrapper} > &`]: {
        padding: `${vars.space['24px']} ${vars.space['32px']}`,
      },
    },
  },
  variants: {
    variant: {
      ul: {
        listStyleType: 'disc',
      },
      ol: {
        listStyleType: 'decimal',
      },
    },
  },
})

globalStyle('li > ul', {
  marginTop: `${vars.space['10px']} !important`,
})

globalStyle('h2#목차 + ul', {
  gap: vars.space['16px'],
})

globalStyle('h2#목차 + ul ul, h2#목차 + ul li', {
  listStyleType: 'none !important',
})
