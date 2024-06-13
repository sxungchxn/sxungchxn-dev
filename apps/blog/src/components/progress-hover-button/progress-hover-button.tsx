'use client'

import { Flex, type FlexProps, Icon, ProgressiveHoverCircle, Text } from '@sxungchxn/dev-ui'
import { IconReload } from '@sxungchxn/dev-icons'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import type { ReactNode } from 'react'

export interface ProgressHoverButtonProps extends FlexProps<'button'> {
  icon?: ReactNode
}

export const ProgressHoverButton = ({ children, icon, ...flexProps }: ProgressHoverButtonProps) => {
  const [isHover, , setHoverTrue, setHoverFalse] = useBooleanState(false)

  return (
    <Flex
      {...flexProps}
      as="button"
      alignItems="center"
      onMouseEnter={setHoverTrue}
      onMouseLeave={setHoverFalse}
      gap="8px"
    >
      <ProgressiveHoverCircle isHover={isHover} fillColor="textPrimary" size={28}>
        {icon ?? <Icon source={IconReload} size={16} color="textPrimary" />}
      </ProgressiveHoverCircle>
      <Text variant="title3" color="textPrimary">
        {children}
      </Text>
    </Flex>
  )
}
