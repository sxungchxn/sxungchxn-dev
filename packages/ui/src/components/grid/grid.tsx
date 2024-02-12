import { Box } from '@/components/box'
import { GridElements, GridProps } from '@/components/grid/grid.types'
import { useGridProps } from '@/components/grid/hooks/use-grid-props'
import { forwardRef } from 'react'

export const Grid = forwardRef(<C extends GridElements = 'div'>(props: GridProps<C>) => {
  const { children, ref, ...otherGridProps } = useGridProps<C>(props)

  return (
    <Box {...otherGridProps} ref={ref}>
      {children}
    </Box>
  )
})
