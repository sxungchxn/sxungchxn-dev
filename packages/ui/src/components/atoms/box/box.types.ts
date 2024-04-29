import type { ElementType } from 'react'
import type { AtomicProps, InlineStyleProps, PolymorphicComponentPropWithRef } from '@/types'

export type BoxProps<C extends ElementType = 'div'> = PolymorphicComponentPropWithRef<
  C,
  AtomicProps & InlineStyleProps
>
