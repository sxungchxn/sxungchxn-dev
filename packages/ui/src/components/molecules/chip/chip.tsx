// [x] variant - filled, bordered
// [x] size - sm : 32, md:48
// [x] prefix, postfix
// [x] gap
// [x] as
// fullWidth
// flex?

import * as styles from './chip.css'
import { forwardRef, type ReactNode } from 'react'
import type {
  AtomicProps,
  LayoutProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/types'
import { Box } from '@/components/atoms/box'
import { clsx } from 'clsx'

export type ChipElements = 'div' | 'li' | 'button'

export interface ChipStyleProps extends LayoutProps {
  variant?: styles.Variant
  size?: styles.Size
  color?: styles.Color
  fullWidth?: boolean
  prefix?: ReactNode
  postfix?: ReactNode
  gap?: AtomicProps['gap']
}

export type ChipProps<C extends ChipElements = 'div'> = PolymorphicComponentPropWithRef<
  C,
  ChipStyleProps
>

/** chip 형태의 다형성 컴포넌트 */
export const Chip = forwardRef(
  <C extends ChipElements = 'div'>(
    {
      className,
      variant = 'filled',
      size = 'sm',
      color = 'primary',
      fullWidth = false,
      gap = '4px',
      children,
      prefix,
      postfix,
      ...rest
    }: ChipProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        {...rest}
        ref={ref}
        className={clsx(
          styles.chip({
            variant,
            size,
            color,
            fullWidth,
          }),
          className,
        )}
        gap={gap}
      >
        {prefix}
        {children}
        {postfix}
      </Box>
    )
  },
)
