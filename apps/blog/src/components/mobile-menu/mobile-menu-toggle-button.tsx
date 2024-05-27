import { m } from 'framer-motion'
import type { ComponentProps } from 'react'
import { Box, type BoxProps, vars } from '@sxungchxn/dev-ui'
import * as styles from './mobile-menu-toggle-button.css'

const Path = (props: ComponentProps<typeof m.path>) => {
  return (
    <m.path
      fill="transparent"
      strokeWidth="3"
      stroke={vars.colors.textPrimary}
      strokeLinecap="round"
      {...props}
    />
  )
}

export interface MobileMenuToggleButtonProps extends BoxProps<'button'> {
  onToggle: () => void
}

export const MobileMenuToggleButton = ({ onToggle, ...props }: MobileMenuToggleButtonProps) => {
  return (
    <Box {...props} as="button" onClick={onToggle} className={styles.button}>
      <svg width="22" height="22" viewBox="0 0 22 22">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Box>
  )
}
