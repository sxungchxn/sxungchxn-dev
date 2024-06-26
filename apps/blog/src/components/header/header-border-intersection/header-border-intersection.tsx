'use client'

import { useIntersectionObserver } from '@/hooks/utils/use-intersection-observer'

export interface HeaderBorderIntersectionProps {
  onChangeIntersection: (isIntersecting: boolean) => void
}

export const HeaderBorderIntersection = ({
  onChangeIntersection,
}: HeaderBorderIntersectionProps) => {
  const { ref } = useIntersectionObserver({
    onChange: isIntersecting => {
      onChangeIntersection(!isIntersecting)
    },
  })

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 0,
      }}
    />
  )
}
