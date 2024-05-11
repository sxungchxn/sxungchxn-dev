import { clsx } from 'clsx'
import { type MouseEventHandler, useMemo } from 'react'
import { IconChevronLeft, IconChevronRight } from '@seungchan-dev/icons'
import { Box, type BoxProps } from '@/components/atoms/box'
import { Icon } from '@/components/atoms/icon'
import { IconButton, type IconButtonProps } from '@/components/molecules/icon-button'
import { useCarouselApi } from '@/components/organism/carousel/hooks/use-carousel-api'
import {
  CarouselContextProvider,
  useCarouselContext,
} from '@/components/organism/carousel/contexts/carousel-context'
import { useCarouselPrevNext } from '@/components/organism/carousel/hooks/use-carousel-prev-next'
import * as styles from './carousel.css'
import { useCarouselPagination } from '@/components/organism/carousel/hooks/use-carousel-pagination'
import type { useCarousel } from '@/components/organism/carousel/hooks/use-carousel'

/*--------------------------------------------------------------------------
 CarouselRoot Component
---------------------------------------------------------------------------*/

export interface CarouselRootProps
  extends BoxProps,
    Partial<Omit<ReturnType<typeof useCarousel>, 'selectedIndex'>> {}

export const CarouselRoot = ({
  className,
  carouselApi,
  carouselRef,
  handleNavButtonClick,
  ...boxProps
}: CarouselRootProps) => {
  const _carouselApi = useCarouselApi()

  const contextValue = useMemo(
    () => ({
      carouselApi: carouselApi ?? _carouselApi.carouselApi,
      carouselRef: carouselRef ?? _carouselApi.carouselRef,
      handleNavButtonClick: handleNavButtonClick ?? _carouselApi.handleNavButtonClick,
    }),
    [carouselApi, carouselRef, handleNavButtonClick, _carouselApi],
  )

  return (
    <CarouselContextProvider value={contextValue}>
      <Box className={clsx(className, styles.root)} {...boxProps} />
    </CarouselContextProvider>
  )
}

/*--------------------------------------------------------------------------
 CarouselSlideViewPort Component
---------------------------------------------------------------------------*/

export interface CarouselSlideViewPortProps extends BoxProps {}

export const CarouselSlideViewPort = ({
  className,
  children,
  ...rest
}: CarouselSlideViewPortProps) => {
  const { carouselRef } = useCarouselContext()

  return (
    <Box className={clsx(className, styles.viewport)} ref={carouselRef} {...rest}>
      <div className={styles.container}>{children}</div>
    </Box>
  )
}

/*--------------------------------------------------------------------------
 CarouselSlide Component
---------------------------------------------------------------------------*/

export interface CarouselSlideProps extends BoxProps {}

export const CarouselSlide = ({ className, children, ...rest }: CarouselSlideProps) => {
  return (
    <Box className={clsx(className, styles.slide)} {...rest}>
      {children}
    </Box>
  )
}

/*--------------------------------------------------------------------------
 CarouselPrevButton Component
---------------------------------------------------------------------------*/

export interface CarouselPrevButtonProps extends Omit<IconButtonProps, 'color' | 'variant'> {}

export const CarouselPrevButton = ({ onClick, ...props }: CarouselPrevButtonProps) => {
  const { carouselApi, handleNavButtonClick } = useCarouselContext()
  const { prevBtnDisabled, handlePrevButtonClick } = useCarouselPrevNext(
    carouselApi,
    handleNavButtonClick,
  )

  const handleClickPrevButton: MouseEventHandler<HTMLButtonElement> = e => {
    handlePrevButtonClick()
    onClick?.(e)
  }

  return (
    <IconButton
      {...props}
      color="purple400"
      variant="subtle"
      disabled={prevBtnDisabled}
      onClick={handleClickPrevButton}
    >
      <Icon source={IconChevronLeft} size={24} />
    </IconButton>
  )
}

/*--------------------------------------------------------------------------
 CarouselNextButton Component
---------------------------------------------------------------------------*/

export interface CarouselNextButtonProps extends Omit<IconButtonProps, 'color' | 'variant'> {}

export const CarouselNextButton = ({ onClick, ...props }: CarouselNextButtonProps) => {
  const { carouselApi, handleNavButtonClick } = useCarouselContext()
  const { nextBtnDisabled, handleNextButtonClick } = useCarouselPrevNext(
    carouselApi,
    handleNavButtonClick,
  )

  const handleClickNextButton: MouseEventHandler<HTMLButtonElement> = e => {
    handleNextButtonClick()
    onClick?.(e)
  }

  return (
    <IconButton
      {...props}
      color="purple400"
      variant="subtle"
      disabled={nextBtnDisabled}
      onClick={handleClickNextButton}
    >
      <Icon source={IconChevronRight} size={24} />
    </IconButton>
  )
}

/*--------------------------------------------------------------------------
 CarouselPagination Component
---------------------------------------------------------------------------*/

export interface CarouselPaginationProps extends Omit<BoxProps, 'children'> {
  size?: styles.KnobSize
}

export const CarouselPagination = ({
  className,
  size = 'sm',
  ...rest
}: CarouselPaginationProps) => {
  const { carouselApi, handleNavButtonClick } = useCarouselContext()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarouselPagination(
    carouselApi,
    handleNavButtonClick,
  )

  return (
    <Box className={clsx(styles.knobList, className)} {...rest}>
      {scrollSnaps.map((_, index) => (
        <Box
          as="button"
          type="button"
          key={index}
          className={styles.knob({
            size,
            selected: selectedIndex === index,
          })}
          onClick={() => onDotButtonClick(index)}
        />
      ))}
    </Box>
  )
}

export const Carousel = Object.assign(CarouselRoot, {
  SlideViewPort: CarouselSlideViewPort,
  Slide: CarouselSlide,
  Pagination: CarouselPagination,
  PrevButton: CarouselPrevButton,
  NextButton: CarouselNextButton,
})
