import { forwardRef } from 'react'
import { PolymorphicRef } from '@/types'
import { IconProps } from './icon.types'
import { useIconProps } from '@/components/icon/hooks/use-icon-props'

export const Icon = forwardRef(
  ({ source: SourceComponent, ...rest }: IconProps, ref: PolymorphicRef<'svg'>) => {
    const iconProps = useIconProps(rest)

    return <SourceComponent ref={ref} {...iconProps} />
  },
)
