'use client'

import Image, { type ImageProps } from 'next/image'
import { clsx } from 'clsx'
import * as styles from './blur-image.css'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import { type ForwardedRef, forwardRef, useRef } from 'react'
import { BlurImageFallback } from '@/components/blur-image/blur-image-fallback'

export interface BlurImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  blurDataURL?: ImageProps['blurDataURL']
}

export const BlurImage = forwardRef(
  ({ className, ...props }: BlurImageProps, ref: ForwardedRef<HTMLImageElement>) => {
    const imageKey = useRef(0)
    const [isLoading, , , setLoadComplete] = useBooleanState(true)
    const [isFallback, , setIsFallbackTrue, setIsFallbackFalse] = useBooleanState(false)

    const handleClickFallbackReload = () => {
      imageKey.current += 1
      setIsFallbackFalse()
    }

    return isFallback ? (
      <BlurImageFallback onClickReload={handleClickFallbackReload} />
    ) : (
      <Image
        {...props}
        key={imageKey.current}
        ref={ref}
        placeholder="blur"
        className={clsx(styles.image({ isLoading }), className)}
        onLoad={setLoadComplete}
        onError={setIsFallbackTrue}
      />
    )
  },
)
