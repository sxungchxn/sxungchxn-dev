import * as styles from './footer.css'
import { Box, Flex, Icon, Text } from '@sxungchxn/dev-ui'
import { IconGithub, IconLinkedin, IconVelog } from '@sxungchxn/dev-icons'

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerSpacer} />
      <div className={styles.footer}>
        <Text as="span" variant="logo" color="textPrimary">
          sxungchxn.dev
        </Text>
        <Flex gap="24px" alignItems="center">
          <Box as="a" href="https://github.com/sxungchxn" target="_blank">
            <Icon source={IconGithub} color="textPrimary" size={24} />
          </Box>
          <Box as="a" href="https://www.linkedin.com/in/sxungchxn" target="_blank">
            <Icon source={IconLinkedin} color="textPrimary" size={24} />
          </Box>
          <Box as="a" href="https://velog.io/@seungchan__y" target="_blank">
            <Icon source={IconVelog} color="textPrimary" size={24} />
          </Box>
        </Flex>
        <Text as="span" variant="body4" color="textSecondary">
          Copyright © 2024 • Yangseungchan
        </Text>
      </div>
    </footer>
  )
}
