import { AtomicProps, PolymorphicComponentPropWithRef } from '@/types'
import { LayoutProps } from '@/types/css-prop'
import { IconSource } from '@seungchan-dev/icons'

export interface IconProps extends PolymorphicComponentPropWithRef<'svg', LayoutProps> {
  /** IconSource 컴포넌트 */
  source: IconSource
  /** Icon Size */
  size?: number
  /** Icon color */
  color?: AtomicProps['color']
}
