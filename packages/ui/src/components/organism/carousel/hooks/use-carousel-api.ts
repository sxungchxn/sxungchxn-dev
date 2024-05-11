import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useMemo } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

export const useCarouselApi = () => {
  const [carouselRef, carouselApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        stopOnInteraction: false,
      }),
    ],
  )

  const handleNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay as unknown as {
      options: {
        stopOnInteraction: boolean
      }
      reset: () => void
      stop: () => void
    }
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  return useMemo(
    () =>
      ({
        carouselRef,
        carouselApi,
        handleNavButtonClick,
      }) as const,
    [carouselRef, carouselApi, handleNavButtonClick],
  )
}
