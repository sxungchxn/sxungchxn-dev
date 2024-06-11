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
      marginTop="36px"
    >
      <ProgressiveHoverCircle isHover={isHover} fillColor="textPrimary">
        {icon ?? <Icon source={IconReload} size={20} color="textPrimary" />}
      </ProgressiveHoverCircle>
      <Text variant="title3" color="textPrimary">
        {children}
      </Text>
    </Flex>
  )
}
