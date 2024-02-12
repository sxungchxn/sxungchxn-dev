import { clsx } from 'clsx'
import { IconProps } from '@/components/icon/icon.types'
import { getInlineProps, getSpaceProps } from '@/styles/utils'
import { sprinkles } from '@/styles/sprinkles.css'
import { vars } from '@/styles/vars.css'

export const useIconProps = ({ ref, ...props }: Omit<IconProps, 'source'>) => {
  const { spaceProps, ...notSpaceProps } = getSpaceProps(props)
  const {
    inlineProps: { width, height, ...otherInlineProps },
    ...notLayoutProps
  } = getInlineProps(notSpaceProps)
  const { size, className, color = 'currentColor', ...otherProps } = notLayoutProps as IconProps

  return {
    ref,
    className: clsx(sprinkles({ ...spaceProps }), className),
    width: size ?? width ?? 24,
    height: size ?? height ?? 24,
    style: otherInlineProps,
    color: vars.colors[color],
    ...otherProps,
  } as const
}
