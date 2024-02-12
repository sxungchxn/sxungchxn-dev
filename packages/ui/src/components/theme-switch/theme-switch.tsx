import { forwardRef, MouseEvent } from 'react'
import { clsx } from 'clsx'
import { Box, BoxProps } from '@/components/box'
import { Icon } from '@/components/icon'
import * as styles from './theme-switch.css'
import { useTheme } from '@/hooks'
import { IconMoon, IconSun } from '@seungchan-dev/icons'
import { motion } from 'framer-motion'

export interface ThemeSwitchProps extends Omit<BoxProps<'button'>, 'children'> {
  /** theme switch size */
  size?: styles.Size
}

const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 700,
  damping: 40,
} as const

export const ThemeSwitch = forwardRef(
  ({ className, size = 'medium', onClick, ref, ...rest }: ThemeSwitchProps) => {
    const { mode, toggle } = useTheme()

    const handleClickSwitch = (e: MouseEvent<HTMLButtonElement>) => {
      toggle()
      onClick?.(e)
    }

    return (
      <Box
        {...rest}
        ref={ref}
        as="button"
        className={clsx(className, styles.wrapper({ size, mode }))}
        onClick={handleClickSwitch}
      >
        <Icon source={IconSun} className={styles.iconLeft({ size })} />
        <Icon source={IconMoon} className={styles.iconRight({ size })} />
        <motion.div layout transition={SPRING_TRANSITION} className={styles.knob({ mode, size })} />
      </Box>
    )
  },
)
