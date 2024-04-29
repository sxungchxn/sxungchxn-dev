import { vars } from '@/styles/vars.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Children, cloneElement, ElementType, forwardRef, ReactElement } from 'react'
import { Box } from '@/components/box'
import { AtomicProps, LayoutProps, PolymorphicComponentPropWithRef, PolymorphicRef } from '@/types'
import * as styles from './icon-button.css'
import { clsx } from 'clsx'
import { HexaColor, HoverColor } from '@/styles/tokens/color'

export interface IconButtonStyleProps {
  color: HexaColor
  variant: 'filled' | 'subtle'
  backgroundColor?: AtomicProps['backgroundColor']
  borderRadius: AtomicProps['borderRadius']
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
      color,
      style,
      backgroundColor,
      borderRadius = '4px',
      className,
      ...rest
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const defaultBackgroundColor = color + 'Hover'

    return (
      <Box
        {...rest}
        as={(as ?? 'button') as ElementType}
        ref={ref}
        borderRadius={borderRadius}
        className={clsx(
          styles.button({
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
                : vars.colors[defaultBackgroundColor as HoverColor],
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
