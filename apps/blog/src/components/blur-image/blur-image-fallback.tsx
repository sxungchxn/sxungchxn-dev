'use client'

import { Flex, Text } from '@sxungchxn/dev-ui'
import Image from 'next/image'
import type { MouseEventHandler } from 'react'
import { ProgressHoverButton } from '@/components/progress-hover-button/progress-hover-button'

export interface BlurImageFallbackProps {
  onClickReload: () => void
}

export const BlurImageFallback = ({ onClickReload }: BlurImageFallbackProps) => {
  const handleClickReloadButton: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    event.stopPropagation()
    onClickReload()
  }

  return (
    <Flex
      backgroundColor="secondary"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Image
          src="https://github.githubassets.com/images/mona-loading-dimmed.gif"
          alt="image_load_fail"
          width={48}
          height={48}
        />
        <Text color="textPrimary" variant="title3" marginTop="16px">
          이미지 로드 실패
        </Text>
        <ProgressHoverButton onClick={handleClickReloadButton}>다시 불러오기</ProgressHoverButton>
      </Flex>
    </Flex>
  )
}
