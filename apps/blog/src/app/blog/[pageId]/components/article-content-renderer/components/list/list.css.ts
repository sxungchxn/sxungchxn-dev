import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@sxungchxn/dev-ui'

export const list = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space['8px'],
    paddingInlineStart: vars.space['24px'],
    padding: `${vars.space['24px']} ${vars.space['32px']}`,
    backgroundColor: vars.colors.secondary,
    borderRadius: '8px',
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
