import { globalStyle } from '@vanilla-extract/css'
import { mediaQuery } from '@sxungchxn/dev-ui'

// 링크 클릭시 스크롤 이동 방식 정의
globalStyle('html', {
  scrollBehavior: 'smooth',
  '@media': {
    [mediaQuery.pc]: {
      scrollPaddingTop: '120px',
    },
    [mediaQuery.belowPc]: {
      scrollPaddingTop: '84px',
    },
  },
})

globalStyle('a', {
  textDecoration: 'none',
})
