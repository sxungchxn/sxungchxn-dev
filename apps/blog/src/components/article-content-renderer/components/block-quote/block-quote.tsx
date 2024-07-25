import { Flex, Text, type TextProps } from '@sxungchxn/dev-ui'

export interface BlockQuoteProps extends Omit<TextProps<'blockquote'>, 'as' | 'color' | 'ref'> {}

export const BlockQuote = ({ children, ...props }: BlockQuoteProps) => {
  return (
    <Flex
      asChild
      backgroundColor="secondary"
      borderRadius="8px"
      width="100%"
      marginY="24px"
      alignItems="center"
    >
      <Text {...props} as="blockquote" variant="body2" color="textPrimary" padding="24px">
        {children}
      </Text>
    </Flex>
  )
}
