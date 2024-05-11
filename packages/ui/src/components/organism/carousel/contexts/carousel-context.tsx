import { createContext, type PropsWithChildren, useContext } from 'react'
import type { useCarouselApi } from '@/components/organism/carousel/hooks/use-carousel-api'

export interface CarouselContextValue extends ReturnType<typeof useCarouselApi> {}

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export interface CarouselContextProviderProps extends PropsWithChildren {
  value: CarouselContextValue
}

export const CarouselContextProvider = ({ value, children }: CarouselContextProviderProps) => {
  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

/* eslint-disable react-refresh/only-export-components */
export const useCarouselContext = () => {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error('CarouselContext should be within CarouselContextProvider')
  return ctx
}
