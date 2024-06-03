'use client'

import { Box, Icon } from '@sxungchxn/dev-ui'
import { IconArrowUp } from '@sxungchxn/dev-icons'
import * as styles from './fab.css'

export const Fab = () => {
  const handleClickFab = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      as="button"
      borderRadius="circle"
      width="56px"
      height="56px"
      justifyContent="center"
      alignItems="center"
      className={styles.button}
      backgroundColor="secondary"
      onClick={handleClickFab}
    >
      <Icon source={IconArrowUp} size={24} color="textPrimary" />
    </Box>
  )
}
