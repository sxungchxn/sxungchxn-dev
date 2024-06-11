'use client'

import { Flex, Icon, ProgressiveHoverCircle, Text } from '@sxungchxn/dev-ui'
import Image from 'next/image'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import { IconReload } from '@sxungchxn/dev-icons'
import type { MouseEventHandler } from 'react'

export interface BlurImageFallbackProps {
  onClickReload: () => void
}

export const BlurImageFallback = ({ onClickReload }: BlurImageFallbackProps) => {
  const [isHover, , setHoverTrue, setHoverFalse] = useBooleanState(false)

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
        <Flex
          as="button"
          alignItems="center"
          onMouseEnter={setHoverTrue}
          onMouseLeave={setHoverFalse}
          onClick={handleClickReloadButton}
          gap="8px"
          marginTop="36px"
        >
          <ProgressiveHoverCircle isHover={isHover} fillColor="textPrimary">
            <Icon source={IconReload} size={20} color="textPrimary" />
          </ProgressiveHoverCircle>
          <Text variant="title3" color="textPrimary">
            다시 불러오기
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
