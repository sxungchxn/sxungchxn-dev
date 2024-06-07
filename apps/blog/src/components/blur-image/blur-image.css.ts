import { recipe } from '@vanilla-extract/recipes'

export const image = recipe({
  base: {
    verticalAlign: 'bottom',
    objectFit: 'cover',
    objectPosition: 'top',
    transition: '0.3s all ease-in-out',
  },
  variants: {
    isLoading: {
      true: {
        filter: 'blur(40px)',
      },
      false: {
        filter: 'blur(0px)',
      },
    },
  },
})
