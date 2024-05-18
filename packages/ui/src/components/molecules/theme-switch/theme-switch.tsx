import { forwardRef, type MouseEvent } from 'react'
import { clsx } from 'clsx'
import { Box, type BoxProps } from '@/components/atoms/box'
import { Icon } from '@/components/atoms/icon'
import * as styles from './theme-switch.css'
import { useTheme } from '@/hooks/use-theme'
import { IconMoon, IconSun } from '@sxungchxn/dev-icons'
import { m } from 'framer-motion'
import { type PolymorphicRef } from '@/types/polymorphic'

export type ThemeSwitchProps = Omit<BoxProps<'button'>, 'children'> & {
  /** theme switch size */
  size?: styles.Size
}

const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 700,
  damping: 40,
} as const

export const ThemeSwitch = forwardRef(
  (
    { className, size = 'medium', onClick, ...rest }: ThemeSwitchProps,
    ref: PolymorphicRef<'button'>,
  ) => {
    const { mode, toggle } = useTheme()

    const handleClickSwitch = (e: MouseEvent<HTMLButtonElement>) => {
      toggle()
      onClick?.(e)
    }

    return (
      <Box
        {...rest}
        as="button"
        ref={ref}
        className={clsx(className, styles.wrapper({ size, mode }))}
        onClick={handleClickSwitch}
      >
        <Icon source={IconSun} className={styles.iconLeft({ size })} />
        <Icon source={IconMoon} className={styles.iconRight({ size })} />
        <m.div layout transition={SPRING_TRANSITION} className={styles.knob({ mode, size })} />
      </Box>
    )
  },
)
