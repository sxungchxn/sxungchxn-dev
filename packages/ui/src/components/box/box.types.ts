import { ElementType } from 'react'
import { AtomicProps, InlineStyleProps, PolymorphicComponentPropWithRef } from '@/types'

export type BoxProps<C extends ElementType = 'div'> = PolymorphicComponentPropWithRef<
  C,
  AtomicProps & InlineStyleProps
>
