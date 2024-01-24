export type Mode = 'light' | 'dark'

const baseColors = {
  /** #FFFFFF */
  white: '#FFFFFF',
  /** #000000 */
  black: '#000000',
  /** currentColor */
  current: 'currentColor',
  /** inherit */
  inherit: 'inherit',
  /** transparent */
  transparent: 'transparent',
  /** #F0F1F8 */
  purple100: '#F0F1F8',
  /** #9FA4CD */
  purple200: '#9FA4CD',
  /** #7178B5 */
  purple300: '#7178B5',
  /** #555B93 */
  purple400: '#555B93',
  /** #464B70 */
  purple500: '#464B70',
  /** #2F3142 */
  purple600: '#2F3142',
  /** #13141E */
  purple700: '#13141E',
  /** rgba(255, 255, 255, 0.4) */
  transparentWhite: 'rgba(255, 255, 255, 0.4)',
  /** rgba(19, 20, 30, 0.25) */
  transparentGrey: 'rgba(19, 20, 30, 0.25)',
  /** rgba(0, 0, 0, 0.3) */
  shadow: 'rgba(0, 0, 0, 0.3)',
}

export const colors = {
  base: baseColors,
  light: {
    primary: baseColors.white,
    secondary: baseColors.purple100,
    textPrimary: baseColors.purple700,
    textSecondary: baseColors.purple200,
    transparent: baseColors.transparentWhite,
  },
  dark: {
    primary: baseColors.purple700,
    secondary: baseColors.purple600,
    textPrimary: baseColors.purple100,
    textSecondary: baseColors.purple300,
    transparent: baseColors.transparentGrey,
  },
}
