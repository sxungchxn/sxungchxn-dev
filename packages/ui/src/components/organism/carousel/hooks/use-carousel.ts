import { useCarouselApi } from '@/components/organism/carousel/hooks/use-carousel-api'
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

export const useCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { carouselApi, carouselRef, handleNavButtonClick } = useCarouselApi()

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!carouselApi) return

    onSelect(carouselApi)
    carouselApi.on('reInit', onSelect)
    carouselApi.on('select', onSelect)
  }, [carouselApi, onSelect])

  return useMemo(
    () => ({
      selectedIndex,
      carouselRef,
      carouselApi,
      handleNavButtonClick,
    }),
    [selectedIndex, carouselRef, carouselApi, handleNavButtonClick],
  )
}
