import { forwardRef } from 'react'
import { IconProps } from './icon.types'
import { useIconProps } from '@/components/icon/hooks/use-icon-props'

export const Icon = forwardRef(({ source: SourceComponent, ...rest }: IconProps) => {
  const { ref, ...iconProps } = useIconProps(rest)

  return <SourceComponent ref={ref} {...iconProps} />
})
