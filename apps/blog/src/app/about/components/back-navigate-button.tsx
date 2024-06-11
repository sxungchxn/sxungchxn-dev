'use client'

import { ProgressHoverButton } from '@/components/progress-hover-button/progress-hover-button'
import { Icon } from '@sxungchxn/dev-ui'
import { IconArrowLeft } from '@sxungchxn/dev-icons'
import { useRouter } from 'next/navigation'

export const BackNavigateButton = () => {
  const router = useRouter()
  return (
    <ProgressHoverButton
      icon={<Icon source={IconArrowLeft} size={20} color="textPrimary" />}
      marginTop="36px"
      onClick={router.back}
    >
      뒤로 가기
    </ProgressHoverButton>
  )
}
