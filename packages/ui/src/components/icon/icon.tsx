import { IconSource } from '@seungchan-dev/icons'
import { forwardRef, Ref, SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  source: IconSource
}
export const Icon = forwardRef(
  ({ source: SourceComponent, ...rest }: IconProps, ref: Ref<SVGSVGElement>) => {
    return <SourceComponent ref={ref} {...rest} />
  },
)
