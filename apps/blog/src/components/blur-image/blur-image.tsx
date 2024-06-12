'use client'

import Image, { type ImageProps } from 'next/image'
import { clsx } from 'clsx'
import * as styles from './blur-image.css'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import { type ForwardedRef, forwardRef } from 'react'
import { BlurImageFallback } from '@/components/blur-image/blur-image-fallback'

export interface BlurImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  blurDataURL?: ImageProps['blurDataURL']
}

export const BlurImage = forwardRef(
  ({ className, ...props }: BlurImageProps, ref: ForwardedRef<HTMLImageElement>) => {
    const [isLoading, , , setLoadComplete] = useBooleanState(true)
    const [isFallback, , setIsFallbackTrue, setIsFallbackFalse] = useBooleanState(false)

    const handleClickFallbackReload = () => {
      setIsFallbackFalse()
    }

    return isFallback ? (
      <BlurImageFallback onClickReload={handleClickFallbackReload} />
    ) : (
      <Image
        {...props}
        ref={ref}
        placeholder="blur"
        className={clsx(styles.image({ isLoading }), className)}
        onLoad={setLoadComplete}
        onError={setIsFallbackTrue}
      />
    )
  },
)
