import { forwardRef } from 'react'
import type { IconProps } from './icon.types'
import { useIconProps } from '@/components/atoms/icon/hooks/use-icon-props'
import type { PolymorphicRef } from '@/types'

export const Icon = forwardRef(
  ({ source: SourceComponent, ...rest }: IconProps, ref: PolymorphicRef<'svg'>) => {
    const iconProps = useIconProps(rest)

    return <SourceComponent ref={ref} {...iconProps} />
  },
)
