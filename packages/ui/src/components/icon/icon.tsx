import { forwardRef } from 'react'
import { PolymorphicRef } from '@/types'
import { IconProps } from './icon.types'
import { useIconProps } from '@/components/icon/hooks/use-icon-props'

// requirement
// width, height는 size에 종속적
// 그 외에는 알아서

export const Icon = forwardRef(
  ({ source: SourceComponent, ...rest }: IconProps, ref: PolymorphicRef<'svg'>) => {
    const iconProps = useIconProps(rest)

    return <SourceComponent ref={ref} {...iconProps} />
  },
)
