import { vars } from '@/styles/vars.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Children, cloneElement, type ElementType, forwardRef, type ReactElement } from 'react'
import { Box } from '@/components/atoms/box'
import type {
  AtomicProps,
  LayoutProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/types'
import * as styles from './icon-button.css'
import { clsx } from 'clsx'
import type { HexaColor, HoverColor } from '@/styles/tokens/color'

export interface IconButtonStyleProps {
  color: HexaColor
  variant: 'filled' | 'subtle'
  backgroundColor?: AtomicProps['backgroundColor']
  borderRadius: AtomicProps['borderRadius']
  shape: styles.Shape
}

export type IconButtonProps<C extends ElementType = 'button'> = PolymorphicComponentPropWithRef<
  C,
  IconButtonStyleProps & LayoutProps
>

export type IconButtomComponent = <C extends ElementType = 'button'>(
  props: IconButtonProps<C>,
) => ReactElement<IconButtonProps<C>>

export const IconButton = forwardRef(
  <C extends ElementType = 'button'>(
    {
      as,
      children,
      variant = 'subtle',
      shape = 'circle',
      color,
      style,
      backgroundColor,
      className,
      ...rest
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const defaultBackgroundColor = (color + 'Hover') as HoverColor

    return (
      <Box
        {...rest}
        as={(as ?? 'button') as ElementType}
        ref={ref}
        className={clsx(
          styles.button({
            shape,
            variant,
          }),
          className,
        )}
        style={{
          ...style,
          ...assignInlineVars({
            [styles.backgroundColorVar]:
              variant === 'filled' && backgroundColor
                ? vars.colors[backgroundColor]
                : vars.colors[defaultBackgroundColor],
          }),
        }}
      >
        {Children.map(children, child =>
          cloneElement(child as NonNullable<ReactElement>, {
            color,
          }),
        )}
      </Box>
    )
  },
) as IconButtomComponent
